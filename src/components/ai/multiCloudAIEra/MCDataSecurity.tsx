import Button from '@/components/common/Button ';
import CardComp from '@/components/common/CardDesign/Card1 ';
import React from 'react';

const MCDataSecurity = () => {
    const dataSecInfo = [
        {
            title: "Discover",
            imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_27-4-2024_215611_cdn-dynmedia-1.mi.jpeg/:/cr=t:0%25,l:19.42%25,w:61.17%25,h:100%25/rs=w:365,h:365,cg:true",
            para: "Automate discovery and classification of on-premises and cloud data and uncover critical vulnerabilities."
        },
        {
            title: "Encrypt",
            imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_27-4-2024_222533_cdn-dynmedia-1.mi.jpeg/:/cr=t:0%25,l:9.44%25,w:81.13%25,h:100%25/rs=w:365,h:365,cg:true",
            para: "Safeguard privacy and confidentiality of data at rest, in motion, and in use with encryption and key management."
        },
        {
            title: "Monitor",
            imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_27-4-2024_2229_cdn-dynmedia-1.micr.jpeg/:/cr=t:0%25,l:9.71%25,w:80.59%25,h:100%25/rs=w:365,h:365,cg:true",
            para: "Protect and harden on-prem and cloud data sources, including Azure Event Hubs, AWS Kinesis, Snowflake, SAP, etc."
        },
        {
            title: "Analyze & Respond",
            imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5395.jpg/:/cr=t:0%25,l:28.06%25,w:43.88%25,h:100%25/rs=w:730,h:730,cg:true",
            para: "Identify and respond to compliance and data security risks across environments and teams from one place, generate reports, and automate notifications."
        }
    ];

    return (
        <section className='py-20'>
            <div className='container mx-auto px-6'>
                <h1 className='text-3xl lg:text-4xl font-bold text-center border-b-2 border-lime-400 pb-4 mb-8'>Solution: Centralized Data Security and Compliance</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 text-center'>
                    {dataSecInfo.map(dSI => (
                        <CardComp 
                            key={dSI.title} 
                            title={dSI.title} 
                            imgUrl={dSI.imgUrl} 
                            para={dSI.para} 
                        />
                    ))}
                </div>
                <div className='flex mt-8 justify-center items-center'>
                    <Button label="IBM Security Gaurdium Has It ALL!"  className='px-8 py-4'/>
                </div>
            </div>
        </section>
    );
};

export default MCDataSecurity;
