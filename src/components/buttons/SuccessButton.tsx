import React from "react";

interface ButtonProps {
  style?: string;
  label: string;
  size: string;
  variant: string;
  disabled?: boolean;
  // Icon?: string;   will exceute later...
}

const SuccessButton: React.FC<ButtonProps> = ({
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
              ? " text-success-600 hover:text-success-700 active:text-success-800  disabled:text-success-300"
              : variant?.toLocaleLowerCase() === "outline"
              ? "border border-success text-success-600 hover:bg-success-50 active:bg-success-100 active:text-success-700  disabled:bg-success-50 disabled:text-success-300"
              : variant?.toLocaleLowerCase() === "secondary"
              ? "bg-success-200 text-success-900 hover:bg-success-300 active:bg-success-400 disabled:bg-success-50 disabled:text-success-200"
              : "bg-success-600 text-grey-50 hover:bg-success-700 active:bg-success-800  disabled:bg-success-50 disabled:text-success-200"
          }
          ${style} `}
      >
        {label}
      </button>
    </>
  );
};

export default SuccessButton;
