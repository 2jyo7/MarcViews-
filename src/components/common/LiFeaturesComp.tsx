import React from "react";
import { twMerge } from "tailwind-merge";
import PopUpEffect from "./PopUpEffect";

const LiFeaturesComp = ({
  liPoints,
  className,
}: {
  liPoints: string | string[];
  className?: string;
}) => {
  return (
    <PopUpEffect>
      <div className="my-2">
        <li
          className={twMerge(
            "bg-black p-4  rounded-lg shadow-md border-l-4 text-lime-400 font-medium transition-all duration-300 hover:text-pink-600 hover:bg-white hover:shadow-lg",
            className // Allows dynamic border colors
          )}
        >
          {liPoints}
        </li>
      </div>
    </PopUpEffect>
  );
};

export default LiFeaturesComp;
