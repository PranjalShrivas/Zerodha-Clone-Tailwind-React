import React, { useState } from "react";
import Logo from "../assets/img/logo.svg";
import { IoIosMenu } from "react-icons/io";

export const Header = () => {
  return (
    <div className="sticky top-0 z-50  shadow bg-white ">
      <div className="max-w-[1240px] flex justify-between py-5 px-3 mx-auto">
        <div>
          <img src={Logo} className="h-[20px]" alt="" />
        </div>
        <div className=" flex justify-between space-x-20 text-[#666666] text-base">
          <div className="hover:text-[rgb(26,122,232)] hover:cursor-pointer hidden md:block">
            Signup
          </div>
          <div className="hover:text-[rgb(26,122,232)] hover:cursor-pointer hidden md:block">
            About
          </div>
          <div className="hover:text-[rgb(26,122,232)] hover:cursor-pointer hidden md:block">
            Products
          </div>
          <div className="hover:text-[rgb(26,122,232)] hover:cursor-pointer hidden md:block">
            Pricing
          </div>
          <div className="hover:text-[rgb(26,122,232)] hover:cursor-pointer hidden md:block">
            Support
          </div>

          <div className="hover:cursor-pointer">
            <IoIosMenu size={26} />
          </div>
        </div>
      </div>
    </div>
  );
};
