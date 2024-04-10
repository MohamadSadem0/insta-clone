<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Validator;

class FollowController extends Controller
{
    public function follow($userId)
    {
        $userToFollow = User::findOrFail($userId);
        $user = auth()->user();

        if (!$user->follows()->where('following_id', $userId)->exists()) {
            $user->follows()->attach($userId);
            return response()->json(['message' => 'Followed'], 200);
        } else {
            return response()->json(['message' => 'Already following'], 400);
        }
    }

    public function unfollow($userId)
    {
        $userToUnfollow = User::findOrFail($userId);
        $user = auth()->user();

        if ($user->follows()->where('following_id', $userId)->exists()) {
            $user->follows()->detach($userId);
            return response()->json(['message' => 'Unfollowed'], 200);
        } else {
            return response()->json(['message' => 'Not following yet'], 400);
        }
    }

    public function suggestions()
    {
        $user = auth()->user();
        $followingIds = $user->follows()->pluck('following_id');
        $suggestions = User::whereNotIn('id', $followingIds)->whereNotIn('id', [$user->id])->inRandomOrder()->take(10)->get();
        return response()->json($suggestions, 200);
    }
}