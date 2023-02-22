<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Oficina extends Model
{
    use HasFactory;

    protected $table = 'oficinas';
    protected $primaryKey = 'id';
    public $timestamps = false; // created_at, updated_at

    protected $fillable = ['nombre']; // opcional
}
