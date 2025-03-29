import { twMerge } from "tailwind-merge";

const CartContentCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={twMerge("p-4", className)}>{children}</div>;
};

export default CartContentCard;
