import React from "react";

interface ButtonProps {
  style?: string;
  label: string;
  size: string;
  variant: string;
  disabled?: boolean;
  // Icon?: string;   will exceute later...
}

const TertiaryButton: React.FC<ButtonProps> = ({
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
              ? " text-tertiary hover:text-tertiary-600 active:text-tertiary-700  disabled:text-tertiary-300"
              : variant?.toLocaleLowerCase() === "outline"
              ? "border border-tertiary text-tertiary hover:bg-tertiary-50 active:bg-tertiary-100 active:text-tertiary-600  disabled:bg-tertiary-50 disabled:tertiary-pink-300"
              : variant?.toLocaleLowerCase() === "secondary"
              ? "bg-tertiary-200 text-tertiary-800 hover:bg-tertiary-300 active:bg-tertiary-400 active:text-tertiary-900 disabled:bg-tertiary-50 disabled:text-tertiary-200"
              : "bg-tertiary text-grey-50 hover:bg-tertiary-600 active:bg-tertiary-700  disabled:bg-tertiary-50 disabled:text-grey-ab-200"
          }
          ${style} `}
      >
        {label}
      </button>
    </>
  );
};

export default TertiaryButton;
