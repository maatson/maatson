import React, { useEffect, useState } from "react";
import SecondaryChip from "../../../components/chips/SecondaryChip";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {
  DuplicateIcon,
  EditIcon,
  PasswordIcon,
} from "../../../components/icons/Icons";
import CreateImage from "/images/create.png";
import BlackButton from "../../../components/buttons/BlackButton";
import BLCreatedCard from "../billOfLadingSeaFreight/components/BLCreatedCard";
import SplitBLForm from "../billOfLadingSeaFreight/components/SplitBLForm";
import { Link, useParams } from "react-router-dom";
import BLApprovedCard from "../billOfLadingSeaFreight/components/BLApprovedCard";
import AddSealForm from "../billOfLadingSeaFreight/components/AddSealForm";
import RemoveSealForm from "../billOfLadingSeaFreight/components/RemoveSealForm";
import AddCopiesForm from "../billOfLadingSeaFreight/components/AddCopiesForm";
import BlueChip from "../../../components/chips/BlueChip";
import SuccessChip from "../../../components/chips/SuccessChip";

interface LayoutProps {
  label: string;
  value: string;
  parentStyle?: string;
  labelStyle?: string;
  valueStyle?: string;
}

 export interface copyInfoProps {
  copyType: string;
  available: number;
  isSealAdded: boolean;
  isRequestedToAdmin: boolean;
  isRequestRejectByAdmin: boolean;
  onDownload?: () => void;
  onPrint?: () => void;
  onRequestAdmin?: () => void;
  onAddSeal?: () => void;
  onRemoveSeal?: () => void;
  onCancelRequest?: () => void;
  onAcceptRequest?: () => void;
  onAddCopies?: () => void;
}

interface BLDetailsProps {
  billOfLadingNumber: string;
  shipper: string;
  consignee: string;
  blCreatedDate: string;
  billOfLadingStatus: string;
  id: string;
  isOriginal: boolean;
  originalBLCopies: number;
  nonNegotiableBLCopies: number;
  seawayBLCopies: number;
  airwayBLCopies: number;
  copyInfo: copyInfoProps[];
}

interface DummyDataProps {
  bookingID: string;
  companyName: string;
  portOfLoading: string;
  cargoType: string;
  portOfDischarge: string;
  blStatus: string;
  blDetails: BLDetailsProps[];
}

