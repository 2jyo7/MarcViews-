import React from "react";
import Image from "next/image";
import KeyFeatureComp from "@/components/common/KeyFeature ";

const CloudSecBenefits = () => {
  const cloudSBenefitData = [
    {
      id: "csb1",
      title: "Accelerated deployment and provisioning",
    },
    {
      id: "csb2",
      title: "Increased agility",
    },
    {
      id: "csb3",
      title: "More flexible capacity/ scalability",
    },
    {
      id: "csb4",
      title: "Improved availability and business continuity",
    },
    {
      id: "csb5",
      title: "Improved Cloud Security",
      para: "CSPM continuously monitor cloud environments, helping identify and address misconfigurations, vulnerabilities, and potential security risks. By rectifying these issues proactively, organizations can significantly enhance their overall cloud security posture ",
    },
    {
      id: "csb6",
      title: "Real-Time Threat Detection",
      para: "CSPM solutions provide real-time alerts and notifications for security incidents, policy violations, and potential threats. This enables organizations to respond promptly to security issues and reduce the time it takes to detect and remediate threats. ",
    },
    {
      id: "csb7",
      title: "Enhanced Visibility and Control",
      para: "CSPM provides comprehensive visibility into cloud assets, resources, and configurations. It helps organizations gain better control over their cloud environments by identifying unused or unnecessary resources and managing access permissions effectively. ",
    },
    {
      id: "csb8",
      title: "Cost Optimization",
      para: "CSPM solutions help identify inefficient resource allocation, unused resources, and over-provisioned services in the cloud. This optimization leads to cost savings and better resource utilization. ",
    },
    {
      id: "csb9",
      title: "Centralized Management",
      para: "CSPM offer centralized management of security policies and configurations across multiple cloud platforms, making it easier for organizations to enforce consistent security measures.",
    },
    {
      id: "csb10",
      title: "Faster Incident Response",
      para: "With real-time alerts and automated remediation, CSPM enables organizations to respond quickly to security incidents, mitigating potential damage and reducing the impact of cyber threats. ",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Benefits
        </h1>
        <div className="flex flex-col  items-center justify-center gap-8">
          <div className="w-full flex justify-center">
            <Image
              alt="benefit-sec-img"
              width={200}
              height={200}
              className="object-cover rounded-lg shadow-lg w-[28rem] h-64"
              src={
                "https://plus.unsplash.com/premium_photo-1683288706548-e8b6bb72fe86?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudSBenefitData.map((data) => (
              <KeyFeatureComp key={data.id} {...data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudSecBenefits;
