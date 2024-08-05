import React from "react";
import bgimage from "./bg/bookbg.jpg";

const BookNow = () => {
  return (
    <div className="p-3 md:px-20">
      <div
        style={{ backgroundImage: `url(${bgimage})` }}
        className="bg-no-repeat bg-cover bg-center rounded-3xl p-8 flex justify-between"
      >
        <div className="text-center flex-1">
          <p className="text-3xl text-white font-extrabold ">
            Book your seat today for paragliding.
          </p>
          <p className="text-white">Get the best deals right now.</p>
        </div>
        <div className="font-bold my-auto">
          <p className="bg-slate-50 p-3 px-4 text-black text-2xl rounded-lg cursor-pointer hover:bg-red-400  duration-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 ">
            Book Now
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
