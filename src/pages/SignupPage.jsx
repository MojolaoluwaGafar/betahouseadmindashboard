import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import bgImage from "../assets/13625 1.png";

const SignupPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Wait for 5 seconds, then navigate to the actual signup form
    const timer = setTimeout(() => {
      navigate("/signup-form"); // Change this to your actual signup form route
    }, 1500);

    return () => clearTimeout(timer); // Cleanup function
  }, [navigate]);

  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
    >
      <div className="flex items-center py-3 px-4 bg-opacity-50">
        <span className="text-white rounded-full h-10 w-10 flex items-center justify-center logobg font-extrabold text-lg">
          BH
        </span>
        <h1 className="text-2xl font-bold text-white ml-2">BetaHouse</h1>
      </div>
    </div>
  );
};

export default SignupPage;
