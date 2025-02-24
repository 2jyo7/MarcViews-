import Image from 'next/image';
import React from 'react';

const ESedrSec = () => {
  const edrData = [
    {
      para: [
        "Fully Automate Threat Detection, Investigation, and Response.",
        "Advanced analytics designed to identify early indicators of potential cyberattacks.",
        "Increase Security Posture and Operational Efficiency."
      ],
      points: [
        {
          title: "Complete Endpoint Protection",
          para: "Runtime protection against ransomware, phishing, bots, file-less attacks, or malware coming from web browsing or email attachments."
        },
        {
          title: "Fastest Recovery",
          para: "With 90% automation of attack detection, investigation, and remediation tasks with auto-generated forensic reports, detailed visibility into the attack flow, in correlation with the MITRE ATT&CK® Framework."
        },
        {
          title: "Best TCO",
          para: "Ensuring you get all the endpoint protection you need in a single, efficient and cost-effective solution."
        }
      ],
      imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/AdobeStock_609877650_Preview.png/:/cr=t:0%25,l:14.35%25,w:71.3%25,h:100%25/rs=w:800,h:800,cg:true"
    }
  ];

  return (
    <section className='py-12 bg-gray-50'>
      <div className='container mx-auto px-6 text-gray-800 max-w-5xl'>
        <h1 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6'>
          Endpoint Detection and Response - EDR
        </h1>

        <div className='flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-300'>
          {/* Left - Image */}
          <div className='w-full md:w-1/3 flex justify-center'>
            <Image 
              src={edrData[0].imgUrl} 
              alt='EDR Illustration' 
              className='rounded-lg shadow-md object-cover'
              width={280}
              height={280}
            />
          </div>

          {/* Right - Text Content */}
          <div className='w-full md:w-2/3'>
            <ul className='list-disc pl-5 space-y-2 text-md text-gray-700'>
              {edrData[0].para.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            {/* Benefits Section */}
            <div className='mt-4 space-y-3'>
              {edrData[0].points.map((item, index) => (
                <div key={index} className='bg-gray-100 p-3 rounded-md shadow-sm'>
                  <h2 className='text-lg font-semibold text-gray-900'>{item.title}</h2>
                  <p className='text-gray-700 text-sm'>{item.para}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESedrSec;
