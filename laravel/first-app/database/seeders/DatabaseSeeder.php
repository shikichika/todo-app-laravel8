<?php

namespace Database\Seeders;

use App\Models\Detail;
use App\Models\ToDo;
use Illuminate\Database\Seeder;




class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $todo = ToDo::factory()->create();
        Detail::factory(5)->create([
            'to_do_id' => $todo -> id
        ]);
    }
}
