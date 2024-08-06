import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#003446]">
      <div className="flex justify-between p-3  md:mx-20">
        <div>
          <img src="/Logo/logo.jpg" alt="" style={{ width: 120, height: 50 }} />
        </div>
        <div className="flex my-auto space-x-8 text-lg font-semibold text-white ">
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
          <Link className="no-underline" to="/aboutus">
            <div className=" text-slate-50 hover:underline hover:text-yellow-400  hover:-translate-y-1 cursor-pointer">
              About Us
            </div>
          </Link>
          <Link className="no-underline" to="/gallary">
            <div className=" text-slate-50  hover:underline hover:text-yellow-400  hover:-translate-y-1 cursor-pointer">
              Gallary
            </div>
          </Link>
          <Link className="no-underline" to="/contact">
            <div className=" text-slate-50 hover:underline hover:text-yellow-400  hover:-translate-y-1 cursor-pointer">
              Contact us
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
