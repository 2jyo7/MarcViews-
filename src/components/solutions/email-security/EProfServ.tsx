import LiFeaturesComp from "@/components/common/LiFeaturesComp ";
import React from "react";

const EProfServ = () => {
  const EPServData = [
    {
      title: "Phishing Simulation",
      points: [
        "Simulate targeted phishing attacks to assess user awareness and response",
        "Customized phishing emails to mimic real-world threats",
        "User behavior analysis and vulnerabilities identification",
        "Detailed reports on phishing campaign performance",
        "Remediation training to improve user awareness",
      ],
    },
    {
      title: "Phishing Threat Intelligence",
      points: [
        "Monitoring the latest phishing trends and techniques",
        "Identification of emerging threats and potential attack vectors",
        "Receive timely alerts and advisories",
        "Threat hunting and incident response simulation",
        "Sharing the best practices and insights to mitigate phishing risks",
      ],
    },
    {
      title: "Custom Phishing Campaign",
      points: [
        "Get tailored phishing campaigns based on your industry-specific needs",
        "Creation of realistic phishing emails, landing pages, and payloads",
        "Delivering highly targeted attacks to specific user groups",
        "Utilizing advanced social engineering techniques to increase effectiveness.",
        "Get detailed campaign analytics and reporting.",
      ],
    },
  ];

  return (
    <section className="py-12 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 w-full max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6">
          Professional Services
        </h1>
        <div className="space-y-8">
          {EPServData.map((epd) => (
            <div
              key={epd.title}
              className="bg-white shadow-lg rounded-lg p-6 md:p-8 border-l-4 border-blue-500"
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                {epd.title}
              </h2>
              <ul className="space-y-3">
                {epd.points.map((point, i) => (
                  <LiFeaturesComp
                    key={i}
                    liPoints={point}
                    className="border-pink-600"
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

export default EProfServ;
