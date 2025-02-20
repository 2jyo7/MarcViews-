import { ProfServImageType } from "@/types/ProfServImageType ";
import Image from "next/image";
import React from "react";

const ProfServImgGallery = () => {
  const ProfServImgList: ProfServImageType[] = [
    {
      id: "psi01",
      title: "Business Continuity Plan",
      imgUrl:
        "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTV8fGJ1c2luZXNzfGVufDB8fDB8fHww",
    },
    {
      id: "psi02",
      title: "Cloud Protection at a Glance",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1726842420928-e2d727ca4b9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaCUyMGNsb3VkJTIwcHJvdGVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "psi03",
      title: "Cyber Assessment",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHRlY2glMjBjeWJlciUyMGFzc2Vzc21lbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "psi04",
      title: "Data Recovery & Restoration",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_16-5-2024_142035_static.tenable.co.jpeg/:/cr=t:16.1%25,l:0%25,w:100%25,h:67.79%25/rs=w:1200,h:600,cg:true",
    },
    {
      id: "psi05",
      title: "Penetration Test",
      imgUrl:
        "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRlY2glMjBkYXRhJTIwcmVjb3Zlcnl8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "psi06",
      title: "Email Phishing Simulation",
      imgUrl:
        "https://images.unsplash.com/photo-1603791452906-af1740e171bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8NHx8ZW1haWwlMjBwaGlzaW5nfGVufDB8fDB8fHww",
    },
    {
      id: "psi07",
      title: "Data, Security, Policy & Governance",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1700830452666-ce1f5f478d21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaCUyMGRhdGElMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-center text-3xl font-bold mb-6">
        Professional Services
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProfServImgList.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            {/* Image */}
            <Image
              src={item.imgUrl}
              alt={item.title}
              width={340}
              height={420}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay & Text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-xl text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfServImgGallery;
