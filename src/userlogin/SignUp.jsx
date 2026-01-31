import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/login");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setName("");
    

    const formData = {
      name,
      email,
      password,
    };

    

    console.log("Signup Data:", formData);
    
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="flex flex-col gap-5 justify-center mt-10 shadow-xl p-10 rounded-md">

        {/* Tabs */}
        <div className="flex justify-evenly bg-black  mb-2 p-1 rounded-md">
          <button className="bg-blue-600 font-bold text-white p-2 rounded-md">
            SignUp
          </button>

          <button
            className="bg-gray-300 font-bold text-white p-2 rounded-md"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Enter your name"
            className="border-2 p-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="border-2 p-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="border-2 p-2 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-green-600 font-bold text-white p-2 rounded-md hover:scale-105 cursor-pointer"
            onClick={()=>{
                handleSignUpClick()
            }} >
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
