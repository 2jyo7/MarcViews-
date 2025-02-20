import React from "react";

const AssessBtn = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 dark:bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-pink-900 dark:text-white mb-6 text-center">
        Get your assessment today!
      </h1>
      <button className="w-full sm:w-[300px] bg-pink-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400 transition transform hover:scale-105">
        START HERE
      </button>
    </div>
  );
};

export default AssessBtn;
