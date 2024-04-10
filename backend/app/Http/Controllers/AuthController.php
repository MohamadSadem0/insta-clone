<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
public function register(Request $request)
{

$validatedData = $request->validate([
'name' => 'required|string|max:255',
'email' => 'required|string|email|max:255|unique:users',
'password' => 'required|string|min:8',
]);


$user = User::create([
'username' => $validatedData['name'],
'email' => $validatedData['email'],
'password' => Hash::make($validatedData['password']),
]);


$token = JWTAuth::fromUser($user);

return response()->json(compact('user','token'),201);
}

public function login(Request $request)
{

$credentials = $request->validate([
'email' => 'required|email',
'password' => 'required',
]);

if (!$token = auth()->attempt($credentials)) {
return response()->json(['error' => 'Unauthorized'], 401);
}

return $this->respondWithToken($token);
}

protected function respondWithToken($token)
{
return response()->json([
'access_token' => $token,
'token_type' => 'bearer',
'expires_in' => auth()->factory()->getTTL() * 60
]);
}

public function me()
{
return response()->json(auth()->user());
}
}