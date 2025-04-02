import WiggleEffect from "@/components/common/WiggleEffect ";
import { CardColProps } from "@/types/CardColTypes ";
import Image from "next/image";
import React from "react";

const ShowCardServ = ({ title, imgUrl }: CardColProps) => {
  return (
    <WiggleEffect>
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden max-w-2xl mx-auto p-6 hover:shadow-2xl transition-all duration-300">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <Image
            src={imgUrl}
            alt={title}
            width={180}
            height={180}
            className="object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center space-y-3 text-center md:text-left">
          <h2 className="text-xl font-semibold text-gray-800 text-bg-style">
            {title}
          </h2>

          {/* Decorative Line */}
          <div className="h-[2px] bg-red-500 w-16 mx-auto md:mx-0"></div>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base">
            Discover more about our services and how we can help you.
          </p>

          {/* CTA Link */}
          <a
            href="#"
            className="text-red-500 text-sm font-semibold hover:underline flex justify-center md:justify-start items-center"
          >
            Learn More →
          </a>
        </div>
      </div>
    </WiggleEffect>
  );
};

export default ShowCardServ;
