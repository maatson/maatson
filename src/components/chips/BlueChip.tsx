import React from "react";
import { ChipProps } from "./PrimaryChip";

const BlueChip: React.FC<ChipProps> = ({
  style,
  label,
  size,
  variant = "primary",
  leftIcon,
}) => {
  return (
    <div>
      <span
        className={`
        rounded-xl font-bold
        ${
          size.toLocaleLowerCase() === "s"
            ? "text-2xs px-2 py-1"
            : size.toLocaleLowerCase() === "m"
            ? "text-xs px-2 py-1"
            : size.toLocaleLowerCase() === "xl"
            ? "text-xs py-[6px] px-4"
            : " text-xs py-[6px] px-3"
        }
        ${
          variant?.toLocaleLowerCase() === "fill"
            ? "bg-blue-50 text-blue"
            : variant?.toLocaleLowerCase() === "outline"
            ? "border border-blue text-blue"
            : variant?.toLocaleLowerCase() === "mix"
            ? "border border-blue text-blue bg-blue-50"
            : "bg-blue text-grey-aw-50"
        }
        ${style} ${leftIcon && " flex items-center justify-between gap-2 "}`}
      >
        {leftIcon && <div>{leftIcon}</div>}
        <span> {label}</span>
      </span>
    </div>
  );
};

export default BlueChip;
