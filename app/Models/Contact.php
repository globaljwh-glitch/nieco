<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'name',
        'last_name',
        'email',
        'phone',
        'company_name',
        'street',
        'city',
        'state',
        'zip_code',
        'country',
        'interested_in',
        'use_of_product',
        'final_application',
    ];

}
