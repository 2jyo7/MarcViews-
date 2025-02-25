import Button from '@/components/common/Button '
import React from 'react'

const IAMMI = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl">
        <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
            Managed Identity &#40;Intra ID, MS365, & Google Workspace&#41;
          </h1>
          <div className="space-y-6 text-gray-700">
            <div className="text-lg leading-relaxed">
              <p className="mb-4">
                <span className="font-semibold text-gray-900">Secure Your Digital Identity&colon;</span>  
                In today&apos;s digital landscape, managing and protecting user identities and access is more crucial than ever. We specialize in providing precise solutions for managing identity and access. Our solutions are tailored to meet your organization's unique identity and access management requirements.
              </p>
              <p>
                <span className="font-semibold text-gray-900">Simplify identity management</span>, ensure security, and improve compliance in Active Directory, Microsoft 365, and Google Workspace environments with our services.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">A Unified IAM Service&colon;</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Managed identities</li>
                <li>Secure access</li>
                <li>Ensure compliance</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <Button label="Talk To Product Consultation" className="px-6 py-3 text-white font-medium rounded-lg transition duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default IAMMI
