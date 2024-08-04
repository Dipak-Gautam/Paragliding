import React, { useEffect } from "react";
import bgimage from "./bgimage/heroimage2.gif";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroImage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgimage})`,
        }}
        className=" bg-no-repeat bg-center bg-cover w-full h-[50vh] flex justify-end items-center"
      >
        <div className=" mx-14">
          <p
            className="text-white text-xs font-bold  "
            data-aos="fade-out"
            data-aos-duration="1000"
          >
            We are BomaFly,
          </p>
          <p
            className="text-white text-4xl font-extrabold "
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            Would You Like To Join Our
          </p>
          <p
            className="text-white text-4xl font-extrabold "
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="1000"
          >
            Paragliding Advanture
          </p>
          <p
            className="text-white text-xs font-bold  "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1500"
          >
            Pokhara, Nepal
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
