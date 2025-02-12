import React from "react";
import { ChipProps } from "./PrimaryChip";

const NormalChip: React.FC<ChipProps> = ({
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
            ? "text-3xs px-2 py-1"
            : size.toLocaleLowerCase() === "m"
            ? "text-xs px-2 py-1"
            : size.toLocaleLowerCase() === "xl"
            ? "text-xs py-[6px] px-4"
            : " text-xs py-[6px] px-3"
        }
        ${
            variant?.toLocaleLowerCase() === "fill"
            ? "bg-grey text-grey-ab-300"
            : variant?.toLocaleLowerCase() === "outline"
            ? "border border-grey-ab-300 text-grey-ab-300"
            : variant?.toLocaleLowerCase() === "mix"
            ? "border border-grey-ab-100 text-grey-ab-300 bg-grey"
            : "bg-grey-ab-300 text-grey-50"
        }
        ${style}`}
      >
        {label}
      </span>
    </div>
  );
};

export default NormalChip;
