import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signin } from "../API/auth";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate()

  const formData = { email, password };

  // Validation function
  const validateForm = () => {
    const errors = {};
    if (!email) errors.email = "Email is required.";
    if (!password) errors.password = "Password is required.";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Signin function
  const handleSignin = async () => {
    try {
      const response = await signin(formData);
      console.log("Signin successful:", response.data);
      navigate("/")
    } catch (error) {
      console.error("Signin error:", error.response?.data || error.message);
    }
  };

  // Form submit handler
  const handleSubmit = () => {
    if (validateForm()) {
      handleSignin();
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white px-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <p className="font-bold text-2xl pb-2">Welcome Back to BetaHouse!</p>
        <p className="text-gray-600 pb-5 text-sm">
          Let's get started by filling out the information below
        </p>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">
            Email
          </label>
          <input
            placeholder="Enter your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="password">
            Password
          </label>
          <input
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-gray-700">
              Remember Me
            </label>
          </div>
          <a href="#" className="text-red-500 text-sm">
            Forgot Password?
          </a>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full h-[50px] bg-[#3D9970] text-white font-bold py-2 rounded-md hover:bg-[#3D9970] transition"
        >
          Sign in
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button className="w-full flex justify-center items-center border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google logo"
            className="w-5 h-10 mr-2"
          />
          Continue with Google
        </button>

        <p className="text-center text-gray-600 mt-4">
          New User?
          <Link to="/Signup" className="text-[#3D9970] font-semibold ml-2">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninForm;
