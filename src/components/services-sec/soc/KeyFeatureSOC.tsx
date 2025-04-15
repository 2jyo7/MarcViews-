import Button from "@/components/common/Button ";
import KeyFeatureComp from "@/components/common/KeyFeature ";
import React from "react";

const KeyFeatureSOC = () => {
  const KeyFeatureData = [
    {
      id: "SKF01",
      title: "24/7 Monitoring and Threat Detection",
      para: "Our SOC team operates round-the-clock to monitor network traffic, logs, and security events to detect potential threats and anomalies. It involves constant surveillance of an organization's network, systems, and applications to identify and respond to potential security threats in real-time. ",
    },
    {
      id: "SKF02",
      title: "Incident Response and Investigation",
      para: "Expert analysts respond to security incidents promptly, investigate the scope and impact of breaches, and take necessary actions for containment and mitigation. We will proactively act against any incident.",
    },
    {
      id: "SKF03",
      title: "Threat Intelligence Integration",
      para: "We leverage threat intelligence feeds from diverse sources and databases to enrich analysis and stay updated on the latest threat trends. Our teams work on 24/7 intel gathering and effectively respond to emerging threats.",
    },
    {
      id: "SKF04",
      title: "Vulnerability Management",
      para: "SOC analysts assess and prioritize vulnerabilities to help organizations strengthen their security posture. Advanced security tools like SIEM, IDS/IPS, and XDR enhance our threat detection capabilities.",
    },
    {
      id: "SKF05",
      title: "Compliance and Reporting",
      para: "SOC as a Service helps organizations meet regulatory compliance requirements by providing regular reports on security incidents and activities. We send reports to our clients on a regular basis.",
    },
  ];

  return (
    <section className="p-6 md:p-12 bg-gray-100 rounded-lg shadow-lg text-center">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        Key Features
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {KeyFeatureData.map((KFeature) => (
          <KeyFeatureComp
            key={KFeature.id}
            title={KFeature.title}
            para={KFeature.para}
            className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
          />
        ))}
      </div>
      <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
        <Button label="Book A Demo" href="/appointments" />
        <Button label="Request A Consultation" href="/contact-us" />
      </div>
    </section>
  );
};

export default KeyFeatureSOC;
