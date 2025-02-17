import { toast } from "react-toastify";
import SuccessToast from "../components/toast/SuccessToast";
import ErrorToast from "../components/toast/ErrorToast";
import WarningToast from "../components/toast/WarningToast";
import InfoToast from "../components/toast/InfoToast";

interface ToastProps {
  heading: string;
  message: string;
}

export const useSuccessNotify = ({ heading, message }: ToastProps) => {
  const toastId = `success-toast-${Date.now()}`;
  toast(
    <SuccessToast toastId={toastId} heading={heading} message={message} />,
    {
      toastId,
      className: "p-0  min-h-0 ",
    }
  );
};
export const useErrorNotify = ({ heading, message }: ToastProps) => {
  const toastId = `error-toast-${Date.now()}`;
  toast(<ErrorToast toastId={toastId} heading={heading} message={message} />, {
    toastId,
    className: "p-0  min-h-0 ",
  });
};
export const useWarningNotify = ({ heading, message }: ToastProps) => {
  const toastId = `warning-toast-${Date.now()}`;
  toast(
    <WarningToast toastId={toastId} heading={heading} message={message} />,
    {
      toastId,
      className: "p-0  min-h-0 ",
    }
  );
};
export const useInfoNotify = ({ heading, message }: ToastProps) => {
  const toastId = `info-toast-${Date.now()}`;
  toast(<InfoToast toastId={toastId} heading={heading} message={message} />, {
    toastId,
    className: "p-0  min-h-0 ",
  });
};
