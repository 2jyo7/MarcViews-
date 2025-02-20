import React from "react";
import GetServe from "./GetServe";
import StrategyField from "./StrategyField";
import ServicesCardCol from "./ServicesCardCol";

const ServicePage = () => {
  return (
    <div>
      <GetServe />
      <StrategyField />
      <ServicesCardCol />
    </div>
  );
};

export default ServicePage;
