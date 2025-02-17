import React from "react";
import { toast } from "react-toastify";
import { InfoIcon } from "../icons/Icons";
import { ToastProps } from "./SuccessToast";

const InfoToast: React.FC<ToastProps> = ({ toastId, heading, message }) => {
  return (
    <div className="bg-blue-50 border border-blue p-2 rounded flex items-start w-full gap-3">
      <div className="p-1 bg-blue rounded ">
        <InfoIcon size={16} color="white" />
      </div>
      <div className="flex flex-col gap-1 text-sm w-full">
        <p className="text-blue-700 font-semibold capitalize">{heading}</p>
        <p className="text-grey-ab-400 text-xs">{message}</p>
      </div>
    </div>
  );
};

export default InfoToast;

// note:use this for cancel the specific toast
//  onClick={() => toast.dismiss(toastId)
