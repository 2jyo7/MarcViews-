import KeyFeatureComp from '@/components/common/KeyFeature ';
import React from 'react';

const ESProtection = () => {
  const esprotectionCard = [
    {
      title: "ANTI-PHISHING",
      para: "Protection against phishing schemes, including zero-day phishing schemes, while users are using their mailboxes or browsing the internet."
    },
    {
      title: "ANTI-RANSOMWARE",
      para: "The solution should monitor changes to files on user drives, identify ransomware behavior such as illegitimate file encryption, stop the attack, and recover encrypted files automatically."
    },
    {
      title: "ANTI-BOT",
      para: "Protection against bot-driven infections and sensitive data exposure they cause."
    },
    {
      title: "CONTENT DISARM AND RECONSTRUCTION (CDR)",
      para: "The solution should be able to remove exploitable content by sanitizing documents from any harmful elements, and delivering 100% sanitized versions within seconds."
    },
    {
      title: "AUTOMATED POST-BREACH DETECTION, REMEDIATION, AND RESPONSE",
      para: "Automation-driven analysis, contextualization, and remediation of incidents enhanced by an end-to-end attack view, covering entry points, lateral movement, and the impact to the business."
    }
  ];

  return (
    <section className='py-14 bg-gray-50'>
      <div className='container mx-auto px-4 text-gray-800 max-w-7xl'>
        <h2 className='text-3xl font-bold text-center text-gray-900 mb-8'>THE 5 MUST-HAVE ENDPOINT PROTECTIONS</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {esprotectionCard.map(espC => (
            <KeyFeatureComp 
              key={espC.title} 
              title={espC.title} 
              para={espC.para} 
              className='border-r-4 border-teal-500 p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ESProtection;
