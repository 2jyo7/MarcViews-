"use client";
import Image from "next/image";
import React from "react";
import PopUpEffect from "../common/PopUpEffect";

const Hero2Sec = () => {
  const sections = [
    {
      id: 1,
      title: "Real-time protection 24 * 7 * 365",
      description: "Enhanced Security with Tailored Guidance",
      image:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_16-5-2024_142035_static.tenable.co.jpeg/:/cr=t:16.1%25,l:0%25,w:100%25,h:67.79%25/rs=w:1200,h:600,cg:true",
    },
    {
      id: 2,
      title: "Cut 45% Cybersecurity Costs",
      description: "Enhanced experiences, Operational efficiency",
      image:
        "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTV8fGJ1c2luZXNzfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      title: "Modernize legacy infrastructure",
      description:
        "Increase operational efficiency, Cloud Migration, Save 35% on cyber infrastructure cost",
      image:
        "https://plus.unsplash.com/premium_photo-1700508817432-73b86d80d81c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGN5YmVyJTIwdGVjaHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      title: "An Evolving Threat Landscape",
      description:
        "Respond with Proactive Defense & External Risk Management Platform",
      image:
        "https://media.istockphoto.com/id/1346294748/photo/cyber-security-icon-rotating-wheel-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=ixA2peieQb_kLSZtCBxsPuAdCFIpSYEnKMOp7rxLOoM=",
    },
    {
      id: 5,
      title: "Accelerate Together",
      description: "Consistent & Coordinated, Reduce Cyber Risk",
      image:
        "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlnaXRhbCUyMHNlY3VyaXR5fGVufDB8fDB8fHww",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-opacity-55 my-16 md:mt-10">
      <PopUpEffect>
        <div className="relative w-full h-[30vh] md:h-[45vh] lg:h-[55vh]">
          <Image
            src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero Image"
            fill
            className="object-cover object-center"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-4">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              Welcome to MarcViews
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg max-w-md mt-2">
              Prevent threats and build trust as you grow the business...
            </p>
          </div>
        </div>
      </PopUpEffect>
      <PopUpEffect delay={1.2}>
        {/* Grid Cards with Hover Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16 mx-auto px-6 max-w-6xl ">
          {sections.map((sec) => (
            <div
              key={sec.id}
              className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={sec.image}
                alt={sec.title}
                width={500}
                height={500}
                className="w-full h-60 object-cover group-hover:opacity-40 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 opacity-0 group-hover:bg-black/60 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-white text-lg md:text-xl font-semibold text-center">
                  {sec.title}
                </h2>
                <p className="text-white text-sm md:text-base text-center mt-2">
                  {sec.description}
                </p>
                <button className="mt-4 px-4 py-2 border border-white rounded-md text-white hover:bg-white hover:text-gray-900 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </PopUpEffect>
    </div>
  );
};

export default Hero2Sec;
