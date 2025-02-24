import Image from 'next/image';
import React from 'react';

const ESPxdrSec = () => {
  const xdrData = [
    {
      para: [
        "Advanced analytics across endpoint, network, cloud, and other data sources to block endpoint threats.",
        "AI and automation help analysts rapidly investigate the threat and respond with timely remediation.",
        "Self-driving results are powered by analytics, AI, and automation from end to end."
      ],
      imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/AdobeStock_561537025_Preview.jpeg/:/cr=t:0%25,l:40.74%25,w:45.3%25,h:100%25/rs=w:800,h:800,cg:true"
    }
  ];

  return (
    <section className='py-12 bg-gray-50'>
      <div className='container mx-auto px-6 text-gray-800 max-w-4xl'>
        <h1 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6'>
          Extended Detection and Response - XDR
        </h1>

        <div className='flex flex-col md:flex-row items-center gap-6 bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-300'>
          {/* Image Section */}
          <div className='w-full md:w-1/3 flex justify-center'>
            <Image
              src={xdrData[0].imgUrl} 
              alt='XDR Illustration' 
              className='rounded-lg shadow-md object-cover' 
              width={280}
              height={280}
            />
          </div>

          {/* Text Section */}
          <div className='w-full md:w-2/3'>
            <ul className='list-disc pl-5 space-y-2 text-md text-gray-700'>
              {xdrData[0].para.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESPxdrSec;
