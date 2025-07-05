import React, { useCallback, useEffect, useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {
  AddIcon,
  SearchIcon,
  ExcelIcon,
  EyeOpenIcon,
  SendIcon,
} from "../../../components/icons/Icons";
import SuccessButton from "../../../components/buttons/SuccessButton";
import GroupField from "../../../components/groupField/GroupField";
import CustomPagination from "../../../components/pagination/CustomPagination";
import CustomTable from "../../../components/table/CustomTable";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Link } from "react-router-dom";

interface RowData {
  id: string | number;
  depotName: string | React.ReactNode;
  depotLocation: string | React.ReactNode;
  primaryContact: string | React.ReactNode;
  email: string | React.ReactNode;
  mobileNumber: string | React.ReactNode;
  action: React.ReactNode;
}

const columns: any[] = [
  { id: "depotName", label: "Depot Name" },
  { id: "depotLocation", label: "Depot Location" },
  { id: "primaryContact", label: "Primary Contact" },
  { id: "email", label: "Email" },
  { id: "mobileNumber", label: "Mobile Number" },
  { id: "action", label: "Action", align: "center" },
];
const EmptyDepotList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<RowData[]>([]);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);

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
    const { id } = items;
    const actions = (
      <div className="px-2 py-1 gap-2 flex justify-center items-center font-semibold">
        <Link
          className="w-6 h-6 rounded flex justify-center items-center bg-blue cursor-pointer"
          to={`/registration-empty-depot/details/${id}`}
        >
          <EyeOpenIcon size={16} color="#fdfdfd" />
        </Link>
        <div className="w-6 h-6 rounded flex justify-center items-center bg-success-600 cursor-pointer">
          <SendIcon size={16} color="#fdfdfd" />
        </div>
      </div>
    );

    const updatedData = {
      id: id,
      depotName: items?.depotName,
      depotLocation: items?.depotLocation,
      primaryContact: items?.primaryContact,
      email: items?.email,
      mobileNumber: items?.mobileNumber,
      action: actions,
    };

    return updatedData;
  };

  const data = [
    {
      depotName: "MSC Shipping",
      depotLocation: "Chennai, India",
      primaryContact: "Varga Dóra",
      email: "ckctm12@gmail.com",
      mobileNumber: "(319) 555-0115",
    },
    {
      depotName: "DHL Logistics	",
      depotLocation: "Mumbai, India",
      primaryContact: "Surány Izabella",
      email: "ckctm12@gmail.com",
      mobileNumber: "(684) 555-0102",
    },
    {
      depotName: "UPS Freight	",
      depotLocation: "Mumbai, India",
      primaryContact: "Pásztor Kíra",
      email: "ckctm12@gmail.com",
      mobileNumber: "(629) 555-0129",
    },
    {
      depotName: "C.H. Robinson	",
      depotLocation: "Mumbai, India",
      primaryContact: "Surány Izabella",
      email: "ckctm12@gmail.com",
      mobileNumber: "(684) 555-0102",
    },
  ];
  const fetchData = useCallback(() => {
    const arr = data.map((items, index) => {
      return createData({ ...items, id: index });
    });
    setRows(arr);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="bg-white rounded">
      <div className="p-3 flex justify-between items-center text-grey-ab-900 ">
        <p className="text-lg font-semibold">Depot List</p>
        <Link to={"/registration-empty-depot/add"}>
          <PrimaryButton
            label={"Add New Depot"}
            size={""}
            variant={""}
            leftIcon={<AddIcon color="#fdfdfd" />}
          />
        </Link>
      </div>
      <div className="p-3 flex justify-between items-center text-grey-ab-900 border-y border-y-grey-ab-100 border-grey-ab-200">
        <GroupField
          label={""}
          type={""}
          placeholder={"Search"}
          name={""}
          value={""}
          onChange={() => {}}
          parentStyle="w-[25%]"
          error={false}
          rightIcon={<SearchIcon />}
          errorMessage={""}
        />
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
          onCheckedRowsChange={handleCheckedRowsChange}
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
    </div>
  );
};

export default EmptyDepotList;
