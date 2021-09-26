<?php

namespace App\Http\Controllers;

use App\Models\Receta;

class RecetaController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function index()
    {
        $data = Receta::all();
        return response($data);
    }

    //
}
