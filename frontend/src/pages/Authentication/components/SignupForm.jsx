import React, { useState } from "react";

const SignupForm = ({ onSubmit, toggleForm, error }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(credentials);
  };

  return (
    <div className="flex justify-center h-auto my-10">
      <div className="border-solid border-2 w-80 flex flex-col py-10 px-10">
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              className="border-solid border-2 h-9 mb-2 rounded w-auto py-2 px-2"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="border-solid border-2 h-9 py-2 px-2"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-400 rounded-md text-white mt-5 py-1"
          >
            Sign Up
          </button>
        </form>
        <div className="pt-8">
          Already have an account?{" "}
          <span>
            <a className="text-blue-400" onClick={toggleForm} href="#">
              Log in
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
