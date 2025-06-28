import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import {
  DocumentIcon,
  DownloadIcon,
  ExcelIcon,
  SearchIcon,
} from "../../../../components/icons/Icons";
import GroupField from "../../../../components/groupField/GroupField";
import SuccessButton from "../../../../components/buttons/SuccessButton";
import CustomTable from "../../../../components/table/CustomTable";
import CustomPagination from "../../../../components/pagination/CustomPagination";
import EditAgentCreditPaySlip from "../../components/dashboard/EditAgentCreditPaySlip";
import ViewAgentCreditPaySlip from "../../components/dashboard/ViewAgentCreditPaySlip";

interface RowData {
  id: string | number;
  creditSlipNumber: string;
  remittanceRef: string;
  bankName: string;
  totalAmount: number;
  bankCharges: number;
  otherCharges: number;
  totalAmountReceived: React.ReactNode;
  paidDate: string;
  action: React.ReactNode;
}

interface InitialDataProps {
  creditSlipNumber: string;
  remittanceRef: string;
  paidDate: string;
  creditNoteInvoiceNumbers: string[];
  agentName: string;
  agentAdress: string;
  phoneNumber: string;
  bankName: string;
  beneficiaryName: string;
  accountNumber: string;
  branchName: string;
  ifscCode: string;
  agentSOACreditAmount: number;
  totalAmount: number;
  bankCharges: number;
  otherCharges: number;
  paymentMethod: string;
  totalAmountReceived: number;
  remarks: string;
}

const columns: any[] = [
  { id: "creditSlipNumber", label: "Credit Slip Number", minWidth: 160 },
  { id: "remittanceRef", label: "Remittance Ref", minWidth: 140 },
  { id: "bankName", label: "Bank Name", minWidth: 180 },
  { id: "totalAmount", label: "Paid Amount", minWidth: 140 },
  { id: "bankCharges", label: "Bank Charges", minWidth: 140 },
  { id: "otherCharges", label: "Other Charges", minWidth: 140 },
  { id: "totalAmountReceived", label: "Total Amount", minWidth: 140 },
  { id: "paidDate", label: "Paid Date", minWidth: 100 },
  { id: "action", label: "Action", align: "center", minWidth: 100 },
];

