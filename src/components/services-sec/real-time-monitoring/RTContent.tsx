import Button from "@/components/common/Button ";
import React from "react";

const RTContent = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center container ">
        {/* Subtitle */}
        <span className="title-style">
          Cyber or Physical: We&apos;ve Got You Covered
        </span>

        {/* Title */}
        <h2 className="heading-style  text-bg-style">
          A Comprehensive Suite of Real-Time Monitoring Services!
        </h2>

        {/* Description */}
        <p className="description-style">
          Optimize your network performance, enhance security, and ensure
          business continuity.
        </p>

        {/* Features List */}
        <ul className="mt-6 text-gray-800 text-lg text-left inline-block">
          {[
            "24/7 Network Surveillance",
            "Performance Monitoring",
            "Security Threat Detection",
            "Safe & Efficient",
            "Centralized Monitoring",
          ].map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="text-pink-700 text-xl">✔</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="mt-8">
          <Button
            label=" BOOK A DEMO SESSION"
            href="/appointments"
            className=" px-4"
          />
        </div>
      </div>
    </section>
  );
};

export default RTContent;
