import React from "react";

const Gallery = () => {
  return (
    <div className="p-3 md:mx-20">
      <div>
        <h1 className="my-3">Our Gallery</h1>
        <div className="md:flex justify-between my-4 space-y-4">
          <div className="md:w-[41%] rounded-3xl overflow-hidden ">
            <img
              src="Gallery/row11.jpg"
              alt=""
              style={{ width: 600, height: 450 }}
            />
          </div>
          <div className="md:w-[57%] rounded-3xl overflow-hidden border ">
            <img
              src="Gallery/row12.jpg"
              alt=""
              style={{ height: 450, width: 800 }}
            />
          </div>
        </div>
        <div className="md:flex justify-between my-4 space-y-4">
          <div className="md:w-[57%] rounded-3xl overflow-hidden border ">
            <img
              src="Gallery/row21.jpg"
              alt=""
              style={{ height: 450, width: 800 }}
            />
          </div>
          <div className="md:w-[41%] rounded-3xl overflow-hidden ">
            <img
              src="Gallery/row22.jpg"
              alt=""
              style={{ width: 600, height: 450 }}
            />
          </div>
        </div>
        <div className="md:flex justify-between my-4 space-y-4">
          <div className="md:w-[41%] rounded-3xl overflow-hidden ">
            <img
              src="Gallery/row31.jpg"
              alt=""
              style={{ width: 600, height: 450 }}
            />
          </div>
          <div className="md:w-[57%] rounded-3xl overflow-hidden border ">
            <img
              src="Gallery/row32.jpg"
              alt=""
              style={{ height: 450, width: 800 }}
            />
          </div>
        </div>
        <div className="md:flex justify-between my-4 space-y-4">
          <div className="md:w-[57%] rounded-3xl overflow-hidden border ">
            <img
              src="Gallery/row41.jpg"
              alt=""
              style={{ height: 450, width: 800 }}
            />
          </div>
          <div className="md:w-[41%] rounded-3xl overflow-hidden ">
            <img
              src="Gallery/row42.jpg"
              alt=""
              style={{ width: 600, height: 450 }}
            />
          </div>
        </div>
        <div className="md:flex justify-between my-4 space-y-4">
          <div className="md:w-[41%] rounded-3xl overflow-hidden ">
            <img
              src="Gallery/row51.jpg"
              alt=""
              style={{ width: 600, height: 450 }}
            />
          </div>
          <div className="md:w-[57%] rounded-3xl overflow-hidden border ">
            <img
              src="Gallery/row52.jpg"
              alt=""
              style={{ height: 450, width: 800 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
