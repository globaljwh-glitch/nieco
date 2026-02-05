<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Partnership extends Model
{
    protected $fillable = [
        'name',
        'description',
        'image',
        'thumbnail',
        'url',
        'display_order',
        'status',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];
}
