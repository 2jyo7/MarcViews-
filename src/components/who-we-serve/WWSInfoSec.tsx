import { WWSInforType } from "@/types/WWSInfoType ";
import Image from "next/image";
import React from "react";
import ConsultButton from "../common/ConsultButton";

const WWSInfoSec = () => {
  const WWSInfoData: WWSInforType[] = [
    {
      id: "WWSI01",
      title: "Banking & Financial Service",
      para: "The banking and financial industry faces an ever-evolving threat landscape, including sophisticated cyberattacks, regulatory compliance mandates, and the need to protect sensitive customer data.",
      points: [
        "Protect sensitive data",
        "Ensure operational continuity",
        "Comply with industry regulations",
        "Prevent fraud and financial crime",
      ],
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_5-10-2024_2312_www.canva.com.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:81.76%25/rs=w:641,h:321,cg:true",
      btnTitle: "Continue",
    },
    {
      id: "WWSI02",
      title: "Educational Institutions",
      para: "Educational institutions face unique security challenges, including protecting student data, ensuring network integrity, and safeguarding critical infrastructure. ",
      points: [
        "Protect student data",
        "Ensure network security",
        "Comply with industry regulations",
        "Safeguard critical infrastructure",
        "We Serve :- Higher Ed. Institutes",
        "Research Institution",
        "School Boards",
      ],
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_5-10-2024_23525_www.canva.com.jpeg/:/cr=t:12.87%25,l:0%25,w:100%25,h:74.26%25/rs=w:600,h:300,cg:true/qt=q:92",
      btnTitle: "Continue",
    },
    {
      id: "WWSI03",
      title: "Energy & Water",
      para: "The Energy & Water industry faces growing challenges in sustainability, resource management, and infrastructure security amid rising global demands.",
      points: [
        "Power through change with united operations and business solutions",
        "Our centralized OT & SCADA Security services is purposely built to serve utility & energy providers. ",
      ],
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_5-10-2024_231050_www.canva.com.jpeg/:/cr=t:0.74%25,l:0%25,w:100%25,h:98.52%25/rs=w:600,h:300,cg:true/qt=q:92",
      btnTitle: "Talk to Us",
    },
    {
      id: "WWSI04",
      title: "Healthcare",
      para: "",
      points: [
        "Accelerate collaboration across the ecosystem to make healthcare more holistic,  accessible, and efficient",
        " Provide timely and actionable insights to automate processes, optimize resources, and drive  efficiencies",
        "Bring data together and surface relevant information to enable people to take meaningful  action ",
      ],
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_7339.jpg/:/cr=t:0%25,l:2.95%25,w:84.75%25,h:63.48%25/rs=w:600,h:300,cg:true,m/qt=q:92",
      btnTitle: "Talk to Us",
    },
    {
      id: "WWSI05",
      title: "Non-Profit Institution",
      para: "Nonprofit institutions often face unique security challenges, including limited budgets, reliance on volunteers, and sensitive data protection. We can help in:  ",
      points: [
        "Secure remote access",
        "Protect sensitive data",
        "Ensure operational continuity",
        "Optimize security investments",
      ],
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_5-10-2024_232358_www.canva.com.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true",
      btnTitle: "Talk to Us",
    },
    {
      id: "WWSI06",
      title: "Transportation & Logistics",
      para: "The transportation and logistics industry faces increasing security risks due to the interconnected nature of supply chains and the reliance on technology. ",
      points: [
        "Safeguard sensitive data",
        "Protect supply chain integrity",
        "Ensure operational continuity",
        "Comply with industry regulations",
      ],
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_5-10-2024_23298_www.canva.com.jpeg/:/cr=t:15.32%25,l:0%25,w:100%25,h:69.36%25/rs=w:600,h:300,cg:true/qt=q:92",
      btnTitle: "Book an Appointment",
    },
    {
      id: "WWSI07",
      title: "Hospitality",
      para: "The hospitality industry faces a unique set of security challenges, including sensitive guest data, remote access points, and the need to maintain operational continuity &",
      points: [
        "Protect guest data",
        "Secure remote access",
        "Ensure operational continuity",
        "Comply with industry regulations ",
      ],
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_5-10-2024_231532_www.canva.com.jpeg/:/cr=t:10.71%25,l:0%25,w:100%25,h:77%25/rs=w:600,h:300,cg:true/qt=q:92",
      btnTitle: "Talk to Us",
    },
    {
      id: "WWSI08",
      title: "Retail",
      para: "The retail industry faces a unique set of security challenges, including protecting customer data, securing point-of-sale (POS) systems, and preventing fraud. By partnering with MarcViews Networks, retail organizations can:",
      points: [
        "Prevent fraud",
        "Ensure compliance",
        "Secure POS systems",
        "Protect customer data",
      ],
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG-2913.jpg/:/cr=t:13.41%25,l:0%25,w:100%25,h:73.19%25/rs=w:600,h:300,cg:true/qt=q:92",
      btnTitle: "Talk to Expert",
    },
    {
      id: "WWSI09",
      title: "Government",
      para: "Government agencies face a unique set of security challenges, including protecting sensitive data, ensuring compliance with regulations, and safeguarding critical infrastructure. By partnering with MarcViews Networks, government agencies can:",
      points: [
        "Ensure compliance",
        "Protect sensitive data",
        "Provide incident response",
        "Safeguard critical infrastructure",
      ],
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_5-10-2024_235617_www.canva.com.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:92",
      btnTitle: "Talk to Expert",
    },
    {
      id: "WWSI010",
      title: "Professional Services",
      para: "",
      points: [
        "Whether you’re a consulting business, accounting firm, law firm, staffing provider, or business services provider, you must be exceeding client expectations every time, everywhere. ",
        "Our managed services will make sure 99.99% of availability of IT infrastructure in secured manner.",
      ],
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5076-783f10c.PNG/:/cr=t:0%25,l:3.87%25,w:92.27%25,h:100%25/rs=w:600,h:300,cg:true/qt=q:92",
      btnTitle: "Talk to Us",
    },
    {
      id: "WWSI011",
      title: "Automotive",
      para: "By partnering with us you can have:",
      points: [
        "Protect connected vehicles",
        "Safeguard supply chain",
        "Comply with industry regulations",
        "Leverage advanced threat detection",
      ],
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_6-10-2024_0023_www.oracle.com.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:92",
      btnTitle: "Book an Appointment",
    },
  ];

  return (
    <section className="py-12 lg:py-18">
      <div className="container mx-auto max-w-6xl">
        {WWSInfoData.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row items-center gap-6 mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <Image
              src={item.imgUrl}
              alt={item.title}
              className="w-full md:w-1/2 h-auto rounded-lg shadow-lg"
              width={300}
              height={360}
            />
            <div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-700">
                {item.title}
              </h2>
              <p className="text-gray-700 mb-4">{item.para}</p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <button className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-lime-700">
                {item.btnTitle}
              </button>
            </div>
          </div>
        ))}
      </div>
      <ConsultButton
        description="          Book a consultation for a proof-of-concept (POC)
"
        btnTitle="          REQUEST A CALL
"
      />
      {/* <div className="text-center py-6 bg-white shadow-lg mt-8 rounded-lg mx-4 md:mx-auto max-w-4xl">
        <p className="text-lg font-semibold text-gray-800 mb-4">
          Book a consultation for a proof-of-concept (POC)
        </p>
        <button className="px-6 py-3 bg-pink-800 text-white font-bold rounded-lg hover:bg-neutral-700 transition-all duration-300">
          REQUEST A CALL
        </button>
      </div> */}
    </section>
  );
};

export default WWSInfoSec;
