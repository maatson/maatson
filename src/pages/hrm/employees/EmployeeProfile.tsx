import React, { useCallback, useEffect, useState } from "react";
import DefaultDp from "/images/defaultProfilePic.png";
import sampleDp from "/images/sample/employee.png";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {
  AddIcon,
  DeleteIcon,
  DocumentIcon,
  DownloadIcon,
  EditIcon,
  EmailIcon,
  ExcelIcon,
  EyeOpenIcon,
  MessageIcon,
} from "../../../components/icons/Icons";
import employeeProfile from "/images/sample/employeeProfile.png";
import PinkChip from "../../../components/chips/PinkChip";
import PrimaryChip from "../../../components/chips/PrimaryChip";
import GreyButton from "../../../components/buttons/GreyButton";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import SuccessChip from "../../../components/chips/SuccessChip";
import CustomTable from "../../../components/table/CustomTable";
import SuccessButton from "../../../components/buttons/SuccessButton";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import CustomPagination from "../../../components/pagination/CustomPagination";
import BlueChip from "../../../components/chips/BlueChip";
import ErrorChip from "../../../components/chips/ErrorChip";
import TertiaryChip from "../../../components/chips/TertiaryChip";
import WarningChip from "../../../components/chips/WarningChip";
import BlackButton from "../../../components/buttons/BlackButton";
import BlackChip from "../../../components/chips/BlackChip";
import ErrorButton from "../../../components/buttons/ErrorButton";
import ApplyLeaveForm from "./ApplyLeaveForm";

interface EmployeeDocumentRowData {
  id: string | number;
  documentName: string;
  document: React.ReactNode;
  action: React.ReactNode;
}
interface RowData {
  id: string | number;
  attendanceStatus: string | React.ReactNode;
  date: string | React.ReactNode;
  checkIn: string | React.ReactNode;
  checkOut: string | React.ReactNode;
  workingHours: string | React.ReactNode;
}

const employeeDocumentColumns: any[] = [
  { id: "documentName", label: "Document Name" },
  { id: "document", label: "Document" },
  { id: "action", label: "Action", align: "center", minWidth: "100px" },
];
const columns: any[] = [
  { id: "date", label: "Date", align: "center" },
  { id: "attendanceStatus", label: "Attendance Status", align: "center" },
  { id: "checkIn", label: "Check In", align: "center" },
  { id: "checkOut", label: "Check Out", align: "center" },
  {
    id: "workingHours",
    label: "Working Hours",
    align: "center",
  },
];

