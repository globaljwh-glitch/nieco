<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\ContactController as AdminContactController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TechnicalServiceController;
use App\Http\Controllers\PartnershipController;
use App\Http\Controllers\HomeSectionController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\CareerController;

Route::get('/api/email-test', [ContactController::class, 'testEmail']);
Route::get('/categories', [CategoryController::class, 'menuList']);
Route::get('/search-products', [ProductController::class, 'search']);
Route::post('/jobs/{id}/apply', [CareerController::class, 'apply']);
Route::get('/jobs/{id}', [CareerController::class, 'showApi']);
Route::get('/jobs', [CareerController::class, 'apiIndex']);
Route::get('/front/category/{slug}', [CategoryController::class, 'frontShow']);
Route::get('/front/product/{slug}', [ProductController::class, 'frontShow']);
//Route::get('/front/product/{id}', [ProductController::class, 'frontShow']);
//Route::get('/front/category/{id}', [CategoryController::class, 'frontShow']);
Route::post('/api/contact-submit', [ContactController::class, 'store']);
Route::get('/front/banner', [HomeSectionController::class, 'frontBanner']);
Route::get('/front/who-we-are', [HomeSectionController::class, 'frontWhoWeAre']);
Route::get('/front/strategic', [HomeSectionController::class, 'frontStrategic']);
Route::get('/front/footer', [HomeSectionController::class, 'frontFooter']);
Route::get('/front/countries', [HomeSectionController::class, 'frontCountries']);
Route::get('/front/industries', [HomeSectionController::class, 'frontIndustries']);

Route::prefix('admin')->middleware(['auth'])->group(function () {
    Route::resource('careers', CareerController::class);
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
    Route::get('/contacts', [AdminContactController::class, 'index'])->name('contacts.index');
    Route::get('/contacts/{contact}', [AdminContactController::class, 'show'])->name('contacts.show');
    Route::resource('settings', SettingController::class);

});

// Frontend API
Route::get('/home-content', [HomeSectionController::class, 'frontIndex']);
Route::get('/partners', [PartnershipController::class, 'frontIndex']);
Route::get('/technical', [TechnicalServiceController::class, 'frontIndex']);
Route::get('/events-data', [EventController::class, 'eventPage']);
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
