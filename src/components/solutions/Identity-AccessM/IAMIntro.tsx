import Button from '@/components/common/Button ';
import Image from 'next/image';
import React from 'react';

const IAMIntro = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl flex flex-col lg:flex-row items-center gap-12">
        
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            alt="cloud security introduction"
            src="https://img1.wsimg.com/isteam/stock/yrY8e9w/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:628/qt=q:76"
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-lg shadow-blue-400"
          />
        </div>
        
        {/* Content Section */}
        <div className="lg:w-1/2 text-gray-800 space-y-6 text-center lg:text-left">
          <h2 className="text-2xl font-bold text-gray-900">Manage and Secure Digital Identities</h2>
          <p className="text-lg leading-relaxed">
            To ensure compliance with relevant data protection regulations and safeguard the privacy of your customers&apos; & employees&apos; information. 
            Contact us now to schedule a consultation and take control of your identity and access management needs.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button label="Our Services" className="mt-4 w-full md:w-48" aria-label="Explore Our Services" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default IAMIntro;
