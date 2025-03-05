import React, { useState } from "react";
import { Link } from "react-router-dom"; // Fixed import path
import { signup } from "../API/auth";

const SignupForm = () => {
  // State for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Create formData object
  const formData = { firstName, lastName, email, password };

  // Validation function
  const validateForm = () => {
    const errors = {};
    if (!firstName) errors.firstName = "First Name is required.";
    if (!lastName) errors.lastName = "Last Name is required.";
    if (!email) errors.email = "Email is required.";
    if (!password) errors.password = "Password is required.";
    if (password !== confirmPassword)
      errors.confirmPassword = "Passwords do not match.";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Signup function
  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent form reload
    if (validateForm()) {
      try {
        const response = await signup(formData);
        console.log("Signup successful:", response.data);
        // Redirect to login or dashboard if needed
      } catch (error) {
        console.error("Signup error:", error.response?.data || error.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="bg-white rounded-lg p-2 max-w-md w-full">
        <p className="font-bold text-3xl w-lg-[420px]">
          Join our community of home seekers and explore the possibilities that
          await.
        </p>
        <p className="pt-4 pb-8">
          Let's get started by filling out the information below
        </p>

        <form onSubmit={handleSignup} className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label htmlFor="firstName" className="block">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="w-[150px] px-4 py-2 border-2 border-gray-200 rounded-md"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="block">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-[150px] px-4 py-2 border-2 border-gray-200 rounded-md"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-md"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}

          <div className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <p>
              I agree to the
              <span className="text-[#3D9970]"> Terms of Service</span> and
              <span className="text-[#3D9970]"> Privacy Policy</span>
            </p>
          </div>

          <button
            type="submit"
            className="w-full h-15 bg-[#3D9970] text-white text-xl py-2 rounded-md hover:bg-[#3D9978]"
          >
            Sign Up
          </button>

          <div className="flex items-center">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button className="w-full flex items-center justify-center border py-2 rounded-md mt-2 font-semibold text-xl">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google Logo"
              className="w-5 h-10 mr-2"
            />
            Continue with Google
          </button>

          <p className="text-center mt-4 text-gray-600">
            Already have an account?
            <Link to="/Signin" className="text-[#3D9970] font-semibold ml-2">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
