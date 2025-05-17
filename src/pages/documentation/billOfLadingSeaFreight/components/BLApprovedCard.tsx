import React from "react";
import BLLayout from "./BLLayout";
import BLTypeCard from "./BLTypeCard";
import SuccessChip from "../../../../components/chips/SuccessChip";

interface BLApprovedCardProps {
  id: string;
  billOfLadingNumber: string;
  shipper: string;
  consignee: string;
  blCreatedDate: string;
  billOfLadingStatus: string;
  isOriginal: boolean;
  originalBLCopies?: number;
  nonNegotiableBLCopies?: number;
  seawayBLCopies?: number;
  blTypeDetails?: any[];
  onDownload?: () => void;
  onPrint?: () => void;
  onRequestAdmin?: (id: string, blTypeName: string) => void;
  onAddSeal?: () => void;
  onRemoveSeal?: () => void;
  onAcceptRequest?:()=>void;
  onCancelRequest?:()=>void;
  isAdmin: boolean;
}

const BLApprovedCard: React.FC<BLApprovedCardProps> = ({
  id,
  billOfLadingNumber,
  shipper,
  consignee,
  blCreatedDate,
  billOfLadingStatus,
  isOriginal,
  originalBLCopies,
  nonNegotiableBLCopies,
  seawayBLCopies,
  blTypeDetails,
  onDownload,
  onPrint,
  onRequestAdmin,
  onAddSeal,
  onRemoveSeal,
  onAcceptRequest,
  onCancelRequest,
  isAdmin,
}) => {
  return (
    <div
      className="flex flex-col gap-3 p-2 rounded-md border border-primary bg-grey-aw-50"
      key={id}
    >
      <div className="flex justify-between">
        <BLLayout
          label={"Bill of Lading Number"}
          value={billOfLadingNumber}
          valueStyle="font-bold"
        />
        <BLLayout label={"Shipper"} value={shipper} />
        <BLLayout label={"Consignee"} value={consignee} />
        {isOriginal ? (
          <>
            <BLLayout
              label={"Original BL"}
              value={`${originalBLCopies} Copies`}
            />
            <BLLayout
              label={"Non Negotiable"}
              value={`${nonNegotiableBLCopies} Copies`}
            />
          </>
        ) : (
          <BLLayout label={"Seaway BL"} value={`${seawayBLCopies} Copy`} />
        )}

        <BLLayout label={"BL Created Date"} value={blCreatedDate} />
        <div className="flex flex-col gap-2 p-1 max-w-[240px] items-center">
          <p className="text-xs text-grey-ab-300">Bill of Lading Status</p>
          <SuccessChip
            label={billOfLadingStatus}
            size={"m"}
            variant={"primary"}
          />
        </div>
      </div>

      <div className="flex gap-6 px-2 pt-4 pb-2 border-t border-t-grey-ab-100">
        {blTypeDetails?.map((item) => (
          <BLTypeCard
            blTypeName={item.blTypeName}
            availableCopies={item.availableCopies}
            isSealAdded={item.isSealAdded}
            isRequestedToAdmin={item.isRequestedToAdmin}
            isRequestRejectByAdmin={item.isRequestRejectByAdmin}
            originalBLCopies={originalBLCopies}
            nonNegotiableBLCopies={nonNegotiableBLCopies}
            onDownload={onDownload}
            onPrint={onPrint}
            onRequestAdmin={() => onRequestAdmin?.(id, item.blTypeName)}
            onAddSeal={onAddSeal}
            onRemoveSeal={onRemoveSeal}
            onAcceptRequest={onAcceptRequest}
            onCancelRequest={onCancelRequest}
            isAdmin={isAdmin}
          />
        ))}
      </div>
    </div>
  );
};

export default BLApprovedCard;
