import { CImpactType } from "@/types/CImpactType ";
import Image from "next/image";
import React from "react";

const BIGallery = () => {
  const BIGalleryData: CImpactType[] = [
    {
      id: "BTG1",
      title: "Growth",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5358.jpg/:/cr=t:0%25,l:6.89%25,w:86.21%25,h:100%25/rs=w:776,h:388,cg:true",
    },
    {
      id: "BTG2",
      title: "Cost reduction",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Untitled%20(1)-11ff614.PNG/:/cr=t:35.47%25,l:20.93%25,w:58.14%25,h:29.07%25/rs=w:500,h:250,cg:true,m", // Replace with actual image URL
    },
    {
      id: "BTG3",
      title: "Productivity",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5372.jpg/:/cr=t:6.31%25,l:0%25,w:100%25,h:87.39%25/rs=w:776,h:388,cg:true", // Replace with actual image URL
    },
    {
      id: "BTG4",
      title: "Innovation",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5383.jpg/:/cr=t:8.44%25,l:0%25,w:100%25,h:83.12%25/rs=w:776,h:388,cg:true", // Replace with actual image URL
    },
    {
      id: "BTG5",
      title: "Compliance",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5387.jpg/:/cr=t:0%25,l:6.28%25,w:87.44%25,h:100%25/rs=w:776,h:388,cg:true", // Replace with actual image URL
    },
    {
      id: "BTG6",
      title: "Sustainability",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5392.jpg/:/cr=t:0%25,l:0.93%25,w:98.14%25,h:100%25/rs=w:776,h:388,cg:true", // Replace with actual image URL
    },
    {
      id: "BTG7",
      title: "Security",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5398.jpg/:/cr=t:0%25,l:0.08%25,w:99.84%25,h:100%25/rs=w:776,h:388,cg:true", // Replace with actual image URL
    },
  ];

  return (
    <div className="flex flex-col items-center py-8 md:py-12 mx-auto w-full bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Business Impact Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto px-4">
        {BIGalleryData.map((data) => (
          <div
            key={data.id}
            className="bg-pink-950 hover:scale-105 hover:bg-slate-950/75 transition-all rounded-lg overflow-hidden shadow-lg p-4 flex flex-col items-center"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              {data.title}
            </h3>
            <Image
              src={data.imgUrl}
              alt={data.title}
              width={320}
              height={320}
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BIGallery;
