import Button from '@/components/common/Button ';
import Image from 'next/image'
import React from 'react'

const AIPBIntro = () => {
  return (
    <section className='bg-gray-100 py-12'>
      <div className='container mx-auto px-6 lg:px-12 w-full max-w-5xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div className='text-center md:text-left'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
              AI is shifting business for our customers
            </h2>
            <p className='text-gray-700 text-lg mb-6'>
              Enable customer transformation, increase revenue, and manage costs
            </p>
            <Button label='Build Your Business Case' className=' outline hover:outline-gray-500 hover:translate-y-1' />
          </div>
          <div className='flex justify-center w-full'>
            <Image 
              alt='aipb-intro-img' 
              src={'https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_8989.jpg/:/cr=t:9.37%25,l:0%25,w:100%25,h:81.26%25/rs=w:984,h:492'} 
              width={400} 
              height={300} 
              className='object-cover rounded-lg shadow-lg hover:scale-105 transition-all'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIPBIntro;