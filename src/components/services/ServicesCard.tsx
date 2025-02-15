import { SrvCardProps } from "@/types/CardColTypes ";
import Image from "next/image";
import React from "react";

const ServicesCard = ({ title, img, serviceList, btnTitle }: SrvCardProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden max-w-2xl mx-auto p-5 hover:shadow-2xl transition-all duration-300">
      {/* Image Section */}
      <div className="w-full md:w-1/3">
        <Image
          src={img.src}
          alt={img.alt}
          width={250}
          height={200}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-2/3 p-4 space-y-3">
        <h1 className="text-xl md:text-2xl  text-gray-900">{title}</h1>

        {/* Service List */}
        <ul className="text-gray-600 text-sm md:text-base space-y-1">
          {serviceList.map((srvLs, index) => (
            <li key={index} className="flex items-center">
              <span className="text-red-500 mr-2">●</span> {srvLs}
            </li>
          ))}
        </ul>

        {/* CTA Button (Styled as a link) */}
        <a
          href="#"
          className="text-red-500 text-sm font-semibold hover:underline flex items-center"
        >
          {btnTitle} →
        </a>
      </div>
    </div>
  );
};

export default ServicesCard;
