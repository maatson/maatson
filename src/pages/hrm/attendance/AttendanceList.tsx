import React, { useCallback, useEffect, useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {
  AddIcon,
  SearchIcon,
  ExcelIcon,
} from "../../../components/icons/Icons";
import SuccessButton from "../../../components/buttons/SuccessButton";
import GroupField from "../../../components/groupField/GroupField";
import CustomPagination from "../../../components/pagination/CustomPagination";

import CustomTable from "../../../components/table/CustomTable";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

// Define pagination model if needed

interface RowData {
  id: string | number;
  employeeId: string;
  employeeName: string;
  attendanceStatus: string;
  designation: string;
  branchOffice: string;
  department: string;
  date: string;
  checkIn: string;
  checkOut: string;
  workingHours: string;
  action: React.ReactNode; // If you have any actions like buttons or components
}

const columns: any[] = [
  { id: "employeeId", label: "Booking Id" },
  { id: "employeeName", label: "Company Name" },
  { id: "attendanceStatus", label: "Booking Date" },
  {
    id: "designation",
    label: "Container Quantity",
  },
  { id: "branchOffice", label: "payment Method" },
  { id: "department", label: "Payment Status" },
  { id: "date", label: "Order Status" },
  { id: "checkIn", label: "Order Status" },
  { id: "checkOut", label: "Order Status" },

  {
    id: "workingHours",
    label: "Amount",
    align: "center",
  },
  {
    id: "action",
    label: "Action",
    align: "center",
  },
];

const AttendanceList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<RowData[]>([]);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);

  const handleItemsPerPageChange = (event: SelectChangeEvent<number>) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };
  const handlechangePage = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
    console.log(currentPage);
  };

  const createData = (items: any) => {
    // Define your actions or any other custom logic you need for each row
    const actions = (
      <span className="h-20 flex justify-center items-center">icon</span>
    );

    // Ensure all columns have a value (or a default) for each row.
    const updatedData = {
      id: items.id || "",
      employeeId: items?.employeeId || "N/A", // Default value if not available
      employeeName: items?.employeeName || "No Name", // Default value if not available
      attendanceStatus: items?.attendanceStatus || "Unknown", // Default value if not available
      designation: items?.designation || "Not Assigned", // Default value if not available
      branchOffice: items?.branchOffice || "Not Specified", // Default value if not available
      department: items?.department || "Unknown", // Default value if not available
      date: items?.date || "Unknown", // Default value if not available
      checkIn: items?.checkIn || "Not Checked In", // Default value if not available
      checkOut: items?.checkOut || "Not Checked Out", // Default value if not available
      workingHours: items?.workingHours || "0", // Default value if not available
      action: actions, // Actions will remain the same as you defined
    };

    return updatedData;
  };

  const data = [
    {
      employeeId: 1,
      employeeName: "John Doe",
      attendanceStatus: "Present",
      designation: "Manager",
      department: "Sales",
      branchOffice: "New York",
      date: "2025-02-01",
      checkIn: "9:00 AM",
      checkOut: "6:00 PM",
      workingHours: "8",
    },
    {
      employeeId: 2,
      employeeName: "Jane Smith",
      attendanceStatus: "Absent",
      designation: "Developer",
      department: "Tech",
      branchOffice: "San Francisco",
      date: "2025-02-01",
      checkIn: "9:15 AM",
      checkOut: "6:15 PM",
      workingHours: "8",
    },
  ];
  // Memoize fetchData function with useCallback
  const fetchData = useCallback(() => {
    const arr = data.map((items, index) => {
      return createData({ ...items, id: index }); // Ensure createData returns the transformed data
    });
    console.log(arr, "array");
    setRows(arr); // Set the rows with the updated data
  }, []); // Empty dependency array ensures this function is only created once

  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]); // Track selected row ids

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      // Select all rows
      setSelectedRows(rows.map((row) => row?.id));
    } else {
      // Deselect all rows
      setSelectedRows([]);
    }
  };

  const handleRowSelect = (
    event: React.ChangeEvent<HTMLInputElement>,
    rowId: any
  ) => {
    if (event.target.checked) {
      // Add rowId to selectedRows
      setSelectedRows((prev) => [...prev, rowId]);
    } else {
      // Remove rowId from selectedRows
      setSelectedRows((prev) => prev.filter((id) => id !== rowId));
    }
  };

  useEffect(() => {
    fetchData(); // Call fetchData when the component mounts
  }, [fetchData]); // Only re-run fetchData if fetchData changes

  return (
    <>
      <div className="p-3 flex justify-between items-center text-grey-ab-900 ">
        <p className="text-lg font-semibold">Employee Attendance List</p>
        <PrimaryButton
          label={"Add Attendance"}
          size={""}
          variant={""}
          leftIcon={<AddIcon color="#fdfdfd" />}
        />
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
            placeholder={"Branch Office"}
            name={""}
            value={""}
            size="s"
            parentStyle="max-w-[180px] w-full min-w-[180px]"
            onChange={() => {}}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={""}
            type={"date"}
            placeholder={"today"}
            name={""}
            size="s"
            value={""}
            parentStyle="max-w-[180px] w-full min-w-[180px]"
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
          selectedRows={selectedRows} // Pass selected rows to the table
          onSelectAll={handleSelectAll}
          onRowSelect={handleRowSelect}
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
    </>
  );
};

export default AttendanceList;
