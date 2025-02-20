import { PublicCloudType } from "@/types/RTMPublicCloudType ";
import Image from "next/image";
import React from "react";

const PublicCloud = () => {
  const PublicCloudData: PublicCloudType[] = [
    {
      id: "pbd1",
      para: "We offer comprehensive managed infrastructure services on Microsoft Azure, a leading cloud computing platform trusted by enterprises worldwide.",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5572.jpg/:/cr=t:0%25,l:3.9%25,w:92.19%25,h:100%25/rs=w:365,h:183,cg:true/qt=q:79",
    },
    {
      id: "pbd2",
      para: "As a leading MSSP, we provide tailored solutions to help businesses leverage the full potential of Amazon Web Services (AWS) while ensuring top-notch security and operational efficiency.",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5571.jpg/:/rs=w:730,cg:true,m",
    },
    {
      id: "pbd3",
      para: "An enterprise cloud platform designed for even the most regulated industries, delivering a highly resilient, performant, secure, and compliant cloud.",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_9-10-2024_13358_cloud.ibm.com.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,cg:true",
    },
    {
      id: "pbd4",
      para: "(GCP) is a suite of cloud computing services offered by Google that runs the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, and YouTube.",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_12-11-2024_131725_services.google..jpeg/:/cr=t:0%25,l:5.04%25,w:89.93%25,h:100%25/rs=w:392,cg:true",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mx-auto bg-gray-900 shadow-lg shadow-gray-800/50 py-10">
      <h1 className="text-3xl text-center font-semibold py-4 text-white border-b-4 border-gray-700 w-3/4 max-w-xl">
        Choose Your Preferred Public Cloud
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6 mt-6 w-full max-w-6xl">
        {PublicCloudData.map((item) => (
          <div
            key={item.id}
            className=" shadow-lg rounded-xl p-6 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={item.imgUrl}
              alt={item.id}
              width={260}
              height={200}
              className="rounded-lg object-cover mb-4"
            />
            <p className="text-white text-justify leading-relaxed ">
              {item.para}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicCloud;