const EmployeeProfile: React.FC = () => {
  // For employee document table
  const [employeeDocumentRows, setEmployeeDocumentRows] = useState<
    EmployeeDocumentRowData[]
  >([]);
  const [employeeDocumentSelectedRows, setEmployeeDocumentSelectedRows] =
    useState<(string | number)[]>([]); // Track selected row ids
  // Handle the change in checked rows
  const handleEmployeeDocumentCheckedRowsChange = (
    newCheckedRows: (string | number)[]
  ) => {
    setEmployeeDocumentSelectedRows(newCheckedRows);
  };
  console.log(employeeDocumentSelectedRows, "selected Rows");

  const createEmployeeDocumentData = (items: any) => {
    const { id, fileName } = items;
    const document = (
      <div className="flex gap-3 py-1 items-center justify-start">
        <DocumentIcon color="#2C398F" />
        <div className="text-grey-ab-800">{fileName}.pdf</div>
      </div>
    );
    const actions = (
      <div className="flex gap-[10px] py-1 px-2 justify-center items-center">
        <div className="bg-error-50 p-1 rounded-xs cursor-pointer">
          <DeleteIcon size={16} color="#810001" />
        </div>
        <div className="bg-secondary-50 p-1 rounded-xs cursor-pointer">
          <EyeOpenIcon size={16} color="#5F440C" />
        </div>
        <div className="bg-success-50 p-1 rounded-xs cursor-pointer">
          <DownloadIcon size={16} color="#009F41" />
        </div>
      </div>
    );
    const updatedData = {
      id: id,
      documentName: items?.documentName,
      document: document,
      action: actions,
    };
    return updatedData;
  };
  const employeeDocumentData = [
    {
      documentName: "Pan card",
      fileName: "Pan",
    },
    {
      documentName: "Pan card",
      fileName: "Pan",
    },
  ];
  // Memoize fetchData function with useCallback
  const fetchEmployeeDocumentData = useCallback(() => {
    const arr = employeeDocumentData.map((items, index) => {
      return createEmployeeDocumentData({ ...items, id: index }); // Ensure createData returns the transformed data
    });
    setEmployeeDocumentRows(arr); // Set the rows with the updated data
  }, []); // Empty dependency array ensures this function is only created once
  useEffect(() => {
    fetchEmployeeDocumentData(); // Call fetchData when the component mounts
  }, [fetchEmployeeDocumentData]); // Only re-run fetchData if fetchData changes

  // for attedence list table
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
      attendanceStatus: attendanceStatusText, // Default value if not available
      date: date || "-", // Default value if not available
      checkIn: checkIn || "-", // Default value if not available
      checkOut: checkOut || "-", // Default value if not available
      workingHours: workingHoursValue, // Default value if not available
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

  const leaveCardRows = [1, 2, 3];

  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <>
      <div className="flex justify-end py-4 items-center">
        <div>
          <PrimaryButton
            label={"Edit Profile"}
            size={"l"}
            variant={"primary"}
            leftIcon={<EditIcon color="#FDFDFD" />}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {/* Profile */}
        <div className="flex gap-6">
          {/* profile-left */}
          <div className="max-w-[380px] w-full bg-grey-aw-50 rounded-xs p-6 flex flex-col gap-3">
            <div className="max-w-[332px] max-h-[332px] rounded-sm">
              <img
                src={employeeProfile}
                alt=""
                className="rounded-sm w-full h-full"
              />
            </div>

            <div className="mx-auto flex flex-col gap-2 ">
              <div className="flex flex-col gap-1 items-center justify-center">
                <p className="text-lg  font-semibold text-grey-ab text-center">
                  @andrew_202
                </p>
                <p className="text-sm text-grey-ab-400">Andrew Symons</p>
              </div>
              <div className="flex justify-center  gap-1">
                <PinkChip
                  label={"Customer Service"}
                  size={"s"}
                  variant={"fill"}
                />
                <PrimaryChip
                  label={"Department"}
                  size={"s"}
                  variant={"primary"}
                />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-full">
                <GreyButton
                  label={"Send Mail"}
                  size={"m"}
                  variant={"primary"}
                  leftIcon={<EmailIcon size={16} color="#121212" />}
                  style="w-full"
                />
              </div>
              <div className="w-full">
                <SecondaryButton
                  label={"Message"}
                  size={"m"}
                  variant={"primary"}
                  leftIcon={<MessageIcon size={16} color="#0E0E0E" />}
                  style="w-full"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="text-sm text-grey-ab-300">Gender</div>
                <div className=" text-grey-ab-400">Male</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm text-grey-ab-300">Joining Date</div>
                <div className=" text-grey-ab-400">01/01/2025</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm text-grey-ab-300">Email</div>
                <div className=" text-grey-ab-400">andrew234@mt.com</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm text-grey-ab-300">Mobile Number</div>
                <div className=" text-grey-ab-400">+91 9695947585</div>
              </div>
            </div>

            <div className="text-sm font-semibold text-grey-ab-800">
              Personal Information
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <div className="text-sm text-grey-ab-300">Email</div>
                <div className=" text-grey-ab-400">andrew234@mt.com</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm text-grey-ab-300">Mobile Number</div>
                <div className=" text-grey-ab-400">+91 9695947585</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm text-grey-ab-300">Date of Birth</div>
                <div className=" text-grey-ab-400">11/04/2025</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm text-grey-ab-300">Mobile Number</div>
                <div className=" text-grey-ab-400">+91 9695947585</div>
              </div>
              <div className="grid grid-cols-2 ">
                <div className="text-sm text-grey-ab-300">Address</div>
                <div className=" text-grey-ab-400 text-right">
                  120 Freight Terminal, Hamburg, Germany 20457
                </div>
              </div>
            </div>

            <div className="text-sm font-semibold text-grey-ab-800">
              Emergency Contact Details
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="text-sm text-grey-ab-300">
                  Contact Person Name
                </div>
                <div className=" text-grey-ab-400">James </div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm text-grey-ab-300">
                  Contact Person Email
                </div>
                <div className=" text-grey-ab-400">andrew234@mt.com</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm text-grey-ab-300">Mobile Number</div>
                <div className=" text-grey-ab-400">+91 9695947585</div>
              </div>
            </div>

            <div className="text-sm font-semibold text-grey-ab-800">Resume</div>

            <div className="w-full rounded-xs flex p-3 gap-3 bg-grey-200 items-center">
              <div>
                <DocumentIcon color="#2C398F" />
              </div>
              <div className="w-full">Document.pdf</div>
              <div className="rounded-xs p-[6px] bg-success-50">
                {" "}
                <DownloadIcon size={20} color="#007B33" />
              </div>
            </div>
          </div>

          {/* profile-right */}
          <div className="flex flex-col gap-6 w-full">
            {/* company details */}
            <div className="rounded-xs bg-grey-aw-50 shadow-lg">
              <div className="rounded-t-xs border-b p-4 border-b-grey-200">
                Company Details
              </div>
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between ">
                  <div className="text-sm text-greyab-300">Profile Status</div>
                  <SuccessChip label={"Active"} size={"s"} variant={"mix"} />
                </div>
                <div className="flex justify-between">
                  <div className="text-sm text-greyab-300">Employee Type</div>
                  <div className="text-ab-400">Full-Time</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-sm text-greyab-300">Experience</div>
                  <div className="text-ab-400">3+years</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-sm text-greyab-300">Office Location</div>
                  <div className="text-ab-400">Mumbai, India</div>
                </div>
              </div>
            </div>

            {/* employee documents */}
            <div className="rounded-xs bg-grey-aw-50 shadow-lg">
              <div className="rounded-t-xs border-b border-b-grey-ab-100 flex justify-between py-3 px-4">
                <div className="text-lg font-semibold text-grey-ab-800">
                  Employee Documents
                </div>
                <GreyButton
                  label={"Add Document"}
                  size={"s"}
                  variant={"primary"}
                  leftIcon={<AddIcon size={16} />}
                />
              </div>
              <CustomTable
                columns={employeeDocumentColumns}
                rows={employeeDocumentRows}
                isCheckbox={false}
                // onCheckedRowsChange={handleEmployeeDocumentCheckedRowsChange}
              />
            </div>

            {/* login activity chart */}
            <div className="rounded-xs bg-grey-aw-50 shadow-lg">
              <div className="h-[486px] flex items-center justify-center text-xl font-semibold italic">
                Login Activity Chart here..
              </div>
            </div>
          </div>
        </div>

        {/* Attendence list */}
        <div className="rounded-xs bg-grey-50 shadow-lg">
          <div className="rounded-t-xs flex justify-between py-2 px-3 bg-grey-aw-50 items-center">
            <div className="text-lg text-grey-ab-800 font-semibold">
              Attendance List
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
          <div className="py-1 px-3">
            <CustomTable
              columns={columns}
              rows={rows}
              isCheckbox={true}
              onCheckedRowsChange={handleCheckedRowsChange}
            />
          </div>

          {/* pagination section */}
          <div className="px-3 py-4 flex justify-between items-center">
            <div className="text-xs text-grey-ab-200">
              Showing {currentPage * itemsPerPage - itemsPerPage + 1} to{" "}
              {currentPage *
                (itemsPerPage > rows.length ? rows.length : itemsPerPage)}{" "}
              of {rows.length} Entries
            </div>
            {/*         
            <div className="text-xs text-grey-ab-200">
              Showing {currentPage * itemsPerPage - itemsPerPage + 1} to{" "}
              {currentPage * itemsPerPage} of {rows.length} Entries
            </div> */}

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

        {/* Leave hsitory */}
        <div className="rounded-xs bg-grey-aw-50 shadow-lg">
          <div className="rounded-t-xs border-b border-b-grey-200 flex justify-between p-4 items-center">
            <div className="h6 text-grey-ab-800 font-semibold">
              Leave History
            </div>
            <div onClick={openPopup}>
              <BlackButton
                label={"Apply Leave"}
                size={"m"}
                variant={"primary"}
                leftIcon={<AddIcon size={16} color="#E9E9E9" />}
              />
            </div>
          </div>

          <div className="py-8 px-4">
            <div className="py-3 px-4 flex flex-col gap-3 max-h-[800px] overflow-auto custom-scrollbar">
              {leaveCardRows.length > 0 &&
                leaveCardRows.map((item, index) => (
                  <div key={index}>
                    <EmployeeLeaveCard />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popup  */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
          <ApplyLeaveForm onClose={closePopup} />
        </div>
      )}
    </>
  );
};

