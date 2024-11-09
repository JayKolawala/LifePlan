import React, { useState } from "react";
import lockIcon from "../../Assets/lockIcon.png";
import checkIcon from "../../Assets/CheckIcon.png";
import { BiArrowBack } from "react-icons/bi";
import { FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../../CommonComponents/Header";

type ErrorType = {
  password: string;
  confirmPassword: string;
};
const SetNewPassword: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<ErrorType>({
    password: "",
    confirmPassword: "",
  });

  const validateForm = (): boolean => {
    let isValid = true;
    const newError: ErrorType = { password: "", confirmPassword: "" };

    if (!password) {
      newError.password = "Password is required";
      isValid = false;
    } else if (password.length < 8) {
      newError.password = "Password must be at least 8 characters";
      isValid = false;
    }

    if (!confirmPassword) {
      newError.confirmPassword = "Confirm password is required";
      isValid = false;
    } else if (confirmPassword !== password) {
      newError.confirmPassword = "Passwords do not match";
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
      console.log("Password:", password, "Confirm Password:", confirmPassword);
    }
  };
  return (
    <>
      <div className="h-screen">
        <Header />
        <div className="flex justify-center items-center h-[calc(100vh-72px)]">
          <div className="w-[360px] flex flex-col justify-center items-center container-mobile">
            <div className="">
              <img src={lockIcon} alt="key-icon" className="header-icon" />
            </div>
            <div className="text-center">
              <h1 className="inter-6 text-3xl pb-3 font-semibold">
                Set new password
              </h1>
              <p className="inter-4 text-sm text-gray-600">
                Your new password must be different to previously used
                passwords.
              </p>
            </div>

            <div className="w-full mt-8">
              <div>
                <label htmlFor="password" className="label-text">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className={`input-field w-full px-4 py-2 border rounded-md focus:outline-none 
                    ${
                      error.password
                        ? "error"
                        : "border-gray-300 focus:ring-purple-300 "
                    }`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {error.password && (
                    <FaExclamationCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500" />
                  )}
                </div>
                {error.password && (
                  <p className="text-red-500 text-sm mt-1">{error.password}</p>
                )}
              </div>

              <div className="my-5">
                <label htmlFor="confirmPassword" className="label-text">
                  Confirm password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Enter your password"
                    // className="input-field pt-[6px]"
                    className={`input-field w-full px-4 py-2 border rounded-md focus:outline-none 
                    ${
                      error.password
                        ? "error"
                        : "border-gray-300 focus:ring-purple-300 "
                    }`}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {error.confirmPassword && (
                    <FaExclamationCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500" />
                  )}
                </div>
                {error.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {error.confirmPassword}
                  </p>
                )}
              </div>

              <div>
                <div className="flex gap-2">
                  <img src={checkIcon} alt="checkIcon" className="h-5 w-5" />
                  <p className="inter-4 text-sm text-gray-600">
                    Must be at least 8 characters
                  </p>
                </div>
                <div className="flex gap-2 mt-3">
                  <img src={checkIcon} alt="checkIcon" className="h-5 w-5" />
                  <p className="inter-4 text-sm text-gray-600">
                    Must contain one special character
                  </p>
                </div>
              </div>

              <div className="mt-6 w-full">
                <button
                  className="w-full bg-[#6f42c1] font-semibold text-base inter-6 text-white py-2.5 rounded-lg hover:bg-[#5b3a99] transition duration-300 ease-in-out"
                  onClick={handleSubmit}
                >
                  Reset password
                </button>
              </div>
            </div>

            <Link to="/">
              <div className="flex gap-2 justify-center cursor-pointer mt-8">
                <div className="">
                  <BiArrowBack className="h-5 w-5 text-gray-600" />
                </div>
                <div className="inter-6 text-sm text-gray-600">
                  Back to log in
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetNewPassword;
