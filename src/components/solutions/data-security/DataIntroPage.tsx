import IntroComponent from "@/components/common/IntroComponent ";
import React from "react";

const DataIntroPage = () => {
  return (
    <section className="py-10 bg-gray-50 flex flex-col items-center">
      <div className="max-w-5xl w-full gap-6 grid grid-cols-1 md:grid-cols-2 ">
        <IntroComponent
          imgUrl="https://img1.wsimg.com/isteam/getty/1698328280/:/cr=t:3.12%25,l:0%25,w:100%25,h:93.75%25/rs=w:600,h:300,cg:true/qt=q:73"
          altTitle="data-sec-intro-img"
          title="Data Security"
          description="Identify sensitive data across multiple cloud environments and
            services by assessing its vulnerability to security threats and risk
            of regulatory non-compliance. Get insight and automation that enable
            security teams to quickly address data security and compliance
            issues and prevent their recurrence."
          btnTitle="Continue"
        />

        <IntroComponent
          imgUrl="https://img1.wsimg.com/isteam/getty/1830042746/:/cr=t:5.56%25,l:0%25,w:100%25,h:88.89%25/rs=w:600,h:300,cg:true/qt=q:73"
          altTitle="data-sec-intro-img2"
          title="Data Governance"
          description='Data governance is an enabling framework of decision rights, responsibilities, & accountabilities for data assets across the enterprise. "Harness the value of your data"'
          btnTitle="Continue"
        />
      </div>
    </section>
  );
};

export default DataIntroPage;
