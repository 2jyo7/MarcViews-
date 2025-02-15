import Image from "next/image";
import React from "react";

const SecServIntro = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-gray-100 rounded-xl shadow-md ">
      {/* Image Section */}
      <div className="w-full md:w-1/3">
        <Image
          src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5059.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:984,h:652" // Replace with actual image path
          alt="Security Services"
          width={300}
          height={300}
          className="object-cover rounded-lg shadow-lg w-full"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-2/3 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Efficient, Effective & Secure
        </h1>
        <p className="text-gray-700/90 text-lg text-start">
          Our cybersecurity package offers comprehensive protection against
          evolving digital threats. With layered security measures, continuous
          monitoring, and rapid incident response, we ensure a resilient digital
          environment, minimizing the risk of breaches, data loss, and more.
        </p>
      </div>
    </div>
  );
};

export default SecServIntro;
