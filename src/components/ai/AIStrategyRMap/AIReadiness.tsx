import Button from '@/components/common/Button ';
import Image from 'next/image';
import React from 'react';

const AIReadiness = () => {
  const aireadinessData = [
    {
      title: 'Business Strategy',
      para: [
        "The first step in any AI business strategy is to determine what you’re solving for.",
        "Clear business goals for AI promote alignment of AI projects to strategic objectives—such as efficiency and revenue generation."
      ],
      imgUrl: 'https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_8889.jpg/:/cr=t:0%25,l:12.54%25,w:74.93%25,h:100%25/rs=w:365,h:365,cg:true/qt=q:31'
    },
    {
      title: 'Technology and Data Strategy',
      para: [
        "The data & infrastructure needed to deploy AI at scale.",
        "While aligning AI projects with organizational objectives is key to building a business case for AI, technology and data strategy makes it possible to progress from proof of concept to production and, eventually, scale."
      ],
      imgUrl: 'https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_8838.jpg/:/cr=t:0%25,l:13.78%25,w:72.43%25,h:100%25/rs=w:365,h:365,cg=true/qt=q:31'
    },
    {
      title: 'AI Strategy and Experience',
      para: [
        "The organization’s understanding of, experience with, and processes to support AI at scale.",
        "It’s (mostly) about the use cases, AI expertise, and repeatable processes to create sustainable value."
      ],
      imgUrl: 'https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_8839.jpg/:/cr=t:0%25,l:12.03%25,w:75.94%25,h:100%25/rs=w:365,h:365,cg=true/qt=q:31'
    },
    {
      title: 'Organization and Culture',
      para: ["Leadership vision, operating model, skills, resources, and culture."],
      imgUrl: 'https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_9-10-2024_104137_.jpeg/:/cr=t:0%25,l:42.75%25,w:43.87%25,h:100%25/rs=w:365,h:365,cg=true/qt=q:31'
    },
    {
      title: 'AI Governance',
      para: ["Processes, controls, and accountability structures to govern data privacy, security, and responsible use of AI."],
      imgUrl: 'https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_6292.jpg/:/cr=t:0%25,l:30.44%25,w:49.45%25,h:100%25/rs=w:365,h:365,cg=true/qt=q:31'
    }
  ];

  return (
    <section className="bg-gray-100 py-10 px-6">
      <div className="w-full max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Five Drivers of AI Readiness</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aireadinessData.map((aird) => (
            <div key={aird.title} className="bg-white flex flex-col p-5 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <Image
                src={aird.imgUrl}
                alt={aird.title}
                width={365}
                height={365}
                className="rounded-lg w-full object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{aird.title}</h3>
              <p className="text-gray-600 mt-2 flex-grow">{aird.para.join(' ')}</p>
              
              <Button label="                Continue"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIReadiness;
