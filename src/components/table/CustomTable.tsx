import React, { useEffect, useState } from "react";
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

interface Row {
  id: string | number;
  [key: string]: any; // Allow dynamic keys for other columns
}

interface TableProps {
  columns: Column[];
  rows: Row[]; // Rows can contain normal data or React components
  isCheckbox: boolean;
  onCheckedRowsChange?: (checkedRows: (string | number)[]) => void; // New prop for parent to handle checked rows
}

const CustomTable: React.FC<TableProps> = React.memo(
  ({ columns, rows, isCheckbox, onCheckedRowsChange }) => {
    const [checkedRows, setCheckedRows] = useState<(string | number)[]>([]); // Track selected row ids

    // Use effect to trigger state change after render
    useEffect(() => {
      // Send data to parent when checkedRows changes
      if (onCheckedRowsChange) {
        onCheckedRowsChange(checkedRows);
      }
    }, [checkedRows, onCheckedRowsChange]); // This ensures the parent is updated after checkedRows is modified

    const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
      const checkedRow: (string | number)[] = event.target.checked
        ? rows.map((row) => row.id)
        : [];
      setCheckedRows(checkedRow);
    };

    const handleRowSelect = (
      event: React.ChangeEvent<HTMLInputElement>,
      rowId: string | number
    ) => {
      setCheckedRows((prev) => {
        const newChecked = event.target.checked
          ? [...prev, rowId]
          : prev.filter((id) => id !== rowId);
        return newChecked;
      });
    };

    return (
      <Paper sx={{ width: "100%", boxShadow: "none" }}>
        <TableContainer className="custom-scrollbar rounded">
          <Table aria-label="table">
            <TableHead>
              <TableRow className="items-center ">
                {isCheckbox && (
                  <TableCell
                    sx={{
                      minWidth: "10px",
                      padding: "6px 8px",
                    }}
                    className="bg-grey-100  "
                  >
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={checkedRows.length === rows.length} // Check if all rows are selected
                      onChange={handleSelectAll}
                      className="outline-none active:outline-none focus-within:border-none "
                      style={{
                        width: "16px", // Width of the checkbox
                        height: "16px", // Height of the checkbox
                        border: "20px solid #ccc", // Border color and thickness
                        backgroundColor: "#eeeeee",
                        margin: "10px",
                      }}
                    />
                  </TableCell>
                )}
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
                    <span className="font-semibold capitalize">
                      {column.label}
                    </span>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length > 0 ? (
                rows.map((row) => (
                  <TableRow role="checkbox" tabIndex={-1} key={row.id}>
                    {isCheckbox && (
                      <TableCell
                        sx={{
                          minWidth: "10px",
                          padding: "8px",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={checkedRows.includes(row.id)}
                          onChange={(event) => handleRowSelect(event, row.id)}
                          style={{
                            width: "16px", // Width of the checkbox
                            height: "16px", // Height of the checkbox
                            border: "20px solid #ccc", // Border color and thickness
                            backgroundColor: "#eeeeee",
                            margin: "10px",
                          }}
                          className="outline-none active:outline-none focus-within:border-none"
                        />
                      </TableCell>
                    )}
                    {columns.map((column) => {
                      const value = row ? row[column.id] : undefined; // Check if row exists

                      return (
                        <TableCell
                          key={column.id}
                          align={column.align || "left"}
                          sx={{ padding: "8px" }}
                        >
                          {/* If value is undefined, display a default message */}
                          {value !== undefined ? value : "N/A"}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} align="center">
                    Data not found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  }
);

export default CustomTable;
