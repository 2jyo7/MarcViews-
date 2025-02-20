import Image from "next/image";
import React from "react";

const AccessControl = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center dark:text-white">
        Managed Access Control
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center py-6 md:py-10 text-center w-full">
        <Image
          src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_26-11-2024_104121_doc-0c-04-prod-0.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:800,cg:true"
          alt="access-control-sec-img"
          width={400}
          height={360}
          className="object-cover rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 mt-6 md:mt-0">
          {[
            "Management of credentials and access rules",
            "Distribution of ID cards and mobile credentials",
            "Continuous door alarm event monitoring",
            "Health and software monitoring",
            "Device software updates",
            "Detailed attendance reports",
            "Comprehensive bench tests and security scores",
            "Database replication & failover",
          ].map((item, index) => (
            <span
              key={index}
              className="p-3 text-sm md:text-base bg-white text-gray-800  shadow-md rounded-lg"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccessControl;
