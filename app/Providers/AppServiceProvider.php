<?php

namespace App\Providers;

use App\Http\Controllers\BookingController;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use Statamic\Facades\Entry;
use Statamic\Facades\User;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        View::composer('*', function ($view) {
            try {
                $token = csrf_token();
            } catch (\Throwable $e) {
                $token = '';
            }

            $cart = session('booking_cart', []);
            $items = array_values($cart['items'] ?? []);
            $total = array_sum(array_column($items, 'total'));

            $view->with('csrf_token', $token);
            $view->with('booking_error', session('booking_error'));
            $view->with('booking_errors', session('errors')
                ? collect(session('errors')->all())->flatten()->values()->all()
                : []);
            $view->with('booking_cart', [
                'items' => $items,
                'count' => count($items),
                'total' => $total,
                'total_formatted' => number_format($total, 2),
                'contact' => $cart['contact'] ?? [],
                'empty' => $items === [],
            ]);
            $view->with('last_order', session('last_order'));

            $user = User::current();
            $bookings = [];
            $stats = [
                'pending_total' => '0.00',
                'paid_total' => '0.00',
                'tour_count' => 0,
                'hotel_count' => 0,
                'count' => 0,
            ];

            $pending = 0.0;
            $paid = 0.0;

            if ($user) {
                $entries = Entry::query()
                    ->where('collection', 'bookings')
                    ->where('customer_email', $user->email())
                    ->orderBy('date', 'desc')
                    ->get();

                foreach ($entries as $entry) {
                    $bookings[] = BookingController::present($entry);
                }
            } elseif (is_array(session('last_order'))) {
                $bookings[] = session('last_order');
            }

            foreach ($bookings as $order) {
                $amount = (float) ($order['total'] ?? 0);
                if (($order['status'] ?? '') === 'Pending') {
                    $pending += $amount;
                } else {
                    $paid += $amount;
                }
                foreach ($order['items'] ?? [] as $item) {
                    if (($item['type'] ?? '') === 'hotel') {
                        $stats['hotel_count']++;
                    } else {
                        $stats['tour_count']++;
                    }
                }
            }

            $stats['pending_total'] = number_format($pending, 2);
            $stats['paid_total'] = number_format($paid, 2);
            $stats['count'] = count($bookings);

            $slug = request('order');
            $current = null;
            if ($slug) {
                $current = collect($bookings)->firstWhere('slug', $slug);
                $last = session('last_order');
                if (! $current && is_array($last) && ($last['slug'] ?? '') === $slug) {
                    $current = $last;
                }
            } elseif (is_array(session('last_order'))) {
                $current = session('last_order');
            } elseif ($bookings !== []) {
                $current = $bookings[0];
            }

            $view->with('my_bookings', $bookings);
            $view->with('booking_stats', $stats);
            $view->with('current_order', $current);
        });
    }
}
