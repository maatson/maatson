import React, { useState } from "react";
import { Layout } from "../../../accounts/invoiceImport/ViewInvoice";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";
import GroupField from "../../../../components/groupField/GroupField";
import {
  AddIcon,
  ContainerIcon,
  DeleteIcon,
  ProductIcon,
  WeightIcon,
} from "../../../../components/icons/Icons";
import { Container } from "@mui/material";

const CargoArrivalCreate: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    portOfLoading: "Los Angeles, USA",
    portOfDischarge: "Rotterdam, Netherlands",
    shipperName: "",
    consigneeName: "",
    arrivalDate: "",
    vesselName: "",
    voyageNumber: "",
    billOfLadingNumber: "",
    packageQuantity: "",
    packageType: "Box",
    cargoWeight: "",
    weightUnit: "KGS",
    containerDetails: [
      {
        containerType: "",
        containerNumbers: [] as string[],
      },
    ],
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
  const handleContainerDetailsChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    index: number
  ) => {
    const { name, value } = e.target;
    setData((prev) => {
      const newContainers = [...prev.containerDetails];
      newContainers[index] = { ...newContainers[index], [name]: value };
      return { ...prev, containerDetails: newContainers };
    });
  };
  console.log("checking page rendered when changing any input field");

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
            label={"Vessel Name"}
            type={""}
            placeholder={"Enter Vessel Name"}
            name={"vesselName"}
            value={data.vesselName}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />{" "}
          <GroupField
            label={"Voyage Number"}
            type={""}
            placeholder={"Enter Voyage Number"}
            name={"voyageNumber"}
            value={data.voyageNumber}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />{" "}
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

        <div className="flex flex-col gap-4">
          {data.containerDetails.map((item, index) => (
            <>
              <div className="flex  gap-4 w-[90%]">
                <GroupField
                  label={"Container Types"}
                  type={"select"}
                  placeholder={"Enter Container Types"}
                  name={"containerType"}
                  value={item.containerType}
                  options={[
                    {
                      value: "20’ft Dry Container ",
                      label: "20’ft Dry Container ",
                    },
                    {
                      value: "40'ft Dry Container ",
                      label: "40'ft Dry Container ",
                    },
                    {
                      value: "60’ft Dry Container ",
                      label: "60’ft Dry Container ",
                    },
                  ]}
                  onChange={(e) => handleContainerDetailsChange(e, index)}
                  error={false}
                  errorMessage={""}
                  parentStyle="w-[30%]"
                  leftIcon={<ContainerIcon color="#2C398F" />}
                />
                <GroupField
                  label={"Container Number"}
                  type={"creatable"}
                  placeholder={"Enter Container Number"}
                  name={"containerNumbers"}
                  value={item.containerNumbers}
                  onChange={(e) => handleContainerDetailsChange(e, index)}
                  error={false}
                  isMulti
                  errorMessage={""}
                  parentStyle="w-[60%]"
                  leftIcon={<ContainerIcon color="#2C398F" />}
                />
                <div className="flex gap-2 items-end">
                  {data.containerDetails.length > 1 && (
                    <div
                      className="p-1 rounded-xs bg-error cursor-pointer h-fit"
                      onClick={() => {
                        setData((prev) => ({
                          ...prev,
                          containerDetails: prev.containerDetails.filter(
                            (_, i) => i !== index
                          ),
                        }));
                      }}
                    >
                      <DeleteIcon size={16} color="#ffffff" />
                    </div>
                  )}

                  <div
                    className="p-1 rounded-xs bg-grey-ab cursor-pointer h-fit"
                    onClick={() => {
                      setData((prev) => {
                        const newContainer = [...prev.containerDetails];
                        newContainer.splice(index + 1, 0, {
                          containerType: "",
                          containerNumbers: [],
                        });
                        return { ...prev, containerDetails: newContainer };
                      });
                    }}
                  >
                    <AddIcon size={16} color="#ffffff" />
                  </div>
                </div>
              </div>
            </>
          ))}
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

export default CargoArrivalCreate;
