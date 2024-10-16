import React from "react";
import VarsityImg from "../assets/img/index-education.svg";

export const Varsity = () => {
  return (
    <div>
      <div className="flex flex-row mx-auto max-w-[1240px] gap-10 px-[20px] pb-[100px]">
        <div>
          <img src={VarsityImg} className="max-w-[432px]" alt="" />
        </div>
        <div className="w-[48%] flex flex-col gap-4 pl-5">
          <h1 className="text-[32px] font-medium  text-[#424242] mb-5">
            Free and open market education
          </h1>
          <div className="flex flex-col gap-5">
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <div className="text-blue-500 hover:text-[#424242] hover:cursor-pointer">
              Varsity &rarr;
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <div className="text-blue-500 hover:text-[#424242] hover:cursor-pointer">
              TradingQ&A &rarr;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
