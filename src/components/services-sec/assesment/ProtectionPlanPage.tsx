import PopUpEffect from "@/components/common/PopUpEffect ";
import React from "react";
import { BiCheckCircle } from "react-icons/bi";

const ProtectionPlanPage = () => {
  const ProtectionPlanData: string[] = [
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
    <div className="p-4 md:p-8 lg:p-12 bg-gray-50">
      {/* Main Title */}
      <h1 className="text-bg-style heading-style">
        Protection Plan: How to Build One?
      </h1>

      {/* List Container */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200 p-6">
        <div className="flex flex-wrap justify-center gap-6">
          {ProtectionPlanData.map((item, i) => (
            <div
              key={i}
              className="flex items-center space-x-3 p-4 bg-gray-100 rounded-lg shadow-sm w-64 md:w-72 lg:w-80"
            >
              <span className="flex items-center justify-center w-10 h-10 text-white bg-pink-800 rounded-full text-lg font-bold">
                {i + 1}
              </span>

              <BiCheckCircle className="text-gray-600 w-6 h-6" />
              <PopUpEffect>
                {" "}
                <span className="text-gray-800 font-semibold">{item}</span>{" "}
              </PopUpEffect>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProtectionPlanPage;
