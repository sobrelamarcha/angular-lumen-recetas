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

    public function ver($id)
    {
        $data = Receta::find($id);

        return response($data);
    }

    public function crear(Request $request){
        $receta = new Receta();

        $receta->nombre = $request->json()->get('nombre');
        
        $receta->tiempo_preparacion = date('H:i:s', strtotime($request->json()->get('tiempo_preparacion')));

        $receta->save();
        
        return response()->json('Receta creada');

    }

    public function borrar($id){
        $receta = Receta::find($id);

        $receta->delete();

        return response()->json('Receta eliminada');
    }

    //
}
