import React from "react";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
const Footer = () => {
  return (
    <div className="bg-[#003446] px-2 md:px-20 py-5">
      <div className="flex justify-around">
        <div>
          <div className=" rounded-md overflow-hidden  mb-2 flex justify-center items-center w-full">
            <img
              src="Logo/skyView.png"
              alt=""
              className="w-28  md:w-52 mx-auto"
            />
          </div>
          <p className="text-white text-sm w-48 font-semibold text-justify">
            There are many variations of passages of the majority have suffered
            going to use you need to be sure there sure.
          </p>
          <div className="flex text-xl md:text-3xl">
            <CiFacebook className="text-white hover:text-blue-400 cursor-pointer " />
            <CiInstagram className="text-white hover:text-blue-400 cursor-pointer " />
            <CiTwitter className="text-white hover:text-blue-400 cursor-pointer " />
          </div>
        </div>
        <div className="text-white space-y-3">
          <div className=" text-lg md:text-xl font-bold">Company</div>
          <div className=" text-xs md:text-sm font-semibold space-y-2">
            <p className="mb-0 hover:text-blue-500 cursor-pointer">
              Help Center
            </p>
            <p className="mb-0 hover:text-blue-500 cursor-pointer">
              Redeem Voucher
            </p>
            <p className="mb-0 hover:text-blue-500 cursor-pointer">Contact</p>
            <p className="mb-0 hover:text-blue-500 cursor-pointer">
              Report Abuse
            </p>
            <p className="mb-0 hover:text-blue-500 cursor-pointer">
              Submit a Dispute
            </p>
          </div>
        </div>
        <div className="text-white space-y-3 hidden md:flex">
          <div className="text-xl font-bold ">Useful Links</div>
          <div className=" text-sm font-semibold space-y-2">
            <p className="mb-0 hover:text-blue-500 cursor-pointer">
              Product Support
            </p>
            <p className="mb-0 hover:text-blue-500 cursor-pointer">Checkout</p>
            <p className="mb-0 hover:text-blue-500 cursor-pointer">
              License Policy
            </p>
            <p className="mb-0 hover:text-blue-500 cursor-pointer">Affiliate</p>
            <p className="mb-0 hover:text-blue-500 cursor-pointer">Locality</p>
          </div>
        </div>
        <div className="text-white space-y-3 hidden md:flex">
          <div className="text-white space-y-3">
            <div className="text-xl font-bold">Industries</div>
            <div className=" text-sm font-semibold space-y-2">
              <p className="mb-0 hover:text-blue-500 cursor-pointer">
                Product Support
              </p>
              <p className="mb-0 hover:text-blue-500 cursor-pointer">
                Checkout
              </p>
              <p className="mb-0 hover:text-blue-500 cursor-pointer">
                License Policy
              </p>
              <p className="mb-0 hover:text-blue-500 cursor-pointer">
                Affiliate
              </p>
              <p className="mb-0 hover:text-blue-500 cursor-pointer">
                Locality
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-b border-white mt-4  mb-3 mx-10 md:mx-20 " />
      <div className="text-white text-sm font-sans font-semibold mx-10 md:mx-20">
        © 2024 - All Rights Reserved | Created By Dipak gautam
      </div>
    </div>
  );
};

export default Footer;
