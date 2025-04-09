import KeyFeatureComp from "@/components/common/KeyFeature ";
import React from "react";

const KeyChallenges = () => {
  const keyChallengesLs = [
    {
      title: " Measuring & Reporting On Cyber Risk Is Complicated",
      para: "Cyber risk is difficult to quantify and measure, which creates complexity when reporting on cyber risk to stakeholders.",
    },
    {
      title: "Budget Constraints Make It Hard To Manage Workloads",
      para: "Security budgets are remaining constant but the workload is growing, leaving teams under resourced and over-tasked. ",
    },
    {
      title: "Demonstrating Cyber Success Is A Constant Challenge",
      para: "When a security program is effective, the impact isn’t visible. A lack of security breaches is rarely celebrated as a victory. ",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-8">
        <h2 className="heading-style text-bg-style">
          Key Challenges for Cybersecurity Leaders:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-4">
          {keyChallengesLs.map((kCLists) => (
            <KeyFeatureComp
              key={kCLists.title}
              title={kCLists.title}
              para={kCLists.para}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyChallenges;
