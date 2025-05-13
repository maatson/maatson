import React, { useState } from "react";
import SecondaryChip from "../../../components/chips/SecondaryChip";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { EditIcon } from "../../../components/icons/Icons";
import CreateImage from "/images/create.png";
import BlackButton from "../../../components/buttons/BlackButton";

interface LayoutProps {
  label: string;
  value: string;
  parentStyle?: string;
  labelStyle?: string;
  valueStyle?: string;
}

const ViewBillOfLading: React.FC = () => {
  const [isBLCreated, setIsBLCreated] = useState<boolean>(true);
  const [isBLApproved, setIsBLApproved] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="bg-grey-aw-50 rounded-sm px-4 py-2 shadow-lg flex justify-between">
          <Layout label={"Booking ID"} value={"71955776"} />
          <Layout label={"Company Name"} value={"Yanto Jericho"} />
          <Layout label={"Port of loading"} value={"Europe"} />
          <Layout label={"Cargo Type"} value={"FCL(full container load)"} />
          <Layout label={"Port of Discharge"} value={"Europe"} />
          <div className={`flex text-sm text-grey-ab-900 py-1 flex-col gap-2 `}>
            <p className={`font-bold `}>BL Status</p>
            <SecondaryChip label={"Pending"} size={"m"} variant={"mix"} />
          </div>
        </div>

        {/* Changable part */}
        <div className="flex flex-col gap-2 ">
          <div className="bg-secondary-300 rounded-sm py-2 pl-4 pr-2 w-fit flex gap-8 items-center">
            <p className="text-grey-ab-800">Do you want to split this BL draft into multiple BLs?</p>
            <BlackButton label={"Split BL"} size={"m"} variant={"primary"}  />
          </div>

          <div className="rounded-xs bg-grey-aw-50 shadow-lg px-3 py-2 flex justify-between items-center">
            <div className="flex gap-6 text-sm">
              <div
                className={`px-2 py-1 border-b-4 ${
                  isBLCreated
                    ? "border-b-secondary text-secondary"
                    : "border-b-transparent text-grey-ab"
                }  font-bold cursor-pointer transition-all duration-700`}
                onClick={() => {
                  setIsBLCreated(true);
                  setIsBLApproved(false);
                }}
              >
                BL Created
              </div>
              <div className="border-l border-l-grey-ab-100"></div>
              <div
                className={`px-2 py-1 border-b-4 ${
                  isBLApproved
                    ? "border-b-secondary text-secondary"
                    : "border-b-transparent text-grey-ab"
                }  font-bold cursor-pointer transition-all duration-700`}
                onClick={() => {
                  setIsBLCreated(false);
                  setIsBLApproved(true);
                }}
              >
                BL Approved
              </div>
            </div>
            <PrimaryButton
              label={"Create BL"}
              size={"l"}
              variant={"primary"}
              leftIcon={<EditIcon color="#ffffff" />}
            />
          </div>

          <div className="bg-grey-aw-50 flex flex-col gap-2 px-4 py-8 rounded-xs shadow-lg justify-center">
            <div className="flex justify-center">
              <img src={CreateImage} alt="CreateImage" />
            </div>
            <p className="text-xs text-grey-ab-300 text-center">
              Create your Bill of Lading. Click below to get started
            </p>
            <PrimaryButton
              label={"Create BL"}
              size={"m"}
              variant={"link"}
              leftIcon={<EditIcon size={16} color="#2C398F" />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBillOfLading;

const Layout: React.FC<LayoutProps> = ({
  label,
  value,
  parentStyle,
  valueStyle,
  labelStyle,
}) => {
  return (
    <div
      className={`flex text-sm text-grey-ab-900 py-1 flex-col gap-2 ${parentStyle}`}
    >
      <p className={`font-bold ${labelStyle}`}>{label}</p>
      <p className={` ${valueStyle}`}>{value}</p>
    </div>
  );
};
