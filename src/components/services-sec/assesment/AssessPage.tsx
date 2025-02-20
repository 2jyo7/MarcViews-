import React from "react";
import AssessHero from "./AssessHero";
import AssessInfo from "./AssessInfo";
import AssessCardList from "./AssessCardList";
import Outcomes from "./Outcomes";
import BenefitsSec from "./BenefitsSec";
import ReadinessSec from "./ReadinessSec";
import RansomeDetails from "./RansomeDetails";
import CyberSecurityPage from "./CyberSecurityPage";
import ProtectionPlanPage from "./ProtectionPlanPage";
import AnotherBenefitSec from "./AnotherBenefitSec";
import DesignCPlan from "./DesignCPlan";
import ZeroTrustMPage from "./Zero-trust-page/ZeroTrustMPage";

const AssessPage = () => {
  return (
    <div>
      <AssessHero />
      <AssessInfo />
      <AssessCardList />
      <Outcomes />
      <BenefitsSec />
      <ReadinessSec />
      <RansomeDetails />
      <CyberSecurityPage />
      <ProtectionPlanPage />
      <AnotherBenefitSec />
      <DesignCPlan />
      <ZeroTrustMPage />
    </div>
  );
};

export default AssessPage;
