import React from "react";
import PrimaryButton from "../../../../../components/buttons/PrimaryButton";
import GroupField from "../../../../../components/groupField/GroupField";
import { AeroplaneIcon, LocationIcon } from "../../../../../components/icons/Icons";

interface AddAirportGateInProps {
  onClose: () => void;
  cargoType?: string; //make dynamic groupfields for fcl, lcl, bulk - will execute later
}

const AddAirportGateIn: React.FC<AddAirportGateInProps> = ({
  onClose,
  cargoType,
}) => {
  const handleCancel = () => {
    // setData({ documentName: "", fileName: "", file: null }); // Reset form
    onClose(); // Close popup
  };
  return (
    <>
      <div className=" max-w-[600px] w-full  rounded-xs flex bg-grey-aw-50 p-8 gap-8 flex-col shadow-lg overflow-auto custom-scrollbar">
        <h6 className="h5 font-semibold text-center text-grey-ab-900">
          Airport Gate-in Date Information
        </h6>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <GroupField
              label={"Airline Name*"}
              type={""}
              placeholder={"Enter Airline Name"}
              name={""}
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              leftIcon ={<AeroplaneIcon color="#2C398F" />}
              parentStyle="w-full"
            />
            <GroupField
              label={"Flight Number*"}
              type={""}
              placeholder={"Enter Flight Number"}
              name={""}
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              parentStyle="w-full"
              leftIcon ={<AeroplaneIcon color="#2C398F" />}
            />
          </div>

          <div className="flex gap-4">
            <GroupField
              label={"MAWB  Number*"}
              type={""}
              placeholder={"Enter MAWB  Number"}
              name={""}
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              leftIcon ={<AeroplaneIcon color="#2C398F" />}
              parentStyle="w-full"
            />
            <GroupField
              label={"HAWB Number*"}
              type={""}
              placeholder={"Enter HAWB Number"}
              name={""}
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              leftIcon ={<AeroplaneIcon color="#2C398F" />}
              parentStyle="w-full"
            />
          </div>

          <div className="flex gap-4">
            <GroupField
              label={"Origin*"}
              type={""}
              placeholder={"Enter Origin"}
              name={""}
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              leftIcon ={<LocationIcon color="#2C398F" />}
              parentStyle="w-full"
            />
            <GroupField
              label={"Quantity*"}
              type={""}
              placeholder={"Enter Quantity"}
              name={""}
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              leftIcon ={<AeroplaneIcon color="#2C398F" />}
              parentStyle="w-full"
            />
          </div>

          <div className="flex gap-4">
            <GroupField
              label={"Flight Date*"}
              type={"date"}
              placeholder={""}
              name={""}
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              parentStyle="w-full"
            />
            <GroupField
              label={"Airport Gate-In Date*"}
              type={"date"}
              placeholder={""}
              name={""}
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              parentStyle="w-full"
            />
          </div>
          
         
        </div>
        <div className="flex items-center gap-6 justify-center w-full">
          <div onClick={handleCancel} className="w-full">
            <PrimaryButton
              label={"Cancel"}
              size={"xl"}
              variant={"outline"}
              style="w-full"
            />
          </div>
          <div className="w-full">
            <PrimaryButton
              label={"Submit"}
              size={"xl"}
              variant={""}
              style="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAirportGateIn;
