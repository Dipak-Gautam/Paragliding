import React from "react";
import HeroImage from "../../Components/HeroImage/HeroImage";
import AnimatedCounter from "./AnimatedCounter";
import HeroAbout from "../../Components/AboutUs/HeroAbout";
import Paragliding from "../../Components/Paragliding/Paragliding";
import PricePara from "../../Components/Price/PricePara";
import Faq from "../../Components/FAQ/Faq";
import BookNow from "../../Components/BookNow/BookNow";
import CallUs from "../../Components/Contact/CallUs";
import Footer from "../../Components/Footer/Footer";

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
      <CallUs />
      <Footer />
    </div>
  );
};

export default Home;
