"use client";
import Button from "@/components/common/Button ";
import Link from "next/link";
import React, { useState } from "react";

const FAQPCloud = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqPCloudD = [
    {
      title: "Does my data warehouse have fast analytical performance",
      para: "Fast analytical performance is crucial for effective data analysis, data-informed decision making, and business competitiveness.",
    },
    {
      title: "Am I experiencing problems with workload management",
      para: "When long-running and complex queries run on the same on-premises machine, compute and storage are tightly coupled without separation. In this structure, either compute suffers in favor of storage prioritization, or vice versa. This resource-sharing can create scalability and speed issues.",
    },
    {
      title: "Is my platform truly scalable",
      para: "Every organization wants to scale with systems that can keep up with growth. While legacy databases are capable of scaling, doing so typically requires bringing down the server and spinning up a new one over the course of roughly an hour—which simultaneously puts business on hold. Disruptions equal timeouts on the client side, lost income, and frustrations.",
    },
    {
      title: "Can I quickly enable data sharing",
      para: "Data sharing ensures business teams have broader access to the most relevant and near real-time data necessary to accelerate business growth. In a legacy system, it is extremely common for databases to build additional logic into the data pipeline that allows users to copy data sets across environments.",
    },
    {
      title: "Am I charged for more than I actually need",
      para: "In most legacy databases, users can stop or pause servers when not in use, but there is no sufficient solution to monitor and detect user demand for unique servers. As a result, many businesses run them around the clock and pay the associated price. If they pause a server, businesses are billed hourly even if the server only runs for a few minutes.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-lime-400">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-wide">
            Considering a Migration to Public Cloud?
          </h1>
          <p className="text-gray-300 mt-3 text-lg">Ask Yourself</p>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6">
          {faqPCloudD.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-md transition-all duration-300"
            >
              <button
                className="w-full text-left text-xl font-semibold flex justify-between items-center hover:text-lime-300 transition-all duration-200"
                onClick={() => toggleFAQ(index)}
              >
                {faq.title}
                <span className="text-xl">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>
              {openIndex === index && (
                <p className="text-gray-300 mt-3 leading-relaxed">{faq.para}</p>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold">Take the Next Step</h2>
          <p className="text-gray-300 mt-2 text-lg">
            Book an appointment with an expert.
          </p>
          <Link
            href="/appointment"
            className="mt-3 inline-block text-lg font-semibold text-lime-500 hover:underline"
          >
            Schedule an Appointment
          </Link>
        </div>

        {/* Proof-of-Concept (POC) Section */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-semibold">
            Proof-of-Concept &#40;POC&#41;
          </h3>
          <Button
            label="Request a Call"
            className="mt-4 px-6 py-3 rounded-lg font-semibold hover:bg-lime-400 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQPCloud;
