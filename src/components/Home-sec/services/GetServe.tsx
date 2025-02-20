import Link from "next/link";
import React from "react";

const GetServe = () => {
  return (
    <div className="bg-gray-900 text-white py-8 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        {/* Left Section */}
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-pink-500">GET:</h1>
          <ul className="space-y-2 text-sm md:text-base">
            <li>4-hour workaround (Target)</li>
            <li>Audit-ready compliance report</li>
            <li>Cut your cybersecurity costs by 35%</li>
            <li>Ensure 99% Compliance</li>
            <li>Enterprise-grade Security Posture</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          <ul className="space-y-2 text-sm md:text-base">
            <li>Fast-track access to technical expertise</li>
            <li>Knowledge transfer</li>
            <li>Quarterly and annual service review</li>
            <li>Technical Account Manager</li>
            <li>Periodic ticket review</li>
          </ul>
          <Link
            href={"/"}
            className="inline-block mt-4 bg-pink-500 text-white font-semibold py-2 px-4 rounded-md text-center hover:bg-pink-600 transition-all"
          >
            BOOK A CONSULTATIVE CALL
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetServe;
