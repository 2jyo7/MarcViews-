import Button from "@/components/common/Button ";
import PopUpEffect from "@/components/common/PopUpEffect ";
import Image from "next/image";
import React from "react";

const CloudAHero = () => {
  return (
    <div className="relative w-full overflow-hidden bg-slate-100">
      {/* Hero Section */}
      <PopUpEffect>
        <div className="relative w-full h-[30vh] md:h-[45vh] lg:h-[55vh]">
          <Image
            src="https://plus.unsplash.com/premium_photo-1683836722608-60ab4d1b58e5?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero Image"
            fill
            className="object-cover object-center"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-black/60 flex justify-center items-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
              Cloud Adoption
            </h1>
          </div>
        </div>
      </PopUpEffect>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12 lg:py-16 max-w-6xl">
        <PopUpEffect>
          {/* Cloud Migration Image & Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="https://plus.unsplash.com/premium_photo-1683120968693-9af51578770e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdWQlMjB0ZWNofGVufDB8fDB8fHww"
                alt="Cloud Tech"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="text-gray-800 dark:text-white space-y-4">
              <h2 className="title-style text-bg-style">
                Cloud Migration Services
              </h2>
              <p className="description-style">
                Cloud Migration Services help manage cloud migration for your
                business, allowing you to focus on everything else. We
                specialize in:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-white">
                <li>AWS (Amazon Web Services)</li>
                <li>Microsoft Azure</li>
                <li>Google Cloud</li>
                <li>IBM Cloud</li>
              </ul>
              <p className="description-style">
                Our team of cloud experts adopts a declarative and continuous
                approach to migration, leveraging automation and Generative AI
                at every phase to assist in your journey.
              </p>
            </div>
          </div>
        </PopUpEffect>

        <PopUpEffect>
          {/* Capabilities Section */}
          <div className="mt-12 text-center py-16 bg-gray-200">
            <h2 className="title-style text-bg-style">Capabilities</h2>
            <p className="description-style">
              We provide a range of cloud migration services to support your
              business growth.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-gray-800 text-left mx-auto max-w-3xl">
              <li className="bg-gray-100 p-4 rounded-lg shadow-md">
                <strong>Application migration & modernization</strong>
                <p className="text-sm">Datacenter exit and consolidation</p>
              </li>
              <li className="bg-gray-100 p-4 rounded-lg shadow-md">
                <strong>Data migration & modernization</strong>
              </li>
              <li className="bg-gray-100 p-4 rounded-lg shadow-md">
                <strong>Application & datacenter discovery & assessment</strong>
              </li>
              <li className="bg-gray-100 p-4 rounded-lg shadow-md">
                <strong>Datacenter colocation & private cloud hosting</strong>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="mt-8">
              <Button
                label="BOOK AN APPOINTMENT WITH AN EXPERT"
                href="/appointments"
              />
            </div>
          </div>
        </PopUpEffect>
      </div>
    </div>
  );
};

export default CloudAHero;
