import LiFeaturesComp from '@/components/common/LiFeaturesComp ';
import Image from 'next/image';
import React from 'react';

const AICyberRisk = () => {
  const aiCyberRD = [
    {
      title: "Rapid change is elevating cyber risk",
      imgUrl:
        "https://img1.wsimg.com/isteam/stock/BxO78pD/:/cr=t:0%25,l:10.93%25,w:78.15%25,h:100%25/rs=w:800,h:602,cg:true",
      points: [
        "New & expanding attack vectors because of the proliferation of IoT devices.",
        "Attackers are shifting to adaptive, multi-variant threats.",
        "Attackers are shifting to automation.",
        "Cyber skills gap & capacity constraints.",
        "Lack of visibility and coordination with third-party providers.",
        "Lack of insights across data types - metadata, contextual, behavioral.",
        "Information overload from disparate data sources and tools.",
      ],
    },
  ];

  return (
    <section className="p-10 md:p-16 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-md">
      <div className="max-w-5xl mx-auto space-y-8">
        {aiCyberRD.map((aicrd, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-all hover:shadow-xl"
          >
            <h2 className="text-xl md:text-2xl py-4 font-semibold text-gray-800 dark:text-white">
              {aicrd.title}
            </h2>
            <Image
              src={aicrd.imgUrl}
              alt="Cyber Risk"
              className="w-full h-64 object-cover rounded-lg my-4"
              width={300}
              height={300}
            />
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              {aicrd.points.map((point) => (
               <LiFeaturesComp key={point} liPoints={point} className='border-red-400 bg-white'/>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AICyberRisk;
