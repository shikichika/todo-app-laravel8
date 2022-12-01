<?php

namespace App\Http\Requests\Detail;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
   

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'to_do_id' => 'required|exists:todos',
            'name' => 'required|string',
        ];
    }
}
