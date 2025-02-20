import Button from "@/components/common/Button ";
import Image from "next/image";
import React from "react";

const CNApplication = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Image Section */}
          <div className="flex justify-center">
            <Image
              src="https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D"
              alt="cloud-native-app-img"
              width={360}
              height={380}
              className="w-[28rem] object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 leading-snug">
              Cloud Native Application Protection Platform
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              <span className="text-lime-500 font-semibold">CNAPP</span> extends
              security capabilities, offering a more nuanced and expansive
              protection strategy that is both preventive and responsive. By
              adopting CNAPP, organizations can not only protect against current
              threats but also position themselves to adapt to future changes in
              the cloud security landscape.
            </p>

            {/* Button */}
            <div className="mt-6">
              <Button label="HYBRID CLOUD" />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="grid md:grid-cols-2 gap-12 mt-16 bg-white p-8 rounded-lg shadow-lg">
          {/* Services List */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Some of Our Services:
            </h2>
            <ul className="text-gray-700 text-lg list-disc pl-5 space-y-2">
              <li>Cloud Security Assessment & Planning</li>
              <li>Identity & Access Management (IAM)</li>
              <li>Data Encryption & Privacy</li>
              <li>Threat Detection & Response</li>
              <li>Vulnerability Management</li>
              <li>Compliance Management</li>
              <li>SOC Services</li>
              <li>Training & Awareness</li>
            </ul>
          </div>

          {/* Additional Information */}
          <div className="flex flex-col justify-between">
            <p className="text-gray-700 text-lg">
              <strong>Posture Management:</strong> Granular, intuitive
              visibility into all cloud assets, networks, and security groups.
              <br />
              <strong>Compliance & Governance:</strong> Automatically conform to
              regulatory requirements and security best practices.
              <br />
              <strong>Identity Protection:</strong> Enforce just-in-time access
              based on IAM users and roles for the most sensitive operations.
            </p>

            {/* Button */}
            <div className="mt-6">
              <Button label="Talk to Expert" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CNApplication;
