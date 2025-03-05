import React from 'react';
import AILast3PointsComp from './AILast3PointsComp';
import Button from '@/components/common/Button ';

const AImportance = () => {
  const aimpLs = [
    "Threat Detection & Prevention",
    "Automated Response",
    "Protect sensitive/confidential data",
    "Behavioral Analysis",
    "Incident Response",
    "User Authentication & Access Control",
    "Vulnerability Management",
    "Security Analytics",
    "Predictive Analysis",
    "Adaptive Security Measures",
    "Phishing Detection",
    "Build employee and customer trust",
  ];

  const aimpls2 = [
    "Improved performance",
    "Triage of tier 1 threats.",
    "Detection of Zero-day attacks & threats.",
    "Prediction of future threats.",
    "Reduction of false positives & noise.",
    "Correlation of user behavior with threat indicators.",
  ];

  const aimpls3 = [
    "Speed up detection and reduce detection time",
    "Improve accuracy of analysts",
    "Reduce events, incidents, & breaches",
    "Increase productivity of resources",
    "Reduce Cybersecurity Costs",
    "Predict Cyberattacks",
    "Reduce reliance/redeploy cybersecurity resources",
    "Identify potential cybersecurity issues not visible to humans",
  ];

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        {/* Importance of AI */}
        <AILast3PointsComp title="Importance of AI" aiListMapping={aimpLs} />
        
        {/* AI Advantage */}
        <AILast3PointsComp title="AI Advantage" aiListMapping={aimpls2} />
        
        {/* Boosting Productivity */}
        <AILast3PointsComp title="Boosting Productivity" aiListMapping={aimpls3} />

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <Button 
            label="Ready to APM and ARM together for predictive AIOps"
            className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold text-lg rounded-full shadow-lg transition-all hover:shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AImportance;