const ViewCreditSlips: React.FC = () => {
  const [isViewPaySlip, setIsViewPaySlip] = useState<boolean>(false);
  const [isEditPaySlip, setIsEditPaySlip] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<InitialDataProps>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<RowData[]>([]);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const from = (currentPage - 1) * itemsPerPage + 1;
  const to = Math.min(currentPage * itemsPerPage, rows.length);

  const handleCheckedRowsChange = (newCheckedRows: (string | number)[]) => {
    setSelectedRows(newCheckedRows);
  };
  console.log(selectedRows, "selected Rows");

  const handleItemsPerPageChange = useCallback(
    (event: SelectChangeEvent<number>) => {
      setItemsPerPage(Number(event.target.value));
      setCurrentPage(1);
    },
    []
  );
  const handlechangePage = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  // table
  const createData = (items: any) => {
    const { id } = items;

    const actions = (
      <div className="flex justify-center gap-2">
        <div
          className="p-1 rounded-xs bg-grey-ab cursor-pointer"
          onClick={() => {
            setSelectedData(items);
            setIsViewPaySlip(true);
          }}
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
      creditSlipNumber: items?.creditSlipNumber,
      remittanceRef: items?.remittanceRef,
      bankName: items?.bankName,
      totalAmount: items?.totalAmount,
      bankCharges: items?.bankCharges,
      otherCharges: items?.otherCharges,
      totalAmountReceived: (
        <div className="font-semibold">{items?.totalAmountReceived}</div>
      ),
      paidDate: items?.paidDate,
      action: actions,
    };
    return updatedData;
  };

  const data = [
    {
      creditSlipNumber: "CD10132001",
      remittanceRef: "ref20250001",
      paidDate: "23-03-2025",
      creditNoteInvoiceNumbers: [
        "CD10132001",
        "CD10132002",
        "CD10132003",
        "CD10132004",
        "CD10132005",
        "CD10132006",
        "CD10132007",
        "CD10132008",
        "CD10132009",
      ],
      agentName: "Legend Shipping Agency Private Limited",
      agentAdress: "No. 10, Cenotaph Road, Teynampet, Chennai – 600018",
      phoneNumber: "+91 85745 87458",
      bankName: "ICICI BANK LIMITED",
      beneficiaryName: "MAATSON MARITIME INTL OPC PVT LTD",
      accountNumber: "190205001960",
      branchName: "MADHAVARAM",
      ifscCode: "ICIC0001902",
      agentSOACreditAmount: 50000,
      totalAmount: 49000,
      bankCharges: 1000,
      otherCharges: 500,
      paymentMethod: "NEFT/RTGS/IMPS/SWIFT/ACH",
      totalAmountReceived: 50500,
      remarks:
        "Confirmation of successful collection Pending or delayed collections with reasons Issues encountered during collection (e.g., damaged goods, incomplete payment) Follow-up actions required Special instructions or notes from the collector or supervisor",
    },
    {
      creditSlipNumber: "CD10132002",
      remittanceRef: "ref20250001",
      paidDate: "23-03-2025",
      creditNoteInvoiceNumbers: [
        "CD10132011",
        "CD10132012",
        "CD10132013",
        "CD10132014",
        "CD10132015",
        "CD10132016",
        "CD10132017",
        "CD10132018",
        "CD10132019",
      ],
      agentName: "Legend Shipping Agency Private Limited",
      agentAdress: "No. 10, Cenotaph Road, Teynampet, Chennai – 600018",
      phoneNumber: "+91 85745 87458",
      bankName: "ICICI BANK LIMITED",
      beneficiaryName: "MAATSON MARITIME INTL OPC PVT LTD",
      accountNumber: "190205001960",
      branchName: "MADHAVARAM",
      ifscCode: "ICIC0001902",
      agentSOACreditAmount: 50000,
      totalAmount: 42000,
      bankCharges: 2000,
      otherCharges: 1000,
      paymentMethod: "NEFT/RTGS/IMPS/SWIFT/ACH",
      totalAmountReceived: 45000,
      remarks:
        "Confirmation of successful collection Pending or delayed collections with reasons Issues encountered during collection (e.g., damaged goods, incomplete payment) Follow-up actions required Special instructions or notes from the collector or supervisor",
    },
  ];

  const fetchData = useCallback(() => {
    const arr = data.map((items, index) => {
      return createData({ ...items, id: index });
    });
    setRows(arr);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className="flex flex-col bg-grey-aw-50 rounded-xs">
        <div className="flex justify-between p-3 border-b border-b-grey-ab-50 items-center ">
          <div className="w-[70%] flex gap-4 items-center">
            <p className="text-lg font-semibold text-grey-ab-900 text-nowrap">
              Agent Credit Slip List
            </p>
            <GroupField
              label={""}
              type={""}
              placeholder={"Search"}
              name={""}
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error(e + "Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              rightIcon={<SearchIcon color="#6A6A6A" />}
              parentStyle="w-[40%]"
            />
          </div>
          <div>
            <SuccessButton
              label={"Export"}
              size={"l"}
              variant={"primary"}
              rightIcon={<ExcelIcon color="#FCFCFC" />}
            />
          </div>
        </div>

        {/* table */}
        <div className="py-1 px-2">
          <CustomTable
            columns={columns}
            rows={rows.slice(
              (currentPage - 1) * itemsPerPage,
              currentPage * itemsPerPage
            )}
            isCheckbox={true}
            onCheckedRowsChange={handleCheckedRowsChange}
          />
        </div>

        {/* pagination */}
        <div className="px-3 py-4 flex justify-between items-center rounded-b-xs">
          <div className="text-xs text-grey-ab-200">
            Showing {rows.length === 0 ? 0 : from} to {to} of {rows.length}{" "}
            Entries
          </div>

          <CustomPagination
            totalItems={rows.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            handlePageChange={handlechangePage}
          />

          <div className="flex gap-4 items-center">
            <p className="text-xs text-grey-ab-300">Items Per Page</p>
            <Select
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              size="small"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                color: "#121212",
                padding: "0px 4px",
                borderRadius: "4px",
              }}
            >
              {[5, 10, 15, 20, 25].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>
      </div>

      {isViewPaySlip && selectedData && (
        <div className="fixed flex justify-center items-center bg-black bg-opacity-50 z-30 inset-0">
          <ViewAgentCreditPaySlip
            onClose={() => setIsViewPaySlip(false)}
            onEdit={() => {
              setIsViewPaySlip(false);
              setIsEditPaySlip(true);
            }}
            initialData={selectedData}
          />
        </div>
      )}

      {isEditPaySlip && selectedData && (
        <div className="fixed flex justify-center items-center bg-black bg-opacity-50 z-30 inset-0">
          <EditAgentCreditPaySlip
            onClose={() => setIsEditPaySlip(false)}
            onSave={() => {}}
            initialData={selectedData}
          />
        </div>
      )}
    </>
  );
};

export default ViewCreditSlips;
