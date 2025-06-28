import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import ErrorChip from "../../../components/chips/ErrorChip";
import SuccessChip from "../../../components/chips/SuccessChip";
import GroupField from "../../../components/groupField/GroupField";
import {
  AccountIcon,
  CrossDownArrowIcon,
  CrossUpArrowIcon,
  DeleteIcon,
  EditIcon,
  ExcelIcon,
  SearchIcon,
} from "../../../components/icons/Icons";
import SuccessButton from "../../../components/buttons/SuccessButton";
import CustomTable from "../../../components/table/CustomTable";
import CustomPagination from "../../../components/pagination/CustomPagination";
import BankImage from "/images/bank.png";
import ErrorButton from "../../../components/buttons/ErrorButton";
import PrimaryChip from "../../../components/chips/PrimaryChip";
import NeutralBlueButton from "../../../components/buttons/NeutralBlueButton";
import UpdateBankForm from "../components/bank/UpdateBank";
import DeleteImage from "/images/delete2.png";
import GreyButton from "../../../components/buttons/GreyButton";

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

interface RowData {
  id: string | number;
  receiptName: string;
  receiptNumber: string;
  date: string;
  amount: string;
  transType: React.ReactNode;
}

const columns: any[] = [
  { id: "receiptName", label: "Receipt Name" },
  { id: "receiptNumber", label: "Receipt Number" },
  { id: "date", label: "Date", minWidth: 100 },
  { id: "amount", label: "Amount" },
  { id: "transType", label: "Trans Type", minWidth: 120, align: "center" },
];

