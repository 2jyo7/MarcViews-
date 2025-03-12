import React from "react";

const AboutUsIntro = () => {
  const aboutUsIntroInfo = {
    title: "About MarcViews Networks",
    para: `MarcViews Networks is a premier Managed Security Service Provider (MSSP) based in Toronto with service delivery centers in Mississauga, ON, Canada & Noida, UP, India.

Our services are tailored to protect businesses from cyber threats by providing software, hardware, experienced engineers, analysts, and researchers who will keep your company's data, network, applications, workstations, infrastructure, and users safe, responding to attacks as they happen.

Our services protect data, devices, networks, cloud environments, applications, and identities, while operating Network Operations Centers (NOC) and Security Operations Centers (SOC).`,
    points: [
      "Improved Security & Compliance",
      "Increased Productivity & Efficiency",
      "Standardized & Unified IT Infrastructure",
      "Improved Agility & Responsiveness",
    ],
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* About Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-400">
            {aboutUsIntroInfo.title}
          </h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto text-gray-300">
            {aboutUsIntroInfo.para}
          </p>
        </div>
        
        {/* Benefits Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-teal-300 text-center mb-4">
            Benefits You Get
          </h3>
          <ul className="space-y-3">
            {aboutUsIntroInfo.points.map((point, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-300">
                <span className="text-teal-400 text-lg">✔</span> {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-teal-400">Why Us?</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
          MarcViews Networks is a cloud-native company that identifies strengths, redundancies, and gaps in your security posture. Through our comprehensive cyber threat and resilience assessments, we identify unsecure endpoints, patch exposed devices, standardize threat management, and assess exposure to major security threats, giving you peace of mind and a plan for success.
        </p>
        <button className="mt-6 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow-md transition duration-300">
          Find Out More
        </button>
      </div>
    </section>
  );
};

export default AboutUsIntro;
