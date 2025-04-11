import HeroComp from "@/components/common/Hero ";
import React from "react";

const AppMHero = () => {
  return (
    <section>
      <div>
        <HeroComp
          imgUrl="https://images.unsplash.com/photo-1678995632928-298d05d41671?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fEFwcGxpY2F0aW9uJTIwTW9kZXJuaXphdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
          altTitle="app-modernization-hero-img"
          description=""
          title="Application Modernization"
        />
      </div>
    </section>
  );
};

export default AppMHero;
