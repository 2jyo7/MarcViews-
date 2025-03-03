import Image from 'next/image';
import React from 'react';

const AIPrinciple = () => {
  const aipData = [
    { title: "Fairness", para: "AI systems must be developed to treat all people fairly." },
    { title: "Reliability and Safety", para: "AI systems must be designed to perform reliably and safely." },
    { title: "Privacy and Security", para: "AI systems must comply with privacy laws." },
    { title: "Inclusiveness", para: "AI systems must be designed to address a broad range of human needs and experiences." },
    { title: "Transparency", para: "AI system behavior and functional components should be understood so that people can identify potential issues or unintended outcomes." },
    { title: "Accountability", para: "People who design and deploy AI systems must be accountable for how their systems operate." },
  ];

  return (
    <section className="py-10 bg-gray-100 flex justify-center">
      <div className="w-full max-w-5xl p-6 rounded-2xl shadow-lg bg-white">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Responsible AI Principles</h1>
          <div className="w-20 border-t-4 border-pink-500 mx-auto mt-2"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full lg:w-1/2">
            <Image
              src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_25-1-2025_1592_.jpeg"
              alt="AI Principle"
              width={300}
              height={300}
              className="object-cover rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:w-1/2">
            {aipData.map((principle, index) => (
              <div
                key={index}
                className="bg-pink-500 text-white p-4 rounded-lg shadow-md hover:bg-pink-600 transition"
              >
                <h2 className="font-semibold text-lg">{principle.title}</h2>
                <p className="text-sm mt-1">{principle.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPrinciple;
