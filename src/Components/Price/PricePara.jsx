import React from "react";
import bgimage from "./bg/pricebg.jpg";
import { RiCheckDoubleFill } from "react-icons/ri";

const PricePara = () => {
  return (
    <div
      className="p-3 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="md:mx-20">
        <h1 className="text-center font-bold text-white my-4">
          Paragliding Pricing
        </h1>
        <div className="flex space-x-6">
          <div className="bg-gray-50 p-4 px-5 rounded-xl  border border-gray-300 hover:bg-yellow-100 hover:border-black hover:shadow-black/50 hover:shadow-lg">
            <p className="text-2xl font-extrabold text-center my-0">
              STANDARD TANDEM FLIGHT
            </p>
            <p className="text-center ">
              <span className="text-xl text-green-800 font-bold">NPR 6000</span>
              <span className="font-semibold">/ Per Person</span>
            </p>
            <div>
              <p className="flex justify-between font-semibold my-0">
                <span>The activity cost.</span>
                <span>
                  <RiCheckDoubleFill className="text-green-500 text-xl my-auto" />
                </span>
              </p>
              <hr />
              <p className="flex justify-between font-semibold my-0">
                <span>Two way transfer from Lakeside area.</span>
                <span>
                  <RiCheckDoubleFill className="text-green-500 text-xl my-auto" />
                </span>
              </p>
              <hr />
              <p className="flex justify-between font-semibold my-0">
                <span>Photo and video of the activity.</span>
                <span>
                  <RiCheckDoubleFill className="text-green-500 text-xl my-auto" />
                </span>
              </p>
              <hr />
              <p className="flex justify-between font-semibold my-0">
                <span>Insurance worth USD 15000.</span>
                <span>
                  <RiCheckDoubleFill className="text-green-500 text-xl my-auto" />
                </span>
              </p>
              <hr />
              <p className="flex justify-between font-semibold my-0">
                <span>All government taxes and fees.</span>
                <span>
                  <RiCheckDoubleFill className="text-green-500 text-xl my-auto" />
                </span>
              </p>
              <hr />
            </div>
            <div className="text-lg font-bold text-green-900 mx-5 text-center">
              A standard tandem flight usually lasts between 20 to 30 minutes.
            </div>
          </div>
          <div className="bg-gray-50 p-4 px-5 rounded-xl  border border-gray-300 hover:bg-yellow-100 hover:border-black hover:shadow-black/50 hover:shadow-lg">
            <p className="text-2xl font-extrabold text-center my-0">
              Cross Country Flight
            </p>
            <p className="text-center ">
              <span className="text-xl text-green-800 font-bold">
                NPR 12000
              </span>
              <span className="font-semibold">/ Per Person</span>
            </p>
            <div>
              <p className="flex justify-between font-semibold my-0">
                <span>The activity cost.</span>
                <span>
                  <RiCheckDoubleFill className="text-green-500 text-xl my-auto" />
                </span>
              </p>
              <hr />
              <p className="flex justify-between font-semibold my-0">
                <span>Two way transfer from Lakeside area.</span>
                <span>
                  <RiCheckDoubleFill className="text-green-500 text-xl my-auto" />
                </span>
              </p>
              <hr />
              <p className="flex justify-between font-semibold my-0">
                <span>Photo and video of the activity.</span>
                <span>
                  <RiCheckDoubleFill className="text-green-500 text-xl my-auto" />
                </span>
              </p>
              <hr />
              <p className="flex justify-between font-semibold my-0">
                <span>Insurance worth USD 15000.</span>
                <span>
                  <RiCheckDoubleFill className="text-green-500 text-xl my-auto" />
                </span>
              </p>
              <hr />
              <p className="flex justify-between font-semibold my-0">
                <span>All government taxes and fees.</span>
                <span>
                  <RiCheckDoubleFill className="text-green-500 text-xl my-auto" />
                </span>
              </p>
              <hr />
            </div>
            <div className="text-lg font-bold text-green-900 mx-5 text-center">
              A cross-country tandem flight, which lasts about 40 to 60 minutes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricePara;
