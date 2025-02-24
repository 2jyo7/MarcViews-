import LiFeaturesComp from '@/components/common/LiFeaturesComp ';
import React from 'react';

const ESPLandscapes = () => {
  const espLiFts = [
    "Scan-less vulnerability assessment and virtual patching.",
    "Real-time, pre-execution blocking (AV).",
    "Real-time, post-infection problem.",
    "Remediation in real-time.",
    "Orchestrated and automated response.",
    "Eliminate dwell time and alert fatigue.",
    "Flexible Deployment Options.",
    "XDR with support for multiple data-lakes.",
    "Application control."
  ];

  return (
    <section className='py-14 bg-gray-50'>
      <div className='container mx-auto px-4 text-gray-800 max-w-6xl'>
        <h2 className='text-3xl font-bold text-center text-gray-900 mb-8'>Competitive Landscape:</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {espLiFts.map(espF => (
            <LiFeaturesComp 
              key={espF} 
              liPoints={espF} 
              className='p-6 bg-white rounded-lg shadow-lg border  border-lime-500 shadow-black hover:shadow-xl transition-shadow duration-300 text-center text-lg font-medium'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ESPLandscapes;
