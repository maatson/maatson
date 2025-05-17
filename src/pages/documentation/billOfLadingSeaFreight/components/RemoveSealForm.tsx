import React from "react";
import ErrorButton from "../../../../components/buttons/ErrorButton";
import GreyButton from "../../../../components/buttons/GreyButton";
import RemoveSealImage from "/images/removeSeal.png";

interface RemoveSealFormProps {
  onClose: () => void;
  onSave: () => void;
}
const RemoveSealForm: React.FC<RemoveSealFormProps> = ({ onClose, onSave }) => {
  return (
    <div className="bg-grey-aw-50 rounded-sm flex flex-col gap-4 p-4 shadow-lg max-w-[340px]">
      <div className="mx-auto">
        <img src={RemoveSealImage} alt="RemoveSealImage" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold text-grey-ab-800 text-center">
          Remove Seal & Signature?
        </p>
        <p className="text-2xs text-grey-ab-300 text-center px-4">
          The document is currently sealed and signed. Do you really want to
          remove the seal and signature?
        </p>
      </div>
      <div className="flex gap-3">
        <div className="w-full" onClick={onClose}>
          <GreyButton
            label={"Keep Them"}
            size={"m"}
            variant={"primary"}
            style="w-full"
          />
        </div>
        <div className="w-full" onClick={onSave}>
          <ErrorButton
            label={"Yes, Remove"}
            size={"m"}
            variant={"primary"}
            style="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default RemoveSealForm;
