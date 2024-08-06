import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const CallUs = () => {
  return (
    <div className="p-3 md:mx-20 my-8">
      <div className="flex hover:shadow-lg hover:shadow-black/50 ">
        <div className="bg-gray-200 py-6 w-[45%] px-20 flex flex-col justify-center">
          <p className="text-blue-500 text-lg">what can we do for you?</p>
          <p className="text-black text-5xl font-semibold">Call Us Now</p>
          <p className="text-black text-2xl font-semibold">
            Don't hesited to contact us
          </p>
          <div className="space-y-5 py-3">
            <div className="flex space-x-4">
              <div className="my-auto">
                <FaMapLocationDot className="text-cyan-600 text-4xl " />
              </div>
              <div>
                <p className="mb-1 font-sans font-semibold">Main location</p>
                <p className="mb-0 font-sans font-semibold text-gray-500 text-sm">
                  Pokhara, Nepal
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="my-auto">
                <FaPhone className="text-cyan-600 text-3xl ml-1 " />
              </div>
              <div>
                <p className="mb-1 font-sans font-semibold">Phone Number</p>
                <p className="mb-0 font-sans font-semibold text-gray-500 text-sm">
                  +977 9800000000
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="my-auto">
                <IoMail className="text-cyan-600 text-4xl  " />
              </div>
              <div>
                <p className="mb-1 font-sans font-semibold">Email Address</p>
                <p className="mb-0 font-sans font-semibold text-gray-500 text-sm">
                  Your@mail.com
                </p>
              </div>
            </div>
          </div>
          <div className="my-3">
            <p className="bg-blue-500 inline-block py-2 px-4 text-white font-semibold">
              Let's Talk
            </p>
          </div>
        </div>
        <div>
          <img src="assets/contactus.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CallUs;
