import React from "react";
import { toast } from "react-toastify";
import { WarningIcon } from "../icons/Icons";
import { ToastProps } from "./SuccessToast";

const WarningToast: React.FC<ToastProps> = ({ toastId, heading, message }) => {
  return (
    <div className="bg-warning-50 border border-warning p-2 rounded flex items-start w-full gap-3">
      <div className="p-1 bg-warning rounded ">
        <WarningIcon size={16} color="white" />
      </div>
      <div className="flex flex-col gap-1 text-sm w-full">
        <p className="text-warning-700 font-semibold capitalize">{heading}</p>
        <p className="text-grey-ab-400 text-xs">{message}</p>
      </div>
    </div>
  );
};

export default WarningToast;

// note:use this for cancel the specific toast
//  onClick={() => toast.dismiss(toastId)
