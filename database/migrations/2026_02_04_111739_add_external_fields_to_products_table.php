<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->text('other')->nullable()->after('category_id');
            $table->string('external_url')->nullable()->after('other');
            $table->string('external_url_label')->nullable()->after('external_url');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn([
                'other',
                'external_url',
                'external_url_label',
            ]);
        });
    }
};
