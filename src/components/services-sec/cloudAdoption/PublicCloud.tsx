import Button from "@/components/common/Button ";
import ZoomingEffect from "@/components/common/ZoomingEffect ";
import { PublicCloudServTypes } from "@/types/PublicCloudServTypes ";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PublicCloud = () => {
  const PublicCloudServices: PublicCloudServTypes[] = [
    {
      id: "PCloud1",
      title: "Quantified Benefits",
      points: [
        "Cost effective operations",
        "Easy disaster recovery",
        "Increase productivity and collaboration on data",
        "IT administrator productivity savings",
        "Multi-region Availability",
        "Reduce security and compliance risks",
        "Unlimited Scalability",
      ],
      imgUrl:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: "PCloud2",
      title: "IT Administrator Productivity Savings",
      points: [
        "Affected IT infrastructure administrators",
        "Application Performance",
        "Percentage of effort saved",
        "IT administrator productivity savings",
      ],
      imgUrl:
        "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: "PCloud3",
      title: "Savings Effort & Licensing Fees",
      points: [
        "Reduction in effort",
        "Licensing fees savings from retired legacy systems",
        "Savings from reduced effort and licensing fees",
      ],
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1661386261378-8ed99f4e37ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-10">
      <div className="container mx-auto">
        {/* Section Title */}
        <h1 className="text-bg-style heading-style text-center md:text-left">
          Choose Your Preferred Public Cloud
        </h1>

        {/* Cloud Logos */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 my-8">
          {[
            "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5571.jpg",
            "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5572.jpg",
            "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG-2902.jpg",
            "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_12-11-2024_131725_services.google..jpeg",
          ].map((src, index) => (
            <Link href={"/cloud-security"} key={index}>
              <Image
                src={src}
                alt={`Cloud Provider ${index + 1}`}
                width={100}
                height={100}
                className="rounded-lg shadow-md object-contain"
              />
            </Link>
          ))}
        </div>

        {/* Public Cloud Services */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-900 p-6 sm:p-8 rounded-lg">
          {PublicCloudServices.map((PC) => (
            <div
              key={PC.id}
              className="flex flex-col gap-4 items-center text-center sm:text-left"
            >
              {/* Image */}
              <ZoomingEffect>
                <Image
                  src={PC.imgUrl}
                  alt={PC.title}
                  width={400}
                  height={200}
                  className="rounded-md shadow-md object-cover"
                />
              </ZoomingEffect>

              {/* Title */}
              <h2 className="more-title-style text-white ">{PC.title}</h2>

              {/* Points List */}
              <ul className="list-none space-y-2 description-white-style">
                {PC.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-white text-lg">●</span>
                    <span className="flex-1">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Button
            href="/appointments"
            label=" BOOK A POC CALL"
            className="px-8 py-4"
          />
          <Button
            href="/appointments"
            label=" BOOK AN ASSESSMENT REVIEW SESSION"
            className="px-8 py-4 bg-neutral-900"
          />
        </div>
      </div>
    </section>
  );
};

export default PublicCloud;
