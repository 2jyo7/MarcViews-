import Button from '@/components/common/Button ';
import Image from 'next/image';
import React from 'react';

const IAMBenefit = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
          Benefits
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="flex justify-center px-2">
            <Image
              src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5372.jpg/:/cr=t:6.31%25,l:0%25,w:100%25,h:87.39%25/rs=w:400,h:200,cg:true/qt=q:30"
              alt="benefit-iam-img"
              width={400}
              height={400}
              className="rounded-lg shadow-md w-full md:w-[24rem] lg:w-[32rem] object-cover"
            />
          </div>

          {/* Benefits List */}
          <div>
            <ul className="space-y-4 text-gray-700 text-lg">
              {[
                "Bulk user creation & management",
                "Single-click creating of accounts, groups, and contacts",
                "Smooth transition",
                "Least privilege",
                "Enhanced visibility & security",
                "Robust reporting (schedule & custom)",
                "Self-service password management",
                "Improved productivity & efficiency",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="text-blue-500 text-xl">✅</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Call-To-Action Button */}
            <div className="mt-8">
              <Button label="Talk to Expert" className="px-6 py-3 text-white rounded-lg transition" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IAMBenefit;
