import Button from "@/components/common/Button ";
import { PServiceType } from "@/types/PServiceType ";
import React from "react";

const ProfessionalServ = () => {
  const PServiceData: PServiceType[] = [
    {
      id: "ps01",
      title: "Cloud Governance",
      points: [
        "Manage & Mitigate the risks",
        "Cloud Optimization",
        "Best Practices",
      ],
      btnTitle: "",
    },
    {
      id: "ps02",
      title: "Container Security",
      points: [
        "CI/CD Pipeline Development",
        "Container Environment Automation",
        "Container Best Practices",
        "Container Orchestration",
      ],
      btnTitle: "",
    },
    {
      id: "ps03",
      title: "Cloud Security Assessment",
      points: ["Readiness Assessment", "Maturity Assessment", "Health Check"],
      btnTitle: "",
    },
    {
      id: "ps04",
      title: "Benefits",
      points: [
        "Secure cloud secure posture:  Continuous inventory & remediation of all services in cloud platforms (Azure, AWS, GCP, & IBM Cloud) & SaaS apps",
        "Secure user access to cloud workloads: Zero trust provides user access with n exposed attack surface & no VPNs",
        "Secure app-to-app communication: Secures & simplifies workload communications to the internet, data centers, & across clouds",
        "Elimination of lateral threat movement: App identity & ML automation simplify micro segmentation & stop east-west propagation of threats",
      ],
      btnTitle: "",
    },
    {
      id: "ps05",
      title: "Four elements",
      points: [
        "CSPM: cloud security posture management",
        "Secure user-to-app access",
        "Secure app-to-app access for multi-cloud",
        "Workload segmentation",
      ],
      btnTitle: "Continue",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Professional Services
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PServiceData.map((ps) => (
            <div
              key={ps.id}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-pink-700 mb-4">
                {ps.title}
              </h2>
              <ul className="text-gray-600/70 mb-4 ">
                {ps.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-blue-500">✔</span> {point}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                {ps.btnTitle && <Button label={ps.btnTitle} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalServ;
