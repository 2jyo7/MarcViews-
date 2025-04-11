import Button from "@/components/common/Button ";
import LiFeaturesComp from "@/components/common/LiFeaturesComp ";
import React from "react";

const benefits = [
  "Minimized Disruptions",
  "Ensured Customer Service",
  "Safeguarding Critical Assets",
  "Ensure Resilience against Threats",
  "Protect the Reputation of Your Brand",
  "Regulatory Compliant",
  "Well Formulated Communication Plan",
  "Restoring the Infrastructure",
  "Recovery Plan",
  "Data Protection",
];

const PurposeNBenefits = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Purpose & Benefits
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
          {benefits.map((benefit) => (
            <LiFeaturesComp
              key={benefit}
              liPoints={benefit}
              className="bg-black border-lime-400 hover:bg-gray-700 text-white"
            />
          ))}
        </ul>

        <div className="text-center">
          <Button label="GET A FREE CONSULTATION" />
        </div>
      </div>
    </section>
  );
};

export default PurposeNBenefits;
