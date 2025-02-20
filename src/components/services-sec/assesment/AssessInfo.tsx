import Image from "next/image";
import React from "react";

const AssessInfo = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mx-4 md:mx-auto my-8 gap-8 bg-gray-50 p-6 rounded-lg shadow-lg">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <Image
          src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWklMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Assess-Info-img"
          width={400}
          height={300}
          className="object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl lg:text-3xl font-bold text-pink-600 mb-4">
          Welcome to MarcViews Assessments
        </h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          MarcViews Assessments help customers work through a scenario of
          questions and recommendations that result in a curated guidance report
          that is actionable and informative. Assessments take time, but it is
          time well-spent.
        </p>
        <button className="bg-pink-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-pink-700 transition duration-200">
          Browse All Categories
        </button>
      </div>
    </div>
  );
};

export default AssessInfo;
