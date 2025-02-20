import Image from "next/image";
import React from "react";

const HostedAC = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-12 py-8 bg-slate-900">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center">
        Why Choose Hosted Access Control?
      </h1>

      {/* Centered Content Wrapper */}
      <div className="w-full  mx-auto p-4 flex flex-col-reverse lg:flex-row items-center gap-8 bg-white rounded-xl ">
        {/* Text Content */}
        <div className="text-left lg:text-center space-y-6 w-full lg:w-1/2">
          {[
            {
              title: "Cost-effective",
              description:
                "Minimize upfront infrastructure expenses with our cloud-based solution.",
            },
            {
              title: "Always updated",
              description:
                "We handle all server maintenance, including essential security updates.",
            },
            {
              title: "Secure data backup",
              description:
                "Your database is safely stored in the cloud, eliminating the need for on-site duplication.",
            },
            {
              title: "Quick start",
              description:
                "Experience a fast deployment, ideal for both single and multi-site businesses.",
            },
            {
              title: "Simplified deployment",
              description:
                "Skip the need for dedicated computers and software at your location.",
            },
          ].map((item, index) => (
            <div key={index}>
              <h2 className="text-lg font-semibold text-gray-800 ">
                {item.title}
              </h2>
              <p className="text-gray-600  leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

          {/* Note Section */}
          <p className="text-gray-700  font-medium">
            <strong>Note **:</strong> With hosted access, only door hardware and
            readers are required.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center lg:w-1/2 transition-all transform hover:scale-105">
          <Image
            src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_26-11-2024_104043_doc-0c-04-prod-0.jpeg/:/rs=w:800,cg:true,m"
            alt="hosted-access-control-img"
            width={400}
            height={360}
            className="w-full md:w-3/5 lg:w-3/4 object-cover shadow-lg rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HostedAC;
