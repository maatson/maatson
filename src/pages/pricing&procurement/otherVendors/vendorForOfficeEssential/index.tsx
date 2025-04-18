import React, { useCallback, useEffect, useState } from "react";
import SuccessButton from "../../../../components/buttons/SuccessButton";
import {
  ExcelIcon,
  InvoiceIcon,
  NotesIcon,
  SearchIcon,
} from "../../../../components/icons/Icons";
import GroupField from "../../../../components/groupField/GroupField";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import CustomPagination from "../../../../components/pagination/CustomPagination";
import CustomTable from "../../../../components/table/CustomTable";
import SecondaryChip from "../../../../components/chips/SecondaryChip";
import GreyButton from "../../../../components/buttons/GreyButton";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";
import BlueChip from "../../../../components/chips/BlueChip";

interface RowData {
  id: string | number;
  invoiceNumber: string;
  vendorName: string;
  invoicedDate: string;
  totalAmount: string | React.ReactNode;
  productOrService: React.ReactNode;
  action: React.ReactNode;
}

const columns: any[] = [
  { id: "invoiceNumber", label: "Invoice Number" },
  { id: "vendorName", label: "Vendor Name", minWidth: 160 },
  { id: "invoicedDate", label: "Invoiced Date", minWidth: 120 },
  { id: "totalAmount", label: "Total Amount", minWidth: 120 },
  {
    id: "productOrService",
    label: "Porduct or Service",
    align: "center",
  },
  { id: "action", label: "Action", minWidth: 120, align: "center" },
];

const VendorForOfficeList: React.FC = () => {
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
    const { id, productOrService } = items;

    const productOrServiceValue = (
      <>
        {productOrService.toLowerCase() === "service" ? (
          <BlueChip label={productOrService} size={"m"} variant={"fill"} />
        ) : (
          <SecondaryChip label={productOrService} size={"m"} variant={"fill"} />
        )}
      </>
    );

    const actions = (
      <Link
        to={`/other-vendors/vendor-for-office/view/${id + 1}`}
        className="flex justify-center"
      >
        <GreyButton
          label={"View Bill"}
          size={"s"}
          variant={"primary"}
          rightIcon={<NotesIcon size={16} />}
        />
      </Link>
    );

    const updatedData = {
      id: id,
      invoiceNumber: items?.invoiceNumber,
      vendorName: items?.vendorName,
      invoicedDate: items?.invoicedDate,
      totalAmount: items?.totalAmount,
      productOrService: productOrServiceValue,
      action: actions,
    };
    return updatedData;
  };

  const data = [
    {
      invoiceNumber: "INV618987",
      vendorName: "Greenfield Supplies",
      invoicedDate: "5/27/15",
      totalAmount: "$ 2,000.00",
      productOrService: "Service",
    },
    {
      invoiceNumber: "INV618987",
      vendorName: "EcoCraft Industries",
      invoicedDate: "5/27/15",
      totalAmount: "$ 15,000.00",
      productOrService: "Product",
    },
    {
      invoiceNumber: "INV618987",
      vendorName: "Global Trade Solutions",
      invoicedDate: "5/27/15",
      totalAmount: "$ 2,000.00",
      productOrService: "Service",
    },
    {
      invoiceNumber: "INV618987",
      vendorName: "Vertex Suppliers",
      invoicedDate: "5/27/15",
      totalAmount: "$ 2,000.00",
      productOrService: "Product",
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
      <div className="flex justify-between p-3 border-b border-b-grey-ab-50 items-center">
        <div className="w-[60%] flex gap-4 items-center">
          <p className="text-lg font-semibold text-grey-ab-900 text-nowrap">
            Vendors Bill List (Office Essentials)
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
        <div className="flex items-center gap-4">
          <Link to={"/other-vendors/vendor-for-office/create"}>
            <PrimaryButton
              label={"Create Vendor Bill"}
              size={"l"}
              variant={"primary"}
              rightIcon={<InvoiceIcon color="#FCFCFC" />}
            />
          </Link>
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
    </>
  );
};

export default VendorForOfficeList;
