"use client";
import React from "react";
import { motion } from "framer-motion";

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

  // Duplicate list for smooth infinite scrolling
  const duplicatedBenefits = [...BenefitsList, ...BenefitsList];

  return (
    <div className="px-6 py-10 bg-gray-100 text-gray-800 overflow-hidden">
      {/* Title */}
      <h1 className="title-style text-bg-style text-center">Benefits</h1>

      {/* Scrolling Container */}
      <div className="relative overflow-hidden w-full mt-6">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }} // Moves to the left infinitely
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}
          className="flex space-x-4 w-max [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]"
        >
          {duplicatedBenefits.map((benefit, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-6 py-3 bg-pink-700 text-white rounded-full shadow-md text-lg font-semibold whitespace-nowrap"
            >
              {benefit}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AnotherBenefitSec;
