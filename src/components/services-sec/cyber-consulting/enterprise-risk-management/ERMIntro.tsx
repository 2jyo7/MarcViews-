import React from "react";

const ERMIntro = () => {
  return (
    <section className="py-24 bg-neutral-200">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 className="heading-style text-bg-style">
          Reduce cyber risk by continuously detecting and mitigating
        </h2>
        <p className="description-style px-4 md:px-6">
          Cyber risk is now seen as a business challenge that must be addressed
          in a timely and cost-effective manner. By effectively managing risks
          and ensuring compliance, organizations can protect their reputation,
          minimize financial losses, and maintain operational efficiency.
        </p>

        <div className="flex flex-col justify-center items-start px-6 md:px-8">
          <h3 className="more-title-style">Incident Management</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:text-lg py-3 px-4">
            <li>Risk Identification</li>
            <li>Risk Assessment</li>
            <li>Risk Mitigation</li>
            <li>Compliance Monitoring</li>
            <li>Incident Management</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ERMIntro;
