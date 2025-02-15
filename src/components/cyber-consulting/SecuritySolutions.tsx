import Image from "next/image";
import React from "react";

const SecuritySolutions = () => {
  const ListItem = [
    "Automotive",
    "Aerospace and Defense",
    "Banking & Financial Markets",
    "Chemicals & Industrial Products",
    "Consumer Products & Retail",
    "Electronics",
    "Energy & Utilities",
    "Government",
    "Healthcare & Life Sciences",
    "Insurance",
    "Telecom & Entertainment",
    "Travel & Transportation",
  ];

  return (
    <div className="flex flex-col items-center px-6 py-12 bg-gray-400/30">
      {/* Title Section */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6 ">
        <span className="bg-gradient-to-r from-gray-700 to-pink-500 text-transparent bg-clip-text dark:text-white">
          Industry-wide Security Solutions
        </span>
      </h1>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl w-full">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            width={310}
            height={320}
            src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5500.jpg/:/cr=t:0%25,l:41.82%25,w:45.43%25,h:100%25/rs=w:800,h:1067,cg=true"
            alt="Security Solutions"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* List Section */}
        <div className="w-full md:w-1/2">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ListItem.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 p-3 bg-white shadow-md rounded-lg hover:bg-gray-200 transition duration-200"
              >
                <span className="text-purple-600 text-lg">•</span>
                <span className="text-lg font-medium text-gray-900">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecuritySolutions;
