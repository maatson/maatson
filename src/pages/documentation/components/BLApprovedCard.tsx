import React from "react";
import BLLayout from "./BLLayout";
import BLTypeCard from "./BLTypeCard";
import SuccessChip from "../../../components/chips/SuccessChip";
import { useLocation } from "react-router-dom";
import { copyInfoProps } from "../billOfLadingSeaFreight/ViewBillOfLading";

interface BLApprovedCardProps {
  id: string;
  billOfLadingNumber: string;
  shipper: string;
  consignee: string;
  blCreatedDate: string;
  billOfLadingStatus: string;
  isOriginal: boolean;
  originalBLCopies: number;
  nonNegotiableBLCopies: number;
  seawayBLCopies: number;
  airwayBLCopies: number;
  copyInfo: copyInfoProps[];
  onDownload?: () => void;
  onPrint?: () => void;
  onRequestAdmin?: (id: string, copyType: string) => void;
  onAddSeal?: () => void;
  onRemoveSeal?: () => void;
  onAcceptRequest?: () => void;
  onCancelRequest?: (id: string, copyType: string) => void;
  onAddCopies?: () => void;
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
  airwayBLCopies,
  copyInfo,
  onDownload,
  onPrint,
  onRequestAdmin,
  onAddSeal,
  onRemoveSeal,
  onAcceptRequest,
  onCancelRequest,
  onAddCopies,
  isAdmin,
}) => {
  const location = useLocation();
  return (
    <div className="flex flex-col gap-3 p-2 rounded-md border border-primary bg-grey-aw-50">
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
              value={`${originalBLCopies} ${
                originalBLCopies > 1 ? "copies" : "copy"
              }`}
            />
            <BLLayout
              label={"Non Negotiable"}
              value={`${nonNegotiableBLCopies} ${
                nonNegotiableBLCopies > 1 ? "copies" : "copy"
              }`}
            />
          </>
        ) : (
          <>
            {location.pathname.startsWith("/bill-of-lading/sea-freight") && (
              <BLLayout
                label={"Seaway BL"}
                value={`${seawayBLCopies} ${
                  seawayBLCopies > 1 ? "copies" : "copy"
                }`}
              />
            )}
            {location.pathname.startsWith("/bill-of-lading/air-freight") && (
              <BLLayout
                label={"Airway BL"}
                value={`${airwayBLCopies} ${
                  airwayBLCopies > 1 ? "copies" : "copy"
                }`}
              />
            )}
          </>
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
        {copyInfo.map((item, index) => (
          <React.Fragment key={index}>
            <BLTypeCard
              copyType={item.copyType}
              available={item.available}
              isSealAdded={item.isSealAdded}
              isRequestedToAdmin={item.isRequestedToAdmin}
              isRequestRejectByAdmin={item.isRequestRejectByAdmin}
              originalBLCopies={originalBLCopies}
              nonNegotiableBLCopies={nonNegotiableBLCopies}
              seawayBLCopies={seawayBLCopies}
              airwayBLCopies={airwayBLCopies}
              onDownload={onDownload}
              onPrint={onPrint}
              onRequestAdmin={() => onRequestAdmin?.(id, item.copyType)}
              onAddSeal={onAddSeal}
              onRemoveSeal={onRemoveSeal}
              onAcceptRequest={onAcceptRequest}
              onCancelRequest={() => onCancelRequest?.(id, item.copyType)}
              onAddCopies={onAddCopies}
              isAdmin={isAdmin}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BLApprovedCard;
