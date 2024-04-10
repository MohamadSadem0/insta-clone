<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Validator;

class PostController extends Controller
{
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image' => 'required|string',
            'caption' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $post = new Post();
        $post->user_id = auth()->user()->id;
        $post->image = $request->image;
        $post->caption = $request->caption;
        $post->save();

        return response()->json($post, 201);
    }

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

    public function feed()
    {
        $followingIds = auth()->user()->follows()->pluck('following_id');
        $posts = Post::whereIn('user_id', $followingIds)->latest()->get();
        return response()->json($posts, 200);
    }
}