const ViewBillOfLading: React.FC = () => {
  const [isBLCreated, setIsBLCreated] = useState<boolean>(true);
  const [isBLApproved, setIsBLApproved] = useState<boolean>(false);
  const [isSplitBL, setIsSplitBL] = useState<boolean>(false);
  const [isRemoveSeal, setIsRemoveSeal] = useState<boolean>(false);
  const [isAddSeal, setIsAddSeal] = useState<boolean>(false);
  const [isAddCopies, setIsAddCopies] = useState<boolean>(false);
  const { id } = useParams();
  const isAdmin = true;

  const [dummyData, setDummyData] = useState<DummyDataProps>({
    bookingID: "71955776",
    companyName: "Yanto Jericho",
    portOfLoading: "Europe",
    cargoType: "Standard Cargo",
    portOfDischarge: "England",
    blStatus: "created",
    blDetails: [
      {
        id: "0",
        billOfLadingNumber: "71955776",
        shipper: "Artis industrial pvt ltd",
        consignee: "ASSIDUOUS INTELECTS PRIVATE LIMITED (FTWZ)",
        blCreatedDate: "11-04-2025",
        billOfLadingStatus: "BL Approved",
        isOriginal: true,
        originalBLCopies: 3,
        nonNegotiableBLCopies: 2,
        seawayBLCopies: 0,
        airwayBLCopies: 0,
        copyInfo: [
          //copyInfo
          {
            copyType: "Original Bill of Lading", //copyType
            available: 3, //available
            isSealAdded: true,
            isRequestedToAdmin: false,
            isRequestRejectByAdmin: false,
          },
          {
            copyType: "Non Negotiable Copies Bill  of Lading",
            available: 0,
            isSealAdded: false,
            isRequestedToAdmin: true,
            isRequestRejectByAdmin: false,
          },
        ],
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
          isOriginal: true,
          originalBLCopies: dummyData.blDetails[0].originalBLCopies,
          nonNegotiableBLCopies: dummyData.blDetails[0].nonNegotiableBLCopies,
          seawayBLCopies: dummyData.blDetails[0].seawayBLCopies,
          airwayBLCopies: dummyData.blDetails[0].originalBLCopies,
          copyInfo: dummyData.blDetails[0].copyInfo,
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

  const handleRequestToAdmin = (blId: string, copyType: string) => {
    setDummyData((prev) => {
      const updatedBLDetails = prev.blDetails.map((bl) => {
        if (bl.id === blId) {
          const updatedcopyInfo = bl.copyInfo?.map((type) =>
            type.copyType === copyType
              ? { ...type, isRequestedToAdmin: true }
              : type
          );
          return { ...bl, copyInfo: updatedcopyInfo };
        }
        return bl;
      });
      return { ...prev, blDetails: updatedBLDetails };
    });
    console.log(dummyData.blDetails);
  };

  const handleCancelRequest = (blId: string, copyType: string) => {
    // also set toast
    setDummyData((prev) => {
      const updatedBLDetails = prev.blDetails.map((bl) => {
        if (bl.id === blId) {
          const updatedcopyInfo = bl.copyInfo?.map((type) =>
            type.copyType === copyType
              ? { ...type, isRequestedToAdmin: false }
              : type
          );
          return { ...bl, copyInfo: updatedcopyInfo };
        }
        return bl;
      });
      return { ...prev, blDetails: updatedBLDetails };
    });
    // console.log(dummyData.blDetails);
  };

  const handleAddSeal = () => {
    setIsAddSeal(true);
  };
  const handleRemoveSeal = () => {
    setIsRemoveSeal(true);
  };

  const handleAddCopies = () => {
    setIsAddCopies(true);
  };

  useEffect(() => {
    if (dummyData.blDetails.length === 0) {
      setDummyData((prev) => ({
        ...prev,
        blStatus: "pending",
      }));
    }
  }, [dummyData.blDetails]);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="bg-grey-aw-50 rounded-sm px-4 py-2 shadow-lg flex justify-between">
          <Layout label={"Booking ID"} value={"71955776"} />
          <Layout label={"Company Name"} value={"Yanto Jericho"} />
          <Layout label={"Port of loading"} value={"Europe"} />
          <Layout label={"Cargo Type"} value={"Standard Cargo"} />
          <Layout label={"Port of Discharge"} value={"Europe"} />
          <div className={`flex text-sm text-grey-ab-900 py-1 flex-col gap-2 `}>
            <p className={`font-bold `}>BL Status</p>
            {dummyData.blStatus.toLowerCase() === "pending" ? (
              <SecondaryChip
                label={dummyData.blStatus}
                size={"m"}
                variant={"mix"}
              />
            ) : dummyData.blStatus.toLowerCase() === "created" ? (
              <BlueChip label={dummyData.blStatus} size={"m"} variant={"mix"} />
            ) : (
              <SuccessChip
                label={dummyData.blStatus}
                size={"m"}
                variant={"mix"}
              />
            )}
          </div>
        </div>

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
              <Link to={`/bill-of-lading/air-freight/createBl/${id}`}>
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
                    to={`/bill-of-lading/air-freight/createBl/${id}`}
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
                <React.Fragment key={item.id}>
                  <BLCreatedCard
                    id={item.id}
                    billOfLadingNumber={item.billOfLadingNumber}
                    shipper={item.shipper}
                    consignee={item.consignee}
                    blCreatedDate={item.blCreatedDate}
                    billOfLadingStatus={item.billOfLadingStatus}
                    onDelete={() => handleDelete(item.billOfLadingNumber)}
                    onViewDraft={`/bill-of-lading/air-freight/viewBl/${item.id}`}
                    onDownloadDraft={() => {}}
                    isAdmin={isAdmin}
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

              {dummyData.blDetails.map((item) => (
                <React.Fragment key={item.id}>
                  <BLApprovedCard
                    id={item.id}
                    billOfLadingNumber={item.billOfLadingNumber}
                    shipper={item.shipper}
                    consignee={item.consignee}
                    blCreatedDate={item.blCreatedDate}
                    billOfLadingStatus={item.billOfLadingStatus}
                    isOriginal={item.isOriginal}
                    originalBLCopies={item.originalBLCopies}
                    nonNegotiableBLCopies={item.nonNegotiableBLCopies}
                    seawayBLCopies={item.seawayBLCopies}
                    airwayBLCopies={item.airwayBLCopies}
                    copyInfo={item.copyInfo}
                    onDownload={() => {}}
                    onPrint={() => {}}
                    onAddSeal={handleAddSeal}
                    onRemoveSeal={handleRemoveSeal}
                    onRequestAdmin={handleRequestToAdmin}
                    onAcceptRequest={() => {}}
                    onCancelRequest={handleCancelRequest}
                    onAddCopies={handleAddCopies}
                    isAdmin={isAdmin}
                  />
                </React.Fragment>
              ))}
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

      {isAddSeal && (
        <div className="fixed flex justify-center items-center bg-black bg-opacity-50 z-30 inset-0">
          <AddSealForm onClose={() => setIsAddSeal(false)} onSave={() => {}} />
        </div>
      )}

      {isRemoveSeal && (
        <div className="fixed flex justify-center items-center bg-black bg-opacity-50 z-30 inset-0">
          <RemoveSealForm
            onClose={() => setIsRemoveSeal(false)}
            onSave={() => {}}
          />
        </div>
      )}

      {isAddCopies && (
        <div className="fixed flex justify-center items-center bg-black bg-opacity-50 z-30 inset-0">
          <AddCopiesForm
            onClose={() => setIsAddCopies(false)}
            onSave={() => {}}
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
