import { CyberStrategyTypes } from "@/types/CyberStrategyTypes ";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CyberStrategy = () => {
  const CyberStrategyData: CyberStrategyTypes[] = [
    {
      id: "CSD1",
      title: "IT Infrastructure Modernization",
      points: [
        "Strategic Alignment",
        "Risk Management",
        "Change Management",
        "Legacy Integration",
        "Continuous Improvement",
      ],
      btnHref: "/",
      btnTitle: "Continue",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_8406.jpg/:/cr=t:0%25,l:18.48%25,w:63.04%25,h:100%25/rs=w:730,h:730,cg:true",
    },
    {
      id: "CSD2",
      title: "Cloud Migration",
      btnHref: "/cloud-adoption",
      points: [
        "Application migration and modernization with data center exit and consolidation",
        "Data migration and modernization",
        "Data center colocation and private cloud hosting",
      ],
      btnTitle: "Explore",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_19-5-2024_2392_www.bing.com.jpeg/:/cr=t:0%25,l:4.51%25,w:64.18%25,h:100%25/rs=w:550,h:550,cg:true",
    },
    {
      id: "CSD3",
      title: "Comprehensive Threat Assessment",
      btnHref: "/assessment",
      points: [
        "Cyber Risk Assessment",
        "Email Risk Assessment",
        "Ransomware Readiness",
        "Zero-Trust Maturity",
      ],
      btnTitle: "START NOW",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5279.jpg/:/cr=t:0%25,l:21.93%25,w:56.14%25,h:100%25/rs=w:730,h:730,cg:true",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Choose a Strategy
      </h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {CyberStrategyData.map((CSD) => (
          <div
            key={CSD.id}
            className="p-6 bg-white shadow-md rounded-xl flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            {CSD.imgUrl && (
              <Image
                src={CSD.imgUrl}
                alt={CSD.title}
                width={260}
                height={110}
                className="object-cover object-center rounded-full mb-4"
              />
            )}

            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              {CSD.title}
            </h2>

            <ul className="text-gray-700 text-sm my-3 space-y-2 flex-grow">
              {CSD.points.map((point, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-700 rounded-full"></span>
                  {point}
                </li>
              ))}
            </ul>

            <Link href={CSD.btnHref}>
              <button className="mt-4 px-6 py-2 bg-pink-700 text-white font-medium rounded-full hover:bg-pink-600 transition-shadow shadow-md hover:shadow-lg">
                {CSD.btnTitle}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CyberStrategy;
