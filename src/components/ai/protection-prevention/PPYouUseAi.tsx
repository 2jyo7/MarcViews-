import Button from '@/components/common/Button ';
import React from 'react';

const PPYouUseAi = () => {
  const ppYouUseAi = [
    "Endpoint Discovery & Asset Management",
    "Vulnerability & Patch Management",
    "Access Management",
    "Threat Simulation",
    "Identity Management",
    "Identification of Database Misconfiguration",
    "Secure Data Lifecycle Management"
  ];

  return (
    <section className='py-20 '>
      <div className='container mx-auto px-6'>
        <h1 className='text-3xl lg:text-4xl font-bold text-center border-b-4 border-pink-600 pb-4 mb-8'>How You Can Use AI?</h1>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12'>
          {ppYouUseAi.map((item, index) => (
            <div key={index} className='bg-black p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all'>
              <h2 className='text-xl font-semibold mb-2 text-pink-300'>{item}</h2>
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center'>
            <Button label='GET YOUR SOLUTIONS TOADY!' className='py-4 px-6 hover:outline-purple-400'/>
        </div>
      </div>
    </section>
  );
};

export default PPYouUseAi;