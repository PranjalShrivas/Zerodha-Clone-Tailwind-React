import React from "react";
import Ecosystem from "../assets/img/ecosystem.png";
import Press from "../assets/img/press-logos.png";

export const Trust = () => {
  return (
    <div className="pr-[20px] pl-[20px] pb-[120px]">
      <div className="md:flex justify-between max-w-[1240px] mx-auto space-x-10 p-10">
        <div>
          <h1 className="text-[32px] font-medium text-[#424242] mb-10">
            Trust with confidence
          </h1>
          <div className="max-w-[432px]">
            <h3 className="text-[20px] text-[#424242] font-medium">
              Customer-first always
            </h3>
            <p className="text-[16px] mt-[5px] mb-[32px]">
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
          </div>
          <div>
            <h3 className="text-[20px] font-medium text-[#424242] font-medium">
              No spam or gimmicks
            </h3>
            <p className="text-[16px] mt-[5px] mb-[32px]">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>
          <div>
            <h3 className="text-[20px] font-medium text-[#424242] font-medium">
              The Zerodha universe
            </h3>
            <p className="text-[16px] mt-[5px] mb-[32px]">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div>
            <h3 className="text-[20px] font-medium text-[#424242] font-medium">
              Do better with money
            </h3>
            <p className="text-[16px] mt-[5px] mb-[32px]">
              With initiatives like <span>Nudge</span> and{" "}
              <span>Kill Switch</span>, we don't just facilitate transactions,
              but actively help you do better with your money.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <img src={Ecosystem} alt="" />
          <div className="flex justify-center space-x-7">
            <div className="text-blue-500 hover:text-[#424242] hover:cursor-pointer">
              Explore our Products &rarr;
            </div>
            <div className="text-blue-500 hover:text-[#424242] hover:cursor-pointer">
              Try Kite demo &rarr;
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <img src={Press} className="mx-auto" alt="" />
      </div>
    </div>
  );
};
