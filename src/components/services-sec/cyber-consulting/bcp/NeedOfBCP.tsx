import KeyFeatureComp from "@/components/common/KeyFeature ";
import React from "react";

const bcpNeeds = [
  {
    title: "Strengthen IT Infrastructure Resilience",
    description:
      "Enhance the resilience of critical IT infrastructure, including servers, networking components, and data storage systems.",
  },
  {
    title: "Enhanced Data Backup and Recovery Procedures",
    description:
      "Improve data backup and recovery procedures to ensure the regular and comprehensive backing up of critical data. Establish a testing protocol to verify the effectiveness and efficiency of the recovery processes.",
  },
  {
    title: "Remote Work Contingency Planning",
    description:
      "Develop and formalize contingency plans for remote work scenarios, considering the increasing prevalence of flexible work arrangements. Ensure that staff has access to necessary resources and that security measures are in place for remote operations.",
  },
];

const NeedOfBCP = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Why You Need a BCP?
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {bcpNeeds.map((item) => (
            <KeyFeatureComp
              key={item.title}
              para={item.description}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeedOfBCP;
