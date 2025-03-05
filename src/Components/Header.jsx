import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null); // No user initially
   const handleLogin = () => {
     const fakeUser = {
       name: "Aisha Cucurella",
       avatar: "https://randomuser.me/api/portraits/women/50.jpg",
     };
     setUser(fakeUser); // Simulate user login
   };

   const handleLogout = () => {
     setUser(null); // Simulate user logout
   };

  const location = useLocation(); // Get the current route
  const navigate = useNavigate();

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false); // Close menu after navigation (for mobile view)
  };

  return (
    <header className="container mx-auto px-5 py-6 bg-cover bg-center">
      <nav className="text-white flex justify-between items-center relative z-50">
        <div className="flex items-center gap-1">
          <span className="rounded-full h-8 w-8 flex items-center justify-center logobg font-extrabold">
            BH
          </span>
          <h1 className="text-xl font-bold">BetaHouse</h1>
        </div>

        <div className="hidden lg:flex gap-6 items-center">
          <Link
            to="/"
            className={`hover:text-gray-300 transition pb-1 ${
              isActive("/") ? "border-b-2 border-white" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/properties"
            className={`hover:text-gray-300 transition pb-1 ${
              isActive("/properties") ? "border-b-2 border-white" : ""
            }`}
          >
            Properties
          </Link>
          <Link
            to="/about"
            className={`hover:text-gray-300 transition pb-1 ${
              isActive("/about") ? "border-b-2 border-white" : ""
            }`}
          >
            About us
          </Link>
          <Link
            to="/blog"
            className={`hover:text-gray-300 transition pb-1 ${
              isActive("/blog") ? "border-b-2 border-white" : ""
            }`}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className={`hover:text-gray-300 transition pb-1 ${
              isActive("/contact") ? "border-b-2 border-white" : ""
            }`}
          >
            Contact Us
          </Link>
        </div>

        <div className="hidden lg:flex gap-4">
          {user ? (
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src={user.avatar}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <span>{user.name}</span>
            </div>
          ) : (
            <>
              <button
                onClick={() => handleNavigate("/signin")}
                className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-700 transition"
              >
                Log in
              </button>
              <button
                onClick={() => handleNavigate("/signup")}
                className="bg-green-500 px-4 py-2 rounded-md font-bold hover:bg-green-600 transition"
              >
                Sign up
              </button>
            </>
          )}
        </div>

        {isOpen && (
          <div className="absolute top-16 right-0 left-0 bg-gray-900 text-white flex flex-col items-center gap-4 py-5 shadow-md transition-all">
            <Link
              to="/"
              className={`hover:text-green-400 transition pb-1 ${
                isActive("/") ? "border-b-2 border-white" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/properties"
              className={`hover:text-green-400 transition pb-1 ${
                isActive("/properties") ? "border-b-2 border-white" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Properties
            </Link>
            <Link
              to="/about"
              className={`hover:text-green-400 transition pb-1 ${
                isActive("/about") ? "border-b-2 border-white" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              About us
            </Link>
            <Link
              to="/blog"
              className={`hover:text-green-400 transition pb-1 ${
                isActive("/blog") ? "border-b-2 border-white" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`hover:text-green-400 transition pb-1 ${
                isActive("/contact") ? "border-b-2 border-white" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <button
              onClick={() => handleNavigate("/signin")}
              className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-700 transition w-80"
            >
              Log in
            </button>
            <button
              onClick={() => handleNavigate("/signup")}
              className="greenbtn px-4 py-2 rounded-md font-bold transition w-80"
            >
              Sign up
            </button>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl"
        >
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
