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
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import ApprovalRequestModal from "./ApprovalRequestModal";
import WarningChip from "../../../components/chips/WarningChip";
import ErrorChip from "../../../components/chips/ErrorChip";
import SuccessChip from "../../../components/chips/SuccessChip";
import SuccessButton from "../../../components/buttons/SuccessButton";
import ErrorButton from "../../../components/buttons/ErrorButton";
import DraftToReview from "../billOfLadingSeaFreight/DraftToReview";
// import axios from "axios";

type ShipperDetails = {
  companyName: string;
  companyAddress: string;
  accountNumber?: string;
};
type CargoDetails = {
  noOfPiecesRCP: string;
  grossWeight: number;
  grossWeightUnit: string;
  rateClass: string;
  commodityItemNo: string;
  chargeableWeight: string;
  rate: string;
  charge: string;
  total: string;
  natureAndGoodsOfQuantity: string;
  dimensionOrValue: string;
};
type RequestDetails = {
  status: "pending" | "reject" | "approved";
  requestedPerson: string;
  approvedPerson: string;
};

interface BLData {
  bookingId: string;
  mawbNumber: string;
  hawbNumber: string;
  shipper: ShipperDetails;
  consignee: ShipperDetails;
  notifyParty: ShipperDetails;
  carrierAgent: ShipperDetails;
  cargoDetails: CargoDetails[];
  agentIATACode: string;
  accountNo: string;
  airportDeparture: string;
  referenceNumber: string;
  optionalShippingInfo: string;
  acountingInfo: string;
  to: string;
  byCarrier: string;
  routingAndDestination: string;
  secondTo: string;
  secondBy: string;
  thirdTo: string;
  thirdBy: string;
  currency: string;
  CHGS_Code: string;
  declaredValueForCarriage: string;
  declaredValueForCustoms: string;
  WT_VAT: string;
  others: string;
  airportDestination: string;
  requestedFlightDate: string[];
  amountOfInsurance: string;
  handlingInfo: string;
  x: string;
  totalGrossWeight: number;
  CBM: string;
  currencyConversionRates: string;
  CC_ChargesInDestination: string;
  forCarrierUseOnlyInDestination: string;
  chargesAtDestination: string;
  totalCollectCharges: string;
  otherCharges: string;
  signatureOfShipper: string;
  executedDate: string;
  executedPlace: string;
  signatureOfIssuingCarrier: string;
  weightChargeStatus: "prepaid" | "collected";
  weightChargeAmount: string;
  valuationChargeStatus: "prepaid" | "collected";
  valuationChargeAmount: string;
  taxStatus: "prepaid" | "collected";
  taxAmount: string;
  agentOtherChargesDueStatus: "prepaid" | "collected";
  agentOtherChargesDueAmount: string;
  carrierOtherChargesDueStatus: "prepaid" | "collected";
  carrierOtherChargesDueAmount: string;
  bLStatus: "draft" | "review" | "request" | "approved";
  blType: "original" | "airway";
  approvalRequestDetails: RequestDetails;
  numberOfOriginalCopies: number;
  numberOfNonNegotiableCopies: number;
  numberOfAirwayBlCopies: number;
}

