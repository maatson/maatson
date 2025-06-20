import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import CustomPagination from "../../../components/pagination/CustomPagination";
import CustomTable from "../../../components/table/CustomTable";
import {
  ExcelIcon,
  EyeOpenIcon,
  SearchIcon,
} from "../../../components/icons/Icons";
import SuccessButton from "../../../components/buttons/SuccessButton";
import GroupField from "../../../components/groupField/GroupField";
import { Link } from "react-router-dom";
import SecondaryChip from "../../../components/chips/SecondaryChip";
import SuccessChip from "../../../components/chips/SuccessChip";
import ErrorChip from "../../../components/chips/ErrorChip";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

interface RowData {
  id: string | number;
  bookingID: string;
  billOfLadingNumber: string;
  companyName: string;
  proformaStatus: string | React.ReactNode;
  paymentStatus: string | React.ReactNode;
  tdsReceivable: string;
  invoiceStatus: React.ReactNode;
  action: React.ReactNode;
}

const columns: any[] = [
  { id: "bookingID", label: "Booking ID", minWidth: 100 },
  { id: "billOfLadingNumber", label: "Bill of Lading Number", minWidth: 180 },
  { id: "companyName", label: "Company Name" },
  { id: "proformaStatus", label: "Proforma Status", align: "center" },
  {
    id: "paymentStatus",
    label: "Payment Status",
    align: "center",
    minWidth: 200,
  },
  { id: "tdsReceivable", label: "TDS Receivable", minWidth: 120 },
  {
    id: "invoiceStatus",
    label: "Invoice Status",
    align: "center",
    minWidth: 160,
  },
  { id: "action", label: "Action", minWidth: 120, align: "center" },
];

const InvoiceList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<RowData[]>([]);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]); // Track selected row ids

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
    const { id, proformaStatus, paymentStatus, invoiceStatus } = items;

    const proformaStatusValue = (
      <>
        {proformaStatus.toLowerCase() === "pending" && (
          <SecondaryChip
            label={proformaStatus}
            size={"m"}
            variant={"outline"}
          />
        )}
        {proformaStatus.toLowerCase() === "completed" && (
          <SuccessChip label={proformaStatus} size={"m"} variant={"outline"} />
        )}
      </>
    );
    const paymentStatusValue = (
      <>
        {paymentStatus.toLowerCase() === "unpaid" && (
          <ErrorChip label={paymentStatus} size={"l"} variant={"mix"} />
        )}
        {paymentStatus.toLowerCase() === "paid" && (
          <SuccessChip label={paymentStatus} size={"l"} variant={"mix"} />
        )}
      </>
    );
    const invoiceStatusValue = (
      <>
        {invoiceStatus.toLowerCase() === "pending" && (
          <SecondaryChip label={invoiceStatus} size={"m"} variant={"fill"} />
        )}
        {invoiceStatus.toLowerCase() === "completed" && (
          <SuccessChip label={invoiceStatus} size={"m"} variant={"fill"} />
        )}
      </>
    );
    const actions = (
      <>
        <Link to={`/accounts/invoice-import/view-invoice/${id}/proforma`}>
          <PrimaryButton
            label={"View"}
            size={"s"}
            variant={"primary"}
            leftIcon={<EyeOpenIcon size={16} color="#ffffff" />}
          />
        </Link>
      </>
    );

    const updatedData = {
      id: id,
      bookingID: items?.bookingID,
      billOfLadingNumber: items?.billOfLadingNumber,
      companyName: items?.companyName,
      proformaStatus: proformaStatusValue,
      paymentStatus: paymentStatusValue,
      tdsReceivable: items?.tdsReceivable,
      invoiceStatus: invoiceStatusValue,
      action: <div className="flex justify-center">{actions}</div>,
    };
    return updatedData;
  };

  const data = [
    {
      bookingID: "0000001",
      billOfLadingNumber: "MSCU1234569-A",
      companyName: "Farrel Kurniawan",
      proformaStatus: "Pending",
      paymentStatus: "Unpaid",
      tdsReceivable: "7638.90",
      invoiceStatus: "Pending",
    },
    {
      bookingID: "0000001",
      billOfLadingNumber: "MSCU1234569-B",
      companyName: "Dimas Kamal",
      proformaStatus: "Completed",
      paymentStatus: "Paid",
      tdsReceivable: "300.00",
      invoiceStatus: "Completed",
    },
    {
      bookingID: "0000002",
      billOfLadingNumber: "MSCU1234568",
      companyName: "Farrel Kurniawan",
      proformaStatus: "Pending",
      paymentStatus: "Unpaid",
      tdsReceivable: "373930.00",
      invoiceStatus: "Pending",
    },
    {
      bookingID: "0000003",
      billOfLadingNumber: "MSCU1234568",
      companyName: "Farrel Kurniawan",
      proformaStatus: "Completed",
      paymentStatus: "Paid",
      tdsReceivable: "37398.00",
      invoiceStatus: "Completed",
    },
  ];

  // Memoize fetchData function with useCallback
  const fetchData = useCallback(() => {
    const arr = data.map((items, index) => {
      return createData({ ...items, id: index }); // Ensure createData returns the transformed data
    });
    setRows(arr);
  }, []); // Empty dependency array ensures this function is only created once

  useEffect(() => {
    fetchData(); // Call fetchData when the component mounts
  }, [fetchData]); // Only re-run fetchData if fetchData changes

  return (
    <>
      <div className="flex flex-col bg-grey-aw-50 rounded-xs">
        <div className="flex justify-between p-3 border-b border-b-grey-ab-50 items-center ">
          <div className="w-[70%] flex gap-4 items-center">
            <p className="text-lg font-semibold text-grey-ab-900 text-nowrap">
              Invoice List
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
            rows={rows}
            isCheckbox={true}
            onCheckedRowsChange={handleCheckedRowsChange}
          />
        </div>

        {/* pagination */}
        <div className="px-3 py-4 flex justify-between items-center rounded-b-xs">
          <div className="text-xs text-grey-ab-200">
            Showing {currentPage * itemsPerPage - itemsPerPage + 1} to{" "}
            {currentPage *
              (itemsPerPage > rows.length ? rows.length : itemsPerPage)}{" "}
            of {rows.length} Entries
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
    </>
  );
};

export default InvoiceList;
