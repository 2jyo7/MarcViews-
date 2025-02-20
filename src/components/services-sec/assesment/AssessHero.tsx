import Image from "next/image";
import React from "react";

const AssessHero = () => {
  return (
    <div className="relative w-full h-[30vh] md:h-[45vh] lg:h-[55vh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=2400&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWl8ZW58MHx8MHx8fDA%3D"
        alt="Hero Image"
        fill // Full container coverage (new feature)
        className="object-cover object-center"
        priority // Optimizes for above-the-fold content
        sizes="50vw" // Responsive sizing
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
          CTA: Comprehensive Threat Assessment
        </h1>
      </div>
    </div>
  );
};

export default AssessHero;
