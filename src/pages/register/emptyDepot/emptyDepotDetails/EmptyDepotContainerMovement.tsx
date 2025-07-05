import React, { useCallback, useEffect, useState } from "react";
import {
  ContainerIcon,
  ExcelIcon,
  SearchIcon,
} from "../../../../components/icons/Icons";
import GroupField from "../../../../components/groupField/GroupField";
import SuccessButton from "../../../../components/buttons/SuccessButton";
import CustomTable from "../../../../components/table/CustomTable";
import CustomPagination from "../../../../components/pagination/CustomPagination";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface RowData {
  id: string | number;
  releaseRefNo: string;
  containerType: string;
  condition: string;
  quantity: string;
  releaseDate: string;
}

const columns: any[] = [
  { id: "releaseRefNo", label: "Release Ref No", minWidth: 140 },
  { id: "containerType", label: "Container Type", minWidth: 180 },
  { id: "condition", label: "Condition", minWidth: 180 },
  { id: "quantity", label: "Quantity" },
  { id: "releaseDate", label: "Release Date" },
];

const EmptyDepotContainerMovement: React.FC = () => {
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
    const { id } = items;

    const updatedData = {
      id: id,
      releaseRefNo: items?.releaseRefNo,
      containerType: items?.containerType,
      condition: items?.condition,
      quantity: items?.quantity,
      releaseDate: items?.releaseDate,
    };
    return updatedData;
  };

  const data = [
    {
      releaseRefNo: "10900",
      containerType: "20’ft Open Top",
      condition: "ASIS",
      quantity: "10",
      releaseDate: "8/15/2017",
    },
    {
      releaseRefNo: "10322",
      containerType: "40’ft Flat Rack",
      condition: "IICL",
      quantity: "10",
      releaseDate: "8/15/2017",
    },
    {
      releaseRefNo: "71090",
      containerType: "20’ft Open Top",
      condition: "ASIS",
      quantity: "10",
      releaseDate: "8/15/2017",
    },
    {
      releaseRefNo: "93029",
      containerType: "20’ft Dry Container",
      condition: "Scrap",
      quantity: "10",
      releaseDate: "8/15/2017",
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
  }, [fetchData]); // Only re-run fetchData if fetchData changes
  return (
    <>
      <div className="flex gap-3 ">
        <div className="flex flex-col gap-0 justify-between p-4 rounded-md shadow-md bg-grey-aw-50 w-[25%]">
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
        <div className="flex flex-col gap-3 p-4 rounded-md shadow-md bg-grey-aw-50 w-[37%]">
          <div className="flex gap-2 items-center">
            <div className="p-[6px] rounded-xs bg-tertiary-50">
              <ContainerIcon size={20} color="#255771" />
            </div>
            <p className=" font-bold text-grey-ab"> Containers by Type</p>
          </div>
          <div className="flex gap-3 text-nowrap overflow-auto custom-scrollbar-small-transparent ">
            <div className="flex flex-col gap-1 p-2 rounded-sm  border border-tertiary-600 text-tertiary-600">
              <p className="text-xs ">40’ft Open Top</p>
              <p className="text-sm font-bold">560</p>
            </div>
            <div className="flex flex-col gap-1 p-2 rounded-sm  border border-tertiary-600 text-tertiary-600">
              <p className="text-xs ">40’ft High Cube (HC)</p>
              <p className="text-sm font-bold">560</p>
            </div>
            <div className="flex flex-col gap-1 p-2 rounded-sm  border border-tertiary-600 text-tertiary-600">
              <p className="text-xs ">20’ft Dry Container</p>
              <p className="text-sm font-bold">560</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-3 p-4 rounded-md shadow-md bg-grey-aw-50 w-[37%]">
          <div className="flex gap-2 items-center">
            <div className="p-[6px] rounded-xs bg-success-50">
              <ContainerIcon size={20} color="#009F41" />
            </div>
            <p className=" font-bold text-grey-ab"> Container Conditions</p>
          </div>
          <div className="flex gap-3 text-nowrap overflow-auto custom-scrollbar-small-transparent ">
            <div className="flex flex-col gap-1 p-2 rounded-sm  border border-success-700 text-success-700">
              <p className="text-xs ">ASIS</p>
              <p className="text-sm font-bold">1000</p>
            </div>
            <div className="flex flex-col gap-1 p-2 rounded-sm  border border-success-700 text-success-700">
              <p className="text-xs ">IICL</p>
              <p className="text-sm font-bold">560</p>
            </div>
            <div className="flex flex-col gap-1 p-2 rounded-sm  border border-success-700 text-success-700">
              <p className="text-xs ">Scrap</p>
              <p className="text-sm font-bold">560</p>
            </div>
            <div className="flex flex-col gap-1 p-2 rounded-sm  border border-success-700 text-success-700">
              <p className="text-xs ">WWT</p>
              <p className="text-sm font-bold">560</p>
            </div>
            <div className="flex flex-col gap-1 p-2 rounded-sm  border border-success-700 text-success-700">
              <p className="text-xs ">Cargo Worthy</p>
              <p className="text-sm font-bold">560</p>
            </div>
            <div className="flex flex-col gap-1 p-2 rounded-sm  border border-success-700 text-success-700">
              <p className="text-xs ">Scrap</p>
              <p className="text-sm font-bold">560</p>
            </div>
          </div>
        </div>
      </div>
      {/* table */}
      <div className="flex flex-col bg-grey-aw-50 rounded-xs">
        <div className="flex justify-between p-3 border-b border-b-grey-ab-50 items-center ">
          <div className="w-[70%] flex gap-4 items-center">
            <p className="text-lg font-semibold text-grey-ab-900 text-nowrap">
              Container Collection List
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
      </div>
    </>
  );
};

export default EmptyDepotContainerMovement;
