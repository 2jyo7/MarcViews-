import React from "react";
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

const SecServProcessFlow = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 p-10 rounded-lg shadow-lg">
      <div className="flex flex-wrap justify-center items-center space-x-6 md:space-x-10">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            {/* Step Box */}
            <div
              className={`relative flex flex-col items-center justify-center w-32 h-32 rounded-full text-white shadow-lg transition-transform duration-300 hover:scale-110 ${step.color}`}
            >
              {step.icon}
              <span className="mt-2 font-semibold text-lg">{step.label}</span>
            </div>

            {/* Improved Arrow Connector (Except for Last Step) */}
            {index < steps.length - 1 && (
              <div className="relative flex items-center ">
                {/* Arrow Line */}
                <div className="w-16 h-1 bg-gray-500"></div>

                {/* Arrowhead - Styled to Look Smoother */}
                <div className="w-0 h-0 border-l-[10px] border-l-gray-500 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecServProcessFlow;
