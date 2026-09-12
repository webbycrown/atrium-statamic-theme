<?php

use App\Http\Controllers\BookingController;
use Illuminate\Support\Facades\Route;

Route::post('/booking/cart/add', [BookingController::class, 'add'])->name('booking.cart.add');
Route::post('/booking/cart/remove', [BookingController::class, 'remove'])->name('booking.cart.remove');
Route::post('/booking/cart/update', [BookingController::class, 'update'])->name('booking.cart.update');
Route::post('/booking/contact', [BookingController::class, 'contact'])->name('booking.contact');
Route::post('/booking/pay', [BookingController::class, 'pay'])->name('booking.pay');
