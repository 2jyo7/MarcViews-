import CoreCompCard from "@/components/common/CardDesign/CoreCompCard ";
import React from "react";

const CoreComp = () => {
  const CoreCompData = [
    {
      id: "ccd01",
      name: "Cloud security posture management (CSPM)",
      description:
        "Vital for identifying and rectifying misconfigurations and ensuring compliance with relevant regulations and industry standards.",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_27-4-2024_202138_cdn-dynmedia-1.mi.jpeg/:/cr=t:0%25,l:10.8%25,w:78.39%25,h:100%25/rs=w:365,h:365,cg:true",
    },
    {
      id: "ccd02",
      name: "Cloud workload protection platforms (CWPP)",
      description:
        "Specifically safeguard various cloud workloads, including virtual machines, storage, database,  containers, web apps, and API, against unique threats they face. ",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_27-4-2024_202156_cdn-dynmedia-1.mi.jpeg/:/cr=t:0%25,l:10.7%25,w:78.59%25,h:100%25/rs=w:365,h:365,cg:true",
    },
    {
      id: "ccd03",
      name: "Identity and access management (IAM)",
      description:
        "Secures access to cloud resources, ensuring that only verified and authorized users  can access critical data and applications. ",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_27-4-2024_202213_cdn-dynmedia-1.mi.jpeg/:/cr=t:0%25,l:12.84%25,w:74.32%25,h:100%25/rs=w:730,h:730,cg:true",
    },
    {
      id: "ccd04",
      name: "Application security",
      description:
        "Involves tools and practices that secure applications throughout their development and  deployment, identifying vulnerabilities and mitigating them effectively.",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_27-4-2024_202234_cdn-dynmedia-1.mi.jpeg/:/cr=t:0%25,l:13.48%25,w:73.04%25,h:100%25/rs=w:382,h:382,cg:true",
    },
    {
      id: "ccd05",
      name: "Data security",
      description:
        "Plays a pivotal role in CNAPP by protecting sensitive information through encryption,  tokenization, and data loss prevention techniques, safeguarding data at rest, in  transit, and during processing.",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_27-4-2024_202249_cdn-dynmedia-1.mi.jpeg/:/cr=t:0%25,l:8.43%25,w:83.15%25,h:100%25/rs=w:365,h:365,cg:true",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Core Components
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CoreCompData.map((item) => (
            <CoreCompCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreComp;
