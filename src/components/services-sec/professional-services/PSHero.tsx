import Image from "next/image";
import React from "react";

const PSHero = () => {
  return (
    <section className="relative w-full h-[24rem] md:h-[28rem] lg:h-[30rem] flex items-center justify-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 w-full">
        <Image
          src="https://media.istockphoto.com/id/580135324/photo/risk-management-concept-diagram.webp?a=1&b=1&s=612x612&w=0&k=20&c=vPo_rrDKonWgZKzY2QpMxUP3XcQ447Fw9gvp6dxZIh4="
          alt="Professional Services Hero"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900 bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
          Professional Services You Can Trust
        </h1>
        <p className="text-lg lg:text-xl mb-6">
          We help you manage risks and grow your business with confidence.
        </p>
      </div>
    </section>
  );
};

export default PSHero;
