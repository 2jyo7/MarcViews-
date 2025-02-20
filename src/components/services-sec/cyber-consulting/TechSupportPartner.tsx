import Image from "next/image";
import React from "react";

const TechSupportPartner = () => {
  return (
    <div className="py-10 bg-slate-900 rounded-md">
      <h2 className="text-center text-2xl font-semibold text-white mb-6">
        Our Tech Support Partners
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
        {[
          "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/SonicWall-Logo-RGB.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:684,h:200,cg:true",
          "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG-2902.jpg/:/cr=t:0%25,l:0%25,w:98.79%25,h:98.79%25/rs=w:283,h:200,cg:true,m",
          "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5519.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:531,h:200,cg:true",
          "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5242.jpg/:/rs=w:141,h:200,cg:true,m/cr=w:141,h:200",
          "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_4891.jpg/:/rs=w:477,h:200,cg:true,m/cr=w:477,h:200",
          "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG-3008.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:205,h:200,cg:true",
          "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG-3009.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:335,h:200,cg:true",
          "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/MarcViews%20Networks%20Inc.%20-%20Advanced.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:200,h:200,cg:true",
          "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/SonicWall-Logo-RGB.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:684,h:200,cg:true",
          "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG-2677.jpg/:/cr=t:0%25,l:0%25,w:97.83%25,h:97.83%25/rs=w:281,h:200,cg:true,m",
        ].map((src, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-2 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105"
          >
            <Image
              src={src}
              alt={`partner-img${index + 1}`}
              width={100}
              height={100}
              className="object-contain rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSupportPartner;
