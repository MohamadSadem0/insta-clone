<?php

use App\Models\User;
use Illuminate\Http\Request;

class FollowController extends Controller
{
public function follow(User $user)
{
if (auth()->user()->isFollowing($user)) {
return response()->json(['message' => 'You are already following this user'], 409);
}

auth()->user()->followings()->attach($user);
return response()->json(['message' => 'Successfully followed the user']);
}

public function unfollow(User $user)
{
if (!auth()->user()->isFollowing($user)) {
return response()->json(['message' => 'You are not following this user'], 409);
}

auth()->user()->followings()->detach($user);
return response()->json(['message' => 'Successfully unfollowed the user']);
}
}