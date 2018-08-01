<?php

use Illuminate\Http\Request;



Route::group([

    'prefix' => 'auth'

], function () {

    Route::post('/login', 'AuthController@login');
    Route::post('/logout', 'AuthController@logout');
    Route::post('/refresh', 'AuthController@refresh');
    Route::post('/me', 'AuthController@me');

});


Route::apiresource('users','UserController'); // User

Route::apiresource('items','ItemController'); //  Items
Route::apiresource('tags','Tag'); //General Tags
Route::apiresource('images','Image'); //general Images

Route::group(['prefix'=>'items'],function (){
    Route::apiresource('/{item}/tags','TagController'); // tags for specific item
    Route::apiresource('/{item}/images','ImageController'); // images for specific item


});

