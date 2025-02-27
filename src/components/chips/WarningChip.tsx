import React from "react";
import { ChipProps } from "./PrimaryChip";

const WarningChip: React.FC<ChipProps> = ({
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
            ? "bg-warning-50 text-warning"
            : variant?.toLocaleLowerCase() === "outline"
            ? "border border-warning text-warning"
            : variant?.toLocaleLowerCase() === "mix"
            ? "border border-warning text-warning bg-warning-50"
            : "bg-warning text-grey-aw-50"
        }
        ${style}`}
      >
        {label}
      </span>
    </div>
  );
};

export default WarningChip;
