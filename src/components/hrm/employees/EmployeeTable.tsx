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
  TablePagination,
  TableRow,
  Paper,
  TableHead,
  Checkbox,
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
  align?: "center";
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
];

const EmployeeTable: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [selected, setSelected] = React.useState<string[]>([]);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - sampleData.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelectRow = (name: string) => {
    setSelected((prevSelected) =>
      prevSelected.includes(name)
        ? prevSelected.filter((item) => item !== name)
        : [...prevSelected, name]
    );
  };

  const isSelected = (name: string) => selected.includes(name);

  return (
    <div className="w-full py-1 px-3 bg-grey-aw-50">
      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 800 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={
                    selected.length > 0 && selected.length < rows.length
                  }
                  checked={selected.length === rows.length}
                  onChange={(e) =>
                    setSelected(
                      e.target.checked ? rows.map((row) => row.employeeID) : []
                    )
                  }
                />
              </TableCell>
              <TableCell width="130px" padding="none">
                Employee ID
              </TableCell>
              <TableCell width="180px" padding="none">
                Employee Name
              </TableCell>
              <TableCell width="180px" padding="none">
                Employee Email
              </TableCell>
              <TableCell width="140px" padding="none">
                Designation
              </TableCell>
              <TableCell width="120px" padding="none">
                Department
              </TableCell>
              <TableCell width="140px" padding="none" align="center">
                Branch Location
              </TableCell>
              <TableCell width="120px" padding="none" align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
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
                <TableCell
                  component="th"
                  scope="row"
                  width="130px"
                  padding="none"
                >
                  {row.employeeID}
                </TableCell>
                <TableCell width="180px" padding="none">
                  {row.employeeName}
                </TableCell>
                <TableCell width="180px" padding="none">
                  {row.employeeEmail}
                </TableCell>
                <TableCell width="140px" padding="none">
                  {row.designation}
                </TableCell>
                <TableCell width="120px" padding="none">
                  {row.department}
                </TableCell>
                <TableCell width="140px" padding="none" align="center">
                  {row.branchLocation}
                </TableCell>
                <TableCell width="120px" padding="none" align="center">
                  {row.action}
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={4} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions} // 👈 Custom pagination actions
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer> */}

      <Paper sx={{ width: "100%", overflowX: "auto" }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
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
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    <span className="font-semibold">{column.label}</span>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? sampleData.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : sampleData
              ).map((row) => (
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
                    <TableCell key={column.id} align={column.align}>
                      {row[column.id]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={4} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={sampleData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default EmployeeTable;
