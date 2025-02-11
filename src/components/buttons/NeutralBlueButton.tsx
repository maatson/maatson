import React from "react";
import { ButtonProps } from "./PrimaryButton";

const NeutralBlueButton: React.FC<ButtonProps> = ({
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
              ? " text-blue hover:text-blue-700 active:text-blue-800  disabled:text-blue-300"
              : variant?.toLocaleLowerCase() === "outline"
              ? "border border-blue text-blue hover:bg-blue-50 active:bg-blue-100 active:text-blue-700  disabled:bg-blue-50 disabled:text-blue-300"
              : variant?.toLocaleLowerCase() === "secondary"
              ? "bg-blue-200 text-blue-900 hover:bg-blue-300 active:bg-blue-400 disabled:bg-blue-50 disabled:text-blue-200"
              : "bg-blue text-grey-50 hover:bg-blue-700 active:bg-blue-800  disabled:bg-blue-50 disabled:text-blue-200"
          }
          ${style} `}
      >
        {label}
      </button>
    </>
  );
};

export default NeutralBlueButton;
