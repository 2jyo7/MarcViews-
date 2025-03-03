import LiFeaturesComp from '@/components/common/LiFeaturesComp ';
import React from 'react'

const AIPBStrategy = () => {

    const aiStrategy = [
        {
            title: "Business Strategy",
            points: [
                "Define and prioritize business objectives, such as customer experience, productivity, revenue growth, employee experience, and other key goals.",
                "Determine how you’ll measure the value of those objectives.",
                "Identify and prioritize AI use cases that support your goals.",
                "Build a portfolio management plan to help guide your investments."
            ]
        }, 
        {
            title: "Technology Strategy",
            points: [
                "Based on your top priority use cases, determine whether to buy, modernize, or build applications.",
                "Assess whether you have the infrastructure for AI applications to access data securely, quickly, and at scale.",
                "Consider the scalability and performance implications of hosting data and AI applications on-premises or in the cloud.",
                "Ensure your cloud infrastructure is built to run large AI workloads and deliver reliability at scale.",
                "Evaluate your organization’s Zero Trust security posture.",
                "Explore how to use AI to improve security for deploying and protecting organizational assets, developing and maintaining policies and procedures, and monitoring and responding to incidents or emerging threats."
            ]
        }, 
        {
            title: "AI Strategy and Experience",
            points: [
                "Familiarize yourself with generative AI use cases and how they might support your business needs.",
                "Develop a systematic process to consider AI for every use case.",
                "Assess the number of business units and processes, length of time in production, and age of deployments in your organization to reveal patterns that may point to opportunities or blockers.",
                "Build intelligent apps on your data to improve the intelligence and relevance of model outputs.",
                "Consider using Microsoft 365 Copilot or build your own copilot to accelerate learning and time to value."
            ]
        }, 
        {
            title: "AI Governance",
            points: [
                "Review and share resources on responsible use of AI to identify the models and approaches that best suit your organization.",
                "Consider the enablement model that best fits your needs, such as hub-and-spoke, centralized, or distributed.",
                "Consider the principles of secure AI and how to ensure your data is protected end-to-end from platform to applications and users.",
                "Consider the processes, controls, and accountability mechanisms that may be required to govern the use of AI and how AI may affect data privacy and security policies."
            ]
        }
    ]

    return (
        <section className='bg-white py-12'>
            <div className='container mx-auto px-6 lg:px-12'>
                <h2 className='text-3xl font-bold text-center text-gray-900 mb-6'>AI Strategy & Implementation</h2>
                <div className='w-20 h-1 bg-blue-500 mx-auto mb-8'></div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {aiStrategy.map((ais) => (
                        <div key={ais.title} className='bg-neutral-800 p-6 rounded-lg shadow-md'>
                            <h3 className='text-xl font-semibold text-pink-600 mb-4'>{ais.title}</h3>
                            <ul className='list-disc list-inside space-y-2'>
                                {ais.points.map((point) => (
                                    <LiFeaturesComp key={point} liPoints={point} className='border-fuchsia-500 bg-white' />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AIPBStrategy;
