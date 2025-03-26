"use client";
import Button from "@/components/common/Button ";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";

interface AppointmentsCardProps {
  title: string;
  time: string;
  price: string;
  para: string;
  share: string;
  imgUrl: string;
}

const AppointmentsCard: React.FC<AppointmentsCardProps> = ({
  title,
  time,
  price,
  para,
  imgUrl,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-md mx-auto">
      <div className="relative">
        <Image
          width={350}
          height={350}
          src={imgUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-center items-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{time}</p>
        <p className="text-gray-800 font-bold">{price}</p>

        {/* Social Media Share Icons */}
        <div className="mt-3 flex gap-3 text-lg">
          <Link
            href={`https://www.facebook.com/`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebook />
          </Link>
          <Link
            href={`https://twitter.com/`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <FaTwitter />
          </Link>
        </div>

        {!isExpanded ? (
          <Button
            onClick={() => setIsExpanded(true)}
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            label="View Details"
          />
        ) : (
          <div className="mt-4">
            <p className="text-gray-700">{para}</p>
            <div className="mt-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Select a date:
              </label>
              <input
                type="date"
                value={selectedDate || ""}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>{" "}
            <div className="mt-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Select a date:
              </label>
              <input
                type="time"
                value={selectedTime || ""}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <button
                className="mt-3 w-full md:w-96 bg-gray-600 text-white px-4 py-2 rounded hover:bg-pink-700"
                disabled={!selectedDate || !selectedTime}
              >
                Confirm Booking
              </button>
              <button
                onClick={() => setIsExpanded(false)}
                className="mt-3 w-full md:w-96 bg-pink-600 text-white px-4 py-2 rounded outline-none
               hover:bg-black hover:outline-black  transition-all"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentsCard;
