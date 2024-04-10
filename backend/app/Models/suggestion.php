<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Suggestion extends Model
{
    protected $fillable = ['user_id', 'suggestion_user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function suggestionUser()
    {
        return $this->belongsTo(User::class, 'suggestion_user_id');
    }
}