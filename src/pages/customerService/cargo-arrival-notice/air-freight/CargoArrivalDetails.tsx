import React, { useState } from "react";
import NeutralBlueButton from "../../../../components/buttons/NeutralBlueButton";
import {
  DeleteIcon,
  DownloadIcon,
  EditIcon,
} from "../../../../components/icons/Icons";
import SuccessButton from "../../../../components/buttons/SuccessButton";
import ErrorButton from "../../../../components/buttons/ErrorButton";
import { NavLink, useParams } from "react-router-dom";
import AccountsModel from "../../../accounts/components/AccountsModel";

const CargoArrivalDetails: React.FC = () => {
  const { id, canNo } = useParams();
  const [data, setData] = useState({
    canNumber: "PMMI8054",
    canDate: "11-03-2025",
    portOfLoading: "Los Angeles, USA",
    portOfDischarge: "Rotterdam, Netherlands",
    shipperName: "Legend Shipping Agency Private Limited",
    consigneeName: "Arrow Shipping Agency Private Limited",
    arrivalDate: "11-03-2025",
    flightType: "POA",
    flightNumber: "V32505W",
    billOfLadingNumber: "MSCU1234567",
    mawbNumber: "VGS0023402",
    hawbNumber: "MSCU1234567",
    packageQuantity: "500",
    packageType: "Box",
    cargoWeight: "100000",
    weightUnit: "KGS",

    remarks:
      "Please share your KYC details / GST COPY / PAN COPY at the earliest and Also advise which CFS we need to move? You are hereby requested to contact us with the duly accomplished Bill of lading to us and collect delivery on payment of all the relevant charges as early as possible. DPD/Nepal/Bhutan consignees are requested to take delivery of cargo from dock itself within the stipulated time of 48 hours from discharge, failing which containers may be removed to any CFS as per our own choice.",
  });
  return (
    <div className="flex flex-col gap-6 bg-grey-aw-50 py-4 rounded-xs shadow-lg">
      <div className="flex justify-between py-1 px-4 items-center">
        <p className="text-grey-ab-900 text-lg font-bold">
          Cargo Arrival Notice Details
        </p>
        <div className="flex gap-4 ">
          <NavLink to={`/cargo-arrival-notice/air-freight/edit/${id}/${canNo}`}>
            <NeutralBlueButton
              label={"Edit"}
              size={"m"}
              variant={"primary"}
              leftIcon={<EditIcon size={16} color="#ffffff" />}
            />
          </NavLink>
          <SuccessButton
            label={"Download"}
            size={"m"}
            variant={"primary"}
            leftIcon={<DownloadIcon size={16} color="#ffffff" />}
          />
          <ErrorButton
            label={"Delete"}
            size={"m"}
            variant={"primary"}
            leftIcon={<DeleteIcon size={16} color="#ffffff" />}
          />
        </div>
      </div>

      <div className="flex flex-col items-end gap-1 px-4">
        <AccountsModel
          label={"CAN Number :"}
          value={data.canNumber}
          parentStyle="gap-2"
        />
        <AccountsModel
          label={"CAN Date :"}
          value={data.canDate}
          parentStyle="gap-2"
        />
      </div>

      <div className="flex flex-col ">
        <div className="flex flex-col px-6">
          <div className="grid grid-cols-2 gap-6 py-1 px-4 border-y border-y-grey-ab-50 ">
            <AccountsModel
              label={"Port of Loading"}
              value={data.portOfLoading}
              parentStyle="flex-col gap-2 px-8 py-1"
            />
            <AccountsModel
              label={"Port of Discharge"}
              value={data.portOfDischarge}
              parentStyle="flex-col gap-2 px-8 py-1"
            />
          </div>
          <div className="grid grid-cols-2 gap-6 py-1 px-4 border-b border-b-grey-ab-50 ">
            <AccountsModel
              label={"Shipper Name"}
              value={data.shipperName}
              parentStyle="flex-col gap-2 px-8 py-1"
            />
            <AccountsModel
              label={"Consignee Name"}
              value={data.consigneeName}
              parentStyle="flex-col gap-2 px-8 py-1"
            />
          </div>
          <div className="grid grid-cols-2 gap-6 py-1 px-4 border-b border-b-grey-ab-50 ">
            <AccountsModel
              label={"Bill of Lading Number"}
              value={data.billOfLadingNumber}
              parentStyle="flex-col gap-2 px-8 py-1"
            />
            <AccountsModel
              label={"Arrival Date"}
              value={data.arrivalDate}
              parentStyle="flex-col gap-2 px-8 py-1"
            />
          </div>
          <div className="grid grid-cols-2 gap-6 py-1 px-4 border-b border-b-grey-ab-50 ">
            <AccountsModel
              label={"Flight Type "}
              value={data.flightType}
              parentStyle="flex-col gap-2 px-8 py-1"
            />
            <AccountsModel
              label={"Flight Number"}
              value={data.flightNumber}
              parentStyle="flex-col gap-2 px-8 py-1"
            />
          </div>
          <div className="grid grid-cols-2 gap-6 py-1 px-4 border-b border-b-grey-ab-50 ">
            <AccountsModel
              label={"MAWB Number "}
              value={data.mawbNumber}
              parentStyle="flex-col gap-2 px-8 py-1"
            />
            <AccountsModel
              label={"HAWB Number"}
              value={data.hawbNumber}
              parentStyle="flex-col gap-2 px-8 py-1"
            />
          </div>
          <div className="grid grid-cols-2 gap-6 py-1 px-4 border-b border-b-grey-ab-50 ">
            <AccountsModel
              label={"Package Quantity"}
              value={data.packageQuantity + " " + data.packageType}
              parentStyle="flex-col gap-2 px-8 py-1"
            />
            <AccountsModel
              label={"Cargo Weight"}
              value={data.cargoWeight + " " + data.weightUnit}
              parentStyle="flex-col gap-2 px-8 py-1"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 px-6 py-4">
          <p className="text-blue">
            The above shipment is expected to arrive at {data.portOfLoading}{" "}
            port on or about {data.arrivalDate}
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-bold">Remarks</p>
            <ol className="text-grey-ab list-disc px-8">
              <li>
                Please share your KYC details / GST COPY / PAN COPY at the
                earliest and Also advise which CFS we need to move?
              </li>
              <li>
                You are hereby requested to contact us with the duly
                accomplished Bill of lading to us and collect delivery on
                payment of all the relevant charges as early as possible
              </li>
              <li>
                DPD/Nepal/Bhutan consignees are requested to take delivery of
                cargo from dock itself within the stipulated time of 48 hours
                from discharge, failing which containers may be removed to any
                CFS as per our own choice.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CargoArrivalDetails;
