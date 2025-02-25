
"use client"
import Button from "@/components/common/Button ";
import React, { useState } from "react";

const WhyItM = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const wtmData = [
    {
      title: "Why IT Modernization?",
      points: [
        "Cost Savings",
        "Deploy enterprise apps anywhere",
        "Enhanced Efficiency",
        "Enhanced Security",
        "Enhanced Customer Experience",
        "Improved Agility",
        "Improve workload scalability",
        "Innovate with business agility",
        "Simplify data management",
      ],
    },
    {
      title: "Assess your readiness",
      points: ["Technology readiness", "People readiness", "Process readiness"],
    },
    {
      title: "Key challenges",
      points: [
        "Legacy Systems",
        "Budget Constraints",
        "Data Migration and Management",
        "Security and Compliance",
        "Interoperability and Integration",
        "Vendor Lock-In",
        "Business Continuity",
        "Strategic Alignment",
      ],
    },
    {
      title: "Define your modernization roadmap",
      points: [
        "Run a discovery workshop",
        "Create a priority map",
        "Prioritizing your progress",
      ],
    },
    {
      title: "Build a culture of change",
      points: ["Build once, innovate everywhere", "Build a culture of change"],
    },
  ];

  return (
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Why IT Modernization?
        </h2>

        {/* Dropdown Container */}
        <div className="space-y-6">
          {wtmData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-white shadow-sm"
            >
              {/* Header (Clickable to Toggle) */}
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg text-gray-900 hover:bg-gray-100 transition-all"
              >
                {item.title}
                <span className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                  ▼
                </span>
              </button>

              {/* Content (Dropdown) */}
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 p-5" : "max-h-0 p-0"
                }`}
              >
                <ul className="space-y-3 text-gray-700">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-4">
                    <span className="w-4 h-3 text-pink-700 justify-center items-center">&#9733;</span>
                    {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-2xl font-semibold text-pink-800 mb-8">
            Book a consultation with our experts for a proof-of-concept (POC)
          </p>
          <Button label="Request A Call" />
        </div>
      </div>
    </section>
  );
};

export default WhyItM;
