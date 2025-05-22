import React, { ChangeEvent, useState } from "react";

import logo from "/images/logoSymbol.png";
import NeutralBlueButton from "../../../components/buttons/NeutralBlueButton";
import BlackButton from "../../../components/buttons/BlackButton";
import {
  CloseIcon,
  DownloadIcon,
  EditIcon,
  InfoIcon,
  TickIcon,
} from "../../../components/icons/Icons";
import { Link, useParams } from "react-router-dom";
import GreyButton from "../../../components/buttons/GreyButton";
import DraftToReview from "./DraftToReview";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import ApprovalRequestModal from "./ApprovalRequestModal";
import WarningChip from "../../../components/chips/WarningChip";
import ErrorChip from "../../../components/chips/ErrorChip";
import SuccessChip from "../../../components/chips/SuccessChip";
import SuccessButton from "../../../components/buttons/SuccessButton";
import ErrorButton from "../../../components/buttons/ErrorButton";
import axios from "axios";

type ShipperDetails = {
  companyName: string;
  companyAddress: string;
};
type CargoDetails = {
  containerNumber: string;
  sealNumber: string;
  packageType: string;
  packageQuantity: number;
  cargoWeight: number;
  cargoWeightUnit: string;
  measurement: string;
  description: string;
};
type RequestDetails = {
  status: "pending" | "reject" | "approved";
  requestedPerson: string;
  approvedPerson: string;
};

interface BLData {
  bookingId: string;
  blNumber: string;
  vesselName: string;
  shipperRef: string;
  vesselNumber: string;
  portOfLoading: string;
  portOfDischarge: string;
  delivaryPlace: string;
  finalDestination: string;
  receiptPlace: string;
  freightPaid: string;
  shipper: ShipperDetails;
  consignee: ShipperDetails;
  notifyParty: ShipperDetails[];
  cargoDetails: CargoDetails[];
  delivaryTerms: string;
  shippingTerms: string;
  freightTerms: string;
  issuedPlace: string;
  shippedOnboardDate: string;
  issuedDate: string;
  bLStatus: "draft" | "review" | "request" | "approved";
  blType: "original" | "seaway";
  approvalRequestDetails: RequestDetails;
  numberOfOriginalCopies: number;
  numberOfNonNegotiableCopies: number;
  numberOfSeawayCopies: number;
}

