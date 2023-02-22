<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoPropiedad extends Model
{
    use HasFactory;

    protected $table = 'tipos_propiedad';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = ['nombre'];
}
