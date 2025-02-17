import HeroComp from "@/components/common/Hero ";
import React from "react";

const SOCHero = () => {
  return (
    <section className="py-24 mx-auto container ">
      <HeroComp
        title="SOC-as-a-Service"
        description="Enhance your cybersecurity with our advanced SOC services, ensuring 24/7 threat detection and response."
        altTitle="Digital security monitoring"
        imgUrl="https://plus.unsplash.com/premium_photo-1695406461013-35e7327cef86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGlnaXRhbCUyMGdlYXJzfGVufDB8fDB8fHww"
      />
    </section>
  );
};

export default SOCHero;
