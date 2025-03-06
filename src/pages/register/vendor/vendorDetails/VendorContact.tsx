import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import SecondaryChip from "../../../../components/chips/SecondaryChip";
import {
  AddIcon,
  DeleteIcon,
  DocumentIcon,
  DownloadIcon,
  ExcelIcon,
  SearchIcon,
  SendIcon,
} from "../../../../components/icons/Icons";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";
import GroupField from "../../../../components/groupField/GroupField";
import SuccessButton from "../../../../components/buttons/SuccessButton";
import CustomTable from "../../../../components/table/CustomTable";
import CustomPagination from "../../../../components/pagination/CustomPagination";
import GreyButton from "../../../../components/buttons/GreyButton";
import AddContactPerson from "../../forms/AddContactPerson";
import AddBusinessCertificate from "../../forms/AddBusinessCertificate";
import AddTaxCertificate from "../../forms/AddTaxCertificate";
import AddOthersCertificate from "../../forms/AddOtherCertificate";

interface ContactRowData {
  id: string | number;
  contactName: string;
  department: string;
  email: React.ReactNode;
  mobileNumber: string;
  alternativeContact: string;
  countryOfOperation: React.ReactNode;
  action: React.ReactNode;
}

// business table
interface BusinessRowData {
  id: string | number;
  branch: string;
  document: React.ReactNode;
  action: React.ReactNode;
}

// tax table
interface TaxRowData {
  id: string | number;
  branch: string;
  document: React.ReactNode;
  action: React.ReactNode;
}
// other certificate table
interface RowData {
  id: string | number;
  certificateName: string;
  branch: string;
  document: React.ReactNode;
  action: React.ReactNode;
}

const contactColumns: any[] = [
  { id: "contactName", label: "Contact Name", minWidth: 130 },
  { id: "department", label: "Department", minWidth: 120 },
  { id: "email", label: "Email", minWidth: 160 },
  { id: "mobileNumber", label: "Mobile Number", minWidth: 130 },
  { id: "alternativeContact", label: "Alternative Contact", minWidth: 130 },
  {
    id: "countryOfOperation",
    label: "Country of Operation",
    minWidth: 140,
    align: "center",
  },
  { id: "action", label: "Action", minWidth: 100, align: "center" },
];

const businessColumns: any[] = [
  { id: "branch", label: "Branch" },
  { id: "document", label: "Document", align: "center" },
  { id: "action", label: "Action", align: "center" },
];

const taxColumns: any[] = [
  { id: "branch", label: "Branch" },
  { id: "document", label: "Document", align: "center" },
  { id: "action", label: "Action", align: "center" },
];

