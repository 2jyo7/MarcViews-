import Image from 'next/image';
import React from 'react';

const ESPpcaSec = () => {
  const pcaData = [
    {
      para1: "Track system behavior in great detail in order to identify the specific activity that poses the risk—file encryption, outbound communication, etc. Stop ransomware and advanced threats, including fileless and in-memory attacks with:",
      points: [
        "Real-time response",
        "Automated remediation to stop malicious activity and prevent spread",
        "Secure Remote Shell"
      ],
      para2: "Improve endpoint hygiene by discovering potential vulnerabilities with virtual patching.",
      title: "Benefits",
      benefits: [
        "Prevent threats with next-generation antivirus.",
        "Stop breaches and prevent data loss and ransomware damage with no downtime.",
        "Ensure business continuity in the event of a security incident."
      ],
      imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/AdobeStock_561537025_Preview.jpeg/:/cr=t:0%25,l:40.74%25,w:45.3%25,h:100%25/rs=w:800,h:800,cg:true"
    }
  ];

  return (
    <section className='py-12 bg-gray-50'>
      <div className='container mx-auto px-6 text-gray-800 max-w-5xl'>
        <h1 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6'>
          Superior Protection, Automation, and Correlation
        </h1>

        <div className='flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-300'>
          {/* Left - Image */}
          <div className='w-full md:w-1/3 flex justify-center'>
            <Image 
              src={pcaData[0].imgUrl} 
              alt='Protection Illustration' 
              className='rounded-lg shadow-md object-cover'
              width={280}
              height={280}
            />
          </div>

          {/* Right - Text Content */}
          <div className='w-full md:w-2/3'>
            <p className='text-md text-gray-700'>{pcaData[0].para1}</p>
            <ul className='list-disc pl-5 space-y-2 text-md text-gray-700 mt-2'>
              {pcaData[0].points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <p className='text-md text-gray-700 mt-3'>{pcaData[0].para2}</p>

            {/* Benefits Section */}
            <h2 className='text-lg font-semibold text-gray-900 mt-4'>{pcaData[0].title}</h2>
            <ul className='list-disc pl-5 space-y-1 text-md text-gray-700'>
              {pcaData[0].benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESPpcaSec;
