import React from "react";
import Section from "../utilities/Section";
import Input from "../utilities/Input";
import Button from "../utilities/Button";
import { useNavigate } from "react-router-dom";

const SignupForm = ({
  email,
  setEmail,
  password,
  setPassword,
  error,
  setError,
  signup,
  setSignup,
  login,
}) => {
  const navigate = useNavigate();
  return (
    <Section width={"width-25"}>
      <div className="content flex">
        <div className="login-block border round-edges flex column">
          <p className="auth-title">Sign In</p>
          <p>Stay updated on your professional world</p>
          <div className="login-inputs-container flex column">
            <Input
              type={"auth-input border"}
              placeholder={"Email"}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              type={"auth-input border"}
              placeholder={"Password"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              input_type={"password"}
            />
            <p className="red-text">{error ? error : ""}</p>
          </div>
          <Button
            type={"auth-button dark-bg white-txt"}
            text={"Sign In"}
            onClick={async () => {
              try {
                const user = await login(email, password);
                localStorage.clear();
                localStorage.setItem("token", user.token);
                localStorage.setItem("id", user.user._id);
                setError();
                navigate("/home");
              } catch (error) {
                console.log(error.response.data);
                setError(error.response.data);
              }
            }}
          />
          <div className="auth-switch-container flex row">
            <p>Don't have an account?</p>
            <Button
              type={"auth-switch-button blue-txt white-bg"}
              text={"Sign Up"}
              onClick={() => setSignup(!signup)}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SignupForm;
