import React from "react";
import Image from "next/image";
import { CoreCompCardType } from "@/types/CoreCompCardType ";
import PopUpEffect from "../PopUpEffect";

const CoreCompCard = ({ name, description, imgUrl }: CoreCompCardType) => {
  return (
    <PopUpEffect>
      <div className="bg-white rounded-lg shadow-lg shadow-pink-800/45 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        {/* Image Section */}
        <div className="flex justify-center w-full h-48">
          <Image
            src={imgUrl}
            alt={name}
            width={220}
            height={200}
            className="rounded-t-lg  object-cover py-4"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </PopUpEffect>
  );
};

export default CoreCompCard;
