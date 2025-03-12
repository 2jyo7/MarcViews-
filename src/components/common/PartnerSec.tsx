"use client"; // Needed for Next.js animations

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Malwarebytes",
    imgUrl:
      "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_4411.jpg",
  },
  {
    name: "AWS",
    imgUrl:
      "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_4552.jpg",
  },
  {
    name: "Red Hat",
    imgUrl:
      "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_4891.jpg",
  },
  {
    name: "Google Cloud",
    imgUrl:
      "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_12-11-2024_131725_services.google..jpeg",
  },
  {
    name: "Microsoft",
    imgUrl:
      "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5519.jpg",
  },
  {
    name: "IBM",
    imgUrl:
      "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG-2902.jpg",
  },
  {
    name: "RSV",
    imgUrl:
      "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG-2819.jpg",
  },
  {
    name: "Cloud Guard",
    imgUrl:
      "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/MarcViews%20Networks%20Inc.%20-%20CloudGuard%20Partner.png",
  },
  {
    name: "SonicWall",
    imgUrl:
      "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/SonicWall-Logo-RGB.jpg",
  },
];

// Duplicating partners list for a seamless infinite loop
const duplicatedPartners = [...partners, ...partners];

const PartnerSec = () => {
  return (
    <section className="py-16 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">
          Our Trusted Partners
        </h2>
        <p className="text-gray-600 mt-2">
          Collaborating with the best in the industry
        </p>
      </div>

      {/* Scrolling Wrapper */}
      <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          className="flex space-x-10 min-w-max"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="w-[160px] h-24 flex items-center justify-center border border-gray-200 bg-white shadow-md rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <Image
                src={partner.imgUrl}
                alt={partner.name}
                className="object-contain h-full p-2"
                width={120}
                height={80}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerSec;
