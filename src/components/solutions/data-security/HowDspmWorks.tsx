import { DspmListItemType } from "@/types/DspmHowWorksType ";
import React from "react";

const HowDspmWorks: React.FC = () => {
  const dspmLists: DspmListItemType[] = [
    {
      title: "4 key components:",
      para: "",
      points: [
        "Data discovery",
        "Data classification",
        "Risk assessment and prioritization",
        "Remediation and prevention",
      ],
    },
    {
      title: "Data discovery",
      para: "DSPM solutions’ data discovery capabilities continuously scan for sensitive data assets wherever they might exist. This includes scanning across:",
      points: [
        "on-premises and in cloud environments",
        "all cloud providers- AWS, GCP, Azure, IBM Cloud.",
        "all cloud services- Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), and Database-as-a-Service (DBaaS).",
        "all types of data and data stores.",
      ],
    },
    {
      title: "Data classification",
      para: "In the context of DSPM, data classification categorizes data according to its sensitivity, by determining the following for each data asset:",
      points: [
        "The level of data sensitivity—is it PII, confidential, related to trade secrets, or others.",
        "Who can and should be authorized to access the data.",
        "How the data is being stored, handled and used.",
        "If the data is subject to regulatory frameworks- HIPAA, PCI-DSS, GDPR, CCPA.",
      ],
    },
    {
      title: "Risk assessment and prioritization",
      para: "DSPM identifies and prioritizes vulnerabilities associated with each data asset. Primarily, DSPM looks for the following vulnerabilities:",
      points: [
        "Misconfigurations",
        "Over entitlements",
        "Data flow and data lineage issues",
        "Security policy and regulatory violations",
      ],
    },
    {
      title: "Remediation and prevention",
      para: "DSPM solutions provide reporting and real-time dashboards that prioritize vulnerabilities according to severity, so that security and risk management teams can focus on remediating the most critical issues.",
      points: [],
    },
  ];

  return (
    <section className="py-10 lg:py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          How Data Security Posture Management (DSPM) Works?
        </h1>
        <div className="bg-white p-6 shadow-lg rounded-lg max-w-3xl mx-auto space-y-4">
          <p className="text-gray-700 leading-relaxed border-b-2 border-gray-300 pb-4">
            DSPM solutions locate an organization’s sensitive data, assess its
            security posture, remediate its vulnerabilities in keeping with the
            organization’s security goals and compliance requirements, and
            implement safeguards and monitoring to prevent recurrence of
            identified vulnerabilities.
          </p>
          <p className="text-gray-700 leading-relaxed">
            DSPM solutions are agentless (meaning they don’t require deploying a
            separate software app to each asset or resource being monitored and
            protected) and provide a high degree of automation.
          </p>
        </div>
        <div className="py-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dspmLists.map((dspm) => (
            <div
              key={dspm.title}
              className="bg-pink-700 p-6 shadow-md rounded-lg shadow-neutral-700"
            >
              <h2 className="text-xl font-semibold text-white mb-2">
                {dspm.title}
              </h2>
              {dspm.para && <p className="text-white/80 mb-3">{dspm.para}</p>}
              {dspm.points.length > 0 && (
                <ul className="list-disc pl-5 text-gray-600 bg-white rounded-md p-4  space-y-1">
                  {dspm.points.map((point, i) => (
                    <li key={i} className="list-none">
                      <span className="text-lime-600 p-1">✔</span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowDspmWorks;
