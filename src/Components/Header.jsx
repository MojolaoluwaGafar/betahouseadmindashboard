import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import  AuthContext  from "../context/AuthContext"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext); // Access user and logout from context
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
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
          {["/", "/properties", "/about", "/blog", "/contact"].map((path, idx) => (
            <Link
              key={idx}
              to={path}
              className={`hover:text-gray-300 transition pb-1 ${
                isActive(path) ? "border-b-2 border-white" : ""
              }`}
            >
              {path === "/" ? "Home" : path.slice(1).replace("-", " ")}
            </Link>
          ))}
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
              <button
                onClick={logout}
                className="text-red-500 border px-2 py-1 rounded-md"
              >
                Logout
              </button>
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
