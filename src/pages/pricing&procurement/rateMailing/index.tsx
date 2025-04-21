import React, { useCallback, useEffect, useState } from "react";
import PageHeader from "../../../components/header/PageHeader";
import GroupField from "../../../components/groupField/GroupField";
import {
  ExcelIcon,
  LocationIcon,
  SearchIcon,
  SendIcon,
} from "../../../components/icons/Icons";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import SuccessButton from "../../../components/buttons/SuccessButton";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import GreyButton from "../../../components/buttons/GreyButton";
import CustomTable from "../../../components/table/CustomTable";
import CustomPagination from "../../../components/pagination/CustomPagination";
import BlueChip from "../../../components/chips/BlueChip";
import ComposeEmail from "./ComposeEmail";
import { useLocation } from "react-router-dom";

interface RowData {
  id: string | number;
  carrierName: string;
  companyEmail: string;
  contactPerson: string;
  countryOfOperation: string | React.ReactNode;
  email: string;
  action: React.ReactNode;
}

interface CountryHoverCellProps {
  countries: string[];
}

interface BreadCrumsProps {
  label: string;
  path?: string;
}

const columns: any[] = [
  { id: "carrierName", label: "Carrier Name", minWidth: 180 },
  { id: "companyEmail", label: "Company Email", minWidth: 180 },
  { id: "contactPerson", label: "Contact Person" },
  {
    id: "countryOfOperation",
    label: "Country Of Operation",
    align: "center",
  },
  { id: "email", label: "Email", minWidth: 200 },
  { id: "action", label: "Action", minWidth: 120, align: "center" },
];

const RateMailing: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;
  // const isRateMailing = pathname.startsWith("/rate-mailing");
  const breadCrums: BreadCrumsProps[] = [
    { label: "Home", path: "/" },
    { label: "Pricing & Procurement", path:"/rate-mailing" },
    { label: "Rate Mailing",path:"/rate-mailing"  },
  ];
  let heading = "Rate Mailing";

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<RowData[]>([]);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]); // Track selected row ids

  const closePopup = () => setIsOpen(false);
  const handleCompose = (id: string) => {
    console.log(id);
    setIsOpen(true);
  };
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
    const { id, countryOfOperation } = items;
    const countryOfOperationValue = (
      <CountryHoverCell countries={countryOfOperation} />
    );

    const actions = (
      <div onClick={() => handleCompose(id + 1)}>
        <GreyButton
          label={"Compose"}
          size={"s"}
          variant={"primary"}
          rightIcon={<SendIcon size={16} />}
        />
      </div>
    );

    const updatedData = {
      id: id,
      carrierName: items?.carrierName,
      companyEmail: items?.companyEmail,
      contactPerson: items?.contactPerson,
      countryOfOperation: countryOfOperationValue,
      email: items?.email,
      action: actions,
    };
    return updatedData;
  };

  const data = [
    {
      carrierName: "Maersk Line",
      companyEmail: "cedennar@gmail.com",
      contactPerson: "Rotterdam, Netherlands",
      countryOfOperation: ["India", "China", "Sri Lanka", "China", "Sri Lanka"],
      email: "tim.jennings@example.com",
    },
    {
      carrierName: "Mediterranean Shipping Company (MSC) ",
      companyEmail: "cedennar@gmail.com",
      contactPerson: "Rotterdam",
      countryOfOperation: ["USA", "Sri Lanka"],
      email: "tim.jennings@example.com",
    },
    {
      carrierName: "Maersk Line",
      companyEmail: "cennar@gmail.com",
      contactPerson: "Rotterdam",
      countryOfOperation: [
        "India",
        "China",
        "India",
        "China",
        "India",
        "China",
        "India",
        "China",
        "India",
        "China",
        "India",
        "China",
        "India",
        "China",
        "India",
        "China",
        "India",
        "China",
        "India",
        "China",
        "India",
        "China",
        "India",
        "China",
        "India",
        "China",
        "India",
        "China",
        "India",
        "China",
        "India",
        "China",
        "India",
        "China",
        "India",
        "China",
        "India",
        "China",
        "India",
        "China",
      ],
      email: "tim.jennings@example.com",
    },
    {
      carrierName: "Maersk Line",
      companyEmail: "cedennar@gmail.com",
      contactPerson: "Rotterdam, Nether",
      countryOfOperation: ["China"],
      email: "tim.jennings@example.com",
    },
  ];

  // Memoize fetchData function with useCallback
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
    <>
      <PageHeader breadCrums={breadCrums} heading={heading} />

      <div className="rounded-xs shadow-lg bg-grey-aw-50">
        <div className="flex justify-between p-3 items-center border-b border-b-grey-ab-50">
          <div className="flex gap-6 items-center w-[60%]">
            <p className="text-lg font-bold text-grey-ab-900">
              Carrier Contact list
            </p>
            <GroupField
              label={""}
              type={""}
              placeholder={"Search"}
              name={""}
              value={""}
              onChange={function (): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              rightIcon={<SearchIcon color="#6A6A6A" />}
              parentStyle="w-[40%]"
            />
          </div>
          <div className="flex gap-4">
            <div onClick={() => handleCompose("0")}>
              <PrimaryButton
                label={"Compose"}
                size={"l"}
                variant={"primary"}
                rightIcon={<SendIcon color="#ffffff" />}
              />
            </div>
            <SuccessButton
              label={"Export"}
              size={"l"}
              variant={"primary"}
              rightIcon={<ExcelIcon color="#ffffff" />}
            />
          </div>
        </div>

        <div className="flex gap-4 px-4 py-2 items-center border-b border-b-grey-ab-50">
          <p className="text-lg font-bold text-grey-ab-900">Filter</p>
          <GroupField
            label={""}
            type={"select"}
            placeholder={"Choose Country"}
            name={""}
            value={""}
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
            error={false}
            errorMessage={""}
            leftIcon={<LocationIcon color="#2C398F" />}
            parentStyle="w-[30%]"
          />
          <GroupField
            label={""}
            type={"select"}
            placeholder={"Choose Transport"}
            name={""}
            value={""}
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
            error={false}
            errorMessage={""}
            parentStyle="w-[20%]"
          />
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

      {/* Popup  */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
          <ComposeEmail onClose={closePopup} />
        </div>
      )}
    </>
  );
};

export default RateMailing;

const CountryHoverCell: React.FC<CountryHoverCellProps> = ({ countries }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-[40px] flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-1 justify-center flex-wrap w-[180px] h-[22px] overflow-hidden">
        {countries.map((item) => (
          <BlueChip label={item} size="s" variant="fill" />
        ))}
      </div>
      {isHovered && (
        <div className="absolute bg-grey-aw-50 border border-grey-ab-50 rounded-xs w-[180px] max-h-[60px] overflow-auto custom-scrollbar-small shadow-lg bottom-8 left-0 z-10 p-2 flex gap-1 flex-wrap">
          {countries.map((item) => (
            <BlueChip label={item} size="s" variant="fill" />
          ))}
        </div>
      )}
    </div>
  );
};
