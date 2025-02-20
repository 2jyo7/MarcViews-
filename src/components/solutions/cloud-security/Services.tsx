import CardComp2 from "@/components/common/CardDesign/Card2 ";
import React from "react";

const PSServices = () => {
  const PSServiceData = [
    { id: "psd01", title: "AWS", para: "AWS Cloud Security Services" },
    {
      id: "psd02",
      title: "AZURE",
      para: "Microsoft Azure Cloud Security Services",
    },
    {
      id: "psd03",
      title: "HYBRID CLOUD SECURITY",
      para: "IBM Cloud, GCP, OCI",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Service by Platform
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PSServiceData.map((psServ) => (
            <div key={psServ.id} className="overflow-hidden">
              <CardComp2 title={psServ.title} para={psServ.para} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PSServices;
