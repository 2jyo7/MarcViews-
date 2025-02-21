import React from "react";
import KeyFeatureComp from "@/components/common/KeyFeature ";

const CloudSecPostM = () => {
  const HighFidelityData = [
    {
      id: "hfd1",
      title: "Cloud Security Posture Management",
      para: "Identify, prioritize, and auto-remediate events, in context. Visualize security posture, and enforce gold standard policies across accounts, projects, regions and virtual networks. Apply in-place remediation and active security enforcement from CI/CD to runtime.",
    },
    {
      id: "hfd2",
      title: "Cloud Compliance and Governance",
      para: "Conform to regulatory requirements and security best practices automatically, and easily customize policies with GSL. Receive comprehensive assessment status reports for security and compliance posture.",
    },
    {
      id: "hfd3",
      title: "Privileged Identity Protection",
      para: "Enforce just-in-time privilege escalation, including out-of-band on mobile devices. Deny access to critical actions based on IAM users and roles, and continuously audit and analyze IAM users and roles for suspicious activity.",
    },
    {
      id: "hfd4",
      title: "Effective Risk Management",
      para: "Effective Risk Management provides a risk score for every security alert. The platform auto-generates remediation prioritization to ensure that security teams focus on the alerts which are business critical.",
    },
  ];

  const featuredCapData = [
    {
      id: "fc1",
      title: "Cloud Native Application Protection",
      para: "Secure the entire application lifecycle from code-to-cloud. Manage your security posture, detect misconfigurations, enforce best practices, prevent threats, and prioritize risks.",
    },
    {
      id: "fc2",
      title: "Cloud Workload Protection",
      para: "Agentless-wide and agentful-deep runtime protection, including malware, CVE, and services scanning, covering containers, VMs, and serverless functions.",
    },
    {
      id: "fc3",
      title: "Cloud Detection & Response",
      para: "Advanced security intelligence, including cloud intrusion detection, network traffic visualization, and cloud security monitoring and analytics.",
    },
    {
      id: "fc4",
      title: "Code Security",
      para: "Monitor, classify, and protect your code, assets, and infrastructure for exposed API keys, tokens, credentials, and high-risk security misconfigurations at the speed of DevOps.",
    },
  ];

  const cloudBData = [
    { id: "cbd1", title: "Increased responsiveness to customer needs" },
    { id: "cbd2", title: "Accelerated time to market" },
    { id: "cbd3", title: "Decreased risk and improved security" },
    { id: "cbd4", title: "Reduced cost" },
  ];

  const keyPriorData = [
    { id: "kpd1", title: "Preventing cloud misconfigurations" },
    { id: "kpd2", title: "Securing major cloud apps already in use" },
    { id: "kpd3", title: "Defending against malware" },
    { id: "kpd4", title: "Reaching regulatory compliance" },
  ];

  const keyFeatureData = [
    {
      id: "kfd1",
      title: "Cloud Configuration Scanning",
      para: "CSPM tools scan cloud resources, such as virtual machines, storage accounts, databases, and networking components, to identify misconfigurations that could lead to security vulnerabilities.",
    },
    {
      id: "kfd2",
      title: "Compliance Monitoring",
      para: "CSPM tools continuously monitor cloud environments for compliance with regulatory standards (e.g., GDPR, HIPAA, PCI DSS) and organizational policies.",
    },
    {
      id: "kfd3",
      title: "Automated Remediation",
      para: "CSPM tools offer automated remediation capabilities, allowing organizations to fix misconfigurations and security issues automatically or with minimal manual intervention.",
    },
    {
      id: "kfd4",
      title: "Asset Inventory",
      para: "CSPM tools maintain an inventory of all cloud assets and resources, providing visibility into the entire cloud infrastructure.",
    },
    {
      id: "kfd5",
      title: "Continuous Monitoring",
      para: "CSPM solutions provide continuous monitoring of cloud resources to ensure ongoing security and compliance.",
    },
    {
      id: "kfd6",
      title: "Real-Time Alerts",
      para: "CSPM solutions generate real-time alerts for potential security risks and policy violations, enabling rapid response to potential threats.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 ">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
          Cloud Security Posture Management - CSPM
        </h1>

        {/* High Fidelity Section */}
        <div className="mb-12 py-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 ">
            🔒 High Fidelity Cloud Security Posture Management
          </h2>
          <div className="grid md:grid-cols-2 gap-6 ">
            {HighFidelityData.map((data) => (
              <KeyFeatureComp key={data.id} {...data} />
            ))}
          </div>
        </div>

        {/* Featured Capabilities */}
        <div className="mb-12 py-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🚀 Featured Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredCapData.map((data) => (
              <KeyFeatureComp key={data.id} {...data} />
            ))}
          </div>
        </div>

        {/* Cloud Business Outcomes */}
        <div className="mb-12 py-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🌟 Cloud Business Outcomes
          </h2>
          <ul className="space-y-3 bg-white p-6 rounded-lg shadow-md">
            {cloudBData.map((data) => (
              <li key={data.id} className="text-gray-700">
                ✅ {data.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Key Priorities */}
        <div className="mb-12 py-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            ⚡ Key Priorities for Cloud Security Services
          </h2>
          <ul className="space-y-3 bg-white p-6 rounded-lg shadow-md">
            {keyPriorData.map((data) => (
              <li key={data.id} className="text-gray-700">
                🚀 {data.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Key Features */}
        <div className="py-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🔍 Key Features and Functionalities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatureData.map((data) => (
              <KeyFeatureComp key={data.id} {...data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudSecPostM;
