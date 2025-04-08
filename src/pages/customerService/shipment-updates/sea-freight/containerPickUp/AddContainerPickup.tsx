import React from "react";
import PrimaryButton from "../../../../../components/buttons/PrimaryButton";
import GroupField from "../../../../../components/groupField/GroupField";

interface AddContainerPickupProps {
  onClose: () => void;
  cargoType?: string; //make dynamic groupfields for fcl, lcl, bulk - will execute later
}

const AddContainerPickup: React.FC<AddContainerPickupProps> = ({ onClose, cargoType }) => {
  const handleCancel = () => {
    // setData({ documentName: "", fileName: "", file: null }); // Reset form
    onClose(); // Close popup
  };
  return (
    <>
      <div className=" max-w-[464px] w-full max-h-[550px] rounded-xs flex bg-grey-aw-50 p-8 gap-8 flex-col shadow-lg overflow-auto custom-scrollbar">
        <h6 className="h5 font-semibold text-center text-grey-ab-900">
          Container Pickup Details
        </h6>
        <div className="flex flex-col gap-4">
          <GroupField
            label={"Container Number"}
            type={""}
            placeholder={"Enter Container Number"}
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
            options={[]}
          />  
          {/* <GroupField
            label={"Package Quantity"}
            type={""}
            placeholder={"Enter Package Quantity"}
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
          /> */}
          <GroupField
            label={"Container Pickup Date*"}
            type={"date"}
            placeholder={"date"}
            name={"tillDtae"}
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
            options={[]}
          />
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

export default AddContainerPickup;
