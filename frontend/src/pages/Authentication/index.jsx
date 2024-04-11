import React, { useState } from "react";
import axios from "axios";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError("");
  };

  const handleAuth = async (credentials) => {
    const endpoint = isLogin ? "/login" : "/signup";

    try {
      const response = await axios.post(
        `http://localhost:8000/api${endpoint}`,
        credentials
      );
      const { token, user } = response.data;
      console.log(response.data.data);

      console.log("Authentication successful:", token, user);
        

    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      {isLogin ? (
        <LoginForm
          onSubmit={handleAuth}
          toggleForm={toggleForm}
          error={error}
        />
      ) : (
        <SignupForm
          onSubmit={handleAuth}
          toggleForm={toggleForm}
          error={error}
        />
      )}
    </div>
  );
};

export default Authentication;
