import { CloudReviewTypes } from "@/types/CloudReviewTypes ";
import Image from "next/image";
import React from "react";

const CloudReview = () => {
  const CloudReviewData: CloudReviewTypes[] = [
    {
      id: "CRD1",
      name: "Reliability",
      points: [
        "Keep the workload simple and efficient",
        "Identify and rate the workload's flows",
        "Perform failure mode analysis (FMA) and more..",
      ],
    },
    {
      id: "CRD2",
      name: "Security",
      points: [
        "Document security baseline",
        "Defense-in-depth measure",
        "Respond to incidents and more..",
      ],
    },
    {
      id: "CRD3",
      name: "Cost Optimization",
      points: [
        "Perform cost modeling",
        "Govern your spending",
        "Resource scaling costs and more..",
      ],
    },
    {
      id: "CRD4",
      name: "Performance Efficiency",
      points: [
        "Conduct capacity planning",
        "Manage scalability and partitioning",
        "Optimize data performance and more.",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-14">
      {/* Image & Text Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-72 md:h-96 overflow-hidden rounded-lg shadow-lg">
          <Image
            src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_16-5-2024_142035_static.tenable.co.jpeg/:/cr=t:16.1%25,l:0%25,w:100%25,h:67.79%25/rs=w:1200,h:600,cg:true"
            alt="cloud-review-sec-img"
            fill
            className="object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <p className="text-gray-700 text-lg leading-relaxed">
            Our Well-Architected Review session generates a set of
            recommendations through a guided assessment based on the
            industry&apos;s Well-Architected Framework. We shall examine the
            following aspects of your workload&apos;s design:
          </p>
          <ul className="grid grid-cols-2 gap-4 mt-6">
            {CloudReviewData.map((CRD) => (
              <li
                key={CRD.id}
                className="bg-blue-100 px-5 py-3 rounded-md text-center font-semibold text-gray-800"
              >
                {CRD.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {CloudReviewData.map((CRD) => (
          <div
            key={CRD.id}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full"
          >
            <h1 className="text-xl font-semibold text-gray-900 mb-4">
              {CRD.name}
            </h1>

            {/* List of Points - Growable Section */}
            <div className="space-y-3 flex-grow">
              {CRD.points.map((point, i) => (
                <div
                  key={i}
                  className="text-gray-700 text-base flex items-center bg-gray-100 p-3 rounded-md"
                >
                  <span className="text-pink-600 mr-2 text-lg">›</span> {point}
                </div>
              ))}
            </div>

            {/* Button Always at Bottom */}
            <button className="w-full bg-gray-700 text-white px-5 py-2 rounded-md text-sm hover:bg-pink-700 transition mt-6">
              START ASSESSMENT
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudReview;
