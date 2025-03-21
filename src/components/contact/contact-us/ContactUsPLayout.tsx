"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "@/components/common/Button ";

interface ContactUsProps {
  title: string;
  contacts: {
    name: string;
    email: string;
    phone: string;
    address: string;
    hoursTitle: string;
    hours: string[];
    buttonText: string;
    whatsappLink?: string;
    imgUrl: string;
  }[];
}

const ContactUsPLayout: React.FC<ContactUsProps> = ({ title, contacts }) => {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-300 text-gray-900 rounded-xl">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{title}</h2>
      </div>
      <div className="flex flex-col justify-center p-8 md:p-12 gap-8 max-w-5xl mx-auto">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <Image
              src={contact.imgUrl}
              alt={contact.name}
              className="w-24 h-24 rounded-full mb-4 shadow-md"
              width={300}
              height={300}
            />
            <h3 className="text-2xl font-semibold mb-2">{contact.name}</h3>
            <p className="text-gray-700">📍 {contact.address}</p>
            <p className="text-gray-700">📞 {contact.phone}</p>

            {/* Dropdown for Business Hours */}
            <div className="mt-4">
              <h4
                className="font-semibold cursor-pointer text-blue-500"
                onClick={() => setIsOpen(isOpen === index ? null : index)}
              >
                {contact.hoursTitle} {isOpen === index ? "▲" : "▼"}
              </h4>
              {isOpen === index && (
                <ul className="text-gray-600 mt-2 bg-gray-200 p-3 rounded-md">
                  {contact.hours.map((hour, idx) => (
                    <li key={idx}>{hour}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Button to Open Contact Form */}
            <div className="mt-4 flex gap-2">
              <Button
                onClick={() => setShowForm(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
                label={contact.buttonText}
              />

              {contact.whatsappLink && (
                <a
                  href={contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
                >
                  WhatsApp
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 mb-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 mb-2 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 mb-2 border border-gray-300 rounded"
                rows={4}
              />
              <Button
                className="w-full px-4 py-2 shadow-md "
                label="Send Message"
              />
            </form>
            <Button
              onClick={() => setShowForm(false)}
              className="mt-4 w-full px-4 py-2 "
              label=" Close"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactUsPLayout;
