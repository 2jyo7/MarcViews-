import Button from '@/components/common/Button ';
import LiFeaturesComp from '@/components/common/LiFeaturesComp ';
import React from 'react';

const ChallengeSol = () => {
    const challengeSolD = [
        {
            title: "The Challenge",
            points: [
                'Keeping firewall firmware and security policies up-to-date.',
                'The complexity of firewall configurations and rule management.',
                'Limited Resource, Lack of in-house expertise and, Budget constraints.'
            ]
        },
        {
            title: 'The Solution',
            points: [
                'Outsource to MarcViews FWaaS.',
                'Offload the complexities of firewall management.',
                'We handle firewall configuration, monitoring, updates, and maintenance.',
                'Enterprise-grade firewall protection and expertise.'
            ]
        }
    ];

    return (
        <section className='py-16 bg-white'>
            <div className='container mx-auto max-w-5xl px-6'>
                {challengeSolD.map((csd) => (
                    <div key={csd.title} className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-800 mb-4 border-b-2 pb-2'>{csd.title}</h2>
                        <ul className='list-disc list-inside space-y-2 text-gray-600'>
                            {csd.points.map((csdp) => (
                                <LiFeaturesComp key={csdp} liPoints={csdp} className='border-lime-400 bg-white' />
                            ))}
                        </ul>
                    </div>
                ))}
                <div className='mt-8 text-center'>
                    <p className='text-gray-700 text-lg font-semibold mb-4'>Proof-of-Concept &#40;POC&#41;</p>
                    <Button label='REQUEST' />
                </div>
            </div>
        </section>
    );
};

export default ChallengeSol;
