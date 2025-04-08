import Button from "@/components/common/Button ";
import WiggleEffect from "@/components/common/WiggleEffect ";
import { AssessCardTypes } from "@/types/AssessCardTypes ";
import Image from "next/image";
import React from "react";

const AssessCard = ({ title, imgUrl, btnTitle, href }: AssessCardTypes) => {
  return (
    <WiggleEffect>
      <div className="max-w-xs md:max-w-sm lg:max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Image Container */}
        <div className="w-32 h-28 mx-auto relative">
          <Image
            src={imgUrl}
            alt={title}
            fill
            className="object-cover rounded-full border-2 border-pink-500"
          />
        </div>

        {/* Card Content */}
        <div className="text-center mt-4">
          <h1 className="text-xl font-bold text-gray-800">{title}</h1>

          <Button label={btnTitle} href={href} />
        </div>
      </div>
    </WiggleEffect>
  );
};

export default AssessCard;
