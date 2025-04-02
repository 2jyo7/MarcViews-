import Button from "@/components/common/Button ";
import Image from "next/image";
import React from "react";

const ReadinessSec = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-12 bg-slate-900">
      {/* Background Image Section */}
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[500px] mb-8 rounded-lg overflow-hidden shadow-lg">
        <Image
          src="https://plus.unsplash.com/premium_photo-1663091633166-20ef12aa7b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Ransomware-img"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            Ransomware Readiness Assessment
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Descriptive Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/AdobeStock_610080154_Preview.jpeg/:/cr=t:16.54%25,l:5.36%25,w:89.29%25,h:66.93%25/rs=w:984,h:492"
            alt="ransom-descriptive-img"
            width={400}
            height={300}
            className="rounded-lg shadow-md object-cover w-full md:w-auto"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-lg text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-white title-style">
            Are you prepared for a Ransomware Attack?
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed hover:text-white/80">
            The goal of the Ransomware Readiness Assessment is to strengthen the
            overall ability of an organization to respond efficiently and
            effectively to an unexpected ransomware incident and help prioritize
            cybersecurity actions and investments.
          </p>
          <Button
            className="px-6 py-3 my-8 hover:bg-white hover:text-black transition-all duration-300"
            label="CONTACT AN EXPERT"
          />
        </div>
      </div>
    </div>
  );
};

export default ReadinessSec;
