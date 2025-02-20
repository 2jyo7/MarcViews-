import Image from "next/image";
import React from "react";

const CNAPPComp = () => {
  const cnappData = [
    { id: "cnp01", point: "Container security" },
    { id: "cnp02", point: "Network security" },
    { id: "cnp03", point: "Enhanced DevSecOps" },
    { id: "cnp04", point: "Securing multi-cloud environments" },
    {
      id: "cnp05",
      point: "Preventing misconfiguration and compliance violations",
    },
    { id: "cnp06", point: "Protection against advanced persistent threats" },
    { id: "cnp07", point: "Identity security and access management" },
    { id: "cnp08", point: "Proactive measures and incident preparedness" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            🔒 Use Case Scenarios for CNAPP
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Cloud-Native Application Protection Platforms (CNAPP) provide
            comprehensive security solutions tailored for modern cloud
            environments.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <Image
              src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_27-4-2024_213644_cdn-dynmedia-1.mi.jpeg/:/cr=t:0%25,l:7.79%25,w:84.41%25,h:100%25/rs=w:709,h:945,cg:true"
              alt="cnapp-img"
              width={400}
              height={400}
              className="rounded-lg shadow-xl object-cover"
            />
          </div>

          {/* Use Case List */}
          <div className="space-y-4">
            {cnappData.map((cnp) => (
              <div
                key={cnp.id}
                className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className="text-lime-500 text-lg font-bold">✔</span>
                <span className="text-gray-800 font-medium">{cnp.point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CNAPPComp;
