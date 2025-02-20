import { SolDataSecPServType } from "@/types/SolDataSecPServ ";
import React from "react";

const ProffServices = () => {
  const profServData: SolDataSecPServType[] = [
    {
      title: "Data Security Assessment",
      points: [
        {
          pTitle: "",
          pList: [
            "Asset Identification and Classification",
            "Risk Assessment",
            "Vulnerability Scanning and Penetration Testing",
            "Policy and Procedure Review",
            "Incident Response Planning",
            "Third-Party Risk Assessment",
          ],
        },
      ],
    },
    {
      title: "Data Security Policy & Architecture Review",
      points: [
        {
          pTitle: "Policy Review:",
          pList: [
            "Alignment with Business Objectives",
            "Access Control",
            "Compliance",
            "Data Classification and Labeling",
            "Data Retention and Disposal",
            "Third-Party Risk Management",
          ],
        },
        {
          pTitle: "Architecture Review:",
          pList: [
            "Data Encryption",
            "Network Security",
            "Identity and Access Management (IAM)",
            "Data Loss Prevention (DLP)",
            "Backup and Recovery",
            "Metadata Management",
          ],
        },
      ],
    },
    {
      title: "Data Governance Review",
      points: [
        {
          pTitle: "Data Quality Assessment:",
          pList: ["Data Profiling", "Data Accuracy", "Data Consistency"],
        },
        {
          pTitle: "Data Catalog and Data Dictionary Review:",
          pList: ["Data Lineage", "Data Catalog Completeness"],
        },
      ],
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">
            Professional Services
          </h1>
          <div className="border-t-4 border-pink-600 w-24 mx-auto mt-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profServData.map((psd) => (
            <div
              key={psd.title}
              className="bg-white p-6 shadow-lg rounded-lg shadow-gray-400"
            >
              <h2 className="text-xl font-semibold text-gray-700">
                {psd.title}
              </h2>
              <div className="mt-4 space-y-4">
                {psd.points.map((pt) => (
                  <div key={pt.pTitle}>
                    {pt.pTitle && (
                      <h3 className="text-lg font-medium text-gray-600">
                        {pt.pTitle}
                      </h3>
                    )}
                    <ul className="list-disc list-inside text-gray-500 mt-2">
                      {pt.pList.map((plt, i) => (
                        <li key={i} className="ml-4">
                          {plt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProffServices;
