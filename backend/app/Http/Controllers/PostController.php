<?php

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
public function store(Request $request)
{
$post = auth()->user()->posts()->create($request->all()); 
return response()->json($post, 201);
}

public function index()
{

$posts = Post::whereIn('user_id', auth()->user()->followings()->pluck('id'))->get();
return response()->json($posts);
}
}