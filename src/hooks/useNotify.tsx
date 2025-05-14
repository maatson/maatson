// hooks/useNotify.ts
import { toast } from "react-toastify";
import SuccessToast from "../components/toast/SuccessToast";
import ErrorToast from "../components/toast/ErrorToast";
import WarningToast from "../components/toast/WarningToast";
import InfoToast from "../components/toast/InfoToast";

interface ToastProps {
  heading: string;
  message: string;
}

export const useNotify = () => {
  const showToast = (
    type: "success" | "error" | "warning" | "info",
    { heading, message }: ToastProps
  ) => {
    const toastId = `${type}-toast-${Date.now()}`;

    switch (type) {
      case "success":
        toast(
          <SuccessToast
            toastId={toastId}
            heading={heading}
            message={message}
          />,
          {
            toastId,
            className: "p-0 min-h-0",
          }
        );
        break;
      case "error":
        toast(
          <ErrorToast toastId={toastId} heading={heading} message={message} />,
          {
            toastId,
            className: "p-0 min-h-0",
          }
        );
        break;
      case "warning":
        toast(
          <WarningToast
            toastId={toastId}
            heading={heading}
            message={message}
          />,
          {
            toastId,
            className: "p-0 min-h-0",
          }
        );
        break;
      case "info":
        toast(
          <InfoToast toastId={toastId} heading={heading} message={message} />,
          {
            toastId,
            className: "p-0 min-h-0",
          }
        );
        break;
    }
  };

  return { showToast };
};
