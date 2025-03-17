import React, { useCallback, useEffect, useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {
  AddIcon,
  DocumentIcon,
  ExcelIcon,
  SearchIcon,
} from "../../../components/icons/Icons";
import SuccessButton from "../../../components/buttons/SuccessButton";
import GroupField from "../../../components/groupField/GroupField";
import CustomTable from "../../../components/table/CustomTable";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import CustomPagination from "../../../components/pagination/CustomPagination";
import PrimaryChip from "../../../components/chips/PrimaryChip";
import NeutralBlueButton from "../../../components/buttons/NeutralBlueButton";
import { Link } from "react-router-dom";
import AddRequirement from "./AddRequirement";

interface RowData {
  id: string | number;
  jobTitle: string | React.ReactNode;
  jobLevel: string | React.ReactNode;
  jobLocation: string | React.ReactNode;
  jobPostedDate: string | React.ReactNode;
  yearsOfExperience: string | React.ReactNode;
  action: React.ReactNode; // If you have any actions like buttons or components
}

const columns: any[] = [
  { id: "jobTitle", label: "Job Title" },
  { id: "jobPostedDate", label: "Job Posted Date" },
  {
    id: "jobLevel",
    label: "Job Level",
    minWidth: "180px",
  },
  { id: "yearsOfExperience", label: "Year of Experience", align: "center" },
  { id: "jobLocation", label: "Job Location", align: "center" },
  {
    id: "action",
    label: "Action",
    align: "center",
  },
];

const RequirementList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<RowData[]>([]);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]); // Track selected row ids
  const [isAddRequirement, setAddRequirement] = useState<boolean>();

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
      jobTitle,
      yearsOfExperience,
      jobLevel,
      jobLocation,
      jobPostedDate,
    } = items;
    // Define your actions or any other custom logic you need for each row
    const actions = (
      <Link
        className="px-2 py-1 gap-2 flex justify-center items-center font-semibold"
        to={"/hrm/requirement/details"}
      >
        <NeutralBlueButton
          label={"Job Details"}
          size={"s"}
          variant={""}
          rightIcon={<DocumentIcon size={16} color="#fdfdfd" />}
        />
      </Link>
    );

    const jobLocationValue = jobLocation ? (
      <div className="px-2 py-1 flex items-center font-semibold text-sm justify-center">
        <PrimaryChip label={jobLocation || ""} size={"m"} variant={"mix"} />
      </div>
    ) : (
      "-"
    );

    // Ensure all columns have a value (or a default) for each row.
    const updatedData = {
      id: id,
      jobTitle: jobTitle || "nil", // Default value if not available
      jobPostedDate: jobPostedDate || "-", // Default value if not available
      jobLevel: jobLevel || "nil", // Default value if not available
      jobLocation: jobLocationValue,
      yearsOfExperience: yearsOfExperience || "nil",
      action: actions, // Actions will remain the same as you defined
    };

    return updatedData;
  };

  const data = [
    {
      jobTitle: "Manager",
      jobLevel: "Sales",
      jobLocation: "New York",
      jobPostedDate: "2025-02-01",
      yearsOfExperience: "2",
    },
    {
      jobTitle: "Developer",
      jobLevel: "Tech",
      jobLocation: "Japn",
      jobPostedDate: "2025-02-01",
      yearsOfExperience: "2",
    },
    {
      jobTitle: "leave",
      jobLevel: "senior Developer",
      jobLocation: "India",
      jobPostedDate: "2025-02-01",
      yearsOfExperience: "2",
    },
    {
      jobTitle: "vacation",
      jobLevel: "junior Developer",
      jobLocation: "Thai Land",
      jobPostedDate: "",
      yearsOfExperience: "2",
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
      {isAddRequirement && (
        <AddRequirement cancel={() => setAddRequirement(false)} />
      )}

      <div className="bg-white min-h-screen rounded">
        <div className="p-3 flex justify-between items-center text-grey-ab-900 ">
          <p className="text-lg font-semibold">Job Requirement List</p>
          <div onClick={() => setAddRequirement(true)}>
            {" "}
            <PrimaryButton
              label={"Add Requirement"}
              size={""}
              variant={""}
              leftIcon={<AddIcon color="#fdfdfd" />}
            />
          </div>
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
            {currentPage *
              (itemsPerPage > rows.length ? rows.length : itemsPerPage)}{" "}
            of {rows.length} Entries
          </div>
          {/* <div className="text-xs text-grey-ab-200">
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
    </>
  );
};

export default RequirementList;
