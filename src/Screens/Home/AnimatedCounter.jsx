import React from "react";
import bgimage from "./bg/counterbg.jpg";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  return (
    <div
      //   style={{ backgroundImage: `url(${bgimage})` }}
      className="bg-no-repeat bg-cover bg-transparent"
    >
      <div className="overflow-hidden flex justify-evenly my-auto">
        <div className="my-auto text-center space-y-2">
          <p className="mb-0 text-2xl font-bold text-white">
            <CountUp start={0} end={10000} duration={3} delay={1} /> +
          </p>
          <p className="mt-0 text-lg font-semibold text-white">
            client satisfaction
          </p>
        </div>

        <div className="my-auto text-center space-y-2">
          <p className="mb-0 text-2xl font-bold text-white">
            <CountUp start={0} end={10} duration={2} delay={2} /> +
          </p>
          <p className="mt-0 text-lg font-semibold text-white">
            Years of Expirence
          </p>
        </div>
        <div className="my-auto text-center space-y-2">
          <p className="mb-0 text-2xl font-bold text-white">
            <CountUp start={0} end={58} duration={2} delay={2} /> +
          </p>
          <p className="mt-0 text-lg font-semibold text-white">
            Professional Team
          </p>
        </div>
        <div className="my-auto text-center space-y-2">
          <p className="mb-0 text-2xl font-bold text-white">
            <CountUp start={0} end={10000} duration={3} delay={1} /> +
          </p>
          <p className="mt-0 text-lg font-semibold text-white">Flights</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCounter;
