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
        Schema::create('technical_services', function (Blueprint $table) {
            $table->id();

            $table->string('name')->index();
            $table->text('description')->nullable();

            $table->string('image')->nullable();
            $table->string('thumbnail')->nullable();

            $table->json('extra_data')->nullable();

            $table->unsignedInteger('display_order')->default(0)->index();
            $table->boolean('status')->default(true)->index();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('technical_services');
    }
};
