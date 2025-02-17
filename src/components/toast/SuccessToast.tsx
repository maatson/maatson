import React from "react";
import { toast } from "react-toastify";
import { SuccessIcon } from "../icons/Icons";

interface SuccessToastProps {
  toastId: string; // Accept toastId as a prop
  heading: string; // Accept toastId as a prop
  message: string; // Accept toastId as a prop
}

const SuccessToast: React.FC<SuccessToastProps> = ({
  toastId,
  heading,
  message,
}) => {
  return (
    <div className="bg-success-50 border border-success p-2 rounded flex items-start w-full gap-3">
      <div className="p-1 bg-success rounded ">
        <SuccessIcon size={16} color="white" />
      </div>
      <div className="flex flex-col gap-1 text-sm w-full">
        <p className="text-success-700 font-semibold capitalize">{heading}</p>
        <p className="text-grey-ab-400 text-xs">{message}</p>
      </div>
    </div>
  );
};

export default SuccessToast;

// note:use this for cancel the specific toast
//  onClick={() => toast.dismiss(toastId)
