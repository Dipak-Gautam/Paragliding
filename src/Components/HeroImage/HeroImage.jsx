import React, { useEffect } from "react";
import bgimage from "./bgimage/heroimage2.gif";
import Aos from "aos";
import "aos/dist/aos.css";
import AnimatedCounter from "../../Screens/Home/AnimatedCounter";

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
        className=" bg-no-repeat bg-center bg-cover w-full h-[70vh] flex flex-col justify-center items-end relative"
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
        {/* <div className="w-full absolute bottom-[5%]">
          <AnimatedCounter />
        </div> */}
      </div>
    </div>
  );
};

export default HeroImage;
