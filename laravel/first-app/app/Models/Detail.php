<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detail extends Model
{
    use HasFactory;
    protected $table = 'details';

    public function toDo()
    {
        #Modelクラスに他のテーブルとの関係性をかく
        return $this->belongsTo(ToDo::class);
    }

    #true false を1, 0にして返す
    public function getIsCompletedAttribute($value)
    {
        return $value ==1;
    }
}
