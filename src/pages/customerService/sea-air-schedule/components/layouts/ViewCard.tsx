import React from "react";

const ViewCard: React.FC<{
  label: string;
  value: string | number | React.ReactNode;
  style?: string;
  labelStyle?: string;
  valueStyle?: string;
}> = React.memo(({ label, value, style, labelStyle, valueStyle }) => {
  return (
    <div className={`flex gap-2 text-sm  ${style} `}>
      <p className={`${labelStyle}`}>{label}</p>
      <div className={`capitalize ${valueStyle}`}>{value}</div>
    </div>
  );
});

export default ViewCard;
