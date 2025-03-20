import Button from "@/components/common/Button ";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PayHereIntro = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          Make the payment here!
        </h1>
        <div className="w-20 mx-auto mt-2 border-t-4 border-pink-700"></div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Payment Option 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center shadow-black/50">
            <Image
              src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/QR%20code%20Online%20payment-438ff86.png/:/cr=t:3.5%25,l:0%25,w:100%25,h:93%25/rs=w:365,h:486.6666666666667,cg:true"
              alt="Online Payment QR Code"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <h2 className="mt-4 text-xl font-semibold text-gray-700">
              Online Payment
            </h2>
            <Link
              href="https://pay.marcviews.com/"
              className="mt-2 text-blue-600 underline hover:text-blue-800"
            >
              https://pay.marcviews.com/
            </Link>
            <Button label="Scan/Continue to pay" className="mt-5 " />
          </div>

          {/* Payment Option 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center shadow-gray-800/50">
            <Image
              src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_8033.JPG/:/cr=t:19.24%25,l:0%25,w:100%25,h:61.51%25/rs=w:365,h:487,cg:true/qt=q:32"
              alt="PayPal Payment"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <h2 className="mt-4 text-xl font-semibold text-gray-700">
              PayPal Payment
            </h2>
            <p className="mt-2 text-gray-600">Pay using PayPal Account</p>
            <Button label="SCAN to pay" className="mt-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayHereIntro;
