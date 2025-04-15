import Button from "@/components/common/Button ";
import Image from "next/image";
import React from "react";

const SOCIntro = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-gray-100 rounded-lg shadow-lg">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0 ">
        <Image
          alt="soc-intro-sec-img"
          width={400}
          height={360}
          className="object-cover rounded-xl shadow-xl "
          src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/SOCaaS.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:984,h:764"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          SOC: AI-Powered Services
        </h1>
        <p className="text-gray-700 text-base md:text-lg mb-4">
          We provide clients with access to an SOC team to monitor, detect, and
          respond to security threats and incidents. You only have to focus on
          your business growth; security is well taken care of by us.
          <span className="block mt-2 font-semibold">
            **This service is provided in collaboration with our partners such
            as IBM, Checkpoint, Fortinet, and Microsoft.
          </span>
        </p>
        <Button href="/appointments" label="Book A Demo" />
      </div>
    </section>
  );
};

export default SOCIntro;
