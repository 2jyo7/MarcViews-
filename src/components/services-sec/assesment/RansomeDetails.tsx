import PopUpEffect from "@/components/common/PopUpEffect ";
import { RansomeDetailsDataTypes } from "@/types/RansomeDetailsTypes ";
import React from "react";

const RansomeDetails = () => {
  const RansomeDetailsData: RansomeDetailsDataTypes[] = [
    {
      id: "RSD1",
      title: "The High Cost of Ransomware",
      details: [
        {
          para1:
            "The consequences of ransomware are high. Not only are there monetary implications—even for those with cyber-insurance policies—but businesses suffer from the loss of sensitive data, the disruption of operations, unplanned downtime, and more.",
          para2:
            "With the availability of Ransomware-as-a-Service (RaaS) operations combined with the potential misuse of artificial intelligence (AI), even novice attackers can launch sophisticated ransomware attacks.",
          para3:
            "Technologies essential to thwarting ransomware include Internet-of-Things (IoT) security, secure access service edge (SASE), cloud workload protection, next-generation firewalls (NGFWs), endpoint detection and response (EDR), zero-trust network access (ZTNA), and secure email gateways.",
        },
      ],
    },
    {
      id: "RSD2",
      title: "The Assessment Process",
      details: [
        {
          para1:
            "A risk assessment can quickly identify and prioritize cyber vulnerabilities so that you can immediately… protect critical assets… while immediately improving overall operational cybersecurity.",
          para2:
            "The goal of the Ransomware Readiness Assessment is to strengthen the overall ability of an organization to respond efficiently and effectively to an unexpected ransomware incident and help prioritize cybersecurity actions and investments.",
          para3:
            "The Ransomware Readiness Assessment focuses on the implementation and management of incident response cybersecurity practices specific to known ransomware attacks.",
        },
      ],
    },
  ];

  return (
    <div className="p-4 md:p-8 lg:p-12 border-gray-500 ">
      <PopUpEffect delay={0.4}>
        {RansomeDetailsData.map((RDD) => (
          <div
            key={RDD.id}
            className="mb-8 bg-white shadow-lg p-6 rounded-lg border border-gray-200"
          >
            {/* Title */}
            <h1 className="title-style text-bg-style">{RDD.title}</h1>

            {/* Cards */}
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Mapping Details */}
              {RDD.details.map((detail, index) =>
                Object.values(detail).map((text, idx) => (
                  <div
                    key={`${index}-${idx}`}
                    className=" p-4 shadow-lg rounded-lg border border-gray-300"
                  >
                    <PopUpEffect>
                      <p className="description-style py-4">{text}</p>{" "}
                    </PopUpEffect>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </PopUpEffect>
    </div>
  );
};

export default RansomeDetails;
