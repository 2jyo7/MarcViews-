import LiFeaturesComp from '@/components/common/LiFeaturesComp ';
import React from 'react';

const MCloudIntro = () => {
    const mcIntroD = [
        {
            title: "Hybrid Cloud",
            para: [
                "Complexity in management detracts from cost benefits.",
                "Ensuring compliance with data protection regulations is challenging.",
                "Integrating legacy apps with cloud and SaaS can cause compatibility issues.",
                "Expanding the attack surface increases exposure to threats."
            ]
        },
        {
            title: "Artificial Intelligence",
            para: [
                "Requires centralizing huge amounts of sensitive data.",
                "Threat actors can exploit weaknesses in AI models to break out of guardrails.",
                "Rate of adoption is outstripping efforts to do so responsibly.",
                "Training data can be unintentionally exposed to users."
            ]
        }
    ];

    return (
        <section className='py-20 lg:py-24'>
            <div className='container mx-auto px-8 lg:px-12'>
                <h1 className='text-3xl lg:text-4xl font-bold text-center border-b-2 border-lime-400 pb-4'>Today&apos;s Challenges</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-12'>
                    {mcIntroD.map(mcID => (
                        <div key={mcID.title} className='p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
                            <h2 className='text-2xl font-semibold text-lime-400 mb-4'>{mcID.title}</h2>
                            <div className='space-y-3'>
                                {mcID.para.map(mciP => (
                                    <LiFeaturesComp 
                                        key={mciP} 
                                        liPoints={mciP} 
                                        className='bg-black border-l-4 border-lime-400 text-white p-3 rounded-md hover:bg-gray-700 transition'
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MCloudIntro;
