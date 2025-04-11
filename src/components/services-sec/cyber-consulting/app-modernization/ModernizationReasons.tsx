import LiFeaturesComp from "@/components/common/LiFeaturesComp ";
import RainbowTitle from "@/components/common/RainbowTtlEffect ";
import React from "react";

const ModernizationReasons = () => {
  const reasons = [
    {
      title: "More Agility",
      points: [
        "Achieve faster time to market and more agility",
        "Enable the development of new, bigger features",
        "Run mission-critical applications on a future-ready platform",
        "Improve operational efficiency",
      ],
      description:
        "To keep up with evolving technology, meet and exceed user expectations, and introduce new capabilities rapidly, your critical applications need to evolve.",
    },
    {
      title: "Better Experiences",
      points: ["Improved user experiences", "Increased developer productivity"],
      description:
        "Application modernization not only improves the user experience but also enhances the developer experience.",
    },
    {
      title: "Reduced Costs",
      points: [
        "Reduced resource usage",
        "Reduced license costs",
        "Reduced support costs",
      ],
      description:
        "Exploring some of the benefits from a cost perspective is important to understand the full impact of modernization.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="heading-style text-bg-style">
          Reasons to Modernize Your Applications
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <RainbowTitle>
                {" "}
                <h3 className="title-style">{reason.title}</h3>
              </RainbowTitle>
              <p className="description-style py-2">{reason.description}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {reason.points.map((point) => (
                  <LiFeaturesComp
                    key={point}
                    liPoints={point}
                    className="border-lime-700"
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernizationReasons;
