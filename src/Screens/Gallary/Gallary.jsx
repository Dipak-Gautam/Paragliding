import React from "react";

const Gallary = () => {
  return (
    <div className="p-3 md:mx-20">
      <div>
        <h1 className="my-3">Our Gallery</h1>
        <div className="flex justify-between my-4 ">
          <div className="w-[41%] rounded-3xl overflow-hidden ">
            <img
              src="Gallary/row11.jpg"
              alt=""
              style={{ width: 600, height: 450 }}
            />
          </div>
          <div className="w-[57%] rounded-3xl overflow-hidden border ">
            <img
              src="Gallary/row12.jpg"
              alt=""
              style={{ height: 450, width: 800 }}
            />
          </div>
        </div>
        <div className="flex justify-between my-4">
          <div className="w-[57%] rounded-3xl overflow-hidden border ">
            <img
              src="Gallary/row21.jpg"
              alt=""
              style={{ height: 450, width: 800 }}
            />
          </div>
          <div className="w-[41%] rounded-3xl overflow-hidden ">
            <img
              src="Gallary/row22.jpg"
              alt=""
              style={{ width: 600, height: 450 }}
            />
          </div>
        </div>
        <div className="flex justify-between my-4 ">
          <div className="w-[41%] rounded-3xl overflow-hidden ">
            <img
              src="Gallary/row31.jpg"
              alt=""
              style={{ width: 600, height: 450 }}
            />
          </div>
          <div className="w-[57%] rounded-3xl overflow-hidden border ">
            <img
              src="Gallary/row32.jpg"
              alt=""
              style={{ height: 450, width: 800 }}
            />
          </div>
        </div>
        <div className="flex justify-between my-4">
          <div className="w-[57%] rounded-3xl overflow-hidden border ">
            <img
              src="Gallary/row41.jpg"
              alt=""
              style={{ height: 450, width: 800 }}
            />
          </div>
          <div className="w-[41%] rounded-3xl overflow-hidden ">
            <img
              src="Gallary/row42.jpg"
              alt=""
              style={{ width: 600, height: 450 }}
            />
          </div>
        </div>
        <div className="flex justify-between my-4 ">
          <div className="w-[41%] rounded-3xl overflow-hidden ">
            <img
              src="Gallary/row51.jpg"
              alt=""
              style={{ width: 600, height: 450 }}
            />
          </div>
          <div className="w-[57%] rounded-3xl overflow-hidden border ">
            <img
              src="Gallary/row52.jpg"
              alt=""
              style={{ height: 450, width: 800 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
