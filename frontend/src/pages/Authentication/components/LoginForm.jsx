import React from "react";
import LeftImage from "../../../assets/screenshot2.png";
import InstLogo from "../../../assets/images.png";

const LoginForm = ({ signup, setSignup }) => {
  return (
    <div className=" flex justify-center h-auto my-10">
      <img className="mr-10" src={LeftImage} alt="" />
      <div className=" border-solid border-2 w-80 flex flex-col py-10 px-10">
        <img src={InstLogo} className=" h-11 mt-5 ml-5 mr-5 mb-10" alt="" />
        <input
          type="text"
          className=" border-solid border-2 h-9 mb-2 rounded w-auto py-2 px-2"
          placeholder="username"
          id=""
        />
        <input
          type="text"
          className=" border-solid border-2 h-9 py-2 px-2"
          placeholder="password"
          name=""
          id=""
        />
        <button className="bg-blue-400 rounded-md text-white mt-5 py-1">
          Log In
        </button>
        <div className="pt-8"> Don't have an account?<span><a className=" text-blue-400" onClick={()=>setSignup(!signup)} href="">Sign up</a></span></div>
      </div>
    </div>
  );
};

export default LoginForm;

//  <div className="signup-container flex row wrap">
//       <Section width={"width-50"} styling={"min-width-500"}>
//         <div className="content flex">
//           <div className="signup-block">
//             <p className="landing-title">
//               Join the biggest professional community
//             </p>
//             <div className="signup-inputs-container flex column">
//               <Input type={"auth-input border"} placeholder={"Email"} />
//               <Input
//                 type={"auth-input border"}
//                 placeholder={"Password"}
//                 input_type={"password"}
//               />

//               <Button type={"auth-button dark-bg white-txt"} text={"SIGN IN"} />
//             </div>

//             <div className="auth-switch-container flex row">
//               <p>Already have an account?</p>
//               <Button
//                 type={"auth-switch-button blue-txt white-bg"}
//                 text={"Sign In"}
//                 onClick={() => setSignup(!signup)}
//               />
//             </div>
//           </div>
//         </div>
//       </Section>
//       <Section width={"width-50"} styling={"white-bg"}>
//         <div className="content">
//           <img className="hero-image" src={image} alt={image} />
//         </div>
//       </Section>
//     </div>
