<?php

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
public function update(Request $request)
{

$user = auth()->user();
$user->update($request->all()); 
return response()->json($user);
}
}