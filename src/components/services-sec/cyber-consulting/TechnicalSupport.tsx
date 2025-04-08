import Image from "next/image";
import React from "react";
import TechSupportPartner from "./TechSupportPartner";
import Button from "@/components/common/Button ";

const TechnicalSupport = () => {
  return (
    <div className="container mx-auto px-6 py-10 flex flex-col justify-center items-center text-center">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-pink-900 dark:text-white">
          Technical Support
        </h1>
        <p className="text-lg text-gray-600 mt-2 dark:text-white">
          Reliable support services tailored for your business needs.
        </p>
      </div>

      {/* Content Section (Centered with max-w-5xl) */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 w-full ">
        {/* Service Descriptions (Balanced at md:w-1/2) */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <div>
            <h2 className="text-xl font-semibold text-pink-800">
              MarcViews Essential
            </h2>
            <p className="text-gray-700 dark:text-white">
              MarcViews Essential is the base-level service, and it is targeted
              toward devices that require a limited amount of support and can
              tolerate next-business-day, web-only response for critical as well
              as non-critical issues.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-pink-800">
              MarcViews Premium
            </h2>
            <p className="text-gray-700 dark:text-white">
              MarcViews Premium is targeted toward devices that require 24x7x365
              with one-hour response for critical issues and the next
              business-day response for non-critical issues.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-pink-800">
              MarcViews Elite
            </h2>
            <p className="text-gray-700 dark:text-white">
              MarcViews Elite services offer enhanced service-level agreements
              (SLAs) and accelerated issue resolution. This advanced support
              provides access to a dedicated support team. Single-touch ticket
              handling by the expert technical team streamlines resolution.
            </p>
          </div>
        </div>

        {/* Image Section (Balanced at md:w-1/2) */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRlY2glMjBzdXBwb3J0fGVufDB8fDB8fHww"
            alt="tech-support-img"
            width={500}
            height={290}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Tech Support Partners */}
      <div className="mt-12 w-full">
        <TechSupportPartner />
      </div>

      {/* Call to Action Button */}
      <div className="mt-10">
        <Button href="/contact-us" label="REQUEST A CONSULTATION CALL" />
      </div>
    </div>
  );
};

export default TechnicalSupport;
