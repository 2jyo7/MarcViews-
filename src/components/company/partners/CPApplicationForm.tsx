import Button from "@/components/common/Button ";
import Link from "next/link";
import React from "react";

const CPApplicationForm = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-10 max-w-3xl bg-black py-10 rounded-2xl">
        {/* Title */}
        <h1 className="text-center text-2xl md:text-3xl font-semibold text-white mb-6">
          Application Form
        </h1>
        <div className="border-t-2 border-pink-600/60 w-32  mx-auto mb-6"></div>

        {/* Form */}
        <div className=" p-6 rounded-lg shadow-lg">
          <form className="space-y-4">
            {/* Input Fields */}
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              placeholder="Business Email"
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              placeholder="Which services are you interested in..?"
              rows={4}
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
            ></textarea>

            {/* Submit Button */}
            <div className="text-center">
              <Button label="Submit" />
            </div>

            {/* reCAPTCHA Notice */}
            <div className="text-xs text-gray-600 text-center mt-4">
              This site is protected by reCAPTCHA and the Google{" "}
              <Link
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline"
              >
                Terms of Service
              </Link>{" "}
              apply.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CPApplicationForm;
