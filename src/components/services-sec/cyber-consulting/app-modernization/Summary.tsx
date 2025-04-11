import Button from "@/components/common/Button ";
import React from "react";

const Summary = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title */}
        <h2 className="heading-style text-bg-style">Summary and Next Steps</h2>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed mb-8 text-center ">
          <p>
            The decision to modernize existing business-critical applications is
            the right one. However, the right strategy can make the difference
            between a successful migration or an unmanageable backlog of issues
            as you move toward a cloud-native architecture.
          </p>
          <p className="mt-4">
            Our expert team can help your organization to modernize
            applications.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button label="Request a Consultation" href="/contact-us" />
        </div>
      </div>
    </section>
  );
};

export default Summary;
