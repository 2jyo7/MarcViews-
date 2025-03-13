"use client";

import Button from "@/components/common/Button ";
import Link from "next/link";
import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

const CApplyHere = () => {
  const [resume, setResume] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setResume(file.name);
    }
  };

  return (
    <section className="p-8 bg-radial-color min-h-screen flex items-center justify-center">
      <div className="w-full mx-auto bg-white shadow-2xl rounded-lg p-8 container">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Apply Here
        </h1>

        <div className="space-y-10 text-center flex flex-col justify-center items-center">
          <div className="border-b pb-6">
            <h2 className="text-2xl font-semibold text-gray-700">
              Network Security Infrastructure &#40;Senior&#41;
            </h2>
            <span className="text-gray-600 block mt-2">
              Toronto, ON, Canada
            </span>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfegFnxgudc4j1fn3pAJ9dvTQ0phJ0ilsq-toC6ZSmbpP50AA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button label="Apply" className="mt-4 px-14" />
            </Link>
          </div>

          <div className="border-b py-10 px-10 bg-gray-900 max-w-3xl rounded-lg text-white flex flex-col items-center">
            <h2 className="text-2xl font-semibold">Join Our Talent Pool</h2>
            <p className="text-gray-300 mt-2 text-center">
              If these open positions are not suited for you, join our talent
              pool. We will reach out to you once we have other roles open.
            </p>
            <form className="mt-6 space-y-4 w-full flex flex-col justify-center items-center">
              {[
                "Name",
                "Email",
                "Phone",
                "LinkedIn Profile",
                "For which position are you applying?",
              ].map((placeholder) => (
                <div key={placeholder} className="w-full max-w-xl">
                  <label className="flex justify-start">{placeholder}</label>
                  <input
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type={placeholder === "Email" ? "email" : "text"}
                    placeholder={placeholder}
                  />
                </div>
              ))}
              <label className="w-96 flex items-center justify-center bg-gray-800 text-white rounded-lg p-4 cursor-pointer hover:scale-105 transition">
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <IoCloudUploadOutline className="text-white text-2xl mr-2" />
                <span className="font-medium">
                  {resume ? resume : "Attach Resume"}
                </span>
              </label>
              <Button label="Submit Application" className="w-96" />
              <div className="text-xs text-gray-400 mt-2">
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </div>
            </form>
          </div>

          <div className="text-center w-full max-w-5xl  p-8 rounded-lg">
            <h2 className="text-2xl font-semibold bg-gradient-to-br from-pink-700 to-black text-transparent bg-clip-text">
              Subscribe for Latest Updates
            </h2>
            <form className="mt-4 flex justify-center space-x-2 ">
              <input
                className="p-3 border rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="Email"
              />
              <Button label="Submit" className="px-8" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CApplyHere;
