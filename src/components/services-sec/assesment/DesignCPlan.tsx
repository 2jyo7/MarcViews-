import PopUpEffect from "@/components/common/PopUpEffect ";
import { DCustomPlanType } from "@/types/DCustomPlan ";
import React from "react";

const DesignCPlan = () => {
  const DesignCustomParas: DCustomPlanType[] = [
    {
      id: "DCP1",
      para: "Detect the presence of ransomware through security alerts, abnormal behavior.Identify the type and variant of ransomware to understand its capabilities and potential impact. ",
    },
    {
      id: "DCP2",
      para: "Isolate affected systems from the network to prevent the ransomware from spreading further.Disconnect infected devices from the internet to limit communication with the attacker's infrastructure. ",
    },
    {
      id: "DCP3",
      para: "Assess the extent of the attack and identify which systems, files, and data have been compromised.Determine the potential impact on business operations and critical data.",
    },
    {
      id: "DCP4",
      para: "Evaluate whether to pay the ransom, considering legal, ethical, operational implications  and make informed decisions. ",
    },
    {
      id: "DCP5",
      para: "Restore systems and data from clean backups that were not affected by the attack .Verify the integrity of backups before restoration to avoid reintroducing the ransomware.  ",
    },
    {
      id: "DCP6",
      para: "Identify and address vulnerabilities that allowed the ransomware to enter the network. Apply security patches, updates, and configuration changes to prevent future attacks. ",
    },
    {
      id: "DCP7",
      para: "Document all actions taken during the response process for post-incident analysis and reporting.  ",
    },
    {
      id: "DCP8",
      para: "Train employees on how to recognize and respond to phishing and ransomware threats.   ",
    },
    {
      id: "DCP9",
      para: "Document all actions taken during the response process for post-incident analysis and reporting.",
    },
  ];

  return (
    <div className="p-6 md:p-10 lg:p-16 bg-gray-50 container mx-auto">
      <div>
        {/* Title */}
        <h1 className="heading-style text-bg-style">
          Design a Custom Plan for Your Business
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {DesignCustomParas.map((DCitem) => (
            <div
              key={DCitem.id}
              className="bg-gray-800 shadow-md p-4 rounded-lg border border-gray-200 text-white"
            >
              <PopUpEffect delay={0.3}>{DCitem.para}</PopUpEffect>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignCPlan;
