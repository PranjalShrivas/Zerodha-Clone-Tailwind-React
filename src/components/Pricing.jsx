import React from "react";
import Price0 from "../assets/img/pricing-eq.svg";
import Price20 from "../assets/img/other-trades.svg";

export const Pricing = () => {
  return (
    <div>
      <div className="max-w-[1240px] mx-auto px-[20px] pb-[120px] md:flex flex-row">
        <div className="w-2/5">
          <h1 className="text-[32px] font-medium  text-[#424242] mb-10">
            Unbeatable pricing
          </h1>
          <p className="text-[16px] mt-[5px] mb-[32px]">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <div className="text-blue-500 hover:text-[#424242] hover:cursor-pointer">
            See pricing &rarr;
          </div>
        </div>
        <div className="w-3/5 md:flex flex-row gap-4 justify-between">
          <div className="flex items-center justify-center">
            <img src={Price0} className="w-[100px]" alt="" />
            <p className="text-[10px] text-center text-[#424242]">
              Free account
              <br /> opening
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src={Price0} className="w-[100px]" alt="" />
            <p className="text-[10px] text-center text-[#424242]">
              Free equite delivery
              <br /> and direct mutual funds
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src={Price20} className="w-[100px]" alt="" />
            <p className="text-[10px] text-center text-[#424242]">
              Intraday and
              <br /> F&O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
