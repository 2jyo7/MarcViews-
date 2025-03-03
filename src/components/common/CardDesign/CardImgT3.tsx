import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge';

interface CardImgProp {
    imgUrl: string; title: string; className?: string;
}

const CardImgT3 = ({ imgUrl, title, className}: CardImgProp) => {
  return (
     <div  className={twMerge('bg-fuchsia-200 rounded-xl py-2 px-6 shadow-md shadow-pink-400 overflow-hidden transform transition duration-300 hover:scale-105', className)}>
                  <Image src={imgUrl} alt={title} width={300} height={260} className='w-full  object-cover rounded-full shadow-lg shadow-gray-400' />
                  <div className='p-4 text-gray-800 text-center'>
                    <h3 className='text-lg font-semibold'>{title}</h3>
                  </div>
                </div>
  )
}

export default CardImgT3
