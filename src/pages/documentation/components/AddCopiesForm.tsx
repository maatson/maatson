import React, { ChangeEvent, useState } from "react";
import GroupField from "../../../components/groupField/GroupField";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

interface AddCopiesFormProps {
  onClose: () => void;
  onSave: (count: number) => void;
}
const AddCopiesForm: React.FC<AddCopiesFormProps> = ({ onClose, onSave }) => {
  const [data, setData] = useState({ numberOfCopies: "" });
  const [error, setError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (/^\d*$/.test(value)) {
      setData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    const count = Number(data.numberOfCopies);
    // if (!data.numberOfCopies || count < 2) {
    //   setError("Please enter a valid number (minimum 2)");
    //   return;
    // }
    // setError("");
    onSave(count);
  };

  return (
    <div className="bg-grey-aw-50 rounded-sm flex flex-col gap-6 p-4 shadow-lg max-w-[400px]">
      <div className="flex flex-col gap-4 ">
        <p className="text-h5 font-bold text-grey-ab-800 text-center">
          Add Additional Bill of Lading Copies
        </p>

        <GroupField
          label={"Number of Additional Copies"}
          type={"number"}
          placeholder={"Enter Additional Copies"}
          name={"numberOfCopies"}
          value={data.numberOfCopies}
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
            label={"Add Copies"}
            size={"l"}
            variant={"primary"}
            style="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AddCopiesForm;