const ViewAirBl: React.FC = () => {
  const { blId } = useParams();
  const isAdmin = false;
  const [data, setData] = useState<BLData>({
    bookingId: "123dd4545",
    mawbNumber: "13450092",
    hawbNumber: "123dd4545",
    shipper: {
      companyName: "LIFECO",
      companyAddress:
        "LIBTAN FERTILIZER COMPANY P.O.Box 6796 hay Andakus Brega-Libya LIBTAN FERTILIZER COMPANY P.O.Box 6796 hay Andakus Brega-Libya",
      accountNumber: "56796785675",
    },
    consignee: {
      companyName: "LIFECO",
      companyAddress:
        "LIBTAN FERTILIZER COMPANY P.O.Box 6796 hay Andakus Brega-Libya LIBTAN FERTILIZER COMPANY P.O.Box 6796 hay Andakus Brega-Libya",
      accountNumber: "56796785675",
    },
    notifyParty: { companyName: "RKFI", companyAddress: "RKFI" },
    carrierAgent: {
      companyName: "MAATSON MARITIME INTL(OPC) PVT LTD",
      companyAddress:
        "A/C ARTS INDUSTRIAL PVT LTD C/O.integrated chennai BusinessPart (India)private limited, Survey NO.NO1202,kuruvimedu Road, kondakarai,Tiruvallur, tamilnadu 600120",
    },
    cargoDetails: [
      {
        noOfPiecesRCP: "1",
        grossWeight: 15400,
        grossWeightUnit: "KGS",
        rateClass: "154,00",
        commodityItemNo: "154,00",
        chargeableWeight: "154,00",
        rate: "154,00",
        charge: "154,00",
        total: "20978 kgs",
        natureAndGoodsOfQuantity: "PARTS FOR WIND TURBINES",
        dimensionOrValue: "Dims (m):2,40*0,80*0,73/1",
      },
    ],
    agentIATACode: "MaerskTitan,123dd4545",
    accountNo: "Chennai, India",
    airportDeparture: "Billund (Billund) EK CPH-DXB-MAA",
    referenceNumber: "R23464efKFI",
    optionalShippingInfo: "Karachi, Pakistan",
    acountingInfo: "Terms CPT MAA Airport",
    to: "CPH",
    byCarrier: "EK",
    routingAndDestination: "EK4655/27",
    secondTo: "BXP",
    secondBy: "EK",
    thirdTo: "MAA",
    thirdBy: "EK",
    currency: "DKK",
    CHGS_Code: "DKK",
    declaredValueForCarriage: "NVD",
    declaredValueForCustoms: "NCV",
    WT_VAT: "PPT",
    others: "PPT",
    airportDestination: "Chennai (International)",
    requestedFlightDate: ["EK152/28", "EK542/01"],
    amountOfInsurance: "XXX",
    handlingInfo:
      "DK/RA/00138-01/NSC EAW PLACE OF FINAL DESTINATION [SEZ PORT CODE] : INAIP6",
    x: "SCI ",
    totalGrossWeight: 15400,
    CBM: "1.402",
    currencyConversionRates: "30",
    CC_ChargesInDestination: "1234",
    forCarrierUseOnlyInDestination: "45600",
    chargesAtDestination: "456700",
    totalCollectCharges: "500000",
    otherCharges: "no other charges",
    signatureOfShipper: "Blue Water Shipping A/S",
    executedDate: "01 OCT 24",
    executedPlace: "Billund (Billund)",
    signatureOfIssuingCarrier: "Patrick Dreier Jørgensen",
    weightChargeStatus: "prepaid",
    weightChargeAmount: "10000",
    valuationChargeStatus: "prepaid",
    valuationChargeAmount: "10000",
    taxStatus: "prepaid",
    taxAmount: "10000",
    agentOtherChargesDueStatus: "prepaid",
    agentOtherChargesDueAmount: "10000",
    carrierOtherChargesDueStatus: "prepaid",
    carrierOtherChargesDueAmount: "10000",
    bLStatus: "draft",
    approvalRequestDetails: {
      status: "pending",
      requestedPerson: "",
      approvedPerson: "",
    },
    blType: "airway",
    numberOfNonNegotiableCopies: 1,
    numberOfOriginalCopies: 1,
    numberOfAirwayBlCopies: 1,
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
            numberOfAirwayBlCopies: data.numberOfAirwayBlCopies,
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
                to={`/bill-of-lading/air-freight/editBl/${blId}`}
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
                  {data.blType === "original" ? (
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
                  ) : (
                    <div className="px-2 flex flex-col py-1 gap-1 bg-grey-200 rounded">
                      <p className="text-xs">Airway BL Copies</p>
                      <p className="text-xs font-semibold">
                        {data.numberOfAirwayBlCopies}
                      </p>
                    </div>
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
                      ? `The HAWB No.${data.hawbNumber} has been rejected, and the requester has been informed.`
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
                    ? `The HAWB No.${data.hawbNumber} has been approved, and the requester has been notified.`
                    : "The Bill of Lading has been approved by the admin. Please go to the 'BL Approved' section below to print the  original copy."}
                </p>
              </div>
            )}
          </div>
        )}
        {/* body of bl*/}
        <div className="bg-grey-aw-50 rounded p-6 gap-4 flex flex-col">
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-col gap-1 border rounded border-grey-ab-100 pb-2 pl-2">
                <div className="flex gap-3 justify-between">
                  <p className="basis-1/2 font-semibold text-sm py-2">
                    Shipper
                  </p>
                  <DraftCard
                    heading={"Shipper Account Number"}
                    value={data.shipper.accountNumber || ""}
                    isFlex={false}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p>{data.shipper.companyName}</p>
                  <p>{data.shipper.companyAddress}</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 border rounded border-grey-ab-100 pb-2 pl-2">
                <div className="flex gap-3 justify-between">
                  <p className="basis-1/2 font-semibold text-sm py-2">
                    Consignee
                  </p>
                  <DraftCard
                    heading={"Consignee Account Number"}
                    value={data.consignee.accountNumber || ""}
                    isFlex={false}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p>{data.consignee.companyName}</p>
                  <p>{data.consignee.companyAddress}</p>
                </div>
              </div>
              <DraftCard
                heading={"Issuing Carrier's Agent Name and Address"}
                value={data.carrierAgent.companyName}
                subValue={data.carrierAgent.companyAddress}
                isFlex={false}
              />
              <DraftCard
                heading={"Notify Party"}
                value={data.notifyParty.companyName}
                subValue={data.notifyParty.companyAddress}
                isFlex={false}
              />
              <div className="flex gap-2">
                <DraftCard
                  heading={"Agent's IATA Code"}
                  value={data.agentIATACode}
                  isFlex={false}
                  className="w-full"
                />{" "}
                <DraftCard
                  heading={"Account No."}
                  value={data.accountNo}
                  className="w-full"
                  isFlex={false}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center gap-3 justify-center p-2 border border-grey-ab-100 rounded ">
                <div className="w-[140px] text-center shrink-0">
                  <img src={logo} alt="logo" className="object-fit" />
                </div>
                <div className="flex flex-col gap-1 text-center ">
                  <h5 className="h5 font-semibold text-primary">
                    MAATSON MARITIME INTL
                  </h5>
                  <p className="text-xs text-primary">
                    BILL OF LADING FOR COMBINED TRANSPORT SHIPMENT OR PORT TO
                    PORT SHIPMENT NOT NEGOTIABLE UNLESS CONSIGNED "TO ORDER"
                  </p>
                  <h5 className="text-lg font-semibold">BL Draft</h5>
                </div>
              </div>
              <div className="flex gap-2">
                <DraftCard
                  heading={"MAWB Number"}
                  value={data.mawbNumber}
                  className="w-full"
                  isFlex={false}
                />{" "}
                <DraftCard
                  heading={"HAWB Number"}
                  value={data.hawbNumber}
                  className="w-full"
                  isFlex={false}
                />
              </div>
              <div className="border border-grey-ab-100 rounded p-2 text-sm">
                <p>
                  Copies 1, 2 and 3 of this Air Waybill are originals and have
                  the same validity
                </p>
              </div>
              <div className="border border-grey-ab-100 rounded p-2 text-xs min-h-[234px]">
                <p>
                  It is agreed that the goods described herein are accepted in
                  apparent good order and condition (except as noted) for
                  carriage SUBJECT TO THE CONDITIONS OF CONTRACT ON THE REVERSE
                  HEREOF, ALL GOODS MAY BE CARRIED BY ANY OTHER MEANS INCLUDING
                  ROAD OR ANY OTHE CARRIER UNLESS SPECIFIC CONTRARY INTRUDUTIONS
                  ARE GIVEN HEREON BY THE SHIPPER, AND SHIPPER AGREES THAT THE
                  SHIPMENT MAY BE CARRIED VIA INTERMEDIATE STOPPING PLACES WHICH
                  THE CARRIER DEEMS APPROPRIATE. THE SHIPPER’S ATTENTION IS
                  DRAWN TO THE NOTICE CONCERNING CARRIER‘S LIMITATION OF
                  LIABILITY. Shipper may increase such limitation of liability
                  by declaring a higher value for carriage and paying a
                  supplemental charge if required.
                </p>
              </div>
              <DraftCard
                heading={"Accounting Information"}
                value={data.acountingInfo}
                className="w-full"
                isFlex={false}
              />{" "}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-4">
              <DraftCard
                heading={
                  "Airport of Departure (Addr. of First Carrier) and Requested Routing"
                }
                value={data.airportDeparture}
                isFlex={false}
              />{" "}
              <div className="flex gap-4">
                <DraftCard
                  heading={"Reference Number"}
                  value={data.referenceNumber}
                  isFlex={false}
                  className="w-full"
                />{" "}
                <DraftCard
                  heading={"Optional Shipping Information"}
                  value={data.optionalShippingInfo}
                  isFlex={false}
                  className="w-full"
                />{" "}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex gap-1">
                <DraftCard
                  heading={"TO"}
                  value={data.to}
                  isFlex={false}
                  className="w-full text-2xs"
                  headingStyle="text-2xs"
                />{" "}
                <DraftCard
                  heading={"By First Carrier"}
                  value={data.byCarrier}
                  isFlex={false}
                  className="w-full text-2xs"
                  headingStyle="text-2xs"
                />{" "}
                <DraftCard
                  heading={"Routing & Destination"}
                  value={data.routingAndDestination}
                  isFlex={false}
                  className="w-full text-2xs"
                  headingStyle="text-2xs"
                />{" "}
                <DraftCard
                  heading={"TO"}
                  value={data.secondTo}
                  isFlex={false}
                  className="w-full text-2xs"
                  headingStyle="text-2xs"
                />{" "}
                <DraftCard
                  heading={"BY"}
                  value={data.secondBy}
                  isFlex={false}
                  className="w-full text-2xs"
                  headingStyle="text-2xs"
                />{" "}
                <DraftCard
                  heading={"TO"}
                  value={data.thirdTo}
                  isFlex={false}
                  className="w-full text-2xs"
                  headingStyle="text-2xs"
                />{" "}
                <DraftCard
                  heading={"BY"}
                  value={data.thirdBy}
                  isFlex={false}
                  className="w-full text-2xs"
                  headingStyle="text-2xs"
                />{" "}
              </div>

              <div className="flex gap-1 ">
                <DraftCard
                  heading={"Currency"}
                  value={data.currency}
                  isFlex={false}
                  className="w-full text-2xs"
                  headingStyle="text-2xs"
                />{" "}
                <DraftCard
                  heading={"CHGS CODE"}
                  value={data.CHGS_Code}
                  isFlex={false}
                  className="w-full text-2xs"
                  headingStyle="text-2xs"
                />{" "}
                <div className="p-1 gap-1 flex flex-col border border-grey-ab-100 rounded items-center">
                  <p className="text-2xs font-semibold">WT/VAT</p>
                  <div className="flex gap-1">
                    <DraftCard
                      heading={"PPT"}
                      value={data.WT_VAT === "PPT" ? "YS" : ""}
                      isFlex={false}
                      className="p-[4px] text-3xs  gap-[4px]"
                      headingStyle="text-2xs"
                    />
                    <DraftCard
                      heading={"COL"}
                      value={data.WT_VAT === "COL" ? "YS" : ""}
                      isFlex={false}
                      className="p-[4px] text-3xs  gap-[4px]"
                      headingStyle="text-2xs"
                    />
                  </div>
                </div>
                <div className="p-1 gap-1 flex flex-col border border-grey-ab-100 rounded items-center">
                  <p className="text-2xs font-semibold">OTHER</p>
                  <div className="flex gap-1">
                    <DraftCard
                      heading={"PPT"}
                      value={data.others === "PPT" ? "YS" : ""}
                      isFlex={false}
                      className="p-[4px] text-3xs gap-[4px]"
                      headingStyle="text-2xs "
                    />
                    <DraftCard
                      heading={"COL"}
                      value={data.others === "COL" ? "YS" : ""}
                      isFlex={false}
                      className="p-[4px] text-3xs gap-[4px]"
                      headingStyle="text-2xs"
                    />
                  </div>
                </div>
                <DraftCard
                  heading={"Declared Value for Carriage"}
                  value={data.declaredValueForCarriage}
                  isFlex={false}
                  className="w-full text-2xs"
                  headingStyle="text-2xs"
                />{" "}
                <DraftCard
                  heading={"Declared Value for Customs"}
                  value={data.declaredValueForCustoms}
                  isFlex={false}
                  className="w-full text-2xs"
                  headingStyle="text-2xs"
                />{" "}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex gap-2">
                <DraftCard
                  heading={"Airport of Destination"}
                  value={data.airportDeparture}
                  isFlex={false}
                  className="w-full"
                />{" "}
                <div className="flex flex-col border border-grey-ab-100 rounded gap-2 p-2 w-full">
                  <p className="text-sm font-semibold">Requested Flight/Date</p>
                  <div className="flex justify-between gap-2">
                    <p>{data.requestedFlightDate[0]}</p>
                    <p>{data.requestedFlightDate[1]}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <DraftCard
                  heading={"Amount of Insurance"}
                  value={data.amountOfInsurance}
                  isFlex={false}
                  className="w-full"
                />
                <div className="flex flex-col border border-grey-ab-100 rounded gap-2 p-2 w-full">
                  <p className="text-2xs">
                    INSURANCE: If Carrier offers insurance, and such insurance
                    is requested in accordance with the conditions thereof,
                    indicate amount to be EK542/01 insured in figures in box
                    marked ‚Amount of Insurance‘
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-grey-ab-100 rounded p-2 flex gap-3 justify-between">
            <div className="flex flex-col gap-3 w-full basis-1/3 ">
              <p className="text-sm font-semibold">Handling Information</p>
              <p>{data.handlingInfo}</p>
            </div>
            <div className="flex items-center gap-3 w-full basis-1/4 border border-grey-ab-100 rounded h-fit p-2 self-end">
              <p className="text-sm font-semibold">X</p>
              <p>{data.x}</p>
            </div>
          </div>

          {/* table */}
          <table>
            {/* thead */}
            <thead>
              <tr className=" bg-grey-100 text-sm font-semibold px-3 py-2">
                <td className="px-2 py-1">No. of Pieces RCP</td>
                <td className="px-2 py-1">Gross Weight</td>
                <td className="px-2 py-1">kg/ lb</td>
                <td className="px-2 py-1">Rate Class</td>
                <td className="px-2 py-1">Commodity Item No.</td>
                <td className="px-2 py-1">Chargeable Weight</td>
                <td className="px-2 py-1">Rate</td>
                <td className="px-2 py-1">Charge</td>
                <td className="px-2 py-1">Total</td>
                <td className="px-2 py-1">
                  Nature and Quantity of Goods (incl. Dimensions or Volume)
                </td>
              </tr>
            </thead>

            {/* rows loop */}
            {data.cargoDetails.length > 0 && (
              <tbody>
                {data.cargoDetails.map((cargo, index) => (
                  <ContainerRow
                    key={index}
                    noOfPiecesRCP={cargo.noOfPiecesRCP}
                    grossWeight={cargo.grossWeight}
                    grossWeightUnit={cargo.grossWeightUnit}
                    rateClass={cargo.noOfPiecesRCP}
                    commodityItemNo={cargo.commodityItemNo}
                    chargeableWeight={cargo.chargeableWeight}
                    rate={cargo.rate}
                    charge={cargo.charge}
                    total={cargo.total}
                    natureAndGoodsOfQuantity={cargo.natureAndGoodsOfQuantity}
                    dimensionOrValue={cargo.dimensionOrValue}
                  />
                ))}
              </tbody>
            )}
          </table>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <table className="border border-grey-ab-100  text-sm">
                <thead>
                  <tr className=" border-b">
                    <th className="p-2  text-start">Heading</th>
                    <th className="p-2  text-start">Prepaid</th>
                    <th className="p-2  text-start">Collect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">Weight Charge</td>
                    <td className="p-2 ">100</td>
                    <td className="p-2 ">20</td>
                  </tr>{" "}
                  <tr className="border-b">
                    <td className="p-2 font-semibold">Valuation Charge</td>
                    <td className="p-2 ">100</td>
                    <td className="p-2 ">20</td>
                  </tr>{" "}
                  <tr className="border-b">
                    <td className="p-2 font-semibold">Tax</td>
                    <td className="p-2 ">100</td>
                    <td className="p-2 ">20</td>
                  </tr>{" "}
                  <tr className="border-b">
                    <td className="p-2 font-semibold">
                      Total Other Charges Due Agent
                    </td>
                    <td className="p-2 ">100</td>
                    <td className="p-2 ">20</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">
                      Total Other Charges Due Carrier
                    </td>
                    <td className="p-2 ">100</td>
                    <td className="p-2 ">20</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">TOTAL</td>
                    <td className="p-2 font-semibold">100</td>
                    <td className="p-2 font-semibold">200</td>
                  </tr>
                </tbody>
              </table>
              <div className="grid grid-cols-2 gap-2">
                <DraftCard
                  heading={"Currency Conversion Rates"}
                  value={"30"}
                  isFlex={false}
                />{" "}
                <DraftCard
                  heading={"CC Charges in Dest. Currency"}
                  value={"1234"}
                  isFlex={false}
                />{" "}
                <DraftCard
                  heading={"For Carrier's use only at Destination"}
                  value={"45600"}
                  isFlex={false}
                />{" "}
                <DraftCard
                  heading={"Charges at Destination"}
                  value={"456700"}
                  isFlex={false}
                />
              </div>
              <DraftCard
                heading={"Total Collect Charges"}
                value={"500000"}
                isFlex={false}
              />
            </div>
            <div className="flex flex-col gap-2">
              <DraftCard
                heading={"Other Charges"}
                value={data.otherCharges}
                isFlex={false}
              />
              <div className="border border-grey-ab-100 p-2 flex flex-col rounded gap-4">
                <p className="text-2xs  min-h-[105px]">
                  Shipper certifies that the particulars on the face hereof are
                  correct and that insofar as any part of the consignment
                  contains dangerous goods, such part is properly described by
                  name and is in proper condition for carriage by air according
                  to the applicable Dangerous Goods Regulations
                </p>
                <div className="flex flex-col gap-1 text-sm">
                  <p className="text-center">{data.signatureOfShipper}</p>
                  <div className="border border-dashed" />
                  <p className="text-center">
                    Signature of Shipper or his Agent
                  </p>
                </div>
              </div>
              <div className="border border-grey-ab-100 p-2 flex flex-col justify-end rounded gap-4 min-h-[150px]">
                <div className="flex flex-col gap-1 ">
                  <div className="flex items-center justify-between gap-1 text-xs">
                    <p className="">{data.executedDate}</p>
                    <p className="">{data.executedPlace}</p>
                    <p className="">{data.signatureOfIssuingCarrier}</p>
                  </div>
                  <div className="border border-dashed" />
                  <div className="flex items-center justify-between gap-1 text-xs">
                    <p className="">Executed on (Date)</p>
                    <p className="">at (Place)</p>
                    <p className="">
                      Signature of Issuing Carrier or its Agent
                    </p>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAirBl;

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
  headingStyle?: string;
  isFlex: boolean;
}> = React.memo(
  ({ heading, value, subValue, className, isFlex, headingStyle }) => {
    return (
      <div
        className={`p-2 rounded border border-grey-ab-100 flex ${
          isFlex
            ? "items-center gap-2"
            : `flex-col ${subValue ? "gap-3" : "gap-2"}`
        }  ${className} h-full`}
      >
        <p
          className={` font-semibold ${
            headingStyle ? headingStyle : "text-sm"
          }`}
        >
          {heading}
        </p>
        <div className="flex flex-col gap-2">
          <p>{value}</p>
          {subValue && <p>{subValue}</p>}
        </div>
      </div>
    );
  }
);

const ContainerRow: React.FC<CargoDetails> = React.memo(({ ...cargo }) => {
  return (
    <tr className=" text-sm  px-3 py-2 border-b">
      <td className="px-2 py-1 ">{cargo.noOfPiecesRCP}</td>
      <td className="px-2 py-1 ">{cargo.grossWeight}</td>
      <td className="px-2 py-1 ">{cargo.grossWeightUnit}</td>
      <td className="px-2 py-1 ">{cargo.rateClass}</td>
      <td className="px-2 py-1 ">{cargo.commodityItemNo}</td>
      <td className="px-2 py-1 ">{cargo.chargeableWeight}</td>
      <td className="px-2 py-1 ">{cargo.rate}</td>
      <td className="px-2 py-1 ">{cargo.charge}</td>
      <td className="px-2 py-1 ">{cargo.total}</td>
      <td className="px-2 py-1 ">{cargo.natureAndGoodsOfQuantity}</td>
    </tr>
  );
});
