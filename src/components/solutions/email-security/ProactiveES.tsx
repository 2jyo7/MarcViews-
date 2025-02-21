import KeyFeatureComp from "@/components/common/KeyFeature ";
import React from "react";

const ProactiveES = () => {
  const pesData = [
    {
      title: "Multi-Layered Anti-Spam",
      para: "Checks include IP, domain, sender, SPF, DKIM, DMARC and geographical restrictions.",
    },
    {
      title: "Powerful Anti-Malware",
      para: "Combining multiple static and dynamic technologies that include signature, heuristic, and behavioral techniques along with virus outbreak prevention.",
    },
    {
      title: "Advanced Threat Protection",
      para: "For an even stronger defense against the very latest threat classes like business email compromise and targeted attacks, we offer optional content disarm and reconstruction, sandbox analysis, sophisticated spoof detection, and more.",
    },
    {
      title: "Integrated Data Loss Prevention",
      para: "A robust set of capabilities for data loss prevention and email encryption safely deliver sensitive emails and protect against the inadvertent loss of data. These features facilitate compliance with corporate policies and industry regulations.",
    },
    {
      title: "Intuitive Controls",
      para: "Real-time dashboards, rich reporting, centralized quarantine and simple to use end-user controls allow organizations to get running and realize value quickly.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-8">
          Proactive Email Security
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pesData.map((data) => (
            <KeyFeatureComp
              key={data.title}
              title={data.title}
              para={data.para}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600 hover:border-green-700 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProactiveES;
