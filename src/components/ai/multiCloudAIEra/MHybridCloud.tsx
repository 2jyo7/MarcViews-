import Image from 'next/image';
import React from 'react';

const MHybridCloud = () => {
  return (
    <section className='py-12 '>
      <div className='container max-w-5xl mx-auto px-6'>
        <h1 className='text-3xl lg:text-4xl font-bold text-center border-b-2 border-lime-400 pb-4 mb-8'>Hybrid Cloud Security</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center '>
          <div>
            <Image 
              src={'https://plus.unsplash.com/premium_photo-1700830193662-cae8c8939e6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGN5YmVyJTIwc2VjdXJpdHklMjBpZGVudGl0eSUyMHByb3RlY3Rpb24lMjBjaGFydHxlbnwwfHwwfHx8MA%3D%3D'} 
              alt='multi-hybrid-cloud-ai-security-img' 
              width={400} 
              height={400} 
              className='object-cover rounded-lg shadow-lg' 
            />
          </div>
          <div className='space-y-6  '>
            <div className='p-4 rounded-lg shadow-md hover:scale-105 transition-all shadow-teal-600'>
              <p className='text-xl font-semibold'>82% of data breaches involved data stored in cloud environments.</p>
              <span className=' text-sm text-pink-600 font-semibold'>*Cost of Data Breach Report - IBM, 2023</span>
            </div>
            <div className='p-4 rounded-lg shadow-md hover:scale-105 transition-all shadow-black'>
              <p className='text-xl font-semibold'>24% of current AI projects are being secured.</p>
              <span className=' text-sm text-pink-600 font-semibold'>*Securing Generative AI: What Matters Now - IBM and AWS, 2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MHybridCloud;