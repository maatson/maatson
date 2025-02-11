import React from "react";
import { ButtonProps } from "./PrimaryButton";

const SecondaryButton: React.FC<ButtonProps> = ({
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
             ? " text-secondary hover:text-secondary-600 active:text-secondary-700  disabled:text-secondary-300"
             : variant?.toLocaleLowerCase() === "outline"
             ? "border border-secondary text-secondary hover:bg-secondary-50 active:bg-secondary-100 active:text-secondary-600  disabled:bg-secondary-50 disabled:text-secondary-300"
             : variant?.toLocaleLowerCase() === "secondary"
             ? "bg-secondary-200 text-secondary-900 hover:bg-secondary-300 active:bg-secondary-400  disabled:bg-secondary-50 disabled:text-secondary-300 "
             : "bg-secondary hover:bg-secondary-600 active:bg-secondary-700   disabled:bg-secondary-200 disabled:text-grey-ab-200 text-secondary-900"
         }
         ${style}  `}
      >
        {label}
      </button>
    </>
  );
};

export default SecondaryButton;
