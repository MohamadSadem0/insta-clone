<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\FollowController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:api')->group(function () {
Route::get('/me', [AuthController::class, 'me']);
Route::put('/user', [UserController::class, 'update']);
Route::post('/post', [PostController::class, 'store']);
Route::get('/posts', [PostController::class, 'index']);
Route::post('/follow/{user}', [FollowController::class, 'follow']);
Route::delete('/unfollow/{user}', [FollowController::class, 'unfollow']);
});