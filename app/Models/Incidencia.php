<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Incidencia extends Model
{
    use HasFactory;

    protected $table = 'incidencias';
    protected $primaryKey = 'id';
    public $timestamps = false; // created_at, updated_at

    protected $fillable = [
        'informe',
        'solicitante',
        'celular',
        'descripcion',
        'tipoPropiedad_id',
        'tipoSoporte_id',
        'oficina_id',
        'especialista_id',
        'fechaCreacion'
    ]; // opcional

    function oficina()
    {
        return $this->belongsTo(Oficina::class, 'oficina_id');
    }
}
