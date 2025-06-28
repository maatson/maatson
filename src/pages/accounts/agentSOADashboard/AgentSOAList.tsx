import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import CustomPagination from "../../../components/pagination/CustomPagination";
import CustomTable from "../../../components/table/CustomTable";
import {
  CrossDownArrowIcon,
  CrossUpArrowIcon,
  ExcelIcon,
  EyeOpenIcon,
  SearchIcon,
  UserIcon,
} from "../../../components/icons/Icons";
import SuccessButton from "../../../components/buttons/SuccessButton";
import GroupField from "../../../components/groupField/GroupField";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import ErrorChip from "../../../components/chips/ErrorChip";
import SuccessChip from "../../../components/chips/SuccessChip";

interface RowData {
  id: string | number;
  agentName: string;
  totalPayable: string;
  totalReceivable: string;
  totalCredit: string;
  totalDebit: string;
  payableStatus: string | React.ReactNode;
  receivableStatus: string | React.ReactNode;
  action: React.ReactNode;
}

interface AgentModelProps {
  label: string;
  value: string;
  iconSetStyle: string;
  icon: React.ReactNode;
  parentStyle?: string;
  rightModelStyle?: string;
  labelStyle?: string;
  valueStyle?: string;
  chip?: React.ReactNode;
}

const columns: any[] = [
  { id: "agentName", label: "Agent Name", minWidth: 140 },
  { id: "totalPayable", label: "Total Payable", minWidth: 140 },
  { id: "totalReceivable", label: "Total Receivable", minWidth: 140 },
  { id: "totalCredit", label: "Total Credit", minWidth: 140 },
  { id: "totalDebit", label: "Total Debit", minWidth: 100 },
  {
    id: "payableStatus",
    label: "Payable Status",
    align: "center",
  },
  {
    id: "receivableStatus",
    label: "Receivable Status",
    align: "center",
  },
  { id: "action", label: "Action", minWidth: 120, align: "center" },
];

const AgentSOAList: React.FC = () => {
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
    const { id, payableStatus, receivableStatus } = items;
    const payableStatusValue = (
      <>
        {payableStatus.toLowerCase() === "pending" ? (
          <ErrorChip label={payableStatus} size={"m"} variant={"fill"} />
        ) : (
          <SuccessChip label={payableStatus} size={"m"} variant={"fill"} />
        )}
      </>
    );
    const receivableStatusValue = (
      <>
        {receivableStatus.toLowerCase() === "pending" ? (
          <ErrorChip label={receivableStatus} size={"m"} variant={"fill"} />
        ) : (
          <SuccessChip label={receivableStatus} size={"m"} variant={"fill"} />
        )}
      </>
    );
    const actions = (
      <div className="flex justify-center">
        <Link to={`/accounts/agent-soa-dashboard/view-credit/${id}`}>
          <PrimaryButton
            label={"View"}
            size={"s"}
            variant={"primary"}
            leftIcon={<EyeOpenIcon size={16} color="#ffffff" />}
          />
        </Link>
      </div>
    );

    const updatedData = {
      id: id,
      agentName: items?.agentName,
      totalPayable: items?.totalPayable,
      totalReceivable: items?.totalReceivable,
      totalCredit: items?.totalCredit,
      totalDebit: items?.totalDebit,
      payableStatus: payableStatusValue,
      receivableStatus: receivableStatusValue,
      action: actions,
    };
    return updatedData;
  };

  const data = [
    {
      agentName: "Farrel Kurniawan",
      totalPayable: "490.000.000",
      totalReceivable: "750.000.000",
      totalCredit: "105.500.000",
      totalDebit: "45.000.000",
      payableStatus: "Pending",
      receivableStatus: "Pending",
    },
    {
      agentName: "Dimas Kamal",
      totalPayable: "490.000.000",
      totalReceivable: "750.000.000",
      totalCredit: "105.500.000",
      totalDebit: "45.000.000",
      payableStatus: "Completed",
      receivableStatus: "Completed",
    },
    {
      agentName: "Lukman Farhan",
      totalPayable: "490.000.000",
      totalReceivable: "750.000.000",
      totalCredit: "105.500.000",
      totalDebit: "45.000.000",
      payableStatus: "Pending",
      receivableStatus: "Pending",
    },
    {
      agentName: "Alan Marcus",
      totalPayable: "490.000.000",
      totalReceivable: "750.000.000",
      totalCredit: "105.500.000",
      totalDebit: "45.000.000",
      payableStatus: "Completed",
      receivableStatus: "Completed",
    },
  ];

  const fetchData = useCallback(() => {
    const arr = data.map((items, index) => {
      return createData({ ...items, id: index });
    });
    setRows(arr);
  }, []); // Empty dependency array ensures this function is only created once

  useEffect(() => {
    fetchData(); // Call fetchData when the component mounts
  }, [fetchData]); // Only re-run fetchData if fetchData changes

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-4">
              <AgentModel
                label={"Total Agents"}
                value={"120"}
                iconSetStyle={"bg-blue-50"}
                icon={<UserIcon color="#0084E8" />}
                rightModelStyle="gap-3"
                valueStyle="text-h3"
              />
              <AgentModel
                label={"Outstanding Receivable"}
                value={"1,50,00,000"}
                iconSetStyle={"bg-success-50"}
                icon={<CrossDownArrowIcon color="#007B33" />}
                chip={<ErrorChip label={"-10%"} size={"sm"} variant={"fill"} />}
              />
              <AgentModel
                label={"Outstanding Payable"}
                value={"25,00,000"}
                iconSetStyle={"bg-error-50"}
                icon={<CrossUpArrowIcon color="#C80008" />}
                chip={
                  <SuccessChip label={"+10%"} size={"sm"} variant={"fill"} />
                }
              />
            </div>
            <div className="flex flex-col gap-2 p-3 rounded-sm bg-grey-aw-50 shadow-lg h-[320px] justify-center items-center">
              Chart work will start after backend work
            </div>
          </div>

          <div className="flex flex-col gap-2 p-3 rounded-sm bg-grey-aw-50 shadow-lg h-full w-[400px] justify-center items-center text-center">
            Chart work will start after backend work
          </div>
        </div>
        <div className="flex flex-col bg-grey-aw-50 rounded-xs">
          <div className="flex justify-between p-3 border-b border-b-grey-ab-50 items-center ">
            <div className="w-[70%] flex gap-4 items-center">
              <p className="text-lg font-semibold text-grey-ab-900 text-nowrap">
                Agent SOA List
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
        </div>
      </div>
    </>
  );
};

export default AgentSOAList;

export const AgentModel: React.FC<AgentModelProps> = ({
  label,
  value,
  iconSetStyle,
  icon,
  parentStyle,
  rightModelStyle,
  labelStyle,
  valueStyle,
  chip,
}) => {
  return (
    <>
      <div
        className={`flex gap-3 p-2 rounded-sm bg-grey-aw-50 shadow-lg w-full text-nowrap ${parentStyle}`}
      >
        <div className={`p-2 rounded-xs h-fit ${iconSetStyle}`}>{icon}</div>
        <div className={`flex flex-col gap-1 ${rightModelStyle}`}>
          <p className={`text-grey-ab-400 ${labelStyle}`}>{label}</p>
          <p className={`text-grey-ab-800 font-bold text-h5 ${valueStyle}`}>
            {value}
          </p>
          {chip}
        </div>
      </div>
    </>
  );
};
