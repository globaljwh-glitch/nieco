<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'event_name',
        'description',
        'event_date',
        'event_end_date',
        'event_start_time',
        'event_end_time',
        'image',
        'thumbnail',
        'url',
        'display_order',
        'status',
    ];

    protected $casts = [
        'event_date' => 'date',
        'event_end_date' => 'date',
        'status' => 'boolean',
    ];
}
