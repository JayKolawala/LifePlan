import React, { useState } from "react";
import "./Login.css";
import Dashboard_image from "../../Assets/Dashboard.png";
import logo from "../../Assets/Logo.png";
import stars from "../../Assets/Stars.png";
import arrow from "../../Assets/Hand-drawn-arrow.png";
import avatars from "../../Assets/Avatar-group.png";
import { FcGoogle } from "react-icons/fc";
import { FiMail } from "react-icons/fi";
import { FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

type ErrorType = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<ErrorType>({ email: "", password: "" });

  const validateForm = (): boolean => {
    let isValid = true;
    const newError: ErrorType = { email: "", password: "" };

    if (!email) {
      newError.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newError.email = "Email is invalid";
      isValid = false;
    }

    if (!password) {
      newError.password = "Password is required";
      isValid = false;
    } else if (password.length < 8) {
      newError.password = "Password must be at least 8 characters";
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Email:", email, "Password:", password);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 min-h-screen items-start login-desktop">
        {/* Left Side */}
        <div className="min-h-screen flex flex-col items-center p-4 bg-white !justify-between ">
          <div className="w-full">
            <img src={logo} alt="logo" className=" self-start" />
          </div>

          <div className="justify-center">
            <div className="items-start ">
              <h1 className="inter-6 text-3xl pb-3 font-semibold">Log in</h1>
              <p className="inter-4 text-gray-500 mb-6">
                Welcome back! Please enter your details.
              </p>
            </div>

            <div className="items-start">
              <div className="">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`input-field w-full px-4 py-2 border rounded-md focus:outline-none 
            ${error.email ? "error" : "border-gray-300 focus:ring-purple-300"}`}
                  />
                  {error.email && (
                    <FaExclamationCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500" />
                  )}
                </div>
                {error.email && <p className="text-red-500">{error.email}</p>}
              </div>

              <div className="">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`input-field w-full px-4 py-2 border rounded-md focus:outline-none 
            ${
              error.password
                ? "error"
                : "border-gray-300 focus:ring-purple-300 "
            }`}
                  />
                  {error.password && (
                    <FaExclamationCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500" />
                  )}
                </div>

                {error.password && (
                  <p className="text-red-500">{error.password}</p>
                )}
              </div>

              <div className="flex !justify-between w-full mb-6 pt-2">
                <label className=" text-sm text-gray-700">
                  <input type="checkbox" className="mr-2" />
                  Remember for 30 days
                </label>

                <Link
                  to="../ForgetPassword"
                  className="text-sm text-purple-800 hover:underline "
                >
                  Forgot password
                </Link>
              </div>

              <div>
                <button className="custom-signin-button" onClick={handleSubmit}>
                  Sign in
                </button>
              </div>

              <div className="pt-4 relative">
                <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md font-semibold hover:bg-gray-100">
                  <FcGoogle className="mr-2" size={25} />
                  <span>Sign in with Google</span>
                </button>

                {/* <img
                  src={arrow}
                  alt="arrow"
                  className="h-[158px] w-full object-cover absolute top-[15px] right-[-255px]"
                /> */}
              </div>

              <div className="mt-8 text-sm text-gray-500 text-center ">
                Don't have an account?{" "}
                
                <Link
                  to="/SignUp"
                  className="text-purple-800 hover:underline"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>

          <div className="flex !justify-between w-full items-center text-gray-400 text-xs p-4 ">
            <div>© LifePlanner 2023</div>
            <div className="flex items-center space-x-1">
              <FiMail className="text-gray-400" />
              <span>help@lifeplanner.com</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200 ">
          <div className="mt-10 px-[94px] w-full">
            <img
              src={Dashboard_image}
              alt="Dashboard"
              className="w-full h-[230px] "
            />
          </div>

          <div className="mt-[46px] px-16">
            <div className="">
              <img src={stars} alt="star" />
            </div>

            <div className="pt-4">
              <h1 className="text-5xl font-bold text-gray-800 ">
                Make your life more easier.
              </h1>
            </div>

            <div className="pt-5 text-gray-700 text-lg inter-5">
              Create a free account and get full access to all features for
              30-days. No credit card needed. Get started in 2 minutes.
            </div>
          </div>

          <div className="pt-8 self-start flex px-16 ">
            <div className="">
              <img src={avatars} alt="avatars" />
            </div>
            <div className="pl-4">
              <div className="space-x-2">
                <span className="text-yellow-500">⭐</span>
                <span className="text-yellow-500">⭐</span>
                <span className="text-yellow-500">⭐</span>
                <span className="text-yellow-500">⭐</span>
                <span className="text-yellow-500">⭐</span>
                <span className="text-gray-800 text-sm">5.0</span>
              </div>
              <div>
                <span className="text-gray-500 text-sm">from 200+ reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="login-mobile flex items-center justify-center min-h-screen">
        <div className="bg-white login-mobile px-4 rounded-lg w-full pt-12">
          <div className="">
            <img src={logo} alt="Logo" className="w-32" />
          </div>

          <div className="pt-6">
            <h1 className="text-3xl font-bold mb-2">Log in</h1>
            <p className="text-gray-500">
              Welcome back! Please enter your details.
            </p>
          </div>
        </div>

        <div className="pt-8 px-4">
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`input-field w-full px-4 py-2 border rounded-md focus:outline-none ${
                error.email ? "error" : "border-gray-300 focus:ring-purple-300"
              }`}
            />
            {error.email && (
              <FaExclamationCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500" />
            )}
            {error.email && <p className="text-red-500">{error.email}</p>}
          </div>

          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`input-field w-full px-4 py-2 border rounded-md focus:outline-none ${
                error.password
                  ? "error"
                  : "border-gray-300 focus:ring-purple-300"
              }`}
            />
            {error.password && (
              <FaExclamationCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500" />
            )}
            {error.password && <p className="text-red-500">{error.password}</p>}
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm text-gray-700">
              <input type="checkbox" className="mr-2" />
              Remember for 30 days
            </label>
            <Link
              to="../ForgetPassword"
              className="text-sm text-purple-800 hover:underline "
            >
              Forgot password
            </Link>
          </div>

          <button
            className="custom-signin-button w-full py-2 mb-4 bg-purple-700 text-white rounded-md font-semibold hover:bg-purple-800"
            onClick={handleSubmit}
          >
            Sign in
          </button>

          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md font-semibold hover:bg-gray-100">
            <FcGoogle className="mr-2" size={25} />
            <span>Sign in with Google</span>
          </button>

          <div className="mt-6 text-sm text-gray-500 text-center">
            Don't have an account?{" "}
            <a href="#" className="text-purple-800 hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
