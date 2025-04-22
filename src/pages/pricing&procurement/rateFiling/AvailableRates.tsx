import React, { useCallback, useEffect, useState } from "react";
import BlueChip from "../../../components/chips/BlueChip";
import SecondaryChip from "../../../components/chips/SecondaryChip";
import GroupField from "../../../components/groupField/GroupField";
import {
  AddIcon,
  EditIcon,
  ExcelIcon,
  EyeOpenIcon,
  SearchIcon,
} from "../../../components/icons/Icons";
import { Link, useParams } from "react-router-dom";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import SuccessButton from "../../../components/buttons/SuccessButton";
import CustomTable from "../../../components/table/CustomTable";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import CustomPagination from "../../../components/pagination/CustomPagination";

interface RowData {
  id: string | number;
  carrierName: string | React.ReactNode;
  updatedDate: string | React.ReactNode;
  freightRate: string | React.ReactNode;
  localChargesTariff: string | React.ReactNode;
  validityDate: string | React.ReactNode;
  action: React.ReactNode;
}

const columns: any[] = [
  { id: "carrierName", label: "Carrier Name" },
  {
    id: "updatedDate",
    label: "Updated Date",
  },
  { id: "freightRate", label: "Freight Rate" },
  { id: "localChargesTariff", label: "Local Charges Tariff" },

  {
    id: "validityDate",
    label: "Validity Date",
    minWidth: "100px",
    align: "center",
  },

  {
    id: "action",
    label: "Action",
    align: "center",
  },
];

const AvailableRates: React.FC = () => {
  const isSeaFreight = false;
  const { enquiryId } = useParams();

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
      carrierName,
      updatedDate,
      freightRate,
      localChargesTariff,
      validityDate,
    } = items;
    // Define your actions or any other custom logic you need for each row
    const actions = (
      <div className="flex gap-3 items-center justify-center">
        <Link
          className="rounded bg-blue inline-block p-1"
          to={`/rate-filing/available-rates/${id}`}
        >
          <EditIcon color="#ffffff" size={16} />
        </Link>{" "}
        <Link
          className="rounded bg-grey-ab inline-block p-1"
          to={`/rate-filing/available-rates/${id}`}
        >
          <EyeOpenIcon color="#ffffff" size={16} />
        </Link>
      </div>
    );

    // Ensure all columns have a value (or a default) for each row.
    const updatedData = {
      id: id,
      carrierName,
      updatedDate,
      freightRate,
      localChargesTariff,
      validityDate,
      action: actions, // Actions will remain the same as you defined
    };

    return updatedData;
  };

  const data = [
    {
      carrierName: "MARESK",
      updatedDate: "2025-02-01",
      freightRate: "3000",
      localChargesTariff: "200",
      validityDate: "2025-02-01",
    },
    {
      carrierName: "HAPPG",
      updatedDate: "2025-02-01",
      freightRate: "250",
      localChargesTariff: "1000",
      validityDate: "2025-02-01",
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
      <div className="bg-grey-aw-50 px-3 py-2 flex flex-wrap items-end justify-between rounded">
        <DetailCard
          label={"Enquiry Number"}
          value={3233848}
          className="flex-col"
        />
        <DetailCard
          label={"Enquired Date"}
          value={3233848}
          className="flex-col"
        />
        <DetailCard
          label={"Transportation Mode"}
          value={
            isSeaFreight ? (
              <BlueChip label={"Sea Freight"} size={"m"} variant={"outline"} />
            ) : (
              <SecondaryChip
                label={"Air Freight"}
                size={"m"}
                variant={"outline"}
              />
            )
          }
          className="flex-col"
        />
        <DetailCard
          label={"Port of Loading"}
          value={"Los Angeles, USA"}
          className="flex-col"
        />
        <DetailCard
          label={"Port of Discharge "}
          value={"Rotterdam, Netherlands"}
          className="flex-col"
        />
        <DetailCard label={"Rates Available"} value={11} className="flex-col" />
      </div>
      <div className="bg-grey-aw-50 rounded  h-full">
        <div className="p-3 flex items-center justify-between border-b border-grey-ab-100">
          <div className="flex items-center gap-4">
            <p className="text-lg font-semibold">Available Rates</p>
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
          <div className="flex gap-4 items-center">
            <Link to={`/rate-filing/add/${enquiryId}`}>
              <PrimaryButton
                label={"Add Rate Filing"}
                size={"l"}
                variant={""}
                leftIcon={<AddIcon color="#ffffff" />}
              />
            </Link>
            <SuccessButton
              label={"Export"}
              size={"l"}
              variant={""}
              rightIcon={<ExcelIcon color="#ffffff" />}
            />
          </div>
        </div>

        {/* table section */}
        {rows.length > 0 ? (
          <>
            {" "}
            <CustomTable
              columns={columns}
              rows={rows}
              isCheckbox={true}
              onCheckedRowsChange={handleCheckedRowsChange}
            />
            {/* pagination */}
            <div className="px-3 py-4 flex justify-between items-center">
              <div className="text-xs text-grey-ab-200">
                Showing {currentPage * itemsPerPage - itemsPerPage + 1} to{" "}
                {currentPage *
                  (itemsPerPage > rows.length
                    ? rows.length
                    : itemsPerPage)}{" "}
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
        ) : (
          <>
            <div className="flex px-3 py-2 bg-grey-100 justify-around">
              <input type="checkbox" name="dummy" id="dummy" />
              {columns.map((column, index) => (
                <p
                  className="text-grey-ab-900 font-semibold text-center"
                  key={index}
                >
                  {column.label}
                </p>
              ))}
            </div>
            <div className="flex items-center justify-center  my-6">
              <div className="flex flex-col gap-3 justify-center items-center">
                <p className="text-grey-ab-200 text-sm">
                  To add new pricing details for this enquiry, simply click the
                  button below.
                </p>
                <Link to={`/rate-filing/add/${enquiryId}`}>
                  <PrimaryButton
                    label={"Add Rate Filing"}
                    size={"l"}
                    variant={"link"}
                    leftIcon={<AddIcon color="#2c398f" />}
                  />
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AvailableRates;

const DetailCard: React.FC<{
  label: string;
  value: string | number | React.ReactNode;
  className?: string;
  labelStyle?: string;
  valueStyle?: string;
}> = ({ label, value, className, labelStyle, valueStyle }) => {
  return (
    <div className={`flex ${className} gap-2`}>
      <p className={`text-xs font-semibold ${labelStyle}`}>{label}</p>
      <div className={`text-sm ${valueStyle}`}>{value}</div>
    </div>
  );
};
