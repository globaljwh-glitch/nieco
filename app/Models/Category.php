<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

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
}
