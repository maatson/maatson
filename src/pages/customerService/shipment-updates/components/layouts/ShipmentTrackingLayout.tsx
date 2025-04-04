import React from "react";
import SuccessChip from "../../../../../components/chips/SuccessChip";
import { EditIcon } from "../../../../../components/icons/Icons";
import WarningChip from "../../../../../components/chips/WarningChip";

interface ShipmentTrackingLayoutProps {
  label: string;
  status: string;
}

const ShipmentTrackingLayout: React.FC<ShipmentTrackingLayoutProps> = ({
  label,
  status,
}) => {
  return (
    <div className="flex flex-col gap-3 min-w-[105px]">
      <div className="text-xs font-bold text-grey-ab-600">{label}</div>
      <div className="flex justify-between items-center">
        {status.toLowerCase() === "completed" ? (
          <SuccessChip label={status} size={"m"} variant={"fill"} />
        ) : (
          <WarningChip label={status} size={"m"} variant={"fill"} />
        )}
        <div className="p-1 rounded-xs bg-grey-ab-50 cursor-pointer">
          <EditIcon color="#121212" size={16} />
        </div>
      </div>
    </div>
  );
};

export default ShipmentTrackingLayout;
