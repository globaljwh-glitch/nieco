<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'name',
        'email',
        'country_code',
        'phone',
        'street',
        'city',
        'state',
        'zip_code',
        'country',
        'subject',
        'message',
    ];
}
