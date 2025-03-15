import CardComp from "@/components/common/CardDesign/Card1 ";
import React from "react";

const CPastEvents = () => {
  const companyPEventsData = [
    {
      title: "Global Threat Report Review",
      href: "https://www.linkedin.com/video/live/urn:li:ugcPost:7200856964464001025/?actorCompanyId=95040070",
      imgUrl:
        "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV0d29yayUyMHNlY3VyaXR5fGVufDB8fDB8fHww",
    },
    {
      title: "Solving Cloud Challenges",
      href: "https://www.linkedin.com/video/live/urn:li:ugcPost:7199067955584794625/?actorCompanyId=95040070",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1733306493254-52b143296396?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG5ldHdvcmslMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "2024 Data Breach Investigation",
      href: "https://www.linkedin.com/video/live/urn:li:ugcPost:7199426852396941318/",
      imgUrl:
        "https://images.unsplash.com/photo-1617228679684-890412dc57a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV0d29yayUyMHNlY3VyaXR5fGVufDB8fDB8fHww",
    },
    {
      title: "Hybrid Cloud Security",
      href: "https://x.com/MarcviewNetwork/status/1790108461096972292",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1661420386736-df3569904b5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG5ldHdvcmslMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  return (
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-4">
          Explore Upcoming Interests
        </h1>
        <div className="border-t-4 border-pink-700 w-24 mx-auto mb-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-6">
          {companyPEventsData.map((event, index) => (
            <div key={index} className="flex justify-center">
              <CardComp
                imgUrl={event.imgUrl}
                title={event.title}
                href={event.href}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CPastEvents;
