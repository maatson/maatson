import React, { useCallback, useEffect, useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {
  AddIcon,
  SearchIcon,
  ExcelIcon,
  EyeOpenIcon,
  SendIcon,
} from "../../../components/icons/Icons";
import SuccessButton from "../../../components/buttons/SuccessButton";
import GroupField from "../../../components/groupField/GroupField";
import CustomPagination from "../../../components/pagination/CustomPagination";
import CustomTable from "../../../components/table/CustomTable";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Link } from "react-router-dom";

// Define pagination model if needed

interface RowData {
  id: string | number;
  vendorName: string | React.ReactNode;
  mobileNumber: string | React.ReactNode;
  primaryContactName: string | React.ReactNode;
  operationalSince: string | React.ReactNode;
  email: string | React.ReactNode;
  action: React.ReactNode; // If you have any actions like buttons or components
}

const columns: any[] = [
  {
    id: "vendorName",
    label: "Vendor Name",
    minWidth: "180px",
  },
  { id: "mobileNumber", label: "Mobile Number" },
  { id: "operationalSince", label: "Operational Since	" },
  { id: "email", label: "Email" },
  {
    id: "primaryContactName",
    label: "Primary Contact Name",
    minWidth: "180px",
  },
  {
    id: "action",
    label: "Action",
    align: "center",
  },
];
const VendorRegisterList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<RowData[]>([]);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]); // Track selected row ids

  // Handle the change in checked rows
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

  const createData = (items: any) => {
    const {
      id,
      vendorName,
      mobileNumber,
      operationalSince,
      email,
      primaryContactName,
    } = items;
    // Define your actions or any other custom logic you need for each row
    const actions = (
      <div className="px-2 py-1 gap-2 flex justify-center items-center font-semibold">
        <Link
          className="w-6 h-6 rounded flex justify-center items-center bg-blue cursor-pointer"
          to={"/registration-vendor/details"}
        >
          <EyeOpenIcon size={16} color="#fdfdfd" />
        </Link>
        <div className="w-6 h-6 rounded flex justify-center items-center bg-success-600 cursor-pointer">
          <SendIcon size={16} color="#fdfdfd" />
        </div>
      </div>
    );

    // Ensure all columns have a value (or a default) for each row.
    const updatedData = {
      id: id,
      vendorName: vendorName || "nil", // Default value if not available
      operationalSince: operationalSince || "nil", // Default value if not available
      mobileNumber: mobileNumber || "nil", // Default value if not available
      primaryContactName: primaryContactName || "-", // Default value if not available
      email: email || "-", // Default value if not available
      action: actions, // Actions will remain the same as you defined
    };

    return updatedData;
  };

  const data = [
    {
      vendorName: "John Doe",
      mobileNumber: "986454675432",
      operationalSince: "2001",
      email: "Sales@maatson.com",
      primaryContactName: "active",
    },
    {
      vendorName: "",
      mobileNumber: "986454675432",
      operationalSince: "2002",
      email: "Sales@maatson.com",
      primaryContactName: "inactive",
    },
    {
      vendorName: "Pavi ",
      mobileNumber: "986454675432",
      operationalSince: "2003",
      email: "Sales@maatson.com",
      primaryContactName: "active",
    },
    {
      vendorName: "Janani ",
      mobileNumber: "986454675432",
      operationalSince: "2004",
      email: "Sales@maatson.com",
      primaryContactName: "inactive",
    },
  ];
  // Memoize fetchData function with useCallback
  const fetchData = useCallback(() => {
    const arr = data.map((items, index) => {
      return createData({ ...items, id: index }); // Ensure createData returns the transformed data
    });
    setRows(arr); // Set the rows with the updated data
  }, []); // Empty dependency array ensures this function is only created once

  useEffect(() => {
    fetchData(); // Call fetchData when the component mounts
  }, [fetchData]); // Only re-run fetchData if fetchData changes
  return (
    <div className="bg-white rounded">
      <div className="p-3 flex justify-between items-center text-grey-ab-900 ">
        <p className="text-lg font-semibold">Vendor List</p>
        <Link to={"/registration-vendor/add"}>
          <PrimaryButton
            label={"Add New Vendor"}
            size={""}
            variant={""}
            leftIcon={<AddIcon color="#fdfdfd" />}
          />
        </Link>
      </div>
      <div className="p-3 flex justify-between items-center text-grey-ab-900 border-y border-grey-ab-200">
        <div className="flex gap-4 items-center">
          <GroupField
            label={""}
            type={""}
            placeholder={"Search"}
            name={""}
            value={""}
            onChange={() => {}}
            parentStyle="max-w-[320px] w-full min-w-[180px]"
            error={false}
            rightIcon={<SearchIcon />}
            errorMessage={""}
          />
          <GroupField
            label={""}
            type={"select"}
            placeholder={"Transportation Mode"}
            name={""}
            value={""}
            size="s"
            parentStyle="max-w-[220px] w-full min-w-[180px]"
            onChange={() => {}}
            error={false}
            errorMessage={""}
          />
        </div>
        <SuccessButton
          label={"Export"}
          size={"lg"}
          variant={""}
          rightIcon={<ExcelIcon color="#fdfdfd" />}
        />
      </div>
      <div className="px-3 py-2">
        <CustomTable
          columns={columns}
          rows={rows}
          isCheckbox={true}
          onCheckedRowsChange={handleCheckedRowsChange} // Pass the handler here
        />
      </div>

      <div className="px-3 py-4 flex justify-between items-center">
        <div className="text-xs text-grey-ab-200">
          Showing {currentPage * itemsPerPage - itemsPerPage + 1} to{" "}
          {currentPage * itemsPerPage} of {rows.length} Entries
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
  );
};

export default VendorRegisterList;
