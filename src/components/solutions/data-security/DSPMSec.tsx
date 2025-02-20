import React from "react";

const DSPMSec = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">DSPM Importance</h1>
          <div className="border-t-4 border-pink-600 w-24 mx-auto mt-2"></div>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg max-w-3xl mx-auto space-y-4">
          <p className="text-gray-700 leading-relaxed p-2 border-b-2 border-orange-400">
            Most security technologies protect sensitive data by preventing
            unauthorized access to the network, or by detecting and blocking
            suspicious or malicious behaviors by authorized or unauthorized
            users, APIs, Internet of Things (IoT) devices, or other entities.
          </p>
          <p className="text-gray-700 leading-relaxed p-2 border-b-2 border-pink-400">
            These technologies have transformed data security and threat
            detection and response for the better. But the furious adoption of
            cloud computing, agile cloud-native development, and both artificial
            intelligence (AI) and machine learning (ML) led to data security
            risks and vulnerabilities that these technologies don’t always
            address; which in turn can leave organizations at risk of data
            breaches and regulatory compliance violations.
          </p>
          <p className="text-gray-700 leading-relaxed p-2 border-b-2 border-lime-400">
            Chief among these data risks is shadow data—data backed up, copied,
            or replicated to a data store that’s not monitored, managed, or
            governed by the same security teams, policies, or controls as the
            original data.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The demand for data for AI or ML modeling also contributes to shadow
            data, as organizations expand data access to more users who possess
            less understanding of proper data security and governance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DSPMSec;
