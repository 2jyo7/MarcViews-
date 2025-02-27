import IntroComponent from '@/components/common/IntroComponent ';
import LiFeaturesComp from '@/components/common/LiFeaturesComp ';
import React from 'react'

const SecINntro = () => {
  const secNIntroD1 = [
    {
      title: "Next-Generation Firewall (NGFW), AI-Powered Security",
      para: "Advanced network security device that combines traditional firewall capabilities with additional features designed to provide enhanced protection against modern cyber threats.",
      points: [
        "Antispam",
        "Antivirus Security",
        "DNS Filtering",
        "Industrial Security",
        "IoT Detection",
        "Mobile Security",
        "URL Filtering",
        "IP Reputation & Anti-Botnet Security"
      ],
      btnTitle: "Talk To Expert",
      imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/AdobeStock_584754272_Preview.jpeg/:/cr=t:0%25,l:21.45%25,w:57.1%25,h:100%25/rs=w:800,h:800,cg:true"
    },
    {
      title: "Virtual Next-Generation Firewall",
      para: "Software-based version of a next-generation firewall that operates within a virtualized environment...",
      points: [
        "Software-Based",
        "Resource Efficiency",
        "Centralized Management",
        "API Integration",
        "Traffic Inspection",
        "High Availability",
        "Secure VPN Connections",
        "Isolation and Segmentation"
      ],
      imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/AdobeStock_597657864_Preview.jpeg/:/cr=t:0%25,l:25%25,w:50%25,h:100%25/rs=w:800,h:800,cg:true"
    },
    {
      title: "Cloud-Native Network Firewall",
      para: "A security solution designed specifically for cloud environments...",
      points: [
        "Dynamic Scalability",
        "Integration with Orchestration",
        "API-Driven",
        "Container and Serverless Protection",
        "Automatic Discovery",
        "Adaptive Security",
        "Logging and Monitoring",
        "Cloud Provider Integration",
        "Encryption and SSL Inspection"
      ],
      btnTitle: "",
      imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/AdobeStock_506885664_Preview.jpeg/:/cr=t:0%25,l:14.46%25,w:41.7%25,h:100%25/rs=w:800,h:800,cg:true"
    },
    {
      title: "Secure SD-Wan",
      para: "A network architecture that combines software-defined networking (SDN) principles with enhanced security features...",
      points: [
        "Traffic Routing and Optimization",
        "Application Resilience",
        "Encryption and Data Privacy",
        "Firewall and Network Segmentation",
        "Dynamic Path Selection",
        "Centralized Orchestration",
        "Hybrid WAN Support",
        "Multi Cloud On-RAMP",
        "Visibility and Reporting"
      ],
      imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/AdobeStock_600712633_Preview.jpeg/:/cr=t:0%25,l:37.13%25,w:42.9%25,h:100%25/rs=w:800,h:800,cg:true"
    }
  ];

  return (
    <section className="py-16 bg-pink-500">
      <div className="container w-full  mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Advanced Security Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {secNIntroD1.map((secD, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-6 "
            >
              <IntroComponent
                title={secD.title}
                imgUrl={secD.imgUrl}
                altTitle={secD.title}
                btnTitle={secD.btnTitle}
                description={secD.para}
              />
              <ul className="mt-4 space-y-2 grid grid-cols-2 md:grid-cols-3 gap-4 ">
                {secD.points.map((sD, i) => (
                  <LiFeaturesComp key={i} liPoints={sD} className='border-pink-700 bg-white hover:bg-lime-400'/>
                ))}
              </ul>
             
            </div>
          ))}
        </div>
        <div className="mt-16 bg-white shadow-lg rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Use Cases</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-600">
            <li className="p-4 bg-lime-200 rounded-lg hover:bg-gray-300 transition">Transform WAN & Security</li>
            <li className="p-4 bg-lime-200 rounded-lg hover:bg-gray-300 transition">Simplify Secure SD-Branch</li>
            <li className="p-4 bg-lime-200 rounded-lg hover:bg-gray-300 transition">Optimize the Hybrid Workforce</li>
            <li className="p-4 bg-lime-200 rounded-lg hover:bg-gray-300 transition">Enhanced Hybrid, Multi-Cloud</li>
            <li className="p-4 bg-lime-200 rounded-lg hover:bg-gray-300 transition">Achieve Operational Efficiency</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SecINntro;
