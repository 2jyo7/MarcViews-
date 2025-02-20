import React from "react";
import SecServicesHero from "./SecServicesHero";
import SecServIntro from "./SecServIntro";
import ServSecGallery from "./SecGallery";
import SecGallery2 from "./SecGallery2";
import SecServiceFeature from "./SecServiceFeature";
import SecServProcessFlow from "./SecServiceIconsPage";

const SecurityServMainPage = () => {
  return (
    <div>
      <SecServicesHero />
      <SecServIntro />
      <SecGallery2 />
      <ServSecGallery />
      <SecServiceFeature />
      <SecServProcessFlow />
    </div>
  );
};

export default SecurityServMainPage;
