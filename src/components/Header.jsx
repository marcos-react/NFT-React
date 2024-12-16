import React from "react";

export default function Header() {
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
          <a href="#" className="hover:text-primary">
            Home
          </a>
          <a href="#" className="hover:text-primary">
            Explore
          </a>
          <a href="#" className="hover:text-primary">
            Activity
          </a>
          <a href="#" className="hover:text-primary">
            Register
          </a>
          <a href="#" className="hover:text-primary">
            Sign in
          </a>
        </nav>
        <button className="btn btn-primary">
          Connect Wallet
        </button>
      </div>
    </header>
  );
}
