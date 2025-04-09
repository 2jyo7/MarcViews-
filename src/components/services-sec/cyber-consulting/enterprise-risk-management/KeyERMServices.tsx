import Button from "@/components/common/Button ";
import KeyFeatureComp from "@/components/common/KeyFeature ";
import React from "react";

const KeyERMServices = () => {
  const keyERMServLs = [
    {
      title: "  Customized Risk Management:",
      para: "Our approach begins with understanding your unique business context, enabling us to provide customized risk assessments that identify, evaluate, and prioritize your cybersecurity risks. ",
    },
    {
      title: "Regulatory Expertise",
      para: "Stay ahead of compliance with our in-depth knowledge of global and industry-specific regulations, including GDPR, HIPAA, PCI-DSS, and more, ensuring your enterprise meets all legal and regulatory requirements. ",
    },
    {
      title: "Continuous Compliance Monitoring",
      para: "Leveraging state-of-the-art technology, we offer continuous monitoring to ensure ongoing compliance and risk mitigation, adapting to new threats and regulatory changes.  ",
    },
    {
      title: "Strategic Risk Mitigation Plans",
      para: "Receive actionable, strategic risk mitigation plans that align with your business objectives, reducing potential impacts on your operations and reputation.  ",
    },
    {
      title: "Board-Level Reporting",
      para: "Our comprehensive reporting provides clear insights into your risk and compliance status, designed to inform decision-makers and support strategic planning at the highest level.  ",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-8 flex flex-col justify-center items-center">
        <h2 className="heading-style text-bg-style">
          Why you need a ERM service?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-4">
          {keyERMServLs.map((kermSls) => (
            <KeyFeatureComp
              key={kermSls.title}
              title={kermSls.title}
              para={kermSls.para}
            />
          ))}
        </div>
        <div className="mt-8">
          <Button
            label={"BOOK A POC CALL"}
            href="/appointments"
            className="py-3 px-4"
          />
        </div>
      </div>
    </section>
  );
};

export default KeyERMServices;
