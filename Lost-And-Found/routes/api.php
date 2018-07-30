<?php

use Illuminate\Http\Request;



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::apiresource('users','UserController'); // User

Route::apiresource('items','ItemController'); //  Items
Route::apiresource('Tags','Tag'); //General Tags
Route::apiresource('Images','Image'); //general Images

Route::group(['prefix'=>'items'],function (){
    Route::apiresource('/{item}/tags','TagController'); // tags for specific item
    Route::apiresource('/{items}/images','ImageController'); // images for specific item


});

