<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ToDo extends Model
{
    use HasFactory;
    protected $table = 'todos';

    public function Detail()
    {
        
        return $this->hasMany(Detail::class);
    }

    public function delete()
    {
        // 関連するToDoDetailsを削除する
        $this -> Detail()->delete();

        //ToDoも削除する　元々のdeleteを残す
        parent::delete();
    }
}
