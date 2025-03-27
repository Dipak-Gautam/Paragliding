import React from "react";

const Paragliding = () => {
  return (
    <div className="my-4 p-3 md:mx-20">
      <h1 className="text-center font-bold text-green-800 mb-10">
        What is Paragliding ?
      </h1>
      <div className="lg:flex space-x-4">
        <div className="lg:w-[50%] text-justify text-xs md:text-base">
          <p>
            Paragliding is a recreational and competitive adventure sport that
            involves flying paraglider: lightweight, free-flying, foot-launched
            glider aircraft with no rigid primary structure. The pilot is seated
            in a harness suspended below a fabric wing, whose shape is formed by
            the pressure of air entering vents in the front of the wing. Unlike
            hang gliders which have a rigid frame to maintain the shape of the
            wing, paraglider are shaped by the flow of air over the surface of
            the wing in conjunction with lines that run from different sections
            of the wing to the harness.
          </p>
          <p>
            The flexible nature of the paraglider wing means it can be packed
            into a small space and carried in a backpack, making it very
            portable and easy to transport compared to other forms of flight.
            Paragliding flights can last many hours and cover hundreds of
            kilometers, although flights of one to two hours and covering some
            tens of kilometers are more typical. Pilots steer using brake
            toggles which change the shape of the rear edge of the wing. A key
            aspect of paragliding is finding rising air to provide lift. This
            can come from thermals (columns of warm, rising air), ridge lift
            (caused by wind being deflected by a slope), or convergence zones
            (where different air masses meet and are forced upwards). Some
            paraglider also use small engines (‘para-motors’) to extend their
            flight.
          </p>
          <p>
            Safety is an important consideration in paragliding, and pilots use
            a variety of equipment such as helmets, reserve parachutes, and GPS
            units for navigation and tracking. It is a sport that requires
            training and skill, but for those who undertake it, paragliding
            offers an exhilarating way to see the world from a whole new
            perspective.
          </p>
          <p>
            A key aspect of paragliding is finding rising air to provide lift.
            This can come from thermals (columns of warm, rising air), ridge
            lift (caused by wind being deflected by a slope), or convergence
            zones (where different air masses meet and are forced upwards). Some
            paragliders also use small engines (‘para-motors’) to extend their
            flight.
          </p>
        </div>
        <div className="mx-auto">
          <img
            src="assets/what-para.png"
            alt=""
            className=" mx-auto h-[500px] md:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Paragliding;
