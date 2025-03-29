import { twMerge } from "tailwind-merge";

const CartCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={twMerge("bg-white shadow-md rounded-2xl p-4", className)}>
      {children}
    </div>
  );
};

export default CartCard;
