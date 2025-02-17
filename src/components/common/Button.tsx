import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};
const Button = ({ label, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-slate-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
