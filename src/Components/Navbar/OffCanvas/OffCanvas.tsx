import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

const OffCanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <GiHamburgerMenu
          className="text-white"
          size={25}
          onClick={() => handleShow()}
        />
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        style={{
          width: 300,
        }}
      >
        <div className="bg-[#003446] w-full h-full p-3">
          <div className="flex justify-between items-center pb-4 mb-4 border-b border-white">
            <div className="rounded-md overflow-hidden">
              <img src="/Logo/skyView.png" className="h-14" />
            </div>
            <div>
              <IoCloseSharp
                className="text-white text-3xl"
                onClick={handleClose}
              />
            </div>
          </div>

          <div className=" my-auto space-x-8 text-sm font-semibold text-white ">
            <NavLink className="no-underline" to="/">
              <div className=" text-slate-50 hover:underline hover:text-yellow-400  hover:-translate-y-1 cursor-pointer">
                Home
              </div>
            </NavLink>
            <NavLink className="no-underline" to="/blog">
              <div className=" text-slate-50 hover:underline hover:text-yellow-400 hover:-translate-y-1 cursor-pointer ">
                Blog
              </div>
            </NavLink>
            <NavLink className="no-underline" to="/about-us">
              <div className=" text-slate-50 hover:underline hover:text-yellow-400  hover:-translate-y-1 cursor-pointer">
                About Us
              </div>
            </NavLink>
            <NavLink className="no-underline" to="/gallery">
              <div className=" text-slate-50  hover:underline hover:text-yellow-400  hover:-translate-y-1 cursor-pointer">
                Gallery
              </div>
            </NavLink>
            <NavLink className="no-underline" to="/contact">
              <div className=" text-slate-50 hover:underline hover:text-yellow-400  hover:-translate-y-1 cursor-pointer">
                Contact us
              </div>
            </NavLink>
          </div>
        </div>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
