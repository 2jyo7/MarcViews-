import React from "react";
import ERMHero from "./ERMHero";
import ERMIntro from "./ERMIntro";
import EvolvingThreatLandscape from "./EvolvingThreatLandscape";
import ComprehensiveServ from "./ComprehensiveServ";
import KeyChallenges from "./KeyChallenges";
import KeyBenefits from "./KeyBenefits";
import KeyERMServices from "./KeyERMServices";

const ERMPage = () => {
  return (
    <div>
      <ERMHero />
      <ERMIntro />
      <EvolvingThreatLandscape />
      <ComprehensiveServ />
      <KeyChallenges />
      <KeyBenefits />
      <KeyERMServices />
    </div>
  );
};

export default ERMPage;
