import React from "react";
import DataSecHero from "./DataSecHero";
import DataIntroPage from "./DataIntroPage";
import Vulnerability from "./Vulnerability";
import ProffServices from "./ProffServices";
import DSPMSec from "./DSPMSec";
import HowDspmWorks from "./HowDspmWorks";
import DSChallenges from "./DSChallenges";
import DSBenefits from "./DSBenefits";
import SecurityChallenge from "./SecurityChallenge";

const DataSecurityMainPage = () => {
  return (
    <div>
      <DataSecHero />
      <DataIntroPage />
      <Vulnerability />
      <ProffServices />
      <DSPMSec />
      <HowDspmWorks />
      <DSChallenges />
      <DSBenefits />
      <SecurityChallenge />
    </div>
  );
};

export default DataSecurityMainPage;
