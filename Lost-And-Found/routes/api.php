<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('item','ItemController');
/*
           GET|HEAD  | api/item             | item.index   | Show all items   | api
|        | POST      | api/item             | item.store   | Store Item to the data base   | api
|        | GET|HEAD  | api/item/create      | item.create  | redirect to item creation page  | api
|        | GET|HEAD  | api/item/{item}      | item.show    | show specific item    | api          |
|        | PUT|PATCH | api/item/{item}      | item.update  | Update specific item in the DataBase  | api
|        | DELETE    | api/item/{item}      | item.destroy | Delete specific item  | api
|        | GET|HEAD  | api/item/{item}/edit | item.edit    | Redirect to Edit Page    | api
*/