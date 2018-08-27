<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SocialAccount extends Model
{
    protected $guarded = [];

    public function getUserInformation(){
        return $this->belongsTo('App\User', 'user_id');
    }
}
