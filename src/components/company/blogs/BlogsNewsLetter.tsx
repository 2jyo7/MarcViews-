import Button from "@/components/common/Button ";
import React from "react";

const BlogsNewsLetter = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Subscribe to our Newsletter
        </h1>
        <p className="mt-4 text-gray-300 text-lg leading-relaxed">
          Stay ahead of the curve with{" "}
          <span className="text-blue-400 font-semibold">
            MarcViews Networks
          </span>
          . Subscribe to our monthly newsletter for the latest cybersecurity
          trends, expert tips, and insights into emerging threats. <br /> <br />
          Join our proactive community and stay secure in an ever-evolving
          digital landscape. You can unsubscribe anytime with just a click.
        </p>

        {/* Form Section */}
        <form className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-2/3 p-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <Button
            label="Subscribe"
            className=" text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all"
          />
        </form>

        {/* Disclaimer */}
        <p className="mt-3 text-sm text-gray-400">
          We respect your privacy. No spam ever.
        </p>
      </div>
    </section>
  );
};

export default BlogsNewsLetter;
