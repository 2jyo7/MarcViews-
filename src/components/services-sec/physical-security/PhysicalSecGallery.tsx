import Button from "@/components/common/Button ";
import Image from "next/image";
import React from "react";

const PhysicalSecGallery = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto p-4 bg-slate-700">
      {/* Image Gallery - Stacked & Centered */}
      <div className="flex flex-col items-center w-full max-w-5xl p-4 rounded-lg shadow-lg space-y-4 bg-white">
        <h2 className="text-lg font-semibold text-pink-800 dark:text-white">
          Monitoring Services
        </h2>
        {/* First Image */}
        <div className="flex justify-center ">
          <Image
            src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_26-11-2024_104059_doc-0c-04-prod-0.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1635,cg=true"
            alt="PS-gallery-first-img"
            width={620}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Second Image */}
        <div className="flex justify-center">
          <Image
            src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_26-11-2024_121511_doc-0c-04-prod-0.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1508,cg=true"
            alt="PS-gallery-second-img"
            width={620}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-6 my-6">
        <Button
          label=" BOOK A POC CALL"
          href="/appointments"
          className="py-3 px-4 "
        />
      </div>
    </div>
  );
};

export default PhysicalSecGallery;
