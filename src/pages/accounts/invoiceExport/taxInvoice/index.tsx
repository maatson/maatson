import React, { useState } from "react";
import TaxInvoiceImage from "/images/taxInvoice.png";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";
import {
  CloseIcon,
  DocumentIcon,
  DownloadIcon,
  InfoIcon,
  SuccessIcon,
} from "../../../../components/icons/Icons";
import { Layout } from "../ViewInvoice";
import SuccessChip from "../../../../components/chips/SuccessChip";
import { NavLink, useParams } from "react-router-dom";
import ErrorChip from "../../../../components/chips/ErrorChip";
import NeutralBlueButton from "../../../../components/buttons/NeutralBlueButton";
import SuccessButton from "../../../../components/buttons/SuccessButton";
import BlackButton from "../../../../components/buttons/BlackButton";
import { useNotify } from "../../../../hooks/useNotify";
import ErrorButton from "../../../../components/buttons/ErrorButton";

const TaxInvoice: React.FC = () => {
  const { id } = useParams();
  const isAdmin = false;
  const { showToast } = useNotify();
  const [isLoading, setIsLoading] = useState<{
    [key: string]: {
      generate?: boolean;
      request?: boolean;
      approve?: boolean;
      reject?: boolean;
    };
  }>({});
  const [data, setData] = useState([
    {
      id: "1",
      taxInvoiceNumber: "",
      proformaNumber: "mmi1234501-A",
      companyName: "HarborLine Exports Pvt. Ltd.",
      proformaAmount: 10000,
      paymentStatus: "Paid",
      isRequestToApproval: false,
      isRejectByAdmin: false,
      isApprovedByAdmin: false,
    },
    {
      id: "2",
      taxInvoiceNumber: "INV-000101",
      proformaNumber: "mmi1234501-A",
      companyName: "HarborLine Exports Pvt. Ltd.",
      proformaAmount: 20000,
      paymentStatus: "Paid",
      isRequestToApproval: false,
      isRejectByAdmin: false,
      isApprovedByAdmin: false,
    },
    {
      id: "3",
      taxInvoiceNumber: "",
      proformaNumber: "mmi1234501-A",
      companyName: "HarborLine Exports Pvt. Ltd.",
      proformaAmount: 30000,
      paymentStatus: "Pending",
      isRequestToApproval: false,
      isRejectByAdmin: false,
      isApprovedByAdmin: false,
    },
    {
      id: "4",
      taxInvoiceNumber: "INV-000101",
      proformaNumber: "mmi1234501-A",
      companyName: "HarborLine Exports Pvt. Ltd.",
      proformaAmount: 30000,
      paymentStatus: "Pending",
      isRequestToApproval: false,
      isRejectByAdmin: false,
      isApprovedByAdmin: false,
    },

    {
      id: "5",
      taxInvoiceNumber: "",
      proformaNumber: "mmi1234501-A",
      companyName: "HarborLine Exports Pvt. Ltd.",
      proformaAmount: 30000,
      paymentStatus: "Pending",
      isRequestToApproval: true,
      isRejectByAdmin: false,
      isApprovedByAdmin: false,
    },
    {
      id: "6",
      taxInvoiceNumber: "",
      proformaNumber: "mmi1234501-A",
      companyName: "HarborLine Exports Pvt. Ltd.",
      proformaAmount: 30000,
      paymentStatus: "Pending",
      isRequestToApproval: false,
      isRejectByAdmin: true,
      isApprovedByAdmin: false,
    },
    {
      id: "7",
      taxInvoiceNumber: "CD-0030301001",
      proformaNumber: "mmi1234501-A",
      companyName: "HarborLine Exports Pvt. Ltd.",
      proformaAmount: 30000,
      paymentStatus: "Pending",
      isRequestToApproval: false,
      isRejectByAdmin: false,
      isApprovedByAdmin: true,
    },
  ]);

  const handleGenerateTaxInvoice = (id: string) => {
    setIsLoading((prev) => ({
      ...prev,
      [id]: { ...prev[id], generate: true },
    }));
    setTimeout(() => {
      setData((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, taxInvoiceNumber: "AUTOMATIC0123" } : item
        )
      );
      setIsLoading((prev) => ({
        ...prev,
        [id]: { ...prev[id], generate: false },
      }));
      showToast("success", {
        heading: "Tax Invoice Generated",
        message: "Tax invoice was generated successfully.",
      });
    }, 1500);
  };

  const handleGenerateTaxInvoiceWithReject = (id: string) => {
    setIsLoading((prev) => ({
      ...prev,
      [id]: { ...prev[id], generate: true },
    }));
    setTimeout(() => {
      setData((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                taxInvoiceNumber: "AUTOMATIC0123",
                isRejectByAdmin: false,
              }
            : item
        )
      );
      setIsLoading((prev) => ({
        ...prev,
        [id]: { ...prev[id], generate: false },
      }));
      showToast("success", {
        heading: "Tax Invoice Generated",
        message: "Tax invoice was generated successfully.",
      });
    }, 1500);
  };

  const handleRequestToApproval = (id: string) => {
    setIsLoading((prev) => ({ ...prev, [id]: { ...prev[id], request: true } }));
    setTimeout(() => {
      setData((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                isRequestToApproval: true,
                isApprovedByAdmin: false,
                isRejectByAdmin: false,
              }
            : item
        )
      );
      setIsLoading((prev) => ({
        ...prev,
        [id]: { ...prev[id], request: false },
      }));
      showToast("success", {
        heading: "Request Sent Successfully",
        message:
          "Your Tax Invoice approval request has been sent to the higher official.",
      });
    }, 1500);
  };

  const handleApprove = (id: string, index: number) => {
    setIsLoading((prev) => ({
      ...prev,
      [id]: { ...prev[id], approve: true },
    }));

    setTimeout(() => {
      if (data[index].taxInvoiceNumber !== "") {
        setData((prev) =>
          prev.map((item) =>
            item.id === id
              ? {
                  ...item,
                  isRequestToApproval: false,
                  isApprovedByAdmin: true,
                  isRejectByAdmin: false,
                }
              : item
          )
        );
        showToast("success", {
          heading: "Request Approved",
          message: "You have successfully approved the Tax Invoice request",
        });
      } else {
        showToast("warning", {
          heading: "Approval Blocked",
          message: "Generate the invoice first to enable request approval.",
        });
      }
      setIsLoading((prev) => ({
        ...prev,
        [id]: { ...prev[id], approve: false },
      }));
    }, 1500);
  };

  const handleReject = (id: string) => {
    setIsLoading((prev) => ({
      ...prev,
      [id]: { ...prev[id], reject: true },
    }));

    setTimeout(() => {
      setData((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                isRequestToApproval: false,
                isApprovedByAdmin: false,
                isRejectByAdmin: true,
              }
            : item
        )
      );
      setIsLoading((prev) => ({
        ...prev,
        [id]: { ...prev[id], reject: false },
      }));
      showToast("success", {
        heading: "Request Rejected",
        message: "You have rejected the Tax Invoice request",
      });
    }, 1500);
  };
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="p-3 bg-grey-aw-50 rounded-sm text-lg font-bold">
          <p>Tax Invoice</p>
        </div>

        {data.length === 0 ? (
          <div className="flex flex-col gap-4 px-3 py-8 items-center rounded-sm  bg-grey-aw-50 shadow-lg text-center">
            <div>
              <img src={TaxInvoiceImage} alt="TaxInvoiceImage" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-bold text-grey-ab-400">
                No Tax Invoice Available
              </p>
              <p className="text-sm  text-grey-ab-300">
                To generate a Tax Invoice, first create a Proforma Invoice in
                the Proforma Invoice section. After that, this screen will
                display your Tax Invoice
              </p>
            </div>
          </div>
        ) : (
          <>
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 p-3 rounded-xs bg-grey-aw-50 border-b border-b-grey-ab-100"
              >
                <div className="flex justify-between">
                  <Layout
                    label={"Tax Invoice"}
                    value={item.taxInvoiceNumber}
                    parentStyle="px-2 py-1"
                  />
                  <Layout
                    label={"Proforma"}
                    value={item.proformaNumber}
                    parentStyle="px-2 py-1"
                  />
                  <Layout
                    label={"Company Name"}
                    value={item.companyName}
                    parentStyle="px-2 py-1"
                  />
                  <Layout
                    label={"Proforma Amount"}
                    value={item.proformaAmount.toLocaleString("en-IN")}
                    parentStyle="px-2 py-1"
                  />

                  <div className="flex text-sm text-grey-ab-900 py-1 px-2 flex-col gap-1">
                    <p className="font-bold">Payment Status</p>
                    {item.paymentStatus.toLowerCase() === "paid" && (
                      <SuccessChip
                        label={item.paymentStatus}
                        size={"m"}
                        variant={"fill"}
                      />
                    )}
                    {item.paymentStatus.toLowerCase() === "pending" && (
                      <ErrorChip
                        label={item.paymentStatus}
                        size={"m"}
                        variant={"fill"}
                      />
                    )}
                  </div>
                </div>

                <div className="border-t border-t-grey-ab-100"></div>

                {!isAdmin ? (
                  <React.Fragment>
                    {item.paymentStatus.toLowerCase() === "paid" && (
                      <React.Fragment>
                        {item.taxInvoiceNumber === "" ? (
                          <div className="flex justify-end">
                            <div
                              onClick={() => handleGenerateTaxInvoice(item.id)}
                            >
                              {isLoading[item.id]?.generate ? (
                                <div className="flex gap-1 w-[160px] h-[32px] rounded-xs bg-primary-600 text-center text-xs text-white font-semibold justify-center items-center cursor-pointer">
                                  <p>Generating</p>
                                  <div className="w-3 h-3 border-2 border-white border-t-transparent border-solid rounded-full animate-spin"></div>
                                </div>
                              ) : (
                                <PrimaryButton
                                  label={"Generate Tax Invoice"}
                                  size={"m"}
                                  variant={"primary"}
                                  leftIcon={
                                    <DocumentIcon size={16} color="#ffffff" />
                                  }
                                />
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-end gap-4">
                            <NavLink
                              to={`/accounts/invoice-export/view-taxInvoice/${id}/${item.taxInvoiceNumber}`}
                            >
                              <NeutralBlueButton
                                label={"View"}
                                size={"m"}
                                variant={"primary"}
                                leftIcon={
                                  <DocumentIcon size={16} color="#ffffff" />
                                }
                              />
                            </NavLink>
                            <div>
                              <SuccessButton
                                label={"Download"}
                                size={"m"}
                                variant={"primary"}
                                leftIcon={
                                  <DownloadIcon size={16} color="#ffffff" />
                                }
                              />
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    )}

                    {item.paymentStatus.toLowerCase() === "pending" && (
                      <React.Fragment>
                        {!item.isRequestToApproval &&
                          !item.isRejectByAdmin &&
                          !item.isApprovedByAdmin && (
                            <div className="flex gap-2 p-2 justify-between rounded-sm bg-grey-200 items-center">
                              <div className="flex gap-2 items-center">
                                <div>
                                  <InfoIcon />
                                </div>
                                <p className="text-sm text-grey-ab-900">
                                  {item.taxInvoiceNumber !== ""
                                    ? "The tax invoice has been created by a higher official. You don't have permission to download it at this time. To gain access, please submit a request."
                                    : "To get a Tax Invoice, please complete the payment process, or if you need it before payment, request approval from a higher official."}
                                </p>
                              </div>
                              <div
                                onClick={() => handleRequestToApproval(item.id)}
                              >
                                {isLoading[item.id]?.request ? (
                                  <div className="flex gap-1 w-[125px] h-[24px] rounded-xs bg-grey-ab text-center text-xs text-white font-semibold justify-center items-center cursor-pointer">
                                    <p>Sending Request</p>
                                    <div className="w-3 h-3 border-2 border-white border-t-transparent border-solid rounded-full animate-spin"></div>
                                  </div>
                                ) : (
                                  <BlackButton
                                    label={`${
                                      item.taxInvoiceNumber !== ""
                                        ? "Submit Request"
                                        : "Request to Approval"
                                    }`}
                                    size={"s"}
                                    variant={"primary"}
                                    style="text-nowrap"
                                  />
                                )}
                              </div>
                            </div>
                          )}

                        {item.isRequestToApproval &&
                          !item.isRejectByAdmin &&
                          !item.isApprovedByAdmin && (
                            <div className="flex p-2 justify-between rounded-sm bg-warning-50 items-center">
                              <div className="flex gap-2 items-center">
                                <div>
                                  <InfoIcon color="#8C5311" />
                                </div>
                                <p className="text-sm text-warning-800">
                                  Your request for a Tax Invoice before payment
                                  is pending approval from a higher official
                                </p>
                              </div>
                            </div>
                          )}

                        {!item.isRequestToApproval &&
                          item.isRejectByAdmin &&
                          !item.isApprovedByAdmin && (
                            <div className="flex gap-2 p-2 justify-between rounded-sm bg-error-50 items-center">
                              <div className="flex gap-2 items-center">
                                <div>
                                  <CloseIcon color="#A60001" />
                                </div>
                                <p className="text-sm text-error-700">
                                  Your Tax Invoice request was canceled—complete
                                  the payment to get it automatically or request
                                  approval again if needed.
                                </p>
                              </div>
                              <div
                                onClick={() => handleRequestToApproval(item.id)}
                              >
                                {isLoading[item.id]?.request ? (
                                  <div className="flex gap-1 px-2 h-[24px] rounded-xs bg-grey-ab text-center text-xs text-white font-semibold justify-center items-center cursor-pointer">
                                    <p>Sending Request</p>
                                    <div className="w-3 h-3 border-2 border-white border-t-transparent border-solid rounded-full animate-spin"></div>
                                  </div>
                                ) : (
                                  <BlackButton
                                    label={"Request Again"}
                                    size={"s"}
                                    variant={"primary"}
                                    style="text-nowrap"
                                  />
                                )}
                                {/* <BlackButton
                                  label={"Request Again"}
                                  size={"s"}
                                  variant={"primary"}
                                /> */}
                              </div>
                            </div>
                          )}

                        {!item.isRequestToApproval &&
                          !item.isRejectByAdmin &&
                          item.isApprovedByAdmin && (
                            <div className="flex p-2 justify-between rounded-sm bg-success-50 items-center">
                              <div className="flex gap-2 items-center">
                                <div>
                                  <SuccessIcon color="#009F41" />
                                </div>
                                <p className="text-sm text-success-700">
                                  Your Tax Invoice request has been approved and
                                  is now available for download.
                                </p>
                              </div>
                              <div className="flex gap-4">
                                <NavLink
                                  to={`/accounts/invoice-export/view-taxInvoice/${id}/${item.taxInvoiceNumber}`}
                                >
                                  <NeutralBlueButton
                                    label={"View"}
                                    size={"s"}
                                    variant={"primary"}
                                    leftIcon={
                                      <DocumentIcon size={16} color="#ffffff" />
                                    }
                                  />
                                </NavLink>
                                <div>
                                  <SuccessButton
                                    label={"Download"}
                                    size={"s"}
                                    variant={"primary"}
                                    leftIcon={
                                      <DownloadIcon size={16} color="#ffffff" />
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                      </React.Fragment>
                    )}
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {item.paymentStatus.toLowerCase() === "paid" && (
                      <React.Fragment>
                        {item.taxInvoiceNumber === "" ? (
                          <div className="flex justify-end">
                            <div
                              onClick={() => handleGenerateTaxInvoice(item.id)}
                            >
                              {isLoading[item.id]?.generate ? (
                                <div className="flex gap-1 w-[160px] h-[32px] rounded-xs bg-primary-600 text-center text-xs text-white font-semibold justify-center items-center cursor-pointer">
                                  <p>Generating</p>
                                  <div className="w-3 h-3 border-2 border-white border-t-transparent border-solid rounded-full animate-spin"></div>
                                </div>
                              ) : (
                                <PrimaryButton
                                  label={"Generate Tax Invoice"}
                                  size={"m"}
                                  variant={"primary"}
                                  leftIcon={
                                    <DocumentIcon size={16} color="#ffffff" />
                                  }
                                />
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-end gap-4">
                            <NavLink
                              to={`/accounts/invoice-export/view-taxInvoice/${id}/${item.taxInvoiceNumber}`}
                            >
                              <NeutralBlueButton
                                label={"View"}
                                size={"m"}
                                variant={"primary"}
                                leftIcon={
                                  <DocumentIcon size={16} color="#ffffff" />
                                }
                              />
                            </NavLink>
                            <div>
                              <SuccessButton
                                label={"Download"}
                                size={"m"}
                                variant={"primary"}
                                leftIcon={
                                  <DownloadIcon size={16} color="#ffffff" />
                                }
                              />
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    )}

                    {item.paymentStatus.toLowerCase() === "pending" && (
                      <React.Fragment>
                        {!item.isRequestToApproval &&
                          !item.isRejectByAdmin &&
                          !item.isApprovedByAdmin && (
                            <React.Fragment>
                              {item.taxInvoiceNumber === "" ? (
                                <div className="flex justify-end">
                                  <div
                                    onClick={() =>
                                      handleGenerateTaxInvoice(item.id)
                                    }
                                  >
                                    {isLoading[item.id]?.generate ? (
                                      <div className="flex gap-1 w-[160px] h-[32px] rounded-xs bg-primary-600 text-center text-xs text-white font-semibold justify-center items-center cursor-pointer">
                                        <p>Generating</p>
                                        <div className="w-3 h-3 border-2 border-white border-t-transparent border-solid rounded-full animate-spin"></div>
                                      </div>
                                    ) : (
                                      <PrimaryButton
                                        label={"Generate Tax Invoice"}
                                        size={"m"}
                                        variant={"primary"}
                                        leftIcon={
                                          <DocumentIcon
                                            size={16}
                                            color="#ffffff"
                                          />
                                        }
                                      />
                                    )}
                                  </div>
                                </div>
                              ) : (
                                <div className="flex justify-end gap-4">
                                  <NavLink
                                    to={`/accounts/invoice-export/view-taxInvoice/${id}/${item.taxInvoiceNumber}`}
                                  >
                                    <NeutralBlueButton
                                      label={"View"}
                                      size={"m"}
                                      variant={"primary"}
                                      leftIcon={
                                        <DocumentIcon
                                          size={16}
                                          color="#ffffff"
                                        />
                                      }
                                    />
                                  </NavLink>
                                  <div>
                                    <SuccessButton
                                      label={"Download"}
                                      size={"m"}
                                      variant={"primary"}
                                      leftIcon={
                                        <DownloadIcon
                                          size={16}
                                          color="#ffffff"
                                        />
                                      }
                                    />
                                  </div>
                                </div>
                              )}
                            </React.Fragment>
                          )}

                        {item.isRequestToApproval &&
                          !item.isRejectByAdmin &&
                          !item.isApprovedByAdmin && (
                            <div className="flex flex-col gap-3">
                              <div className="flex gap-2 p-2 justify-between rounded-sm bg-grey-200 items-center">
                                <div className="flex gap-2 items-center">
                                  <div>
                                    <InfoIcon />
                                  </div>
                                  <p className="text-sm text-grey-ab-900">
                                    An Employee has requested a Tax Invoice
                                    before payment. Please review and take
                                    action (approve or reject) on the request.
                                  </p>
                                </div>
                                <div className="flex gap-4">
                                  <div
                                    onClick={() =>
                                      handleApprove(item.id, index)
                                    }
                                  >
                                    {isLoading[item.id]?.approve ? (
                                      <div className="flex gap-1 w-[61px] h-[24px] rounded-xs bg-success-700 text-center text-xs text-white font-semibold justify-center items-center cursor-pointer">
                                        <div className="w-3 h-3 border-2 border-white border-t-transparent border-solid rounded-full animate-spin"></div>
                                      </div>
                                    ) : (
                                      <SuccessButton
                                        label={"Approve"}
                                        size={"s"}
                                        variant={"primary"}
                                        style="text-nowrap"
                                      />
                                    )}
                                  </div>

                                  <div onClick={() => handleReject(item.id)}>
                                    {isLoading[item.id]?.reject ? (
                                      <div className="flex gap-1 w-[50px] h-[24px] rounded-xs bg-error-600 text-center text-xs text-white font-semibold justify-center items-center cursor-pointer">
                                        <div className="w-3 h-3 border-2 border-white border-t-transparent border-solid rounded-full animate-spin"></div>
                                      </div>
                                    ) : (
                                      <ErrorButton
                                        label={"Reject"}
                                        size={"s"}
                                        variant={"primary"}
                                        style="text-nowrap"
                                      />
                                    )}
                                  </div>
                                </div>
                              </div>

                              {/* taxInvoice number empty or not */}
                              {item.taxInvoiceNumber === "" ? (
                                <div className="flex justify-end">
                                  <div
                                    onClick={() =>
                                      handleGenerateTaxInvoice(item.id)
                                    }
                                  >
                                    {isLoading[item.id]?.generate ? (
                                      <div className="flex gap-1 w-[160px] h-[32px] rounded-xs bg-primary-600 text-center text-xs text-white font-semibold justify-center items-center cursor-pointer">
                                        <p>Generating</p>
                                        <div className="w-3 h-3 border-2 border-white border-t-transparent border-solid rounded-full animate-spin"></div>
                                      </div>
                                    ) : (
                                      <PrimaryButton
                                        label={"Generate Tax Invoice"}
                                        size={"m"}
                                        variant={"primary"}
                                        leftIcon={
                                          <DocumentIcon
                                            size={16}
                                            color="#ffffff"
                                          />
                                        }
                                      />
                                    )}
                                  </div>
                                </div>
                              ) : (
                                <div className="flex justify-end gap-4">
                                  <NavLink
                                    to={`/accounts/invoice-export/view-taxInvoice/${id}/${item.taxInvoiceNumber}`}
                                  >
                                    <NeutralBlueButton
                                      label={"View"}
                                      size={"m"}
                                      variant={"primary"}
                                      leftIcon={
                                        <DocumentIcon
                                          size={16}
                                          color="#ffffff"
                                        />
                                      }
                                    />
                                  </NavLink>
                                  <div>
                                    <SuccessButton
                                      label={"Download"}
                                      size={"m"}
                                      variant={"primary"}
                                      leftIcon={
                                        <DownloadIcon
                                          size={16}
                                          color="#ffffff"
                                        />
                                      }
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          )}

                        {!item.isRequestToApproval &&
                          item.isRejectByAdmin &&
                          !item.isApprovedByAdmin && (
                            <div className="flex gap-6 items-center">
                              <div className="flex gap-2 p-2 justify-between rounded-sm bg-error-50 items-center w-full">
                                <div className="flex gap-2 items-center">
                                  <div>
                                    <CloseIcon color="#A60001" />
                                  </div>
                                  <p className="text-sm text-error-700">
                                    You have rejected the user's request for a
                                    Tax Invoice. The user has been notified
                                    accordingly.
                                  </p>
                                </div>
                              </div>

                              {item.taxInvoiceNumber === "" ? (
                                <div className="flex justify-end">
                                  <div
                                    onClick={() =>
                                      handleGenerateTaxInvoiceWithReject(
                                        item.id
                                      )
                                    }
                                  >
                                    {isLoading[item.id]?.generate ? (
                                      <div className="flex gap-1 w-[160px] h-[32px] rounded-xs bg-primary-600 text-center text-xs text-white font-semibold justify-center items-center cursor-pointer">
                                        <p>Generating</p>
                                        <div className="w-3 h-3 border-2 border-white border-t-transparent border-solid rounded-full animate-spin"></div>
                                      </div>
                                    ) : (
                                      <PrimaryButton
                                        label={"Generate Tax Invoice"}
                                        size={"m"}
                                        variant={"primary"}
                                        leftIcon={
                                          <DocumentIcon
                                            size={16}
                                            color="#ffffff"
                                          />
                                        }
                                        style="text-nowrap"
                                      />
                                    )}
                                  </div>
                                </div>
                              ) : (
                                <div className="flex justify-end gap-4">
                                  <NavLink
                                    to={`/accounts/invoice-export/view-taxInvoice/${id}/${item.taxInvoiceNumber}`}
                                  >
                                    <NeutralBlueButton
                                      label={"View"}
                                      size={"m"}
                                      variant={"primary"}
                                      leftIcon={
                                        <DocumentIcon
                                          size={16}
                                          color="#ffffff"
                                        />
                                      }
                                    />
                                  </NavLink>
                                  <div>
                                    <SuccessButton
                                      label={"Download"}
                                      size={"m"}
                                      variant={"primary"}
                                      leftIcon={
                                        <DownloadIcon
                                          size={16}
                                          color="#ffffff"
                                        />
                                      }
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          )}

                        {!item.isRequestToApproval &&
                          !item.isRejectByAdmin &&
                          item.isApprovedByAdmin && (
                            <div className="flex gap-6 items-center">
                              <div className="flex gap-2 p-2 justify-between rounded-sm bg-success-50 items-center w-full">
                                <div className="flex gap-2 items-center">
                                  <div>
                                    <SuccessIcon color="#009F41" />
                                  </div>
                                  <p className="text-sm text-success-700">
                                    You have successfully approved the Tax
                                    Invoice request. The invoice has been issued
                                    to the user.
                                  </p>
                                </div>
                              </div>

                              <div className="flex justify-end gap-4">
                                <NavLink
                                  to={`/accounts/invoice-export/view-taxInvoice/${id}/${item.taxInvoiceNumber}`}
                                >
                                  <NeutralBlueButton
                                    label={"View"}
                                    size={"m"}
                                    variant={"primary"}
                                    leftIcon={
                                      <DocumentIcon size={16} color="#ffffff" />
                                    }
                                  />
                                </NavLink>
                                <div>
                                  <SuccessButton
                                    label={"Download"}
                                    size={"m"}
                                    variant={"primary"}
                                    leftIcon={
                                      <DownloadIcon size={16} color="#ffffff" />
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                      </React.Fragment>
                    )}
                  </React.Fragment>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default TaxInvoice;
