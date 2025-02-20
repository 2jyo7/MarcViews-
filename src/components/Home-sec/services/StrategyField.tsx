import React from "react";
import ServicesCard from "./ServicesCard";

const StrategyField = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl  text-center mb-8">
        Choose a Strategy
      </h1>
      <div className="flex flex-wrap gap-2">
        <ServicesCard
          title="Cloud Strategy"
          btnTitle="Continue"
          img={{
            src: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_16-5-2024_142059_static.tenable.co.jpeg/:/cr=t:0%25,l:3.3%25,w:54.25%25,h:100%25/rs=w:730,h:730,cg:true",
            alt: "Cloud Strategy Image",
          }}
          serviceList={[
            "Cloud Adoption Goals",
            "Cloud Architecture",
            "Cloud Security and Compliance",
            "Cloud Cost Optimization",
          ]}
        />
        <ServicesCard
          title="Data"
          btnTitle="Explore"
          img={{
            src: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_7-12-2024_214244_www.cyber.gc.ca.jpeg/:/cr=t:0%25,l:7.61%25,w:67.24%25,h:100%25/rs=w:730,h:730,cg:true",
            alt: "Data Image",
          }}
          serviceList={[
            "Cloud Adoption Goals",
            "Cloud Architecture",
            "Cloud Security and Compliance",
            "Cloud Cost Optimization",
          ]}
        />
        <ServicesCard
          title="Artificial Intelligence : AI"
          btnTitle="Continue"
          img={{
            src: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_8839.jpg/:/cr=t:0%25,l:12.03%25,w:75.94%25,h:100%25/rs=w:730,h:730,cg:true",
            alt: "AI Image",
          }}
          serviceList={[
            "Cloud Adoption Goals",
            "Cloud Architecture",
            "Cloud Security and Compliance",
            "Cloud Cost Optimization",
          ]}
        />
        <ServicesCard
          title="IT Modernization"
          btnTitle="Continue"
          img={{
            src: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_7-12-2024_232932_www.cloudskillsbo.jpeg/:/cr=t:0%25,l:13.3%25,w:73.4%25,h:100%25/rs=w:658,h:658,cg:true",
            alt: "IT Modernization Image",
          }}
          serviceList={[
            "Cloud Adoption Goals",
            "Cloud Architecture",
            "Cloud Security and Compliance",
            "Cloud Cost Optimization",
          ]}
        />
      </div>
    </div>
  );
};

export default StrategyField;
