import CardComp from "@/components/common/CardDesign/Card1 ";
import React from "react";

const CEventsUpcomingInt = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 ">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-4">
          Past Events
        </h1>
        <div className="border-t-4 border-pink-700 w-24 mx-auto mb-8"></div>
        <div className="flex justify-center">
          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex justify-center">
            <CardComp
              imgUrl="https://plus.unsplash.com/premium_photo-1700830193290-e4c18077569b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmV0d29yayUyMHNlY3VyaXR5JTIwZXZlbnRzfGVufDB8fDB8fHww"
              title="Network Security Events"
              para="Join industry leaders and experts as they discuss the latest trends and strategies in network security. Stay ahead with cutting-edge insights and hands-on sessions."
              href="https://www.linkedin.com/company/marcviews/about/?viewAsMember=true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEventsUpcomingInt;
