import React from "react";

const AnotherBenefitSec = () => {
  const BenefitsList: string[] = [
    "Risk Assessment",
    "Data Backup and Recovery",
    "Data Encryption",
    "Network Segmentation",
    "Incident Response Plan",
    "User Behavioral Analytics",
    "User Training and Awareness",
    "Legal and Regulatory Compliance",
  ];

  return (
    <div className="px-6 py-10 bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-6">Benefits</h1>
      <div className="flex space-x-4 overflow-x-auto px-4 py-3">
        {BenefitsList.map((benefit, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-6 py-3 bg-pink-700 text-white rounded-full shadow-md text-lg font-semibold whitespace-nowrap"
          >
            {benefit}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnotherBenefitSec;
