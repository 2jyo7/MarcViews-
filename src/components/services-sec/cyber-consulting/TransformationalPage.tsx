import { TransformOutcomeType } from "@/types/TransformOutcomeType ";
import Image from "next/image";
import React from "react";

const TransformationalPage = () => {
  const TransformOutcomesData: TransformOutcomeType[] = [
    {
      id: "TOD1",
      title: "Accelerating digital reinvention",
      para: "Grow and transform business by reimaging your strategy abd how you work. ",
      btnName: "",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5298.jpg/:/cr=t:0%25,l:0.18%25,w:99.65%25,h:100%25/rs=w:776,h:388,cg:true",
    },
    {
      id: "TOD2",
      title: "Delivering impactful experiences",
      para: "Grow and transform business by re-imaging your strategy abd how you work. ",
      btnName: "", // No button for this card
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5390.jpg/:/cr=t:7.45%25,l:0%25,w:100%25,h:85.09%25/rs=w:776,h:388,cg:true",
    },
    {
      id: "TOD3",
      title: "Optimizing hybrid cloud and AI solutions",
      para: "Deploy transformative technologies to improve the way works get done.",
      btnName: "",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_16-5-2024_142059_static.tenable.co.jpeg/:/cr=t:3.92%25,l:0%25,w:100%25,h:92.17%25/rs=w:776,h:388,cg:true",
    },
    {
      id: "TOD4",
      title: "Risk Management",
      para: "Risk Management help analyze potential risks and helping organizations prioritize and implement risk mitigation strategies. It identify and prioritize  cyber vulnerabilities so  that you can immediately, protect critical asset, while  immediately improving overall  security posture. ",
      btnName: "Learn More",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5501.jpg/:/cr=t:1.86%25,l:0%25,w:100%25,h:96.27%25/rs=w:776,h:388,cg:true",
    },
    {
      id: "TOD5",
      title: "Security Strategy and Planning",
      para: "Develop a tailored cybersecurity strategy aligned with your organization's goals, risk tolerance, and compliance requirements.",
      btnName: "Get Started",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5399.jpg/:/cr=t:0.23%25,l:0%25,w:100%25,h:99.54%25/rs=w:776,h:388,cg:true",
    },
    {
      id: "TOD6",
      title: "Business continuity plan",
      para: "It is designed to protect personnel and critical assets and make sure your organization is able to recover fast, minimize interruptions, and ensure resilience.",
      btnName: "Get Started",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/AdobeStock_601276567_Preview.jpeg/:/rs=w:776,h:388,cg:true,m/cr=w:776,h:388",
    },
    {
      id: "TOD7",
      title: "Cyber Threat Assessment",
      para: "Get Comprehensive assessments to identify vulnerabilities and weaknesses in your organization's systems, networks, and processes. ",
      btnName: "Assess Now",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/AdobeStock_555641839_Preview.jpeg/:/cr=t:5.6%25,l:0%25,w:100%25,h:88.81%25/rs=w:776,h:388,cg:true",
    },
    {
      id: "TOD8",
      title: "Security Policy and Procedure Development",
      para: "Developing and implementing security policies, procedures, and best practices to guide employees in maintaining a secure environment.  ",
      btnName: "",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/AdobeStock_593167445_Preview.jpeg/:/cr=t:3.1%25,l:0%25,w:100%25,h:93.81%25/rs=w:776,h:388,cg:true",
    },
    {
      id: "TOD9",
      title: "Compliance and Regulatory Support",
      para: "This is a description for Outcome 3.",
      btnName: "",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/AdobeStock_604064898_Preview.jpeg/:/cr=t:12.52%25,l:0%25,w:100%25,h:74.96%25/rs=w:776,h:388,cg:true",
    },
    {
      id: "TOD10",
      title: "Protection Against Ransomware",
      para: "Built a well-defined incident response plan in place can significantly improve your organization's ability to handle ransomware attacks effectively. ",
      btnName: "Get Started",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/AdobeStock_597897060_Preview.jpeg/:/rs=w:776,h:388,cg:true,m/cr=w:776,h:388",
    },
    {
      id: "TOD11",
      title: "Cybersecurity Awareness Programs",
      para: "Avail Industry standard training programs to enhance employees' understanding of cybersecurity threats and best practices.",
      btnName: "",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/AdobeStock_201541022_Preview.jpeg/:/rs=w:776,h:388,cg:true,m/cr=w:776,h:388",
    },
    {
      id: "TOD12",
      title: "Application Modernization",
      para: "Improve your current applications to deliver a better customer experience and increase ROI. Through assessing the strategic importance of your applications against available cost and emerging technology options, including cloud, containers and Kubernetes, microservice-based architectures, and server-less, you can determine if and how much to migrate of your applications. ",
      btnName: "More  ",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_2033.jpg/:/cr=t:4.9%25,l:0%25,w:100%25,h:90.21%25/rs=w:776,h:388,cg:true",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 dark:text-white">
        Transformational Outcomes
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TransformOutcomesData.map(({ id, title, para, btnName, imgUrl }) => (
          <div
            key={id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform
             hover:scale-105 hover:shadow-xl flex flex-col"
          >
            <div className="w-full h-52">
              <Image
                src={imgUrl}
                alt={title}
                className="w-full h-full object-cover"
                width={400}
                height={250}
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
              <p className="text-gray-600 mt-2 flex-grow">{para}</p>
              {btnName && (
                <button className="mt-4 px-4 py-2 bg-pink-600 text-white font-medium rounded-md hover:bg-blue-700 transition ">
                  {btnName}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransformationalPage;
