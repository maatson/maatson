import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import ErrorChip from "../../../../components/chips/ErrorChip";
import SuccessChip from "../../../../components/chips/SuccessChip";
import { Link, useParams } from "react-router-dom";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";
import {
  DocumentIcon,
  ExcelIcon,
  EyeOpenIcon,
  PriceTagIcon,
  SearchIcon,
  UserIcon,
} from "../../../../components/icons/Icons";
import { AgentModel } from "../AgentSOAList";
import GroupField from "../../../../components/groupField/GroupField";
import SuccessButton from "../../../../components/buttons/SuccessButton";
import CustomTable from "../../../../components/table/CustomTable";
import CustomPagination from "../../../../components/pagination/CustomPagination";
import PrimaryChip from "../../../../components/chips/PrimaryChip";
import SecondaryChip from "../../../../components/chips/SecondaryChip";
import AddAgentCreditPaySlip from "../../components/dashboard/AddAgentCreditPaySlip";
import { useNotify } from "../../../../hooks/useNotify";

interface RowData {
  id: string | number;
  creditNoteInvoiceNumber: string;
  billOfLadingNumber: string;
  importOrExport: string | React.ReactNode;
  creditAmount: string;
  noteDate: string;
  paymentStatus: string | React.ReactNode;
  action: React.ReactNode;
}

const columns: any[] = [
  {
    id: "creditNoteInvoiceNumber",
    label: "Credit Note Invoice Number",
    minWidth: 220,
  },
  { id: "billOfLadingNumber", label: "Bill of Lading", minWidth: 140 },
  {
    id: "importOrExport",
    label: "Import/Export",
    minWidth: 140,
    align: "center",
  },
  { id: "creditAmount", label: "Credit Amount", minWidth: 140 },
  { id: "noteDate", label: "Note Date", minWidth: 100 },
  {
    id: "paymentStatus",
    label: "Payment Status",
    align: "center",
  },
  { id: "action", label: "Action", minWidth: 120, align: "center" },
];

