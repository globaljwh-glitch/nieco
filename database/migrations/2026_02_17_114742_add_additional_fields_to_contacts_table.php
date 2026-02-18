<?php 

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('contacts', function (Blueprint $table) {

            $table->string('last_name')
                  ->nullable()
                  ->after('name');

            $table->string('company_name')
                  ->nullable()
                  ->after('phone');

            $table->text('interested_in')
                  ->nullable()
                  ->after('message');

            $table->string('use_of_product')
                  ->nullable()
                  ->after('interested_in');

            $table->text('final_application')
                  ->nullable()
                  ->after('use_of_product');
        });
    }
    public function down(): void
    {
        Schema::table('contacts', function (Blueprint $table) {
            $table->dropColumn([
                'last_name',
                'company_name',
                'interested_in',
                'use_of_product',
                'final_application',
            ]);
        });
    }
};
