import Image from "next/image";
import React from "react";

const BenefitPage = () => {
  const BenefitData = [
    {
      id: "BD01",
      title: "Cost-Effectiveness",
      para: "Outsourcing SOC functions can be more cost-effective compared to building and maintaining an in-house SOC, which requires significant investments in personnel, infrastructure, and training. ",
    },
    {
      id: "BD02",

      title: "24/7 Coverage",
      para: "SOC as a Service operates 24/7, ensuring continuous monitoring and rapid incident response, even outside regular business hours.",
    },
    {
      id: "BD03",

      title: "Reduced Time to Deployment",
      para: "Setting up an in-house SOC can be time-consuming, while SOC as a Service offers a quicker and more streamlined deployment process. ",
    },
    {
      id: "BD04",

      title: "Expertise and Specialization",
      para: "SOC as a Service providers typically employ skilled cybersecurity professionals with expertise in threat detection and incident response, bringing specialized knowledge to the organization.",
    },
    {
      id: "BD05",

      title: "Scalability",
      para: "Organizations can easily scale their security operations by adjusting the level of SOC services based on their changing needs. ",
    },
    {
      id: "BD06",
      title: "Focus on Core Business",
      para: "By outsourcing SOC functions, organizations can focus more on their core business activities, leaving the security operations to the experts. ",
    },
  ];

  return (
    <section className="p-8 md:p-24 bg-gray-100 rounded-lg shadow-lg ">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-6">
        Benefits
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <Image
            alt="soc-benefit-sec-img"
            width={400}
            height={360}
            className="object-cover rounded-xl shadow-xl"
            src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_4-10-2024_205644_.jpeg/:/cr=t:0%25,l:3.07%25,w:93.86%25,h:100%25/rs=w:800,h:800,cg:true"
          />
        </div>
        <div className="w-full md:w-1/2 ">
          {BenefitData.map((benefit) => (
            <div
              key={benefit.id}
              className="mb-4 p-4 bg-white rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {benefit.title}
              </h2>
              <p className="text-gray-700 text-base">{benefit.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitPage;
