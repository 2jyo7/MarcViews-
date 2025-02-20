import Image from "next/image";
import React from "react";

const DSBenefits = () => {
  const dsBenefitsLs = [
    {
      title: "Data Governance",
      para: "Data is the lifeblood of any organization, and proper data governance is essential for leveraging its full potential while ensuring compliance and minimizing risks. Our data governance services provide you with the framework and strategies to manage your data effectively, ensuring its accuracy, integrity, and appropriate usage throughout its lifecycle.",
      points: [
        "Data Policies and Procedures",
        "Data Classification and Metadata Management",
        "Data Quality Management",
        "Compliance and Regulatory Alignment",
        "Data Stewardship and Ownership",
      ],
      imgUrl:
        "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_2003.jpg/:/cr=t:15.62%25,l:0%25,w:100%25,h:68.76%25/rs=w:776,h:388,cg:true",
    },
    {
      title: "Data Privacy",
      para: "Your privacy matters, and protecting the personal information entrusted to your organization is crucial. Our data privacy services provide the necessary measures to ensure compliance, build trust, and safeguard sensitive data.",
      points: [
        "Data Encryption",
        "Data Erasure",
        "Data Masking",
        "Tokenization",
      ],
      imgUrl:
        "https://img1.wsimg.com/isteam/stock/gAqG9d3/:/cr=t:3.88%25,l:0%25,w:100%25,h:92.24%25/rs=w:776,h:388,cg:true",
    },
    {
      title: "Data Protection",
      para: "Our data protection services offer comprehensive solutions to ensure the confidentiality, integrity, and availability of your critical information. From implementation to ongoing monitoring, we'll safeguard your data throughout its lifecycle. Protecting your data is not just a legal obligation but also a vital step in maintaining the trust of your customers and partners.",
      points: [
        "Privacy Assessments",
        "Privacy Policy Development",
        "Consent Management",
        "Data Minimization and Anonymization",
        "Privacy Training",
      ],
      imgUrl:
        "https://img1.wsimg.com/isteam/stock/f72dd66050b58b6c49d9170f3d0584eec3b20b8e424aed7df15d76e3d5d627da/:/rs=w:776,h:388,cg:true,m/cr=w:776,h:388",
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Benefits
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {dsBenefitsLs.map((benefit, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Image
                src={benefit.imgUrl}
                alt={benefit.title}
                className="w-full h-40 object-cover"
                width={200}
                height={200}
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {benefit.title}
                </h2>
                <p className="text-gray-700 mb-3">{benefit.para}</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {benefit.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DSBenefits;
