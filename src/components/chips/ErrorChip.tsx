import React from "react";
import { ChipProps } from "./PrimaryChip";

const ErrorChip: React.FC<ChipProps> = ({
  style,  
  label,
  size,
  variant = "primary",
}) => {
  return (
    <div>
      <span className={`
        rounded-xl font-bold
        ${size.toLocaleLowerCase() === "s"
            ? "text-2xs px-2 py-1"
            : size.toLocaleLowerCase() === "m"
            ? "text-xs px-2 py-1"
            : size.toLocaleLowerCase() === "xl"
            ? "text-xs py-[6px] px-4"
            : " text-xs py-[6px] px-3"
        }
        ${
            variant?.toLocaleLowerCase() === "fill"
            ? "bg-error-50 text-error"
            : variant?.toLocaleLowerCase() === "outline"
            ? "border border-error text-error"
            : variant?.toLocaleLowerCase() === "mix"
            ? "border border-error text-error bg-error-50"
            : "bg-error text-grey-aw-50"
        }
        ${style}`}
      >
        {label}
      </span>
    </div>
  );
};

export default ErrorChip;
