import Button from '@/components/common/Button ';
import LiFeaturesComp from '@/components/common/LiFeaturesComp ';
import Image from 'next/image';
import React from 'react';

const ITOpsM = () => {
  const itopsLis = [
    'Does your organization have access to all the application performance and infrastructure data that could impact the health of your applications?',
    'Can you see the dependencies between application components and the IT environment?',
    'Do you see every transaction, and can you trace its flow through your services?',
  ];

  return (
    <section className="py-12 bg-gray-100 flex justify-center">
      <div className="w-full max-w-5xl p-8 bg-white shadow-lg rounded-2xl">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">The ITOps Maturity Curve</h1>
          <div className="w-24 border-t-4 border-teal-600 mx-auto mt-2"></div>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center mb-8">
          <Image
            alt="ITOps Maturity"
            width={600}
            height={300}
            className="object-cover rounded-lg shadow-lg"
            src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_14-4-2024_22410_www.ibm.com.jpeg/:/cr=t:6.88%25,l:0%25,w:100%25,h:86.23%25/rs=w:1428,h:714,cg:true"
          />
        </div>

        {/* Questions Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Questions to Consider</h3>
          <ul className="space-y-3">
            {itopsLis.map((li, index) => (
              <LiFeaturesComp key={index} liPoints={li} className="bg-white border-l-4 border-red-600 p-4 shadow-md rounded-lg" />
            ))}
          </ul>
        </div>

        {/* Observability Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">To Address These Questions</h3>
          <p className="text-gray-700 leading-relaxed">
            Businesses need automated, full-stack visibility of the application environment with no manual instrumentation—
            in other words, enterprise observability.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✅ Reduced mean time to repair by <b>70%</b>.</li>
            <li>✅ Reduced developer time spent troubleshooting by <b>90%</b>.</li>
            <li>✅ Reduced revenue-impacting incidents by up to <b>60%</b>.</li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-gray-800 mb-4 text-lg">Achieve enterprise observability with:</p>
          <Button label="INSTANA" href="https://www.ibm.com/products/instana" className=" px-8 py-3 " />
        </div>
      </div>
    </section>
  );
};

export default ITOpsM;
