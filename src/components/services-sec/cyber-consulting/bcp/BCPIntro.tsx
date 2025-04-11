import PopUpEffect from "@/components/common/PopUpEffect ";
import Image from "next/image";
import React from "react";

const BCPIntro = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <PopUpEffect>
          <h2 className="title-style text-bg-style">
            Why Business Continuity Planning Matters
          </h2>
        </PopUpEffect>

        <div className="flex flex-col md:flex-row items-center gap-16 py-8 bg-neutral-900 px-8 rounded-xl">
          <div className="flex-shrink-0">
            <Image
              src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/AdobeStock_601276567_Preview.jpeg/:/rs=w:984,h:551"
              alt="bcp-intro-img"
              width={500}
              height={300}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>

          <div className="text-white text-xl leading-relaxed max-w-lg text-center">
            Ensure your organization&apos;s ability to continue its critical
            operations and services during and after disruptions caused by
            various incidents, such as cyber attacks, equipment failures,
            natural disasters, or other unexpected events.
          </div>
        </div>
      </div>
    </section>
  );
};

export default BCPIntro;
