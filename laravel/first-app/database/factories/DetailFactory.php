<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Detail;

class DetailFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */

    protected $model = Detail::class;

    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'is_completed'=> $this->faker->boolean(),
        ];
    }
}
