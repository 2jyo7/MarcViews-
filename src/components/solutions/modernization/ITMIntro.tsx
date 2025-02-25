import Button from '@/components/common/Button ';
import Image from 'next/image';
import React from 'react';

const ITMIntro = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Content Section */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Maximize the Value of Hybrid Cloud in the Generative AI Era
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              IT modernization refers to updating outdated IT infrastructure, systems, and practices to leverage 
              the latest technologies, improve efficiency, enhance security, and align with evolving business needs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">Hybrid Cloud: It&apos;s About Business</span><br />
              The need for a <span className="text-blue-700 font-medium">hybrid-by-design</span> approach for AI, 
              amplifying business value, codifying the hybrid framework, and adopting hybrid cloud for generative AI.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Organizations that adopt hybrid by design break the ROI bottleneck, driving business outcomes to 
              realize the full value of their digital transformation.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button label="SCHEDULE A DISCOVERY SESSION" className="mt-4 px-6 py-3 text-white font-medium rounded-lg shadow-lg transition duration-300" />
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              <Image 
                src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_6292.jpg/:/cr=t:0%25,l:0.55%25,w:98.9%25,h:100%25/rs=w:1240,h:620,cg=true" 
                alt="IT Modernization Intro" 
                width={600} 
                height={400} 
                className="rounded-2xl shadow-xl object-cover w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITMIntro;
