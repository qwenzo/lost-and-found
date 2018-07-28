<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $fillable = [
        'Name', 'Image', 'Place','Description'
    ];
    public function owner(){
        return $this->belongsTo('App\User','user_id','id');

    }
    public function tags(){
        return $this->belongsToMany('App\Tag','items_tags','item_id','tag_id');
    }
}
