<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('home_sections', function (Blueprint $table) {
            $table->id();

            // Unique identifier like: banner, who_we_are, strategic_block
            $table->string('section_key')->unique();

            $table->string('title')->nullable();
            $table->string('subtitle')->nullable();

            // For long text content
            $table->longText('content')->nullable();

            // Store only filename or storage path
            $table->json('images')->nullable();

            $table->boolean('status')->default(1);

            // For ordering sections if needed
            $table->integer('display_order')->default(0);

            $table->timestamps();

            // Optional index for performance
            $table->index('status');
            $table->index('display_order');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('home_sections');
    }
};
