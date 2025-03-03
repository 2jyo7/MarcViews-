import CardImgT3 from '@/components/common/CardDesign/CardImgT3 ';
import React from 'react';

const BSHAttackVectors = () => {
  const attackVectorsD = [
    { title: "Ransomware", imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5032.jpg" },
    { title: "Phishing", imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5033.jpg" },
    { title: "Malware", imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5034.jpg" },
    { title: "Misconfigured Device", imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5035.jpg" },
    { title: "DDoS", imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5036.jpg" },
    { title: "Malicious Insiders", imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5037.jpg" },
    { title: "Weak & Stolen Credentials", imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5038.jpg" },
    { title: "API & Web Application Exploitation", imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5039.jpg" }
  ];

  return (
    <section className=" py-12 ">
      <div className='container mx-auto w-full max-w-7xl px-6 md:px-12'>
        <h1 className='text-2xl md:text-3xl font-bold text-center mb-8'>
          Protect from Common Types of Attack Vectors
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {attackVectorsD.map(avd => (
            // <div key={avd.title} className='bg-fuchsia-200 rounded-xl py-2 px-6 shadow-md shadow-pink-400 overflow-hidden transform transition duration-300 hover:scale-105'>
            //   <Image src={avd.imgUrl} alt={avd.title} width={300} height={260} className='w-full h-48  object-cover rounded-full shadow-lg shadow-gray-400' />
            //   <div className='p-4 text-gray-800 text-center'>
            //     <h3 className='text-lg font-semibold'>{avd.title}</h3>
            //   </div>
            // </div>
            <CardImgT3 key={avd.title} title={avd.title} imgUrl={avd.imgUrl} className='flex flex-col justify-center items-center' />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BSHAttackVectors;
