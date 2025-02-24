import React from "react";
import { ButtonProps } from "./PrimaryButton";

const WarningButton: React.FC<ButtonProps> = ({
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
              ? " text-warning-600 hover:text-warning-700 active:text-warning-800  disabled:text-warning-300"
              : variant?.toLocaleLowerCase() === "outline"
              ? "border border-warning text-warning-600 hover:bg-warning-50 active:bg-warning-100 active:text-warning-700  disabled:bg-warning-50 disabled:text-warning-300"
              : variant?.toLocaleLowerCase() === "secondary"
              ? "bg-warning-200 text-warning-900 hover:bg-warning-300 active:bg-warning-400 disabled:bg-warning-50 disabled:text-warning-200"
              : "bg-warning text-grey-50 hover:bg-warning-700 active:bg-warning-800  disabled:bg-warning-50 disabled:text-warning-200"
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

export default WarningButton;
