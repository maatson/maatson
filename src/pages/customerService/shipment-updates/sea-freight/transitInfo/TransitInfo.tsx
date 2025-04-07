import React, { useCallback, useEffect, useState } from "react";
import SuccessChip from "../../../../../components/chips/SuccessChip";
import WarningChip from "../../../../../components/chips/WarningChip";
import {
  DocumentIcon,
  EditIcon,
  ExcelIcon,
  SearchIcon,
  SendIcon,
} from "../../../../../components/icons/Icons";
import { Link } from "react-router-dom";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import CustomPagination from "../../../../../components/pagination/CustomPagination";
import CustomTable from "../../../../../components/table/CustomTable";
import SuccessButton from "../../../../../components/buttons/SuccessButton";
import GroupField from "../../../../../components/groupField/GroupField";
import BlackButton from "../../../../../components/buttons/BlackButton";

interface RowData {
  id: string | number;
  bookingId: string | React.ReactNode;
  companyName: string | React.ReactNode;
  portOfLoading: string | React.ReactNode;
  portOfDischarge: string | React.ReactNode;
  transitStatus: boolean | React.ReactNode;
  action: React.ReactNode; // If you have any actions like buttons or components
}
const columns: any[] = [
  { id: "bookingId", label: "Booking ID" },
  {
    id: "companyName",
    label: "Company Name",
    minWidth: "180px",
  },
  { id: "portOfLoading", label: "Port of loading" },
  { id: "portOfDischarge", label: "Port of Discharge" },
  { id: "transitStatus", label: "Transit Status", align: "center" },
  {
    id: "action",
    label: "Action",
    align: "center",
  },
];

const TransitInfo: React.FC = () => {
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
      bookingId,
      companyName,
      portOfLoading,
      portOfDischarge,
      transitStatus,
    } = items;
    // Define your actions or any other custom logic you need for each row
    const actions = (
      <div className=" flex justify-center items-center font-semibold">
        <Link
          className="p-1 rounded  "
          to={`/shipment-updates/sea-freight/transit-view/${bookingId}`}
        >
          <BlackButton label={"View Details"} size={"s"} variant={"outline"} />
        </Link>
      </div>
    );

    let transitStatusText: string | React.ReactNode = "-"; // Default status
    if (transitStatus) {
      transitStatusText = (
        <div className="px-2 py-1 flex items-center font-semibold text-sm justify-center">
          <SuccessChip label={"Updated"} size={"l"} variant={"fill"} />
        </div>
      );
    } else {
      transitStatusText = (
        <div className="px-2 py-1 flex items-center font-semibold text-sm justify-center">
          <WarningChip label={"Pending"} size={"l"} variant={"fill"} />
        </div>
      );
    }

    // Ensure all columns have a value (or a default) for each row.
    const updatedData = {
      id: id,
      bookingId: bookingId || "-",
      companyName: companyName || "-",
      portOfLoading: portOfLoading,
      portOfDischarge: portOfDischarge || "-",
      transitStatus: transitStatusText || "-",
      action: actions,
    };

    return updatedData;
  };

  const data = [
    {
      bookingId: "Emp001",
      companyName: "John Doe",
      portOfLoading: "chennai",
      portOfDischarge: "dubai",
      transitStatus: true,
    },
    {
      bookingId: "Emp0021",
      companyName: "maatson",
      portOfLoading: "nhavasheva",
      portOfDischarge: "pudhucherry",
      transitStatus: false,
    },
    {
      bookingId: "Emp003",
      companyName: "Maritime",
      portOfLoading: "New York",
      portOfDischarge: "turkey",
      transitStatus: true,
    },
    {
      bookingId: "Emp0014",
      companyName: "opc",
      portOfLoading: "thuthukodi",
      portOfDischarge: "thai land",
      transitStatus: false,
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
      <div className="p-3 flex justify-between items-center text-grey-ab-900 border-y border-grey-ab-200">
        <div className="flex gap-4 items-center">
          <p className="text-lg font-semibold w-full">Transit Info List </p>
          <GroupField
            label={""}
            type={"text"}
            placeholder={"Search"}
            name={"search"}
            value={""}
            onChange={() => {}}
            parentStyle="max-w-[320px] w-full min-w-[180px]"
            error={false}
            rightIcon={<SearchIcon />}
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

export default TransitInfo;
