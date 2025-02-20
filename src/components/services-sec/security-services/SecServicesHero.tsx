import Image from "next/image";
import React from "react";

const SecServicesHero = () => {
  return (
    <section className="py-4 lg:py-8">
      {/* Background Image */}
      <div className="relative w-full h-[20rem] md:h-[22rem] lg:h-[24rem] flex items-center justify-center text-white">
        <div className="absolute inset-0 w-full bg-orange-600">
          <Image
            src="https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRpZ2l0YWwlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D"
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
            Real time monitoring
          </h1>
          <p className="text-lg lg:text-xl mb-6">
            Real-time monitoring is the delivery of continuously updated data
            about systems, processes or events.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecServicesHero;
