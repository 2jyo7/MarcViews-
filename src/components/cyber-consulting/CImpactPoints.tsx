import Image from "next/image";
import React from "react";

const CImpactPoints = () => {
  return (
    <div className="bg-gray-700 text-white py-12 px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <Image
          src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5359.jpg/:/cr=t:0%25,l:15.96%25,w:68.07%25,h:100%25/rs=w:800,h:800,cg=true"
          alt="cyber-impact-points-img"
          width={300}
          height={300}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Text & Points Section */}
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-center lg:text-left">
          How do we derive greater impact?
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg md:text-xl font-medium">
          <span className="p-4 bg-gray-800 rounded-lg shadow-md">
            🚀 Excellence in delivery
          </span>
          <span className="p-4 bg-gray-800 rounded-lg shadow-md">
            🛡️ Expertise to de-risk transformations
          </span>
          <span className="p-4 bg-gray-800 rounded-lg shadow-md">
            🏭 Industry-centric solutions
          </span>
          <span className="p-4 bg-gray-800 rounded-lg shadow-md">
            ☁️ Mastery of hybrid cloud
          </span>
          <span className="p-4 bg-gray-800 rounded-lg shadow-md">
            🤝 Radical collaboration
          </span>
          <span className="p-4 bg-gray-800 rounded-lg shadow-md">
            💡 Technology that advances innovation
          </span>
        </div>
      </div>
    </div>
  );
};

export default CImpactPoints;
