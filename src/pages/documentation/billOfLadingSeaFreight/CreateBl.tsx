import React, { ChangeEvent, useState } from "react";
import ViewCard from "../../customerService/sea-air-schedule/components/layouts/ViewCard";
import GroupField from "../../../components/groupField/GroupField";
import NeutralBlueButton from "../../../components/buttons/NeutralBlueButton";
import {
  AddIcon,
  CrossIcon,
  DuplicateIcon,
} from "../../../components/icons/Icons";
import GreyButton from "../../../components/buttons/GreyButton";
import BlackButton from "../../../components/buttons/BlackButton";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { useNotify } from "../../../hooks/useNotify";
import { useNavigate } from "react-router-dom";

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

interface BLData {
  bookingId: string;
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
}

const CreateBl: React.FC = () => {
  const [data, setData] = useState<BLData>({
    bookingId: "123dd4545",
    vesselName: "",
    shipperRef: "",
    vesselNumber: "",
    portOfLoading: "",
    portOfDischarge: "",
    delivaryPlace: "",
    finalDestination: "",
    receiptPlace: "",
    freightPaid: "",
    shipper: { companyName: "", companyAddress: "" },
    consignee: { companyName: "", companyAddress: "" },
    notifyParty: [
      { companyName: "", companyAddress: "" },
      { companyName: "", companyAddress: "" },
    ],
    cargoDetails: [
      {
        containerNumber: "",
        sealNumber: "",
        packageType: "",
        packageQuantity: 0,
        cargoWeight: 0,
        cargoWeightUnit: "KGS",
        measurement: "",
        description: "",
      },
    ],
    delivaryTerms: "",
    shippingTerms: "",
    freightTerms: "",
    issuedPlace: "",
    shippedOnboardDate: "",
    issuedDate: "",
  });
  const { showToast } = useNotify();

  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleShipperChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedshipper = { ...data.shipper, [name]: value };
    setData((prev) => ({ ...prev, shipper: updatedshipper }));
  };
  const handleConsigneeChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedconsignee = { ...data.consignee, [name]: value };
    setData((prev) => ({ ...prev, consignee: updatedconsignee }));
  };
  const handleNotifyPartyChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const updatednotify = [...data.notifyParty];
    updatednotify[index] = { ...updatednotify[index], [name]: value };
    setData((prev) => ({ ...prev, notifyParty: updatednotify }));
  };
  const handleChangeCargoDetails = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const updatedcargos = [...data.cargoDetails];
    updatedcargos[index] = { ...updatedcargos[index], [name]: value };
    setData((prev) => ({ ...prev, cargoDetails: updatedcargos }));
  };

  const handleAddMore = () => {
    const addedCargo = [...data.cargoDetails];
    addedCargo.push({
      containerNumber: "",
      sealNumber: "",
      packageType: "",
      packageQuantity: 0,
      cargoWeight: 0,
      cargoWeightUnit: "KGS",
      measurement: "",
      description: "",
    });
    setData((prev) => ({ ...prev, cargoDetails: addedCargo }));
  };
  const handleDuplicateCargo = (index: number) => {
    const addedCargo = [...data.cargoDetails];
    const duplicateCargo = addedCargo[index];
    addedCargo.splice(index + 1, 0, duplicateCargo);
    setData((prev) => ({ ...prev, cargoDetails: addedCargo }));
    showToast("info", {
      heading: "Container and Cargo Duplicated",
      message: "Details copied. You can review or edit",
    });
  };
  const handleRemoveCargo = (index: number) => {
    const cargos = [...data.cargoDetails];
    if (cargos.length > 1) {
      const removedCargos = cargos.filter((_, ind) => index !== ind);
      setData((prev) => ({ ...prev, cargoDetails: removedCargos }));
    } else {
      cargos[index] = {
        containerNumber: "",
        sealNumber: "",
        packageType: "",
        packageQuantity: 0,
        cargoWeight: 0,
        cargoWeightUnit: "KGS",
        measurement: "",
        description: "",
      };
      setData((prev) => ({ ...prev, cargoDetails: cargos }));
    }
  };
  return (
    <div className="bg-grey-aw-50 flex flex-col gap-8 p-6 rounded">
      {/* booking */}
      <ViewCard
        label={"Booking ID:"}
        value={data.bookingId}
        labelStyle="font-semibold"
      />
      {/* body */}
      <div className="flex flex-col gap-6">
        <div className="flex justify-between ">
          <div className="flex flex-col gap-4 basis-1/3">
            {" "}
            <GroupField
              label={"Vessel Name*"}
              type={"text"}
              placeholder={"Enter Vessel Name"}
              name={"vesselName"}
              value={data.vesselName}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />{" "}
            <GroupField
              label={"Voyage no*"}
              type={"text"}
              placeholder={"Voyage no"}
              name={"vesselNumber"}
              value={data.vesselNumber}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />
          </div>
          <GroupField
            label={"Shipper’s Ref"}
            type={"text"}
            placeholder={"Enter Shipper’s Ref"}
            name={"shipperRef"}
            value={data.shipperRef}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="basis-1/3"
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <GroupField
            label={"Port of Loading*"}
            type={"text"}
            placeholder={"Enter POL"}
            name={"portOfLoading"}
            value={data.portOfLoading}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={"Port of Discharge*"}
            type={"text"}
            placeholder={"Enter POD"}
            name={"portOfDischarge"}
            value={data.portOfDischarge}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={"Place of Delivery*"}
            type={"text"}
            placeholder={"Enter Place of Delivery"}
            name={"delivaryPlace"}
            value={data.delivaryPlace}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={"Final Destination*"}
            type={"text"}
            placeholder={"Enter Final Destination"}
            name={"finalDestination"}
            value={data.finalDestination}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={"Place of Receipt*"}
            type={"text"}
            placeholder={"Enter receipt"}
            name={"receiptPlace"}
            value={data.receiptPlace}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={"Freight Paid at"}
            type={"text"}
            placeholder={"Enter Freight Paid "}
            name={"freightPaid"}
            value={data.freightPaid}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <GroupField
              label={"Shipper*"}
              type={"text"}
              placeholder={"Company Name"}
              name={"companyName"}
              value={data.shipper.companyName}
              onChange={handleShipperChange}
              error={false}
              errorMessage={""}
            />{" "}
            <GroupField
              label={""}
              type={"textarea"}
              placeholder={"Company Address"}
              name={"companyAddress"}
              value={data.shipper.companyAddress}
              onChange={handleShipperChange}
              error={false}
              errorMessage={""}
            />
          </div>
          <div className="flex flex-col gap-2">
            <GroupField
              label={"Consignee*"}
              type={"text"}
              placeholder={"Company Name"}
              name={"companyName"}
              value={data.consignee.companyName}
              onChange={handleConsigneeChange}
              error={false}
              errorMessage={""}
            />{" "}
            <GroupField
              label={""}
              type={"textarea"}
              placeholder={"Company Address"}
              name={"companyAddress"}
              value={data.consignee.companyAddress}
              onChange={handleConsigneeChange}
              error={false}
              errorMessage={""}
            />
          </div>
          <div className="flex flex-col gap-2">
            <GroupField
              label={"Notify Party*"}
              type={"text"}
              placeholder={"Company Name"}
              name={"companyName"}
              value={data.notifyParty[0].companyName}
              onChange={(e) => handleNotifyPartyChange(e, 0)}
              error={false}
              errorMessage={""}
            />{" "}
            <GroupField
              label={""}
              type={"textarea"}
              placeholder={"Company Address"}
              name={"companyAddress"}
              value={data.notifyParty[0].companyAddress}
              onChange={(e) => handleNotifyPartyChange(e, 0)}
              error={false}
              errorMessage={""}
            />
          </div>
          <div className="flex flex-col gap-2">
            <GroupField
              label={"Notify Party (2)"}
              type={"text"}
              placeholder={"Company Name"}
              name={"companyName"}
              value={data.notifyParty[1]?.companyName || ""}
              onChange={(e) => handleNotifyPartyChange(e, 1)}
              error={false}
              errorMessage={""}
            />{" "}
            <GroupField
              label={""}
              type={"textarea"}
              placeholder={"Company Address"}
              name={"companyAddress"}
              value={data.notifyParty[1]?.companyAddress || ""}
              onChange={(e) => handleNotifyPartyChange(e, 1)}
              error={false}
              errorMessage={""}
            />
          </div>
        </div>
        <div className="border border-grey-ab-50" />
        <div className="flex flex-col gap-4">
          {data.cargoDetails.length > 0 &&
            data.cargoDetails.map((cargo, index) => (
              <div className="rounded-sm bg-grey-aw-100" key={index}>
                <div className="p-4 flex justify-between border-b items-center border-grey-ab-100">
                  <p className="text-grey-ab-800 font-semibold ">
                    Container and Cargo Details
                  </p>
                  <div className="flex items-center gap-4">
                    <div onClick={() => handleRemoveCargo(index)}>
                      <GreyButton
                        label={"Remove"}
                        size={"m"}
                        variant={""}
                        leftIcon={<CrossIcon size={16} />}
                      />
                    </div>

                    <div onClick={() => handleDuplicateCargo(index)}>
                      <BlackButton
                        label={"Duplicate"}
                        size={"m"}
                        variant={"link"}
                        leftIcon={<DuplicateIcon size={16} />}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-4 flex flex-col  gap-4">
                  <div className="flex flex-col gap-3">
                    <p className="text-grey-ab-800 font-semibold ">
                      Container Details
                    </p>
                    <div className="flex items-center gap-4">
                      <GroupField
                        label={"Container Number*"}
                        type={"text"}
                        placeholder={"Enter Container Number"}
                        name={"containerNumber"}
                        value={cargo.containerNumber}
                        onChange={(e) => handleChangeCargoDetails(e, index)}
                        error={false}
                        errorMessage={""}
                      />{" "}
                      <GroupField
                        label={"Seal Number*"}
                        type={"text"}
                        placeholder={"Enter Seal Number"}
                        name={"sealNumber"}
                        value={cargo.sealNumber}
                        onChange={(e) => handleChangeCargoDetails(e, index)}
                        error={false}
                        errorMessage={""}
                      />{" "}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-grey-ab-800 font-semibold ">
                      Cargo Details
                    </p>
                    <div className="flex gap-4">
                      <GroupField
                        label={"Package Type*"}
                        type={"text"}
                        placeholder={"Enter Package Type"}
                        name={"packageType"}
                        value={cargo.packageType}
                        onChange={(e) => handleChangeCargoDetails(e, index)}
                        error={false}
                        errorMessage={""}
                      />{" "}
                      <GroupField
                        label={"Package Quantity"}
                        type={"number"}
                        placeholder={"Enter Quantity"}
                        name={"packageQuantity"}
                        value={cargo.packageQuantity}
                        onChange={(e) => handleChangeCargoDetails(e, index)}
                        error={false}
                        errorMessage={""}
                      />{" "}
                      <div className="flex items-end gap-2">
                        <GroupField
                          label={"Cargo Weight"}
                          type={"number"}
                          placeholder={"Enter Cargo Weight"}
                          name={"cargoWeight"}
                          value={cargo.cargoWeight}
                          onChange={(e) => handleChangeCargoDetails(e, index)}
                          error={false}
                          errorMessage={""}
                        />{" "}
                        <GroupField
                          label={""}
                          type={"select"}
                          placeholder={""}
                          name={"cargoWeightUnit"}
                          value={cargo.cargoWeightUnit}
                          onChange={(e) => handleChangeCargoDetails(e, index)}
                          error={false}
                          errorMessage={""}
                          options={[{ label: "KGS", value: "KGS" }]}
                          parentStyle="min-w-[87px] max-w-[120px] shrink-0"
                        />{" "}
                      </div>
                      <GroupField
                        label={"Measurement"}
                        type={"text"}
                        placeholder={"Enter Measurement"}
                        name={"measurement"}
                        value={cargo.measurement}
                        onChange={(e) => handleChangeCargoDetails(e, index)}
                        error={false}
                        errorMessage={""}
                      />{" "}
                    </div>
                    <GroupField
                      label={"Description of Goods & Pkgs."}
                      type={"text"}
                      placeholder={"Enter Description of Goods & Pkgs."}
                      name={"description"}
                      value={cargo.description}
                      onChange={(e) => handleChangeCargoDetails(e, index)}
                      error={false}
                      errorMessage={""}
                      parentStyle="basis-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          <div className=" w-fit cursor-pointer " onClick={handleAddMore}>
            <NeutralBlueButton
              label={"Add More"}
              size={"m"}
              variant={"outline"}
              leftIcon={<AddIcon color="#0091ff" size={16} />}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <GroupField
            label={"Delivery Terms*"}
            type={"select"}
            placeholder={"Choose Delivery Terms"}
            name={"delivaryTerms"}
            value={data.delivaryTerms}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />{" "}
          <GroupField
            label={"Shipping Terms*"}
            type={"select"}
            placeholder={"Choose Shipping Terms"}
            name={"shippingTerms"}
            value={data.shippingTerms}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />{" "}
          <GroupField
            label={"Freight Terms*"}
            type={"select"}
            placeholder={"Choose Freight Terms"}
            name={"freightTerms"}
            value={data.freightTerms}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />{" "}
          <GroupField
            label={"Place Issued*"}
            type={"text"}
            placeholder={"Enter Place Issued"}
            name={"issuedPlace"}
            value={data.issuedPlace}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />{" "}
          <GroupField
            label={"Shipped On Board Date*"}
            type={"date"}
            placeholder={"Enter Date"}
            name={"shippedOnboardDate"}
            value={data.shippedOnboardDate}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />{" "}
          <GroupField
            label={"Date Issued*"}
            type={"date"}
            placeholder={"Enter Date Issued"}
            name={"issuedDate"}
            value={data.issuedDate}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />{" "}
        </div>{" "}
      </div>
      {/* actions */}
      <div className="flex justify-end gap-4 items-center">
        <div className="w-fit cursor-pointer" onClick={() => navigate(-1)}>
          <PrimaryButton label={"Cancel"} size={"xl"} variant={"outline"} />
        </div>
        <div className="w-fit cursor-pointer">
          <PrimaryButton label={"Save BL Draft"} size={"xl"} variant={""} />
        </div>
      </div>
    </div>
  );
};

export default CreateBl;
