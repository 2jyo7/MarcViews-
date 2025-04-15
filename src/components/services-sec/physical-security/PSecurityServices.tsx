import Button from "@/components/common/Button ";
import Image from "next/image";
import React from "react";
import { FaVideo, FaKey, FaWifi } from "react-icons/fa";

const PSecurityServices = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-6 md:px-24">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-500">
          Physical Security Services
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Ensuring safety with cutting-edge security solutions.
        </p>
      </div>

      {/* Service Sections */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Video Monitoring */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <FaVideo className="text-pink-500 text-3xl" />
            <h2 className="text-2xl font-bold text-white">Video Monitoring</h2>
          </div>
          <ul className="text-lg text-gray-300 list-disc pl-6 space-y-2">
            <li>Remote Video Monitoring</li>
            <li>Alarm Video Verification</li>
            <li>Cloud Video Analytics</li>
            <li>Virtual Guard Tour</li>
            <li>Elevator Video Monitoring</li>
            <li>Voice Interventions</li>
          </ul>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_26-11-2024_101431_doc-0c-04-prod-0.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1546,cg:true"
            alt="Security service"
            width={520}
            height={480}
            className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
          />
        </div>

        {/* Access Control */}
        <div className="flex justify-center order-2 md:order-1">
          <Image
            src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_26-11-2024_104028_doc-0c-04-prod-0.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1240,cg:true"
            alt="Access control"
            width={520}
            height={480}
            className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
          />
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-xl order-1 md:order-2">
          <div className="flex items-center gap-4 mb-4">
            <FaKey className="text-pink-500 text-3xl" />
            <h2 className="text-2xl font-bold text-white">Access Control</h2>
          </div>
          <ul className="text-lg text-gray-300 list-disc pl-6 space-y-2">
            <li>Hosted Access Control</li>
            <li>Managed Access Control</li>
            <li>Remote Concierge</li>
            <li>Remote Gate Control</li>
          </ul>
        </div>

        {/* IoT Section */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <FaWifi className="text-pink-500 text-3xl" />
            <h2 className="text-2xl font-bold text-white">IoT Solutions</h2>
          </div>
          <ul className="text-lg text-gray-300 list-disc pl-6 space-y-2">
            <li>Cloud PBX</li>
            <li>AktivSense</li>
            <li>Cargo Monitoring</li>
            <li>Sirix Pro</li>
            <li>Lone Worker Alarm Response</li>
            <li>Emergency Intercom Monitoring</li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Button label="Contact Us" href="/contact-us" />
        </div>
      </div>
    </div>
  );
};

export default PSecurityServices;
