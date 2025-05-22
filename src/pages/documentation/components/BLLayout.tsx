import React from "react";

interface BLLayoutProps {
  label: string;
  value: string;
  parentStyle?: string;
  labelStyle?: string;
  valueStyle?: string;
}

const BLLayout: React.FC<BLLayoutProps> = ({
  label,
  value,
  parentStyle,
  labelStyle,
  valueStyle,
}) => {
  return (
    <div className={`flex flex-col gap-2 p-1 max-w-[240px] ${parentStyle}`}>
      <p className={`text-xs text-grey-ab-300 ${labelStyle}`}>{label}</p>
      <p className={`text-sm  text-grey-ab-900 ${valueStyle}`}>
        {value}
      </p>
    </div>
  );
};

export default BLLayout;
