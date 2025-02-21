import { FeatureType } from "@/types/KeyFeature ";
import React from "react";

const KeyFeatureComp: React.FC<FeatureType> = ({
  title,
  para,
  className = "",
}) => {
  return (
    <div
      className={`${className} p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl border border-dotted border-pink-800 rounded-lg`}
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-3 hover:text-pink-900 ">
        {title}
      </h2>
      <p className="text-gray-700 text-justify ">{para}</p>
    </div>
  );
};

export default KeyFeatureComp;
