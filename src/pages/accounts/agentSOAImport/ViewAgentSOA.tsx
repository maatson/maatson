import React, { useCallback, useEffect, useState } from "react";
import AccountsModel from "../components/AccountsModel";
import { NavLink, useParams } from "react-router-dom";
import {
  AddIcon,
  DocumentIcon,
  DownloadIcon,
} from "../../../components/icons/Icons";
import CreateImage from "/images/create.png";
import GreyButton from "../../../components/buttons/GreyButton";
import CustomTable from "../../../components/table/CustomTable";
import SuccessChip from "../../../components/chips/SuccessChip";
import ErrorChip from "../../../components/chips/ErrorChip";

interface CreditRowData {
  id: string | number;
  creditNoteInvoiceNumber: string | React.ReactNode;
  agentName: string | React.ReactNode;
  creditAmount: number | React.ReactNode;
  noteDate: number | React.ReactNode;
  paymentStatus: string | React.ReactNode;
  action: React.ReactNode;
}

interface DebitRowData {
  id: string | number;
  debitNoteInvoiceNumber: string | React.ReactNode;
  agentName: string | React.ReactNode;
  debitAmount: number | React.ReactNode;
  noteDate: number | React.ReactNode;
  paymentStatus: string | React.ReactNode;
  action: React.ReactNode;
}

interface CreditNoteDetails {
  creditId: string;
  creditNoteInvoiceNumber: string;
  agentName: string;
  creditAmount: number;
  noteDate: string;
  paymentStatus: string;
}
interface DebitNoteDetails {
  debitId: string;
  debitNoteInvoiceNumber: string;
  agentName: string;
  debitAmount: number;
  noteDate: string;
  paymentStatus: string;
}

interface CarrierInvoiceData {
  bookingId: string;
  billOfLading: string;
  customerName: string;
  creditNote: string;
  debitNote: string;
  creditNoteInvoiceDetails: CreditNoteDetails[];
  debitNoteInvoiceDetails: DebitNoteDetails[];
}

const CreditColumns: any[] = [
  {
    id: "creditNoteInvoiceNumber",
    label: "Credit Note Invoice Number",
    minWidth: 160,
  },
  { id: "agentName", label: "Agent Name", minWidth: 120 },
  { id: "creditAmount", label: "Credit Amount", minWidth: 120 },
  { id: "noteDate", label: "Note Date", minWidth: 70 },
  {
    id: "paymentStatus",
    label: "Payment Status",
    minWidth: 120,
    align: "center",
  },
  {
    id: "action",
    label: "Action",
    align: "center",
    minWidth: 100,
  },
];

const DebitColumns: any[] = [
  {
    id: "debitNoteInvoiceNumber",
    label: "Debit Note Invoice Number",
    minWidth: 160,
  },
  { id: "agentName", label: "Agent Name", minWidth: 120 },
  { id: "debitAmount", label: "Debit Amount", minWidth: 120 },
  { id: "noteDate", label: "Note Date", minWidth: 70 },
  {
    id: "paymentStatus",
    label: "Payment Status",
    minWidth: 120,
    align: "center",
  },
  {
    id: "action",
    label: "Action",
    align: "center",
    minWidth: 100,
  },
];

