import React from "react";
import { ChipProps } from "./PrimaryChip";

const SecondaryChip: React.FC<ChipProps> = ({
  style,
  label,
  size,
  leftIcon,

  variant = "primary",
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
            ? "bg-secondary-50 text-secondary"
            : variant?.toLocaleLowerCase() === "outline"
            ? "border border-secondary text-secondary"
            : variant?.toLocaleLowerCase() === "mix"
            ? "border border-secondary text-secondary bg-secondary-50"
            : "bg-secondary text-grey-aw-50"
        }
        ${style} flex items-center justify-between gap-2`}
      >
        {leftIcon && <div>{leftIcon}</div>}
        <span> {label}</span>{" "}
      </span>
    </div>
  );
};

export default SecondaryChip;
