import React from "react";

const ConsultButton = ({
  description,
  btnTitle,
}: {
  description?: string;
  btnTitle: string;
}) => {
  return (
    <div className="text-center py-6 bg-white shadow-lg mt-8 rounded-lg mx-4 md:mx-auto max-w-4xl">
      <p className="text-lg font-semibold text-gray-800 mb-4">
        {description}
        {/* Book a consultation for a proof-of-concept (POC) */}
      </p>
      <button className="px-6 py-3 bg-pink-800 text-white font-bold rounded-lg hover:bg-neutral-700 transition-all duration-300">
        {btnTitle}
        {/* REQUEST A CALL */}
      </button>
    </div>
  );
};

export default ConsultButton;
