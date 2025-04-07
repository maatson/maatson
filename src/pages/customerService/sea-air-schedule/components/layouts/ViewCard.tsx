import React from "react";

const ViewCard: React.FC<{
  label: string;
  value: string | number | any;
  style?: string;
  labelStyle?: string;
  valueStyle?: string;
}> = React.memo(({ label, value, style, labelStyle, valueStyle }) => {
  return (
    <div className={`flex gap-2 text-sm  ${style} `}>
      <p className={`${labelStyle}`}>{label}</p>
      <p className={`${valueStyle}`}>{value}</p>
    </div>
  );
});

export default ViewCard;
