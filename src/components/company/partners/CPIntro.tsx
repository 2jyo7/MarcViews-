import React from "react";
import Image from "next/image";
import Button from "@/components/common/Button ";

const CPIntro = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 leading-tight">
              Become a MarcView&apos;s Partner & Join the Ecosystem!
            </h1>
            <p className="mt-4 text-gray-600">
              By partnering with MarcViews Networks, you gain access to a robust
              suite of cutting-edge security services and technologies designed
              to address the most pressing cybersecurity challenges facing
              businesses today.
            </p>
            <p className="mt-2 text-gray-600">
              Our Managed Security Services empower partners to deliver
              unparalleled protection to their customers.
            </p>

            {/* CTA Button */}
            <div className="mt-6">
              <Button label="Become A Partner" />
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5399.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:583"
              alt="company-partners-info"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CPIntro;
