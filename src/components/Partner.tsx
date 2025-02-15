import Image from "next/image";
import React from "react";

const PartnerSection = () => {
  const partners = [
    {
      name: "Malwarebytes",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_4411.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:700,h:180,cg:true",
    },
    {
      name: "AWS",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_4552.jpg/:/rs=w:210,h:200,cg:true,m/cr=w:210,h:200",
    },
    {
      name: "Red Hat",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_4891.jpg/:/rs=w:477,h:200,cg:true,m/cr=w:477,h:200",
    },
    {
      name: "Google Cloud",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_12-11-2024_131725_services.google..jpeg/:/rs=w:392,h:117,cg:true,m/cr=w:392,h:117",
    },
    {
      name: "Sirix",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_26-11-2024_122347_doc-0c-04-prod-0.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:398,h:155,cg:true",
    },
    {
      name: "Microsoft",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5519.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:531,h:200,cg:true",
    },
    {
      name: "IBM",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG-2902.jpg/:/cr=t:0%25,l:0%25,w:98.79%25,h:98.79%25/rs=w:283,h:200,cg:true,m",
    },
    {
      name: "RSV",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG-2819.jpg/:/rs=w:208,h:200,cg:true,m/cr=w:208,h:200",
    },
  ];

  return (
    <section className="py-12">
      {/* Section Title */}
      <h2 className="text-center text-3xl text-gray-800 mb-8">
        Who we partner with
      </h2>

      {/* Partner Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 items-center justify-items-center px-4">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="w-full max-w-[160px] h-20 flex items-center justify-center border bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 hover:rotate-1 transition-all duration-300 ease-in-out"
          >
            <Image
              src={partner.imgUrl}
              alt={partner.name}
              className="object-contain h-full"
              width={98}
              height={96}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerSection;
