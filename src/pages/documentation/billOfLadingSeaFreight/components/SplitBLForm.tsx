import React, { ChangeEvent, useState } from "react";
import GroupField from "../../../../components/groupField/GroupField";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";

interface SplitBLFormProps {
  onClose: () => void;
  onSave: (count: number) => void;
}
const SplitBLForm: React.FC<SplitBLFormProps> = ({ onClose, onSave }) => {
  const [data, setData] = useState({ numberOfBL: "" });
  const [error, setError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (/^\d*$/.test(value)) {
      setData((prev) => ({ ...prev, [name]: value }));
      //   if (Number(value) >= 2 || value === "") {
      //     setError("");
      //   } else {
      //     setError("Minimum 2 BL splits required.");
      //   }
    }
  };

  const handleSave = () => {
    const count = Number(data.numberOfBL);
    if (!data.numberOfBL || count < 2) {
      setError("Please enter a valid number (minimum 2)");
      return;
    }
    setError("");
    onSave(count);
  };

  return (
    <div className="bg-grey-aw-50 rounded-sm flex flex-col gap-6 p-4 shadow-lg max-w-[400px]">
      <div className="flex flex-col gap-4 ">
        <p className="text-h5 font-bold text-grey-ab-800 text-center">
          Split Bill of Lading
        </p>
        <p className="text-xs text-grey-ab-300 text-center">
          You can split this BL into multiple BLs based on your shipment
          needs.Enter the number of splits you want to create.
        </p>
        <GroupField
          label={"Number of BL Split"}
          type={"number"}
          placeholder={"Enter Number of BL Split"}
          name={"numberOfBL"}
          value={data.numberOfBL}
          onChange={handleChange}
          error={!!error}
          errorMessage={error}
        />
      </div>
      <div className="flex gap-4">
        <div className="w-full" onClick={onClose}>
          <PrimaryButton
            label={"Cancel"}
            size={"l"}
            variant={"outline"}
            style="w-full"
          />
        </div>
        <div className="w-full" onClick={handleSave}>
          <PrimaryButton
            label={"Split Now"}
            size={"l"}
            variant={"primary"}
            style="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SplitBLForm;
