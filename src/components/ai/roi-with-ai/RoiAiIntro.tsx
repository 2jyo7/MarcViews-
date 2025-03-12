import Image from 'next/image'
import React from 'react'

const RoiAiIntro = () => {
  return (
   
     <section className="bg-gray-50 py-16 px-6 md:px-12">
          <div className="container mx-auto text-center">
            {/* Card Container */}
            <div className=" rounded-xl shadow-xl p-6 md:p-10 flex flex-col items-center md:flex-row gap-8 md:gap-12">
            
    
              {/* Text Content */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-bold text-pink-900 leading-snug">
                Generating ROI with AI
                </h2>
                <p className="text-gray-700 mt-4 text-lg leading-relaxed">
                Generative AI has taken the world and businesses by storm, with large language models (LLMs)- like OpenAI&apos;s  ChatGPT , Google&apos;s Gemini &Amazon&apos;s Bedrock.Use of AI is helping business growth, improve operational efficiency, and unlock new opportunities for innovation when effectively harnessed.
                </p>
               
              </div>
                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                <Image
                  src={"https://img1.wsimg.com/isteam/stock/lVNa0wm/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:984,h:696"}
                  alt={"Generating ROI with AI-img"}
                  width={400}
                  height={300}
                  className="object-cover w-full h-64 md:h-80 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>
  )
}

export default RoiAiIntro
