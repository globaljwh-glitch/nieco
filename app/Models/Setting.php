<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = [
        'key',
        'value',
        'status',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    /**
     * Helper to fetch setting value by key
     */
    public static function getValue(string $key, $default = null)
    {
        return static::where('key', $key)
            ->where('status', true)
            ->value('value') ?? $default;
    }
}
