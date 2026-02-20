<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Product extends Model
{
    protected $fillable = [
        'title',
        'description',
        'image',
        'thumbnail',
        'category_id',
        'other',
        'external_url',
        'external_url_label',
        'status',
        'display_order',
        'packing',
        'is_featured',
    ];

    protected $casts = [
        'status' => 'boolean',
        'is_featured' => 'boolean',
    ];

    protected static function boot()
    {
        parent::boot();

        static::saving(function ($product) {
            if (empty($product->slug)) {
                $slug = \Illuminate\Support\Str::slug($product->title);
                $originalSlug = $slug;
                $count = 1;

                while (self::where('slug', $slug)
                    ->where('id', '!=', $product->id)
                    ->exists()) {
                    $slug = $originalSlug . '-' . $count++;
                }

                $product->slug = $slug;
            }
        });
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function specifications()
    {
        return $this->hasMany(ProductSpecification::class)
                    ->orderBy('display_order');
    }

    public function information()
    {
        return $this->hasMany(ProductInformation::class)
                    ->orderBy('display_order');
    }

    public function physicalChemicalCharacteristics()
    {
        return $this->hasMany(
            ProductPhysicalChemicalCharacteristic::class
        )->orderBy('display_order');
    }

}
