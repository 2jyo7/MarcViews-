import HeroComp from "@/components/common/Hero ";
import React from "react";

const AssessHero = () => {
  return (
    <section className="">
      <div>
        <HeroComp
          imgUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=2400&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWl8ZW58MHx8MHx8fDA%3D"
          altTitle="Hero Image"
          description=""
          title="CTA: Comprehensive Threat Assessment"
        />
      </div>
    </section>
  );
};

export default AssessHero;
