import React from "react";
import { ButtonProps } from "./PrimaryButton";

const SuccessButton: React.FC<ButtonProps> = ({
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
          outline-none  rounded-xs font-semibold disabled:cursor-not-allowed flex items-center
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
              ? " text-success-600 hover:text-success-700 active:text-success-800  disabled:text-success-300"
              : variant?.toLocaleLowerCase() === "outline"
              ? "border border-success text-success-600 hover:bg-success-50 active:bg-success-100 active:text-success-700  disabled:bg-success-50 disabled:text-success-300"
              : variant?.toLocaleLowerCase() === "secondary"
              ? "bg-success-200 text-success-900 hover:bg-success-300 active:bg-success-400 disabled:bg-success-50 disabled:text-success-200"
              : "bg-success-600 text-grey-50 hover:bg-success-700 active:bg-success-800  disabled:bg-success-50 disabled:text-success-200"
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

export default SuccessButton;
