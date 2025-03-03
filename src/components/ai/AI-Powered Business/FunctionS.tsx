import React from "react";

const FunctionS = () => {
  return (
    <section className="py-10 bg-gray-100 flex justify-center">
      <div className="w-full max-w-4xl p-6 py-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Function-specific Tasks
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          {[
            "Service Agent",
            "Seller",
            "Financial Analyst",
            "Marketer",
            "HR Professional",
            "Security Analyst",
            "Developer",
          ].map((role, index) => (
            <span
              key={index}
              className="bg-teal-500 text-white py-2 px-2 rounded-lg shadow-md hover:bg-pink-600 transition"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunctionS;
