import React, { useCallback, useEffect, useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {
  AddIcon,
  SearchIcon,
  ExcelIcon,
  UserIcon,
} from "../../../components/icons/Icons";
import SuccessButton from "../../../components/buttons/SuccessButton";
import GroupField from "../../../components/groupField/GroupField";
import CustomPagination from "../../../components/pagination/CustomPagination";
import CustomTable from "../../../components/table/CustomTable";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import SuccessChip from "../../../components/chips/SuccessChip";
import ErrorChip from "../../../components/chips/ErrorChip";
import BlackButton from "../../../components/buttons/BlackButton";
import { Link } from "react-router-dom";

// Define pagination model if needed

interface RowData {
  id: string | number;
  companyName: string | React.ReactNode;
  username: string | React.ReactNode;
  mobileNumber: string | React.ReactNode;
  registerDate: string | React.ReactNode;
  accountStatus: string | React.ReactNode;
  country: string | React.ReactNode;
  email: string | React.ReactNode;
  lastLogin: string | React.ReactNode;
  action: React.ReactNode; // If you have any actions like buttons or components
}

const columns: any[] = [
  {
    id: "companyName",
    label: "Company Name",
    minWidth: "180px",
  },
  { id: "username", label: "User Name" },
  { id: "mobileNumber", label: "Mobile Number" },
  {
    id: "registerDate",
    label: "Registered Date",
  },
  { id: "accountStatus", label: "Account Status", align: "center" },
  { id: "country", label: "Country" },
  { id: "email", label: "Email" },
  { id: "lastLogin", label: "Last Login" },

  {
    id: "action",
    label: "Action",
    align: "center",
  },
];

const UserRegisterList: React.FC = () => {
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
      companyName,
      username,
      mobileNumber,
      registerDate,
      accountStatus,
      country,
      email,
      lastLogin,
    } = items;
    // Define your actions or any other custom logic you need for each row
    const actions = (
      <div className="px-2 py-1 gap-2 flex justify-center items-center font-semibold">
        <Link to={"/registration-user/details"}>
          {" "}
          <BlackButton
            label={"Profile"}
            size={"s"}
            variant={""}
            rightIcon={<UserIcon size={16} color="#fdfdfd" />}
          />
        </Link>
      </div>
    );

    let accountStatusText: string | React.ReactNode = "Unknown"; // Default status
    if (accountStatus) {
      switch (accountStatus) {
        case "active":
          accountStatusText = (
            <div className="px-2 py-1 flex items-center font-semibold text-sm justify-center">
              <SuccessChip label={"Active"} size={"m"} variant={"outline"} />
            </div>
          );
          break;
        case "inactive":
          accountStatusText = (
            <div className="px-2 py-1 flex items-center font-semibold text-sm justify-center">
              <ErrorChip label={"In Active"} size={"m"} variant={"outline"} />
            </div>
          );
          break;

        // Add more cases as needed
        default:
          accountStatusText = "Unknown";
          break;
      }
    }

    // Ensure all columns have a value (or a default) for each row.
    const updatedData = {
      id: id,
      companyName: companyName || "nil", // Default value if not available
      username: username, // Default value if not available
      mobileNumber: mobileNumber, // Default value if not available
      registerDate: registerDate || "-", // Default value if not available
      accountStatus: accountStatusText || "Unknown", // Default value if not available
      country: country, // Default value if not available
      email: email || "-", // Default value if not available
      lastLogin: lastLogin || "-", // Default value if not available
      action: actions, // Actions will remain the same as you defined
    };

    return updatedData;
  };

  const data = [
    {
      companyName: "Emp001",
      username: "John Doe",
      accountStatus: "active",
      mobileNumber: "Manager",
      email: "Sales",
      country: "New York",
      registerDate: "2025-02-01",
      lastLogin: "6:00 PM",
    },
    {
      companyName: "Emp002",
      username: "",
      accountStatus: "inactive",
      mobileNumber: "Developer",
      email: "Tech",
      country: "San Francisco",
      registerDate: "2025-02-01",
      lastLogin: "6:15 PM",
    },
    {
      companyName: "Emp003",
      username: "Pavi ",
      accountStatus: "active",
      mobileNumber: "senior Developer",
      email: "Tech",
      country: "San Francisco",
      registerDate: "2025-02-01",
      lastLogin: "",
    },
    {
      companyName: "Emp004",
      username: "Janani ",
      accountStatus: "inactive",
      mobileNumber: "junior Developer",
      email: "Tech",
      country: "San Francisco",
      registerDate: "",
      lastLogin: "6:15 PM",
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
    <div className="bg-white rounded">
      <div className="p-3 flex justify-between items-center text-grey-ab-900 ">
        <p className="text-lg font-semibold">User List</p>
        <Link to={"/registration-user/add"}>
          <PrimaryButton
            label={"Add New User"}
            size={""}
            variant={""}
            leftIcon={<AddIcon color="#fdfdfd" />}
          />
        </Link>
      </div>
      <div className="p-3 flex justify-between items-center text-grey-ab-900 border-y border-grey-ab-200">
        <div className="flex gap-4 items-center">
          <GroupField
            label={""}
            type={""}
            placeholder={"Search"}
            name={""}
            value={""}
            onChange={() => {}}
            parentStyle="max-w-[320px] w-full min-w-[180px]"
            error={false}
            rightIcon={<SearchIcon />}
            errorMessage={""}
          />
          <GroupField
            label={""}
            type={"select"}
            placeholder={"Account Status"}
            name={""}
            value={""}
            size="s"
            parentStyle="max-w-[180px] w-full min-w-[180px]"
            onChange={() => {}}
            error={false}
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
          {currentPage * itemsPerPage} of {rows.length} Entries
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

export default UserRegisterList;
