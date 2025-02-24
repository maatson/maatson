import React from "react";
import { ButtonProps } from "./PrimaryButton";

const NeutralBlueButton: React.FC<ButtonProps> = ({
  style,
  label,
  size = "l",
  variant = "primary",
  disabled,
  leftIcon,
  rightIcon,
  // Icon,
}) => {
  return (
    <>
      <button
        disabled={disabled}
        className={`
          outline-none  rounded-xs font-semibold disabled:cursor-not-allowed flex items-center justify-center
          ${variant?.toLocaleLowerCase() === "link" ? "" : "shadow-xs"} 
          ${
            size.toLocaleLowerCase() === "s"
              ? "text-xs px-2 py-1 gap-2"
              : size.toLocaleLowerCase() === "m"
              ? "text-xs px-3 py-2 gap-2"
              : size.toLocaleLowerCase() === "xl"
              ? "text-base px-4 py-3 gap-4"
              : "text-sm px-4 py-2 gap-3"
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
        {leftIcon && <div>{leftIcon}</div>}
        {label}
        {rightIcon && <div>{rightIcon}</div>}
      </button>
    </>
  );
};

export default NeutralBlueButton;
