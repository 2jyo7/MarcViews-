import { CImpactType } from "@/types/CImpactType ";
import Image from "next/image";
import React from "react";

const CImpactSec = () => {
  const ImpactData: CImpactType[] = [
    {
      id: "CID1",
      title: "Excellence in delivery",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5273.jpg/:/cr=t:0%25,l:16.49%25,w:67.02%25,h:100%25/rs=w:730,h:730,cg:true",
    },
    {
      id: "CID2",
      title: "Mastery of Hybrid Cloud",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_16-5-2024_142035_static.tenable.co.jpeg/:/cr=t:0%25,l:13.12%25,w:73.75%25,h:100%25/rs=w:730,h:730,cg:true",
    },
    {
      id: "CID3",
      title: "Industry-centric solutions",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_4888.jpg/:/cr=t:0%25,l:15.91%25,w:68.17%25,h:100%25/rs=w:730,h:730,cg:true",
    },
    {
      id: "CID4",
      title: "Expertise to de-risk transformations",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5499.jpg/:/cr=t:0%25,l:25.18%25,w:65.6%25,h:100%25/rs=w:730,h:730,cg:true",
    },
  ];

  return (
    <div className="flex flex-col mx-auto items-center">
      <h1 className="text-3xl md:text-4xl font-semibold mb-12 mt-6 text-center lg:text-left dark:text-white text-pink-900">
        How do we derive greater impact?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 py-4">
        {ImpactData.map((ID) => (
          <div
            key={ID.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <Image
              src={ID.imgUrl}
              alt={ID.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-6 text-center">
              <span className="text-lg font-semibold text-gray-800">
                {ID.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CImpactSec;
