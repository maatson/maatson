import React, { useCallback, useEffect, useState } from "react";
import {
  ContainerIcon,
  ExcelIcon,
  InfoIcon,
  SearchIcon,
} from "../../../../components/icons/Icons";
import GroupField from "../../../../components/groupField/GroupField";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import SuccessButton from "../../../../components/buttons/SuccessButton";
import CustomTable from "../../../../components/table/CustomTable";
import CustomPagination from "../../../../components/pagination/CustomPagination";
import BlueChip from "../../../../components/chips/BlueChip";
import SecondaryChip from "../../../../components/chips/SecondaryChip";

interface RowData {
  id: string | number;
  containerNumber: string;
  containerType: string;
  condition: string | React.ReactNode;
  depotStatus: string | React.ReactNode;
  depotDate: string;
}

const columns: any[] = [
  { id: "containerNumber", label: "Container Number", minWidth: 140 },
  { id: "containerType", label: "Container Type", minWidth: 180 },
  { id: "condition", label: "Condition", minWidth: 100 },
  { id: "depotStatus", label: "Depot Status", align: "center" },
  { id: "depotDate", label: "Depot Date", align: "center" },
];

const EmptyDepotLiveActivity: React.FC = () => {
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
    const { id, condition, repairStatus, depotStatus } = items;

    const conditionValue = (
      <div className="flex gap-3 items-center">
        <p>{condition}</p>
        {condition.toLowerCase() === "asis" && (
          <div className="relative group">
            <div>
              <InfoIcon color="#0091FF" />
            </div>

            {/* Tooltip appears only on hover */}
            <div
              className={`absolute left-7 -bottom-3 z-10 hidden group-hover:flex flex-col gap-1 p-2 rounded-sm border bg-grey-aw-50 text-nowrap shadow-md
          ${
            repairStatus.toLowerCase() === "approved"
              ? "border-success-700"
              : repairStatus.toLowerCase() === "pending"
              ? "border-warning-600"
              : "border-error-600"
          }`}
            >
              <p className="text-2xs text-grey-ab-800">Repair Status</p>
              <p
                className={`text-xs font-bold ${
                  repairStatus.toLowerCase() === "approved"
                    ? "text-success-700"
                    : repairStatus.toLowerCase() === "pending"
                    ? "text-warning-600"
                    : "text-error-600"
                }`}
              >
                {repairStatus}
              </p>
            </div>
          </div>
        )}
      </div>
    );
    const depotStatusValue = (
      <>
        {depotStatus.toLowerCase() === "depot-in" ? (
          <BlueChip label={depotStatus} size={"xl"} variant={"mix"} />
        ) : (
          <SecondaryChip label={depotStatus} size={"xl"} variant={"mix"} />
        )}
      </>
    );

    const updatedData = {
      id: id,
      containerNumber: items?.containerNumber,
      containerType: items?.containerType,
      condition: conditionValue,
      depotStatus: depotStatusValue,
      depotDate: items?.depotDate,
    };
    return updatedData;
  };

  const data = [
    {
      containerNumber: "10900",
      containerType: "20’ft Open Top",
      condition: "ASIS",
      repairStatus: "Pending",
      depotStatus: "Depot-In",
      depotDate: "8/15/2017",
    },
    {
      containerNumber: "10322",
      containerType: "40’ft Flat Rack",
      condition: "IICL",
      depotStatus: "Depot-Out",
      depotDate: "8/15/2017",
    },
    {
      containerNumber: "71090",
      containerType: "20’ft Open Top",
      condition: "ASIS",
      repairStatus: "Approved",
      depotStatus: "Depot-In",
      depotDate: "8/15/2017",
    },
    {
      containerNumber: "93029",
      containerType: "20’ft Dry Container",
      condition: "Scrap",
      depotStatus: "Depot-Out",
      depotDate: "8/15/2017",
    },
    {
      containerNumber: "71090",
      containerType: "20’ft Open Top",
      condition: "ASIS",
      repairStatus: "Awaiting",
      depotStatus: "Depot-In",
      depotDate: "8/15/2017",
    },
  ];

  const fetchData = useCallback(() => {
    const arr = data.map((items, index) => {
      return createData({ ...items, id: index }); // Ensure createData returns the transformed data
    });
    setRows(arr);
  }, []); // Empty dependency array ensures this function is only created once

  useEffect(() => {
    fetchData(); // Call fetchData when the component mounts
  }, [fetchData]);
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <div className="flex flex-col gap-2 p-4 rounded-md shadow-md bg-grey-aw-50 w-[25%]">
            <div className="flex gap-2 items-center">
              <div className="p-[6px] rounded-xs bg-blue-50">
                <ContainerIcon size={20} color="#0084E8" />
              </div>
              <p className=" font-bold text-grey-ab text-nowrap">
                Total Container Available
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <p className="text-h3 text-blue font-bold">160</p>
              <p className="text-h4 text-grey-ab-400 ">Containers</p>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col gap-2 p-4 rounded-md shadow-md bg-grey-aw-50 w-[37%]">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <div className="p-[6px] rounded-xs bg-blue-50">
                  <ContainerIcon size={20} color="#0084E8" />
                </div>
                <p className=" font-bold text-grey-ab text-nowrap">
                  Total Container -In
                </p>
              </div>
              <GroupField
                label={""}
                type={"select"}
                placeholder={"Today"}
                name={""}
                value={"Today"}
                options={[
                  { label: "Today", value: "Today" },
                  { label: "This Month", value: "This Month" },
                ]}
                optionFontSize="12px"
                onChange={() => {}}
                error={false}
                errorMessage={""}
                size="s"
                parentStyle="w-[30%]"
              />
            </div>
            <div className="flex gap-3 items-center">
              <p className="text-h4 text-blue font-bold">2000</p>
              <p className="text-h6 text-grey-ab-400 ">Containers</p>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col gap-2 p-4 rounded-md shadow-md bg-grey-aw-50 w-[37%]">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <div className="p-[6px] rounded-xs bg-blue-50">
                  <ContainerIcon size={20} color="#0084E8" />
                </div>
                <p className=" font-bold text-grey-ab text-nowrap">
                  Total Container -Out
                </p>
              </div>
              <GroupField
                label={""}
                type={"select"}
                placeholder={"Today"}
                name={""}
                value={"This Month"}
                options={[
                  { label: "Today", value: "Today" },
                  { label: "This Month", value: "This Month" },
                ]}
                optionFontSize="12px"
                onChange={() => {}}
                error={false}
                errorMessage={""}
                size="s"
                parentStyle="w-[30%]"
              />
            </div>
            <div className="flex gap-3 items-center">
              <p className="text-h4 text-blue font-bold">2000</p>
              <p className="text-h6 text-grey-ab-400 ">Containers</p>
            </div>
          </div>
        </div>

        <div className="grid gap-3 grid-cols-2 ">
          <div className="flex flex-col gap-3 p-4 bg-grey-aw-50 shadow-md rounded-md">
            <div className="flex gap-3 items-center">
              <div className="p-[6px] rounded-xs bg-warning-50">
                <ContainerIcon size={20} color="#E8891C" />
              </div>
              <p className="text-lg font-bold text-grey-ab">Container -ASIS</p>
            </div>
            <div className="flex gap-3 items-center">
              <p className="text-warning-600 text-h3 font-bold">1600</p>
              <p className="text-h4 text-grey-ab-400">Containers</p>
            </div>

            <div className="flex gap-3 text-nowrap overflow-auto custom-scrollbar-small-transparent ">
              <div className="flex flex-col gap-1 p-2 rounded-sm  border border-warning-600 text-warning-600">
                <p className="text-xs ">40’ft Open Top</p>
                <p className="text-sm font-bold">560</p>
              </div>
              <div className="flex flex-col gap-1 p-2 rounded-sm  border border-warning-600 text-warning-600">
                <p className="text-xs ">40’ft High Cube (HC)</p>
                <p className="text-sm font-bold">560</p>
              </div>
              <div className="flex flex-col gap-1 p-2 rounded-sm  border border-warning-600 text-warning-600">
                <p className="text-xs ">20’ft Dry Container</p>
                <p className="text-sm font-bold">560</p>
              </div>
              <div className="flex flex-col gap-1 p-2 rounded-sm  border border-warning-600 text-warning-600">
                <p className="text-xs ">20’ft Dry Container</p>
                <p className="text-sm font-bold">560</p>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col gap-3 p-4 bg-grey-aw-50 shadow-md rounded-md">
            <div className="flex gap-3 items-center">
              <div className="p-[6px] rounded-xs bg-success-50">
                <ContainerIcon size={20} color="#009F41" />
              </div>
              <p className="text-lg font-bold text-grey-ab">
                Container -AV(Cargo worthy)
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <p className="text-success-700 text-h3 font-bold">1600</p>
              <p className="text-h4 text-grey-ab-400">Containers</p>
            </div>

            <div className="flex gap-3 text-nowrap overflow-auto custom-scrollbar-small-transparent ">
              <div className="flex flex-col gap-1 p-2 rounded-sm  border border-success-700 text-success-700">
                <p className="text-xs ">40’ft Open Top</p>
                <p className="text-sm font-bold">560</p>
              </div>
              <div className="flex flex-col gap-1 p-2 rounded-sm  border border-success-700 text-success-700">
                <p className="text-xs ">40’ft High Cube (HC)</p>
                <p className="text-sm font-bold">560</p>
              </div>
              <div className="flex flex-col gap-1 p-2 rounded-sm  border border-success-700 text-success-700">
                <p className="text-xs ">20’ft Dry Container</p>
                <p className="text-sm font-bold">560</p>
              </div>
              <div className="flex flex-col gap-1 p-2 rounded-sm  border border-success-700 text-success-700">
                <p className="text-xs ">20’ft Dry Container</p>
                <p className="text-sm font-bold">560</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* table */}
      <div className="flex flex-col bg-grey-aw-50 rounded-xs">
        <div className="flex justify-between p-3 border-b border-b-grey-ab-50 items-center ">
          <div className="w-[70%] flex gap-4 items-center">
            <p className="text-lg font-semibold text-grey-ab-900 text-nowrap">
              Container Activity List
            </p>
            <GroupField
              label={""}
              type={""}
              placeholder={"Search"}
              name={""}
              value={""}
              onChange={() => {}}
              error={false}
              errorMessage={""}
              rightIcon={<SearchIcon color="#6A6A6A" />}
              parentStyle="w-[35%]"
            />
            <GroupField
              label={""}
              type={"select"}
              placeholder={"Depot Status"}
              name={""}
              value={""}
              onChange={() => {}}
              error={false}
              errorMessage={""}
              parentStyle="w-[20%]"
              size="s"
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
      </div>
    </>
  );
};

export default EmptyDepotLiveActivity;
