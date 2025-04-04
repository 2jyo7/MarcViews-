import ZoomingEffect from "@/components/common/ZoomingEffect ";
import { SrvCardProps } from "@/types/CardColTypes ";
import Image from "next/image";
import React from "react";

const ServicesCard = ({ title, img, serviceList, btnTitle }: SrvCardProps) => {
  return (
    <ZoomingEffect>
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden max-w-2xl mx-auto p-5 hover:shadow-2xl transition-all duration-300">
        {/* Image Section */}

        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src={img.src}
            alt={img.alt}
            width={250}
            height={200}
            className="rounded-lg object-cover w-full max-w-[250px]"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/3 p-4 space-y-3 flex flex-col justify-center text-center md:text-left">
          <h2 className="responsive-title">{title}</h2>

          {/* Service List */}
          <ul className="text-gray-600 text-sm md:text-base space-y-1">
            {serviceList.map((srvLs, index) => (
              <li key={index} className="flex items-center justify-start">
                <span className="text-red-500 mr-2">●</span> {srvLs}
              </li>
            ))}
          </ul>

          {/* CTA Button (Styled as a link) */}
          <a
            href="#"
            className="text-red-500 text-sm font-semibold hover:underline inline-flex items-center justify-start md:justify-start"
          >
            {btnTitle} →
          </a>
        </div>
      </div>
    </ZoomingEffect>
  );
};

export default ServicesCard;
