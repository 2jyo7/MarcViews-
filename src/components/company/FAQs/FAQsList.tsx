"use client";
import Link from "next/link";
import React, { useState } from "react";

const FAQsList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const FAQD1 = [
    {
      title: "What is Managed IT Services?",
      para: "Managed IT Services is a comprehensive approach where an external IT service provider takes responsibility for managing an organization's IT infrastructure and operations. This includes tasks like network management, cybersecurity, cloud services, and help desk support.",
    },
    {
      title: "Why should I consider IT Managed Services?",
      para: "",
      points: [
        "Cost-Effective: Reduces IT expenses by outsourcing to experts.",
        "Increased Productivity: Focus on core business operations, not IT issues.",
        "Enhanced Security: Proactive security measures to protect your data.",
        "Scalability: Easily adapt to changing business needs.",
        "Expert Support: 24/7 access to skilled IT professionals.",
      ],
    },
    {
      title: "What is included in the Managed IT Services package..?",
      para: "Typical services include:",
      points: [
        "Network monitoring and management",
        "Cybersecurity and threat protection",
        "Cloud services management",
        "Help desk and technical support",
        "Data backup and disaster recovery",
        "IT consulting and strategic planning",
      ],
    },
    {
      title: "How will Managed IT Services impact my business operations..?",
      para: "You'll experience smoother IT operations, reduced downtime, and improved security. Your IT team can focus on strategic initiatives, while the managed service provider handles the day-to-day tasks.",
    },
    {
      title: "How do I transition to Managed IT Services..?",
      para: "The transition process is typically seamless. Our onboarding team will work closely with your team to assess your current IT infrastructure, develop a transition plan, and minimize disruptions.",
    },
    {
      title: "How can Managed IT Services enhance my cybersecurity?",
      para: "We employ advanced security measures like:",
      points: [
        "Regular security audits and vulnerability assessments",
        "Intrusion detection and prevention systems",
        "Endpoint protection solutions",
        "Firewall configuration and management",
        "Regular security awareness training for employees",
      ],
    },
    {
      title: "How do you protect my sensitive information?",
      para: "We implement robust security protocols, including:",
      points: [
        "Data encryption",
        "Access controls and user authentication",
        "Regular backups and disaster recovery plans",
        "Compliance with industry standards (e.g., GDPR, PCI-DSS, HIPAA, PIPEDA)",
      ],
    },
    {
      title: "Can you help me migrate to the cloud?",
      para: "Yes, we offer cloud migration services to help you transition to cloud-based solutions. We can assess your needs, choose the right cloud platform, and manage the migration process.",
    },
    {
      title: "How does it ensure cloud security?",
      para: "We employ best practices to secure cloud environments, including:",
      points: [
        "Regular security assessments",
        "Access controls and identity management",
        "Data encryption",
        "Network security measures",
        "Compliance with cloud security standards",
      ],
    },
    {
      title: "How can I measure the ROI of Managed IT Services..?",
      para: "Measure the ROI by tracking:",
      points: [
        "Reduced IT costs",
        "Increased productivity",
        "Improved security posture",
        "Minimized downtime",
        "Enhanced employee satisfaction",
      ],
    },
  ];

  return (
    <section className="max-w-4xl mx-auto p-6 py-16">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-700">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-500 mt-2">
          Please reach us at{" "}
          <span>
            <Link
              href="https://gmail.com"
              target="_blank"
              className="text-pink-700 hover:underline"
            >
              contact@marcviews.com
            </Link>
          </span>{" "}
          if you cannot find an answer to your question.
        </p>
      </div>
      <div className="space-y-6">
        {FAQD1.map((faq, index) => (
          <div
            key={index}
            className="bg-black p-5 shadow-md rounded-lg text-lime-500"
          >
            <button
              className="w-full text-left text-xl font-semibold flex justify-between items-center hover:text-lime-300 transition-all duration-200"
              onClick={() => toggleFAQ(index)}
            >
              {faq.title}
              <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="mt-2 text-gray-300">
                {faq.para && <p>{faq.para}</p>}
                {faq.points && (
                  <ul className="list-disc pl-6 mt-2">
                    {faq.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQsList;
