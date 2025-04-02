import React from "react";

const ViewCard: React.FC<{
  label: string;
  value: string | number;
  style?: string;
  labelStyle?: string;
  valueStyle?: string;
}> = React.memo(({ label, value, style, labelStyle, valueStyle }) => {
  return (
    <div className={`flex gap-2 items-center text-sm ${style}`}>
      <p className={`font-semibold ${labelStyle}`}>{label}</p>
      <p className={`${valueStyle}`}>{value}</p>
    </div>
  );
});

export default ViewCard;
