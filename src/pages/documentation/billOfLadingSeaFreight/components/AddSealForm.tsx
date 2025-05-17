import React, { ChangeEvent, useState } from "react";
import GroupField from "../../../../components/groupField/GroupField";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";
import { SealIcon, SignatureIcon } from "../../../../components/icons/Icons";

interface AddSealFormProps {
  onClose: () => void;
  onSave: () => void;
}
const AddSealForm: React.FC<AddSealFormProps> = ({ onClose, onSave }) => {
  const [data, setData] = useState({ numberOfBL: "" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {};

  const handleAdd = () => {
    onSave();
  };

  return (
    <div className="bg-grey-aw-50 rounded-sm flex flex-col gap-6 p-4 shadow-lg max-w-[840px] ">
      <p className="text-h6 font-bold text-grey-ab-800 text-center ">
        Document Signing & Sealing
      </p>

      <div className="flex gap-6">
        <div className="flex flex-col gap-4 p-3 border border-grey-ab-200 shadow-xs w-[420px]">
          <p className="text-center font-semibold text-grey-ab-800">
            Seal & Signature Preview
          </p>
          <div className="flex flex-col gap-1 ">
            <div className="h-4 bg-grey-600 w-[50%] rounded-[2px]"></div>
            <div className="h-4 bg-grey-600 w-[90%] rounded-[2px]"></div>
            <div className="h-4 bg-grey-600 w-[65%] rounded-[2px]"></div>
            <div className="h-4 bg-grey-600 w-[98%] rounded-[2px]"></div>
            <div className="h-4 bg-grey-600 w-[85%] rounded-[2px]"></div>
            <div className="h-4 bg-grey-600 w-[100%] rounded-[2px]"></div>
          </div>
          <div className="flex justify-between">
            {/* <div>sign</div> */}
            {/* <div>seal</div> */}
          </div>
        </div>
        <div className="bg-grey-200 flex flex-col gap-6 p-3  rounded-xs ">
          <p className="text-center font-semibold text-grey-ab-800">
            Seal & Signature
          </p>
          <div className="flex flex-col gap-4">
            <GroupField
              label={"Signature"}
              type={"select"}
              placeholder={"Choose Signature"}
              name={"signature"}
              value={""}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              leftIcon={<SignatureIcon color="#2C398F" />}
              parentStyle="w-[340px]"
            />
            <GroupField
              label={"Seal"}
              type={"select"}
              placeholder={"Choose Seal"}
              name={"seal"}
              value={""}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              leftIcon={<SealIcon color="#2C398F" />}
              parentStyle="w-[340px]"
            />
          </div>
          <div className="flex gap-3">
            <div className="w-full" onClick={onClose}>
              <PrimaryButton
                label={"Cancel"}
                size={"l"}
                variant={"outline"}
                style="w-full"
              />
            </div>
            <div className="w-full" onClick={handleAdd}>
              <PrimaryButton
                label={"Add"}
                size={"l"}
                variant={"primary"}
                style="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSealForm;
