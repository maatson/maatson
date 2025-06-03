import React, { useCallback, useEffect, useState } from "react";
import {
  AddIcon,
  CrossDownArrowIcon,
  CrossUpArrowIcon,
  EditIcon,
  ExcelIcon,
  EyeOpenIcon,
  PriceTagIcon,
  SearchIcon,
} from "../../../components/icons/Icons";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import PrimaryChip from "../../../components/chips/PrimaryChip";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import SuccessChip from "../../../components/chips/SuccessChip";
import GroupField from "../../../components/groupField/GroupField";
import SuccessButton from "../../../components/buttons/SuccessButton";
import CustomTable from "../../../components/table/CustomTable";
import CustomPagination from "../../../components/pagination/CustomPagination";
import ErrorChip from "../../../components/chips/ErrorChip";
import AddBankForm from "../components/AddBank";
import UpdateBankForm from "../components/UpdateBank";
import { useNotify } from "../../../hooks/useNotify";
import { useNavigate } from "react-router-dom";

interface bankAccountsDataProps {
  id: string | number;
  beneficiaryName: string;
  bankName: string;
  accountNo: string;
  branch: string;
  ifscCode: string;
  swiftCode: string;
  iban: string;
  isPrimary: boolean;
  balanceAmount: number;
}

interface BankCardsProps {
  id: string | number;
  bankName: string;
  accountNo: string;
  isPrimary: boolean;
  balanceAmount: number;
  onClickUpdate: (id: string | number) => void;
  onView: (id: string | number) => void;
}

interface RowData {
  id: string | number;
  receiptName: string;
  receiptNumber: string;
  date: string;
  bankName: string;
  amount: string;
  transType: React.ReactNode;
}

const columns: any[] = [
  { id: "receiptName", label: "Receipt Name" },
  { id: "receiptNumber", label: "Receipt Number" },
  { id: "date", label: "Date", minWidth: 100 },
  { id: "bankName", label: "Bank Name", minWidth: 180 },
  { id: "amount", label: "Amount" },
  { id: "transType", label: "Trans Type", minWidth: 120, align: "center" },
];

