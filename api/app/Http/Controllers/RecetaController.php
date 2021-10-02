<?php

namespace App\Http\Controllers;

use App\Models\Receta;
use Illuminate\Http\Request;

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

    public function crear(Request $request){
        $receta = new Receta();

        $receta->nombre = $request->json()->get('nombre');
        
        $receta->tiempo_preparacion = date('H:i:s', strtotime('1:30')); //TODO: de momento está hardcodeado

        $receta->save();
        
        return response()->json('Receta creada');

    }

    //
}
