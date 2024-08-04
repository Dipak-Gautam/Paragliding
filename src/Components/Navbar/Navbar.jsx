import React from "react";

const Navbar = () => {
  return (
    <div className="bg-cyan-500">
      <div className="flex justify-between p-3  md:mx-20">
        <div>
          <img src="/Logo/logo.jpg" alt="" style={{ width: 120, height: 50 }} />
        </div>
        <div className="flex my-auto space-x-8 text-lg font-semibold text-white ">
          <div className="hover:underline hover:text-yellow-400  hover:-translate-y-1 cursor-pointer">
            Home
          </div>
          <div className="hover:underline hover:text-yellow-400 hover:-translate-y-1 cursor-pointer ">
            Blog
          </div>
          <div className="hover:underline hover:text-yellow-400  hover:-translate-y-1 cursor-pointer">
            About Us
          </div>
          <div className="hover:underline hover:text-yellow-400  hover:-translate-y-1 cursor-pointer">
            Gallary
          </div>
          <div className="hover:underline hover:text-yellow-400  hover:-translate-y-1 cursor-pointer">
            Contact us
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
