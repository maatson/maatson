import React from "react";
import { ChipProps } from "./PrimaryChip";

const GradientChip: React.FC<ChipProps> = ({
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
            ? "bg-primary-gradient-1 text-primary-600"
            : variant?.toLocaleLowerCase() === "mix"
            ? "border border-primary-600 text-primary-600 bg-primary-gradient-1"
            : "bg-primary-gradient-5 text-grey-aw-50"
        }
        ${style}`}
      >
        {label}
      </span>
    </>
  );
};

export default GradientChip;
