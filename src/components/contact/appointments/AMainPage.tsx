"use client";
import React, { useState } from "react";
import AppointmentsCard from "./AppointmentsCard";

const AMainPage = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const aCardData = [
    {
      title: "Compliance and Regulatory Assessment",
      time: "5 hrs",
      price: "C$999 (pay later)",
      para: "Identifying and evaluating vulnerabilities in systems, networks, and applications to prioritize remediation efforts.& Stakeholder engagement.",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5387-731c8e6.jpg/:/rs=h:%7B640%7D",
    },
    {
      title: "Cyber Resilience Assessment",
      time: "5 hrs",
      price: "C$1,399 (pay later)",
      para: "The goal of the Ransomware Readiness Assessment is to strengthen the overall ability of an organization to respond efficiently and effectively to an unexpected ransomware incident and help prioritize cybersecurity actions and investments.",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5501.jpg/:/rs=h:%7B640%7D",
    },
    {
      title: "Data Governance-as-a-Service",
      time: "1 hrs",
      price: "Contact sales",
      para: "This service is centered around becoming the trusted partner for organizations seeking to unlock the full potential of their data through effective and sustainable governance.We will empower your organization to establish a robust data governance framework, ensuring data quality, compliance, and business value. Leveraging our expertise in both cloud and on-premise data protection, we provide a tailored approach to help you navigate the complexities of data management.",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5287.jpg/:/rs=h:%7B640%7D",
    },
    {
      title: "General Consultation/Product Demo/PoC /Solution Assessment",
      time: "30 mins",
      price: "Free",
      para: "Please mention the name of product/service for which you are requesting this session.",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5497-dba060d.jpg/:/rs=h:%7B640%7D",
    },
    {
      title: "Disaster Recovery Service",
      time: "3 hrs",
      price: "C$8999 (pay later)",
      para: "This service is designed to help businesses recover quickly, minimizing downtime and protecting critical operations.",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_6291.jpg/:/rs=h:%7B640%7D",
    },
    {
      title: "Employee Training (Package)",
      time: "20 hrs",
      price: "Contact Us",
      para: "Educating employees on security best practices, phishing awareness, social engineering tactics, and other cybersecurity-related topics to enhance the organization's overall security posture.",
      imgUrl: "https://img1.wsimg.com/isteam/stock/BpD2gwm/:/rs=h:%7B640%7D",
    },
    {
      title: "Personal Cyber Classes (Cyber Defense)",
      time: "2 hrs",
      price: "Contact us",
      para: "This service is dedicated for individuals (14+) who wants to learn and start their career in cybersecurity field.",
      imgUrl:
        "https://img1.wsimg.com/isteam/stock/upmAxdPJbBImZ3Aro/:/rs=h:%7B640%7D",
    },
    {
      title: "Ransomware Readiness Assessment",
      time: "5 hrs",
      price: "C$999 (pay later)",
      para: "The goal of the Ransomware Readiness Assessment is to strengthen the overall ability of an organization to respond efficiently and effectively to an unexpected ransomware incident and help prioritize cybersecurity actions and investments.",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_6281.jpg/:/rs=h:%7B640%7D",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-100">
      <div className="container mx-auto px-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
          Appointments
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {aCardData.map((card, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                expandedCard !== null && expandedCard !== index
                  ? "blur-sm opacity-50"
                  : ""
              }`}
            >
              <AppointmentsCard
                id={card.title}
                title={card.title}
                time={card.time}
                price={card.price} // No parsedPrice here
                para={card.para}
                imgUrl={card.imgUrl}
                isActive={expandedCard === index}
                onExpand={() => setExpandedCard(index)}
                onClose={() => setExpandedCard(null)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AMainPage;
