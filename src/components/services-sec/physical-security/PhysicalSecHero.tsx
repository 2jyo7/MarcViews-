import Image from "next/image";
import Link from "next/link";
import React from "react";

const PhysicalSecHero = () => {
  return (
    <div className="relative w-full overflow-hidden text-white bg-gray-300">
      {/* Hero Section */}
      <div className="relative w-full h-[30vh] md:h-[45vh] lg:h-[55vh]">
        <Image
          src="https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QUklMjBMaXZlJTIwTW9uaXRvcmluZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Hero Image"
          fill
          className="object-cover object-center"
          priority
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-black/60 flex justify-center items-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            AI-Powered Remote Live Monitoring
          </h1>
        </div>
      </div>

      {/* Content Section as Card */}
      <div className="px-6 md:px-12 py-8 my-4  max-w-4xl mx-auto bg-gradient-to-b from-pink-700 to-slate-900 rounded-lg shadow-xl flex flex-col md:flex-row items-center md:items-start justify-between">
        {/* Hero Image */}
        <div className="w-full md:w-1/3 flex justify-center p-4 mb-6 md:mb-0">
          <Image
            src="https://sirixmonitoring.com/wp-content/uploads/2024/05/shopping-center-remote-surveillance-07-scaled-e1717079081998-1024x807.webp"
            alt="physical-sec-hero-img"
            height={240}
            width={250}
            className="rounded-lg shadow-lg "
          />
        </div>

        <div className="w-full md:w-2/3">
          <h2 className="text-xl md:text-2xl font-semibold text-center md:text-left text-white mb-4">
            Remote Video Monitoring
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-white">
            <li>
              24/7 surveillance of your premises, ensuring real-time monitoring
              and rapid response to incidents
            </li>
            <li>Live operations window</li>
            <li>Real-time Reporting MOBILE</li>
            <li>Real-time reporting WEB</li>
          </ul>
          <p className="mt-4 text-base md:text-lg text-white text-center md:text-left">
            <strong>
              Note: This service is delivered in partnership with{" "}
              <Link
                href="https://sirixmonitoring.com/"
                className="text-pink-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sirix Monitoring
              </Link>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhysicalSecHero;
