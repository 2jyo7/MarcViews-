import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
  href?: string;
};

const Button = ({ label, onClick, className = "", href }: ButtonProps) => {
  const baseClasses = `bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg 
    transition-all duration-200 ease-in-out border border-white shadow-md shadow-gray-700
    hover:bg-pink-800 active:scale-95 hover:outline-blue-700 hover:translate-y-2
    outline-none focus:ring-2 focus:ring-pink-400`;

  const finalClass = twMerge(baseClasses, className);

  return href ? (
    <Link href={href}>
      <button className={finalClass} onClick={onClick}>
        {label}
      </button>
    </Link>
  ) : (
    <button className={finalClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
