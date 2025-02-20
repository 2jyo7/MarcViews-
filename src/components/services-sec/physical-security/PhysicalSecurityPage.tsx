import React from "react";
import PhysicalSecHero from "./PhysicalSecHero";
import PSecurityServices from "./PSecurityServices";
import AccessControl from "./AccessControl";
import HostedAC from "./HostedAC";
import PhysicalSecGallery from "./PhysicalSecGallery";

const PhysicalSecurityPage = () => {
  return (
    <div>
      <PhysicalSecHero />
      <PSecurityServices />
      <AccessControl />
      <HostedAC />
      <PhysicalSecGallery />
    </div>
  );
};

export default PhysicalSecurityPage;