const ViewAgentSOA: React.FC = () => {
  const { id } = useParams();
  const [creditRows, setCreditRows] = useState<CreditRowData[]>([]);
  const [debitRows, setDebitRows] = useState<DebitRowData[]>([]);
  const [data, setData] = useState<CarrierInvoiceData>({
    bookingId: "0000001",
    billOfLading: "MSCU1234569-A",
    customerName: "HarborLine Exports Pvt. Ltd",
    creditNote: "1000 USD",
    debitNote: "1000 USD",
    creditNoteInvoiceDetails: [
      {
        creditId: "1",
        creditNoteInvoiceNumber: "CRD20250001",
        agentName: "HarborLine Exports Pvt. Ltd.",
        creditAmount: 10000,
        noteDate: "11-03-2025",
        paymentStatus: "Paid",
      },
    ],
    debitNoteInvoiceDetails: [
      {
        debitId: "2",
        debitNoteInvoiceNumber: "CRD20250001",
        agentName: "HarborLine Exports Pvt. Ltd.",
        debitAmount: 10000,
        noteDate: "11-03-2025",
        paymentStatus: "Unpaid",
      },
    ],
  });

  const fetchCreditData = useCallback(() => {
    const createData = (items: any) => {
      const paymentStatusValue = (
        <div className="flex justify-center">
          {items.paymentStatus.toLowerCase() === "paid" ? (
            <SuccessChip
              label={items.paymentStatus}
              size={"m"}
              variant={"outline"}
            />
          ) : (
            <ErrorChip
              label={items.paymentStatus}
              size={"m"}
              variant={"outline"}
            />
          )}
        </div>
      );
      const actions = (
        <div className="flex gap-2 justify-center">
          <NavLink
            to={`/accounts/agent-soa-import/credit-details/${id}/${items.creditId}`}
          >
            <div className="p-1 rounded-xs bg-grey-ab cursor-pointer">
              <DocumentIcon size={16} color="#ffffff" />
            </div>
          </NavLink>
          <div className="p-1 rounded-xs bg-success-600 cursor-pointer">
            <DownloadIcon size={16} color="#ffffff" />
          </div>
        </div>
      );

      const updatedData = {
        id: items.creditId,
        creditNoteInvoiceNumber: items?.creditNoteInvoiceNumber,
        agentName: items?.agentName,
        creditAmount: items?.creditAmount,
        noteDate: items?.noteDate,
        paymentStatus: paymentStatusValue,
        action: actions,
      };

      return updatedData;
    };
    const arr = data.creditNoteInvoiceDetails.map((items, index) => {
      return createData({ ...items, id: index });
    });
    setCreditRows(arr);
  }, []);

  const fetchDebitData = useCallback(() => {
    const createData = (items: any) => {
      const paymentStatusValue = (
        <div className="flex justify-center">
          {items.paymentStatus.toLowerCase() === "paid" ? (
            <SuccessChip
              label={items.paymentStatus}
              size={"m"}
              variant={"outline"}
            />
          ) : (
            <ErrorChip
              label={items.paymentStatus}
              size={"m"}
              variant={"outline"}
            />
          )}
        </div>
      );
      const actions = (
        <div className="flex gap-2 justify-center">
          <NavLink
            to={`/accounts/agent-soa-import/debit-details/${id}/${items.debitId}`}
          >
            <div className="p-1 rounded-xs bg-grey-ab cursor-pointer">
              <DocumentIcon size={16} color="#ffffff" />
            </div>
          </NavLink>
          <div className="p-1 rounded-xs bg-success-600 cursor-pointer">
            <DownloadIcon size={16} color="#ffffff" />
          </div>
        </div>
      );

      const updatedData = {
        id: items.creditId,
        debitNoteInvoiceNumber: items?.debitNoteInvoiceNumber,
        agentName: items?.agentName,
        debitAmount: items?.debitAmount,
        noteDate: items?.noteDate,
        paymentStatus: paymentStatusValue,
        action: actions,
      };

      return updatedData;
    };
    const arr = data.debitNoteInvoiceDetails.map((items, index) => {
      return createData({ ...items, id: index });
    });
    setDebitRows(arr);
  }, []);

  useEffect(() => {
    fetchCreditData();
  }, [fetchCreditData]);
  useEffect(() => {
    fetchDebitData();
  }, [fetchDebitData]);
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-4 p-3 rounded-sm shadow-md bg-grey-aw-50">
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
            value={data.customerName}
            parentStyle="py-1 px-2 flex-col"
          />
          <AccountsModel
            label={"Credit Note"}
            value={data.creditNote}
            parentStyle="py-1 px-2 flex-col"
          />
          <AccountsModel
            label={"Debit Note"}
            value={data.debitNote}
            parentStyle="py-1 px-2 flex-col"
          />
        </div>

        <div className="flex flex-col gap-4">
          {/* credit note invoice */}
          <div className="flex flex-col">
            <div className="bg-grey-aw-50 p-3 rounded-xs shadow-lg text-lg font-bold text-grey-ab-900 flex justify-between items-center border-b border-b-grey-ab-50">
              <p>Credit Note Invoice</p>
              <NavLink to={`/accounts/agent-soa-import/credit-create/${id}`}>
                <GreyButton
                  label={"Add Credit Invoice "}
                  size={"m"}
                  variant={"primary"}
                  leftIcon={<AddIcon size={16} />}
                />
              </NavLink>
            </div>

            {data.creditNoteInvoiceDetails.length === 0 ? (
              <div className="flex flex-col rounded-xs py-4 bg-grey-aw-50 shadow-lg">
                <div className="mx-auto flex flex-col gap-4 py-4 items-center">
                  <div className="flex flex-col gap-6">
                    <div className="mx-auto">
                      <img src={CreateImage} alt="CreateImage" />
                    </div>
                    <p className="text-xs text-grey-ab-300">
                      Click below to get started and generate a Credit Note
                      Invoice in seconds.
                    </p>
                  </div>
                  <NavLink
                    to={`/accounts/agent-soa-import/credit-create/${id}`}
                  >
                    <GreyButton
                      label={"Add Credit Invoice "}
                      size={"m"}
                      variant={"primary"}
                      leftIcon={<AddIcon size={16} />}
                    />
                  </NavLink>
                </div>
              </div>
            ) : (
              <CustomTable
                columns={CreditColumns}
                rows={creditRows}
                isCheckbox={false}
              />
            )}
          </div>

          {/* debit note invoice */}
          <div className="flex flex-col">
            <div className="bg-grey-aw-50 p-3 rounded-xs shadow-lg text-lg font-bold text-grey-ab-900 flex justify-between items-center border-b border-b-grey-ab-50">
              <p>Debit Note Invoice</p>
              <NavLink to={`/accounts/agent-soa-import/debit-create/${id}`}>
                <GreyButton
                  label={"Add Debit Invoice "}
                  size={"m"}
                  variant={"primary"}
                  leftIcon={<AddIcon size={16} />}
                />
              </NavLink>
            </div>

            {data.creditNoteInvoiceDetails.length === 0 ? (
              <div className="flex flex-col rounded-xs py-4 bg-grey-aw-50 shadow-lg">
                <div className="mx-auto flex flex-col gap-4 py-4 items-center">
                  <div className="flex flex-col gap-6">
                    <div className="mx-auto">
                      <img src={CreateImage} alt="CreateImage" />
                    </div>
                    <p className="text-xs text-grey-ab-300">
                      Click below to get started and generate a Debit Note
                      Invoice in seconds.
                    </p>
                  </div>
                  <NavLink to={`/accounts/agent-soa-import/debit-create/${id}`}>
                    <GreyButton
                      label={"Add Debit Invoice "}
                      size={"m"}
                      variant={"primary"}
                      leftIcon={<AddIcon size={16} />}
                    />
                  </NavLink>
                </div>
              </div>
            ) : (
              <CustomTable
                columns={DebitColumns}
                rows={debitRows}
                isCheckbox={false}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAgentSOA;
