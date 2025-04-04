import React from "react";
import WarningChip from "../../../../../components/chips/WarningChip";
import { ExcelIcon, InfoIcon, SendIcon } from "../../../../../components/icons/Icons";
import SuccessButton from "../../../../../components/buttons/SuccessButton";
import BlackButton from "../../../../../components/buttons/BlackButton";
import NeutralBlueButton from "../../../../../components/buttons/NeutralBlueButton";

const TerminalGateInDetails: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 bg-primary-50">
      <div className="flex justify-between p-3 rounded-xs bg-grey-aw-50 text-grey-ab-900 text-lg font-bold items-center">
        <p>BB2501030001 Details</p>
        <div className="flex gap-4 items-center">
          <BlackButton
            label={"Send Mail"}
            size={"s"}
            variant={"primary"}
            rightIcon={<SendIcon size={16} color="#E9E9E9" />}
          />
          <SuccessButton
            label={"Export"}
            size={"s"}
            variant={"primary"}
            rightIcon={<ExcelIcon size={16} color="#FCFCFC" />}
          />
        </div>
      </div>

      <div className="bg-grey-aw-50 px-6 py-4 rounded-sm flex justify-between items-center gap-2 text-grey-ab-900 text-nowrap overflow-auto custom-scrollbar-small">
        <div className="flex flex-col gap-2">
          <p className="text-sm">Booking ID</p>
          <p className="text-sm font-bold ">BB2501030001</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Company Name</p>
          <p className="text-sm font-bold ">Farrel Kurniawan</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Port of loading</p>
          <p className="text-sm font-bold ">Los Angeles, USA</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Port of Discharge</p>
          <p className="text-sm font-bold ">Rotterdam, Netherlands</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Cargo Type</p>
          <p className="text-sm font-bold ">Full Container Load</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Booking validity Date</p>
          <p className="text-sm font-bold ">11/10/25</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Terminal Gate In Status</p>
          <WarningChip label={"Processing"} size={"m"} variant={"fill"} />
        </div>
      </div>

      {/* container type */}
      <div className="flex flex-col gap-3">
        <div className="bg-blue-50 rounded-sm flex gap-6 p-2 items-center w-fit">
            <div className="flex gap-4 items-center">
                <InfoIcon color="#0091FF"/>
                <p className="text-blue-600">Do you want to split this booking ?</p>
            </div>
            <NeutralBlueButton label={"Split Booking Request"} size={"s"} variant={"primary"} />
        </div>
        {/*  */}
        <div className="flex px-4 py-2 justify-between bg-grey-aw-50 rounded-sm text-grey-ab-900 items-center">
          <div className="flex gap-2 text-sm">
            <p>Container Type</p>
            <p className="font-bold">20’ft Dry Container</p>
          </div>
          <div className="flex gap-2 text-sm">
            <p>Quantity</p>
            <p className="font-bold">05</p>
          </div>

          <div className="rounded-xl bg-secondary-50 flex gap-1 py-1 pl-2 pr-1 items-center">
            <p className="text-2xs font-bold text-secondary">Pending</p>
            <div className="rounded-full bg-secondary-300 p-1 text-2xs font-bold text-grey-aw-50 w-[20px] h-[20px] flex items-center justify-center">
              <p>05</p>
            </div>
          </div>
        </div>

        {/* tables */}
      </div>
    </div>
  );
};

export default TerminalGateInDetails;
