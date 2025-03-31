import React from "react";
import PopUpEffect from "../PopUpEffect";

interface CardComp2Props {
  title?: string;
  imgUrl?: string;
  para?: string;
}

const CardComp2: React.FC<CardComp2Props> = ({ title, para }) => {
  return (
    <PopUpEffect>
      <div
        className="relative group w-full h-96 max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg
     bg-gradient-to-tr from-neutral-800 to-pink-700 hover:to-orange-900 transition-all duration-300
      ease-in-out flex justify-center"
      >
        {/* Content */}
        <div className="flex flex-col justify-center items-center p-6">
          {title && (
            <h3 className="text-center text-white font-semibold text-xl mb-2">
              {title}
            </h3>
          )}
          {/* Paragraph - only visible on hover */}
          {para && (
            <p className="text-center text-base text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              {para}
            </p>
          )}
        </div>
      </div>
    </PopUpEffect>
  );
};

export default CardComp2;
