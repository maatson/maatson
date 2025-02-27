import React, { useCallback, useEffect, useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {
  DeleteIcon,
  DocumentIcon,
  DownloadIcon,
  EditIcon,
  ExcelIcon,
  SendIcon,
} from "../../../components/icons/Icons";
import ErrorButton from "../../../components/buttons/ErrorButton";
import SuccessButton from "../../../components/buttons/SuccessButton";
import CustomTable from "../../../components/table/CustomTable";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import CustomPagination from "../../../components/pagination/CustomPagination";
import PrimaryChip from "../../../components/chips/PrimaryChip";

interface RowData {
  id: string | number;
  candidateName: string | React.ReactNode;
  email: string | React.ReactNode;
  mobileNumber: string | React.ReactNode;
  gender: string | React.ReactNode;
  currentLocation: string | React.ReactNode;
  resume: string | React.ReactNode;
  action: React.ReactNode; // If you have any actions like buttons or components
}

const columns: any[] = [
  { id: "candidateName", label: "Candidate Name" },
  { id: "email", label: "Email" },
  {
    id: "mobileNumber",
    label: "Mobile Number",
  },
  { id: "gender", label: "Gender" },
  { id: "currentLocation", label: "Current Location" },
  { id: "resume", label: "Resume", align: "center", minWidth: "202px" },
  {
    id: "action",
    label: "Action",
    align: "center",
  },
];

const RequirementDetails: React.FC = () => {
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
      candidateName,
      email,
      mobileNumber,
      gender,
      currentLocation,
      resume,
    } = items;
    // Define your actions or any other custom logic you need for each row
    const actions = (
      <div className="px-2 py-1 gap-2 flex justify-center items-center font-semibold ">
        <div className="p-1 rounded bg-error-50 cursor-pointer">
          <DeleteIcon color="#810001" size={16} />
        </div>
        <div className="p-1 rounded bg-success-50 cursor-pointer">
          <SendIcon color="#009F41" size={16} />
        </div>
      </div>
    );

    const resumeValue = resume ? (
      <div className="p-2 gap-3 flex items-center font-semibold text-sm justify-center bg-primary-50 rounded border border-grey-ab-100 w-full cursor-pointer">
        <div>
          <DocumentIcon color={"#2C398F"} />
        </div>
        <p className="w-full">{String(resume).slice(0, 10)}...</p>
        <div className="p-1 rounded bg-grey-ab">
          <DownloadIcon size={16} color={"#fdfdfd"} />
        </div>
      </div>
    ) : (
      "none"
    );

    // Ensure all columns have a value (or a default) for each row.
    const updatedData = {
      id: id,
      candidateName: candidateName || "nil",
      email: email || "nil",
      mobileNumber: mobileNumber || "",
      gender: gender || "",
      currentLocation: currentLocation || "",
      resume: resumeValue,
      action: actions, // Actions will remain the same as you defined
    };

    return updatedData;
  };

  const data = [
    {
      candidateName: "Virat",
      email: "virat@123",
      mobileNumber: "20250201",
      gender: "Male",
      currentLocation: "New York",
      resume: "Andrew Resume.pdf",
    },
    {
      candidateName: "Rohit",
      email: "VadaPav@123",
      mobileNumber: "2025-02-01",
      gender: "Male",
      currentLocation: "New York",
      resume: "Rohit Resume.pdf",
    },
    {
      candidateName: "Dhoni",
      email: "dhobi@123",
      mobileNumber: "20250201",
      gender: "Male",
      currentLocation: "Chennai",
      resume: "Dhoni Resume.pdf",
    },
    {
      candidateName: "Mandhana",
      email: "Mandhana@123",
      mobileNumber: "20250201",
      gender: "female",
      currentLocation: "Bangalore",
      resume: "Mandhana Resume.pdf",
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

  const dummyItems: string[] = [
    "Documentation ",
    "problem-solving abilities",
    "analytical",
    "management skills",
    "logistics tracking systems",
    "Communication",
  ];

  return (
    <>
      <div className="p-3 flex justify-between items-center text-grey-ab-900 bg-white rounded">
        <p className="text-lg font-semibold">Job Requirement Details</p>
        <div className="flex items-center">
          <ErrorButton
            leftIcon={<DeleteIcon color={"#EA0001"} />}
            label={"Delete Requirement"}
            size={"l"}
            variant={"link"}
          />
          <PrimaryButton
            label={"Edit Requirement"}
            size={""}
            variant={""}
            leftIcon={<EditIcon color="#fdfdfd" />}
          />
        </div>
      </div>
      <div className="bg-white rounded h-full p-4 gap-4 flex flex-col">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Freight Operations Executive</p>{" "}
          <div className="flex flex-col gap-1">
            <p className="text-sm text-grey-ab-400 text-center">Job Location</p>
            <PrimaryChip label={"Chennai, India"} size={"m"} variant={"mix"} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-primary-600">
            Job Description
          </p>
          <p>
            We are seeking a Freight Operations Executive to manage end-to-end
            shipping and logistics operations. The candidate will be responsible
            for coordinating sea, air, and land freight, ensuring compliance
            with international trade regulations, and optimizing transport
            efficiency. This role requires expertise in freight documentation,
            carrier negotiations, and supply chain management.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <div className="flex justify-between items-center ">
            <div className="flex flex-col gap-1 w-full ">
              <p className="text-sm">Job Level</p>
              <p className="text-sm text-grey-ab-400 font-semibold">
                Senior Level
              </p>
            </div>
            <div className="flex flex-col gap-1 w-full items-end">
              <p className="text-sm">Job Type</p>
              <p className="text-sm text-grey-ab-400 font-semibold">
                Full-Time{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center ">
            <div className="flex flex-col gap-1 w-full ">
              <p className="text-sm">Gender</p>
              <p className="text-sm text-grey-ab-400 font-semibold">
                Open to All
              </p>
            </div>
            <div className="flex flex-col gap-1 w-full items-end">
              <p className="text-sm">Qualification</p>
              <p className="text-sm text-grey-ab-400 font-semibold">MBA </p>
            </div>
          </div>
          <div className="flex justify-between items-center ">
            <div className="flex flex-col gap-1 w-full ">
              <p className="text-sm">Experience</p>
              <p className="text-sm text-grey-ab-400 font-semibold">3+years </p>
            </div>
            <div className="flex flex-col gap-1 w-full items-end">
              <p className="text-sm">Expire Date</p>
              <p className="text-sm text-grey-ab-400 font-semibold">
                12/04/2025{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="border "></div>
        <div className="gap-2 flex flex-col">
          {" "}
          <p className="text-sm font-semibold text-primary-600">
            Required Skills{" "}
          </p>
          <div className="flex items-center gap-2">
            {dummyItems &&
              dummyItems.length > 0 &&
              dummyItems?.map((item, index) => {
                return (
                  <span key={index}>
                    <PrimaryChip label={item} size={"m"} variant={"outline"} />
                  </span>
                );
              })}
          </div>
        </div>
      </div>
      <div className="bg-white rounded h-full">
        <div className="p-3 flex justify-between items-center text-grey-ab-900 border-b border-grey-ab-200">
          <p className="text-lg font-semibold">Job Applies</p>
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
    </>
  );
};

export default RequirementDetails;
