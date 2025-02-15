import React from "react";
import AssessCard from "./AssessCard";

const AssessCardList = () => {
  const AssessCardData = [
    {
      id: 1,
      title: "Cloud Adoption/Migration",
      btnTitle: "Continue",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_8990.jpg/:/cr=t:0%25,l:17.88%25,w:64.25%25,h:100%25/rs=w:730,h:730,cg:true",
    },
    {
      id: 2,
      title: "Cyber Resilience",
      btnTitle: "Continue",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5501.jpg/:/cr=t:0%25,l:24.03%25,w:51.94%25,h:100%25/rs=w:730,h:730,cg:true",
    },
    {
      id: 3,
      title: "Compliance & Regulatory",
      btnTitle: "Book An Appointment ",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5387-731c8e6.jpg/:/cr=t:0%25,l:41.64%25,w:43.72%25,h:100%25/rs=w:730,h:730,cg:true",
    },
    {
      id: 4,
      title: "Compliance & Regulatory",
      btnTitle: "Continue ",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5033.jpg/:/cr=t:0%25,l:4.62%25,w:90.75%25,h:100%25/rs=w:730,h:730,cg:true",
    },
    {
      id: 5,
      title: "Compliance & Regulatory",
      btnTitle: "Book An Appointment ",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_8411.jpg/:/cr=t:0%25,l:18.3%25,w:63.4%25,h:100%25/rs=w:730,h:730,cg:true",
    },
    {
      id: 6,
      title: "Compliance & Regulatory",
      btnTitle: "Continue ",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5032.jpg/:/cr=t:0%25,l:4.45%25,w:91.09%25,h:100%25/rs=w:730,h:730,cg:true",
    },
    {
      id: 7,
      title: "Zero Trust Maturity",
      btnTitle: "Continue ",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5035.jpg/:/cr=t:0%25,l:5.06%25,w:89.89%25,h:100%25/rs=w:730,h:730,cg:true",
    },
  ];

  return (
    <div className="bg-gray-900 py-10 px-6">
      <h1 className="text-white text-2xl md:text-4xl font-bold text-center mb-8">
        Explore Our Assessments
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {AssessCardData.map((assessC) => (
          <div key={assessC.id} className="w-full sm:w-[45%] md:w-[30%]">
            <AssessCard
              title={assessC.title}
              btnTitle={assessC.btnTitle}
              imgUrl={assessC.imgUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssessCardList;
