import Button from "@/components/common/Button ";
import HeroComp from "@/components/common/Hero ";
import Image from "next/image";
import React from "react";

const CyberCHero = () => {
  return (
    <section className="">
      <div
        id="cyber-hero"
        className="relative w-full overflow-hidden container mx-auto"
      >
        {/* Hero Section */}
        <HeroComp
          imgUrl="https://plus.unsplash.com/premium_photo-1734637616808-14fc29f2a155?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          altTitle="cyber-sec-hero-img"
          description=""
          title="Cyber Consulting"
        />

        {/* Content Section */}
        <div className="container mx-auto px-8 md:px-16 lg:px-20  py-8 lg:py-24 max-w-5xl w-full">
          <div className="grid md:grid-cols-2 gap-3 items-center">
            {/* Left Content */}
            <div className="space-y-3">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-white">
                When you partner with{" "}
                <span className="font-semibold">MarcViews</span>, we don&apos;t
                just hand over a strategy, we work alongside your team to
                deliver end-to-end transformation with the highest quality and
                efficiency. Together, we design, build, and operate
                high-performing businesses—ensuring growth and success.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Benefits:
              </h2>
              <ul className="list-disc pl-4 space-y-1 text-gray-700 dark:text-white">
                <li>Scaling value</li>
                <li>Dedicated Account Manager</li>
                <li>Maximizing partnerships</li>
                <li>Enhancing trust</li>
              </ul>

              <Button
                className="mt-3 py-3 px-4"
                href="/appointments"
                label="LET'S WORK TOGETHER"
              />
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <Image
                src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/The%20Security%20Journey.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1535,m"
                alt="Cyber Consulting Info"
                width={350}
                height={350}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberCHero;
