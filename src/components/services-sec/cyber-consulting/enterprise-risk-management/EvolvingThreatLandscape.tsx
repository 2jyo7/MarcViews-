import Image from "next/image";
import React from "react";

const EvolvingThreatLandscape = () => {
  return (
    <section className="py-20 bg-teal-100/40">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h2 className="heading-style text-bg-style">
          An Evolving Threat Landscape
        </h2>
        <div className="flex justify-center py-12">
          <Image
            src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_5-12-2024_122150_.jpeg/:/cr=t:5.36%25,l:5.36%25,w:89.29%25,h:89.29%25/rs=w:1160,h:525"
            alt="Evolving Threat Landscape pyramid image"
            width={800}
            height={450}
            className="rounded-xl shadow-lg w-full max-w-5xl object-cover shadow-teal-600"
          />
        </div>
      </div>
    </section>
  );
};

export default EvolvingThreatLandscape;
