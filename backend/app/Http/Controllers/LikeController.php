<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Validator;

class LikeController extends Controller
{
    public function like($postId)
    {
        $post = Post::findOrFail($postId);
        $user = auth()->user();

        if (!$post->likes()->where('user_id', $user->id)->exists()) {
            $post->likes()->attach($user->id);
            return response()->json(['message' => 'Liked'], 200);
        } else {
            return response()->json(['message' => 'Already liked'], 400);
        }
    }

    public function unlike($postId)
    {
        $post = Post::findOrFail($postId);
        $user = auth()->user();

        if ($post->likes()->where('user_id', $user->id)->exists()) {
            $post->likes()->detach($user->id);
            return response()->json(['message' => 'Unliked'], 200);
        } else {
            return response()->json(['message' => 'Not liked yet'], 400);
        }
    }
}