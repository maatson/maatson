import React, { useCallback, useEffect, useState } from "react";
import GroupField from "../../../components/groupField/GroupField";
import {
  ExcelIcon,
  EyeOpenIcon,
  LocationIcon,
  SearchIcon,
} from "../../../components/icons/Icons";
import SuccessButton from "../../../components/buttons/SuccessButton";
import CustomPagination from "../../../components/pagination/CustomPagination";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import BlackButton from "../../../components/buttons/BlackButton";
import CustomTable from "../../../components/table/CustomTable";
import SecondaryChip from "../../../components/chips/SecondaryChip";
import SuccessChip from "../../../components/chips/SuccessChip";
import { Link } from "react-router-dom";

interface RowData {
  id: string | number;
  enquiryId: string | React.ReactNode;
  enquiryDate: string | React.ReactNode;
  portOfLoading: string | React.ReactNode;
  portOfDischarge: string | React.ReactNode;
  cargoType: string | React.ReactNode;
  status: string | React.ReactNode;
  carrierOffersCount: string | React.ReactNode;
  action: React.ReactNode;
}

const columns: any[] = [
  { id: "enquiryId", label: "Enquiry ID" },
  {
    id: "enquiryDate",
    label: "Enquired Date",
    minWidth: "180px",
  },
  { id: "portOfLoading", label: "Port of loading" },
  { id: "portOfDischarge", label: "Port of Discharge" },

  { id: "cargoType", label: "Cargo Type" },
  { id: "status", label: "Status", align: "center" },
  { id: "carrierOffersCount", label: "Carrier Rate Offers" },

  {
    id: "action",
    label: "Action",
    align: "center",
  },
];

const RateFillingEnquiryList: React.FC = () => {
  const [isSeaFreight, setSeaFreight] = useState<boolean>(true); //use for filtering

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);
  const [rows, setRows] = useState<RowData[]>([]);
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]); // Track selected row ids and export

  //   for handling selected rows ===> added in customTable props for onCheckedRowsChange
  const handleCheckedRowsChange = (newCheckedRows: (string | number)[]) => {
    setSelectedRows(newCheckedRows);
  };
  console.log(selectedRows, "selected rows");

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
      enquiryId,
      enquiryDate,
      portOfLoading,
      portOfDischarge,
      cargoType,
      status,
      carrierOffersCount,
    } = items;
    // Define your actions or any other custom logic you need for each row
    const actions = (
      <Link
        className="rounded bg-grey-ab inline-block "
        to={`/rate-filing-enquiry/rate-details/${id}`}
      >
        <BlackButton
          label={"View"}
          size={"s"}
          variant={""}
          rightIcon={<EyeOpenIcon color="#ffffff" size={16} />}
        />
      </Link>
    );

    const statusValue = (
      <div className="px-2 py-1 flex items-center font-semibold text-sm justify-center">
        {status ? (
          <SuccessChip label={"updated"} size={"m"} variant={"fill"} />
        ) : (
          <SecondaryChip label={"Pending"} size={"m"} variant={"fill"} />
        )}
      </div>
    );

    // Ensure all columns have a value (or a default) for each row.
    const updatedData = {
      id: id,
      enquiryId,
      enquiryDate,
      portOfLoading,
      portOfDischarge,
      cargoType,
      status: statusValue,
      carrierOffersCount,
      action: actions, // Actions will remain the same as you defined
    };

    return updatedData;
  };

  const data = [
    {
      enquiryId: "ENQ001",
      enquiryDate: "2025-02-01",
      portOfLoading: "chennai",
      portOfDischarge: "russia",
      cargoType: "fcl",
      status: true,
      carrierOffersCount: "5",
    },
    {
      enquiryId: "ENQ002",
      enquiryDate: "2025-02-01",
      portOfLoading: "russia",
      portOfDischarge: "columbo",
      cargoType: "lcl",
      status: false,
      carrierOffersCount: "6",
    },
    {
      enquiryId: "ENQ003",
      enquiryDate: "2025-02-01",
      portOfLoading: "columbo ",
      portOfDischarge: "austria",
      cargoType: "bulk",
      status: false,
      carrierOffersCount: "0",
    },
    {
      enquiryId: "ENQ004",
      enquiryDate: "",
      portOfLoading: "new york",
      portOfDischarge: "los angels",
      cargoType: "hcl",
      status: true,
      carrierOffersCount: "4",
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
      <div className="flex items-center text-sm">
        <div className="flex items-center gap-2 bg-grey-50 px-2 py-2 rounded-sm font-semibold ">
          <button
            className={`${
              isSeaFreight ? "bg-primary-900 text-grey-aw-50" : ""
            } px-4 py-2 rounded transition-all duration-500`}
            onClick={() => setSeaFreight(true)}
          >
            Sea Freight
          </button>
          <button
            className={`${
              !isSeaFreight ? "bg-primary-900 text-grey-aw-50" : ""
            } px-4 py-2 rounded transition-all duration-500`}
            onClick={() => setSeaFreight(false)}
          >
            Air Freight
          </button>
        </div>
      </div>
      <div className="bg-grey-aw-50 rounded  h-full">
        <div className="p-3 flex items-center justify-between border-b border-grey-ab-100">
          <div className="flex items-center gap-4">
            <p className="text-lg font-semibold">Rate Filing (Enquiry) List</p>
            <GroupField
              label={""}
              type={"text"}
              placeholder={"Search"}
              name={"search"}
              value={""}
              onChange={() => {}}
              error={false}
              errorMessage={""}
              rightIcon={<SearchIcon color="#6A6A6A" />}
            />
          </div>
          <SuccessButton
            label={"Export"}
            size={"l"}
            variant={""}
            rightIcon={<ExcelIcon color="#ffffff" />}
          />
        </div>

        {/* table section */}
        <div className="flex flex-col gap-4 px-4 py-2">
          <p className="text-lg font-semibold">Schedule</p>
          <div className="flex items-end gap-4">
            <GroupField
              label={"Port of Loading"}
              type={"text"}
              placeholder={"Enter POL"}
              name={"pol"}
              value={""}
              onChange={() => {}}
              error={false}
              errorMessage={""}
              leftIcon={<LocationIcon color="#2c398f" />}
            />{" "}
            <GroupField
              label={"Port of Discharge"}
              type={"text"}
              placeholder={"Enter POD"}
              name={"pod"}
              value={""}
              onChange={() => {}}
              error={false}
              errorMessage={""}
              leftIcon={<LocationIcon color="#2c398f" />}
            />{" "}
            <GroupField
              label={"Price Validity"}
              type={"date"}
              placeholder={"Search"}
              name={"search"}
              value={""}
              onChange={() => {}}
              error={false}
              errorMessage={""}
              parentStyle="basis-1/4"
            />
            <BlackButton label={"Search"} size={"l"} variant={""} />
          </div>
          <CustomTable
            columns={columns}
            rows={rows}
            isCheckbox={true}
            onCheckedRowsChange={handleCheckedRowsChange}
          />
        </div>
        {/* pagination */}
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
      </div>
    </>
  );
};

export default RateFillingEnquiryList;
