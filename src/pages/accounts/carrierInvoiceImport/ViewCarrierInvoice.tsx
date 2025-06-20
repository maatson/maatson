import React, { useCallback, useEffect, useState } from "react";
import AccountsModel from "../components/AccountsModel";
import SuccessChip from "../../../components/chips/SuccessChip";
import WarningChip from "../../../components/chips/WarningChip";
import ErrorChip from "../../../components/chips/ErrorChip";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { NavLink, useParams } from "react-router-dom";
import {
  AddIcon,
  DeleteIcon,
  DocumentIcon,
  DownloadIcon,
  EditIcon,
} from "../../../components/icons/Icons";
import CreateImage from "/images/create.png";
import BlackButton from "../../../components/buttons/BlackButton";
import NeutralBlueButton from "../../../components/buttons/NeutralBlueButton";
import GreyButton from "../../../components/buttons/GreyButton";
import CustomTable from "../../../components/table/CustomTable";
import InvoiceCollectStatus from "../components/InvoiceCollectStatus";
import AddCollectionPayment from "../components/AddCollectionPayment";
import CollectionView from "../components/CollectionView";
import EditCollectionPayment from "../components/EditCollectionPayment";

interface RowData {
  id: string | number;
  paymentSlipNumber: string | React.ReactNode;
  paymentDate: string | React.ReactNode;
  paymentTotalAmount: number | React.ReactNode;
  tdsReceivable: number | React.ReactNode;
  action: React.ReactNode;
}

interface PaymentDetail {
  paymentId: string;
  paymentSlipNumber: string;
  paymentDate: string;
  paymentTotalAmount: number;
  tdsReceivable: number;
}

interface CarrierInvoiceData {
  bookingId: string;
  billOfLading: string;
  carrierName: string;
  portOfLoading: string;
  portOfDischarge: string;
  carrierInvoiceStatus: string;
  invoiceStatus: string;
  paymentStatus: string;
  totalAmount: number;
  carrierInvoiceDetails: { carrierBL: string; carrierInvoiceNumber: string }[];
  paymentDetails: PaymentDetail[];
  carrierInvoiceDocument: File | null;
}

const Columns: any[] = [
  { id: "paymentSlipNumber", label: "Payment Slip Number", minWidth: 160 },
  { id: "paymentDate", label: "Payment Date", minWidth: 120 },
  { id: "paymentTotalAmount", label: "Total Amount", minWidth: 120 },
  { id: "tdsReceivable", label: "TDS Receivable", minWidth: 120 },
  {
    id: "action",
    label: "Action",
    align: "center",
    minWidth: 100,
  },
];

