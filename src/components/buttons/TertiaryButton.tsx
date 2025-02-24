import React from "react";
import { ButtonProps } from "./PrimaryButton";

const TertiaryButton: React.FC<ButtonProps> = ({
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
              ? " text-tertiary hover:text-tertiary-600 active:text-tertiary-700  disabled:text-tertiary-300"
              : variant?.toLocaleLowerCase() === "outline"
              ? "border border-tertiary text-tertiary hover:bg-tertiary-50 active:bg-tertiary-100 active:text-tertiary-600  disabled:bg-tertiary-50 disabled:tertiary-pink-300"
              : variant?.toLocaleLowerCase() === "secondary"
              ? "bg-tertiary-200 text-tertiary-800 hover:bg-tertiary-300 active:bg-tertiary-400 active:text-tertiary-900 disabled:bg-tertiary-50 disabled:text-tertiary-200"
              : "bg-tertiary text-grey-50 hover:bg-tertiary-600 active:bg-tertiary-700  disabled:bg-tertiary-50 disabled:text-grey-ab-200"
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

export default TertiaryButton;
