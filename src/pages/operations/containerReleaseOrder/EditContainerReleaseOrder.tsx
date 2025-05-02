import React, { useState } from "react";
import Logo from "/images/logo.svg";
import GroupField from "../../../components/groupField/GroupField";
import { AddIcon, DeleteIcon } from "../../../components/icons/Icons";
import BlackButton from "../../../components/buttons/BlackButton";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { Link, useNavigate } from "react-router-dom";
import HeadersLayout from "./layouts/HeadersLayouts";

const EditContainerReleaseOrder: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    referenceNumber: "389789232",
    containerTerminal: "Chennai",
    containerAddress: "323, abc street, chennai",
    containerDepotContact: "9898989898",
    containerDepotTelNumber: "9898989898",
    shipperName: "Franklin Josheph",
    shipperAddress: "9898989898",
    shipperCustomerContact: "9932232989",
    shipperContactNumber: "9932232989",
    portOfLoading: "Chennai",
    portOfDischarge: "Singapore",
    eta: "04-04-2025",
    etd: "04-04-2025",
    gateOpenDate: "04-04-2025",
    gateCutOff: "04-04-2025",
    cargoName: "Shipments",
    cargoType: "FCL",
    grossWeight: "10000",
    weightUnit: "KGS",
    cargoDetails: [
      {
        containerType: "20'ft",
        quantity: "1",
        containerNumber: "782732723",
      },
      {
        containerType: "40'ft",
        quantity: "5",
        containerNumber: "Random",
      },
    ],
    releaseOrderDate: "04-04-2025",
    freeStorageDays: "10",
    freeStorageExpireDate: "04-04-2025",
    remarks:
      "onboard confirmation occurs when goods have been loaded onto the vessel and all customs and documentation requirements are met.",
  });

  const handleAddMore = () => {
    const addData = {
      containerType: "",
      quantity: "",
      containerNumber: "",
    };
    setData((prev) => ({
      ...prev,
      cargoDetails: [...prev.cargoDetails, addData],
    }));
  };

  const handleDelete = (index: number) => {
    if (data.cargoDetails.length > 1) {
      setData((prev) => ({
        ...prev,
        cargoDetails: prev.cargoDetails.filter((_, i) => i !== index),
      }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCargoDetailsChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    index: number
  ) => {
    const { name, value } = e.target;
    setData((prev) => {
      const newcargo = [...prev.cargoDetails];
      newcargo[index] = { ...newcargo[index], [name]: value };
      return { ...prev, cargoDetails: newcargo };
    });
  };
  return (
    <>
      <div className="flex flex-col gap-6 px-8 py-6 rounded-xs bg-grey-aw-50">
        <div className="flex flex-col gap-2 ">
          <div className="flex flex-col gap-2 mx-auto">
            <div className="mx-auto">
              <img src={Logo} alt="logo" />
            </div>
            <p className="text-grey-ab text-lg font-bold">
              CONTAINER RELEASE ORDER
            </p>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <HeadersLayout
                label={"Branch Name:"}
                value={"Maatson Maritime Intl Opc Pvt Ltd"}
              />
              <HeadersLayout
                label={"Address:"}
                value={
                  "No: 6/1, Shastri nagar, Kodungaiyur Industrial area, Opp. to KTV oil Mill, Kodungaiyur, Chennai- 600 118."
                }
                parentStyle="max-w-[52%]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <HeadersLayout label={"Email:"} value={"arunkumar12@gmail.com"} />
              <HeadersLayout
                label={"Phone Number:"}
                value={"+91 98454 56564"}
              />
            </div>
          </div>
        </div>

        <div className="border border-grey-ab-50 "></div>

        <div className="flex justify-end">
          <div className="flex flex-col gap-3 w-[40%]">
            <HeadersLayout label={"Booking Number:"} value={"123dd4545"} />
            <HeadersLayout label={"Booking Date:"} value={"11/05/2025"} />
            <GroupField
              label={"Release Reference Number"}
              type={""}
              placeholder={"Enter Reference Number"}
              name={"referenceNumber"}
              value={data.referenceNumber}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-4 w-[40%]">
            <p className="font-semibold text-grey-ab">
              Empty Container Pickup Location
            </p>
            <GroupField
              label={"Container Terminal*"}
              type={""}
              placeholder={"Enter Container Terminal"}
              name={"containerTerminal"}
              value={data.containerTerminal}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />
            <GroupField
              label={"Address*"}
              type={"textarea"}
              placeholder={"Enter Address"}
              name={"containerAddress"}
              value={data.containerAddress}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />
            <GroupField
              label={"Depot Contact*"}
              type={""}
              placeholder={"Enter Depot Contact"}
              name={"containerDepotContact"}
              value={data.containerDepotContact}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />
            <GroupField
              label={"Depot Tel Number*"}
              type={""}
              placeholder={"Enter Depot Tel Number"}
              name={"containerDepotTelNumber"}
              value={data.containerDepotTelNumber}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />
          </div>

          <div className="flex flex-col gap-4 w-[40%]">
            <p className="font-semibold text-grey-ab">Shipper</p>
            <GroupField
              label={"Shipper Name*"}
              type={""}
              placeholder={"Enter Shipper Name"}
              name={"shipperName"}
              value={data.shipperName}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />
            <GroupField
              label={"Address*"}
              type={"textarea"}
              placeholder={"Enter Address*"}
              name={"shipperAddress"}
              value={data.shipperAddress}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />
            <GroupField
              label={"Customer Contact*"}
              type={""}
              placeholder={"Enter Customer Contact"}
              name={"shipperCustomerContact"}
              value={data.shipperCustomerContact}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />
            <GroupField
              label={"Contact Number*"}
              type={""}
              placeholder={"Enter Contact Number"}
              name={"shipperContactNumber"}
              value={data.shipperContactNumber}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />
          </div>
        </div>

        <div className="border border-grey-ab-50 "></div>

        <div className="flex justify-between ">
          <GroupField
            label={"Port of Loading*"}
            type={""}
            placeholder={"Enter Port of Loading"}
            name={"portOfLoading"}
            value={data.portOfLoading}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-[40%]"
          />
          <GroupField
            label={"Port of Discharge*"}
            type={""}
            placeholder={"Enter Port of Discharge"}
            name={"portOfDischarge"}
            value={data.portOfDischarge}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-[40%]"
          />
        </div>

        <div className="flex gap-4 ">
          <div className="w-full max-w-[25%] min-w-0">
            <GroupField
              label={"Port of Loading(ETA)*"}
              type={"date"}
              placeholder={"Enter ETA Date"}
              name={"eta"}
              value={data.eta}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="w-full"
            />
          </div>

          <div className="w-full max-w-[25%] min-w-0">
            <GroupField
              label={"Port of Loading(ETD)*"}
              type={"date"}
              placeholder={"Enter ETD Date"}
              name={"etd"}
              value={data.etd}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="w-full"
            />
          </div>

          <div className="w-full max-w-[25%] min-w-0">
            <GroupField
              label={"Gate Open*"}
              type={"date"}
              placeholder={"Enter Gate Open Date"}
              name={"gateOpenDate"}
              value={data.gateOpenDate}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="w-full"
            />
          </div>

          <div className="w-full max-w-[25%] min-w-0">
            <GroupField
              label={"Gate Cut off*"}
              type={"date"}
              placeholder={"Enter Gate Cut off Date"}
              name={"gateCutOff"}
              value={data.gateCutOff}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="w-full"
            />
          </div>
        </div>

        <div className="flex gap-6 ">
          <GroupField
            label={"Cargo Name(Commodity)*"}
            type={"select"}
            placeholder={"Enter Cargo Name"}
            name={"cargoName"}
            value={data.cargoName}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-[28%]"
          />
          <GroupField
            label={"Cargo Type*"}
            type={"select"}
            placeholder={"Enter Cargo Type"}
            name={"cargoType"}
            value={data.cargoType}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-[28%]"
          />
          <div className="flex items-end flex-grow">
            <GroupField
              label={"Gross Weight*"}
              type={""}
              placeholder={"Enter Gross Weight"}
              name={"grossWeight"}
              value={data.grossWeight}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="flex-grow"
            />
            <GroupField
              label={""}
              type={"select"}
              placeholder={""}
              name={"weightUnit"}
              value={data.weightUnit}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="w-[100px]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 shadow-lg rounded-xs">
          <table cellPadding={10} className="">
            <thead className="bg-grey-100 rounded-t-xs border-b border-b-grey-ab-50 font-semibold text-grey-ab-600">
              <tr>
                <td className="py-2" align="center">
                  SLNO
                </td>
                <td align="center">Container Type</td>
                <td align="center">Quantity</td>
                <td align="center">Container Number</td>
                <td align="center">Action</td>
              </tr>
            </thead>
            <tbody>
              {data.cargoDetails.map((item, index) => (
                <tr key={index} className="border-b border-b-grey-ab-50">
                  <td align="center">
                    {(index + 1).toString().padStart(2, "0")}
                  </td>
                  <td className="py-3 w-[28%]">
                    <GroupField
                      label={""}
                      type={"select"}
                      placeholder={"Choose Container Type"}
                      name={`containerType`}
                      value={item.containerType}
                      options={[{ value: "dd", label: "containertype" }]}
                      onChange={(e) => handleCargoDetailsChange(e, index)}
                      error={false}
                      errorMessage={""}
                    />
                  </td>
                  <td className="w-[28%]">
                    <GroupField
                      label={""}
                      type={""}
                      placeholder={""}
                      name={`quantity`}
                      value={item.quantity}
                      onChange={(e) => handleCargoDetailsChange(e, index)}
                      error={false}
                      errorMessage={""}
                    />
                  </td>
                  <td className="w-[28%]">
                    <GroupField
                      label={""}
                      type={""}
                      placeholder={""}
                      name={`containerNumber`}
                      value={item.containerNumber}
                      onChange={(e) => handleCargoDetailsChange(e, index)}
                      error={false}
                      errorMessage={""}
                    />
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <button
                        className="p-1 rounded-xs bg-error-50 cursor-pointer  disabled:cursor-not-allowed"
                        disabled={data.cargoDetails.length === 1}
                        onClick={() => handleDelete(index)}
                      >
                        <DeleteIcon size={16} color="#810001" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-4 pb-4" onClick={handleAddMore}>
            <BlackButton
              label={"Add More"}
              size={"s"}
              variant={"primary"}
              leftIcon={<AddIcon size={16} color="#ffffff" />}
            />
          </div>
        </div>

        <div className="border border-grey-ab-50 "></div>

        <div className="flex items-end flex-col gap-6">
          <GroupField
            label={"Release Order Date"}
            type={"date"}
            placeholder={"Enter Release Order Date"}
            name={"releaseOrderDate"}
            value={data.releaseOrderDate}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-[40%]"
          />
          <GroupField
            label={"Free Storage Days "}
            type={""}
            placeholder={"Enter Free Storage Days "}
            name={"freeStorageDays"}
            value={data.freeStorageDays}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-[40%]"
          />
          <GroupField
            label={"Free Storage Expire Date"}
            type={"date"}
            placeholder={"Enter Expire Date"}
            name={"freeStorageExpireDate"}
            value={data.freeStorageExpireDate}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-[40%]"
          />
        </div>

        <GroupField
          label={"Remarks"}
          type={"textarea"}
          placeholder={"Write here.."}
          name={"remarks"}
          value={data.remarks}
          onChange={handleChange}
          error={false}
          errorMessage={""}
        />

        <div className="flex gap-6 justify-end">
          <div
            onClick={() => {
              navigate(-1);
            }}
          >
            <PrimaryButton label={"Cancel"} size={"l"} variant={"link"} />
          </div>
          <div>
            <PrimaryButton label={"Save"} size={"l"} variant={"primary"} />
          </div>
        </div>

        {/* end div */}
      </div>
    </>
  );
};

export default EditContainerReleaseOrder;
