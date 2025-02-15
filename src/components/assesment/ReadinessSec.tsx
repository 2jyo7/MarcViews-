import Image from "next/image";
import React from "react";

const ReadinessSec = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-2 py-12 bg-slate-900">
      {/* Background Image Section */}
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[500px] mb-8">
        <Image
          src="https://plus.unsplash.com/premium_photo-1663091633166-20ef12aa7b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Ransomware-img"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            Ransomware Readiness Assessment
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 justify-center">
        {/* Descriptive Image */}
        <div className="w-full max-w-xs md:max-w-sm lg:max-w-md">
          <Image
            src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/AdobeStock_610080154_Preview.jpeg/:/cr=t:16.54%25,l:5.36%25,w:89.29%25,h:66.93%25/rs=w:984,h:492"
            alt="ransom-descriptive-img"
            width={400}
            height={300}
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-lg ">
          <h1 className="text-3xl font-bold text-white dark:text-white mb-4">
            Are you prepared for a Ransomware Attack?
          </h1>
          <p className="text-white dark:text-gray-300 mb-6">
            The goal of the Ransomware Readiness Assessment is to strengthen the
            overall ability of an organization to respond efficiently and
            effectively to an unexpected ransomware incident and help prioritize
            cybersecurity actions and investments.
          </p>
          <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400 transition">
            CONTACT AN EXPERT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadinessSec;
