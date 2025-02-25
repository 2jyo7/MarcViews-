import LiFeaturesComp from "@/components/common/LiFeaturesComp ";
import React from "react";

const BenefitKey = () => {
  const bfkdata = [
    {
      title: "Benefits",
      points: [
        "Scalability",
        "Innovation",
        "Competitive Advantage",
        "Compliance",
        "Operational Resilience",
      ],
    },
    {
      title: "Key Considerations",
      points: [
        "Strategic Alignment",
        "Risk Management",
        "Change Management",
        "Legacy Integration",
        "Continuous Improvement",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Benefits & Key Considerations
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          {bfkdata.map((bfk) => (
            <div
              key={bfk.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 border-b pb-3">
                {bfk.title}
              </h3>
              <ul className="space-y-3">
                {bfk.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-gray-700 text-lg"
                  >
                    <span className="w-4 h-3 text-red-500 flex justify-center items-center">&#9733;</span>
                    <LiFeaturesComp liPoints={point} className="border-black/15 bg-pink-200"/>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitKey;
