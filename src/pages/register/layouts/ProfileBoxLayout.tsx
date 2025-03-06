import React from "react";

const ProfileBoxLayout: React.FC<{
  title: string;
  value: string;
  style?: string;
  titleStyle?: string;
  valueStyle?: string;
}> = ({ title, value, style, titleStyle, valueStyle }) => {
  return (
    <>
      <div className={`flex flex-col gap-2 break-before-all ${style}`}>
        <p className={`text-grey-ab-300 ${titleStyle}`}>{title}</p>
        <p className={`text-grey-ab-800 ${valueStyle}`}>{value}</p>
      </div>
    </>
  );
};

export default ProfileBoxLayout;
