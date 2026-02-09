<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'event_name',
        'description',
        'event_date',
        'image',
        'thumbnail',
        'url',
        'display_order',
        'status',
    ];

    protected $casts = [
        'event_date' => 'date',
        'status' => 'boolean',
    ];
}
