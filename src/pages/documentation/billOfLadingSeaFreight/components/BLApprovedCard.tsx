import React from "react";
import BLLayout from "./BLLayout";
import PrimaryChip from "../../../../components/chips/PrimaryChip";
import {
  DocumentIcon,
  DownloadIcon,
  EyeOpenIcon,
  InfoIcon,
  PrintIcon,
} from "../../../../components/icons/Icons";
import BlackButton from "../../../../components/buttons/BlackButton";
import NeutralBlueButton from "../../../../components/buttons/NeutralBlueButton";
import GreyButton from "../../../../components/buttons/GreyButton";
import ErrorButton from "../../../../components/buttons/ErrorButton";

const BLApprovedCard: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 p-2 rounded-md border border-primary bg-grey-aw-50">
      <div className="flex justify-between">
        <BLLayout
          label={"Bill of Lading Number"}
          value={"71955776"}
          valueStyle="font-bold"
        />
        <BLLayout label={"Shipper"} value={"Artis industrial pvt ltd"} />
        <BLLayout
          label={"Consignee"}
          value={"ASSIDUOUS INTELECTS PRIVATE LIMITED (FTWZ)"}
        />
        {/* make dynamic */}
        {/* <BLLayout label={"Seaway BL"} value={"1 Copy"} />  */}
        <BLLayout label={"Original BL"} value={"3 Copies"} />
        <BLLayout label={"Non Negotiable"} value={"2 Copies"} />
        <BLLayout label={"BL Created Date"} value={"11-04-2025"} />
        <div className="flex flex-col gap-2 p-1 max-w-[240px] items-center">
          <p className="text-xs text-grey-ab-300">Bill of Lading Status</p>
          <PrimaryChip label={"Original BL"} size={"m"} variant={"primary"} />
        </div>
      </div>

      <div className="flex gap-6 px-2 pt-4 pb-2 border-t border-t-grey-ab-100">
        {/* start */}
        <div className="flex flex-col gap-2 rounded-sm bg-grey-aw-100 border border-grey-ab-50 w-1/2 h-fit">
          <div className="flex justify-between px-3 pt-3 pb-1 border-b border-b-grey-ab-50">
            <div className="flex gap-3 items-center h-fit ">
              <div className="p-[6px] rounded-xs bg-blue-50">
                <DocumentIcon size={20} color="#00508C" />
              </div>
              <p className="text-sm font-bold text-grey-ab">
                Original Bill of Lading
              </p>
            </div>
            <div className="flex flex-col  gap-1 ">
              <p className="text-xs text-grey-ab-300">Available Copies</p>
              <p className="text-h5 font-bold text-blue">03</p>
            </div>
          </div>

          <div className="flex justify-between px-3 pb-3 items-center">
            <div className="flex gap-3">
              <div>
                <BlackButton
                  label={"Download"}
                  size={"m"}
                  variant={"primary"}
                  leftIcon={<DownloadIcon size={16} color="#ffffff" />}
                />
              </div>
              <div>
                <NeutralBlueButton
                  label={"Print"}
                  size={"m"}
                  variant={"primary"}
                  leftIcon={<PrintIcon size={16} color="#ffffff" />}
                />
              </div>
              <div>
                <GreyButton
                  label={"View"}
                  size={"m"}
                  variant={"primary"}
                  leftIcon={<EyeOpenIcon size={16} />}
                />
              </div>
            </div>
            <div className="p-1 rounded-xs bg-blue-50 text-blue">
              <div className="flex gap-2 items-center ">
                <div>
                  <InfoIcon size={16} color="#0091FF" />
                </div>
                <p className="text-2xs ">Seal and signature not added</p>
              </div>
            </div>
          </div>
        </div>
        {/* end */}

        {/* ss */}
        <div className="flex flex-col gap-2 rounded-sm bg-grey-aw-100 border border-grey-ab-50 w-1/2">
          <div className="flex justify-between px-3 pt-3 pb-1 border-b border-b-grey-ab-50">
            <div className="flex gap-3 items-center h-fit ">
              <div className="p-[6px] rounded-xs bg-blue-50">
                <DocumentIcon size={20} color="#00508C" />
              </div>
              <p className="text-sm font-bold text-grey-ab">
                Non Negotiable Copies Bill of Lading
              </p>
            </div>
            <div className="flex flex-col  gap-1 ">
              <p className="text-xs text-grey-ab-300">Available Copies</p>
              <p className="text-h5 font-bold text-error">00</p>
            </div>
          </div>

          <div className="flex justify-between px-3 pb-3 items-center">
            <div className="flex gap-2 items-center p-1 rounded-xs bg-blue-50">
              <div>
                <InfoIcon color="#0091FF" />
              </div>
              <p className="text-blue text-sm ">
                You've already downloaded all permitted BL copies. Request admin
                approval for extra copies if needed.
              </p>
              <div>
                <ErrorButton
                  label={"Request to Admin"}
                  size={"m"}
                  variant={"primary"}
                  style="text-nowrap"
                />
              </div>
            </div>
          </div>
        </div>
        {/* ss */}
      </div>
    </div>
  );
};

export default BLApprovedCard;
