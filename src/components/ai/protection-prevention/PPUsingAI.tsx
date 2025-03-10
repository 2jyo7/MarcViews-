import Image from 'next/image';
import React from 'react';

const PPUsingAI = () => {
  const ppHowToUseAIInfo = [
    {
      title: "Threat Detection and Analysis",
      points: [
        "We have implemented AI-driven algorithms to analyze network traffic patterns, system logs, and user behavior to detect anomalies and potential security threats.",
        "We utilize machine learning models to identify known and unknown malware, ransomware, and other malicious activities in real-time."
      ]
    },
    {
      title: "Predictive Analytics",
      points: [
        "We use predictive analytics to forecast future cyber threats and proactively implement countermeasures to mitigate risks.",
        "We have best-in-class solutions to analyze particular threats."
      ]
    },
    {
      title: "Automated Incident Response",
      points: [
        "Due to the high volume of data/logs, to act faster, we have developed playbooks and workflows to automate routine tasks, such as threat containment, quarantine, and remediation, reducing response times and minimizing the impact of security breaches.",
        "We utilize machine learning models to identify known and unknown malware, ransomware, and other malicious activities in real-time."
      ]
    },
    {
      title: "Behavioral Biometrics",
      points: [
        "We have implemented AI-driven algorithms to analyze network traffic patterns, system logs, and user behavior to detect anomalies and potential security threats.",
        "To overcome insider threats, we have implemented AI-based behavioral biometrics to authenticate users based on their unique behavioral patterns, such as keystroke dynamics, mouse movements, and typing speed to detect unauthorized access attempts."
      ]
    },
    {
      title: "Threat Intelligence Integration",
      points: [
        "We have integrated AI-driven threat intelligence feeds into security operations to enrich data analysis and enhance threat detection capabilities.",
        "Leveraging AI algorithms to correlate threat intelligence data with internal security logs and events, providing context and prioritization for security alerts."
      ]
    },
    {
      title: "Vulnerability Management",
      points: [
        "We have employed machine learning algorithms to identify emerging vulnerabilities and zero-day exploits, enabling proactive patching and security updates."
      ]
    },
    {
      title: "Continuous Monitoring and Adaptation",
      points: [
        "AI-powered security monitoring solutions are being used to continuously monitor the infrastructure for suspicious activities, adapting and learning from new threats and attack techniques."
      ]
    }
  ];

  return (
    <section className='py-20'>
      <div className='container mx-auto px-6'>
        <h1 className='text-3xl lg:text-4xl font-bold text-center border-b-4 border-lime-600 pb-4 mb-8'>How do we use AI ?</h1>
       
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12'>
          {ppHowToUseAIInfo.map((item) => (
            <div key={item.title} className=' p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all'>
              <h2 className='text-xl font-semibold mb-4 text-lime-500'>{item.title}</h2>
              <ul className='text-gray-500 list-disc pl-5 space-y-2'>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PPUsingAI;
