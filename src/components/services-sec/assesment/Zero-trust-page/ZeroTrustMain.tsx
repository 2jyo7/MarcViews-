import PopUpEffect from "@/components/common/PopUpEffect ";
import React from "react";

const ZeroTrustMain = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Benefits Section */}
      <div className="mb-12 px-4 sm:px-6 lg:px-10">
        <h1 className="title-style">Benefits</h1>
        <ul className="space-y-4 text-gray-700 dark:text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-pink-600 font-semibold text-xl">✔</span>
            <PopUpEffect>
              <p>
                <strong>Identify the crown jewels:</strong> If you’re just
                beginning, we’ll help you identify high-priority areas for
                protection.
              </p>
            </PopUpEffect>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-pink-600 font-semibold text-xl">✔</span>
            <PopUpEffect>
              <p>
                <strong>Assess your current state:</strong> We’ll review your
                existing identity and access control environment and policies to
                determine how they fit in a Zero Trust framework.
              </p>
            </PopUpEffect>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-pink-600 font-semibold text-xl">✔</span>
            <PopUpEffect>
              <p>
                <strong>Visualize what’s next:</strong> We’ll help you
                prioritize Zero Trust implementation milestones to align with
                business objectives.
              </p>
            </PopUpEffect>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-pink-600 font-semibold text-xl">✔</span>
            <PopUpEffect>
              <p>
                <strong>Plan the deployment:</strong> Receive a detailed plan
                with defined next steps for implementation readiness and actual
                deployment.
              </p>{" "}
            </PopUpEffect>
          </li>
        </ul>
      </div>

      {/* Delivery Section */}
      <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg px-4 sm:px-6 lg:px-10">
        <h1 className="title-style">Delivery</h1>
        <ul className="space-y-4 text-gray-700 dark:text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-semibold text-xl">🚀</span>
            <PopUpEffect>
              <p>
                <strong>Engagement planning:</strong> The MarcViews team
                prepares for success with in-depth planning, up to 1-2 weeks
                before our onsite time. With a firm plan in hand, we’ll spend
                one to two days onsite, working with you to review and assess
                your security architecture and analyze Zero Trust maturity.
              </p>
            </PopUpEffect>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-semibold text-xl">📊</span>
            <PopUpEffect>
              <p>
                <strong>Post-visit analysis:</strong> Our experts will analyze
                findings and present recommendations. This can take up to 3
                weeks, depending on the complexity of your architecture.
              </p>{" "}
            </PopUpEffect>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ZeroTrustMain;
