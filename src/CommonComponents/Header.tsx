import React from "react";
import logo from "../Assets/Logo.png";
import dropDownIcon from "../Assets/chevron-down.png";
import menu from "../Assets/Nav-menu-button.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <div className="w-full h-20 bg-[#FFFFFF] border-b-[1px]  header-desktop  md:block hidden">
        <div className="flex justify-between px-20 py-[18px]">
          <div className="flex items-center gap-10">
            <div className="cursor-pointer">
              <img src={logo} alt="logo" className="w-[151px] h-8" />
            </div>
            <div className="flex gap-8 cursor-pointer">
              <div className="flex gap-2">
                <span>Solutions</span>
                <img src={dropDownIcon} alt="Drop Down" />
              </div>
              <div>Blog</div>
              <div>Pricing</div>
            </div>
          </div>
          <div className="flex">
            <div className=" pr-3">
              <Link to={"/"} >
                <button
                  className="min-w-24 font-semibold text-base inter-6 text-gray-600 py-2.5 rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                  Log in
                </button>
              </Link>
            </div>
            <div>
              <Link to={'/SignUp'}>
              <button
                className="min-w-24 bg-[#6f42c1] font-semibold text-base inter-6 text-white py-2.5 rounded-lg hover:bg-[#5b3a99] transition duration-300 ease-in-out"
                // onClick={handleSubmit}
              >
                Sign up
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="header-mobile block md:hidden">
        <div className="flex justify-between px-4 py-4">
          <img src={logo} alt="logo" className="w-[151px] h-8" />

          <img src={menu} alt="menu" />
        </div>
      </div>
    </>
  );
};

export default Header;
