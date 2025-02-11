import React from "react";

interface ButtonProps {
  style?: string;
  label: string;
  size: string;
  variant: string;
  disabled?: boolean;
  // Icon?: string;   will exceute later...
}

const PinkButton: React.FC<ButtonProps> = ({
  style,
  label,
  size,
  variant = "primary",
  disabled,
  // Icon,
}) => {
  return (
    <>
      <button
        disabled={disabled}
        className={`
          outline-none  rounded-xs font-semibold disabled:cursor-not-allowed
          ${variant?.toLocaleLowerCase() === "link" ? "" : "shadow-xs"} 
          ${
            size.toLocaleLowerCase() === "s"
              ? "text-xs px-2 py-1"
              : size.toLocaleLowerCase() === "m"
              ? "text-xs px-3 py-2"
              : size.toLocaleLowerCase() === "xl"
              ? "text-base px-4 py-3"
              : "text-sm px-4 py-2"
          } 
          ${
            variant?.toLocaleLowerCase() === "link"
              ? " text-pink hover:text-pink-700 active:text-pink-800  disabled:text-pink-300"
              : variant?.toLocaleLowerCase() === "outline"
              ? "border border-pink text-pink hover:bg-pink-50 active:bg-pink-100 active:text-pink-700  disabled:bg-pink-50 disabled:text-pink-300"
              : variant?.toLocaleLowerCase() === "secondary"
              ? "bg-pink-200 text-pink-900 hover:bg-pink-300 active:bg-pink-400 disabled:bg-pink-50 disabled:text-pink-200"
              : "bg-pink text-grey-50 hover:bg-pink-700 active:bg-pink-800  disabled:bg-pink-50 disabled:text-pink-200"
          }
          ${style} `}
      >
        {label}
      </button>
    </>
  );
};

export default PinkButton;
