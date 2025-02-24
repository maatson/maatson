import React from "react";

export interface ButtonProps {
  style?: string;
  label: string;
  size: string;
  variant: string;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  // Icon?: string;   will exceute later...
}

const PrimaryButton: React.FC<ButtonProps> = ({
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
              ? " text-primary hover:text-primary-600 active:text-primary-700  disabled:text-primary-300"
              : variant?.toLocaleLowerCase() === "outline"
              ? "border border-primary text-primary hover:bg-primary-50 active:bg-primary-100 active:text-primary-700  disabled:bg-primary-50 disabled:text-primary-300"
              : variant?.toLocaleLowerCase() === "secondary"
              ? "bg-primary-200 text-primary hover:bg-primary-50 active:bg-primary-100 active:text-primary-700 disabled:bg-primary-300 "
              : "bg-primary hover:bg-primary-600 active:bg-primary-700   disabled:bg-primary-200 text-grey-50"
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

export default PrimaryButton;
