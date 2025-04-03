import React, { useCallback, useEffect, useState } from "react";
import SuccessButton from "../../../../../components/buttons/SuccessButton";
import { ExcelIcon, SearchIcon } from "../../../../../components/icons/Icons";
import GroupField from "../../../../../components/groupField/GroupField";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import CustomPagination from "../../../../../components/pagination/CustomPagination";
import CustomTable from "../../../../../components/table/CustomTable";
import GreyButton from "../../../../../components/buttons/GreyButton";
import SuccessChip from "../../../../../components/chips/SuccessChip";
import WarningChip from "../../../../../components/chips/WarningChip";

interface RowData {
  id: string | number;
  bookingID: string;
  companyName: string;
  portOfLoading: string;
  portOfDischarge: string;
  bookingValidityDate: string;
  pickupStatus: React.ReactNode;
  action: React.ReactNode;
}

const columns: any[] = [
  { id: "bookingID", label: "Booking ID", minWidth: 100 },
  { id: "companyName", label: "Company Name" },
  { id: "portOfLoading", label: "Port of loading", minWidth: 160 },
  { id: "portOfDischarge", label: "Port of Discharge", minWidth: 160 },
  { id: "bookingValidityDate", label: "Booking Validity Date", minWidth: 160 },
  { id: "pickupStatus", label: "Pickup Status", align: "center" },
  { id: "action", label: "Action", minWidth: 120, align: "center" },
];

const ContainerPickUp: React.FC = () => {
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

  // table
  const createData = (items: any) => {
    const { id, pickupStatus } = items;

    const pickupStatuses = (
      <>
        {pickupStatus.toLowerCase() === "processing" ? (
          <WarningChip label={pickupStatus} size={"m"} variant={"mix"} />
        ) : (
          <SuccessChip label={pickupStatus} size={"m"} variant={"mix"} />
        )}
      </>
    );
    const actions = (
      <GreyButton label={"View Updates"} size={"s"} variant={"primary"} />
    );

    const updatedData = {
      id: id,
      bookingID: items?.bookingID,
      companyName: items?.companyName,
      portOfLoading: items?.portOfLoading,
      portOfDischarge: items?.portOfDischarge,
      bookingValidityDate: items?.bookingValidityDate,
      pickupStatus: pickupStatuses,
      action: actions,
    };
    return updatedData;
  };

  const data = [
    {
      bookingID: "0000001",
      companyName: "Farrel Kurniawan",
      portOfLoading: "Los Angeles, USA",
      portOfDischarge: "Rotterdam, Netherlands",
      bookingValidityDate: "11/10/25",
      pickupStatus: "Processing",
    },
    {
      bookingID: "0000002",
      companyName: "Dimas Kamal",
      portOfLoading: "Los Angeles, USA",
      portOfDischarge: " Netherlands",
      bookingValidityDate: "11/10/25",
      pickupStatus: "Collected",
    },
    {
      bookingID: "0000003",
      companyName: "Farrel Kurniawan",
      portOfLoading: "Los Angeles, USA",
      portOfDischarge: "Rotterdam",
      bookingValidityDate: "11/10/25",
      pickupStatus: "Processing",
    },
    {
      bookingID: "0000004",
      companyName: "Farrel Kurniawan",
      portOfLoading: "Los Angeles, USA",
      portOfDischarge: " Netherlands",
      bookingValidityDate: "11/10/25",
      pickupStatus: "Collected",
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
      <div className="flex justify-between p-3 border-b border-b-grey-ab-50 items-center">
        <div className="w-[60%] flex gap-4 items-center">
          <p className="text-lg font-semibold text-grey-ab-900 text-nowrap">
            Shipment Updates List
          </p>
          <GroupField
            label={""}
            type={""}
            placeholder={"Search"}
            name={""}
            value={""}
            onChange={function (
              e: React.ChangeEvent<
                HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
              >
            ): void {
              throw new Error(e + "Function not implemented.");
            }}
            error={false}
            errorMessage={""}
            rightIcon={<SearchIcon color="#6A6A6A" />}
            parentStyle="w-[40%]"
          />
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

      {/* table */}
      <div className="py-1 px-2">
        <CustomTable
          columns={columns}
          rows={rows}
          isCheckbox={true}
          onCheckedRowsChange={handleCheckedRowsChange}
        />
      </div>

      {/* pagination */}
      <div className="px-3 py-4 flex justify-between items-center rounded-b-xs">
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

export default ContainerPickUp;
