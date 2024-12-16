import React from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-3xl mb-4">You need to authenticate</h1>
      <div className="flex gap-4">
        <button onClick={handleLogin} className="bg-blue-500 p-2 rounded">
          Log In
        </button>
        <button onClick={handleRegister} className="bg-green-500 p-2 rounded">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default AuthPage;