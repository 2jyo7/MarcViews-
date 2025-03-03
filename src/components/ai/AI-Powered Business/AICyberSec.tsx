import React from 'react';

const AICyberSec = () => {
  const aicyberSecD = [
    {
      title: 'Stay Ahead of the Game',
      para: 'Our security service delivers a powerful combination of actionable AI-driven intelligence integrated with inline protection to detect and counter evasive and never-seen-before threats.',
    },
    {
      title: 'Consistent & Coordinated Security Detection & Response',
      para: 'Actionable threat intelligence, which continuously updates its rich content, web, device, and user security capabilities.',
    },
    {
      title: 'Antibot & C2',
      para: 'Block unauthorized attempts to communicate with compromised remote servers for both receiving malicious command & control information or sending out extracted information.',
    },
    {
      title: 'DNS',
      para: 'DNS filtering provides complete visibility into DNS traffic while blocking high-risk domains, including malicious newly registered domains, parked domains, & more. It protects against DNS tunneling, DNS protocol abuse, DNS infiltration, C2 server identification, & domain generation algorithm.',
    },
    {
      title: 'URL & Video Filtering',
      para: 'This service addresses a wide variety of threats, including ransomware, credential theft, phishing, and other web-based attacks. It leverages AI-driven behavioral analysis and threat correlation to immediately block unknown malicious URLs with near-zero false negatives.',
    },
  ];

  return (
    <section className="py-12 bg-gray-100 flex justify-center">
      <div className="w-full max-w-6xl p-8 bg-white shadow-lg rounded-2xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">AI & Cybersecurity</h1>
          <div className="w-20 border-t-4 border-pink-500 mx-auto mt-2"></div>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-6">
          We deploy market-leading security capabilities designed to protect applications, content, web traffic, devices, and users wherever they are.
        </p>

        {/* Cybersecurity Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aicyberSecD.map((item, index) => (
            <div
              key={index}
              className="bg-slate-500 text-white p-5 rounded-lg shadow-md hover:bg-pink-600 transition"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-sm mt-2">{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AICyberSec;
