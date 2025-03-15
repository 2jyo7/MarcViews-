import Image from "next/image";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const CEventsIntro = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-32 md:px-12 lg:px-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={
                "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/logo/Logo_marcviews.png/:/cr=t:5.56%25,l:0%25,w:100%25,h:88.89%25/rs=w:1160,h:1160"
              }
              alt="c-events-sec-intro-img"
              width={400}
              height={300}
              className="object-cover rounded-xl shadow-lg "
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-bg-style">
              Welcome to MarcViews Networks Events Hub!
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              &quot;Discover our latest industry gathering, workshops, and
              seminars designed to empower you with the latest insights and
              knowledge in cybersecurity and technology. Let&apos;s connect,
              learn, and innovate together!&quot;
            </p>
            <span className="mt-4 block text-pink-800 font-semibold">
              Subscribe to Our Newsletter for Latest Updates
            </span>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 mt-6">
              <a
                href="#"
                className="text-pink-600 text-2xl hover:text-pink-800"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-pink-400 text-2xl hover:text-pink-600"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-pink-700 text-2xl hover:text-pink-900"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEventsIntro;
