import React from 'react';

const CatchRate = () => {
    const crPara = [
        'A majority SMBs can only survive a few days after a ransomware attack.',
        'Phishing attacks continue to be one of the top threats to SMBs.',
        'Malware can originate from malicious downloads, spam email, infected devices connecting to the network, and more.',
        'Using weak passwords is common within SMBs, which can lead to sensitive data being compromised.',
        'Insider threats accounted for over 20% of data breaches in 2021. SMBs must always promote security awareness within their company.'
    ];

    return (
        <section className='py-16 bg-gray-100'>
            <div className='container mx-auto max-w-5xl px-6 text-center'>
                <h2 className='text-3xl font-bold text-gray-800 mb-6'>Our Managed Security Provides a 99.7% Catch Rate of Cyberattacks</h2>
                <ul className='list-none space-y-4 text-gray-700 text-lg'>
                    {crPara.map((point, index) => (
                        <li key={index} className='p-4 bg-white shadow-md rounded-lg border-l-4 border-blue-600'>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default CatchRate;
