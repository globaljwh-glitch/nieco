<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TechnicalServiceController;
use App\Http\Controllers\PartnershipController;
use App\Http\Controllers\HomeSectionController;
use App\Http\Controllers\EventController;

Route::get('/front/banner', [HomeSectionController::class, 'frontBanner']);
Route::get('/front/who-we-are', [HomeSectionController::class, 'frontWhoWeAre']);
Route::get('/front/strategic', [HomeSectionController::class, 'frontStrategic']);
Route::get('/front/footer', [HomeSectionController::class, 'frontFooter']);
Route::get('/front/countries', [HomeSectionController::class, 'frontCountries']);
Route::get('/front/industries', [HomeSectionController::class, 'frontIndustries']);

Route::prefix('admin')->middleware(['auth'])->group(function () {
    Route::resource('products', ProductController::class);
    Route::resource('categories', CategoryController::class)->except(['show']);
    Route::resource('home-sections', HomeSectionController::class)
        ->except(['show', 'destroy']);
    Route::resource('events', EventController::class)
        ->except(['show']);
    Route::resource('partnerships', PartnershipController::class)
        ->except(['show']);
    Route::resource('technical-services', TechnicalServiceController::class)
        ->except(['show']);
    Route::get('/contacts', [ContactController::class, 'index'])->name('contacts.index');
    Route::get('/contacts/{contact}', [ContactController::class, 'show'])->name('contacts.show');
    Route::resource('settings', SettingController::class);

});

// Frontend API
Route::get('/home-content', [HomeSectionController::class, 'frontIndex']);
Route::get('/partners', [PartnershipController::class, 'frontIndex']);
Route::get('/front-categories', [CategoryController::class, 'frontIndex']);
Route::get('/front-products', [ProductController::class, 'frontIndex']);

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('admin')->middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


// Route::get('/{any}', function () {
//     return view('home');
// })->where('any', '.*');
// Route::get('/{any}', function () {
//     return view('home'); // Blade with <div id="app">
// })->where('any', '^(?!admin).*$');

Route::get('/{any}', function () {
    return view('home');
})->where('any', '^(?!admin|login|register|password|dashboard|profile).*$');


require __DIR__.'/auth.php';
