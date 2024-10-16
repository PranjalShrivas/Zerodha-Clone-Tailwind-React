import React from "react";

export const OpenAccount = () => {
  return (
    <div>
      <div className="pt-[40px] pb-[80px] flex flex-col items-center gap-3">
        <h1 className="text-[32px] font-medium  text-[#424242] mb-5">
          Open a Zerodha account
        </h1>
        <p className="text-[#666666]">
          Modern platforms and apps,₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button className="bg-[#387ed1] cursor-pointer text-white py-[8px] px-[30px] text-xl font-medium rounded mt-[25px] hover:bg-black">
          Sign up for free
        </button>
      </div>
    </div>
  );
};
