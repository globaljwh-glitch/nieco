<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HomeSection extends Model
{
    protected $fillable = [
        'section_key',
        'title',
        'subtitle',
        'content',
        'images',
        'status',
        'display_order',
    ];

    protected $casts = [
        'images' => 'array',
        'status' => 'boolean',
    ];
}
