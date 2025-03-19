import React from "react";

const WhyChooseUs = () => {
  const servicesLists = [
    {
      title: "Expertise",
      para: "Our team of cybersecurity experts has years of experience helping businesses like yours stay protected against evolving threats.",
    },
    {
      title: "Customized Solutions",
      para: "We understand that every business is unique, which is why we tailor our solutions to meet your specific needs and budget.",
    },
    {
      title: "Proactive Approach",
      para: "We take a proactive approach to cybersecurity, identifying and mitigating potential risks before they can impact your business.",
    },
    {
      title: "24/7 Monitoring",
      para: "We provide round-the-clock monitoring of your network and devices, so you can rest easy knowing that we've got your back.",
    },
    {
      title: "24/7 Support",
      para: "Our dedicated support team is available around the clock to assist you with any security-related issues or concerns.",
    },
    {
      title: "Incident Response",
      para: "In the event of a security breach or cyber attack, our incident response team will be there to help you contain the damage and get back on track.",
    },
  ];

  return (
    <section className="py-16 bg-gradientPattern">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-bg-style mb-8">
          Why Choose Us?
        </h2>

        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesLists.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-bl from-white to-blue-500 p-6 rounded-2xl shadow-lg shadow-black hover:shadow-lg hover:scale-105 transition-all"
            >
              <h3 className="text-xl font-semibold text-bg-style mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700/70 bg-white py-4 px-2  flex justify-center leading-tight">
                {service.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
