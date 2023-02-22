<?php

namespace App\Http\Controllers;

use App\Models\Especialistas;
use App\Models\TipoAtencion;
use App\Models\NombreOficina;
use Illuminate\Http\Request;

class IncidenciasController extends Controller
{
    //
    function agregar()
    {
        $tiposAtencion = TipoAtencion::all();
        $especialistas = Especialistas::all();
        $nombreoficina = NombreOficina::all();
    

        return response()->json([
            'content' => [
                'tiposAtencion' => $tiposAtencion,
                'especialistas' => $especialistas,
                'nombreoficina' => $nombreoficina,
                
                
            ]
        ]);
    }
}
