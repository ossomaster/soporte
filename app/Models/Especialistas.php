<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Especialistas extends Model
{
    use HasFactory;

    protected $table = 'especialistas';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = ['nombres', 'ap_paterno', 'ap_materno', 'documento', 'email', 'telefono', 'direccion', 'fecha_nacimiento', 'total_informes', 'fecha'];
    protected $appends = ['nombreCompleto'];

    public function getNombreCompletoAttribute()
    {
        return "{$this->nombres} {$this->ap_paterno} {$this->ap_materno}";
    }
}
