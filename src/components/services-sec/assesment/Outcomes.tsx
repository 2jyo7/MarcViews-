"use client";
import React, { useState } from "react";
import { BiSolidShow } from "react-icons/bi";
import { GrHide } from "react-icons/gr";

const Outcomes = () => {
  const [visibleInfo, setVisibleInfo] = useState<Record<number, boolean>>({}); // Define type explicitly

  const toggleInfo = (id: number) => {
    setVisibleInfo((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle visibility for the specific item's info
    }));
  };

  const outcomesData = [
    { id: 1, otName: "Identifying the Attack Surface of your organization" },
    { id: 2, otName: "Detection of Known Threats" },
    { id: 3, otName: "Evaluation of Current Security Controls" },
    { id: 4, otName: "Threat Modeling (Premium)" },
    {
      id: 5,
      otName: "Risk Assessment",
      otInfo: "Associated with Network, Infrastructure, Endpoints, and Cloud",
    },
    { id: 6, otName: "Mitigation Strategies" },
    { id: 7, otName: "Documentation & Reporting" },
  ];

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-center items-center">
        <h2 className="text-xl font-semibold ">Outcomes</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {outcomesData.map((otData) => (
          <div
            key={otData.id}
            className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition"
          >
            <p className="font-medium text-gray-800">{otData.otName}</p>

            {/* Button to toggle info */}
            {otData.otInfo && (
              <>
                <button
                  onClick={() => toggleInfo(otData.id)}
                  className="mt-2 flex items-center gap-1 text-blue-500 underline hover:text-blue-600"
                >
                  {visibleInfo[otData.id] ? <GrHide /> : <BiSolidShow />}
                </button>

                {/* Conditionally render info */}
                {visibleInfo[otData.id] && (
                  <p className="mt-2 text-sm text-gray-600">{otData.otInfo}</p>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Outcomes;
