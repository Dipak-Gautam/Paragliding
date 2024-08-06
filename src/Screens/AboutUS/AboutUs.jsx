import React from "react";
import HeroAbout from "../../Components/AboutUs/HeroAbout";
import History from "./History";
import PricePara from "../../Components/Price/PricePara";
import CallUs from "../../Components/Contact/CallUs";
import BookNow from "../../Components/BookNow/BookNow";

const AboutUs = () => {
  return (
    <div>
      <div className="p-3 md:mx-20">
        <HeroAbout style={1} />
        <BookNow />
        <History />
      </div>

      <PricePara />
      <CallUs />
    </div>
  );
};

export default AboutUs;
