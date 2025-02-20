import Image from "next/image";
import React from "react";

const CloudSIntro = () => {
  return (
    <section className="py-8 lg:py-12 bg-gray-100">
      <div className="container mx-auto px-2 lg:px-4 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2 flex justify-center">
          <Image
            alt="cloud-sec-intro-img"
            src={
              "https://plus.unsplash.com/premium_photo-1681487942927-e1a2786e6036?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNsb3VkJTIwc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D"
            }
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-xl shadow-blue-400"
          />
        </div>
        <div className="lg:w-1/2 text-gray-800">
          <p className="text-lg font-medium italic bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            &quot;Nearly all successful attacks on cloud services are the result
            of customer misconfiguration, mismanagement & mistakes.&quot; --
            <span className="font-semibold text-pink-700"> Gartner</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CloudSIntro;
