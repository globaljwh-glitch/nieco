<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('categories', function (Blueprint $table) {

            $table->string('detail_image_one')->nullable();
            $table->string('detail_image_two')->nullable();

            $table->longText('detail_content')->nullable();

            $table->string('products_section_title')->nullable();
            $table->longText('products_section_description')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('categories', function (Blueprint $table) {

            $table->dropColumn([
                'detail_image_one',
                'detail_image_two',
                'detail_content',
                'products_section_title',
                'products_section_description'
            ]);
        });
    }
};
