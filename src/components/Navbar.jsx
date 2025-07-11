import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];

  return (
    <header className="bg-white shadow-sm w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          🛒 Bharat Pokhari Stores
        </Link>

        {/* Navigation Links */}
        <nav className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium hover:text-blue-600 transition ${
                location.pathname === item.path
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
