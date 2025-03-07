import React from "react";

const DNRPowerOfAI = () => {
  const dnrPowerAI = [
    {
      title: "Advanced Threat Detection",
      para: [
        "By leveraging machine learning algorithms, we identify patterns, anomalies, and indicators of compromise, allowing us to detect emerging threats and sophisticated attack techniques.",
      ],
    },
    {
      title: "Behavioral Analytics",
      para: [
        "By detecting anomalous behavior indicative of insider threats or compromised accounts, we can swiftly respond to potential security incidents before they escalate.",
      ],
    },
    {
      title: "Predictive Intelligence",
      para: [
        "Predictive intelligence provides insights into future cyber threats, allowing organizations to proactively fortify their defenses.",
        "By analyzing historical data, threat intelligence feeds, and emerging trends, we can anticipate potential threats and vulnerabilities, enabling proactive mitigation measures to be implemented.",
      ],
    },
    {
      title: "Automated Incident Response",
      para: [
        "With AI-driven automation, we streamline incident response processes, enabling rapid detection, analysis, and remediation of security incidents.",
        "Our automated playbooks and workflows orchestrate response actions, such as threat containment, isolation, and remediation, minimizing the impact of security breaches and reducing response times.",
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          How We Harness the Power of AI?
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dnrPowerAI.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h2>
              {item.para.map((text, idx) => (
                <p key={idx} className="text-gray-700 text-sm leading-relaxed mt-2">
                  {text}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DNRPowerOfAI;
