import { RTGalleryType } from "@/types/ProfServImageType ";
import Image from "next/image";
import React from "react";

const RTGallery = () => {
  const RTGallery: RTGalleryType[] = [
    {
      id: "RTG01",
      title: "Infrastructure Monitoring",
      para: "Server, Database, and Application Monitoring",
      imgUrl:
        "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwJTIwbW9uaXRvcmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "RTG02",
      title: "Kubernetes Monitoring",
      para: "Cluster Health, Container, and Performance Monitoring",
      imgUrl:
        "https://images.unsplash.com/photo-1667372459510-55b5e2087cd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3ViZXJuZXRlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "RTG03",
      title: "Network Monitoring",
      para: "Network Performance Monitoring & Threat Detection",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1664297989345-f4ff2063b212?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VydmVyfGVufDB8fDB8fHww",
    },
    {
      id: "RTG04",
      title: "AWS Cloud Monitoring",
      para: "EC2 Instance, RDS Database, Lambda Function Monitoring",
      imgUrl:
        "https://images.unsplash.com/photo-1483736762161-1d107f3c78e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YWJhc2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "RTG05",
      title: "Azure Cloud Monitoring",
      para: "Virtual Machine, SQL DB, App Service Monitoring",
      imgUrl:
        "https://images.unsplash.com/photo-1618060932014-4deda4932554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN5YmVyJTIwc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "RTG06",
      title: "Google Cloud Monitoring",
      para: "Compute Engine Instance, Cloud SQL, App Engine",
      imgUrl:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3liZXIlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 ">
      {/* Title */}
      <h2 className="text-center text-4xl font-normal text-gray-900 mb-10 dark:text-white">
        Professional Services
      </h2>

      {/* Grid Container */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {RTGallery.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-slate-900"
          >
            {/* Image */}
            <Image
              src={item.imgUrl}
              alt={item.title}
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 hover:bg-white flex flex-col items-center justify-center text-gray-800 text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ">
              <h3 className="text-xl font-bold ">{item.title}</h3>
              <p className="text-sm mt-2">{item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RTGallery;
