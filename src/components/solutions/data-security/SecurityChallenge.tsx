import React from "react";

const SecurityChallenge = () => {
  return (
    <section className="py-10 lg:py-12 bg-gray-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Address the Security Challenges By:
        </h1>
        <div className="bg-white p-6 shadow-lg rounded-lg space-y-4">
          <p className="text-gray-700 leading-relaxed border-b-2 border-gray-300 pb-4">
            <span className="font-semibold text-gray-900">
              Smarter data threat response:
            </span>{" "}
            Centrally and proactively surface your riskiest users and data
            threats with AI-based analytics that enrich response workflows with
            contextual and actionable insights that reduce time to resolution.
          </p>
          <p className="text-gray-700 leading-relaxed border-b-2 border-gray-300 pb-4">
            <span className="font-semibold text-gray-900">
              Simplified compliance:
            </span>{" "}
            Quickly reach security and privacy regulatory compliance with
            out-of-the-box and customizable compliance policies, streamlined
            audit workflows, long-term compliance data retention, and fast and
            customizable reporting.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold text-gray-900">
              Modernized to keep pace:
            </span>{" "}
            Meet the changing needs of the hybrid multi-cloud while reducing
            total cost of ownership with adaptable data protection – flexible
            deployment options, variety of connectors for complete data source
            monitoring, and integrations with critical security tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecurityChallenge;
