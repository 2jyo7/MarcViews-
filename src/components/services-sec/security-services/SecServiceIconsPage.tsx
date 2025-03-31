"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaExchangeAlt,
  FaCog,
  FaBrain,
  FaStopwatch,
  FaSync,
} from "react-icons/fa";

interface Step {
  label: string;
  icon: React.ReactNode;
  color: string;
}

const steps: Step[] = [
  { label: "Assess", icon: <FaExchangeAlt size={30} />, color: "bg-pink-600" },
  { label: "Transform", icon: <FaCog size={30} />, color: "bg-orange-500" },
  { label: "Master", icon: <FaBrain size={30} />, color: "bg-purple-600" },
  { label: "Respond", icon: <FaStopwatch size={30} />, color: "bg-yellow-500" },
  { label: "Manage", icon: <FaSync size={30} />, color: "bg-gray-700" },
];

// Duplicate steps to enable infinite scrolling
const duplicatedSteps = [...steps, ...steps];

const SecServProcessFlow = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }} // Moves half, then seamlessly loops
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className="flex m-8 py-8 whitespace-nowrap w-max [mask-image:linear-gradient(to_right,transparent,black,transparent)]"
      >
        {duplicatedSteps.map((step, index) => (
          <div key={index} className="flex items-center">
            {/* Step Box */}
            <div
              className={`relative flex flex-col items-center justify-center w-32 h-32 rounded-full text-white shadow-lg transition-transform duration-300 hover:scale-110 ${step.color}`}
            >
              {step.icon}
              <span className="mt-2 font-semibold text-lg">{step.label}</span>
            </div>

            {/* Arrows Between Steps */}
            {index < duplicatedSteps.length - 1 && (
              <div className="flex items-center">
                <div className="w-16 h-1 bg-gray-500"></div>
                <div className="w-0 h-0 border-l-[10px] border-l-gray-500 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent"></div>
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SecServProcessFlow;
