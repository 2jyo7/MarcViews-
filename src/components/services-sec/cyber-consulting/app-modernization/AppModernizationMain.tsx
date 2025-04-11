import React from "react";
import AppMHero from "./AppMHero";
import AppIntro from "./AppIntro";
import ModernizationReasons from "./ModernizationReasons";
import Summary from "./Summary";

const AppModernizationMain = () => {
  return (
    <div>
      <AppMHero />
      <AppIntro />
      <ModernizationReasons />
      <Summary />
    </div>
  );
};

export default AppModernizationMain;
