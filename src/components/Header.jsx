import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./../Context/AuthContext";

export default function Header() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleWelcome = () => {
    navigate("/");
  };

  const handleActivity = () => {
    navigate("/activity");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <header className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold">DOGE MARKET</div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search items here..."
            className="input input-bordered w-64"
          />
        </div>
        <nav className="flex items-center space-x-6">
          <button onClick={handleWelcome} className="hover:text-primary">
            Home
          </button>
          <a href="#" className="hover:text-primary">
            Explore
          </a>
          <button onClick={handleActivity} className="hover:text-primary">
            Activity
          </button>
          {user ? (
            <button onClick={handleLogout} className="hover:text-secondary">
              Log out
            </button>
          ) : (
            <>
              <button onClick={handleLogin} className="hover:text-primary">
                Log in
              </button>

              <button onClick={handleRegister} className="hover:text-primary">
                Sign up
              </button>
            </>
          )}
        </nav>
        <button className="btn btn-primary">Connect Wallet</button>
      </div>
    </header>
  );
}
