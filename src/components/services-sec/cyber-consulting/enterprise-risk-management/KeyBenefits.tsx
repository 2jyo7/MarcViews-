import LiFeaturesComp from "@/components/common/LiFeaturesComp ";
import Image from "next/image";
import React from "react";

const KeyBenefits = () => {
  const keyBenefitsData = [
    "Protect your organization, brands, domains, and executives against malicious impersonation attacks",
    "Continuously monitor, detect, prioritize, and mitigate a wide array of external cyber risks",
    "Gain visibility on exposures in your attack surface, as well as relevant threats on the deep",
    "Support your team with managed services from MarcViews' experienced cyber security experts",
    "Optimize value with a low-touch platform that is committed to efficiency and simplicity of use",
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-bg-style heading-style">Key Benefits</h2>

        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text / Features */}
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 m-4">
              {keyBenefitsData.map((kbd) => (
                <LiFeaturesComp
                  key={kbd}
                  liPoints={kbd}
                  className="border-red-400 bg-white py-2 hover:bg-slate-800 hover:text-white"
                />
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              alt="key-benefits-hero-img"
              src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_5-10-2024_22434_www.ark-invest.com.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,cg:true/qt=q:99"
              className="rounded-xl shadow-md object-cover  shadow-neutral-700"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
