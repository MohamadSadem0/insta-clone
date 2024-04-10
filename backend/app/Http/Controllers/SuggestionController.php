<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class SuggestionController extends Controller
{
    public function suggestions()
    {
        $user = auth()->user();
        $followingIds = $user->follows()->pluck('following_id');
        $suggestions = User::whereIn('id', $followingIds)
                        ->whereNotIn('id', [$user->id])
                        ->whereNotIn('id', function($query) use($user, $followingIds) {
                            $query->select('following_id')
                                ->from('follows')
                                ->whereIn('follower_id', $followingIds)
                                ->whereNotIn('following_id', [$user->id])
                                ->distinct();
                        })
                        ->inRandomOrder()
                        ->take(10)
                        ->get();
        return response()->json($suggestions, 200);
    }
}