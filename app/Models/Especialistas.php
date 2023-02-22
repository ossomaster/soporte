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

    protected $appends = ['nombreCompleto'];

    public function getNombreCompletoAttribute()
    {
        return "{$this->nombres} {$this->ap_paterno} {$this->ap_materno}";  
    }
}
