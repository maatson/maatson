import React from "react";
import { ChipProps } from "./PrimaryChip";

const TertiaryChip: React.FC<ChipProps> = ({
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
            ? "bg-tertiary-50 text-tertiary"
            : variant?.toLocaleLowerCase() === "outline"
            ? "border border-tertiary text-tertiary"
            : variant?.toLocaleLowerCase() === "mix"
            ? "border border-tertiary text-tertiary bg-tertiary-50"
            : "bg-tertiary text-grey-aw-50"
        }
        ${style}`}
      >
        {label}
      </span>
    </div>
  );
};

export default TertiaryChip;
