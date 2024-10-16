import React from "react";
import Logo from "../assets/img/logo.svg";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-[#FBFBFB]">
      <div className="grid grid-cols-4 gap-4 max-w-[1240px] mx-auto  py-[30px]  text-base text-[#424242]">
        <div className="max-w-[100%] px-4">
          <img src={Logo} className="h-[20px]" alt="" />
          <p className="text-[12.8px]">© 2010 - 2024, Zerodha Broking Ltd.</p>
          <p className="text-[12.8px]"> All rights reserved.</p>
          <div className="flex flex-row gap-2 py-4">
            <FaXTwitter />
            <FaFacebook />
            <FaInstagram />
            <FaLinkedinIn />
          </div>

          <hr />
          <div className="flex flex-row gap-2 py-4">
            <FaYoutube />
            <FaWhatsapp />
            <FaTelegram />
          </div>
        </div>
        <div>
          <h3 className="font-medium text-[18px] pb-[15px]">Company</h3>
          <ul className="font-medium text-[#666] flex flex-col gap-1">
            <li>About</li>
            <li>Products</li>
            <li>Pricing</li>
            <li>Referral programme</li>
            <li>Careers</li>
            <li>Zerodha.tech</li>
            <li>Press & media</li>
            <li>Zerodha Cares(CSR)</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-[18px] pb-[15px]">Support</h3>
          <ul className="font-medium text-[#666] flex flex-col gap-1">
            <li>Contact us</li>
            <li>Support portal</li>
            <li>Z-Connect blog</li>
            <li>List of charges</li>
            <li>Downloads & resources</li>
            <li>Videos</li>
            <li>Market overview</li>
            <li>How to file a complaint?</li>
            <li>Status of your complaints</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-[18px] pb-[15px]">Account</h3>
          <ul className="font-medium text-[#666] flex flex-col gap-1">
            <li>Open an account</li>
            <li>Fund transfer</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
