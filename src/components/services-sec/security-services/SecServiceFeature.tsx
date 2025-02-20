import KeyFeatureComp from "@/components/common/KeyFeature ";
import React from "react";

const SecServiceFeature = () => {
  const FeatureSecData = [
    {
      id: "FSD01",
      title: "24/7 Monitoring and Threat Detection",
      para: "Our SOC team operates round-the-clock to monitor network traffic, logs, and security events to detect potential threats and anomalies.  It involves constant surveillance of an organization's network, systems, and applications to identify and respond to potential security threats in real-time. ",
    },
    {
      id: "FSD02",
      title: "Incident Response and Investigation",
      para: "Expert analysts respond to security incidents promptly, investigate the scope and impact of breaches, and take necessary actions for containment and mitigation. We will proactively act against any incident. ",
    },
    {
      id: "FSD03",
      title: "Threat Intelligence Integration",
      para: "We leverage threat intelligence feeds from diverse sources and databases to enrich analysis and stay updated on the latest threat trends.Our teams works on 24/7 intel gathering and effectively",
    },
    {
      id: "FSD04",
      title: "Vulnerability Management",
      para: "SOC analysts assess and prioritize vulnerabilities to help organizations strengthen their security posture.Advanced security tools like SIEM, IDS/IPS, XDR enhance our threat detection capabilities.  ",
    },
    {
      id: "FSD05",
      title: "Compliance and Reporting",
      para: "SOC as a Service helps organizations meet regulatory compliance requirements by providing regular reports on security incidents and activities. We send reports to our clients on regular basis. ",
    },
  ];

  return (
    <div className="flex flex-col items-center py-12 px-6">
      <h1 className="text-2xl font-semibold border-b-4 border-pink-600 pb-2 mb-8">
        Key Features
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl ">
        {FeatureSecData.map((feature) => (
          <KeyFeatureComp
            key={feature.id}
            title={feature.title}
            para={feature.para}
          />
        ))}
      </div>
    </div>
  );
};

export default SecServiceFeature;
