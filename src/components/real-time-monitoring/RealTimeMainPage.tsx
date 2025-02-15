import React from "react";
import RealTimeHero from "./RealTimeHero";
import RTContent from "./RTContent";
import RTGallery from "./RTGallery";
import PublicCloud from "./PublicCloud";
import WhyUs from "./WhyUs";
import FeatureSec from "./FeatureSec";

const RealTimeMainPage = () => {
  return (
    <div>
      <RealTimeHero />
      <RTContent />
      <RTGallery />
      <PublicCloud />
      <WhyUs />
      <FeatureSec />
    </div>
  );
};

export default RealTimeMainPage;
