import Image from 'next/image';
import React from 'react';

const PPIntro = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="container mx-auto text-center">
        {/* Card Container */}
        <div className=" rounded-xl shadow-xl p-6 md:p-10 flex flex-col items-center md:flex-row gap-8 md:gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={"https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Untitled%20(15).png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280,h:720/qt=q:31"}
              alt={"protection-p-intro-hero"}
              width={400}
              height={300}
              className="object-cover w-full h-64 md:h-80 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-pink-900 leading-snug">
              Protect the Critical Infrastructure
            </h2>
            <p className="text-gray-700 mt-4 text-lg leading-relaxed">
              AI plays a vital role in protecting and preventing cyber threats against critical infrastructure. 
              Leveraging these capabilities will help us move forward in the quantum era.
            </p>
            <p className="text-gray-700 mt-2 text-lg leading-relaxed">
              The quantum-proof era will require a holistic approach, combining technology with human expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PPIntro;
