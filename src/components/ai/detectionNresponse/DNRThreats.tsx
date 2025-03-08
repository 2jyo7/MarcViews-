import Button from "@/components/common/Button ";
import LiFeaturesComp from "@/components/common/LiFeaturesComp ";
import React from "react";

const DNRThreats = () => {
  const dnrThreats = [
    "Automated detection & response",
    "Threat Intelligence",
    "Case Management",
    "Behavior modeling & anomaly detection",
    "Enterprise data modeling",
    "Alert management",
    "Knowledge management",
    "Security operations support",
  ];

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Identify Threats Faster and Respond Proactively
        </h1>

        {/* Grid Layout for Threats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dnrThreats.map((threat) => (
            
            <LiFeaturesComp key={threat} liPoints={threat} className="bg-white border-red-500 py-6 px-6 hover:scale-105"/>
          ))}
        </div>
        <Button label="Contact Us With Your Needs" className="mt-8 py-4"/>
      </div>
    </section>
  );
};

export default DNRThreats;
