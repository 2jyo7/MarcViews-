import Image from "next/image";
import React from "react";

const AppIntro = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="heading-style text-bg-style">
          What is Application Modernization?
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10 my-10">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <Image
              src="https://img1.wsimg.com/isteam/stock/94124/:/rs=w:400,cg:true,m/qt=q:35"
              alt="app-modernization-intro-img"
              width={500}
              height={300}
              className="rounded-xl shadow-lg object-cover w-full"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center text-lg">
            <p className="mb-4">
              At its core, application modernization is the process of improving
              your current applications to deliver a better customer experience
              and increase ROI.
            </p>
            <p className="mb-4">
              Through assessing the strategic importance of your applications
              against available cost and emerging technology options—including
              cloud, containers and Kubernetes, microservice-based
              architectures, and serverless—you can determine if and how much to
              migrate of your applications.
            </p>
            <p>
              Having your applications running in an environment that delivers a
              solid return on your investment should be your ultimate goal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppIntro;
