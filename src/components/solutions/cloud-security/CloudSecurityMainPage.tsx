import React from "react";
import CloudSHero from "./CloudSHero";
import CloudSIntro from "./CloudSIntro";
import ProfessionalServ from "./ProfessionalServ";
import PSServices from "./Services";
import CNApplication from "./CNApplication";
import CoreComp from "./CoreComp";
import CNAPPComp from "./CNAP";
import CloudSecPostM from "./CloudSecPostM";
import CloudSecBenefits from "./CloudSecBenefits";

const CloudSecurityMainPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="w-full">
        <CloudSHero />
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-6 lg:px-12 space-y-16 py-12">
        <CloudSIntro />
        <ProfessionalServ />
        <PSServices />
        <CNApplication />
        <CoreComp />
        <CNAPPComp />
        <CloudSecPostM />
        <CloudSecBenefits />
      </div>
    </div>
  );
};

export default CloudSecurityMainPage;
