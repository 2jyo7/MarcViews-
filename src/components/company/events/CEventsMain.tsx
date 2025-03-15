import React from "react";
import CEventsIntro from "./CEventsIntro";
import CEventsUpcomingInt from "./CEventsUpcomingInt";
import CPastEvents from "./CPastEvents";

const CEventsMain = () => {
  return (
    <div>
      <CEventsIntro />
      <CEventsUpcomingInt />
      <CPastEvents />
    </div>
  );
};

export default CEventsMain;
