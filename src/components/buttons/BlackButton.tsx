import React from "react";
import { ButtonProps } from "./PrimaryButton";

const BlackButton: React.FC<ButtonProps> = ({
  style,
  label,
  size = "l",
  variant = "primary",
  disabled,
  rightIcon,
  leftIcon,
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
              ? " text-grey-ab hover:text-grey-ab-700 active:text-grey-ab-800  disabled:text-grey-ab-300"
              : variant?.toLocaleLowerCase() === "outline"
              ? "border border-grey-ab text-grey-ab hover:bg-grey-200 active:bg-grey-ab-100 active:text-grey-ab-700  disabled:bg-grey-200 disabled:text-grey-ab-300"
              : variant?.toLocaleLowerCase() === "secondary"
              ? "bg-grey-ab-200 text-grey-ab-900 hover:bg-grey-ab-300 active:bg-grey-ab-400 active:text-grey-200 disabled:bg-grey-200 disabled:text-grey-ab-200"
              : "bg-grey-ab text-grey-200 hover:bg-grey-ab-700 active:bg-grey-ab-800  disabled:bg-grey-200 disabled:text-grey-ab-200"
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

export default BlackButton;
