import CardComp from '@/components/common/CardDesign/Card1 ';
import React from 'react';

const SMB = () => {
    const smbData = [
        {
            title: "Endpoint and Remote User Protection",
            imgUrl: "https://img1.wsimg.com/isteam/stock/ukalOdpP0DfPxypk2/:/cr=t:0%25,l:0.58%25,w:66.73%25,h:100%25/rs=w:730,h:730,cg=true",
            para: "Endpoint Hygiene and Visibility, EDR, VPN & Zero Trust, 2 Factor Authentication",
        },
        {
            title: "Device Security",
            imgUrl: "https://img1.wsimg.com/isteam/stock/12146/:/cr=t:0%25,l:29.71%25,w:66.67%25,h:100%25/rs=w:730,h:730,cg=true",
            para: "Complete protection for your employees’ devices that’s simple to deploy, manage, and scale.",
        },
        {
            title: "Cloud and Email Security",
            imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Untitled%20(16).png/:/cr=t:0%25,l:21.88%25,w:56.25%25,h:100%25/rs=w:730,h:730,cg=true",
            para: "Robust security with a 99.2% reduction in phishing attacks.",
        },
        {
            title: "Secure Office Networking & Connectivity",
            imgUrl: "https://img1.wsimg.com/isteam/stock/DxeZmJo/:/cr=t:0%25,l:16.67%25,w:66.67%25,h:100%25/rs=w:730,h:730,cg=true",
            para: "Enterprise-grade security against the most advanced threats; integrated Wi-Fi 7, 5G, SD-WAN.",
        },
        {
            title: "24/7 Support",
            imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Untitled%20(10).png/:/cr=t:0%25,l:33.61%25,w:56.25%25,h:100%25/rs=w:730,h:730,cg=true",
            para: "User-friendly dashboard and mobile app for management on the go.",
        },
        {
            title: "Content Security",
            imgUrl: "https://img1.wsimg.com/isteam/stock/11255/:/cr=t:0%25,l:16.67%25,w:66.67%25,h:100%25/rs=w:730,h:730,cg=true",
            para: "With AV, Adv. Threat, Botnet, Mobile, Cloud Sandbox, IPS.",
        },
        {
            title: "Web Security",
            imgUrl: "https://img1.wsimg.com/isteam/stock/jlwJb1/:/cr=t:0%25,l:0%25,w:66.61%25,h:99.99%25/rs=w:730,h:730,cg=true,m",
            para: "Web, Video, and DNS Filtering, Anti-Spam, Botnet C&C.",
        },
    ];

    return (
        <section className='py-16 bg-gray-100'>
            <div className='container mx-auto max-w-7xl px-6 text-center'>
                <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-10'>
                    Out-of-the-Box Enterprise Grade Security for SMBs
                </h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {smbData.map((smd) => (
                        <div key={smd.title} className='hover:scale-105 transition-transform duration-300'>
                            <CardComp title={smd.title} para={smd.para} imgUrl={smd.imgUrl} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SMB;
