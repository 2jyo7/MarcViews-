import Button from "@/components/common/Button ";
import Image from "next/image";
import React from "react";

const FinalES = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-center items-center">
        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <Button
            label="GET PRICING"
            className="bg-slate-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-pink-700 transition "
          />
          <Button
            label="REQUEST CONSULTATION"
            className="bg-pink-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
          />
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          <Image
            src="https://plus.unsplash.com/premium_photo-1682309526815-efe5d6225117?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="email-sec-final-img1"
            width={400}
            height={400}
            className="object-cover rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
          />
          <Image
            src="https://plus.unsplash.com/premium_photo-1700502264441-cf38978031fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVtYWlsJTIwc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D"
            alt="email-sec-final-img2"
            width={400}
            height={400}
            className="object-cover rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default FinalES;
