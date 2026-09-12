<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Statamic\Facades\Entry;
use Statamic\Facades\User;

class BookingController extends Controller
{
    public function add(Request $request)
    {
        $request->validate([
            'type' => 'required|in:tour,hotel',
            'id' => 'required',
            'persons' => 'nullable|integer|min:1|max:12',
        ]);

        $entry = Entry::find($request->string('id'));
        if (! $entry) {
            return back()->with('booking_error', 'That item could not be added to the cart.');
        }

        $persons = max(1, (int) $request->input('persons', 1));
        $price = $this->money($request->input('price', $entry->get('price')));
        $title = $request->filled('label')
            ? $entry->get('title').' — '.$request->string('label')
            : $entry->get('title');

        $image = $entry->augmentedValue('image');
        $imageUrl = is_object($image) && method_exists($image, 'url') ? $image->url() : null;

        $key = $request->string('type').':'.$entry->id().':'.Str::slug((string) $request->input('label', 'default'));

        $items = $this->items();
        $items[$key] = [
            'key' => $key,
            'type' => $request->string('type')->toString(),
            'id' => $entry->id(),
            'title' => $title,
            'url' => $entry->url(),
            'image' => $imageUrl,
            'price' => $price,
            'persons' => $persons,
            'total' => round($price * $persons, 2),
        ];

        $this->storeItems($items);

        return redirect('/booking/cart');
    }

    public function remove(Request $request)
    {
        $key = $request->string('key')->toString();
        $items = $this->items();
        unset($items[$key]);
        $this->storeItems($items);

        return redirect('/booking/cart');
    }

    public function update(Request $request)
    {
        $items = $this->items();
        foreach ((array) $request->input('persons', []) as $key => $persons) {
            if (! isset($items[$key])) {
                continue;
            }
            $persons = max(1, min(12, (int) $persons));
            $items[$key]['persons'] = $persons;
            $items[$key]['total'] = round(((float) $items[$key]['price']) * $persons, 2);
        }
        $this->storeItems($items);

        return redirect('/booking/cart');
    }

    public function contact(Request $request)
    {
        if ($this->items() === []) {
            return redirect('/booking/cart');
        }

        $data = $request->validate([
            'first_name' => 'required|string|max:120',
            'last_name' => 'required|string|max:120',
            'email' => 'required|email',
            'phone' => 'required|string|max:60',
            'address' => 'required|string|max:500',
            'travel_date' => 'required|string|max:80',
        ]);

        $cart = session('booking_cart', []);
        $cart['contact'] = $data;
        session(['booking_cart' => $cart]);

        return redirect('/booking/payment');
    }

    public function pay()
    {
        $items = array_values($this->items());
        $contact = session('booking_cart.contact', []);

        if ($items === [] || $contact === []) {
            return redirect($items === [] ? '/booking/cart' : '/booking/contact');
        }

        $total = array_sum(array_column($items, 'total'));
        $orderNo = 'JN-'.strtoupper(Str::random(6));
        $user = User::current();

        $entry = Entry::make()
            ->collection('bookings')
            ->slug(Str::slug($orderNo))
            ->date(now())
            ->data([
                'title' => $orderNo,
                'booking_status' => 'Confirm',
                'customer_email' => $contact['email'] ?? $user?->email(),
                'first_name' => $contact['first_name'] ?? '',
                'last_name' => $contact['last_name'] ?? '',
                'phone' => $contact['phone'] ?? '',
                'address' => $contact['address'] ?? '',
                'travel_date' => $contact['travel_date'] ?? '',
                'total' => number_format($total, 2, '.', ''),
                'items' => collect($items)->map(fn ($item) => [
                    'type' => $item['type'],
                    'title' => $item['title'],
                    'url' => $item['url'],
                    'persons' => (string) $item['persons'],
                    'price' => number_format((float) $item['price'], 2, '.', ''),
                    'line_total' => number_format((float) $item['total'], 2, '.', ''),
                ])->all(),
            ]);

        $entry->save();

        session([
            'last_order' => $this->present($entry),
        ]);
        session()->forget('booking_cart');

        return redirect('/booking/complete');
    }

    private function items(): array
    {
        return session('booking_cart.items', []);
    }

    private function storeItems(array $items): void
    {
        $cart = session('booking_cart', []);
        $cart['items'] = $items;
        session(['booking_cart' => $cart]);
    }

    private function money(mixed $value): float
    {
        return (float) preg_replace('/[^0-9.]/', '', (string) $value);
    }

    public static function present($entry): array
    {
        $items = collect($entry->get('items', []))->map(fn ($item) => [
            'type' => $item['type'] ?? 'Event',
            'title' => $item['title'] ?? '',
            'url' => $item['url'] ?? '#',
            'persons' => $item['persons'] ?? '1',
            'price' => $item['price'] ?? '0',
            'line_total' => $item['line_total'] ?? '0',
        ])->all();

        return [
            'title' => $entry->get('title'),
            'slug' => $entry->slug(),
            'status' => $entry->get('booking_status', $entry->get('status', 'Confirm')),
            'date' => optional($entry->date())->format('d/m/Y'),
            'customer_email' => $entry->get('customer_email'),
            'first_name' => $entry->get('first_name'),
            'last_name' => $entry->get('last_name'),
            'phone' => $entry->get('phone'),
            'address' => $entry->get('address'),
            'travel_date' => $entry->get('travel_date'),
            'total' => $entry->get('total'),
            'items' => $items,
            'first_item' => $items[0]['title'] ?? $entry->get('title'),
            'first_type' => ucfirst($items[0]['type'] ?? 'Event'),
        ];
    }
}
