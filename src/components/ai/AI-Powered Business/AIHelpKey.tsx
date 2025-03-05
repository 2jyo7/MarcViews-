import React from 'react';

const AIHelpKey = () => {
  const helpParaInfo = [
    {
      title: "Automation",
      description:
        "Automates discovery of new services and infrastructure components in real time, which means less manual work for developer and ITOps teams.",
    },
    {
      title: "Contextualization",
      description:
        "Provides always-available context for how each component of the application stack works together, with ready-to-use dashboards that quickly navigate from application to platform to infrastructure.",
    },
    {
      title: "Intelligent Action",
      description:
        "Offers an AI-assisted analytics engine that correlates events for root cause determination, enabling faster, more accurate decision-making.",
    },
  ];

  return (
    <section className="p-6 md:p-10 bg-gray-100 rounded-xl shadow-md">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* How We Can Help Section */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            How We Can Help?
          </h2>
          <div className="mt-4 space-y-4">
            {helpParaInfo.map((item, index) => (
              <div key={index} className="p-4 bg-white shadow-lg rounded-lg">
                <h3 className="text-lg font-semibold text-pink-600">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Use Cases */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Key Use Cases
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Cloud Monitoring", "Digital Monitoring", "Cloud Migration", "Real-time Full Stack"].map(
              (useCase, index) => (
                <span
                  key={index}
                  className="px-4 py-2 outline-none hover:translate-y-1 hover:outline-gray-500 bg-pink-600 hover:scale-105 transition-all hover:bg-pink-700 text-white rounded-full shadow-md text-sm md:text-base"
                >
                  {useCase}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHelpKey;
