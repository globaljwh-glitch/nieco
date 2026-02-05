<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TechnicalService extends Model
{
    protected $fillable = [
        'name',
        'description',
        'image',
        'thumbnail',
        'extra_data',
        'display_order',
        'status',
    ];

    protected $casts = [
        'extra_data' => 'array',
        'status' => 'boolean',
    ];
}
