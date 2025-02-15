import React from "react";
import HeroComp from "../common/Hero";

const RealTimeHero = () => {
  return (
    <section className="py-4 lg:py-8">
      <HeroComp
        imgUrl="https://images.unsplash.com/photo-1439754389055-9f0855aa82c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGRpZ2l0YWwlMjB0aW1lJTIwbW9uaXRvcmluZ3xlbnwwfHwwfHx8MA%3D%3D"
        altTitle="Professional Services Hero"
        title="Real time monitoring"
        description="          Real-time monitoring is the delivery of continuously updated data
          about systems, processes or events.
"
      />
    </section>
  );
};

export default RealTimeHero;
