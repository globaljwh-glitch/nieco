<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Category extends Model
{
    use SoftDeletes;
    
    protected $fillable = [
        'name',
        'description',
        'image',
        'thumbnail',
        'detail_image_one',
        'detail_image_two',
        'detail_content',
        'products_section_title',
        'products_section_description',
        'status',
        'is_featured',
        'display_order',
    ];

    protected $casts = [
        'status' => 'boolean',
        'is_featured' => 'boolean',
    ];

    protected static function boot()
    {
        parent::boot();

        static::saving(function ($category) {

            if (empty($category->slug)) {

                $slug = Str::slug($category->name);
                $originalSlug = $slug;
                $count = 1;

                while (self::where('slug', $slug)
                    ->where('id', '!=', $category->id)
                    ->exists()) {

                    $slug = $originalSlug . '-' . $count++;
                }

                $category->slug = $slug;
            }
        });
    }

}
