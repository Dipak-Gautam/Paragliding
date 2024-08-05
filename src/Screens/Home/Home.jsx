import React from "react";
import HeroImage from "../../Components/HeroImage/HeroImage";
import AnimatedCounter from "./AnimatedCounter";
import HeroAbout from "../../Components/AboutUs/HeroAbout";
import Paragliding from "../../Components/Paragliding/Paragliding";
import PricePara from "../../Components/Price/PricePara";
import Faq from "../../Components/FAQ/Faq";
import BookNow from "../../Components/BookNow/BookNow";

const Home = () => {
  return (
    <div>
      <HeroImage />
      <HeroAbout />
      <AnimatedCounter />
      <Paragliding />
      <PricePara />
      <Faq />
      <BookNow />
    </div>
  );
};

export default Home;
