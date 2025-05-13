import React, { useState } from "react";
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
  friedPaid: string;
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
  const [data, setData] = useState<BLData>();
  return (
    <div className="bg-grey-aw-50 flex flex-col gap-8 p-6 rounded">
      {/* booking */}
      <ViewCard
        label={"Booking ID:"}
        value={"123dd4545"}
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
              value={""}
              onChange={() => {}}
              error={false}
              errorMessage={""}
            />{" "}
            <GroupField
              label={"Voyage no*"}
              type={"text"}
              placeholder={"Voyage no"}
              name={"voyageNumber"}
              value={""}
              onChange={() => {}}
              error={false}
              errorMessage={""}
            />
          </div>
          <GroupField
            label={"Shipper’s Ref"}
            type={"text"}
            placeholder={"Enter Shipper’s Ref"}
            name={"shipperRef"}
            value={""}
            onChange={() => {}}
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
            name={"shipperRef"}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={"Port of Discharge*"}
            type={"text"}
            placeholder={"Enter POD"}
            name={"shipperRef"}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={"Place of Delivery*"}
            type={"text"}
            placeholder={"Enter Place of Delivery"}
            name={"shipperRef"}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={"Final Destination*"}
            type={"text"}
            placeholder={"Enter Final Destination"}
            name={"shipperRef"}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={"Place of Receipt*"}
            type={"text"}
            placeholder={"Enter receipt"}
            name={"shipperRef"}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={"Freight Paid at"}
            type={"text"}
            placeholder={"Enter Freight Paid "}
            name={"shipperRef"}
            value={""}
            onChange={() => {}}
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
              name={"shipperRef"}
              value={""}
              onChange={() => {}}
              error={false}
              errorMessage={""}
            />{" "}
            <GroupField
              label={""}
              type={"textarea"}
              placeholder={"Company Address"}
              name={"shipperRef"}
              value={""}
              onChange={() => {}}
              error={false}
              errorMessage={""}
            />
          </div>
          <div className="flex flex-col gap-2">
            <GroupField
              label={"Consignee*"}
              type={"text"}
              placeholder={"Company Name"}
              name={"shipperRef"}
              value={""}
              onChange={() => {}}
              error={false}
              errorMessage={""}
            />{" "}
            <GroupField
              label={""}
              type={"textarea"}
              placeholder={"Company Address"}
              name={"shipperRef"}
              value={""}
              onChange={() => {}}
              error={false}
              errorMessage={""}
            />
          </div>
          <div className="flex flex-col gap-2">
            <GroupField
              label={"Notify Party*"}
              type={"text"}
              placeholder={"Company Name"}
              name={"shipperRef"}
              value={""}
              onChange={() => {}}
              error={false}
              errorMessage={""}
            />{" "}
            <GroupField
              label={""}
              type={"textarea"}
              placeholder={"Company Address"}
              name={"shipperRef"}
              value={""}
              onChange={() => {}}
              error={false}
              errorMessage={""}
            />
          </div>
          <div className="flex flex-col gap-2">
            <GroupField
              label={"Notify Party (2)"}
              type={"text"}
              placeholder={"Company Name"}
              name={"shipperRef"}
              value={""}
              onChange={() => {}}
              error={false}
              errorMessage={""}
            />{" "}
            <GroupField
              label={""}
              type={"textarea"}
              placeholder={"Company Address"}
              name={"shipperRef"}
              value={""}
              onChange={() => {}}
              error={false}
              errorMessage={""}
            />
          </div>
        </div>
        <div className="border boder-grey-ab-50" />
        <div className="flex flex-col gap-4">
          <div className="rounded-sm bg-grey-aw-100">
            <div className="p-4 flex justify-between border-b items-center border-grey-ab-100">
              <p className="text-grey-ab-800 font-semibold ">
                Container and Cargo Details
              </p>
              <div className="flex items-center gap-4">
                <GreyButton
                  label={"Remove"}
                  size={"m"}
                  variant={""}
                  leftIcon={<CrossIcon size={16} />}
                />
                <BlackButton
                  label={"Duplicate"}
                  size={"m"}
                  variant={"link"}
                  leftIcon={<DuplicateIcon size={16} />}
                />
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
                    name={"shipperRef"}
                    value={""}
                    onChange={() => {}}
                    error={false}
                    errorMessage={""}
                  />{" "}
                  <GroupField
                    label={"Seal Number*"}
                    type={"text"}
                    placeholder={"Enter Seal Number"}
                    name={"shipperRef"}
                    value={""}
                    onChange={() => {}}
                    error={false}
                    errorMessage={""}
                  />{" "}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-grey-ab-800 font-semibold ">Cargo Details</p>
                <div className="flex gap-4">
                  <GroupField
                    label={"Package Type*"}
                    type={"text"}
                    placeholder={"Enter Package Type"}
                    name={"shipperRef"}
                    value={""}
                    onChange={() => {}}
                    error={false}
                    errorMessage={""}
                  />{" "}
                  <GroupField
                    label={"Package Quantity"}
                    type={"text"}
                    placeholder={"Enter Quantity"}
                    name={"shipperRef"}
                    value={""}
                    onChange={() => {}}
                    error={false}
                    errorMessage={""}
                  />{" "}
                  <div className="flex items-end gap-2">
                    <GroupField
                      label={"Cargo Weight"}
                      type={"text"}
                      placeholder={"Enter Cargo Weight"}
                      name={"shipperRef"}
                      value={""}
                      onChange={() => {}}
                      error={false}
                      errorMessage={""}
                    />{" "}
                    <GroupField
                      label={""}
                      type={"select"}
                      placeholder={""}
                      name={"shipperRef"}
                      value={"KGS"}
                      onChange={() => {}}
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
                    name={"shipperRef"}
                    value={""}
                    onChange={() => {}}
                    error={false}
                    errorMessage={""}
                  />{" "}
                </div>
                <GroupField
                  label={"Description of Goods & Pkgs."}
                  type={"text"}
                  placeholder={"Enter Description of Goods & Pkgs."}
                  name={"shipperRef"}
                  value={""}
                  onChange={() => {}}
                  error={false}
                  errorMessage={""}
                  parentStyle="basis-full"
                />{" "}
              </div>
            </div>
          </div>
          <div className=" w-fit cursor-pointer ">
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
            name={"shipperRef"}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
          />{" "}
          <GroupField
            label={"Shipping Terms*"}
            type={"select"}
            placeholder={"Choose Shipping Terms"}
            name={"shipperRef"}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
          />{" "}
          <GroupField
            label={"Freight Terms*"}
            type={"select"}
            placeholder={"Choose Freight Terms"}
            name={"shipperRef"}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
          />{" "}
          <GroupField
            label={"Place Issued*"}
            type={"text"}
            placeholder={"Enter Place Issued"}
            name={"shipperRef"}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
          />{" "}
          <GroupField
            label={"Shipped On Board Date*"}
            type={"date"}
            placeholder={"Enter Date"}
            name={"shipperRef"}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
          />{" "}
          <GroupField
            label={"Date Issued*"}
            type={"date"}
            placeholder={"Enter Date Issued"}
            name={"shipperRef"}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
          />{" "}
        </div>{" "}
      </div>
      {/* actions */}
      <div className="flex justify-end gap-4 items-center">
        <div className="w-fit cursor-pointer">
          <PrimaryButton label={"Cancel"} size={"xl"} variant={"outline"} />
        </div>
        <div className="w-fit cursor-pointer">
          {" "}
          <PrimaryButton label={"Save BL Draft"} size={"xl"} variant={""} />
        </div>
      </div>
    </div>
  );
};

export default CreateBl;
