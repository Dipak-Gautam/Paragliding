import React from "react";

const HeroAbout = () => {
  return (
    <div className=" p-3 py-5 md:mx-20">
      <div className="flex  space-x-4">
        <div>
          <img
            src="AboutUs/aboutus.png"
            alt=""
            style={{ height: 550, width: 600 }}
          />
        </div>
        <div className="py-2 md:w-[50%] my-auto space-y-4">
          <div className="text-blue-600 font-semibold">About Us</div>
          <div className="text-xl md:text-4xl font-bold">
            We Have 15 Years of Experience in Paragliding & Hicking
          </div>
          <div className="text-justify">
            Our's Paragliding is a family run company and has been offering
            tandem flights in the Annapurna region of Nepal since 1996. As the
            most experienced paragliding company in Nepal, we are unrivaled in
            our knowledge of paragliding conditions, sites and local
            cultures.The main area for paragliding is Sarangkot in the Pokhara
            valley, a site which offers spectacular views of three 8,000m peaks
            and friendly and constant conditions for paragliding throughout the
            year.
          </div>
          <div>
            <p className="font-bold text-xl m-0">Our Services</p>
            <p>
              <li>Tandem Flights</li>
              <li>Hicking</li>
              <li>Treacking</li>
              <li>Camping</li>
              <li>Solo flights</li>
            </p>
          </div>
          <div>
            <button
              type="button"
              class=" bg-green-900 text-white p-2 px-3 font-semibold font-serif hover:bg-green-700 duration-500"
            >
              More About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
