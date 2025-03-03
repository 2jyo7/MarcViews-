import Link from "next/link";
import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
  href?: string; // Remove "| '#'" since "#" is already a string
};

const Button = ({ label, onClick, className, href }: ButtonProps) => {
  return href ? (
    <Link href={href}>
      <button
        className={`bg-slate-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ${className}`}
      >
        {label}
      </button>
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`bg-slate-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
