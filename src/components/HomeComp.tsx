import React from "react";
import Hero2Sec from "./Home-sec/Hero2Sec";
import ServicePage from "./Home-sec/services/ServicePage";
import PartnerSection from "./Partner";

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
