"use client";

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      {/* Top Section */}
      <div className="bg-pink-800 py-8 text-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center space-x-4 text-sm uppercase tracking-wider">
            <Link
              href="/assessment"
              className="hover:bg-white hover:text-pink-600 transition px-2 py-1 rounded-md"
            >
              Assessments
            </Link>
            <Link
              href="#"
              className="hover:bg-white hover:text-pink-600 transition px-2 py-1 rounded-md"
            >
              Cloud Adoption
            </Link>
            <Link
              href="#"
              className="hover:bg-white hover:text-pink-600 transition px-2 py-1 rounded-md"
            >
              Physical Security
            </Link>
            <Link
              href="#"
              className="hover:bg-white hover:text-pink-600 transition px-2 py-1 rounded-md"
            >
              Real-Time Monitoring
            </Link>
            <Link
              href="#"
              className="hover:bg-white hover:text-pink-600 transition px-2 py-1 rounded-md"
            >
              Cloud Security
            </Link>
            <Link
              href="#"
              className="hover:bg-white hover:text-pink-600 transition px-2 py-1 rounded-md"
            >
              Data Security & Privacy
            </Link>
            <Link
              href="#"
              className="hover:bg-white hover:text-pink-600 transition px-2 py-1 rounded-md"
            >
              Email Security
            </Link>
            <Link
              href="#"
              className="hover:bg-white hover:text-pink-600 transition px-2 py-1 rounded-md"
            >
              Endpoint Security
            </Link>
            <Link
              href="#"
              className="hover:bg-white hover:text-pink-600 transition px-2 py-1 rounded-md"
            >
              Identity & Access (IAM)
            </Link>
            <Link
              href="#"
              className="hover:bg-white hover:text-pink-600 transition px-2 py-1 rounded-md"
            >
              Secure Networking
            </Link>
            <Link
              href="#"
              className="hover:bg-white hover:text-pink-600 transition px-2 py-1 rounded-md"
            >
              SOC as a Service
            </Link>
            <Link
              href="#"
              className="hover:bg-white hover:text-pink-600 transition px-2 py-1 rounded-md"
            >
              Pay Here
            </Link>
            <Link
              href="#"
              className="hover:bg-white hover:text-pink-600 transition px-2 py-1 rounded-md"
            >
              Appointment
            </Link>
            <Link
              href="#"
              className="hover:bg-white hover:text-pink-600 transition px-2 py-1 rounded-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="bg-pink-800 py-4 text-white">
        <div className="container mx-auto text-center text-sm">
          <strong>MarcViews Networks : MSSP</strong>
          <br />
          111 Queen St. E, S. Building, Suite 450, Toronto, ON, M5C 1S2
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-pink-900 py-4 text-gray-100">
        <div className="container mx-auto flex flex-col items-center space-y-2 text-sm">
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white">
              Cookies Notice
            </Link>
            <Link href="#" className="hover:text-white">
              Legal Notice
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Use
            </Link>
          </div>
          <div>
            Copyright © {new Date().getFullYear()} MarcViews Networks, Inc. All
            Rights Reserved.
          </div>
          <div>Stay Ahead of the Game</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
