import React from "react";
import ShowCardServ from "./ShowCardServ";

const servicesData = [
  {
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1674506652857-6c816df228c4?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Consulting",
  },
  {
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1701179596614-9c64f50cda76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGlnaXRhbCUyMHNlY3VyaXR5fGVufDB8fDB8fHww",
    title: "Cloud Migration",
  },
  {
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1700830452509-6e206a0d44d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGRpZ2l0YWwlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Security-as-a-Service",
  },
  {
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1683134684062-e3d753eb77d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGRpZ2l0YWwlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Cyber Assessments",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1639815188546-c43c240ff4df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGRpZ2l0YWwlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Managed Infrastructure",
  },
  {
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1700830452546-96547de21071?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGRpZ2l0YWwlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Eternal Risk Management",
  },
  {
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1674582745423-9e5d7dbb13ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGRpZ2l0YWwlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Backup & Disaster Management",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGRpZ2l0YWwlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Professional Services",
  },
];

const ServicesCardCol = () => {
  return (
    <div className="bg-gray-900 p-6">
      {/* Page Title */}
      <h1 className="heading-style text-white">Services Offering</h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <ShowCardServ
            key={index}
            imgUrl={service.imgUrl}
            title={service.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesCardCol;
