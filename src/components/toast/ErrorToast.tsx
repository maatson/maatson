import React from "react";
import { toast } from "react-toastify";
import { CloseIcon } from "../icons/Icons";

interface ErrorToastProps {
  toastId: string; // Accept toastId as a prop
  heading: string;
  message: string;
}

const ErrorToast: React.FC<ErrorToastProps> = ({
  toastId,
  heading,
  message,
}) => {
  return (
    <div className="bg-error-50 border border-red p-2 rounded flex items-start w-full gap-3">
      <div className="p-1 bg-error rounded ">
        <CloseIcon size={16} color="white" />
      </div>
      <div className="flex flex-col gap-1 text-sm w-full">
        <p className="text-error-700 font-semibold capitalize">{heading}</p>
        <p className="text-grey-ab-400 text-xs">{message}</p>
      </div>
    </div>
  );
};

export default ErrorToast;

// note:use this for cancel the specific toast
//  onClick={() => toast.dismiss(toastId)
