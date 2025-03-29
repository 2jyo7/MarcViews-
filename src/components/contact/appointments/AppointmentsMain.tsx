import React from "react";
import AMainPage from "./AMainPage";
import PayHereIntro from "@/components/company/pay-here/PayHereIntro ";

const AppointmentsMain = () => {
  return (
    <div className="py-20 p-8 bg-radial-color">
      <AMainPage />
      <PayHereIntro />
    </div>
  );
};

export default AppointmentsMain;
