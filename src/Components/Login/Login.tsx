import React, { useState } from "react";
import "./Login.css";
import Dashboard_image from "../../Assets/Dashboard.png";
import logo from "../../Assets/Logo.png";
import { FcGoogle } from "react-icons/fc";
import { FiMail } from "react-icons/fi";
import { FaExclamationCircle } from "react-icons/fa";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  const validateForm = () => {
    let isValid = true;
    const newError = { email: "", password: "" };

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(email, password);
    }
  };

  return (
    <>
      <div className="flex h-screen bg-white">
        <div className="flex-1 flex flex-col p-6">
          <div className="mb-8">
            <img src={logo} alt="Logo" className="w-32" />
          </div>

          <div className="flex justify-center align-center items-center p-10">
            <div className="flex flex-col h-full">
              <h1 className="text-3xl font-bold mb-2">Log in</h1>
              <p className="text-gray-500 mb-6">
                Welcome back! Please enter your details.
              </p>
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
                  className={`input-field w-full px-4 py-2 border rounded-md focus:outline-none 
        ${error.email ? "error" : "border-gray-300 focus:ring-purple-300"}`}
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
                  className={`input-field w-full px-4 py-2 border rounded-md focus:outline-none 
        ${error.password ? "error" : "border-gray-300 focus:ring-purple-300"}`}
                />
                {error.password && (
                  <FaExclamationCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500" />
                )}{" "}
                {error.password && (
                  <p className="text-red-500">{error.password}</p>
                )}
              </div>

              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center text-sm text-gray-700">
                  <input type="checkbox" className="mr-2" />
                  Remember for 30 days
                </label>
                <a href="#" className="text-sm text-purple-800 hover:underline">
                  Forgot password
                </a>
              </div>
              <button className="custom-signin-button" onClick={handleSubmit}>
                Sign in
              </button>

              <button className="w-full mt-4 flex items-center justify-center border border-gray-300 py-2 rounded-md font-semibold hover:bg-gray-100">
                <FcGoogle className="mr-2" size={25} />
                <span>Sign in with Google</span>
              </button>
              <div className="mt-6 text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="text-purple-800 hover:underline pr-3 pl-3"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-auto text-gray-400 text-xs text-center">
            <div>© LifePlanner 2023 </div>
            <div className="flex items-center space-x-1">
              <FiMail className="text-gray-400" />
              <span>help@lifeplanner.com</span>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-gray-50 flex items-center justify-center p-8">
          <div className="flex flex-col">
            <div className="flex items-center justify-center">
              <img
                src={Dashboard_image}
                alt="Dashboard"
                className="w-full max-w-md mb-8"
              />
            </div>

            <div className="pl-8">
              <h1 className="text-5xl font-bold text-gray-800 mb-4">
                Make your life more easier.
              </h1>
            </div>

            <div className="pl-8">
              <p className="text-gray-500 mb-4">
                Create a free account and get full access to all features for 30
                days. No credit card needed. Get started in 2 minutes.
              </p>
            </div>

            <div className="pl-8">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-500">⭐</span>
                <span className="text-yellow-500">⭐</span>
                <span className="text-yellow-500">⭐</span>
                <span className="text-yellow-500">⭐</span>
                <span className="text-yellow-500">⭐</span>
              </div>
              <div>
                <span className="text-gray-500 text-sm">
                  5.0 from 200+ reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
