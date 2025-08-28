import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brand from "../components/Brand";
import Boost from "../components/CompanyBoost";
import MobileAdvert from "../components/MobileAdvert";
import FAQ from "../components/FAQ";
import OurStack from "../components/OurStack";
import Footer from "../components/Footer";
import Industries from "../components/Industries";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      
      <Hero />
      <Brand />
      <Boost />
      <MobileAdvert />
      <OurStack />
      <Industries />
      {/* <FAQ /> */}
    </div>
  );
};

export default Home;
