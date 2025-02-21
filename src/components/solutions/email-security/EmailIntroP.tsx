import Button from "@/components/common/Button ";
import LiFeaturesComp from "@/components/common/LiFeaturesComp ";
import React from "react";

const EmailIntroP = () => {
  const EIFeatures = [
    "99.97% Spam Capture Rate",
    "Inbound and Outbound Filtering",
    "Integration with Customer LDAP",
    "Secure Message Delivery (TLS)",
    "Post-delivery Clawback of Newly Discovered Email Threats",
    "Virus Outbreak Service",
    "Identity-Based Encryption (IBE)",
    "Content Disarm and Reconstruction",
    "URL Click Protection",
    "Impersonation Analysis",
    "Real-time Scanning of Microsoft 365 Mailboxes",
    "Scheduled Scanning of Microsoft 365 Mailboxes",
    "Cloud Sandboxing",
    "Content Detection",
    "Management, Logging & Reporting",
    "Targeted Attack Protection",
    "API Integration",
  ];

  return (
    <section className="py-12 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700">
          99.97% Email Security Protection
        </h1>
        <div className="border-t-4 border-pink-600 w-32 mx-auto my-4"></div>
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-10">
          <div className="mb-8">
            <p className="text-lg leading-relaxed text-gray-700">
              Email security solutions for organizations that prefer full
              control and management over their email security infrastructure.
              Get advanced multi-layered protection against the full spectrum of
              email-borne threats. Our solutions will prevent, detect, and
              respond to email-based threats including spam, phishing, malware,
              zero-day threats, impersonation, and Business Email Compromise
              (BEC) attacks. Check the box against:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-800 font-medium">
              <li>Spam</li>
              <li>Phishing</li>
              <li>Spear-phishing and Whale phishing</li>
              <li>Malicious Attachments and URLs</li>
              <li>Ransomware</li>
              <li>Zero-day Threats</li>
              <li>Impersonation</li>
              <li>Business Email Compromise (BEC)</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Features
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-800">
              {EIFeatures.map((eif) => (
                // <li
                //   key={eif}
                //   className="bg-blue-50 p-3 rounded-lg shadow-sm border-l-4 border-blue-500"
                // >
                //   {eif}
                // </li>
                <LiFeaturesComp
                  key={eif}
                  liPoints={eif}
                  className="border-blue-500"
                />
              ))}
            </ul>
            <div className="text-center mt-8">
              <Button label="Contact Us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailIntroP;
