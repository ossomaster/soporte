<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NombreOficina extends Model
{
    use HasFactory;

    protected $table = 'tbl_datos_impresoras';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = ['dependeincia_oficina'];
}
