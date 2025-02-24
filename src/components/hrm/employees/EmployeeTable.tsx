import * as React from "react";
import PrimaryChip from "../../chips/PrimaryChip";
import NeutralBlueButton from "../../buttons/NeutralBlueButton";
import { UserIcon } from "../../icons/Icons";
import EmployeeImage from "/images/sample/employee.png";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
  Checkbox,
  Select,
  MenuItem,
  Pagination,
  SelectChangeEvent,
} from "@mui/material";

interface Column {
  id:
    | "employeeID"
    | "employeeName"
    | "employeeEmail"
    | "designation"
    | "department"
    | "branchLocation"
    | "action";
  label: string;
  minWidth?: number;
  align?: "left";
}

const columns: Column[] = [
  { id: "employeeID", label: "Employee ID", minWidth: 130 },
  { id: "employeeName", label: "Employee Name", minWidth: 180 },
  { id: "employeeEmail", label: "Employee Email", minWidth: 180 },
  { id: "designation", label: "Designation", minWidth: 140 },
  { id: "department", label: "Department", minWidth: 120 },
  { id: "branchLocation", label: "Branch Location", minWidth: 140 },
  { id: "action", label: "Action", minWidth: 120 },
];

interface Data {
  employeeID: string;
  employeeName: React.ReactNode;
  employeeEmail: string;
  designation: string;
  department: string;
  branchLocation: React.ReactNode;
  action: React.ReactNode;
}

