import React from "react";
import { ButtonProps } from "./PrimaryButton";

const ErrorButton: React.FC<ButtonProps> = ({
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
              ? " text-error hover:text-error-700 active:text-error-800  disabled:text-error-300"
              : variant?.toLocaleLowerCase() === "outline"
              ? "border border-error text-error hover:bg-error-50 active:bg-error-100 active:text-error-700  disabled:bg-error-50 disabled:text-error-300"
              : variant?.toLocaleLowerCase() === "secondary"
              ? "bg-error-200 text-error-900 hover:bg-error-300 active:bg-error-400 active:text-error-900 disabled:bg-error-50 disabled:text-error-200"
              : "bg-error text-grey-50 hover:bg-error-700 active:bg-error-800   disabled:bg-error-50 disabled:text-error-200"
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

export default ErrorButton;