const BankList: React.FC = () => {
  const { showToast } = useNotify();
  const navigate = useNavigate();
  const [isAddBank, setIsAddBank] = useState<boolean>(false);
  const [isUpdateBank, setIsUpdateBank] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<RowData[]>([]);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);

  const [bankAccountsData, setBankAccountData] = useState<
    bankAccountsDataProps[]
  >([
    {
      id: "1748598011281",
      beneficiaryName: "MAATSON MARITIME INTL OPC PVT LTD",
      bankName: "ICICI BANK LIMITED",
      accountNo: "190205001961",
      branch: "Chennai",
      ifscCode: "ICIC0001902",
      swiftCode: "BOFAUS3N",
      iban: "GB12NWBK60161331926819",
      isPrimary: false,
      balanceAmount: 220000,
    },
    {
      id: "1748598011382",
      beneficiaryName: "MAATSON MARITIME INTL OPC PVT LTD",
      bankName: "HDFC BANK LIMITED",
      accountNo: "190205001962",
      branch: "Chennai",
      ifscCode: "ICIC0001902",
      swiftCode: "BOFAUS3N",
      iban: "GB12NWBK60161331926819",
      isPrimary: false,
      balanceAmount: 40000,
    },
  ]);
  const [selectedBankData, setSelectedBankData] =
    useState<bankAccountsDataProps | null>(null);

  const handleClickUpdate = (id: string | number) => {
    const selected = bankAccountsData.find((bank) => bank.id === id);
    if (selected) {
      setSelectedBankData(selected);
      setIsUpdateBank(true);
    }
  };

  const handleSave = (newData: bankAccountsDataProps) => {
    if (
      newData.beneficiaryName !== "" &&
      newData.bankName !== "" &&
      newData.accountNo !== "" &&
      newData.branch !== "" &&
      newData.ifscCode !== ""
    ) {
      setBankAccountData((prev) => {
        const updatedData = newData.isPrimary
          ? prev.map((item) => ({ ...item, isPrimary: false }))
          : prev;

        return [...updatedData, newData];
      });
      showToast("success", {
        heading: "Bank Account Added",
        message: "The bank details have been successfully Added.",
      });
      setIsAddBank(false);
    } else {
    }
    // setBankAccountData((prev) => {
    //   const updatedData = newData.isPrimary
    //     ? prev.map((item) => ({ ...item, isPrimary: false }))
    //     : prev;

    //   return [...updatedData, newData];
    // });
    // showToast("success", {
    //   heading: "Bank Account Added",
    //   message: "The bank details have been successfully Added.",
    // });
    // setIsAddBank(false);
  };

  const handleUpdateSave = (updatedBank: bankAccountsDataProps) => {
    setBankAccountData((prev) => {
      let newData = prev.map((item) => {
        // If the bank is being updated, replace it
        if (item.id === updatedBank.id) {
          return updatedBank;
        }

        // If the updated bank is marked as primary, unset others
        if (updatedBank.isPrimary) {
          return { ...item, isPrimary: false };
        }

        return item;
      });

      return newData;
    });

    showToast("success", {
      heading: "Bank Account Updated",
      message: "The bank details have been successfully updated",
    });

    setIsUpdateBank(false);
  };

  const handleCheckedRowsChange = (newCheckedRows: (string | number)[]) => {
    setSelectedRows(newCheckedRows);
  };
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
    const { id, transType } = items;

    const transTypeValue = (
      <>
        {transType.toLowerCase() === "debited" && (
          <ErrorChip label={transType} size={"m"} variant={"fill"} />
        )}
        {transType.toLowerCase() === "credited" && (
          <SuccessChip label={transType} size={"m"} variant={"fill"} />
        )}
      </>
    );

    const updatedData = {
      id: id,
      receiptName: items?.receiptName,
      receiptNumber: items?.receiptNumber,
      date: items?.date,
      bankName: items?.bankName,
      amount: items?.amount,
      transType: transTypeValue,
    };
    return updatedData;
  };
  const transactionData = [
    {
      receiptName: "Farrel Kurniawan",
      receiptNumber: "0000001",
      date: "11/10/25",
      bankName: "ICICI BANK LIMITED",
      amount: "$1,330,985",
      transType: "Credited",
    },
    {
      receiptName: "Dimas Kamal",
      receiptNumber: "3233848",
      date: "11/10/25",
      bankName: "HDFC BANK LIMITED",
      amount: "$1,927,105",
      transType: "Debited",
    },
    {
      receiptName: "Lukman Farhan",
      receiptNumber: "32410561",
      date: "11/10/25",
      bankName: "ICICI BANK LIMITED",
      amount: "$800,578",
      transType: "Credited",
    },
    {
      receiptName: "Alan Marcus",
      receiptNumber: "32410561",
      date: "11/10/25",
      bankName: "HDFC BANK LIMITED",
      amount: "$2,134,616",
      transType: "Debited",
    },
  ];

  const fetchTransactionData = useCallback(() => {
    const arr = transactionData.map((items, index) => {
      return createData({ ...items, id: index });
    });
    setRows(arr);
  }, []);

  useEffect(() => {
    fetchTransactionData();
  }, [fetchTransactionData]);

  useEffect(() => {
    console.log(bankAccountsData);
  }, [bankAccountsData]);

  return (
    <>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4 w-[70%]">
          <div className="gap-2 grid grid-cols-2 xl:grid xl:grid-cols-3">
            <div className="flex gap-2 p-2 rounded-sm bg-grey-aw-50 shadow-lg items-center w-full">
              <div className="p-2 rounded-xs bg-blue-50">
                <div>
                  <PriceTagIcon color="#0084E8" />
                </div>
              </div>
              <div className="flex flex-col gap-0 font-bold text-grey-ab-400 ">
                <p className="text-sm ">Total Revenue</p>
                <div className="flex items-end gap-3">
                  <p className="text-lg text-grey-ab-800">2,50,00,000</p>
                  <div className="bg-success-50 rounded-xl py-1 px-2 text-success-700 text-2xs">
                    +10%
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2 p-2 rounded-sm bg-grey-aw-50 shadow-lg items-center w-full">
              <div className="p-2 rounded-xs bg-success-50">
                <div>
                  <CrossDownArrowIcon color="#007B33" />
                </div>
              </div>
              <div className="flex flex-col gap-0 font-bold text-grey-ab-400 ">
                <p className="text-sm ">Total Credits</p>
                <div className="flex items-end gap-3">
                  <p className="text-lg text-grey-ab-800">2,50,00,000</p>
                  <div className="bg-error-50 rounded-xl py-1 px-2 text-error text-2xs">
                    -10%
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2 p-2 rounded-sm bg-grey-aw-50 shadow-lg items-center w-full">
              <div className="p-2 rounded-xs bg-error-50">
                <div>
                  <CrossUpArrowIcon color="#C80008" />
                </div>
              </div>
              <div className="flex flex-col gap-0 font-bold text-grey-ab-400 ">
                <p className="text-sm ">Total Debits</p>
                <div className="flex items-end gap-3">
                  <p className="text-lg text-grey-ab-800">2,50,00,000</p>
                  <div className="bg-success-50 rounded-xl py-1 px-2 text-success-700 text-2xs">
                    +10%
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-grey-aw-50 h-[414px] flex justify-center items-center rounded-sm shadow-lg">
            Charts works will executes after backend
          </div>
        </div>

        {/* right side */}
        <div className="flex flex-col gap-4 bg-grey-aw-50 shadow-lg rounded-sm w-[40%]">
          <div className="flex justify-between p-2 items-center text-grey-ab-800">
            <p className="text-lg font-bold">Bank Accounts</p>
            <div onClick={() => setIsAddBank(true)}>
              <PrimaryButton
                label={"Add Bank"}
                size={"m"}
                variant={"primary"}
                leftIcon={<AddIcon size={16} color="#ffffff" />}
              />
            </div>
          </div>

          <div className="p-2">
            <div className="flex flex-col gap-2 max-h-[400px] h-full  overflow-auto custom-scrollbar">
              {bankAccountsData
                .filter((data) => data.isPrimary)
                .map((item, index) => (
                  <React.Fragment key={`primary-${index}`}>
                    <BankCards
                      id={item.id}
                      bankName={item.bankName}
                      accountNo={item.accountNo}
                      isPrimary={item.isPrimary}
                      balanceAmount={item.balanceAmount}
                      onClickUpdate={handleClickUpdate}
                      onView={() => {
                        navigate(`/accounts/bank/details/${item.id}`);
                      }}
                    />
                  </React.Fragment>
                ))}
              {bankAccountsData
                .filter((data) => !data.isPrimary)
                .map((item, index) => (
                  <React.Fragment key={`non-primary-${index}`}>
                    <BankCards
                      id={item.id}
                      bankName={item.bankName}
                      accountNo={item.accountNo}
                      isPrimary={item.isPrimary}
                      balanceAmount={item.balanceAmount}
                      onClickUpdate={handleClickUpdate}
                      onView={() => {
                        navigate(`/accounts/bank/details/${item.id}`);
                      }}
                    />
                  </React.Fragment>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* table */}
      <div className="flex flex-col bg-grey-aw-50 rounded-xs">
        <div className="flex justify-between p-3 border-b border-b-grey-ab-50 items-center ">
          <div className="w-[60%] flex gap-4 items-center">
            <p className="text-lg font-semibold text-grey-ab-900 text-nowrap">
              Transaction History
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
            <GroupField
              label={""}
              type={"select"}
              placeholder={"All"}
              name={""}
              value={""}
              onChange={() => {}}
              error={false}
              errorMessage={""}
              parentStyle="w-[20%]"
            />
          </div>

          <div className="flex gap-4 ">
            <div className="flex">
              <GroupField
                label={""}
                type={"date"}
                placeholder={"11-02-2020"}
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
                isDateLeft
              />
              <GroupField
                label={""}
                type={"date"}
                placeholder={"11-02-2020"}
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
              />
            </div>
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

      {/* popup screens */}
      {isAddBank && (
        <div className="fixed flex justify-center items-center bg-black bg-opacity-50 z-30 inset-0">
          <AddBankForm
            onClose={() => setIsAddBank(false)}
            onSave={handleSave}
          />
        </div>
      )}
      {isUpdateBank && selectedBankData && (
        <div className="fixed flex justify-center items-center bg-black bg-opacity-50 z-30 inset-0">
          <UpdateBankForm
            data={selectedBankData}
            onClose={() => setIsUpdateBank(false)}
            onSave={handleUpdateSave}
          />
        </div>
      )}
    </>
  );
};

export default BankList;

const BankCards: React.FC<BankCardsProps> = ({
  id,
  bankName,
  isPrimary,
  accountNo,
  balanceAmount,
  onClickUpdate,
  onView,
}) => {
  return (
    <div
      className="flex flex-col gap-2 p-4 rounded-sm border border-grey-ab-50 mr-2"
      key={id}
    >
      <div className="flex justify-between items-center">
        <p className="text-grey-ab-800 font-bold text-sm">
          {bankName.toUpperCase()}
        </p>
        {isPrimary && (
          <PrimaryChip label={"Primary"} size={"m"} variant={"fill"} />
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-grey-ab-400 text-2xs">Account No</p>
        <p className="text-grey-ab-800 text-2xs font-bold">{accountNo}</p>
      </div>

      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-1">
          <p className="text-xs text-grey-ab-400">Balance</p>
          <p className="font-bold text-success-700">
            {new Intl.NumberFormat("en-IN").format(balanceAmount)}
          </p>
        </div>
        <div className="flex gap-2">
          <div
            className="p-[6px] rounded-xs bg-blue cursor-pointer"
            onClick={() => onClickUpdate(id)}
          >
            <EditIcon size={20} color="#ffffff" />
          </div>
          <div
            className="p-[6px] rounded-xs bg-grey-ab cursor-pointer"
            onClick={() => onView(id)}
          >
            <EyeOpenIcon size={20} color="#ffffff" />
          </div>
        </div>
      </div>
    </div>
  );
};
