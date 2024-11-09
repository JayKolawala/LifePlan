import React from "react";
import "./ForgetPassword.css";
import keyIcon from "../../Assets/Featured icon.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import CheckYourEmail from "./CheckYourEmail";
import Header from "../../CommonComponents/Header";

const ForgetPassword: React.FC = () => {
  return (
    <>
      <div className="h-screen">
        <Header />
        <div className="flex justify-center items-center h-[calc(100vh-300px)] lg:h-[calc(100vh-72px)]">
          <div className="header-container">
            <img src={keyIcon} alt="key-icon" className="header-icon" />
            <div className="text-center">
              <h1 className="header-text-header">Forgot password?</h1>
              <p className="header-text">
                No worries, we’ll send you reset instructions.
              </p>
            </div>
            <form className="form-container">
              <label htmlFor="email" className="label-text">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="input-field pt-[6px]"
              />
              <Link to="/CheckYourEmail" className="reset-button mt-6">
                Reset password
              </Link>
            </form>
            <Link to="/" className="back-link">
              <BiArrowBack className="back-arrow-icon" />
              Back to log in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
