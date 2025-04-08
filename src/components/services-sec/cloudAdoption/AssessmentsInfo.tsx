import Button from "@/components/common/Button ";
import PopUpEffect from "@/components/common/PopUpEffect ";
import { CloudAssessType } from "@/types/CloudAssessType ";
import React from "react";

const AssessmentsInfo = () => {
  const CloudAAssessData: CloudAssessType[] = [
    {
      id: "CAAD1",
      title: "Cloud Adoption Strategy Evaluator",
      para: [
        "The Cloud Adoption Strategy Evaluator assesses your strategy posture across distinct areas of the strategy methodology like:",
        [
          "Identifying motivations",
          "Documenting expected business outcomes",
          "Evaluating financial & technical considerations",
        ],
        "in creating a business case based on your responses.",
      ],
      btnTitle: "START ASSESSMENT",
    },
    {
      id: "CAAD2",
      title: "Migration Readiness Assessment",
      para: [
        "From business planning to training to security and governance, find out what you need to do to prepare for your Cloud migration with the Strategic Migration Assessment and Readiness Tool (SMART).",
      ],
      btnTitle: "START ASSESSMENT",
    },
    {
      id: "CAAD3",
      title: "Cloud Journey Tracker",
      para: [
        "To identify your cloud adoption path based on your needs with this tracker and navigate to relevant content in the Cloud Adoption Framework for Public Cloud.",
      ],
      btnTitle: "START ASSESSMENT",
    },
    {
      id: "CAAD4",
      title: "Application & Data Modernization Readiness",
      para: [
        "Modernizing your applications and data can position your business to accelerate time to market and deliver innovative customer experiences.",
        "This assessment will help you understand your current gaps and guide your modernization efforts.",
      ],
      btnTitle: "START ASSESSMENT",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="heading-style text-bg-style">
        Browse all assessments - Step 1
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CloudAAssessData.map((CAAD) => (
          <div
            key={CAAD.id}
            className="p-6 bg-white shadow-md rounded-lg border border-gray-200 flex flex-col h-full"
          >
            <h2 className="more-title-style text-bg-style">{CAAD.title}</h2>
            <div className="text-gray-700 leading-relaxed flex-grow ">
              <PopUpEffect>
                {CAAD.para.map((text, index) =>
                  Array.isArray(text) ? (
                    <ul key={index} className="list-disc pl-5 space-y-2">
                      {text.map((item, i) => (
                        <li key={i} className="description-style">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="description-style" key={index}>
                      {text}
                    </p>
                  )
                )}{" "}
              </PopUpEffect>
            </div>

            <Button
              label={CAAD.btnTitle}
              href="https://01pplwck2j6.typeform.com/to/GcLq3H6V?typeform-source=marcviews.com"
              className="mt-4 px-6 py-2 bg-pink-600 text-white font-semibold rounded-md hover:bg-gray-700 transition self-start"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssessmentsInfo;
