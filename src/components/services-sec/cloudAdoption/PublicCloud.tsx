import { PublicCloudServTypes } from "@/types/PublicCloudServTypes ";
import Image from "next/image";
import React from "react";

const PublicCloud = () => {
  const PublicCloudServices: PublicCloudServTypes[] = [
    {
      id: "PCloud1",
      title: "Quantified Benefits",
      points: [
        "Cost effective operations",
        "Easy disaster recovery",
        "Increase productivity and collaboration on data",
        "IT administrator productivity savings",
        "Multi-region Availability",
        "Reduce security and compliance risks",
        "Unlimited Scalability",
      ],
      imgUrl:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: "PCloud2",
      title: "IT Administrator Productivity Savings",
      points: [
        "Affected IT infrastructure administrators",
        "Application Performance",
        "Percentage of effort saved",
        "IT administrator productivity savings",
      ],
      imgUrl:
        "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: "PCloud3",
      title: "Savings Effort & Licensing Fees",
      points: [
        "Reduction in effort",
        "Licensing fees savings from retired legacy systems",
        "Savings from reduced effort and licensing fees",
      ],
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1661386261378-8ed99f4e37ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
  ];

  return (
    <div className=" py-12 px-4 md:px-10 ">
      {/* Section Title */}
      <h1 className="text-center text-3xl font-bold text-white mb-10">
        Choose Your Preferred Public Cloud
      </h1>

      {/* Cloud Logos */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {[
          "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5571.jpg",
          "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5572.jpg",
          "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG-2902.jpg",
          "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_12-11-2024_131725_services.google..jpeg",
        ].map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Cloud Provider ${index + 1}`}
            width={120}
            height={120}
            className="rounded-lg shadow-md hover:scale-105 transition-transform"
          />
        ))}
      </div>

      {/* Public Cloud Services */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-900 p-4 justify-center rounded-lg">
        {PublicCloudServices.map((PC) => (
          <div key={PC.id} className="flex flex-col gap-4 ">
            {/* Image */}
            <Image
              src={PC.imgUrl}
              alt={PC.title}
              width={500}
              height={200}
              className="rounded-md shadow-md shadow-white"
            />

            {/* Title */}
            <h2 className="text-xl font-semibold text-white">{PC.title}</h2>

            {/* Points List */}
            <ul className="list-disc list-inside text-white  space-y-2">
              {PC.points.map((point, i) => (
                <li key={i} className="pl-2 ">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Call to Action Buttons */}
      <div className="mt-16 flex flex-col md:flex-row gap-4 md:gap-8 justify-center">
        <button className="w-full md:w-auto px-8 py-3 text-white bg-pink-700 rounded-lg font-semibold shadow-md hover:bg-pink-800 transition">
          BOOK A POC CALL
        </button>
        <button className="w-full md:w-auto px-8 py-3 text-white bg-blue-700 rounded-lg font-semibold shadow-md hover:bg-blue-800 transition">
          BOOK AN ASSESSMENT REVIEW SESSION
        </button>
      </div>
    </div>
  );
};

export default PublicCloud;
