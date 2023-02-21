<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoAtencion extends Model
{
    use HasFactory;

    protected $table = 'tbl_tipos_atencion';
    protected $primaryKey = 'idtipo_atencion';
    public $timestamps = false;

    protected $fillable = ['tipo_atencion'];
}
