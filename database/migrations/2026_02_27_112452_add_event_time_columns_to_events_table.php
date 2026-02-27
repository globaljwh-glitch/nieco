<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('events', function (Blueprint $table) {
            $table->date('event_end_date')
                  ->nullable()
                  ->after('event_date');

            $table->time('event_start_time')
                  ->nullable()
                  ->after('event_end_date');

            $table->time('event_end_time')
                  ->nullable()
                  ->after('event_start_time');
        });
    }

    public function down(): void
    {
        Schema::table('events', function (Blueprint $table) {
            $table->dropColumn([
                'event_end_date',
                'event_start_time',
                'event_end_time'
            ]);
        });
    }
};