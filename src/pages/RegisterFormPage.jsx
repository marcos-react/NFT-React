import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../firebaseConfig.js";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header.jsx";

const RegisterFormPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/nft"); // Redirect to the protected site
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("This e-mail is not register.");
      } else {
        setError("Error to register. Try it again.");
      }
    }
  };

  return (
    <div className="bg-black">
      <Header />
      <form onSubmit={handleRegister} className="flex flex-col gap-4 p-4">
        <h2 className="text-2xl text-white">Register</h2>
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
        <button type="submit" className="bg-green-500 text-white p-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterFormPage;