import React from "react";

const DSChallenges: React.FC = () => {
  const dsChallenge = [
    {
      title: "Discover",
      para: "Discover and classify your sensitive data across on-premises and cloud data stores.",
    },
    {
      title: "Analyze",
      para: "Analyze and assess risk with contextual insights and advanced analytics.",
    },
    {
      title: "Protect",
      para: "Protect sensitive data through encryption, access policies, and data activity monitoring.",
    },
    {
      title: "Respond",
      para: "Respond to threats in real time and send actionable alerts to security operations systems.",
    },
    {
      title: "Simplify",
      para: "Simplify data privacy and security compliance, auditing, and reporting.",
    },
  ];

  return (
    <section className="py-10 lg:py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          How We Address Data Security Challenges
        </h1>
        <div className="border-t-4 border-pink-600 w-24 mx-auto mb-8"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dsChallenge.map((challenge) => (
            <div
              key={challenge.title}
              className="bg-white p-6 shadow-lg rounded-lg"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {challenge.title}
              </h2>
              <p className="text-gray-700">{challenge.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DSChallenges;
