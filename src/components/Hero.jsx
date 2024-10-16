import React from "react";
import landing from "../assets/img/landing.png";

export const Hero = () => {
  return (
    <div>
      <div className="max-w-[800px] flex flex-col space-y-5 items-center justify-center mx-auto mt-11 pb-32">
        <div>
          <img src={landing} className="mb-16"></img>
        </div>
        <div className="text-[#424242] font-medium text-5xl">
          Invest in everything
        </div>
        <div className="text-[#424242] text-xl mt-[10px] mb-[15px]">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </div>
        <button className="bg-[#387ed1] cursor-pointer text-white py-[8px] px-[30px] text-xl font-medium rounded mt-[25px]">
          Sign up for free
        </button>
      </div>
    </div>
  );
};
