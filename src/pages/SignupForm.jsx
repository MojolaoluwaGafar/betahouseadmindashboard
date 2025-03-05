import React from "react";
import { Link } from "react-router";

const SignupForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="bg-white rounded-lg p-2 max-w-md w-full">
        <p className="font-bold text-3xl w-lg-[420px]">
          Join our community of home seekers and explore the possibilities that
          await.
        </p>
        <p className="pt-4 pb-8">
          Lets get started by filling out the information below
        </p>

        <form className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label htmlFor="name" className="block">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="w-[150px] px-4 py-2 border-2 border-gray-200 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="name" className="block">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-[150px] px-4 py-2 border-2 border-gray-200 rounded-md"
              />
            </div>
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-md"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-md"
          />

          <div className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <p>
              I agree to the
              <span className="text-[#3D9970]">Terms of Service</span> and
              <span className="text-[#3D9970]">Privacy Policy</span>
            </p>
          </div>

          <button className="w-full h-15 bg-[#3D9970] text-white text-xl py-2 rounded-md hover:bg-[#3D9978]">
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
            <Link to="/Signin" className="text-[#3D9970] font-semibold">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
