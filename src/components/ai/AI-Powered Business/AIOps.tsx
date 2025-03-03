import LiFeaturesComp from '@/components/common/LiFeaturesComp ';
import Image from 'next/image';
import React from 'react';

const AIOps = () => {
  const aiopsImpLs = [
    'Reduce operational costs',
    'Reduce problem mitigation time',
    'Enable predictive service management',
    'Streamline IT operations',
    'Elevate customer experience',
    'Support cloud migration',
  ];

  const aiopsImpPara = [
    'Many businesses already use application performance management (APM) solutions for monitoring.',
    'Application resource management (ARM) solutions allocate resources to applications in these dynamic environments, helping ensure that the supply of IT resources can meet the demand for optimal application performance.',
    'AIOps brings APM and ARM together to address performance issues before they impact users.',
    'Every business wants to save time and reduce costs, using resources as efficiently as possible while delivering exceptional customer experiences.',
    'With the rise of cloud-based applications, the modern IT environment has become more operationally complex, with faster application development lifecycles and complicated interdependencies between applications, services, and their underlying containers, virtual machines (VMs), cloud resources, servers, storage, and networking.',
    'Automation is the endgame that helps eliminate the resource problems that cause inefficiencies in IT operations.',
  ];

  return (
    <section className="py-12 bg-gray-100 flex justify-center">
      <div className="w-full max-w-6xl p-8 bg-white shadow-lg rounded-2xl">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            AIOps Bringing APM and ARM Together
          </h1>
          <div className="w-20 border-t-4 border-gray-500 mx-auto mt-2"></div>
        </div>

        {/* AI & Machine Learning Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12 py-8 px-4">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/AdobeStock_600143526_Preview.jpeg/:/cr=t:0%25,l:10.6%25,w:78.8%25,h:100%25/rs=w:984,h:492"
              alt="AI & Machine Learning"
              width={400}
              height={300}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          
          {/* Text Section */}
          <div className="w-full md:w-1/2 py-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              The Combination of Iterative Machine Learning & Model Tuning
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Artificial Intelligence refers to the deployment of computer systems that can perform 
              tasks that typically require human intelligence. AI is being used in automating routine tasks, 
              improving detection capabilities, and helping organizations stay ahead of the ever-evolving cyber threat landscape.
            </p>
          </div>
        </div>

        {/* AIOps Importance Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why is AIOps Important?
            </h2>
            <ul className="space-y-3">
              {aiopsImpLs.map((point, index) => (
                <LiFeaturesComp key={index} liPoints={point} className="border-pink-700 bg-white" />
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1677691824188-3e266886cb27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGFpJTIwaW1wb3J0YW5jZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="AIOps Importance"
              width={300}
              height={300}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Additional Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {aiopsImpPara.map((para, index) => (
            <div
              key={index}
              className="bg-gray-50 border-l-4 border-lime-400 p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <p className="text-gray-700 leading-relaxed">{para}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AIOps;
