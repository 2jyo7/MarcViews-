import HeroComp from "@/components/common/Hero ";
import React from "react";

const WWSHero = () => {
  return (
    <section className="container mx-auto">
      <div className="py-12 lg:py-16">
        <HeroComp
          title="Who-We-Serve"
          description=""
          imgUrl="https://plus.unsplash.com/premium_photo-1708598173837-f54121e75444?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          altTitle="who-we-serve-hero-img"
        />
      </div>
    </section>
  );
};

export default WWSHero;