const columns: any[] = [
  { id: "certificateName", label: "Certificate Name" },
  { id: "branch", label: "Branch" },
  { id: "document", label: "Document", align: "center" },
  { id: "action", label: "Action", align: "center" },
];
const VendorContact: React.FC = () => {
  const [contactCurrentPage, setContactCurrentPage] = useState<number>(1);
  const [contactRows, setContactRows] = useState<ContactRowData[]>([]);
  const [contactItemsPerPage, setContactItemsPerPage] = React.useState(5);
  const [contactSelectedRows, setContactSelectedRows] = useState<
    (string | number)[]
  >([]); // Track selected row ids
  const [isAddContactPersonOpen, setIsAddContactPersonOpen] = useState(false);
  // business certification
  const [isAddBusinessCertificateOpen, setIsAddBusinessCertificateOpen] =
    useState(false);
  // Table -2 business registration
  const [businessCurrentPage, setBusinessCurrentPage] = useState<number>(1);
  const [businessRows, setBusinessRows] = useState<BusinessRowData[]>([]);
  const [businessItemsPerPage, setBusinessItemsPerPage] = React.useState(5);
  const [isAddTaxCertificateOpen, setIsAddTaxCertificateOpen] = useState(false);
  // Table -3 tax registration
  const [taxCurrentPage, setTaxCurrentPage] = useState<number>(1);
  const [taxRows, setTaxRows] = useState<TaxRowData[]>([]);
  const [taxItemsPerPage, setTaxItemsPerPage] = React.useState(5);
  // other certification
  const [isAddOtherCertificateOpen, setIsAddOtherCertificateOpen] =
    useState(false);
  const openAddContactPerson = () => setIsAddContactPersonOpen(true);
  const closeAddContactPerson = () => setIsAddContactPersonOpen(false);
  // business certification
  const openAddBusinessCertificate = () =>
    setIsAddBusinessCertificateOpen(true);
  const closeAddBusinessCertificate = () =>
    setIsAddBusinessCertificateOpen(false);
  // tax certification
  const openAddTaxCertificate = () => setIsAddTaxCertificateOpen(true);
  const closeAddTaxCertificate = () => setIsAddTaxCertificateOpen(false);
  // other certification
  const openAddOtherCertificate = () => setIsAddOtherCertificateOpen(true);
  const closeAddOtherCertificate = () => setIsAddOtherCertificateOpen(false);

  // tables
  // table 1 - carrier information

  const handleContactCheckedRowsChange = (
    newCheckedRows: (string | number)[]
  ) => {
    setContactSelectedRows(newCheckedRows);
  };
  console.log(contactSelectedRows, "selected Rows");
  const handleContactItemsPerPageChange = useCallback(
    (event: SelectChangeEvent<number>) => {
      setContactItemsPerPage(Number(event.target.value));
      setContactCurrentPage(1);
    },
    []
  );
  const handleContactChangePage = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setContactCurrentPage(page);
  };

  // table
  const createContactData = (items: any) => {
    const { id, email, countryOfOperation } = items;
    const countryOfOperations = (
      <SecondaryChip
        label={countryOfOperation}
        size={"m"}
        variant={"outline"}
      />
    );
    const emails = (
      <div className="max-w-[140px] w-full break-all">{email}</div>
    );
    const actions = (
      <div className="flex justify-center gap-[10px] py-1 px-2">
        <div className="rounded-xs p-1 bg-error-50">
          <DeleteIcon size={16} color="#810001" />
        </div>
        <div className="rounded-xs p-1 bg-success-50">
          <SendIcon size={16} color="#007B33" />
        </div>
      </div>
    );

    const updatedData = {
      id: id,
      contactName: items?.contactName,
      department: items?.department,
      email: emails,
      mobileNumber: items?.mobileNumber,
      alternativeContact: items?.alternativeContact,
      countryOfOperation: countryOfOperations,
      action: actions,
    };
    return updatedData;
  };

  const contactData = [
    {
      contactName: "Barmaleeva N.",
      department: "Sales ",
      email: "tranthuy.nute@gmail.com",
      mobileNumber: "+447700960035",
      alternativeContact: "+447700960035",
      countryOfOperation: "India",
    },
    {
      contactName: "Barmaleeva N.",
      department: "Sales ",
      email: "tranthuy.nute@gmail.com",
      mobileNumber: "+447700960035",
      alternativeContact: "+447700960035",
      countryOfOperation: "China",
    },
    {
      contactName: "Barmaleeva N.",
      department: "Sales ",
      email: "tranthuy.nute@gmail.com",
      mobileNumber: "+447700960035",
      alternativeContact: "+447700960035",
      countryOfOperation: "India",
    },
  ];

  // Memoize fetchData function with useCallback
  const fetchContactData = useCallback(() => {
    const arr = contactData.map((items, index) => {
      return createContactData({ ...items, id: index }); // Ensure createData returns the transformed data
    });
    setContactRows(arr); // Set the rows with the updated data
  }, []); // Empty dependency array ensures this function is only created once

  useEffect(() => {
    fetchContactData();
  }, [fetchContactData]);

  const handleBusinessItemsPerPageChange = useCallback(
    (event: SelectChangeEvent<number>) => {
      setBusinessItemsPerPage(Number(event.target.value));
      setBusinessCurrentPage(1);
    },
    []
  );
  const handleBusinessChangePage = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setBusinessCurrentPage(page);
  };

  const createBusinessData = (items: any) => {
    const { id, fileName } = items;
    const documents = (
      <div className="flex justify-center">
        <div className="rounded-xs border p-2 flex gap-3 items-center bg-primary-50 border-grey-ab-100">
          <DocumentIcon color="#2C398F" />
          <div className="text-grey-ab-800 truncate w-[140px]">
            {fileName}.pdf
          </div>
        </div>
      </div>
    );
    const actions = (
      <div className="flex gap-[10px] py-1 px-2 justify-center items-center">
        <div className="bg-grey-ab p-1 rounded-xs cursor-pointer">
          <DownloadIcon size={16} color="#FDFDFD" />
        </div>
        <div className="bg-error-50 p-1 rounded-xs cursor-pointer">
          <DeleteIcon size={16} color="#810001" />
        </div>
      </div>
    );
    const updatedData = {
      id: id,
      branch: items?.branch,
      document: documents,
      action: actions,
    };

    return updatedData;
  };
  const businessData = [
    {
      branch: "Mooney Valley",
      fileName: "Business Registration",
    },
    {
      branch: "Taupo",
      fileName: "Business Registration",
    },
    {
      branch: "Mooney Valley",
      fileName: "Business Registration",
    },
    {
      branch: "Taupo",
      fileName: "Business Registration",
    },
  ];

  // Memoize fetchData function with useCallback
  const fetchBusinessData = useCallback(() => {
    const arr = businessData.map((items, index) => {
      return createBusinessData({ ...items, id: index }); // Ensure createData returns the transformed data
    });
    setBusinessRows(arr); // Set the rows with the updated data
  }, []); // Empty dependency array ensures this function is only created once

  useEffect(() => {
    fetchBusinessData(); // Call fetchData when the component mounts
  }, [fetchBusinessData]); // Only re-run fetchData if fetchData changes

  const handleTaxItemsPerPageChange = useCallback(
    (event: SelectChangeEvent<number>) => {
      setTaxItemsPerPage(Number(event.target.value));
      setTaxCurrentPage(1);
    },
    []
  );
  const handleTaxChangePage = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setTaxCurrentPage(page);
  };

  const createTaxData = (items: any) => {
    const { id, fileName } = items;
    const documents = (
      <div className="flex justify-center">
        <div className="rounded-xs border p-2 flex gap-3 items-center bg-primary-50 border-grey-ab-100">
          <DocumentIcon color="#2C398F" />
          <div className="text-grey-ab-800 truncate w-[140px] ">
            {fileName}.pdf
          </div>
        </div>
      </div>
    );
    const actions = (
      <div className="flex gap-[10px] py-1 px-2 justify-center items-center">
        <div className="bg-grey-ab p-1 rounded-xs cursor-pointer">
          <DownloadIcon size={16} color="#FDFDFD" />
        </div>
        <div className="bg-error-50 p-1 rounded-xs cursor-pointer">
          <DeleteIcon size={16} color="#810001" />
        </div>
      </div>
    );
    const updatedData = {
      id: id,
      branch: items?.branch,
      document: documents,
      action: actions,
    };

    return updatedData;
  };
  const taxData = [
    {
      branch: "Mooney Valley",
      fileName: "Business Registration",
    },
    {
      branch: "Taupo",
      fileName: "Business Registration",
    },
    {
      branch: "Mooney Valley",
      fileName: "Business Registration",
    },
    {
      branch: "Taupo",
      fileName: "Business Registration",
    },
  ];

  // Memoize fetchData function with useCallback
  const fetchTaxData = useCallback(() => {
    const arr = taxData.map((items, index) => {
      return createTaxData({ ...items, id: index }); // Ensure createData returns the transformed data
    });
    setTaxRows(arr); // Set the rows with the updated data
  }, []); // Empty dependency array ensures this function is only created once

  useEffect(() => {
    fetchTaxData(); // Call fetchData when the component mounts
  }, [fetchTaxData]); // Only re-run fetchData if fetchData changes

  // Table -4 others registration
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<RowData[]>([]);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);

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
    const { id, fileName } = items;
    const documents = (
      <div className="flex justify-center">
        <div className="rounded-xs border  p-2 flex gap-3 items-center bg-primary-50 border-grey-ab-100">
          <DocumentIcon color="#2C398F" />
          <div className="text-grey-ab-800 truncate w-[140px] ">
            {fileName}.pdf
          </div>
        </div>
      </div>
    );
    const actions = (
      <div className="flex gap-[10px] py-1 px-2 justify-center items-center">
        <div className="bg-grey-ab p-1 rounded-xs cursor-pointer">
          <DownloadIcon size={16} color="#FDFDFD" />
        </div>
        <div className="bg-error-50 p-1 rounded-xs cursor-pointer">
          <DeleteIcon size={16} color="#810001" />
        </div>
      </div>
    );
    const updatedData = {
      id: id,
      certificateName: items?.certificateName,
      branch: items?.branch,
      document: documents,
      action: actions,
    };

    return updatedData;
  };
  const data = [
    {
      certificateName: "Mooney Valley",
      branch: "Mooney Valley",
      fileName: "Business Registration",
    },
    {
      certificateName: "Mooney Valley",
      branch: "Taupo",
      fileName: "Business Registration",
    },
    {
      certificateName: "Mooney Valley",
      branch: "Mooney Valley",
      fileName: "Business Registration",
    },
    {
      certificateName: "Mooney Valley",
      branch: "Taupo",
      fileName: "Business Registration",
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
      <div className="flex flex-col gap-4">
        {/* carrier information */}
        <div className="rounded-xs bg-grey-aw-50 shadow-lg">
          {/* top1 */}
          <div className="rounded-t-xs flex justify-between py-4 px-3 items-center">
            <p className="text-lg font-semibold text-grey-ab-900">
              Carrier Information
            </p>
            <div onClick={openAddContactPerson}>
              <PrimaryButton
                label={"Add Contact"}
                size={"l"}
                variant={"primary"}
                leftIcon={<AddIcon color="#FCFCFC" />}
              />
            </div>
          </div>

          {/* top2 */}
          <div className="border-y p-3 flex justify-between items-center border-y-grey-ab-200">
            <div className="flex gap-4 items-center">
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
                // parentStyle="w-[30%]"
                parentStyle="w-[280px]"
              />
              <GroupField
                label={""}
                type={"select"}
                placeholder={"Country of Operation"}
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
                // parentStyle="w-[25%]"
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
              columns={contactColumns}
              rows={contactRows}
              isCheckbox={true}
              onCheckedRowsChange={handleContactCheckedRowsChange}
            />
          </div>

          {/* pagination */}
          <div className="px-3 py-4 flex justify-between items-center rounded-b-xs">
            <div className="text-xs text-grey-ab-200">
              Showing{" "}
              {contactCurrentPage * contactItemsPerPage -
                contactItemsPerPage +
                1}{" "}
              to {contactCurrentPage * contactItemsPerPage} of{" "}
              {contactRows.length} Entries
            </div>

            <CustomPagination
              totalItems={contactRows.length}
              itemsPerPage={contactItemsPerPage}
              currentPage={contactCurrentPage}
              handlePageChange={handleContactChangePage}
            />

            <div className="flex gap-4 items-center">
              <p className="text-xs text-grey-ab-300">Items Per Page</p>
              <Select
                value={contactItemsPerPage}
                onChange={handleContactItemsPerPageChange}
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

        {/* business, tax certificate */}
        <div className="grid grid-cols-2 gap-4 ">
          {/* businness */}
          <div className=" bg-grey-aw-50 rounded-xs">
            <div className="rounded-t-xs border-b border-b-grey-ab-200 p-3 flex justify-between items-center">
              <div className="flex gap-4 items-center w-[70%]">
                <p className="text-sm text-grey-ab-800 font-semibold">
                  Business Registration Certificate
                </p>
                <GroupField
                  label={""}
                  type={"select"}
                  placeholder={"Branch"}
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
                  parentStyle="w-[30%]"
                />
              </div>
              <div onClick={openAddBusinessCertificate}>
                <GreyButton
                  label={"Add Document"}
                  size={"m"}
                  variant={"primary"}
                  leftIcon={<AddIcon size={16} color="#121212" />}
                />
              </div>
            </div>

            {/* table */}
            <CustomTable
              columns={businessColumns}
              rows={businessRows}
              isCheckbox={false}
            />

            {/* pagination */}
            <div className="px-3 py-4 flex justify-between items-center rounded-b-xs">
              <CustomPagination
                totalItems={businessRows.length}
                itemsPerPage={businessItemsPerPage}
                currentPage={businessCurrentPage}
                handlePageChange={handleBusinessChangePage}
              />

              <div className="flex gap-4 items-center">
                <p className="text-xs text-grey-ab-300">Items Per Page</p>
                <Select
                  value={businessItemsPerPage}
                  onChange={handleBusinessItemsPerPageChange}
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

          {/* tax */}
          <div className=" bg-grey-aw-50 rounded-xs">
            <div className="rounded-t-xs border-b border-b-grey-ab-200 p-3 flex justify-between items-center">
              <div className="flex gap-4 items-center w-[70%]">
                <p className="text-sm text-grey-ab-800 font-semibold">
                  Tax Compliance Certificate
                </p>
                <GroupField
                  label={""}
                  type={"select"}
                  placeholder={"Branch"}
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
                  parentStyle="w-[30%]"
                />
              </div>
              <div onClick={openAddTaxCertificate}>
                <GreyButton
                  label={"Add Document"}
                  size={"m"}
                  variant={"primary"}
                  leftIcon={<AddIcon size={16} color="#121212" />}
                />
              </div>
            </div>

            {/* table */}
            <CustomTable
              columns={taxColumns}
              rows={taxRows}
              isCheckbox={false}
            />

            {/* pagination */}
            <div className="px-3 py-4 flex justify-between items-center rounded-b-xs">
              <CustomPagination
                totalItems={taxRows.length}
                itemsPerPage={taxItemsPerPage}
                currentPage={taxCurrentPage}
                handlePageChange={handleTaxChangePage}
              />

              <div className="flex gap-4 items-center">
                <p className="text-xs text-grey-ab-300">Items Per Page</p>
                <Select
                  value={taxItemsPerPage}
                  onChange={handleTaxItemsPerPageChange}
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

        {/* other certificates */}
        <div className="rounded-xs bg-grey-aw-50">
          <div className="rounded-t-xs border-b border-b-grey-ab-200 p-3 flex justify-between items-center">
            <div className="flex gap-4 items-center w-[70%]">
              <p className="text-sm text-grey-ab-800 font-semibold">
                Other Certificates
              </p>
              <GroupField
                label={""}
                type={"text"}
                placeholder={"Search"}
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
                parentStyle="w-[40%]"
              />
              <GroupField
                label={""}
                type={"select"}
                placeholder={"Branch"}
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
                parentStyle="w-[15%]"
              />
            </div>
            <div onClick={openAddOtherCertificate}>
              <GreyButton
                label={"Add Document"}
                size={"m"}
                variant={"primary"}
                leftIcon={<AddIcon size={16} color="#121212" />}
              />
            </div>
          </div>

          {/* table */}
          <CustomTable columns={columns} rows={rows} isCheckbox={false} />

          {/* pagination */}
          <div className="px-3 py-4 flex justify-between items-center rounded-b-xs">
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

      {/* ContactPersonPopup  */}
      {isAddContactPersonOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
          <AddContactPerson onClose={closeAddContactPerson} />
        </div>
      )}

      {/* BusinessCertificatePopup  */}
      {isAddBusinessCertificateOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
          <AddBusinessCertificate onClose={closeAddBusinessCertificate} />
        </div>
      )}

      {/* TaxCertificatePopup  */}
      {isAddTaxCertificateOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
          <AddTaxCertificate onClose={closeAddTaxCertificate} />
        </div>
      )}

      {/* OtherCertificatePopup  */}
      {isAddOtherCertificateOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
          <AddOthersCertificate onClose={closeAddOtherCertificate} />
        </div>
      )}
    </>
  );
};

export default VendorContact;
