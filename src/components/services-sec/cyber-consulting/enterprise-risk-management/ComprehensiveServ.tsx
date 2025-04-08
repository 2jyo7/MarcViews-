import LiFeaturesComp from "@/components/common/LiFeaturesComp ";
import React from "react";

const ComprehensiveServ = () => {
  const comprehensiveData = [
    {
      title: "Attack Surface Monitoring",
      points: [
        "Shadow IT & Asset Discovery",
        "Vulnerabilities & Exposure Detection",
        "Active Vulnerability Scanning",
      ],
    },
    {
      title: "Global Threat Intelligence",
      points: [
        "Ransomware Watch & Threat Landscape",
        "Enriched IoC Feeds",
        "Intelligence Knowledgebase",
      ],
    },
    {
      title: "Targeted Threat Intelligence",
      points: [
        "Dark Web Monitoring & Actor Chatter",
        "Credentials and Account Takeover",
        "Fraud & Data Leakage",
      ],
    },
    {
      title: "Supply Chain Intelligence",
      points: [
        "Vendors & Technology Detection",
        "3rd Party Risk Management",
        "Alerting on Critical Risk and Breaches",
      ],
    },
    {
      title: "Brand Protection",
      points: [
        "Brand & Phishing Protection",
        "Social Media Impersonation",
        "Mobile App Impersonation",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <h2 className="heading-style text-bg-style">Comprehensive Service</h2>

        <div className="grid gap-10 md:grid-cols-2">
          {comprehensiveData.map((cd) => (
            <div
              key={cd.title}
              className="p-6 border rounded-xl shadow-sm bg-neutral-800 text-white"
            >
              <h2 className="more-title-style ">{cd.title}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {cd.points.map((point) => (
                  <LiFeaturesComp key={point} liPoints={point} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveServ;
