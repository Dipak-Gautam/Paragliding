import React, { useState } from "react";
import bgImage from "./bg/counter-bg.jpg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const AnimatedCounter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="bg-no-repeat bg-cover   py-10"
    >
      <ScrollTrigger
        onEnter={() => {
          setCounterOn(true);
        }}
        onExit={() => {
          setCounterOn(false);
        }}
      >
        {counterOn && (
          <div className="overflow-hidden flex justify-evenly my-auto">
            <div className="my-auto text-center space-y-3">
              <p className="mb-0 text-lg md:text-2xl font-bold text-white">
                <CountUp start={0} end={10000} duration={3} delay={0} /> +
              </p>
              <p className="mt-0  text-sm md:text-lg font-semibold text-white">
                client satisfaction
              </p>
            </div>

            <div className="my-auto text-center space-y-3">
              <p className="mb-0 text-lg md:text-2xl font-bold text-white">
                <CountUp start={0} end={10} duration={2} delay={1} /> +
              </p>
              <p className="mt-0  text-sm md:text-lg font-semibold text-white">
                Years of Experience
              </p>
            </div>
            <div className="my-auto text-center space-y-3">
              <p className="mb-0 text-lg md:text-2xl font-bold text-white">
                <CountUp start={0} end={58} duration={2} delay={1} /> +
              </p>
              <p className="mt-0  text-sm md:text-lg font-semibold text-white">
                Professional Team
              </p>
            </div>
            <div className="my-auto text-center space-y-3">
              <p className="mb-0 text-lg md:text-2xl font-bold text-white">
                <CountUp start={0} end={10000} duration={3} delay={0} /> +
              </p>
              <p className="mt-0  text-sm md:text-lg font-semibold text-white">
                Flights
              </p>
            </div>
          </div>
        )}
      </ScrollTrigger>
    </div>
  );
};

export default AnimatedCounter;
