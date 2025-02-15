import React from "react";

const WhyUs = () => {
  const ReasonsInfo = [
    {
      name: "Expertise",
      Info: "Our team of experienced solution architects, engineers, and technicians has the knowledge and skills to design, implement, and manage complex infrastructure solutions.",
    },
    {
      name: "Scalability",
      Info: "With our 24/7 monitoring and support services, you can rest assured that your infrastructure is in safe hands.",
    },
    {
      name: "Customization",
      Info: "We tailor our managed infrastructure services to meet your specific business requirements, ensuring that you get the solutions you need to succeed.",
    },
    {
      name: "Reliability",
      Info: "Our managed infrastructure services are designed to scale with your business, allowing you to grow and adapt without worrying about your IT infrastructure.",
    },
  ];

  return (
    <div className="flex flex-col items-center text-center px-6 py-12 bg-gray-100">
      <h1 className="text-3xl font-bold pb-2 mb-8 dark:text-gray-800">
        Why Choose Us?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {ReasonsInfo.map((reason, index) => (
          <div
            key={index}
            className="p-6  shadow-md rounded-lg transition-transform transform hover:scale-105 duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-pink-900 pb-2 mb-3 w-16">
              {reason.name}
            </h2>
            <p className="text-gray-600 text-justify leading-relaxed">
              {reason.Info}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