const sampleData: Data[] = [
  {
    employeeID: "EMP2022001",
    employeeName: (
      <div className="min-w-[180px] flex gap-[10px] items-center">
        <div className="w-10 h-10">
          <img
            src={EmployeeImage}
            alt="employeeImage"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="text-sm">Henry, Arthur</div>
      </div>
    ),
    employeeEmail: "bill.sanders@example.com",
    designation: "Sales Executive",
    department: "Marketing",
    branchLocation: (
      <PrimaryChip label={"Chennai, India"} size={"m"} variant={"mix"} />
    ),
    action: (
      <div className="flex justify-center">
        <NeutralBlueButton
          label={"Profile"}
          size={"s"}
          variant={"primary"}
          rightIcon={<UserIcon size="16px" color="#FDFDFD" />}
        />
      </div>
    ),
  },
  {
    employeeID: "EMP2022002",
    employeeName: (
      <div className="min-w-[180px] flex gap-[10px] items-center">
        <div className="w-10 h-10">
          <img
            src={EmployeeImage}
            alt="employeeImage"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="text-sm">Nguyen, Shane</div>
      </div>
    ),
    employeeEmail: "debbie.baker@example.com",
    designation: "Customer Service",
    department: "Finance",
    branchLocation: (
      <PrimaryChip label={"Mumbai, India"} size={"m"} variant={"mix"} />
    ),
    action: (
      <div className="flex justify-center">
        <NeutralBlueButton
          label={"Profile"}
          size={"s"}
          variant={"primary"}
          rightIcon={<UserIcon size="16px" color="#FDFDFD" />}
        />
      </div>
    ),
  },
  {
    employeeID: "EMP2022003",
    employeeName: (
      <div className="min-w-[180px] flex gap-[10px] items-center">
        <div className="w-10 h-10">
          <img
            src={EmployeeImage}
            alt="employeeImage"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="text-sm">Black, Marvin</div>
      </div>
    ),
    employeeEmail: "deanna.curtis@example.com",
    designation: "Assistant Manager",
    department: "Inventory",
    branchLocation: (
      <PrimaryChip label={"Mumbai, India"} size={"m"} variant={"mix"} />
    ),
    action: (
      <div className="flex justify-center">
        <NeutralBlueButton
          label={"Profile"}
          size={"s"}
          variant={"primary"}
          rightIcon={<UserIcon size="16px" color="#FDFDFD" />}
        />
      </div>
    ),
  },
  {
    employeeID: "EMP2022004",
    employeeName: (
      <div className="min-w-[180px] flex gap-[10px] items-center">
        <div className="w-10 h-10">
          <img
            src={EmployeeImage}
            alt="employeeImage"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="text-sm">Cooper, Kristin</div>
      </div>
    ),
    employeeEmail: "kenzi.lawson@example.com",
    designation: "Documentation Executive",
    department: "Operation",
    branchLocation: (
      <PrimaryChip label={"Chennai, India"} size={"m"} variant={"mix"} />
    ),
    action: (
      <div className="flex justify-center">
        <NeutralBlueButton
          label={"Profile"}
          size={"s"}
          variant={"primary"}
          rightIcon={<UserIcon size="16px" color="#FDFDFD" />}
        />
      </div>
    ),
  },
  {
    employeeID: "EMP2022005",
    employeeName: (
      <div className="min-w-[180px] flex gap-[10px] items-center">
        <div className="w-10 h-10">
          <img
            src={EmployeeImage}
            alt="employeeImage"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="text-sm">Henry, Arthur</div>
      </div>
    ),
    employeeEmail: "bill.sanders@example.com",
    designation: "Sales Executive",
    department: "Marketing",
    branchLocation: (
      <PrimaryChip label={"Chennai, India"} size={"m"} variant={"mix"} />
    ),
    action: (
      <div className="flex justify-center">
        <NeutralBlueButton
          label={"Profile"}
          size={"s"}
          variant={"primary"}
          rightIcon={<UserIcon size="16px" color="#FDFDFD" />}
        />
      </div>
    ),
  },
  {
    employeeID: "EMP2022006",
    employeeName: (
      <div className="min-w-[180px] flex gap-[10px] items-center">
        <div className="w-10 h-10">
          <img
            src={EmployeeImage}
            alt="employeeImage"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="text-sm">Henry, Arthur</div>
      </div>
    ),
    employeeEmail: "bill.sanders@example.com",
    designation: "Sales Executive",
    department: "Marketing",
    branchLocation: (
      <PrimaryChip label={"Chennai, India"} size={"m"} variant={"mix"} />
    ),
    action: (
      <div className="flex justify-center">
        <NeutralBlueButton
          label={"Profile"}
          size={"s"}
          variant={"primary"}
          rightIcon={<UserIcon size="16px" color="#FDFDFD" />}
        />
      </div>
    ),
  },
  {
    employeeID: "EMP2022007",
    employeeName: (
      <div className="min-w-[180px] flex gap-[10px] items-center">
        <div className="w-10 h-10">
          <img
            src={EmployeeImage}
            alt="employeeImage"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="text-sm">Henry, Arthur</div>
      </div>
    ),
    employeeEmail: "bill.sanders@example.com",
    designation: "Sales Executive",
    department: "Marketing",
    branchLocation: (
      <PrimaryChip label={"Chennai, India"} size={"m"} variant={"mix"} />
    ),
    action: (
      <div className="flex justify-center">
        <NeutralBlueButton
          label={"Profile"}
          size={"s"}
          variant={"primary"}
          rightIcon={<UserIcon size="16px" color="#FDFDFD" />}
        />
      </div>
    ),
  },
];

