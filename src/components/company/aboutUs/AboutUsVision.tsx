import Button from "@/components/common/Button ";
import Image from "next/image";
import React from "react";

const AboutUsVision = () => {
  const aboutUsVisionData = [
    {
      title: "Our Mission",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5372.jpg/:/cr=t:6.31%25,l:0%25,w:100%25,h:87.39%25/rs=w:984,h:492",
      para: "Safeguard the digital realm and ensure a cyber-resilient future.",
    },
    {
      title: "Our Vision",
      imgUrl:
        "https://img1.wsimg.com/isteam/stock/yrY8e9w/:/cr=t:3.85%25,l:0%25,w:100%25,h:92.31%25/rs=w:1160,h:580",
      para: "Fortify the digital landscape, foster trust, and enable innovation in the interconnected world by becoming one of the best/biggest MSSP in Canada.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Image */}
        <div className="flex justify-center">
          <Image
            src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_6287.jpg/:/cr=t:25.45%25,l:0%25,w:100%25,h:74.55%25/rs=w:1397,h:699,cg:true"
            alt="about-us-vision-img"
            width={800}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {aboutUsVisionData.map((item, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-xl">
              <Image
                src={item.imgUrl}
                alt={item.title}
                width={500}
                height={250}
                className="w-full h-60 object-cover rounded-lg shadow-md"
              />
              <h3 className="text-2xl font-semibold mt-5">{item.title}</h3>
              <p className="text-gray-600 mt-3">{item.para}</p>
            </div>
          ))}
        </div>

        {/* Button Section */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Button
            label="Get A Quote"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          />
          <Button
            label="Call Us"
            className="px-12 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
          />
          <Button
            label="Email"
            className="px-12 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsVision;
