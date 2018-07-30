<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    public function items(){
       return $this->belongsToMany('App\Tag','items_tags','tag_id','item_id');

    }

    //
}
