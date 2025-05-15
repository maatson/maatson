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
import { Link } from "react-router-dom";

interface BLCreatedCardProps {
  billOfLadingNumber: string;
  shipper: string;
  consignee: string;
  blCreatedDate: string;
  billOfLadingStatus: string;
  onDelete: () => void;
  onViewDraft: string;
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
          <BLLayout
            label={"Bill of Lading Number"}
            value={billOfLadingNumber}
            valueStyle="font-bold"
          />
          <BLLayout label={"Shipper"} value={shipper} />
          <BLLayout label={"Consignee"} value={consignee} />
          <BLLayout label={"BL Created Date"} value={blCreatedDate} />

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
            <Link to={onViewDraft}>
              <GreyButton
                label={"View Draft"}
                size={"m"}
                variant={"primary"}
                leftIcon={<DocumentIcon size={16} />}
              />
            </Link>
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
