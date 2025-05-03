import React, { ChangeEvent, useState } from "react";
import PrimaryButton from "../../../../../components/buttons/PrimaryButton";
import GroupField from "../../../../../components/groupField/GroupField";

type CargoData =
  | {
      containerNumber: string;
      pickupDate: string;
    }
  | {
      containerNumber: string;
      quantity: string;
      pickupDate: string;
    }
  ;

interface AddContainerPickupProps {
  onClose: () => void;
  onSubmit: (data: CargoData) => void;
  cargoType: string;
}

const AddContainerPickup: React.FC<AddContainerPickupProps> = ({
  onClose,
  onSubmit,
  cargoType,
}) => {
  const [data, setData] = useState({
    containerNumber: "",
    quantity: "",
    pickupDate: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSave = () => {
    if (data.containerNumber && data.pickupDate) {
      onSubmit(data);
      onClose();
    }
  };
  const handleCancel = () => {
    setData({ containerNumber: "", quantity: "", pickupDate: "" }); // Reset form
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
            name={"containerNumber"}
            value={data.containerNumber}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            options={[]}
          />
          {cargoType?.toLowerCase() === "less container load" && (
            <GroupField
              label={"Package Quantity"}
              type={""}
              placeholder={"Enter Package Quantity"}
              name={"quantity"}
              value={data.quantity}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />
          )}

          <GroupField
            label={"Container Pickup Date*"}
            type={"date"}
            placeholder={"Enter Container Pickup Date"}
            name={"pickupDate"}
            value={data.pickupDate}
            onChange={handleChange}
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
          <div className="w-full" onClick={handleSave}>
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
