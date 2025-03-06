import * as React from "react";
import PrimaryChip from "../../chips/PrimaryChip";
import NeutralBlueButton from "../../buttons/NeutralBlueButton";
import { UserIcon } from "../../icons/Icons";
import EmployeeImage from "/images/sample/employee.png";
import DefaultDp from "/images/defaultProfilePic.png";

import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import CustomPagination from "../../pagination/CustomPagination";
import CustomTable from "../../table/CustomTable";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface RowData {
  id: string | number;
  employeeID: string;
  employeeName: string | React.ReactNode;
  employeeEmail: string;
  designation: string;
  department: string;
  branchLocation: React.ReactNode;
  action: React.ReactNode;
}

const columns: any[] = [
  { id: "employeeID", label: "Employee ID", minWidth: 130 },
  { id: "employeeName", label: "Employee Name", minWidth: 180 },
  { id: "employeeEmail", label: "Employee Email", minWidth: 180 },
  { id: "designation", label: "Designation", minWidth: 140 },
  { id: "department", label: "Department", minWidth: 120 },
  { id: "branchLocation", label: "Branch Location", minWidth: 140 },
  { id: "action", label: "Action", minWidth: 120, align: "center" },
];

const EmployeeTable: React.FC = () => {
  const navigate = useNavigate();
  const handleProfileClick = () => {
    navigate("/hrm/employees/employee-profile");
  };

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
    const {
      id,
      employeeName,
      employeeEmail,
      designation,
      department,
      branchLocation,
    } = items;
    const employeeNames = (
      <div className="min-w-[180px] flex gap-[10px] items-center">
        <div className="w-10 h-10">
          <img
            src={EmployeeImage || DefaultDp}
            alt={employeeName}
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="text-sm">{employeeName}</div>
      </div>
    );
    const branchLocations = (
      <PrimaryChip label={branchLocation} size={"m"} variant={"mix"} />
    );
    const actions = (
      <div className="flex justify-center" onClick={handleProfileClick}>
        <NeutralBlueButton
          label={"Profile"}
          size={"s"}
          variant={"primary"}
          rightIcon={<UserIcon size="16px" color="#FDFDFD" />}
        />
      </div>
    );

    const updatedData = {
      id: id,
      employeeID: items?.employeeID,
      employeeName: employeeNames,
      employeeEmail: employeeEmail,
      designation: designation,
      department: department,
      branchLocation: branchLocations,
      action: actions,
    };
    return updatedData;
  };

  const data = [
    {
      employeeID: "EMP2022001",
      employeeName: "Henry, Arthur",
      employeeEmail: "bill.sanders@example.com",
      designation: "Sales Executive",
      department: "Marketing",
      branchLocation: "Chennai, India",
    },
    {
      employeeID: "EMP2022002",
      employeeName: "Nguyen, Shane",
      employeeEmail: "debbie.baker@example.com",
      designation: "Customer Service",
      department: "Finance",
      branchLocation: "Mumbai, India",
    },
    {
      employeeID: "EMP2022003",
      employeeName: "Black, Marvin",
      employeeEmail: "deanna.curtis@example.com",
      designation: "Assistant Manager",
      department: "Inventory",
      branchLocation: "Chennai, India",
    },
    {
      employeeID: "EMP2022004",
      employeeName: "Cooper, Kristin",
      employeeEmail: "kenzi.lawson@example.com",
      designation: "Documentation Executive",
      department: "Operation",
      branchLocation: "Mumbai, India",
    },
    {
      employeeID: "EMP2022005",
      employeeName: "Henry, Arthur",
      employeeEmail: "bill.sanders@example.com",
      designation: "Sales Executive",
      department: "Marketing",
      branchLocation: "Mumbai, India",
    },
    {
      employeeID: "EMP2022006",
      employeeName: "Henry, Arthur",
      employeeEmail: "bill.sanders@example.com",
      designation: "Sales Executive",
      department: "Marketing",
      branchLocation: "Chennai, India",
    },
    {
      employeeID: "EMP2022007",
      employeeName: "Henry, Arthur",
      employeeEmail: "bill.sanders@example.com",
      designation: "Sales Executive",
      department: "Marketing",
      branchLocation: "Chennai, India",
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
    <div className="w-full py-1 px-3 bg-grey-aw-50">
      <CustomTable
        columns={columns}
        rows={rows}
        isCheckbox={true}
        onCheckedRowsChange={handleCheckedRowsChange}
      />
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

export default EmployeeTable;
