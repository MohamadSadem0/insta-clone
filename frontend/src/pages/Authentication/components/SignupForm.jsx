import React, { useState } from "react";

const SignupForm = ({ onSubmit, toggleForm, error }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(credentials);
  };

  return (
    <div className="flex justify-center h-auto my-10">
      <div className="max-w-md w-full mx-auto px-6 py-10 border-solid border-2 border-gray-300 rounded-md">
        <img
          src={require("../../../assets/images.png")}
          className="h-11 mt-5 ml-auto mr-auto mb-10"
          alt=""
        />
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-5">
            {" "}
            Sign Up to see photos and videos
            <div>from your friends</div>
          </h2>
          {error && <p className="text-red-500 mb-5">{error}</p>}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              placeholder="Username"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-500 text-white rounded-md py-2 px-4 w-full"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-8 text-center">
          Already have an account?{" "}
          <span className="text-blue-400 cursor-pointer" onClick={toggleForm}>
            Log in
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
