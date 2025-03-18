import Button from "@/components/common/Button ";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CPgallery = () => {
  const cpartnersD = [
    {
      hrefUrl: "https://aws.amazon.com/",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_4552.jpg/:/cr=t:10.44%25,l:0%25,w:100%25,h:79.11%25/rs=w:388,h:292,cg:true/qt=q:73",
    },
    {
      hrefUrl: "https://www.checkpoint.com/",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG-2819.jpg/:/cr=t:23.97%25,l:0%25,w:100%25,h:52.07%25/rs=w:388,h:194,cg:true/qt=q:73",
    },
    {
      hrefUrl: "https://www.fortinet.com/",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG-2677.jpg/:/rs=w:388,h:194,cg:true,m/cr=w:388,h:194/qt=q:73",
    },
    {
      hrefUrl: "https://www.ibm.com/ca-en",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG-2902.jpg/:/rs=w:388,h:194,cg:true,m/cr=w:388,h:194/qt=q:73",
    },
    {
      hrefUrl: "https://www.malwarebytes.com/",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_4411.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,cg:true/qt=q:73",
    },
    {
      hrefUrl: "https://www.microsoft.com/en-ca/",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5519.jpg/:/cr=t:5.36%25,l:5.36%25,w:89.29%25,h:89.29%25/rs=w:388,cg:true,m/qt=q:73",
    },
    {
      hrefUrl: "https://www.proofpoint.com/us",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG-3008.jpg/:/rs=w:388,h:194,cg:true,m/cr=w:388,h:194/qt=q:73",
    },
    {
      hrefUrl: "https://www.rsa.com/",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG-3009.jpg/:/cr=t:8.12%25,l:0%25,w:100%25,h:83.77%25/rs=w:388,h:194,cg:true/qt=q:73",
    },
    {
      hrefUrl: "https://www.redhat.com/en",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_4891.jpg/:/cr=t:0%25,l:8.06%25,w:83.88%25,h:100%25/rs=w:388,h:194,cg:true/qt=q:73",
    },
    {
      hrefUrl: "https://www.sonicwall.com/",
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/SonicWall-Logo-RGB.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,cg:true/qt=q:73",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Title */}
        <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          MarcViews Networks as Authorized Seller and Business Partner
        </h1>
        <div className="border-t-2 border-pink-600/60 w-96 mx-auto mb-6"></div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]">
          {cpartnersD.map((cpI, index) => (
            <div key={index} className="flex justify-center items-center py-12">
              <Link href={cpI.hrefUrl} target="_blank">
                <Image
                  alt="Company Partner"
                  src={cpI.imgUrl}
                  width={200}
                  height={200}
                  className="rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="text-center mt-10 bg-white py-4 px-6">
          <p className="text-xl text-bg-style mb-4 font-semibold">
            Speak to a Cybersecurity Expert
          </p>
          <Button
            label="Contact Now"
            className="py-3 px-4 hover:outline-neutral-500 hover:outline-2"
          />
        </div>
      </div>
    </section>
  );
};

export default CPgallery;
