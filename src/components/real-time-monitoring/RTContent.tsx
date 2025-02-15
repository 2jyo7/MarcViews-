import React from "react";

const RTContent = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Subtitle */}
        <span className="text-pink-700 text-lg font-semibold uppercase tracking-wide">
          Cyber or Physical: We&apos;ve Got You Covered
        </span>

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-900 mt-4">
          A Comprehensive Suite of Real-Time Monitoring Services!
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-lg mt-6 leading-relaxed">
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
          <button className="bg-pink-700 hover:bg-pink-800 text-white font-bold py-3 px-6 rounded-full text-lg shadow-md transition">
            BOOK A DEMO SESSION
          </button>
        </div>
      </div>
    </section>
  );
};

export default RTContent;
