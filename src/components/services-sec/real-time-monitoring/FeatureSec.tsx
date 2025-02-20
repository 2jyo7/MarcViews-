import { FeaturesType } from "@/types/FeaturesType ";
import React from "react";

const FeatureSec = () => {
  const FeaturesServ: FeaturesType[] = [
    {
      title: "AWS Architecture Design",
      para: "Customized design and architecture planning for AWS environments based on client requirements, best practices, and industry standards, ensuring scalability, reliability, and cost efficiency.",
    },
    {
      title: "Infrastructure Provisioning",
      para: "Automated provisioning and deployment of virtual servers, storage, networking, and other AWS resources using Infrastructure as Code (IaC) tools such as AWS CloudFormation or Terraform.  ",
    },
    {
      title: "Security Configuration",
      para: "Implementation and configuration of security controls, policies, and best practices to protect AWS resources and data, including network security, identity and access management (IAM), encryption, and compliance. ",
    },
    {
      title: "Monitoring and Performance Optimization",
      para: "Continuous monitoring of AWS infrastructure and workloads for performance metrics, resource utilization, and security events, with proactive optimization and tuning to maximize efficiency and reliability.  ",
    },
    {
      title: "Backup and Disaster Recovery:",
      para: "Implementation and management of backup, replication, and disaster recovery solutions on AWS, leveraging services such as AWS Backup, Amazon S3, AWS Disaster Recovery, and AWS Glacier for data protection and business continuity. ",
    },
    {
      title: "Cost Management",
      para: "Cost monitoring, optimization, and forecasting to help clients manage and control AWS spending, including rightsizing of resources, utilization analysis, and recommendations for cost-saving strategies.  ",
    },
    {
      title: "Compliance and Governance",
      para: "Implementation of compliance controls and governance policies to ensure adherence to regulatory requirements (e.g., GDPR, HIPAA, PCI DSS, PIPEDA) and industry standards within AWS environments, with regular audits and reporting.  ",
    },
    {
      title: "24/7 Support and Incident Response",
      para: "Round-the-clock support and incident response services from our team of AWS-certified engineers, providing rapid resolution of issues, troubleshooting, and escalation management as needed.  ",
    },
    {
      title: "Strong Access Controls",
      para: "Implement robust access controls to limit and manage user privileges. This includes enforcing strong passwords, multi-factor authentication (MFA), and role-based access control (RBAC) to ensure that only authorized individuals have access to critical systems and resources. ",
    },
    {
      title: "Network Segmentation",
      para: "Segmenting networks into smaller, isolated segments with firewalls and VLANs helps contain potential breaches and limit lateral movement by attackers. This way, even if one segment is compromised, the impact can be minimized on other areas of the infrastructure (Reducing the Blast Radius).",
    },
    {
      title: "Threat Detection and Prevention:",
      para: " AI-powered systems can analyze vast amounts of data in real-time, enabling early detection and prevention of security threats. Machine learning algorithms can identify patterns and anomalies that indicate potential attacks, such as malware, intrusion attempts, or unauthorized access.",
    },
    {
      title: "Security Monitoring and Logging",
      para: "Implement robust monitoring and logging mechanisms to capture and analyze security events and activities within the infrastructure. Centralized logging, security information and event management (SIEM) systems, and security analytics help identify suspicious patterns, detect security incidents, and facilitate incident response. ",
    },
    {
      title: "Encryption",
      para: "Implement encryption mechanisms to protect sensitive data both at rest and in transit. This includes encrypting data on storage devices, encrypting network communications with protocols like HTTPS, and using encryption for sensitive information stored in databases. ",
    },
    {
      title: "Regular Security Audits and Penetration Testing",
      para: "Conduct regular security audits, vulnerability assessments, and penetration testing to identify weaknesses, misconfigurations, and potential entry points in the infrastructure. Regular testing helps proactively address vulnerabilities and enhance overall security. ",
    },
    {
      title: "Regular Backups and Disaster Recovery",
      para: "Establish a comprehensive backup strategy that includes regular backups of critical data and systems. Implement a reliable backup solution and periodically test the restoration process to ensure data integrity and availability in the event of a disaster.",
    },
    {
      title: "Real-Time Response and Automation",
      para: "Real-time response to security incidents by automating certain actions based on predefined rules or machine learning models. This accelerates incident response and reduces manual intervention, allowing security teams to focus on complex tasks. ",
    },
    {
      title: "Threat Intelligence and Prediction",
      para: "Threat intelligence feeds, security research, and historical data to identify emerging threats and predict potential attack scenarios. This enables proactive defense measures, including preemptive patching, system hardening, and proactive threat hunting. ",
    },
    {
      title: "Security Analytics and Forensic",
      para: "We use security analytics platforms to process and correlate vast amounts of security event data, logs, and incident information. This facilitates faster investigation, forensic analysis, and the identification of attack patterns or indicators of compromise.",
    },
    {
      title: "Fraud Detection and Prevention",
      para: "We use AI technology in detecting and preventing fraud by analyzing patterns in transactional data, user behavior, and account activities. Machine learning models can identify suspicious or fraudulent transactions, reducing financial losses and protecting customer assets.  ",
    },
  ];

  return (
    <div className="flex flex-col items-center py-12 px-6">
      <h1 className="text-2xl font-semibold border-b-4 border-pink-600 pb-2 mb-8">
        Key Features
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl ">
        {FeaturesServ.map((feature) => (
          <div
            key={feature.title}
            className="  p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl border border-dotted border-pink-800"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-3 hover:text-pink-900 dark:text-white">
              {feature.title}
            </h2>
            <p className="text-gray-700 text-justify dark:text-white">
              {feature.para}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSec;
