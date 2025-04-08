import Link from "next/link";
import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
  href?: string;
};

const Button = ({ label, onClick, className = "", href }: ButtonProps) => {
  const baseClasses = `bg-slate-700 text-white font-semibold py-2 px-6 rounded-lg 
    transition-all duration-200 ease-in-out
    hover:bg-pink-800 active:scale-95 hover:outline-blue-700 hover:translate-y-2
    outline-none focus:ring-2 focus:ring-pink-400`;

  const finalClass = `${baseClasses} ${className}`;

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
