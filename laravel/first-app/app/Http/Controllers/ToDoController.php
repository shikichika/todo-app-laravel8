<?php

namespace App\Http\Controllers;

use App\Http\Requests\ToDo\StoreRequest;
use App\Http\Requests\ToDo\UpdateRequest;
use Illuminate\Http\Request;
use App\Models\ToDo;

class ToDoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //ToDoを取得する
        $toDos = ToDo::with('Detail')->get();

        //取得したToDoを返却する
        return $toDos;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRequest $request)
    {
        //新規のToDoモデルを作成する
        $toDo = new ToDo();

        //TitleをToDoモデルに設定する
        $toDo -> title = $request->get('title');

        // DBにデータを登録する
        $toDo->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request, $id)
    {
        #Update
        $toDo = ToDo::find($id);
        $toDo->title = $request->get('title');
        $toDo->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        #Delete
        $toDo = ToDo::find($id);
        #Delete
        $toDo->delete();
    }
}
