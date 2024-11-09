import React from "react";
import CheckBorderedIcon from "../../Assets/CheckBorderedIcon.png";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Header from "../../CommonComponents/Header";

const PasswordReset: React.FC = () => {
  return (
    <>
      <div className="h-screen">
        <Header />
        <div className="flex justify-center items-center h-[calc(100vh-300px)] lg:h-[calc(100vh-72px)]">
          <div className="w-[360px] flex flex-col justify-center items-center">
            <div className="pb-6">
              <img src={CheckBorderedIcon} alt="Check Icon" />
            </div>
            <div className="text-center">
              <h1 className="inter-6 text-3xl pb-3 font-semibold">
                Password reset
              </h1>
              <p className="inter-4 text-base text-gray-600">
                Your password has been successfully reset. Click below to log in
                magically.
              </p>
            </div>

            <div className="py-8 w-full">
              <button
                className="w-full bg-[#6f42c1] font-semibold text-base inter-6 text-white py-2.5 rounded-lg hover:bg-[#5b3a99] transition duration-300 ease-in-out"
                // onClick={handleSubmit}
              >
                Continue
              </button>
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

export default PasswordReset;
