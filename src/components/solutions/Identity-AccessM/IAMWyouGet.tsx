import KeyFeatureComp from '@/components/common/KeyFeature '
import React from 'react'

const IAMWyouGet = () => {
  const wygData = [
    { 
      title: "Multi-Factor Authentication (MFA)",
      para: "Strengthen authentication processes and protect against credential-based attacks with our MFA solutions. Implement additional layers of security, such as SMS codes, biometrics, or hardware tokens, to verify user identity."
    },
    { 
      title: "Single Sign-On (SSO)",
      para: "Simplify user authentication and enhance user experience with our SSO solutions. Enable seamless access to multiple applications and resources with a single set of credentials, boosting productivity and security."
    },
    { 
      title: "Identity as a Service (IDaaS)",
      para: "Leverage the benefits of cloud-based identity management with our IDaaS solutions. Enjoy scalability, flexibility, and cost-efficiency while ensuring secure access to cloud applications and services."
    },
    { 
      title: "Privileged Access Management (PAM)",
      para: "Safeguard your most critical assets and privileged accounts with our PAM solutions. Control and monitor access to privileged accounts, enforce least privilege principles, and prevent unauthorized activities."
    },
    { 
      title: "Identity Governance",
      para: "Gain granular control over user identities and permissions with our identity governance solutions. Ensure compliance with regulations and internal policies while minimizing the risk of unauthorized access."
    }
  ]

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          What You Get?
        </h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {wygData.map((wyg) => (
            <div key={wyg.title} className="bg-pink-200 shadow-lg rounded-xl p-6 transition-transform hover:scale-105">
              <KeyFeatureComp title={wyg.title} para={wyg.para} className='bg-white' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IAMWyouGet
