<?php

namespace App\Http\Controllers;

use App\Models\Especialistas;
use App\Models\TipoAtencion;
use Illuminate\Http\Request;

class IncidenciasController extends Controller
{
    //
    function agregar()
    {
        $tiposAtencion = TipoAtencion::all();
        $especialistas = Especialistas::all();

        return response()->json([
            'content' => [
                'tiposAtencion' => $tiposAtencion,
                'especialistas' => $especialistas
            ]
        ]);
    }
}
