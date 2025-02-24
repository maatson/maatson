import React from "react";
import { ButtonProps } from "./PrimaryButton";

const GreyButton: React.FC<ButtonProps> = ({
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
            variant?.toLocaleLowerCase() === "secondary"
              ? "bg-grey-100 text-grey-ab-500 hover:bg-grey-200 active:bg-grey-400 disabled:bg-grey-200 disabled:text-grey-ab-200"
              : "bg-grey-aw-50 text-grey-ab-400 hover:bg-grey-aw-100 active:bg-grey-aw-300 active:text-grey-ab-500  disabled:bg-grey-100 disabled:text-grey-ab-100"
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

export default GreyButton;
