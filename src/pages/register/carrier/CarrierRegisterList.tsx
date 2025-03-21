import React, { useCallback, useEffect, useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {
  AddIcon,
  ExcelIcon,
  EyeOpenIcon,
  SearchIcon,
  SendIcon,
} from "../../../components/icons/Icons";
import SuccessButton from "../../../components/buttons/SuccessButton";
import GroupField from "../../../components/groupField/GroupField";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import CustomPagination from "../../../components/pagination/CustomPagination";
import CustomTable from "../../../components/table/CustomTable";
import BlueChip from "../../../components/chips/BlueChip";
import SecondaryChip from "../../../components/chips/SecondaryChip";
import SuccessChip from "../../../components/chips/SuccessChip";
import { NavLink, useNavigate } from "react-router-dom";

interface RowData {
  id: string | number;
  carrierName: string;
  carrierCode: string;
  modeOfTransport: React.ReactNode;
  operationalSince: string | React.ReactNode;
  countryOfOperation: string | React.ReactNode;
  primaryContactName: string;
  action: React.ReactNode;
}

const columns: any[] = [
  { id: "carrierName", label: "Carrier Name", minWidth: 160 },
  { id: "carrierCode", label: "Carrier Code", minWidth: 140 },
  {
    id: "modeOfTransport",
    label: "Mode of Transport",
    minWidth: 160,
    align: "center",
  },
  {
    id: "operationalSince",
    label: "Operational Since",
    minWidth: 130,
    align: "center",
  },
  {
    id: "countryOfOperation",
    label: "Country of Operation",
    minWidth: 180,
    align: "center",
  },
  { id: "primaryContactName", label: "Primary Contact Name", minWidth: 140 },
  { id: "action", label: "Action", minWidth: 120, align: "center" },
];

const CarrierRegisterList: React.FC = () => {
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
    const { id, modeOfTransport } = items;
    const modeOfTransports =
      modeOfTransport.toLowerCase() === "sea freight" ? (
        <BlueChip label={modeOfTransport} size="m" variant="outline" />
      ) : modeOfTransport.toLowerCase() === "land freight" ? (
        <SuccessChip label={modeOfTransport} size="m" variant="outline" />
      ) : (
        <SecondaryChip label={modeOfTransport} size="m" variant="outline" />
      );

    const actions = (
      <div className="flex justify-center gap-[10px] py-1 px-2">
        <div
          className="rounded-xs p-1 bg-blue cursor-pointer"
          onClick={handleEyeIcon}
        >
          <EyeOpenIcon size={16} color="#FDFDFD" />
        </div>
        <div className="rounded-xs p-1 bg-success-600 cursor-pointer">
          <SendIcon size={16} color="#FCFCFC" />
        </div>
      </div>
    );

    const updatedData = {
      id: id,
      carrierName: items?.carrierName,
      carrierCode: items?.carrierCode,
      modeOfTransport: modeOfTransports,
      operationalSince: items?.operationalSince,
      countryOfOperation: items?.countryOfOperation,
      primaryContactName: items?.primaryContactName,
      action: actions,
    };
    return updatedData;
  };

  const data = [
    {
      carrierName: "MSC Shipping",
      carrierCode: "MSC-001",
      modeOfTransport: "Sea Freight",
      operationalSince: "2020",
      countryOfOperation: "USA",
      primaryContactName: "Varga Dóra",
    },
    {
      carrierName: "DHL Logistics	",
      carrierCode: "DHL",
      modeOfTransport: "Land Freight",
      operationalSince: "2008",
      countryOfOperation: "Greece",
      primaryContactName: "Halász Emese",
    },
    {
      carrierName: "FedEx Freight	",
      carrierCode: "FDX",
      modeOfTransport: "Air Freight",
      operationalSince: "2017",
      countryOfOperation: "Canada",
      primaryContactName: "Surány Izabella",
    },
    {
      carrierName: "MSC Shipping",
      carrierCode: "MSC-001",
      modeOfTransport: "Sea Freight",
      operationalSince: "2020",
      countryOfOperation: "USA",
      primaryContactName: "Varga Dóra",
    },
    {
      carrierName: "DHL Logistics	",
      carrierCode: "DHL",
      modeOfTransport: "Land Freight",
      operationalSince: "2008",
      countryOfOperation: "Greece",
      primaryContactName: "Halász Emese",
    },
    {
      carrierName: "FedEx Freight	",
      carrierCode: "FDX",
      modeOfTransport: "Air Freight",
      operationalSince: "2017",
      countryOfOperation: "Canada",
      primaryContactName: "Surány Izabella",
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

  const navigate = useNavigate();
  const handleEyeIcon = () => {
    navigate("/registration-carrier/carrier-details/profile");
  };

  return (
    <>
      <div className="bg-grey-aw-50 rounded-xs shadow-lg">
        {/* top1 */}
        <div className="rounded-t-xs flex justify-between py-4 px-3 items-center">
          <p className="text-lg font-semibold text-grey-ab-900">Carrier List</p>
          <NavLink to={"/registration-carrier/register-form"}>
            <PrimaryButton
              label={"Add New Carrier"}
              size={"l"}
              variant={"primary"}
              leftIcon={<AddIcon color="#FCFCFC" />}
            />
          </NavLink>
        </div>

        {/* top2 */}
        <div className="border-y p-3 flex justify-between items-center border-y-grey-ab-200">
          <div className="flex gap-4 items-center flex-wrap">
            <GroupField
              label={""}
              type={"text"}
              placeholder={"Search"}
              name={"search"}
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              rightIcon={<SearchIcon color="#6A6A6A" />}
              parentStyle="w-[280px]"
            />
            <GroupField
              label={""}
              type={"select"}
              placeholder={"Transportation Mode"}
              name={""}
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              size="s"
              parentStyle="w-[220px]"
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
        <div className="py-1 px-3">
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
      </div>
    </>
  );
};

export default CarrierRegisterList;
