import React from "react";
import ContactUs from "./ContactUsPLayout";

const ContactUsPageSec = () => {
  const cuPageDatas = [
    {
      title: "Toronto, Canada (HQ)",
      contacts: {
        name: "MarcViews Networks",
        email: "contact@marcviews.com",
        phone: " +1-416-820-0689",
        address:
          "111 Queen St. East, South Building, Suite 450, Toronto, M5C 1S2",
        hoursTitle: "All times are in EST",
        hours: [
          "Mon - By Appointment",
          "Tue - By Appointment",
          "Wed - By Appointment",
          "Thu - By Appointment",
          "Fri - By Appointment",
          "Sat - By Appointment",
          "Sun - Closed",
        ],
        buttonText: "Inquiries",
        imgUrl:
          "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_6253.jpg/:/cr=t:36.14%25,l:6.71%25,w:73.53%25,h:49.02%25/rs=w:2320,h:1160",
      },
    },
    {
      title: "Mississauga, ON",
      contacts: {
        name: "MarcViews Networks",
        email: "contact@marcviews.com",
        phone: " +1-416-820-0689",
        address: "90 Burnhamthorpe Road West, Suite 1400, Mississauga, ON",
        hoursTitle: "All times are in EST",
        hours: [
          "Mon - By Appointment",
          "Tue - By Appointment",
          "Wed - By Appointment",
          "Thu - By Appointment",
          "Fri - By Appointment",
          "Sat - By Appointment",
          "Sun - Closed",
        ],
        buttonText: "Inquiries",
        imgUrl:
          "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5063.jpg/:/cr=t:0%25,l:10.66%25,w:78.68%25,h:100%25/rs=w:1160,h:580/qt=q:69",
      },
    },
    {
      title: "Service Delivery Center - Noida, UP, India",
      contacts: {
        name: "MarcViews Networks",
        email: "sails@marcviews.com",
        phone: " +1-416-820-0689",
        whatsappLink:
          "https://api.whatsapp.com/send/?phone=14168200689&text&type=phone_number&app_absent=0",
        address:
          "Suite 004, B-41, S3V Business Park, Sector 63, Noida, Gautam Buddha Nagar, Uttar Pradesh, India",
        hoursTitle: "All times are in EST",
        hours: [
          "Mon - By Appointment",
          "Tue - By Appointment",
          "Wed - By Appointment",
          "Thu - By Appointment",
          "Fri - By Appointment",
          "Sat - By Appointment",
          "Sun - Closed",
        ],
        buttonText: "Inquiries",
        imgUrl:
          "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_5568.jpg/:/cr=t:6.27%25,l:0%25,w:93.73%25,h:93.73%25/rs=w:1160,h:619/qt=q:69",
      },
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gray-100 text-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
      </div>

      {cuPageDatas.map((location, index) => (
        <ContactUs
          key={index}
          title={location.title}
          contacts={[location.contacts]}
        />
      ))}
    </section>
  );
};

export default ContactUsPageSec;
