import React from "react";
import { ChipProps } from "./PrimaryChip";

const SuccessChip: React.FC<ChipProps> = ({
  style,  
  label,
  size,
  variant = "primary",
}) => {
  return (
    <>
      <span className={`
        rounded-xl font-bold
        ${size.toLocaleLowerCase() === "s"
            ? "text-3xs px-2 py-1"
            : size.toLocaleLowerCase() === "m"
            ? "text-xs px-2 py-1"
            : size.toLocaleLowerCase() === "xl"
            ? "text-xs py-[6px] px-4"
            : " text-xs py-[6px] px-3"
        }
        ${
            variant?.toLocaleLowerCase() === "fill"
            ? "bg-success-50 text-success-700"
            : variant?.toLocaleLowerCase() === "outline"
            ? "border border-success-700 text-success-700"
            : variant?.toLocaleLowerCase() === "mix"
            ? "border border-success-700 text-success-700 bg-success-50"
            : "bg-success-600 text-grey-aw-50"
        }
        ${style}`}
      >
        {label}
      </span>
    </>
  );
};

export default SuccessChip;