const EmployeeTable: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);
  const [selected, setSelected] = React.useState<string[]>([]);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleItemsPerPageChange = (event: SelectChangeEvent<number>) => {
    setItemsPerPage(Number(event.target.value));
    setPage(1); // Reset to first page when items per page changes
  };

  const handleSelectRow = (name: string) => {
    setSelected((prevSelected) =>
      prevSelected.includes(name)
        ? prevSelected.filter((item) => item !== name)
        : [...prevSelected, name]
    );
  };

  const isSelected = (name: string) => selected.includes(name);

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedData = sampleData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full py-1 px-3 bg-grey-aw-50">
      <Paper sx={{ width: "100%", overflowX: "auto", boxShadow: "none" }}>
        <TableContainer sx={{ overflowX: "auto" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell
                  padding="checkbox"
                  style={{ backgroundColor: "#F6F6F6", borderBottom: "none" }}
                >
                  <Checkbox
                    indeterminate={
                      selected.length > 0 && selected.length < sampleData.length
                    }
                    checked={selected.length === sampleData.length}
                    onChange={(e) =>
                      setSelected(
                        e.target.checked
                          ? sampleData.map((row) => row.employeeID)
                          : []
                      )
                    }
                  />
                </TableCell>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.id === "action" ? "center" : column.align}
                    style={{
                      minWidth: column.minWidth,
                      width: column.minWidth,
                      maxWidth: column.minWidth,
                      backgroundColor: "#F6F6F6",
                      borderBottom: "none",
                      padding: "4px 16px",
                      fontSize: "14px",
                      color: "#0E0E0E",
                      whiteSpace: "normal",
                      wordBreak: "break-word",
                    }}
                  >
                    <span className="font-semibold">{column.label}</span>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((row) => (
                <TableRow
                  key={row.employeeID}
                  selected={isSelected(row.employeeID)}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isSelected(row.employeeID)}
                      onChange={() => handleSelectRow(row.employeeID)}
                    />
                  </TableCell>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={
                        column.id === "action" || column.id === "branchLocation"
                          ? "center"
                          : column.align
                      }
                      style={{
                        minWidth: column.minWidth,
                        width: column.minWidth,
                        maxWidth: column.minWidth,
                        padding: "10px 16px",
                        fontSize: "14px",
                        color: "#0E0E0E",
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                      }}
                    >
                      {row[column.id]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <div className="flex justify-between py-4 px-0 items-center">
          <div className="text-xs text-grey-ab-200">
            Showing {startIndex + 1} to{" "}
            {Math.min(startIndex + itemsPerPage, sampleData.length)} of{" "}
            {sampleData.length} Entries
          </div>
          <Pagination
            count={Math.ceil(sampleData.length / itemsPerPage)}
            page={page}
            onChange={handleChangePage}
            variant="outlined"
            shape="rounded"
            size="small"
            siblingCount={0}
            boundaryCount={1}
            sx={{
              "& .MuiPaginationItem-root": {
                fontSize: "10px",
                color: "#212121",
                backgroundColor: "#FDFDFD",
                border: "1px solid rgba(206, 206, 206, 1)",
                fontWeight: 800,
                lineHeight: 0,
                "&:hover": {
                  backgroundColor: "#C4C8E4",
                },
              },
              "& .Mui-selected": {
                backgroundColor: "#FDFDFD",
                color: "#2C398F",
                border: "1px solid #2C398F",
                "&:hover": {
                  backgroundColor: "#FDFDFD",
                },
              },
              "& .MuiPaginationItem-ellipsis": {
                color: "#212121",
                fontSize: "10px",
                padding: "10px 5px 14px 5px",
                fontWeight: 800,
                borderRadius: "4px",
                border: "1px solid rgba(206, 206, 206, 1)",
              },
              "& .MuiPaginationItem-previousNext": {
                backgroundColor: "#FDFDFD",
                color: "#171717",
                border: "1px solid #171717",
                "&:hover": {
                  border: "1px solid rgba(206, 206, 206, 1)",
                },
              },
              "& .MuiPaginationItem-previousNext.Mui-disabled": {
                backgroundColor: "#FDFDFD",
                color: "#171717",
                border: "1px solid #171717",
                opacity: 1,
              },
            }}
          />
          <div className="flex gap-4 items-center">
            <p className="text-xs text-grey-ab-300">Items Per Page</p>
            {/* <div className="w-[64px] h-[32px] bg-black"></div>{" "} */}
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
      </Paper>
    </div>
  );
};

export default EmployeeTable;
