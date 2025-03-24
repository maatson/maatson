import React from "react";

export interface ChipProps {
  style?: string;
  label: string;
  size: string;
  variant: string;
  leftIcon?: React.ReactNode;
}

const PrimaryChip: React.FC<ChipProps> = ({
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
            ? "bg-primary-50 text-primary"
            : variant?.toLocaleLowerCase() === "outline"
            ? "border border-primary text-primary"
            : variant?.toLocaleLowerCase() === "mix"
            ? "border border-primary text-primary bg-primary-50"
            : "bg-primary text-grey-aw-50"
        }
        ${style} flex items-center justify-between gap-2`}
      >
        {leftIcon && <div>{leftIcon}</div>}
        <span> {label}</span>
      </span>
    </div>
  );
};

export default PrimaryChip;
