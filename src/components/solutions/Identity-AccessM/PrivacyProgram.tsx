import React from 'react';

const PrivacyProgram = () => {
  const ppData = [
    {
      title: "Legal Compliance",
      para: `Privacy laws and regulations, such as the General Data Protection 
      Regulation (GDPR) and the California Consumer Privacy Act (CCPA),
      Personal Information Protection and Electronic Documents Act (PIPEDA) 
      require organizations to protect the privacy rights of individuals.`,
      btnTtl: "PRIVACY ACT Canada"
    },
    {
      title: "Trust and Reputation",
      para: "A robust privacy program demonstrates a commitment to protecting customer and employee data. This builds trust with stakeholders, enhances your reputation, and fosters stronger relationships with customers, partners, and the public."
    },
    {
      title: "Data Protection",
      para: "Personal information is a valuable asset that requires safeguarding. A privacy program establishes policies and procedures to secure data, reducing the risk of data breaches, identity theft, and unauthorized access."
    },
    {
      title: "Customer Expectations",
      para: "Customers have become increasingly concerned about the security of their personal information. Implementing a privacy program reassures customers that their data is handled responsibly, meeting their expectations and improving customer satisfaction."
    },
    {
      title: "Risk Mitigation",
      para: "A privacy program identifies and addresses privacy risks within your organization. It helps minimize the likelihood of data breaches, reputational damage, financial losses, and regulatory penalties, reducing overall business risks."
    },
    {
      title: "Enhanced Data Governance",
      para: "A privacy program goes hand-in-hand with effective data governance. It ensures that personal data is collected, processed, stored, and disposed of in a compliant and ethical manner. This supports data accuracy, integrity, and accessibility for business purposes."
    },
    {
      title: "Future-Proofing",
      para: "Privacy regulations continue to evolve, with new laws emerging and existing ones being amended. By establishing a privacy program, you create a foundation for adapting to future privacy requirements and staying ahead of changing legal and industry standards."
    }
  ];

  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Why Privacy Program Is Important?
        </h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {ppData.map((item, index) => (
            <div key={index} className="bg-white shadow-lg shadow-pink-900 rounded-xl p-6 transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.para}</p>
              {item.btnTtl && (
                <button className="mt-4 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                  {item.btnTtl}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyProgram;
