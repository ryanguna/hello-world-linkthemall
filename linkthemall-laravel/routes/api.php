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





Route::group(['middleware' => 'auth:api'], function(){
    Route::resource('user', 'UserController');
});


Route::group([
    'namespace' => 'Auth',
    'middleware' => 'api',
    'prefix' => 'password'
], function () {
    Route::post('create', 'PasswordResetController@create');
    Route::get('find/{token}', 'PasswordResetController@find');
    Route::post('reset', 'PasswordResetController@reset');
});



Route::post('login', 'AuthController@login');
Route::post('signUp', 'AuthController@signUp');

//Route::post('password/email', 'Auth\ForgotPasswordController@getResetToken');
//Route::post('password/reset', 'Auth\ResetPasswordController@reset');

//Route::post('googleLogin', 'AuthController@googleLogin');
//Route::get('googleLoginCallback', 'AuthController@googleLoginCallback');
