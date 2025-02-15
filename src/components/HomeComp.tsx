import React from "react";
// import HeroSec from "./HeroSec";
import ServicePage from "./services/ServicePage";
import PartnerSection from "./Partner";
import Hero2Sec from "./Hero2Sec";

const HomeComp = () => {
  return (
    <div className="flex flex-col w-full justify-center">
      {/* <HeroSec /> */}
      <Hero2Sec />
      <ServicePage />
      <PartnerSection />
    </div>
  );
};

export default HomeComp;
