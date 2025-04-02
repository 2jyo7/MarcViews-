import PopUpEffect from "@/components/common/PopUpEffect ";
import Image from "next/image";
import React from "react";

const ZeroTrustHero = () => {
  return (
    <div className="relative bg-gray-100 min-h-screen flex flex-col">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1484662020986-75935d2ebc66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Zero Trust Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="heading-style text-white">
            Zero Trust Security Framework
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 lg:py-20 text-gray-800">
        <p className="description-style">
          Zero Trust is a powerful framework for securing assets. However, it’s
          implemented differently for every organization, depending on their
          priorities. Whether you’re just starting to identify Zero Trust
          opportunities in your business or are somewhere along the path, we can
          help you evaluate your current stage of Zero Trust implementation,
          validate the wins, and provide a prescriptive plan to help you take
          the next step successfully.
        </p>

        <PopUpEffect>
          {/* Call-to-Action Section */}
          <div className="mt-8 bg-white shadow-md p-6 md:p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Start Today
            </h2>
            <p className="text-lg text-gray-700 mt-2">
              Zero Trust is not one product or platform; it&apos;s a{" "}
              <strong className="text-gray-900">security framework</strong>{" "}
              built around the concept of <em>“never trust, always verify”</em>{" "}
              and
              <em> “assuming breach.”</em>
            </p>
            <button className="mt-6 px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-all">
              CONTACT AN EXPERT
            </button>
          </div>
        </PopUpEffect>
      </div>
    </div>
  );
};

export default ZeroTrustHero;