export default EmployeeProfile;

const EmployeeLeaveCard: React.FC = () => {
  const [data, setData] = useState({ state: "waiting" });
  return (
    <div className="flex flex-col gap-2 border border-grey-ab-100 rounded-sm">
      <div className="p-2 border-b flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="min-h-10 min-w-10">
            <img
              src={sampleDp || DefaultDp}
              alt="employeeImage"
              className="object-fill  h-10 w-10"
            />
          </div>
          <div className="flex gap-1 flex-col">
            <p className="text-sm">@nguyn_fin_11</p>
            <div className="flex items-center gap-1">
              <PrimaryChip label={"Manager"} size={"s"} variant={"fill"} />
              <PrimaryChip
                label={"Department"}
                size={"s"}
                variant={"primary"}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-grey-ab-400 text-xs">15 May 2020 9:30 am</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-3">
        <div className="flex items-center justify-between">
          <div className=" flex flex-col gap-1">
            <p className="text-grey-ab-400 text-xs">No of Days </p>
            <p className="text-grey-ab-400 text-xs font-semibold">1 Day </p>
          </div>
          <div className=" flex flex-col gap-1 justify-center items-center">
            <p className="text-grey-ab-400 text-2xs">Leave Type</p>
            <BlackChip label={"Emergency Leave"} size={"s"} variant={"fill"} />
          </div>
        </div>
        <div className="flex items-center justify-start gap-5">
          <div className=" flex flex-col gap-1">
            <p className="text-grey-ab-400 text-xs">Leave From </p>
            <p className="text-grey-ab-400 text-xs font-semibold">11/05/2025</p>
          </div>
          <div className=" flex flex-col gap-1">
            <p className="text-grey-ab-400 text-xs">Leave Till </p>
            <p className="text-grey-ab-400 text-xs font-semibold">12/05/2025</p>
          </div>
        </div>
      </div>

      <div className="p-2 gap-2 flex flex-col text-xs border-b border-grey-ab-50">
        <p className="text-grey-ab-400">Reason for Leave</p>
        <p className="text-grey-ab-400">
          I need to attend a family function in my hometown. My cousin's wedding
          is scheduled on 21/02/2025, and there are several pre-wedding and
          post-wedding rituals that require my presence. As a close family
          member, my participation in these events is important. I also need
          time to travel and make necessary arrangements for the function.
        </p>
      </div>
      <div className="flex items-center p-2 gap-3 justify-end">
        <div>
          <ErrorButton label={"Reject"} size={"s"} variant={"link"} />
        </div>
        <SuccessButton label={"Approve"} size={"s"} variant={""} />
      </div>
    </div>
  );
};