const ViewBl: React.FC = () => {
  const { blId } = useParams();
  const isAdmin = false;
  const [data, setData] = useState<BLData>({
    bookingId: "123dd4545",
    blNumber: "13450092",
    vesselName: "MaerskTitan",
    shipperRef: "9768576ffd",
    vesselNumber: "123dd4545",
    portOfLoading: "Chennai, India",
    portOfDischarge: "Karachi, Pakistan",
    delivaryPlace: "Karachi, Pakistan",
    finalDestination: "Karachi, Pakistan",
    receiptPlace: "Karachi, Pakistan",
    freightPaid: "Karachi, Pakistan",
    shipper: {
      companyName: "LIFECO",
      companyAddress:
        "LIBTAN FERTILIZER COMPANY P.O.Box 6796 hay Andakus Brega-Libya",
    },
    consignee: {
      companyName: "Artis industrial pvt ltd",
      companyAddress:
        "3-101/2 Sharath villa, beach Road, Hosabettu, mangalore-575109",
    },
    notifyParty: [
      {
        companyName: "ASSIDUOUS INTELECTS PRIVATE LIMITED (FTWZ)",
        companyAddress:
          "A/C ARTS INDUSTRIAL PVT LTD C/O.integrated chennai BusinessPart (India)private limited, Survey NO.NO1202,kuruvimedu Road, kondakarai,Tiruvallur, tamilnadu 600120",
      },
      {
        companyName: "ASSIDUOUS INTELECTS PRIVATE LIMITED (FTWZ)",
        companyAddress:
          "A/C ARTS INDUSTRIAL PVT LTD C/O.integrated chennai BusinessPart (India)private limited, Survey NO.NO1202,kuruvimedu Road, kondakarai,Tiruvallur, tamilnadu 600120",
      },
    ],
    cargoDetails: [
      {
        containerNumber: "TCXU3529277",
        sealNumber: "HC0225999",
        packageType: "ART-UFECO",
        packageQuantity: 5049,
        cargoWeight: 20978,
        cargoWeightUnit: "KGS",
        measurement: "-",
        description:
          "1X20FT SHIPPER OWNED CONTAINER, Catalyst Handling Equipment, Tools and Tackles",
      },
    ],
    delivaryTerms: "FCL/FCL",
    shippingTerms: "FCL/CY",
    freightTerms: "Collected",
    issuedPlace: "Chennai",
    shippedOnboardDate: "16-04-2025",
    issuedDate: "12-04-2025",
    bLStatus: "draft",
    approvalRequestDetails: {
      status: "pending",
      requestedPerson: "",
      approvedPerson: "",
    },
    blType: "seaway",
    numberOfNonNegotiableCopies: 0,
    numberOfOriginalCopies: 0,
    numberOfSeawayCopies: 1,
  });
  const [isDraftToReview, setDraftToReview] = useState<boolean>(false);
  const [isApprovalRequest, setApprovalRequest] = useState<boolean>(false);

  // axios.post("/ihix,com",data,{onUploadProgress:(e)=>{(e.loaded*100/100)}})

  const handleMoveToReview = () => {
    if (isAdmin) {
      setData((prev) => ({
        ...prev,
        bLStatus: "review",
        approvalRequestDetails: {
          ...prev.approvalRequestDetails,
          status: "pending",
        },
      }));
    }
    setData((prev) => ({ ...prev, bLStatus: "review" }));
    setDraftToReview(false);
  };
  const handleSendApproval = () => {
    setData((prev) => ({
      ...prev,
      bLStatus: "request",
      approvalRequestDetails: {
        ...prev.approvalRequestDetails,
        status: "pending",
      },
    }));

    setApprovalRequest(false);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    console.log(name, value);
  };

  const handleApproveBl = () => {
    const updatedData = { ...data.approvalRequestDetails };
    updatedData.status = "approved";
    setData((prev) => ({
      ...prev,
      approvalRequestDetails: updatedData,
      bLStatus: "approved",
    }));
  };
  const handleRejectBl = () => {
    const updatedData = { ...data.approvalRequestDetails };
    updatedData.status = "reject";
    setData((prev) => ({ ...prev, approvalRequestDetails: updatedData }));
  };

  return (
    <>
      {isDraftToReview && (
        <DraftToReview
          onCancel={() => {
            setDraftToReview(false);
          }}
          onSave={handleMoveToReview}
        />
      )}
      {isApprovalRequest && (
        <ApprovalRequestModal
          onCancel={() => {
            setApprovalRequest(false);
          }}
          onSave={handleSendApproval}
          handleChange={handleChange}
          data={{
            blType: data.blType,
            numberOfNonNegotiableCopies: data.numberOfNonNegotiableCopies,
            numberOfOriginalCopies: data.numberOfOriginalCopies,
          }}
        />
      )}
      <div className="flex flex-col gap-4">
        {/* top indicators and updates */}
        <div className="flex justify-between items-center">
          <div className="bg-grey-aw-50 rounded-sm gap-3  p-4 flex items-center">
            <DraftIndicator title={"BL Draft"} status={true} />
            <DraftIndicator
              title={"BL Review"}
              status={data.bLStatus !== "draft"}
            />
            <DraftIndicator
              title={"BL Approval Request"}
              status={data.bLStatus !== "draft" && data.bLStatus !== "review"}
            />
            <DraftIndicator
              title={"BL Approved"}
              status={data.bLStatus === "approved"}
            />
          </div>
          <div className="flex items-center gap-4 justify-end">
            {(isAdmin || data.bLStatus === "draft") && (
              <div
                className="cursor-pointer"
                onClick={() => {
                  setDraftToReview(true);
                }}
              >
                <GreyButton size="m" variant="" label="Move to Review" />
              </div>
            )}

            {(isAdmin ||
              (data.bLStatus !== "draft" && data.bLStatus !== "approved")) && (
              <Link
                to={`/bill-of-lading/sea-freight/editBl/${blId}`}
                className="cursor-pointer"
              >
                <NeutralBlueButton
                  label="Edit Draft"
                  size="m"
                  variant=""
                  leftIcon={<EditIcon color="#ffffff" size={16} />}
                />
              </Link>
            )}

            <div className="cursor-pointer">
              <BlackButton
                label={"Download Draft"}
                size={"m"}
                variant={""}
                leftIcon={<DownloadIcon color="#ffffff" size={16} />}
              />{" "}
            </div>
          </div>{" "}
        </div>

        {/* review screen */}

        {!isAdmin && data.bLStatus === "review" && (
          <div className="p-3 gap-3 flex flex-col bg-grey-aw-100 rounded">
            <p className="text-sm font-semibold">BL Approval Request</p>
            <div className="flex items-center gap-6 text-sm">
              <p>
                If all details are correct, please click the button below to
                request admin approval for this BL.
              </p>
              <div onClick={() => setApprovalRequest(true)}>
                {" "}
                <PrimaryButton
                  label={"Send for Approval"}
                  size={"m"}
                  variant={""}
                />
              </div>
            </div>
          </div>
        )}

        {/* approval request screen */}

        {(data.bLStatus === "request" || data.bLStatus === "approved") && (
          <div className="flex flex-col gap-3 rounded p-3 bg-grey-aw-100 ">
            <div className="gap-3  flex items-start justify-between ">
              <div className="flex flex-col gap-3">
                <p className="text-sm font-semibold">BL Approval Request</p>

                <div className="flex items-center gap-4">
                  <div className="px-2 flex flex-col py-1 gap-1 bg-grey-200 rounded">
                    <p className="text-xs">BL Type</p>
                    <p className="text-xs font-semibold">{data.blType}</p>
                  </div>
                  {data.blType === "original" && (
                    <>
                      {" "}
                      <div className="px-2 flex flex-col py-1 gap-1 bg-grey-200 rounded">
                        <p className="text-xs">Original BL Copies</p>
                        <p className="text-xs font-semibold">
                          {data.numberOfOriginalCopies}
                        </p>
                      </div>
                      <div className="px-2 flex flex-col py-1 gap-1 bg-grey-200 rounded">
                        <p className="text-xs">Non-Negotiable Copies</p>
                        <p className="text-xs font-semibold">
                          {data.numberOfNonNegotiableCopies}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-6 justify-between h-full">
                <div className="flex flex-col items-center gap-2">
                  {data.approvalRequestDetails.status === "pending" && (
                    <WarningChip
                      label={"Pending"}
                      size={"s"}
                      variant={"fill"}
                    />
                  )}
                  {data.approvalRequestDetails.status === "reject" && (
                    <ErrorChip
                      label={"Approval Cancelled"}
                      size={"s"}
                      variant={"fill"}
                    />
                  )}
                  {data.approvalRequestDetails.status === "approved" && (
                    <SuccessChip
                      label={"BL Approved"}
                      size={"s"}
                      variant={"fill"}
                    />
                  )}
                  <p className="text-xs text-grey-ab-300">
                    Requested On May 2, 2025
                  </p>
                </div>
              </div>
            </div>
            {data.approvalRequestDetails.status === "pending" && (
              <div className="flex justify-between">
                <div className="p-1 gap-2 flex items-center bg-warning-50 text-warning-700 rounded w-fit">
                  <InfoIcon color="#b56b16" size={20} />
                  <p className="text-sm ">
                    {isAdmin
                      ? "A request has been submitted for approval. Please review the details and choose an action below."
                      : " Your request to approve the following Bill of Lading has been submitted and is awaiting admin review."}
                  </p>
                </div>

                {isAdmin &&
                  data.approvalRequestDetails.status === "pending" && (
                    <div className="flex items-center gap-4 justify-center">
                      <div onClick={handleRejectBl}>
                        <ErrorButton
                          label={" Reject BL"}
                          size={"m"}
                          variant={"outline"}
                        />
                      </div>

                      <div onClick={handleApproveBl}>
                        <SuccessButton
                          label={"Approve BL "}
                          size={"m"}
                          variant={""}
                        />
                      </div>
                    </div>
                  )}
              </div>
            )}

            {data.approvalRequestDetails.status === "reject" && (
              <>
                <div className="p-1 gap-2 flex items-center bg-error-50 text-error-700 rounded w-fit">
                  <CloseIcon color="#a60001" size={20} />
                  <p className="text-sm ">
                    {isAdmin
                      ? `The BL No.${data.blNumber} has been rejected, and the requester has been informed.`
                      : "The BL approval request has been cancelled by the admin.Please review the BL details again or contact the admin for more information."}
                  </p>
                </div>

                {!isAdmin && (
                  <div className="flex items-center gap-6 text-sm">
                    <p>
                      This BL was rejected. If all details have been corrected,
                      please click the button below to re-request admin
                      approval.
                    </p>
                    <div onClick={() => setApprovalRequest(true)}>
                      {" "}
                      <PrimaryButton
                        label={"Send for Approval"}
                        size={"m"}
                        variant={""}
                      />
                    </div>
                  </div>
                )}
              </>
            )}

            {data.approvalRequestDetails.status === "approved" && (
              <div
                className={`p-1 gap-2 flex items-center ${
                  isAdmin
                    ? "bg-success-50 text-success-700"
                    : "bg-blue-50 text-blue-700"
                } rounded w-fit`}
              >
                <div>
                  {isAdmin ? (
                    <TickIcon color="#009f41  " size={20} />
                  ) : (
                    <InfoIcon color="#0067b5 " size={20} />
                  )}
                </div>
                <p className="text-sm ">
                  {isAdmin
                    ? `The BL No.${data.blNumber} has been approved, and the requester has been notified.`
                    : "The Bill of Lading has been approved by the admin. Please go to the 'BL Approved' section below to print the  original copy."}
                </p>
              </div>
            )}
          </div>
        )}
        {/* body of bl*/}
        <div className="bg-grey-aw-50 rounded p-6 gap-4 flex flex-col">
          <div className="flex items-center gap-2 justify-center">
            <div className="w-[140px] text-center">
              <img src={logo} alt="logo" className="object-fit" />
            </div>
            <div className="flex flex-col gap-1 text-center ">
              <h3 className="h3 font-semibold text-primary">
                MAATSON MARITIME INTL
              </h3>
              <p className="text-xs text-primary">
                BILL OF LADING FOR COMBINED TRANSPORT SHIPMENT OR PORT TO PORT
                SHIPMENT NOT NEGOTIABLE UNLESS CONSIGNED "TO ORDER"
              </p>
              <h5 className="h5 font-semibold">BL Draft</h5>
            </div>
          </div>
          <div className="border border-grey-ab-100" />
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="flex flex-col gap-2 h-full">
              <DraftCard
                heading={"Shipper"}
                value={data.shipper.companyName}
                subValue={data.shipper.companyAddress}
                isFlex={false}
              />
              <DraftCard
                heading={"Consignee"}
                value={data.consignee.companyName}
                subValue={data.consignee.companyAddress}
                isFlex={false}
              />
            </div>
            <div className="flex flex-col gap-2 h-full">
              <div className="flex items-center gap-2">
                <DraftCard
                  heading={"Booking ID:"}
                  value={data.bookingId}
                  isFlex={false}
                  className="w-full"
                />
                <DraftCard
                  heading={"Bill of Lading Number:"}
                  value={data.blNumber}
                  isFlex={false}
                  className="w-full"
                />
              </div>
              <DraftCard
                heading={"Shipper’s Ref"}
                value={data.shipperRef}
                isFlex={true}
              />
              <DraftCard
                heading={"Delivery Agent"}
                value={"MAATSON MARITIME INTL(OPC) PVT LTD"}
                subValue={
                  "Kosmo one,tower c.8th floor, sai nagar 3rd main road,Mogapair West, Ambattur Chennai-600 058tel No: +91 9003052529"
                }
                isFlex={false}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <DraftCard
              heading={"Notify Party"}
              value={
                data.notifyParty.length > 0
                  ? data.notifyParty[0]?.companyName
                  : ""
              }
              subValue={
                data.notifyParty.length > 0
                  ? data.notifyParty[0]?.companyAddress
                  : ""
              }
              isFlex={false}
            />
            {/* show only if notify party 2 */}
            <DraftCard
              heading={"Notify Party"}
              value={
                data.notifyParty.length > 0
                  ? data.notifyParty[1]?.companyName
                  : ""
              }
              subValue={
                data.notifyParty.length > 0
                  ? data.notifyParty[1]?.companyAddress
                  : ""
              }
              isFlex={false}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <DraftCard
              heading={"Port of Loading"}
              value={data.portOfLoading}
              isFlex={false}
            />{" "}
            <DraftCard
              heading={"Vessel / Voyage"}
              value={`${data.vesselName} ${data.vesselNumber}`}
              isFlex={false}
            />{" "}
            <DraftCard
              heading={"Port of Discharge"}
              value={data.portOfDischarge}
              isFlex={false}
            />{" "}
            <DraftCard
              heading={"Place of Delivery"}
              value={data.delivaryPlace}
              isFlex={false}
            />
            <DraftCard
              heading={"Final Destination"}
              value={data.finalDestination}
              isFlex={false}
            />{" "}
            <DraftCard
              heading={"Place of Receipt"}
              value={data.receiptPlace}
              isFlex={false}
            />
            <DraftCard
              heading={"Freight Paid at"}
              value={data.freightPaid}
              isFlex={false}
            />{" "}
            <DraftCard
              heading={"No.of.Orginal Bill of Lading"}
              value={"9768576ffd"}
              isFlex={false}
            />
          </div>
          {/* table */}
          <div>
            {/* thead */}
            <div className="grid grid-cols-5 bg-grey-100 text-sm font-semibold px-3 py-2">
              <p className="px-2 py-1">Marks & Numbers</p>
              <p className="px-2 py-1">No. of Pkgs. or Shipping Units</p>
              <p className="px-2 py-1">Description of Goods & Pkgs.</p>
              <p className="px-2 py-1">Net Weight & Cargo cross Weight</p>
              <p className="px-2 py-1">Measurement</p>
            </div>
            <div className="grid grid-cols-3 text-sm font-semibold">
              <p className="px-2 py-1">SHIPPERS LOAD/ STOW, COUNT & SEAL</p>
              <p className="px-2 py-1">SAID TO WEIGH/MEASURE</p>
              <p className="px-2 py-1">SAID TO CONTAIN</p>
            </div>
            {/* rows loop */}
            {data.cargoDetails.length > 0 && (
              <div>
                {data.cargoDetails.map((cargo, index) => (
                  <ContainerRow
                    key={index}
                    containerNumber={cargo.containerNumber}
                    sealNumber={cargo.sealNumber}
                    packageType={cargo.packageType}
                    packageQuantity={cargo.packageQuantity}
                    cargoWeight={cargo.cargoWeight}
                    cargoWeightUnit={cargo.cargoWeightUnit}
                    measurement={cargo.measurement}
                    description={cargo.description}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-4">
              <DraftCard
                heading={"Delivery Terms"}
                value={data.delivaryTerms}
                isFlex={false}
                className="w-full"
              />{" "}
              <DraftCard
                heading={"Shipping Terms"}
                value={data.shippingTerms}
                isFlex={false}
                className="w-full"
              />{" "}
            </div>
            <DraftCard
              heading={"Freight Terms"}
              value={data.freightTerms}
              isFlex={false}
            />{" "}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <div className="p-2 rounded border border-grey-ab-100">
                Excess Value Refer to Clause 6(3)(B) + (C) on reverse side
              </div>
              <div className="p-2 rounded border border-grey-ab-100 flex flex-col gap-2 h-full">
                <p>
                  The term "carriage by sea" by definition being the transport
                  of goods, merchandise, or their packing from a port of loading
                  to a port of any place between one port and another port, the
                  carrier is not and shall not be responsible for:
                </p>{" "}
                <p>
                  a) Any damage occasioned to the goods arising out of or in
                  relation to the loading and unloading of containers and/or
                  goods on or off the vessel; and/or b) Any damage to containers
                  and/or goods before the loading and after the unloading of the
                  said containers and or/goods from the vessel. c) Any damage
                  caused to containers and/or goods on board the vessel by other
                  containers in the course of loading or unloading of those
                  other containers and/or goods on board the vessel by
                  stevedores. And/or d) Any damage caused to containers and/or
                  goods prior to the loading and subsequent to the loading of
                  other containers and/or goods arising out of the vessel's
                  ancillary equipment (or any part thereof) coming into contact
                  with the said Containers and/or goods lying on the quayside
                  should the said containers and/or goods to be stacked one on
                  top of the other or improperly arranged on the quayside. e)
                  Any mis-information on the Import General Manifest and
                  re-export of import containers and/or goods and where
                  appropriate, the merchant shall furnish guarantees to the
                  Carrier's agent if there is any breach.
                </p>{" "}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="p-2 rounded border border-grey-ab-100">
                RECEIVED by the Carrier the Goods as specified above in apparent
                good order and condition unless otherwise stated, to be
                transported to such place agreed, authorized or permitted herein
                and subject to all the terms and conditions appearing on the
                front and reverse of this Bill of Lading to which the Merchat
                agrees by accepting this Bill of Lading, any local privileges
                and customs notwithstading. The particulars given above are as
                stated by the sipper and the weight, measure, quantity,
                condition, contents and value of the Goods are unknown to the
                Carrier. One of the original Bills of Lading shall be presented
                to the carrier or his agent at destination before the cargo
                shall be released.{" "}
              </p>
              <DraftCard
                heading={"Place Issued"}
                value={data.issuedPlace}
                isFlex={false}
              />{" "}
              <DraftCard
                heading={"Shipped On Board Date"}
                value={data.shippedOnboardDate}
                isFlex={false}
              />{" "}
              <DraftCard
                heading={"Date Issued"}
                value={data.issuedDate}
                isFlex={false}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBl;

const DraftIndicator: React.FC<{ title: string; status: boolean }> = ({
  title,
  status,
}) => {
  return (
    <div className="flex flex-col gap-2 min-w-[124px]">
      <p className="text-center text-xs font-semibold">{title}</p>
      <span
        className={`${
          status ? "bg-primary" : "bg-primary-50"
        } rounded-sm h-2 w-full transition-all duration-500 ease-in-out`}
      ></span>
    </div>
  );
};

const DraftCard: React.FC<{
  heading: string;
  value: string | number;
  subValue?: string | number;
  className?: string;
  isFlex: boolean;
}> = React.memo(({ heading, value, subValue, className, isFlex }) => {
  return (
    <div
      className={`p-2 rounded border border-grey-ab-100 flex ${
        isFlex
          ? "items-center gap-2"
          : `flex-col ${subValue ? "gap-3" : "gap-2"}`
      }  ${className} h-full`}
    >
      <p className="text-sm font-semibold">{heading}</p>
      <p>{value}</p>
      {subValue && <p>{subValue}</p>}
    </div>
  );
});

const ContainerRow: React.FC<CargoDetails> = React.memo(({ ...cargo }) => {
  return (
    <div className="grid grid-cols-5 text-sm  px-3 py-2 border-b">
      <p className="px-2 py-1 gap-2 flex flex-col">
        <span>{cargo.containerNumber}</span>
        <span>SEAL: {cargo.sealNumber}</span>
      </p>
      <p className="px-2 py-1 ">
        Packing List No: {cargo.packageType}-{cargo.packageQuantity}
      </p>
      <p className="px-2 py-1 ">{cargo.description}</p>
      <p className="px-2 py-1 ">
        {cargo.cargoWeight} {cargo.cargoWeightUnit}
      </p>
      <p className="px-2 py-1 ">{cargo.measurement ?? "-"}</p>
    </div>
  );
});
