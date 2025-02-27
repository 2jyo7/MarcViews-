import { IntroCompType } from "@/types/IntroCompType ";
import Image from "next/image";
import React from "react";

const IntroComponent = ({
  imgUrl,
  title,
  description,
  btnTitle,
  altTitle,
}: IntroCompType) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl max-w-md mx-auto text-center space-y-4">
      <div className="w-full">
        <Image
          src={imgUrl}
          alt={altTitle}
          width={400}
          height={300}
          className="object-cover rounded-lg shadow-md w-full"
        />
      </div>
      <div className="flex flex-col flex-1 ">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          {title}
        </h1>
        <p className="text-gray-600 mt-2 text-center">{description}</p>
      </div>
      {btnTitle && (
      <button className="px-6 py-2 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-slate-700 transition">
        {btnTitle}
      </button> )}
    </div>
  );
};

export default IntroComponent;
