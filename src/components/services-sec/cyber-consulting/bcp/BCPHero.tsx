import HeroComp from "@/components/common/Hero ";
import React from "react";

const BCPHero = () => {
  return (
    <section>
      <div>
        <HeroComp
          imgUrl="https://images.unsplash.com/photo-1673255745677-e36f618550d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFpfGVufDB8fDB8fHww"
          altTitle="bcp-hero-img"
          description=""
          title="Business Continuity Plan: BCP"
        />
      </div>
    </section>
  );
};

export default BCPHero;
