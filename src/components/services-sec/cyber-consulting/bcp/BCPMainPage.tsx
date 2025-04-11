import BSHAttackVectors from "@/components/solutions/business-secHub/BSHAttackVectors ";
import React from "react";
import BCPHero from "./BCPHero";
import BCPIntro from "./BCPIntro";
import NeedOfBCP from "./NeedOfBCP";
import PurposeNBenefits from "./PurposeNBenefits";

const BCPMainPage = () => {
  return (
    <div>
      <BCPHero />
      <BCPIntro />
      <NeedOfBCP />
      <BSHAttackVectors />
      <PurposeNBenefits />
    </div>
  );
};

export default BCPMainPage;
