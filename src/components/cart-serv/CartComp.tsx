"use client";
import Image from "next/image";
import Button from "../common/Button";
import { useCart } from "@/context/CartContext ";
import { useAuth } from "@/context/AuthContext ";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/login-signup");
    return null;
  }

  const totalPrice = cart.reduce((acc, appt) => {
    const numericPrice = parseFloat(appt.price.replace(/[^0-9.]/g, "")) || 0;
    return acc + numericPrice * appt.quantity;
  }, 0);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-center sm:text-left">
          Your Cart
        </h2>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">No appointments added.</p>
        ) : (
          cart.map((appt) => (
            <div
              key={appt.id}
              className="mb-4 p-4 flex flex-col sm:flex-row items-center sm:justify-between border rounded-lg"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <Image
                  src={appt.imgUrl}
                  alt={appt.service}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div>
                  <p className="font-medium">
                    {appt.service}{" "}
                    <span className="text-gray-500">x{appt.quantity}</span>
                  </p>
                  <p className="text-gray-600 text-sm">
                    {appt.date} at {appt.time}
                  </p>
                  <p className="font-bold">
                    {isNaN(totalPrice)
                      ? "Varies"
                      : `$${(
                          appt.quantity *
                          parseFloat(appt.price.replace(/[^0-9.]/g, ""))
                        ).toFixed(2)}`}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-3 sm:mt-0">
                <Button onClick={() => decreaseQuantity(appt.id)} label="-" />
                <Button onClick={() => increaseQuantity(appt.id)} label="+" />
                <Button
                  onClick={() => removeFromCart(appt.id)}
                  label="Remove"
                />
              </div>
            </div>
          ))
        )}

        {cart.length > 0 && (
          <div className="mt-4 sticky bottom-0 bg-white p-4 shadow-md text-center sm:text-right">
            <p className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</p>
            <Button
              className="w-full sm:w-auto mt-2"
              onClick={() => alert("Booking Confirmed!")}
              label="Confirm Booking"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
