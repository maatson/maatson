import React, { useState } from "react";
import SecondaryChip from "../../../components/chips/SecondaryChip";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {
  DuplicateIcon,
  EditIcon,
  PasswordIcon,
} from "../../../components/icons/Icons";
import CreateImage from "/images/create.png";
import BlackButton from "../../../components/buttons/BlackButton";
import BLCreatedCard from "./components/BLCreatedCard";
import SplitBLForm from "./components/SplitBLForm";
import { Link, useParams } from "react-router-dom";
import BLApprovedCard from "./components/BLApprovedCard";

interface LayoutProps {
  label: string;
  value: string;
  parentStyle?: string;
  labelStyle?: string;
  valueStyle?: string;
}

interface BLDetailsProps {
  billOfLadingNumber: string;
  shipper: string;
  consignee: string;
  blCreatedDate: string;
  billOfLadingStatus: string;
  id: string;
}

const ViewBillOfLading: React.FC = () => {
  const [isBLCreated, setIsBLCreated] = useState<boolean>(true);
  const [isBLApproved, setIsBLApproved] = useState<boolean>(false);
  const [isSplitBL, setIsSplitBL] = useState<boolean>(false);
  const { id } = useParams();

  const [dummyData, setDummyData] = useState({
    bookingID: "71955776",
    companyName: "Yanto Jericho",
    portOfLoading: "Europe",
    cargoType: "FCL(Full Container Load)",
    portOfDischarge: "England",
    blStatus: "pending",
    blDetails: [
      {
        billOfLadingNumber: "71955776",
        shipper: "Artis industrial pvt ltd",
        consignee: "ASSIDUOUS INTELECTS PRIVATE LIMITED (FTWZ)",
        blCreatedDate: "11-04-2025",
        billOfLadingStatus: "Draft",
        id: "0",
      },
    ],
  });

  const toAlpha = (num: number): string => {
    let str = "";
    while (num > 0) {
      let remainder = (num - 1) % 26;
      str = String.fromCharCode(65 + remainder) + str;
      num = Math.floor((num - 1) / 26);
    }
    return str;
  };

  const handleSave = (count: number) => {
    const newBLDetails: BLDetailsProps[] = Array.from(
      { length: count },
      (_, i) => {
        const alpha = toAlpha(i + 1); // 1 → A, 2 → B...
        return {
          billOfLadingNumber: `${dummyData.blDetails[0].billOfLadingNumber}-${alpha}`,
          shipper: `${dummyData.blDetails[0].shipper}`,
          consignee: `${dummyData.blDetails[0].consignee}`,
          blCreatedDate: `${dummyData.blDetails[0].blCreatedDate}`, // here set current date
          billOfLadingStatus: `${dummyData.blDetails[0].billOfLadingStatus}`,
          id: alpha,
        };
      }
    );
    setDummyData((prev) => ({ ...prev, blDetails: newBLDetails }));
    setIsSplitBL(false);
  };

  const handleDelete = (blNumber: string) => {
    setDummyData((prev) => ({
      ...prev,
      blDetails: prev.blDetails.filter(
        (bl) => bl.billOfLadingNumber !== blNumber
      ),
    }));
  };

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
        <div className="flex flex-col gap-2">
          {/* main tab */}
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
            {dummyData.blDetails.length === 0 && isBLCreated && (
              <Link to={`/bill-of-lading/sea-freight/createBl/${id}`}>
                <PrimaryButton
                  label={"Create BL"}
                  size={"l"}
                  variant={"primary"}
                  leftIcon={<EditIcon color="#ffffff" />}
                />
              </Link>
            )}
          </div>
          {/* main tab end */}

          {isBLCreated && (
            <>
              {dummyData.blDetails.length === 0 && (
                <div className="bg-grey-aw-50 flex flex-col gap-2 px-4 py-8 rounded-xs shadow-lg justify-center">
                  <div className="flex justify-center">
                    <img src={CreateImage} alt="CreateImage" />
                  </div>
                  <p className="text-xs text-grey-ab-300 text-center">
                    Create your Bill of Lading. Click below to get started
                  </p>
                  <Link
                    to={`/bill-of-lading/sea-freight/createBl/${id}`}
                    className="flex justify-center"
                  >
                    <PrimaryButton
                      label={"Create BL"}
                      size={"m"}
                      variant={"link"}
                      leftIcon={<EditIcon size={16} color="#2C398F" />}
                    />
                  </Link>
                </div>
              )}

              {dummyData.blDetails.length === 1 && (
                <div className="bg-secondary-300 rounded-sm py-2 pl-4 pr-2 w-fit my-1 flex gap-8 items-center">
                  <p className="text-grey-ab-800">
                    Do you want to split this BL draft into multiple BLs?
                  </p>
                  <div onClick={() => setIsSplitBL(true)}>
                    <BlackButton
                      label={"Split BL"}
                      size={"m"}
                      variant={"primary"}
                      leftIcon={<DuplicateIcon size={16} color="#ffffff" />}
                    />
                  </div>
                </div>
              )}

              {dummyData.blDetails.map((item) => (
                <React.Fragment key={item.billOfLadingNumber}>
                  <BLCreatedCard
                    billOfLadingNumber={item.billOfLadingNumber}
                    shipper={item.shipper}
                    consignee={item.consignee}
                    blCreatedDate={item.blCreatedDate}
                    billOfLadingStatus={item.billOfLadingStatus}
                    onDelete={() => handleDelete(item.billOfLadingNumber)}
                    onViewDraft={`/bill-of-lading/sea-freight/viewBl/${item.id}`}
                    onDownloadDraft={() => {}}
                  />
                </React.Fragment>
              ))}
            </>
          )}

          {isBLApproved && (
            <>
              <div className="flex gap-2 p-2 rounded-xs bg-error-50">
                <PasswordIcon color="#C80008" />
                <div className="flex flex-col gap-1 text-error-600 text-xs">
                  <p className="font-bold">Security Notice</p>
                  <p>
                    The BL document contains sensitive and legal
                    information.Please do not share, forward, or distribute it
                    without proper authorization.
                  </p>
                </div>
              </div>

              <BLApprovedCard />
            </>
          )}
        </div>
      </div>

      {isSplitBL && (
        <div className="fixed flex justify-center items-center bg-black bg-opacity-50 z-30 inset-0">
          <SplitBLForm
            onClose={() => setIsSplitBL(false)}
            onSave={handleSave}
          />
        </div>
      )}
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