const BankDetails: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<RowData[]>([]);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [isUpdateBank, setIsUpdateBank] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [bankData, setBankData] = useState<bankAccountsDataProps>({
    id: "1748598011382",
    beneficiaryName: "MAATSON MARITIME INTL OPC PVT LTD",
    bankName: "HDFC BANK LIMITED",
    accountNo: "190205001962",
    branch: "Chennai",
    ifscCode: "ICIC0001902",
    swiftCode: "BOFAUS3N",
    iban: "GB12NWBK60161331926819",
    isPrimary: true,
    balanceAmount: 40000,
  });

  const handleUpdateSave = (updatedBank: bankAccountsDataProps) => {
    setBankData(updatedBank);
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
      amount: "$1,330,985",
      transType: "Credited",
    },
    {
      receiptName: "Dimas Kamal",
      receiptNumber: "3233848",
      date: "11/10/25",
      amount: "$1,927,105",
      transType: "Debited",
    },
    {
      receiptName: "Lukman Farhan",
      receiptNumber: "32410561",
      date: "11/10/25",
      amount: "$800,578",
      transType: "Credited",
    },
    {
      receiptName: "Alan Marcus",
      receiptNumber: "32410561",
      date: "11/10/25",
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

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 p-2 rounded-sm bg-grey-aw-50 shadow-lg items-center w-full">
              <div className="p-3 rounded-xs bg-blue-50">
                <div>
                  <AccountIcon color="#0084E8" />
                </div>
              </div>
              <div className="flex flex-col gap-1 font-bold text-grey-ab-400 ">
                <p className="text-sm ">Bank Balance</p>
                <div className="flex items-end gap-3">
                  <p className="text-lg text-grey-ab-800">2,50,00,000</p>
                  <div className="bg-success-50 rounded-xl py-1 px-2 text-success-700 text-2xs">
                    +10%
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 p-2 rounded-sm bg-grey-aw-50 shadow-lg items-center w-full">
              <div className="p-3 rounded-xs bg-success-50">
                <div>
                  <CrossDownArrowIcon color="#007B33" />
                </div>
              </div>
              <div className="flex flex-col gap-1 font-bold text-grey-ab-400 ">
                <p className="text-sm ">Total Credits</p>
                <div className="flex items-end gap-3">
                  <p className="text-lg text-grey-ab-800">2,50,00,000</p>
                  <div className="bg-error-50 rounded-xl py-1 px-2 text-error text-2xs">
                    -10%
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 p-2 rounded-sm bg-grey-aw-50 shadow-lg items-center w-full">
              <div className="p-3 rounded-xs bg-error-50">
                <div>
                  <CrossUpArrowIcon color="#C80008" />
                </div>
              </div>
              <div className="flex flex-col gap-1 font-bold text-grey-ab-400 ">
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

          <div className="flex gap-6 p-4 rounded-sm bg-grey-aw-50 shadow-lg w-full border border-grey-ab-50">
            <img src={BankImage} alt="BankImage" className="object-cover" />

            <div className="flex flex-col justify-between gap-3 w-full">
              <div className="flex flex-col gap-2 ">
                <div className="flex flex-col gap-3 ">
                  <div className="flex justify-between ">
                    <p className="text-h6 font-bold text-grey-ab-800">
                      {bankData.bankName.toUpperCase()}
                    </p>
                    {bankData.isPrimary ? (
                      <PrimaryChip
                        label={"Primary"}
                        size={"xl"}
                        variant={"fill"}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <p className="text-lg text-grey-ab-800">
                    {bankData.beneficiaryName.toUpperCase()}
                  </p>
                </div>

                <div className="flex gap-1 items-center">
                  <p className="text-sm text-grey-ab-400">Account No:</p>
                  <p className="text-grey-ab-800 font-bold">
                    {bankData.accountNo}
                  </p>
                </div>

                <div className="grid grid-cols-2">
                  <div className="flex gap-1 items-center">
                    <p className="text-xs text-grey-ab-400">Branch:</p>
                    <p className="text-xs text-grey-ab-800 font-bold">
                      {bankData.branch}
                    </p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <p className="text-xs text-grey-ab-400">IFSC Code:</p>
                    <p className="text-xs text-grey-ab-800 font-bold">
                      {bankData.ifscCode}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="flex gap-1 items-center">
                    <p className="text-xs text-grey-ab-400">SWIFT Code:</p>
                    <p className="text-xs text-grey-ab-800 font-bold">
                      {bankData.swiftCode}
                    </p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <p className="text-xs text-grey-ab-400">IBAN:</p>
                    <p className="text-xs text-grey-ab-800 font-bold">
                      {bankData.iban}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <div onClick={() => setIsUpdateBank(true)}>
                  <NeutralBlueButton
                    label={"Edit Bank"}
                    size={"m"}
                    variant={"primary"}
                    leftIcon={<EditIcon size={16} color="#ffffff" />}
                  />
                </div>
                <div onClick={() => setIsDelete(true)}>
                  <ErrorButton
                    label={"Delete Bank"}
                    size={"m"}
                    variant={"primary"}
                    leftIcon={<DeleteIcon size={16} color="#ffffff" />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

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
      </div>

      {isUpdateBank && bankData && (
        <div className="fixed flex justify-center items-center bg-black bg-opacity-50 z-30 inset-0">
          <UpdateBankForm
            data={bankData}
            onClose={() => setIsUpdateBank(false)}
            onSave={handleUpdateSave}
          />
        </div>
      )}
      {isDelete && (
        <div className="fixed flex justify-center items-center bg-black bg-opacity-50 z-30 inset-0">
          <DeleteForm onCancel={() => setIsDelete(false)} onDelete={() => {}} />
        </div>
      )}
    </>
  );
};

export default BankDetails;

const DeleteForm: React.FC<{ onCancel: () => void; onDelete: () => void }> = ({
  onCancel,
  onDelete,
}) => {
  return (
    <div className="flex bg-grey-aw-50 rounded-sm px-6 py-4 flex-col gap-5 max-w-[420px] shadow-lg">
      <div className="flex flex-col gap-5">
        <p className="text-h6 font-bold text-grey-ab text-center">
          Delete Bank
        </p>
        <div className="flex flex-col gap-4 items-center">
          <div className="w-[150px] h-[150px] flex justify-center">
            <img
              src={DeleteImage}
              alt="DeleteImage"
              className="w-full h-full"
            />
          </div>
          <p className="text-sm text-grey-ab-300 text-center">
            By deleting your bank account details, you will remove them from our
            system. However, any payment history linked to this account will
            still be available for your reference
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-full" onClick={onCancel}>
          <GreyButton
            label={"Cancel"}
            size={"l"}
            variant={"primary"}
            style="w-full"
          />
        </div>
        <div className="w-full" onClick={onDelete}>
          <ErrorButton
            label={"Delete Bank"}
            size={"l"}
            variant={"primary"}
            style="w-full"
          />
        </div>
      </div>
    </div>
  );
};
