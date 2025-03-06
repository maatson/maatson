import React from "react";
import { ChipProps } from "./PrimaryChip";

const BlackChip: React.FC<ChipProps> = ({
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
            ? "bg-grey-200 text-grey-ab-300"
            : variant?.toLocaleLowerCase() === "outline"
            ? "border border-grey-ab text-grey-ab"
            : variant?.toLocaleLowerCase() === "mix"
            ? "border border-grey-ab text-grey-ab bg-grey-100"
            : "bg-grey-ab text-grey-aw-50"
        }
        ${style}`}
      >
        {label}
      </span>
    </div>
  );
};

export default BlackChip;
