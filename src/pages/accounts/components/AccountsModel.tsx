import React from "react";

interface AccountsModelProps {
  label: string;
  value: string | React.ReactNode;
  parentStyle?: string;
  labelStyle?: string;
  valueStyle?: string;
}

const AccountsModel: React.FC<AccountsModelProps> = ({
  label,
  value,
  parentStyle,
  valueStyle,
  labelStyle,
}) => {
  return (
    <div className={`flex text-sm text-grey-ab-800 ${parentStyle} gap-1 `}>
      <p className={`font-bold ${labelStyle}`}>{label}</p>
      <p className={` text-grey-ab-400 ${valueStyle}`}>{value}</p>
    </div>
  );
};

export default AccountsModel;
