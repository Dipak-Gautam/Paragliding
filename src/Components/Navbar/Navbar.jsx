import React from "react";
import { Link } from "react-router-dom";
import OffCanvas from "./OffCanvas/OffCanvas";

const Navbar = () => {
  return (
    <div className="bg-[#003446]">
      <div className="flex justify-between p-2 mx-3 md:mx-20">
        <div className="rounded-md overflow-hidden">
          <img src="/Logo/skyView.png" className="h-20" />
        </div>
        <div className="hidden md:flex my-auto space-x-8 text-lg font-semibold text-white ">
          <Link className="no-underline" to="/">
            <div className=" text-slate-50 hover:underline hover:text-yellow-400  hover:-translate-y-1 cursor-pointer">
              Home
            </div>
          </Link>
          <Link className="no-underline" to="/blog">
            <div className=" text-slate-50 hover:underline hover:text-yellow-400 hover:-translate-y-1 cursor-pointer ">
              Blog
            </div>
          </Link>
          <Link className="no-underline" to="/about-us">
            <div className=" text-slate-50 hover:underline hover:text-yellow-400  hover:-translate-y-1 cursor-pointer">
              About Us
            </div>
          </Link>
          <Link className="no-underline" to="/gallery">
            <div className=" text-slate-50  hover:underline hover:text-yellow-400  hover:-translate-y-1 cursor-pointer">
              Gallery
            </div>
          </Link>
          <Link className="no-underline" to="/contact">
            <div className=" text-slate-50 hover:underline hover:text-yellow-400  hover:-translate-y-1 cursor-pointer">
              Contact us
            </div>
          </Link>
        </div>
        <div className=" flex md:hidden justify-center items-center">
          <OffCanvas />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
