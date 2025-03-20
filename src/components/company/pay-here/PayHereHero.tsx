import HeroComp from "@/components/common/Hero ";
import React from "react";

const PayHereHero = () => {
  return (
    <section>
      <div>
        <HeroComp
          imgUrl="https://plus.unsplash.com/premium_photo-1690297853326-e127726588ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGFpfGVufDB8fDB8fHww"
          altTitle="pay-here-img"
          description=""
          title="Choose a payment method"
        />
      </div>
    </section>
  );
};

export default PayHereHero;
