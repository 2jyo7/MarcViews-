"use client";

import Link from "next/link";
import React from "react";
import RainbowTitle from "./common/RainbowTtlEffect";

const links = [
  { href: "/assessment", label: "Assessments" },
  { href: "/cloud-adoption", label: "Cloud Adoption" },
  { href: "/physical-security", label: "Physical Security" },
  { href: "/realtime-monitoring", label: "Real-Time Monitoring" },
  { href: "/cloud-security", label: "Cloud Security" },
  { href: "/data-security", label: "Data Security & Privacy" },
  { href: "/email-security", label: "Email Security" },
  { href: "/endpoint-security", label: "Endpoint Security" },
  { href: "/Identity-AccessM", label: "Identity & Access (IAM)" },
  { href: "/secure-networking", label: "Secure Networking" },
  { href: "/soc-services", label: "SOC as a Service" },
  { href: "/pay-here", label: "Pay Here" },
  { href: "/appointments", label: "Appointment" },
  { href: "/contact-us", label: "Contact Us" },
];

const legalLinks = [
  { href: "#", label: "Cookies Notice" },
  { href: "#", label: "Legal Notice" },
  { href: "#", label: "Terms of Use" },
];

const Footer = () => {
  return (
    <footer className="bg-pink-800 text-white py-12">
      {/* Top Section */}
      <div className="py-8 container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4 text-sm uppercase tracking-wider ">
          {links.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="hover:bg-white hover:text-pink-600 transition px-2 py-1 rounded-md text-base font-medium"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Middle Section */}
      <div className="py-4 text-center text-base">
        <RainbowTitle>
          {" "}
          <strong className="title-style">MarcViews Networks : MSSP</strong>
        </RainbowTitle>
        <br />
        111 Queen St. E, S. Building, Suite 450, Toronto, ON, M5C 1S2
      </div>

      {/* Bottom Section */}
      <div className="bg-pink-900 py-4 text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-6 text-base text-center">
          <div className="flex flex-wrap justify-center gap-4">
            {legalLinks.map(({ href, label }) => (
              <Link key={label} href={href} className="hover:text-white">
                {label}
              </Link>
            ))}
          </div>
          <div className="p-2 md:p-4 flex flex-col justify-center m-2">
            &copy; {new Date().getFullYear()} MarcViews Networks, Inc. All
            Rights Reserved.
            <span className="ml-2 font-semibold">Stay Ahead of the Game</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
