import { ProfServImageType } from "@/types/ProfServImageType ";
// import Image from "next/image";
import React from "react";
import CardComp from "../common/CardDesign/Card1";

const SecGallery2 = () => {
  const SecServImgList2: ProfServImageType[] = [
    {
      id: "ssl201",
      title: "Cloud Native Protection ",
      imgUrl:
        "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTV8fGJ1c2luZXNzfGVufDB8fDB8fHww",
    },
    {
      id: "ssl202",
      title: "Edge Protection",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1726842420928-e2d727ca4b9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaCUyMGNsb3VkJTIwcHJvdGVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "ssl203",
      title: "Firewall as a Service(FWasS)",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHRlY2glMjBjeWJlciUyMGFzc2Vzc21lbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "ssl204",
      title: "Managed Identity & Access Mng.",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_16-5-2024_142035_static.tenable.co.jpeg/:/cr=t:16.1%25,l:0%25,w:100%25,h:67.79%25/rs=w:1200,h:600,cg:true",
    },
    {
      id: "ssl205",
      title: "Network Security",
      imgUrl:
        "https://images.unsplash.com/photo-1618060932014-4deda4932554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN5YmVyJTIwc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "ssl206",
      title: "Managed Risk & Compliance",
      imgUrl:
        "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRlY2glMjBkYXRhJTIwcmVjb3Zlcnl8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SecServImgList2.map((item) => (
          <CardComp key={item.id} imgUrl={item.imgUrl} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default SecGallery2;
