import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./components/LoginForm"

const Authentication = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [credentials, setCredential] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const baseURL="http://localhost:8000/api"

  useEffect(() => {
    if (!credentials.email.includes("@")) {
      setError("invalid email");
    } else if (!credentials.password.length < 1) {
      setError("inalid password");
    } else {
      setError("");
    }
  }, [credentials]);

  useEffect(()=>{},[])

  return <div className="">
    <Login></Login>
  </div>;
};

export default Authentication;
