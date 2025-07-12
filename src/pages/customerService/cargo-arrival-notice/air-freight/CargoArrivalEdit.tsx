import React, { useState } from "react";
import { Layout } from "../../../accounts/invoiceImport/ViewInvoice";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";
import GroupField from "../../../../components/groupField/GroupField";
import {
  AddIcon,
  DeleteIcon,
  ProductIcon,
  WeightIcon,
} from "../../../../components/icons/Icons";

const CargoArrivalEdit: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
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
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col gap-6 bg-grey-aw-50 rounded-xs shadow-lg p-6">
      <p className="py-1 text-lg font-bold text-grey-ab-900">
        Cargo Arrival Notice Form
      </p>
      <div className="grid grid-cols-2">
        <Layout label={"Port of Loading"} value={"Los Angeles, USA"} />
        <Layout label={"Port of Discharge"} value={"Rotterdam, Netherlands"} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <GroupField
            label={"Shipper Name"}
            type={""}
            placeholder={"Enter Shipper Name"}
            name={"shipperName"}
            value={data.shipperName}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />
          <GroupField
            label={"Consignee Name"}
            type={""}
            placeholder={"Enter Consignee Name"}
            name={"consigneeName"}
            value={data.consigneeName}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />
          <GroupField
            label={"Arrival Date"}
            type={"date"}
            placeholder={"Enter Arrival Date"}
            name={"arrivalDate"}
            value={data.arrivalDate}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />
        </div>
        <div className="flex gap-4">
          <GroupField
            label={"Flight Type"}
            type={""}
            placeholder={"Enter Flight Type"}
            name={"flightType"}
            value={data.flightType}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />{" "}
          <GroupField
            label={"Flight Number"}
            type={""}
            placeholder={"Enter Flight Number"}
            name={"flightNumber"}
            value={data.flightNumber}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />
          <GroupField
            label={"Bill of Lading Number"}
            type={""}
            placeholder={"Enter Bill of Lading Number"}
            name={"billOfLadingNumber"}
            value={data.billOfLadingNumber}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />
        </div>
        <div className="flex gap-4">
          <GroupField
            label={"MAWB Number"}
            type={""}
            placeholder={"Enter MAWB Number"}
            name={"mawbNumber"}
            value={data.mawbNumber}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />{" "}
          <GroupField
            label={"HAWB Number"}
            type={""}
            placeholder={"Enter HAWB Number"}
            name={"hawbNumber"}
            value={data.hawbNumber}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex w-full items-end">
            <GroupField
              label={"Package Quantity"}
              type={""}
              placeholder={"Enter Package Quantity"}
              name={"packageQuantity"}
              value={data.packageQuantity}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="w-[70%]"
              leftIcon={<ProductIcon color="#2C398F" />}
            />
            <GroupField
              label={""}
              type={"select"}
              placeholder={""}
              name={"packageType"}
              value={data.packageType}
              options={[{ value: "Box", label: "Box" }]}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="w-[30%]"
            />
          </div>
          <div className="flex w-full items-end">
            <GroupField
              label={"Cargo Weight"}
              type={""}
              placeholder={"Enter Cargo Weight"}
              name={"cargoWeight"}
              value={data.cargoWeight}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="w-[70%]"
              leftIcon={<WeightIcon color="#2C398F" />}
            />
            <GroupField
              label={""}
              type={"select"}
              placeholder={""}
              name={"weightUnit"}
              value={data.weightUnit}
              options={[{ value: "KGS", label: "KGS" }]}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="w-[30%]"
            />
          </div>
        </div>

        <p className="text-blue">
          The above shipment is expected to arrive at CHENNAI port on or about
          26-JUN-2025
        </p>
        <GroupField
          label={"Remarks"}
          type={"textarea"}
          placeholder={"Write Here"}
          name={"remarks"}
          value={data.remarks}
          onChange={handleChange}
          error={false}
          errorMessage={""}
        />
      </div>

      <div className="flex justify-end gap-4">
        <div onClick={() => navigate(-1)}>
          <PrimaryButton label={"Cancel CAN"} size={"m"} variant={"link"} />
        </div>
        <PrimaryButton label={"Save CAN"} size={"m"} variant={"primary"} />
      </div>
    </div>
  );
};

export default CargoArrivalEdit;
