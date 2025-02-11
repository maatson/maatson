import React from "react";

interface ButtonProps {
  style?: string;
  label: string;
  size: string;
  variant: string;
  disabled?: boolean;
  // Icon?: string;   will exceute later...
}

const PrimaryButton: React.FC<ButtonProps> = ({
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
          outline-none  rounded-xs font-semibold
          ${variant?.toLocaleLowerCase() === "link" ? "" : "shadow-xs"} 
        ${
          variant?.toLocaleLowerCase() === "link"
            ? " text-primary hover:text-primary-600 active:text-primary-700  disabled:text-primary-300"
            : variant?.toLocaleLowerCase() === "outline"
            ? "border border-primary text-primary hover:bg-primary-50 active:bg-primary-100 active:text-primary-700  disabled:bg-primary-50 disabled:text-primary-300"
            : variant?.toLocaleLowerCase() === "secondary"
            ? "bg-primary-200 text-primary hover:bg-primary-50 active:bg-primary-100 active:text-primary-700 disabled:bg-primary-300 "
            : "bg-primary hover:bg-primary-600 active:bg-primary-700   disabled:bg-primary-200 text-grey-50"
        }
         ${
           size.toLocaleLowerCase() === "s"
             ? "text-xs px-2 py-1"
             : size.toLocaleLowerCase() === "m"
             ? "text-xs px-3 py-2"
             : size.toLocaleLowerCase() === "xl"
             ? "text-base px-4 py-3"
             : "text-sm px-4 py-2"
         } 
         ${style} `}
      >
        {label}
      </button>
    </>
  );
};

export default PrimaryButton;
