import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../firebaseConfig.js";
import { useNavigate } from "react-router-dom";
import Header from "./../components/Header.jsx";

const LoginFormPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/activity"); // Redirect to protected page
    } catch (err) {
      setError("Error to log in. Check credentials.");
    }
  };

  return (
    <div className="bg-black">
      <Header />
      <form onSubmit={handleLogin} className="flex flex-col gap-4 p-4">
        <h2 className="text-2xl text-white">Log in</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginFormPage;