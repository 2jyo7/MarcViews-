import React from 'react';

const BSHIntro = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 md:px-12 w-full max-w-4xl md:max-w-6xl">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          4 Steps to Modernize Your Business Protection
        </h1>
        
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Protect your business from cyberattacks
          </h2>
          <div className="space-y-2 text-gray-600">
            <p><span className="font-bold">Step 1:</span> Create a Secure Network</p>
            <p><span className="font-bold">Step 2:</span> Enable Work-from-Anywhere Users with Secure Access</p>
            <p><span className="font-bold">Step 3:</span> Enforce Consistent Cloud Application Security</p>
            <p><span className="font-bold">Step 4:</span> Simplify Security, Management, and Ongoing Operations</p>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 md:p-10 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Let us help you in</h2>
          <div className="space-y-2 text-gray-600">
            <p>Ensuring the confidentiality, integrity, and availability of data</p>
            <p>Achieving regulatory compliance</p>
            <p>Avoiding unnecessary liability</p>
            <p>Boosting customer trust and loyalty</p>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mt-12 mb-6">
          Unified SASE: Securing the Hybrid Workforce
        </h1>

        <div className="bg-white p-6 md:p-10 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Delivering Comprehensive Security Capabilities at Scale
          </h2>
          <div className="space-y-2 text-gray-600">
            <p>With the rise of the hybrid workforce, organizations have had to secure their employees who access the network and applications from on-site and off-site.</p>
            <p>This work-from-anywhere (WFA) shift has significantly expanded the attack surface, encompassing home offices and mobile workers, thereby increasing the complexity of network, application, and resource security.</p>
            <p>A secure access service edge (SASE) architecture helps address these exploits by providing secure access and high-performance connectivity to users in branches large and small or in any remote location.</p>
            <p>Unified SASE has been specifically engineered to converge networking and security into an integrated and adaptive solution to ensure optimal and secure connectivity for the hybrid workforce.</p>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">5 Critical Use Cases</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Secure internet access</li>
              <li>Secure private access</li>
              <li>Secure SaaS access</li>
              <li>Branch transformation</li>
              <li>VPN to ZTNA transition</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">5 Critical Solutions</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Unified management and DEM</li>
              <li>Unified agent and Universal ZTNA</li>
              <li>FWaaS and SWG</li>
              <li>CASB and data leak prevention</li>
              <li>Secure SD-WAN</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BSHIntro;
