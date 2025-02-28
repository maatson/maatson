import React, { useCallback, useEffect, useState } from "react";
import AttendanceProfileCard from "./cards/AttendanceProfileCard";
import {
  ClockIcon,
  ExcelIcon,
  GraphUpIcon,
} from "../../../components/icons/Icons";
import SuccessButton from "../../../components/buttons/SuccessButton";
import MenuItem from "@mui/material/MenuItem";
import CustomPagination from "../../../components/pagination/CustomPagination";
import CustomTable from "../../../components/table/CustomTable";
import { Select, SelectChangeEvent } from "@mui/material";

import SuccessChip from "../../../components/chips/SuccessChip";
import ErrorChip from "../../../components/chips/ErrorChip";
import TertiaryChip from "../../../components/chips/TertiaryChip";
import WarningChip from "../../../components/chips/WarningChip";
import BlueChip from "../../../components/chips/BlueChip";
import LeaveCard from "../../../components/leaveCard/LeaveCard";
import RejectLeaveForm from "../leaveForm/RejectLeaveForm";

interface AttendanceData {
  id: string | number;
  date: string | React.ReactNode;
  attendanceStatus: string | React.ReactNode;
  checkIn: string | React.ReactNode;
  checkOut: string;
  workingHours: string | React.ReactNode;
}

const attendanceColumns: any[] = [
  { id: "date", label: "Date" },
  { id: "attendanceStatus", label: "Attendance Status" },

  { id: "checkIn", label: "Check In" },
  { id: "checkOut", label: "Check Out" },

  {
    id: "workingHours",
    label: "Working Hours",
    align: "center",
  },
];

