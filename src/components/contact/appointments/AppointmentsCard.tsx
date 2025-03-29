"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import { useCart } from "@/context/CartContext ";
import Button from "@/components/common/Button ";

interface AppointmentsCardProps {
  id: string;
  title: string;
  time: string;
  price: string;
  para: string;
  imgUrl: string;
  isActive: boolean;
  onExpand: () => void;
  onClose: () => void;
}

const AppointmentsCard: React.FC<AppointmentsCardProps> = ({
  id,
  title,
  time,
  price,
  para,
  imgUrl,
  isActive,
  onExpand,
  onClose,
}) => {
  const router = useRouter();
  const { addToCart } = useCart();

  // State for date and time selection
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time for your appointment.");
      return;
    }

    const appointment = {
      id,
      service: title,
      date: selectedDate,
      time: selectedTime,
      imgUrl,
      price,
    };

    addToCart(appointment);
    router.push("/cart-services"); // Navigate to cart page
  };

  return (
    <div
      className={`bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 ${
        isActive ? "relative z-10 scale-105" : ""
      }`}
    >
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
        <p className="text-gray-800 font-bold">
          {isNaN(Number(price)) ? price : `C$${price}`}
        </p>

        <div className="mt-3 flex gap-3 text-lg">
          <Link
            href="https://www.facebook.com/"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://twitter.com/"
            className="text-blue-400 hover:text-blue-600"
          >
            <FaTwitter />
          </Link>
        </div>

        {!isActive ? (
          <Button
            onClick={onExpand}
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            label="View Details"
          />
        ) : (
          <div className="mt-4 w-full bg-gray-100 p-4 rounded">
            <p className="text-gray-700">{para}</p>

            {/* Date Selection */}
            <div className="mt-3">
              <label className="block text-gray-700 font-medium">
                Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            {/* Time Selection */}
            <div className="mt-3">
              <label className="block text-gray-700 font-medium">
                Select Time
              </label>
              <input
                type="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <Button
              onClick={handleBooking}
              className="mt-3 w-full bg-gray-600 text-white px-4 py-2 rounded hover:bg-pink-700"
              label="Confirm Booking"
            />
            <button
              onClick={onClose}
              className="mt-3 w-full bg-pink-600 text-white px-4 py-2 rounded hover:bg-black"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentsCard;
