import Image from "next/image";
import React from "react";

interface CardCompProps {
  title?: string;
  imgUrl?: string;
  para?: string;
}

const CardComp: React.FC<CardCompProps> = ({ title, imgUrl, para }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-slate-900 bg-gray-100 ">
      {/* Image (Rendered only if imgUrl exists) */}
      {imgUrl ? (
        <Image
          src={imgUrl}
          alt={title || "Image"}
          width={400}
          height={400}
          className={`w-full max-w-lg h-[450px] object-cover transition-transform duration-500 group-hover:scale-105`}
        />
      ) : (
        <div className="w-full h-[450px] bg-gray-300 flex items-center justify-center">
          <span className="text-gray-600 text-sm">No Image Available</span>
        </div>
      )}

      {/* Hover Overlay (Only shows if title or para exist) */}
      {(title || para) && (
        <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center text-gray-800 text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {title && <h3 className="text-xl font-bold">{title}</h3>}
          {para && <p className="text-sm mt-2">{para}</p>}
        </div>
      )}
    </div>
  );
};

export default CardComp;
