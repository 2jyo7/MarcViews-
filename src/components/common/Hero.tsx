import { HeroCompType } from "@/types/HeroCompType ";
import Image from "next/image";
import React from "react";
import PopUpEffect from "./PopUpEffect";

const HeroComp = ({ imgUrl, altTitle, title, description }: HeroCompType) => {
  return (
    <PopUpEffect>
      <div className="relative w-full h-[22rem] md:h-[24rem] lg:h-[26rem] flex items-center justify-center text-white">
        <div className="absolute inset-0 w-full bg-orange-600">
          <Image
            src={imgUrl}
            alt={altTitle}
            fill
            priority
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-slate-900 bg-opacity-70"></div>
        </div>
        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg lg:text-xl mb-6">{description}</p>
        </div>
      </div>
    </PopUpEffect>
  );
};

export default HeroComp;
