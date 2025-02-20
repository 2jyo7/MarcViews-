import { CardColProps } from "@/types/CardColTypes ";
import Image from "next/image";
import React from "react";

const ShowCardServ = ({ title, imgUrl }: CardColProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden max-w-2xl mx-auto p-6 hover:shadow-2xl transition-all duration-300">
      {/* Image Section */}
      <div className="w-full md:w-1/3 flex justify-center">
        <Image
          src={imgUrl}
          alt={title}
          width={180}
          height={180}
          className="object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-2/3 p-4 space-y-3">
        <h1 className="text-xl md:text-2xl text-gray-900">{title}</h1>

        {/* Decorative Line */}
        <div className="h-[2px] bg-gray-300 w-16"></div>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-600">
          Discover more about our services and how we can help you.
        </p>

        {/* CTA Link */}
        <a
          href="#"
          className="text-red-500 text-sm font-semibold hover:underline flex items-center"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
};

export default ShowCardServ;
