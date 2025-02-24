import LiFeaturesComp from '@/components/common/LiFeaturesComp ';
import React from 'react';

const IAMHelp = () => {
  const helpInfo = [
    "We will help you create a clear and concise privacy policy that outlines how personal information should be collected, used, stored, and shared with third parties.",
    "Our Data Security Service will identify the types of data, sources, and purpose of collection, and determine appropriate safeguards.",
    "We help you create an incident response plan by assigning roles & responsibilities, establishing communication protocols, and defining processes for notifying affected individuals and authorities. Data retention and safe disposal is critical—we will help you implement secure data disposal frameworks.",
    "Audit: Our service includes regular privacy compliance audits to identify gaps and implement improvements.",
    "Continuous monitoring and improvements under industry standards."
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
          How We Can Help?
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-10">
          {helpInfo.map((hI, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center h-full transition-transform hover:scale-105">
              <LiFeaturesComp liPoints={hI} className='border-pink-500 '/>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md text-center max-w-3xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed">
            A privacy program is vital for legal compliance, building trust, protecting data, meeting customer expectations, gaining a competitive advantage, mitigating risks, promoting accountability, enabling effective data governance, managing international data transfers, and future-proofing your business in the realm of privacy and data protection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IAMHelp;
