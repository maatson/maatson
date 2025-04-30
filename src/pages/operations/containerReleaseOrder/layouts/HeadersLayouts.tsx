import React from "react";

interface HeadersLayoutProps {
  label: string;
  value: string;
  parentStyle?: string;
  labelStyle?: string;
  valueStyle?: string;
}
const HeadersLayout: React.FC<HeadersLayoutProps> = ({
  label,
  value,
  parentStyle,
  labelStyle,
  valueStyle,
}) => {
  return (
    <>
      <div
        className={`flex gap-2 py-1 text-sm text-grey-ab-800 ${parentStyle}`}
      >
        <p className={`font-bold ${labelStyle}`}>{label}</p>
        <p className={`${valueStyle}`}>{value}</p>
      </div>
    </>
  );
};

export default HeadersLayout;
