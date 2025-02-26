import React from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: "center" | "left" | "right" | "";
  format?: (value: any) => string;
}

interface TableProps {
  columns: Column[];
  rows: any[]; // Rows can contain normal data or React components
  selectedRows: (string | number)[];
  onSelectAll: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRowSelect: (
    event: React.ChangeEvent<HTMLInputElement>,
    rowId: number
  ) => void;
}

const CustomTable: React.FC<TableProps> = ({
  columns,
  rows,
  selectedRows,
  onSelectAll,
  onRowSelect,
}) => {
  return (
    <Paper sx={{ width: "100%", boxShadow: "none" }}>
      <TableContainer className="custom-scrollbar rounded">
        <Table aria-label="table">
          <TableHead>
            <TableRow className="items-center ">
              <TableCell
                sx={{
                  minWidth: "10px",
                  padding: "6px 8px",
                }}
                className="bg-grey-100 "
              >
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={
                    rows.length > 0 && selectedRows.length === rows.length
                  } // Check if all rows are selected
                  onChange={onSelectAll}
                  className="outline-none active:outline-none focus-within:border-none"
                  style={{
                    width: "16px", // Width of the checkbox
                    height: "16px", // Height of the checkbox
                    border: "20px solid #ccc", // Border color and thickness
                    // borderRadius: "4px", // Rounded corners
                    backgroundColor: "#eeeeee",

                    // cursor: "pointer", // Pointer cursor on hover
                    // transition: "all 0.3s ease", // Smooth transition for changes
                    // position: "relative", // Position relative for the checkmark
                    margin: "10px",
                  }}
                />
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || "left"}
                  sx={{
                    minWidth: column.minWidth || "150px",
                    padding: "12px 8px",
                  }}
                  className="bg-grey-100 bre"
                >
                  <span className="font-semibold">{column.label}</span>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row: any, rowIndex) => (
              <TableRow role="checkbox" tabIndex={-1} key={rowIndex}>
                <TableCell
                  sx={{
                    minWidth: "10px",
                    padding: "8px",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={(event) => onRowSelect(event, row.id)}
                    style={{
                      width: "16px", // Width of the checkbox
                      height: "16px", // Height of the checkbox
                      border: "20px solid #ccc", // Border color and thickness
                      backgroundColor: "#eeeeee",
                      margin: "10px",
                    }}
                    className="outline-none active:outline-none focus-within:border-none"
                  />{" "}
                </TableCell>{" "}
                {columns.map((column) => {
                  const value = row ? row[column.id] : undefined; // Check if row exists

                  return (
                    <TableCell
                      key={column.id}
                      align={column.align || "left"}
                      sx={{ padding: "8px" }}
                      className={`${
                        column.id === "department" ? "" : "capitalize"
                      }`}
                    >
                      {/* If value is undefined, display a default message */}
                      {value !== undefined ? value : "N/A"}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CustomTable;
