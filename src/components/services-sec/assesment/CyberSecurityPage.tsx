import BlurGlowEffect from "@/components/common/BlurGlowEffect ";
import { CSDataTypes } from "@/types/CSDataTypes ";
import React from "react";

const CyberSecurityPage = () => {
  const CyberSecData: CSDataTypes[] = [
    {
      id: "CSD01",
      title: "IDENTIFY",
      CSpara:
        "The mix of IT and business-critical assets, threat intelligence, and vulnerabilities that determine an organization’s ransomware attack surface.",
      CSpoints: ["Risk Assessment", "Attack Surface Management"],
    },
    {
      id: "CSD02",
      title: "PROTECT",
      CSpara:
        "The defenses in place prevent ransomware vectors or, if an initial compromise is successful, halt further action (lateral movement,  credential misuse) by the attacker.",
      CSpoints: [
        "Network Security ",
        "Application Security ",
        "Data Protection ",
        "Email Security ",
        "Employee Training ",
        " Identity",
      ],
    },
    {
      id: "CSD03",
      title: "RESPOND",
      CSpara:
        "Reactions to ransomware that require a solid game plan with an understanding of the technical options, communication needs,  and business impacts.",
      CSpoints: [
        "Active Incident ",
        "Logging and Analytics ",
        "Security Orchestration  and Automation ",
      ],
    },
    {
      id: "CSD04",
      title: "DETECT",
      CSpara:
        "Visibility to ransomware attacker(s) as they enter and scout an environment before they fully strike.",
      CSpoints: ["Deception ", "Endpoint Protection ", "File/URL Analysis"],
    },
    {
      id: "CSD05",
      title: "RECOVER",
      CSpara:
        "Clean, protected backups to restore systems quickly and large-scale mitigation planning to minimize a ransomware incident .",
      CSpoints: ["Recover with confidence "],
    },
  ];

  return (
    <div className="p-4 md:p-8 lg:p-12 bg-gray-50">
      {/* Main Title */}
      <h1 className="heading-style text-bg-style">Cyber Security Framework</h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {CyberSecData.map((CSD) => (
          <div
            key={CSD.id}
            className="bg-white shadow-lg rounded-lg border border-gray-200 p-6"
          >
            {/* Title */}
            <h2 className="title-style text-bg-style">{CSD.title}</h2>
            <BlurGlowEffect direction="left">
              {/* Paragraph */}
              <p className="description-style">{CSD.CSpara}</p>
            </BlurGlowEffect>
            <BlurGlowEffect direction="right">
              {/* Points */}
              <ul className="list-disc list-inside text-gray-600 space-y-2 py-2">
                {CSD.CSpoints.map((point, i) => (
                  <li key={i} className="text-base lg:text-lg">
                    {point}
                  </li>
                ))}
              </ul>{" "}
            </BlurGlowEffect>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CyberSecurityPage;
