import Image from "next/image";
import React from "react";

const DNRIntro = () => {
  const dnrIntroInfo = [
    {
      imgUrl:
        "https://img1.wsimg.com/isteam/stock/QzOdGn3/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:696/qt=q:33",
      title: "Look for anomalies and act proactively",
      para:
        "These models can analyze historical data to predict potential future threats, allowing for proactive measures to strengthen defenses.",
    },
  ];

  const { imgUrl, title, para } = dnrIntroInfo[0];

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center container w-full">
        {/* Section Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Detect and Respond
        </h1>

        {/* Card Container */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col items-center md:flex-row ">
          {/* Image */}
          <div className="w-full  flex justify-center mb-4">
            <Image
              src={imgUrl}
              alt={title}
              width={400}
              height={300}
              className="object-cover w-full h-96 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>

<div className="flex flex-col">
          {/* Title & Description */}
          <h2 className="text-2xl  font-semibold text-gray-900">{title}</h2>
          <p className="text-gray-700 mt-3 text-base text-center leading-relaxed">
            {para}
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DNRIntro;
