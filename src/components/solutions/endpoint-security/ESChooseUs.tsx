import KeyFeatureComp from '@/components/common/KeyFeature ';
import React from 'react';













const ESPchoseSec = () => {
  const espChooseSecCard = [
    {
      title: "Expert Security Team",
      para: "Our experienced security experts provide round-the-clock protection."
    },
    {
      title: "Proactive Threat Hunting",
      para:"We actively seek out and neutralize threats before they can cause harm."
    },
    {
      title: "Rapid Incident Response",
      para: "We respond swiftly to security incidents to minimize downtime and data loss."
    },
    {
      title: "Customized Solutions",
      para:"We tailor our services to meet your specific needs and budget. "
    },
    {
      title: "Compliance and Regulatory Support",
      para: "We help you comply with industry regulations and standards. "
    }
  ];

  return (
    <section className='py-14 bg-gray-50'>
      <div className='container mx-auto px-4 text-gray-800 max-w-7xl'>
        <h2 className='text-3xl font-bold text-center text-gray-900 mb-8'>Why Choose us?</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {espChooseSecCard.map(espC => (
            <KeyFeatureComp 
              key={espC.title} 
              title={espC.title} 
              para={espC.para} 
              className='border-l-4 border-yellow-500 p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ESPchoseSec;
