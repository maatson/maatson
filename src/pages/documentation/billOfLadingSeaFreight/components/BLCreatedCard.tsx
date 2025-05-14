import React from "react";
import SecondaryChip from "../../../../components/chips/SecondaryChip";
import ErrorButton from "../../../../components/buttons/ErrorButton";
import {
  DeleteIcon,
  DocumentIcon,
  DownloadIcon,
} from "../../../../components/icons/Icons";
import GreyButton from "../../../../components/buttons/GreyButton";
import BlackButton from "../../../../components/buttons/BlackButton";

interface BLCreatedCardProps {
  billOfLadingNumber: string;
  shipper: string;
  consignee: string;
  blCreatedDate: string;
  billOfLadingStatus: string;
  onDelete: () => void;
  onViewDraft: () => void;
  onDownloadDraft: () => void;
}

const BLCreatedCard: React.FC<BLCreatedCardProps> = ({
  billOfLadingNumber,
  shipper,
  consignee,
  blCreatedDate,
  billOfLadingStatus,
  onDelete,
  onViewDraft,
  onDownloadDraft,
}) => {
  return (
    <>
      <div className="flex flex-col gap-3 p-2 rounded-md bg-grey-aw-50 border border-primary">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 p-1 max-w-[240px]">
            <p className="text-xs text-grey-ab-300">Bill of Lading Number</p>
            <p className="text-sm font-bold text-grey-ab-900">
              {billOfLadingNumber}
            </p>
          </div>
          <div className="flex flex-col gap-2 p-1 max-w-[240px]">
            <p className="text-xs text-grey-ab-300">Shipper</p>
            <p className="text-sm  text-grey-ab-900">{shipper}</p>
          </div>
          <div className="flex flex-col gap-2 p-1 max-w-[240px]">
            <p className="text-xs text-grey-ab-300">Consignee</p>
            <p className="text-sm  text-grey-ab-900">{consignee}</p>
          </div>
          <div className="flex flex-col gap-2 p-1 max-w-[240px]">
            <p className="text-xs text-grey-ab-300">BL Created Date</p>
            <p className="text-sm  text-grey-ab-900">{blCreatedDate}</p>
          </div>
          <div className="flex flex-col gap-2 p-1 max-w-[240px] items-center">
            <p className="text-xs text-grey-ab-300">Bill of Lading Status</p>
            <SecondaryChip
              label={billOfLadingStatus}
              size={"m"}
              variant={"primary"}
            />
          </div>
        </div>

        <div className="flex justify-between pt-2 border-t border-t-grey-ab-100 items-center">
          <div onClick={onDelete}>
            <ErrorButton
              label={"Delete Draft"}
              size={"m"}
              variant={"primary"}
              leftIcon={<DeleteIcon size={16} color="#ffffff" />}
            />
          </div>
          <div className="flex gap-2 items-center">
            <div onClick={onViewDraft}>
              <GreyButton
                label={"View Draft"}
                size={"m"}
                variant={"primary"}
                leftIcon={<DocumentIcon size={16} />}
              />
            </div>
            <div onClick={onDownloadDraft}>
              <BlackButton
                label={"Download Draft"}
                size={"m"}
                variant={"primary"}
                leftIcon={<DownloadIcon size={16} color="#ffffff" />}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BLCreatedCard;
