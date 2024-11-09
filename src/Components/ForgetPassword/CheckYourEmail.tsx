import React from "react";
import msgicon from "../../Assets/msg-icon.png";
import "./ForgetPassword.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { on } from "events";
import Header from "../../CommonComponents/Header";

const CheckYourEmail: React.FC = () => {
  const Navigate = useNavigate();

  const handleOpenEmail = () => {
    Navigate("/SetNewPassword");
  };
  return (
    <>
      <div className="h-screen">
        <Header />
        <div className="flex justify-center items-center h-[calc(100vh-300px)] lg:h-[calc(100vh-72px)] px-2">
          <div className="w-[360px] flex flex-col justify-center items-center">
            <div className="">
              <img src={msgicon} alt="key-icon" className="header-icon" />
            </div>
            <div className="text-center">
              <h1 className="inter-6 text-3xl pb-3 font-semibold">
                Check your email
              </h1>
              <p className="font-normal text-base text-gray-600">
                We sent a password reset link to{" "}
              </p>
              <p className="font-medium text-base text-gray-600">
                {" "}
                olivia@untitledui.com
              </p>
            </div>
            <div className="mt-8 w-full">
              <button
                className="w-full bg-[#6f42c1] font-semibold text-base inter-6 text-white py-2.5 rounded-lg hover:bg-[#5b3a99] transition duration-300 ease-in-out"
                onClick={handleOpenEmail}
              >
                Open email app
              </button>
            </div>
            <div className="w-full flex justify-evenly py-8">
              <div className="inter-4 text-sm text-gray-600">
                Didn’t receive the email?
              </div>
              <div className="inter-6 text-sm text-purple-700 cursor-pointer">
                Click to resend
              </div>
            </div>
            <Link to="/">
              <div className="flex gap-2 justify-center cursor-pointer">
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

export default CheckYourEmail;
