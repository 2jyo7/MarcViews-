import PopUpEffect from "@/components/common/PopUpEffect ";
import { BenefitsCardTypes } from "@/types/BenefitsCardType ";
import React from "react";

const BenefitsSec = () => {
  const BenefitsCard: BenefitsCardTypes[] = [
    {
      id: "BC1",
      title: "Competitive Advantage",
      description:
        "Demonstrating a strong commitment to cybersecurity through regular assessments can be a competitive advantage. Clients, customers, and partners often prefer to work with organizations that take security seriously.  ",
    },
    {
      id: "BC2",
      title: "Cost Savings",
      description:
        "Preventing a cyberattack is typically less expensive than dealing with the aftermath of a breach. Cyber threat assessments can identify cost-effective security measures and help organizations avoid significant financial losses. ",
    },
    {
      id: "BC3",
      title: "Compliance Assurance",
      description:
        "Organizations have to follow PCI-DSS and HIPPA regulatory requirements. Cyber threat assessments help organizations ensure they are in compliance with these regulations, avoiding legal and financial consequences. ",
    },
    {
      id: "BC4",
      title: "Data Protection",
      description:
        "Cyber threat assessments help organizations protect sensitive data by identifying areas where data may be at risk. This is especially crucial in industries like healthcare and finance, where data protection is paramount. ",
    },
    {
      id: "BC5",
      title: "Enhanced Security Posture",
      description:
        "Cyber threat assessments provide organizations with a comprehensive view of their current security measures and weaknesses. This allows administrator to make informed decisions to strengthen their security posture. ",
    },
    {
      id: "BC6",
      title: "Increased Awareness",
      description:
        "This program will raise awareness about the evolving cyber threat landscape among employees and leadership. This heightened awareness can lead to better security practices across the organization. ",
    },
    {
      id: "BC7",
      title: "Improved Incident Response",
      description:
        "Assessments often include evaluating an organization's incident response plan and capabilities. This ensures that in the event of a breach, the organization is prepared to respond effectively, minimizing damage. ",
    },
    {
      id: "BC8",
      title: "Peace of Mind",
      description:
        "Knowing that your organization has undergone a thorough cyber threat assessment and has taken steps to mitigate risks can provide peace of mind to leadership and stakeholders.",
    },
    {
      id: "BC9",
      title: "Risk Mitigation",
      description:
        "By understanding the potential risks and threats specific to your environment, you can develop and implement targeted risk mitigation strategies. This proactive approach reduces the likelihood of costly security breaches.  ",
    },
    {
      id: "BC10",
      title: "Third-Party Risk Assessment",
      description:
        "For organizations that work with third-party vendors and suppliers, cyber threat assessments can be used to assess the security practices of these partners, ensuring that they meet security standards.  ",
    },
    {
      id: "BC11",
      title: "Strategic Planning",
      description:
        "The insights gained from assessments can inform long-term cybersecurity strategies. Organizations can allocate resources more effectively and invest in technologies that align with their specific security needs. ",
    },
    {
      id: "BC12",
      title: "Vulnerability Identification",
      description:
        "These assessments help identify vulnerabilities in an organization's systems, networks, and applications. By knowing where vulnerabilities exist, organizations can prioritize and address them before attackers can exploit them.",
    },
  ];

  return (
    <div className="mx-auto my-3 max-w-5xl px-4 sm:px-6 lg:px-8 container">
      <div className="text-center mb-8">
        <h1 className="heading-style text-bg-style">Benefits</h1>
        <p className="description-style">
          Explore the key benefits of cybersecurity assessments to safeguard
          your organization.
        </p>
      </div>
      <PopUpEffect delay={0.3}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BenefitsCard.map((BCards) => (
            <div
              key={BCards.id}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 dark:border-gray-700 transition transform hover:scale-105 hover:shadow-lg"
            >
              <h2 className="text-bg-style title-style">{BCards.title}</h2>
              <p className="text-gray-700 dark:text-gray-300">
                {BCards.description}
              </p>
            </div>
          ))}
        </div>
      </PopUpEffect>
      <div className="text-center mt-10 my-2 py-2 p-4">
        <h2 className="title-style text-bg-style">
          Get Your Assessments Today!
        </h2>
        <button className="w-full sm:w-[300px] bg-pink-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400 transition">
          Start Here
        </button>
      </div>
    </div>
  );
};

export default BenefitsSec;
