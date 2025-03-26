import Button from "@/components/common/Button ";
import Image from "next/image";
import React from "react";

const AssessInfo = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWklMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Assess-Info-img"
            width={300}
            height={350}
            className="object-cover rounded-lg shadow-md w-full max-w-[400px] md:max-w-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
          <h1 className="text-bg-style title-style">
            Welcome to MarcViews Assessments
          </h1>
          <p className="description-style ">
            MarcViews Assessments help customers work through a scenario of
            questions and recommendations that result in a curated guidance
            report that is actionable and informative. Assessments take time,
            but it is time well-spent.
          </p>
          <div className="flex justify-center">
            <Button
              label="Browse All Categories"
              className="mt-4 py-2 px-4 w-full md:w-48 text-nowrap"
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessInfo;
