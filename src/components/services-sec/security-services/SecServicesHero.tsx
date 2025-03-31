import HeroComp from "@/components/common/Hero ";
import React from "react";

const SecServicesHero = () => {
  return (
    <section className="py-4 lg:py-8">
      <div>
        <HeroComp
          imgUrl="https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRpZ2l0YWwlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D"
          title=" Security-as-a-Services"
          description="Security-as-a-Services is the solutions you have been yearning for your systems safety."
          altTitle="security-Services-Hero-img"
        />
      </div>
    </section>
  );
};

export default SecServicesHero;
