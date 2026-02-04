<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductInformation extends Model
{
    protected $fillable = [
        'product_id',
        'key',
        'value',
        'status',
        'display_order',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
