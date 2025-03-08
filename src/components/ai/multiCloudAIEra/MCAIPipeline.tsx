import Image from 'next/image';
import React from 'react';

const MCAIPipeline = () => {
    const aiPipelineInfo = [
        {
            title: "Protect Sensitive Data",
            para: "Prevent usage of sensitive information in AI models found in big data (ex. Parquet) and meet compliance."
        },
        {
            title: "Unintentional Exposure",
            para: "Monitor copies of sensitive data across apps and clouds to prevent exposure to a 3rd party (ex. unapproved open-source models)."
        },
        {
            title: "Keys or Tokens Found in Slack",
            para: "Detect if keys are exposed in shared Slack channels, which can give access to attackers who aim to steal IP."
        },
        {
            title: "Prevent Data Leakage",
            para: "Detect if sensitive data (ex. PII) has leaked during model validation (could be from insider threats)."
        },
        {
            title: "Data Transfer Violation",
            para: "Monitor data flow to ensure compliance across SaaS applications in various geographies (ex. GDPR)."
        }
    ];

    return (
        <section className='py-20'>
            <div className='container mx-auto px-6'>
                <h1 className='text-3xl lg:text-4xl font-bold text-center border-b-2 border-lime-400 pb-4 mb-8'>Secure the AI Pipeline with Guardium</h1>
                <div className='w-full flex justify-center '>
                    <Image 
                        src={'https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_15-6-2024_125757_.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280,h:404'}
                        alt='multi-hybrid-cloud-ai-security-img' 
                        width={800} 
                        height={350} 
                        className='object-cover rounded-lg shadow-lg shadow-black' 
                    />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12'>
                    {aiPipelineInfo.map((item) => (
                        <div key={item.title} className='bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all'>
                            <h2 className='text-xl font-semibold mb-2 text-lime-400'>{item.title}</h2>
                            <p className='text-gray-300'>{item.para}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MCAIPipeline;