import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const navItems = [
  
    { name: "Login", path: "/login" },
    { name: "SignUp", path: "/register" },
  ];

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (onSearch) {
      onSearch(term); // Call parent function to filter products
    }
  };

  return (
    <header className="bg-white shadow-sm w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center gap-4">
        {/* Brand */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 whitespace-nowrap"
        >
          🛒 Bharat Pokhari Stores
        </Link>

        {/* Search bar */}
        <div className="flex-grow max-w-md mx-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

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