const AttendanceDetail: React.FC = () => {
  const [attendanceRows, setAttendanceRows] = useState<AttendanceData[]>([]);
  const [AttendanceItemsPerPage, setAttendanceItemsPerPage] = React.useState(5);
  const [currentAttendancePage, setCurrentAttendancePage] = useState<number>(1);
  const [selectedAttendanceRows, setSelectedAttendanceRows] = useState<
    (string | number)[]
  >([]); // Track selected row ids

  const [isRejectLeaveForm, setRejectLeaveForm] = useState<boolean>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);
  // const [row,setRow]=useState([])
  const rows = [1, 2, 3];

  const handleAttendanceCheckedRowsChange = (
    newCheckedRows: (string | number)[]
  ) => {
    setSelectedAttendanceRows(newCheckedRows);
  };
  console.log(selectedAttendanceRows, "selected Rows");

  const handleAttendanceItemsPerPageChange = useCallback(
    (event: SelectChangeEvent<number>) => {
      setAttendanceItemsPerPage(Number(event.target.value));
      setCurrentAttendancePage(1);
    },
    []
  );

  const handleItemsPerPageChange = useCallback(
    (event: SelectChangeEvent<number>) => {
      setItemsPerPage(Number(event.target.value));
      setCurrentPage(1);
    },
    []
  );

  const handlechangeAttendancePage = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentAttendancePage(page);
  };

  const handlechangePage = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const createData = (items: any) => {
    const { id, attendanceStatus, date, checkIn, checkOut, workingHours } =
      items;

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
      date: date || "-", // Default value if not available
      attendanceStatus: attendanceStatusText, // Default value if not available
      checkIn: checkIn || "-", // Default value if not available
      checkOut: checkOut || "-", // Default value if not available
      workingHours: workingHoursValue, // Default value if not available
    };

    return updatedData;
  };

  const data = [
    {
      date: "2025-02-01",
      attendanceStatus: "present",
      checkIn: "9:00 AM",
      checkOut: "6:00 PM",
      workingHours: "09.00",
    },
    {
      date: "2025-02-01",
      attendanceStatus: "absent",
      checkIn: "9:15 AM",
      checkOut: "6:15 PM",
      workingHours: "07.50",
    },
    {
      date: "2025-02-01",
      attendanceStatus: "leave",
      checkIn: "",
      checkOut: "",
      workingHours: "07.50",
    },
    {
      date: "",
      attendanceStatus: "vacation",
      checkIn: "9:15 AM",
      checkOut: "6:15 PM",
      workingHours: "08.50",
    },
  ];
  // Memoize fetchData function with useCallback
  const fetchAttendanceData = useCallback(() => {
    const arr = data.map((items, index) => {
      return createData({ ...items, id: index }); // Ensure createData returns the transformed data
    });
    setAttendanceRows(arr); // Set the rows with the updated data
  }, []); // Empty dependency array ensures this function is only created once

  useEffect(() => {
    fetchAttendanceData(); // Call fetchData when the component mounts
  }, [fetchAttendanceData]); // Only re-run fetchData if fetchData changes

  return (
    <>
      {isRejectLeaveForm && (
        <RejectLeaveForm cancel={() => setRejectLeaveForm(false)} />
      )}
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <AttendanceProfileCard />
          <div className="flex-grow  flex flex-col gap-4">
            <div className="flex justify-between gap-1">
              <HourBox />
              <HourBox />
              <HourBox />
              <HourBox />
              <HourBox />
            </div>
            <div className="bg-grey-aw-50 flex-grow rounded items-center justify-center flex">
              <p> Charts works will done Here </p>
            </div>
          </div>
        </div>
        <div className="bg-grey-aw-50 h-full rounded">
          <div className="p-3 flex justify-between items-center text-grey-ab-900 ">
            <p className="text-lg font-semibold">Attendance List</p>
            <SuccessButton
              label={"Export"}
              size={"lg"}
              variant={""}
              rightIcon={<ExcelIcon color="#fdfdfd" />}
            />
          </div>
          <div className="px-3 py-2">
            <CustomTable
              columns={attendanceColumns}
              rows={attendanceRows}
              isCheckbox={true}
              onCheckedRowsChange={handleAttendanceCheckedRowsChange} // Pass the handler here
            />
          </div>

          <div className="px-3 py-4 flex justify-between items-center">
            <div className="text-xs text-grey-ab-200">
              Showing{" "}
              {currentAttendancePage * AttendanceItemsPerPage -
                AttendanceItemsPerPage +
                1}{" "}
              to {currentAttendancePage * AttendanceItemsPerPage} of{" "}
              {attendanceRows.length} Entries
            </div>

            <CustomPagination
              totalItems={attendanceRows.length}
              itemsPerPage={AttendanceItemsPerPage}
              currentPage={currentAttendancePage}
              handlePageChange={handlechangeAttendancePage}
            />

            <div className="flex gap-4 items-center">
              <p className="text-xs text-grey-ab-300">Items Per Page</p>
              <Select
                value={AttendanceItemsPerPage}
                onChange={handleAttendanceItemsPerPageChange}
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
        <div className="bg-grey-aw-50 min-h-screen rounded">
          <div className="p-3 flex justify-between items-center text-grey-ab-900 ">
            <p className="text-lg font-semibold">Leave History</p>
            <SuccessButton
              label={"Export"}
              size={"lg"}
              variant={""}
              rightIcon={<ExcelIcon color="#fdfdfd" />}
            />
          </div>
          <div className="flex flex-col gap-3 px-4 py-3">
            {rows.length > 0 &&
              rows.map((item, index) => (
                <div key={index}>
                  <LeaveCard
                    rejectClick={() => setRejectLeaveForm(true)}
                    approveClick={function (): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                </div>
              ))}
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
      </div>
    </>
  );
};

export default AttendanceDetail;

// hour box

const HourBox: React.FC = () => {
  return (
    <div className="bg-white rounded-md p-3 flex flex-col gap-2 text-grey-ab-300 text-xs w-full ">
      <div className="flex gap-2 items-start ">
        <div className="flex flex-col gap-1 flex-grow">
          <p>Total Hours Today</p>
          <h6 className="text-grey-ab-800 font-semibold h6">8.30hrs</h6>
        </div>
        <div className="p-1 bg-pink-50 rounded flex items-center justify-center">
          <ClockIcon size={16} color="#E800B1" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p>last month</p>
        <div className="flex gap-1 bg-success-50 text-success-700 items-center px-2 py-1 rounded text-3xs font-semibold">
          <span> 10%</span>
          <GraphUpIcon size={12} color="#009F41" />
        </div>
      </div>
    </div>
  );
};
