import React from "react";

const SigninForm = () => {
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
          />
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
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-gray-700">
              Remember Me
            </label>
          </div>
          <a href="#" className="text-red-500 text-sm">
            Forgot Password
          </a>
        </div>

        <button className="w-full h-[50px] bg-[#3D9970] text-white font-bold py-2 rounded-md hover:bg-[#3D9970] transition">
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
