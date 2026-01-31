import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignUpClick = () => {
    navigate("/signup");
  };
  const handleLoginClick = () => {
    navigate("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Clear the form fields
    setEmail("");
    setPassword("");    
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10 ">
        <div className="flex flex-col gap-5 justify-center mt-10 shadow-xl p-10 rounded-md">
          <div className="flex justify-evenly bg-black  mb-2 p-1 rounded-md">
            <div>
              <button
                className="bg-blue-600 font-bold text-white p-2 rounded-md hover:scale-105 cursor-pointer"
                onClick={() => {
                  handleSignUpClick();
                }}
              >
                signUp
              </button>
            </div>
            <div>
              <button className="bg-gray-300 font-bold text-white p-2 rounded-md hover:scale-105 cursor-pointer">
                login
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
              <div className=" flex flex-col gap-5">
                <input
                  type="email"
                  placeholder="enter your email"
                  className="border-2 p-2 rounded-md "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="enter your password"
                  className="border-2 p-2 rounded-md "
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="bg-green-600 font-bold text-white p-2 rounded-md hover:scale-105 cursor-pointer" type="submit" onClick={()=>{
                    handleLoginClick()
                }}>
                  login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
