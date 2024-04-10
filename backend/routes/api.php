<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\FollowController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\SuggestionController;

Route::post('login', [UserController::class, 'login']);

Route::post('signup', [UserController::class, 'signup']);

Route::middleware('jwt.auth')->group(function () {
    Route::post('/edit-profile', [UserController::class, 'editProfile']);

    Route::post('/create-post', [PostController::class, 'create']);
    Route::post('/like/{postId}', [LikeController::class, 'like']);
    Route::post('/unlike/{postId}', [LikeController::class, 'unlike']);
    Route::get('/feed', [PostController::class, 'feed']);

    Route::post('/follow/{userId}', [FollowController::class, 'follow']);
    Route::post('/unfollow/{userId}', [FollowController::class, 'unfollow']);
    Route::get('/suggestions', [SuggestionController::class, 'suggestions']);

    Route::post('/comment/{postId}', [CommentController::class, 'create']);
});