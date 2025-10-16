import React from "react";
import Hero from "../Components/Hero";
import Brand from "../Components/Brand";
import Boost from "../Components/CompanyBoost";
import MobileAdvert from "../Components/MobileAdvert";
import FAQ from "../Components/FAQ";
import OurStack from "../Components/OurStack";
import Industries from "../Components/Industries";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />

      <Boost />
      <Brand />
      <MobileAdvert />
      <OurStack />
      <Industries />
      <FAQ />
    </div>
  );
};

export default Home;
