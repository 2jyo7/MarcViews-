import Button from '@/components/common/Button ';
import Image from 'next/image';
import React from 'react';

const ESPIntro = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 max-w-6xl">
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            alt="cloud-sec-intro-img"
            src={
              "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_7369.jpg/:/cr=t:9.68%25,l:9.68%25,w:80.65%25,h:80.65%25/rs=w:984,h:638/qt=q:20"
            }
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-lg shadow-blue-400"
          />
        </div>
        
        {/* Content Section */}
        <div className="lg:w-1/2 text-gray-800 space-y-6 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-gray-900">94% of threats come through Email</h2>
          <p className="text-lg leading-relaxed">
            Endpoint security helps prevent, detect, and respond to various cybersecurity threats by examining files, processes, and systems for suspicious or malicious activity.
          
            Protect your organization’s network by securing all endpoints, including 
            <span className="font-semibold text-pink-700"> desktops, laptops, smartphones, tablets, and more.</span>
          </p>
          <Button label='Talk to Us' className="mt-4 w-full md:w-48" />
        </div>
      </div>
    </section>
  );
};

export default ESPIntro;