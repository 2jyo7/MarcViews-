import Button from "@/components/common/Button ";
import Image from "next/image";
import React from "react";

const LeaderProfile = () => {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto flex items-center gap-8 px-10 py-20 w-full max-w-4xl ">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Left Section - Text */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-bg-style">
              Kumar Shanu CISO
            </h2>
            <p className="mt-4 text-gray-700 text-lg flex justify-center max-w-lg">
              &quot;Guarding the digital frontiers, we defend against cyber
              threats with unwavering expertise, innovative solutions, and a
              relentless commitment to safeguarding your digital world.&quot;
            </p>
            <Button
              label="LinkedIn"
              href="https://www.linkedin.com/in/kumar-shanu-a065761a2/"
              className="mt-4"
            />
          </div>

          {/* Right Section - Image */}
          <div className="w-50 h-auto rounded-full overflow-hidden ">
            <Image
              src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Profile image of Kumar Shanu"
              width={200}
              height={160}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderProfile;
