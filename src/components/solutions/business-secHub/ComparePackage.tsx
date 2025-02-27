import React from 'react';


const ComparePackage = () => {
    const cpackageD = [
        { title: 'Standard',
          firstP: 'Includes essential security features to protect your business.',
          points: [
              'Antivirus Software',
              'Firewall Solutions',
              'Password Management',
              'Security Awareness Training',
              'Email Security',
              'Patch Management'] },

        { title: 'Premium',
          firstP: 'Includes everything in Standard plus advanced security measures.',
          points: [
              'Endpoint Security',
              'Data Encryption Tools',
              'Backup and Disaster Recovery',
              'Co-Managed SIEM'] },

        { title: 'Elite',
          firstP: 'Includes everything in Premium plus 24/7 monitoring and threat prevention.',
          points: [
              '24/7 Monitoring',
              'Content Security',
              'Web Security',
              'Threat Prevention',
              'Fully Managed SIEM'] }
    ];

    return (
        <section className='py-16 bg-white'>
            <div className='container mx-auto max-w-6xl px-6'>
                <h2 className='text-3xl font-bold text-center text-gray-800 mb-8'>Compare Our Packages</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {cpackageD.map((pkg) => (
                        <div key={pkg.title} className='p-8 shadow-lg rounded-xl text-center border-t-4 border-pink-600'>
                            <h3 className='text-2xl font-bold text-gray-700 mb-4'>{pkg.title}</h3>
                            <p className='text-gray-600 mb-4'>{pkg.firstP}</p>
                            <ul className='list-none space-y-2 text-gray-600 text-left'>
                                {pkg.points.map((point) => (
                                    <li key={point} className='flex items-center gap-2'>
                                        <span className='text-blue-600'>&#10003;</span> {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComparePackage ;