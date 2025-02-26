import React, { useCallback, useEffect, useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {
  AddIcon,
  SearchIcon,
  ExcelIcon,
  EditIcon,
  AttendenceIcon,
} from "../../../components/icons/Icons";
import SuccessButton from "../../../components/buttons/SuccessButton";
import GroupField from "../../../components/groupField/GroupField";
import CustomPagination from "../../../components/pagination/CustomPagination";
import CustomTable from "../../../components/table/CustomTable";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import DefaultDp from "/images/defaultProfilePic.png";
import PrimaryChip from "../../../components/chips/PrimaryChip";
import SuccessChip from "../../../components/chips/SuccessChip";
import ErrorChip from "../../../components/chips/ErrorChip";
import TertiaryChip from "../../../components/chips/TertiaryChip";
import WarningChip from "../../../components/chips/WarningChip";
import BlueChip from "../../../components/chips/BlueChip";
import GreyButton from "../../../components/buttons/GreyButton";

// Define pagination model if needed

interface RowData {
  id: string | number;
  employeeId: string | React.ReactNode;
  employeeName: string | React.ReactNode;
  attendanceStatus: string | React.ReactNode;
  designation: string | React.ReactNode;
  branchOffice: string | React.ReactNode;
  department: string | React.ReactNode;
  date: string | React.ReactNode;
  checkIn: string | React.ReactNode;
  checkOut: string;
  workingHours: string | React.ReactNode;
  action: React.ReactNode; // If you have any actions like buttons or components
}

const columns: any[] = [
  { id: "employeeId", label: "Employee ID" },
  {
    id: "employeeName",
    label: "Employee Name",
    minWidth: "180px",
  },
  { id: "attendanceStatus", label: "Attendance Status" },
  { id: "department", label: "Department" },
  {
    id: "designation",
    label: "Designations",
  },
  { id: "branchOffice", label: "Branch office", align: "center" },
  { id: "date", label: "Date" },
  { id: "checkIn", label: "Check In" },
  { id: "checkOut", label: "Check Out" },

  {
    id: "workingHours",
    label: "Working Hours",
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
      attendanceStatus,
      employeeName,
      employeeImage,
      designation,
      department,
      branchOffice,
      date,
      checkIn,
      checkOut,
      workingHours,
    } = items;
    // Define your actions or any other custom logic you need for each row
    const actions = (
      <div className="px-2 py-1 gap-2 flex justify-center items-center font-semibold">
        <GreyButton
          label={"CheckOut"}
          size={"s"}
          variant={""}
          rightIcon={<EditIcon size={16} />}
        />
        <div className="p-1 rounded bg-grey-ab ">
          <AttendenceIcon color="#fdfdfd" size={16} />
        </div>
      </div>
    );

    const employeeNameValue = (
      <div className="px-2 py-1 flex items-center gap-2 text-sm">
        <div className="min-h-10 min-w-10">
          <img
            src={employeeImage || DefaultDp}
            alt="employeeImage"
            className="object-fill  h-10 w-10"
          />
        </div>

        <p className="w-full"> {employeeName || "Nil"}</p>
      </div>
    );

    let attendanceStatusText: string | React.ReactNode = "Unknown"; // Default status
    if (attendanceStatus) {
      switch (attendanceStatus) {
        case "present":
          attendanceStatusText = (
            <div className="px-2 py-1 flex items-center font-semibold text-sm justify-center">
              <SuccessChip label={"Present"} size={"l"} variant={"fill"} />
            </div>
          );
          break;
        case "absent":
          attendanceStatusText = (
            <div className="px-2 py-1 flex items-center font-semibold text-sm justify-center">
              <ErrorChip label={"Absent"} size={"l"} variant={"fill"} />
            </div>
          );
          break;
        case "vacation":
          attendanceStatusText = (
            <div className="px-2 py-1 flex items-center font-semibold text-sm justify-center">
              <TertiaryChip label={"Vacation"} size={"l"} variant={"fill"} />
            </div>
          );
          break;
        case "leave":
          attendanceStatusText = (
            <div className="px-2 py-1 flex items-center font-semibold text-sm justify-center">
              <WarningChip label={"Leave"} size={"l"} variant={"fill"} />
            </div>
          );
          break;
        // Add more cases as needed
        default:
          attendanceStatusText = "Unknown";
          break;
      }
    }

    const branchOfficeValue = branchOffice ? (
      <div className="px-2 py-1 flex items-center font-semibold text-sm justify-center">
        <PrimaryChip label={branchOffice || ""} size={"m"} variant={"mix"} />
      </div>
    ) : (
      "-"
    );

    const workingHoursValue = workingHours ? (
      <div className="px-2 py-1 flex items-center font-semibold text-sm justify-center">
        {Number(workingHours) >= 8.3 ? (
          <BlueChip
            label={workingHours + " " + "hours" || ""}
            size={"m"}
            variant={"fill"}
          />
        ) : (
          <WarningChip
            label={workingHours + " " + "hours" || ""}
            size={"m"}
            variant={"fill"}
          />
        )}
      </div>
    ) : (
      "nil"
    );

    // Ensure all columns have a value (or a default) for each row.
    const updatedData = {
      id: id,
      employeeId: items?.employeeId || "N/A", // Default value if not available
      employeeName: employeeNameValue, // Default value if not available
      attendanceStatus: attendanceStatusText, // Default value if not available
      designation: designation || "Not Assigned", // Default value if not available
      department: department || "Unknown", // Default value if not available
      branchOffice: branchOfficeValue, // Default value if not available
      date: date || "-", // Default value if not available
      checkIn: checkIn || "-", // Default value if not available
      checkOut: checkOut || "-", // Default value if not available
      workingHours: workingHoursValue, // Default value if not available
      action: actions, // Actions will remain the same as you defined
    };

    return updatedData;
  };

  const data = [
    {
      employeeId: "Emp001",
      employeeName: "John Doe",
      attendanceStatus: "present",
      designation: "Manager",
      department: "Sales",
      branchOffice: "New York",
      date: "2025-02-01",
      checkIn: "9:00 AM",
      checkOut: "6:00 PM",
      workingHours: "09.00",
    },
    {
      employeeId: "Emp002",
      employeeName: "",
      attendanceStatus: "absent",
      designation: "Developer",
      department: "Tech",
      branchOffice: "San Francisco",
      date: "2025-02-01",
      checkIn: "9:15 AM",
      checkOut: "6:15 PM",
      workingHours: "07.50",
    },
    {
      employeeId: "Emp003",
      employeeName: "Pavi ",
      attendanceStatus: "leave",
      designation: "senior Developer",
      department: "Tech",
      branchOffice: "San Francisco",
      date: "2025-02-01",
      checkIn: "",
      checkOut: "",
      workingHours: "07.50",
    },
    {
      employeeId: "Emp004",
      employeeName: "Janani ",
      attendanceStatus: "vacation",
      designation: "junior Developer",
      department: "Tech",
      branchOffice: "San Francisco",
      date: "",
      checkIn: "9:15 AM",
      checkOut: "6:15 PM",
      workingHours: "08.50",
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
    </>
  );
};

export default AttendanceList;
