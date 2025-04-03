import React from "react";
import { Link, NavLink } from "react-router-dom";
import OffCanvas from "./OffCanvas/OffCanvas";

const Navbar = () => {
  return (
    <div className="bg-[#003446]">
      <div className="flex justify-between p-2 mx-3 md:mx-20">
        <NavLink to="/" className="rounded-md overflow-hidden">
          <img src="/Logo/skyView.png" className="h-20" />
        </NavLink>
        <div className="hidden md:flex my-auto space-x-8 text-lg font-semibold text-white no-underline">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-slate-400 no-underline"
                : " text-slate-50  no-underline"
            }
          >
            <div className="  hover:underline hover:text-yellow-400  hover:-translate-y-1 cursor-pointer ">
              Home
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-slate-400 no-underline"
                : " text-slate-50  no-underline"
            }
            to="/blog"
          >
            <div className="  hover:underline hover:text-yellow-400 hover:-translate-y-1 cursor-pointer ">
              Blog
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-slate-400 no-underline"
                : " text-slate-50  no-underline"
            }
            to="/about-us"
          >
            <div className="  hover:underline hover:text-yellow-400  hover:-translate-y-1 cursor-pointer">
              About Us
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-slate-400 no-underline"
                : " text-slate-50  no-underline"
            }
            to="/gallery"
          >
            <div className="   hover:underline hover:text-yellow-400  hover:-translate-y-1 cursor-pointer">
              Gallery
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-slate-400 no-underline"
                : " text-slate-50  no-underline"
            }
            to="/contact"
          >
            <div className=" hover:underline hover:text-yellow-400  hover:-translate-y-1 cursor-pointer">
              Contact Us
            </div>
          </NavLink>
        </div>
        <div className=" flex md:hidden justify-center items-center">
          <OffCanvas />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