const ViewCredit: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<RowData[]>([]);
  const [originalRows, setOriginalRows] = useState<RowData[]>([]);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const from = (currentPage - 1) * itemsPerPage + 1;
  const to = Math.min(currentPage * itemsPerPage, rows.length);
  const [formDefaultCreditNumbers, setFormDefaultCreditNumbers] = useState<
    string[]
  >([]);
  const [isAddPaySlip, setIsAddPaySlip] = useState<boolean>(false);
  const [isActiveAll, setIsActiveAll] = useState<boolean>(true);
  const [isActivePaid, setIsActivePaid] = useState<boolean>(false);
  const [isActiveUnpaid, setIsActiveUnpaid] = useState<boolean>(false);
  const { id } = useParams();
  const { showToast } = useNotify();

  const handleCheckedRowsChange = (newCheckedRows: (string | number)[]) => {
    setSelectedRows(newCheckedRows);
  };
  // console.log(selectedRows, "selected Rows");
  const isAnySelectedPaid = selectedRows.some((rowId) => {
    const row = rows.find((item) => item.id === rowId);
    const label =
      row &&
      typeof row.paymentStatus === "object" &&
      (row.paymentStatus as React.ReactElement)?.props?.children?.props?.label;

    return label?.toLowerCase() === "paid";
  });

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

  const handleSaveAddPaySlip = () => {};

  // table
  const createData = (items: any) => {
    const { creditInvoiceId, importOrExport, paymentStatus } = items;

    const importOrExportValue = (
      <>
        {importOrExport.toLowerCase() === "import" ? (
          <SecondaryChip
            label={importOrExport}
            size={"m"}
            variant={"primary"}
          />
        ) : (
          <PrimaryChip label={importOrExport} size={"m"} variant={"primary"} />
        )}
      </>
    );
    const paymentStatusValue = (
      <>
        {paymentStatus.toLowerCase() === "unpaid" ? (
          <ErrorChip label={paymentStatus} size={"m"} variant={"outline"} />
        ) : (
          <SuccessChip label={paymentStatus} size={"m"} variant={"outline"} />
        )}
      </>
    );

    const actions = (
      <div className="flex justify-center">
        <Link
          to={`/accounts/agent-soa-dashboard/credit-details/${id}/${creditInvoiceId}`}
        >
          <PrimaryButton
            label={"View"}
            size={"s"}
            variant={"primary"}
            leftIcon={<EyeOpenIcon size={16} color="#ffffff" />}
          />
        </Link>
      </div>
    );

    const updatedData = {
      id: Number(creditInvoiceId),
      creditNoteInvoiceNumber: items?.creditNoteInvoiceNumber,
      billOfLadingNumber: items?.billOfLadingNumber,
      importOrExport: importOrExportValue,
      creditAmount: items?.creditAmount,
      noteDate: items?.noteDate,
      paymentStatus: paymentStatusValue,
      action: actions,
    };
    return updatedData;
  };

  const data = [
    {
      creditInvoiceId: "1",
      creditNoteInvoiceNumber: "CR20250001",
      billOfLadingNumber: "MMI25060001-A",
      importOrExport: "Import",
      creditAmount: "10000",
      noteDate: "11-03-2025",
      paymentStatus: "Unpaid",
    },
    {
      creditInvoiceId: "2",
      creditNoteInvoiceNumber: "CR20250002",
      billOfLadingNumber: "MMI25060001-A",
      importOrExport: "Export",
      creditAmount: "10000",
      noteDate: "11-03-2025",
      paymentStatus: "Paid",
    },
    {
      creditInvoiceId: "3",
      creditNoteInvoiceNumber: "CR20250003",
      billOfLadingNumber: "MMI25060001-B",
      importOrExport: "Import",
      creditAmount: "10000",
      noteDate: "11-03-2025",
      paymentStatus: "Unpaid",
    },
    {
      creditInvoiceId: "4",
      creditNoteInvoiceNumber: "CR20250004",
      billOfLadingNumber: "MMI25060001-A",
      importOrExport: "Export",
      creditAmount: "10000",
      noteDate: "11-03-2025",
      paymentStatus: "Paid",
    },
    {
      creditInvoiceId: "5",
      creditNoteInvoiceNumber: "CR20250005",
      billOfLadingNumber: "MMI25060001-B",
      importOrExport: "Import",
      creditAmount: "10000",
      noteDate: "11-03-2025",
      paymentStatus: "Unpaid",
    },
    {
      creditInvoiceId: "6",
      creditNoteInvoiceNumber: "CR20250006",
      billOfLadingNumber: "MMI25060001-C",
      importOrExport: "Import",
      creditAmount: "10000",
      noteDate: "11-03-2025",
      paymentStatus: "Paid",
    },
    {
      creditInvoiceId: "7",
      creditNoteInvoiceNumber: "CR20250007",
      billOfLadingNumber: "MMI25060001-C",
      importOrExport: "Export",
      creditAmount: "10000",
      noteDate: "11-03-2025",
      paymentStatus: "Unpaid",
    },
  ];

  const fetchData = useCallback(() => {
    const arr = data.map((items, index) => {
      return createData({ ...items, id: index });
    });
    setOriginalRows(arr);
    setRows(arr);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    let filtered = originalRows;

    if (isActivePaid) {
      filtered = originalRows.filter(
        (row) =>
          typeof row.paymentStatus === "object" &&
          (
            row.paymentStatus as React.ReactElement
          )?.props?.children?.props?.label.toLowerCase() === "paid"
      );
    } else if (isActiveUnpaid) {
      filtered = originalRows.filter(
        (row) =>
          typeof row.paymentStatus === "object" &&
          (
            row.paymentStatus as React.ReactElement
          )?.props?.children?.props?.label.toLowerCase() === "unpaid"
      );
    }

    setRows(filtered);
    setCurrentPage(1); // reset pagination to page 1 when filter changes
  }, [isActiveAll, isActivePaid, isActiveUnpaid, originalRows]);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 ">
          <div className="flex flex-col gap-2 p-3 rounded-sm bg-grey-aw-50 shadow-lg h-full w-[70%] justify-center items-center">
            Chart work will start after backend work
          </div>
          <div className="flex flex-col gap-4 w-[30%]">
            <AgentModel
              label={"Agent Name"}
              value={"Farrel Kurniawan "}
              iconSetStyle={"bg-blue-50"}
              icon={<UserIcon color="#0084E8" />}
            />
            <AgentModel
              label={"Outstanding Receivable"}
              value={"1,50,00,000"}
              iconSetStyle={"bg-success-50"}
              icon={<PriceTagIcon color="#00CC54" />}
            />
            <AgentModel
              label={"Total Received"}
              value={"25,00,000"}
              iconSetStyle={"bg-success-50"}
              icon={<PriceTagIcon color="#00CC54" />}
            />
          </div>
        </div>
        {/* table section */}
        <div className="flex flex-col bg-grey-aw-50 rounded-xs">
          <div className="flex px-4 pt-1 border-b border-b-grey-ab-100">
            <div
              onClick={() => {
                setIsActiveAll(true);
                setIsActivePaid(false);
                setIsActiveUnpaid(false);
              }}
              className={`px-3 py-2 border-b-2 ${
                isActiveAll
                  ? "border-b-primary text-primary"
                  : "border-b-transparent text-grey-ab-300"
              }  text-sm font-bold cursor-pointer transition-all duration-700`}
            >
              ALL
            </div>
            <div
              onClick={() => {
                setIsActiveAll(false);
                setIsActivePaid(true);
                setIsActiveUnpaid(false);
              }}
              className={`px-3 py-2 border-b-2 ${
                isActivePaid
                  ? "border-b-primary text-primary"
                  : "border-b-transparent text-grey-ab-300"
              }  text-sm font-bold cursor-pointer transition-all duration-700`}
            >
              Paid
            </div>
            <div
              onClick={() => {
                setIsActiveAll(false);
                setIsActivePaid(false);
                setIsActiveUnpaid(true);
              }}
              className={`px-3 py-2 border-b-2 ${
                isActiveUnpaid
                  ? "border-b-primary text-primary"
                  : "border-b-transparent text-grey-ab-300"
              }  text-sm font-bold cursor-pointer transition-all duration-700`}
            >
              Unpaid
            </div>
          </div>
          <div className="flex justify-between p-3 border-b border-b-grey-ab-50 items-center ">
            <div className="w-[70%] flex gap-4 items-center">
              <p className="text-lg font-semibold text-grey-ab-900 text-nowrap">
                Agent SOA List
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
            <div className="flex gap-4">
              {!isActivePaid && !isAnySelectedPaid && (
                <div
                  onClick={() => {
                    if (selectedRows.length === 0) {
                      // alert(
                      //   "Please select rows for which you want to add pay slips."
                      // );
                      showToast("error", {
                        heading: "Payslip add failed",
                        message:
                          "Please select unpaid items only to add a payslip",
                      });
                      return;
                    }

                    // const allSelectedUnpaid = selectedRows.every((rowId) => {
                    //   const row = rows.find((item) => item.id === rowId);
                    //   const label =
                    //     row &&
                    //     typeof row.paymentStatus === "object" &&
                    //     (row.paymentStatus as React.ReactElement)?.props
                    //       ?.children?.props?.label;
                    //   return label?.toLowerCase() === "unpaid";
                    // });

                    // if (!allSelectedUnpaid) {
                    //   alert(
                    //     "Only unpaid rows can be used to generate pay slips."
                    //   );
                    //   return;
                    // }

                    // Set selected credit numbers into form
                    setFormDefaultCreditNumbers(
                      selectedRows
                        .map((id) => {
                          const row = rows.find((item) => item.id === id);
                          return row?.creditNoteInvoiceNumber;
                        })
                        .filter(Boolean) as string[]
                    );
                    setIsAddPaySlip(true);
                  }}
                >
                  <PrimaryButton
                    label={"Add Pay Slip"}
                    size={"l"}
                    variant={"primary"}
                    leftIcon={<DocumentIcon color="#FCFCFC" />}
                  />
                </div>
              )}

              <div>
                <SuccessButton
                  label={"Export"}
                  size={"l"}
                  variant={"primary"}
                  rightIcon={<ExcelIcon color="#FCFCFC" />}
                />
              </div>
            </div>
          </div>

          {/* table */}
          <div className="py-1 px-2">
            {/* <CustomTable
            columns={columns}
            rows={rows}
            isCheckbox={true}
            onCheckedRowsChange={handleCheckedRowsChange}
          /> */}
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
      </div>

      {isAddPaySlip && (
        <div className="fixed flex justify-center items-center bg-black bg-opacity-50 z-30 inset-0">
          <AddAgentCreditPaySlip
            onClose={() => setIsAddPaySlip(false)}
            onSave={handleSaveAddPaySlip}
            defaultCreditNoteInvoiceNumbers={formDefaultCreditNumbers}
          />
        </div>
      )}
    </>
  );
};

export default ViewCredit;
