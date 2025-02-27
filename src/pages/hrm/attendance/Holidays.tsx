import React, { useCallback, useEffect, useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {
  AddIcon,
  SearchIcon,
  ExcelIcon,
  EditIcon,
} from "../../../components/icons/Icons";
import SuccessButton from "../../../components/buttons/SuccessButton";
import GroupField from "../../../components/groupField/GroupField";
import CustomPagination from "../../../components/pagination/CustomPagination";
import CustomTable from "../../../components/table/CustomTable";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

import GreyButton from "../../../components/buttons/GreyButton";
import PrimaryChip from "../../../components/chips/PrimaryChip";
import AddHoliday from "./AddHoliday";
import UpdateHoliday from "./UpdateHoliday";

interface RowData {
  id: string | number;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  branchOffice: string | React.ReactNode;
  date: string | React.ReactNode;
  action: React.ReactNode; // If you have any actions like buttons or components
}

const columns: any[] = [
  { id: "title", label: "Title" },
  { id: "date", label: "Date" },
  {
    id: "description",
    label: "Description",
    minWidth: "180px",
  },
  { id: "branchOffice", label: "Branch office", align: "center" },
  {
    id: "action",
    label: "Action",
    align: "center",
  },
];

const Holidays: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<RowData[]>([]);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]); // Track selected row ids
  const [isAddHoliday, setAddHoliday] = useState<boolean>();
  const [isUpdateHoliday, setUpdateHoliday] = useState<boolean>();

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
    const { id, title, description, branchOffice, date } = items;
    // Define your actions or any other custom logic you need for each row
    const actions = (
      <div
        className="px-2 py-1 gap-2 flex justify-center items-center font-semibold"
        onClick={() => setUpdateHoliday(true)}
      >
        <GreyButton
          label={"Edit"}
          size={"s"}
          variant={""}
          rightIcon={<EditIcon size={16} />}
        />
      </div>
    );

    const branchOfficeValue = branchOffice ? (
      <div className="px-2 py-1 flex items-center font-semibold text-sm justify-center">
        <PrimaryChip label={branchOffice || ""} size={"m"} variant={"mix"} />
      </div>
    ) : (
      "-"
    );

    // Ensure all columns have a value (or a default) for each row.
    const updatedData = {
      id: id,
      title: title || "nil", // Default value if not available
      date: date || "-", // Default value if not available
      description: description || "nil", // Default value if not available
      branchOffice: branchOfficeValue,
      action: actions, // Actions will remain the same as you defined
    };

    return updatedData;
  };

  const data = [
    {
      title: "Manager",
      description: "Sales",
      branchOffice: "New York",
      date: "2025-02-01",
    },
    {
      title: "Developer",
      description: "Tech",
      branchOffice: "San Francisco",
      date: "2025-02-01",
    },
    {
      title: "leave",
      description: "senior Developer",
      branchOffice: "San Francisco",
      date: "2025-02-01",
    },
    {
      title: "vacation",
      description: "junior Developer",
      branchOffice: "San Francisco",
      date: "",
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
      {isAddHoliday && <AddHoliday cancel={() => setAddHoliday(false)} />}
      {isUpdateHoliday && (
        <UpdateHoliday cancel={() => setUpdateHoliday(false)} />
      )}
      <div className="p-3 flex justify-between items-center text-grey-ab-900 ">
        <p className="text-lg font-semibold">Holiday’s List</p>
        <div onClick={() => setAddHoliday(true)}>
          <PrimaryButton
            label={"Add Holidays"}
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

export default Holidays;
