<?php

namespace App\Http\Controllers;

use App\Models\Especialistas;
use App\Models\Incidencia;
use App\Models\TipoPropiedad;
use App\Models\Oficina;
use App\Models\TipoSoporte;
use Illuminate\Http\Request;

class IncidenciasController extends Controller
{

    function index()
    {
        $incidencias = Incidencia::with('oficina')->get();

        return response()->json([
            'content' => [
                'incidencias' => $incidencias
            ]
        ]);
    }

    function agregar()
    {
        // TODO: cambiar modelo de tipo de atención a tipo soporte
        $tiposPropiedad = TipoPropiedad::all();
        $tiposSoporte = TipoSoporte::all();
        $especialistas = Especialistas::all();
        $oficinas = Oficina::all();

        return response()->json([
            'content' => [
                'tiposPropiedad' => $tiposPropiedad,
                'tiposSoporte' => $tiposSoporte,
                'especialistas' => $especialistas,
                'oficinas' => $oficinas,
            ]
        ]);
    }

    function guardar(Request $request)
    {

        $validated = $request->validate([
            'informe' => 'required',
            'solicitante' => 'required',
            'celular' => 'required',
            'descripcion' => 'required',
            'tipoPropiedad_id' => 'required',
            'tipoSoporte_id' => 'required',
            'oficina_id' => 'required',
            'especialista_id' => 'required',
        ]);

        $incidencia = new Incidencia($validated);

        $incidencia->save();

        return response()->json(['content' => $incidencia], 201);
    }
}