const ViewCarrierInvoice: React.FC = () => {
  const { id } = useParams();
  const [rows, setRows] = useState<RowData[]>([]);
  const [isInvoiceCollect, setIsInvoiceCollect] = useState<boolean>(false);
  const [isAddPayment, setIsAddPayment] = useState<boolean>(false);
  const [isCollectionView, setIsCollectionView] = useState<boolean>(false);
  const [isEditCollectionPayment, setIsEditCollectionPayment] =
    useState<boolean>(false);

  const [data, setData] = useState<CarrierInvoiceData>({
    bookingId: "0000001",
    billOfLading: "MSCU1234569-A",
    carrierName: "HarborLine Exports Pvt. Ltd",
    portOfLoading: "Los Angeles, USA",
    portOfDischarge: "Rotterdam, Netherlands",
    carrierInvoiceStatus: "Pending",
    invoiceStatus: "Pending",
    paymentStatus: "UnPaid",
    totalAmount: 10000,
    carrierInvoiceDetails: [
      {
        carrierBL: "MSCU1234569-A",
        carrierInvoiceNumber: "203549353",
      },
    ],
    paymentDetails: [
      {
        paymentId: "",
        paymentSlipNumber: "mmi1234501-D",
        paymentDate: "11-03-2025",
        paymentTotalAmount: 10000,
        tdsReceivable: 100,
      },
    ],
    carrierInvoiceDocument: null as File | null,
  });

  // const handleSaveInvoiceCollect = (newData: invoiceCollectDataProps) => {
  //   // setBankAccountData((prev) => {
  //   //   const updatedData = newData.isPrimary
  //   //     ? prev.map((item) => ({ ...item, isPrimary: false }))
  //   //     : prev;
  //   //   return [...updatedData, newData];
  //   // });
  //   // showToast("success", {
  //   //   heading: "Bank Account Added",
  //   //   message: "The bank details have been successfully Added.",
  //   // });
  //   // setIsAddBank(false);
  // };

  const handleSaveInvoiceCollect = () => {};
  const handleSaveAddPayment = () => {};
  const handleSaveEditCollectionPayment = () => {};

  const fetchData = useCallback(() => {
    const createData = (items: any) => {
      const { id } = items;
      const actions = (
        <div className="flex gap-2 justify-center">
          <div
            className="p-1 rounded-xs bg-grey-ab cursor-pointer"
            onClick={() => setIsCollectionView(true)}
          >
            <DocumentIcon size={16} color="#ffffff" />
          </div>
          <div className="p-1 rounded-xs bg-success-600 cursor-pointer">
            <DownloadIcon size={16} color="#ffffff" />
          </div>
        </div>
      );

      const updatedData = {
        id: id,
        paymentSlipNumber: items?.paymentSlipNumber,
        paymentDate: items?.paymentDate,
        paymentTotalAmount: items?.paymentTotalAmount,
        tdsReceivable: items?.tdsReceivable,
        action: actions,
      };

      return updatedData;
    };
    const arr = data.paymentDetails.map((items, index) => {
      return createData({ ...items, id: index });
    });
    setRows(arr);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 p-3 rounded-sm shadow-md bg-grey-aw-50">
          <div className="grid grid-cols-5 ">
            <AccountsModel
              label={"Booking ID"}
              value={data.bookingId}
              parentStyle="py-1 px-2 flex-col"
            />
            <AccountsModel
              label={"Bill of Lading"}
              value={data.billOfLading}
              parentStyle="py-1 px-2 flex-col"
            />
            <AccountsModel
              label={"Carrier Name"}
              value={data.carrierName}
              parentStyle="py-1 px-2 flex-col"
            />
            <AccountsModel
              label={"Port of Loading"}
              value={data.portOfLoading}
              parentStyle="py-1 px-2 flex-col"
            />
            <AccountsModel
              label={"Port of Discharge"}
              value={data.portOfDischarge}
              parentStyle="py-1 px-2 flex-col"
            />
          </div>

          <div className="grid grid-cols-5 ">
            <AccountsModel
              label={"Carrier Invoice Status"}
              value={
                data.carrierInvoiceStatus.toLowerCase() === "collected" ? (
                  <SuccessChip
                    label={data.carrierInvoiceStatus}
                    size={"m"}
                    variant={"fill"}
                  />
                ) : (
                  <WarningChip
                    label={data.carrierInvoiceStatus}
                    size={"m"}
                    variant={"fill"}
                  />
                )
              }
              parentStyle="py-1 px-2 flex-col"
            />
            <AccountsModel
              label={"Invoice Updates"}
              value={
                data.invoiceStatus.toLowerCase() === "collected" ? (
                  <SuccessChip
                    label={data.invoiceStatus}
                    size={"m"}
                    variant={"fill"}
                  />
                ) : (
                  <WarningChip
                    label={data.invoiceStatus}
                    size={"m"}
                    variant={"fill"}
                  />
                )
              }
              parentStyle="py-1 px-2 flex-col"
            />
            <AccountsModel
              label={"Payment Status"}
              value={
                data.paymentStatus.toLowerCase() === "paid" ? (
                  <SuccessChip
                    label={data.paymentStatus}
                    size={"m"}
                    variant={"mix"}
                  />
                ) : (
                  <ErrorChip
                    label={data.paymentStatus}
                    size={"m"}
                    variant={"mix"}
                  />
                )
              }
              parentStyle="py-1 px-2 flex-col"
            />
            <AccountsModel
              label={"Total Amount"}
              value={data.totalAmount}
              parentStyle="py-1 px-2 flex-col"
            />
          </div>
        </div>

        <div className="bg-grey-aw-50 p-3 rounded-xs shadow-lg text-lg font-bold text-grey-ab-900">
          <p>Carrier Invoice</p>
        </div>

        {data.carrierInvoiceDetails.length === 0 ? (
          <div className="flex flex-col rounded-xs py-4 bg-grey-aw-50 shadow-lg">
            <div className="mx-auto flex flex-col gap-4 py-4 items-center">
              <div className="flex flex-col gap-6">
                <div className="mx-auto">
                  <img src={CreateImage} alt="CreateImage" />
                </div>
                <p className="text-xs text-grey-ab-300">
                  Click below to get started and generate a professional Carrier
                  Invoice in seconds.
                </p>
              </div>
              <NavLink to={`/accounts/carrier-invoice-import/create/${id}`}>
                <PrimaryButton
                  label={"Create Carrier Invoice "}
                  size={"m"}
                  variant={"outline"}
                  leftIcon={<AddIcon size={16} color="#2C398F" />}
                />
              </NavLink>
            </div>
          </div>
        ) : (
          <React.Fragment>
            <div className="flex flex-col gap-3 p-3 rounded-sm bg-grey-aw-50 shadow-xs border border-primary">
              <div className="flex justify-between">
                <AccountsModel
                  label={"Carrier BL"}
                  value={data?.carrierInvoiceDetails[0]?.carrierBL}
                  parentStyle="py-1 px-2 flex-col"
                />
                <AccountsModel
                  label={"Carrier Invoice"}
                  value={data?.carrierInvoiceDetails[0]?.carrierInvoiceNumber}
                  parentStyle="py-1 px-2 flex-col"
                />
                <AccountsModel
                  label={"Carrier Name"}
                  value={data?.carrierName}
                  parentStyle="py-1 px-2 flex-col"
                />
                <AccountsModel
                  label={"Port of Loading"}
                  value={data?.portOfLoading}
                  parentStyle="py-1 px-2 flex-col"
                />
                <AccountsModel
                  label={"Port of Discharge"}
                  value={data?.portOfDischarge}
                  parentStyle="py-1 px-2 flex-col"
                />
                <AccountsModel
                  label={"Total Amount"}
                  value={data?.totalAmount}
                  parentStyle="py-1 px-2 flex-col"
                />
              </div>
              <div className="border-t border-t-grey-ab-100"></div>
              <div className="flex justify-end gap-3">
                <NavLink to={`/accounts/carrier-invoice-import/details/${id}`}>
                  <BlackButton
                    label={"View Invoice"}
                    size={"m"}
                    variant={"primary"}
                    leftIcon={<DocumentIcon size={16} color="#ffffff" />}
                  />
                </NavLink>
                <NavLink to={`/accounts/carrier-invoice-import/edit/${id}`}>
                  <NeutralBlueButton
                    label={"Edit Invoice"}
                    size={"m"}
                    variant={"primary"}
                    leftIcon={<EditIcon size={16} color="#ffffff" />}
                  />
                </NavLink>
              </div>
            </div>

            <div className="grid grid-cols-9 gap-4 w-full">
              <div className="flex flex-col rounded-xs bg-grey-aw-50 shadow-xs col-span-5">
                <div className="flex justify-between p-3 items-center ">
                  <p className="text-lg font-bold text-grey-ab-900">
                    Payment List
                  </p>
                  <div onClick={() => setIsAddPayment(true)}>
                    <GreyButton
                      label={"Add Payment"}
                      size={"m"}
                      variant={"primary"}
                      leftIcon={<AddIcon size={16} />}
                    />
                  </div>
                </div>

                {data.paymentDetails.length === 0 ? (
                  <div className="py-2 px-4 flex gap-4 text-nowrap justify-between bg-grey-100 overflow-auto custom-scrollbar">
                    <p className="py-1 text-sm  font-semibold text-grey-ab-900">
                      Payment Slip Number
                    </p>
                    <p className="py-1 text-sm  font-semibold text-grey-ab-900">
                      Payment Date
                    </p>
                    <p className="py-1 text-sm  font-semibold text-grey-ab-900">
                      Total Amount
                    </p>
                    <p className="py-1 text-sm  font-semibold text-grey-ab-900">
                      TDS Receivable
                    </p>
                    <p className="py-1 text-sm  font-semibold text-grey-ab-900">
                      Action
                    </p>
                  </div>
                ) : (
                  <CustomTable
                    columns={Columns}
                    rows={rows}
                    isCheckbox={false}
                  />
                )}
              </div>

              <div className="flex flex-col rounded-xs bg-grey-aw-50 shadow-xs col-span-4 h-fit">
                <div className="flex justify-between p-3 items-center ">
                  <p className="text-lg font-bold text-grey-ab-900">
                    Invoice Collect Update
                  </p>
                  <div onClick={() => setIsInvoiceCollect(true)}>
                    <GreyButton
                      label={"Update Inovice Status"}
                      size={"m"}
                      variant={"primary"}
                      leftIcon={<DocumentIcon size={16} />}
                    />
                  </div>
                </div>

                <div className="flex p-3 gap-4 justify-between">
                  <AccountsModel
                    label={"Carrier Invoice Document"}
                    value={
                      <div className="flex items-center gap-3 p-2 rounded-xs bg-primary-50 border border-grey-ab-100">
                        <div>
                          <DocumentIcon color="#2C398F" />
                        </div>
                        <p className="text-grey-ab-900 truncate w-[120px]">
                          Carrier Invoice.pdf
                        </p>
                        <div className="flex gap-2">
                          <div className="p-1 rounded-xs bg-success-600 cursor-pointer">
                            <DownloadIcon size={16} color="#ffffff" />
                          </div>
                          <div className="p-1 rounded-xs bg-error cursor-pointer">
                            <DeleteIcon size={16} color="#ffffff" />
                          </div>
                        </div>
                      </div>
                    }
                    parentStyle="py-1 px-2 flex-col"
                  />
                  <AccountsModel
                    label={"Carrier Invoice Status"}
                    value={
                      <>
                        {data.carrierInvoiceStatus.toLowerCase() ===
                        "pending" ? (
                          <WarningChip
                            label={data.carrierInvoiceStatus}
                            size={"m"}
                            variant={"fill"}
                          />
                        ) : (
                          <SuccessChip
                            label={data.carrierInvoiceStatus}
                            size={"m"}
                            variant={"fill"}
                          />
                        )}
                      </>
                    }
                    parentStyle="py-1 px-2 flex-col "
                  />
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>

      {isInvoiceCollect && (
        <div className="fixed flex justify-center items-center bg-black bg-opacity-50 z-30 inset-0">
          <InvoiceCollectStatus
            onClose={() => setIsInvoiceCollect(false)}
            onSave={handleSaveInvoiceCollect}
          />
        </div>
      )}

      {isAddPayment && (
        <div className="fixed flex justify-center items-center bg-black bg-opacity-50 z-30 inset-0">
          <AddCollectionPayment
            onClose={() => setIsAddPayment(false)}
            onSave={handleSaveAddPayment}
          />
        </div>
      )}

      {isEditCollectionPayment && (
        <div className="fixed flex justify-center items-center bg-black bg-opacity-50 z-30 inset-0">
          <EditCollectionPayment
            onClose={() => setIsEditCollectionPayment(false)}
            onSave={handleSaveEditCollectionPayment}
          />
        </div>
      )}

      {isCollectionView && (
        <div className="fixed flex justify-center items-center bg-black bg-opacity-50 z-30 inset-0">
          <CollectionView
            onClose={() => setIsCollectionView(false)}
            onEdit={() => {
              setIsCollectionView(false);
              setIsEditCollectionPayment(true);
            }}
          />
        </div>
      )}
    </>
  );
};

export default ViewCarrierInvoice;
