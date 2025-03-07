import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import AuthContext from "../context/AuthContext.jsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      console.log("User in Header:", user);
    }
  }, [user]);


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

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:hidden absolute top-full left-0 w-full bg-gray-800 py-4 z-40`}
        >
          <div className="flex flex-col items-center gap-4">
            {["/", "/properties", "/about", "/blog", "/contact"].map(
              (path, idx) => (
                <Link
                  key={idx}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`text-white hover:text-gray-300 transition pb-1 ${
                    isActive(path) ? "border-b-2 border-white" : ""
                  }`}
                >
                  {path === "/" ? "Home" : path.slice(1).replace("-", " ")}
                </Link>
              )
            )}
            {user ? (
              <div className="flex flex-col items-center gap-2">
                <img
                  src={user.avatar || "/default-avatar.png"} // Use a default avatar if none is set
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span>{`${user.firstName} ${user.lastName}`}</span>

                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="text-red-500"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => handleNavigate("/Signin")}
                  className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-700 transition"
                >
                  Log in
                </button>
                <button
                  onClick={() => handleNavigate("/Signup")}
                  className="bg-green-500 px-4 py-2 rounded-md font-bold hover:bg-green-600 transition"
                >
                  Sign up
                </button>
              </>
            )}
          </div>
        </div>

        <div className="hidden lg:flex gap-6 items-center">
          {["/", "/properties", "/about", "/blog", "/contact"].map(
            (path, idx) => (
              <Link
                key={idx}
                to={path}
                className={`hover:text-gray-300 transition pb-1 ${
                  isActive(path) ? "border-b-2 border-white" : ""
                }`}
              >
                {path === "/" ? "Home" : path.slice(1).replace("-", " ")}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex gap-4">
          {user ? (
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src={user.avatar || "/default-avatar.png"} // Use a default avatar if none is set
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <span>{`${user.firstName} ${user.lastName}`}</span>

              <button onClick={logout} className="ml-2 text-red-500">
                Logout
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => handleNavigate("/Signin")}
                className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-700 transition"
              >
                Log in
              </button>
              <button
                onClick={() => handleNavigate("/Signup")}
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
