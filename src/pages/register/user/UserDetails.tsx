import React, { useCallback, useEffect, useState } from "react";
import companyLogo from "/images/sample/evergreenCompanyLogo.png";
import dp from "/images/defaultProfilePic.png";
import {
  AttendenceIcon,
  DeleteIcon,
  DocumentIcon,
  DownloadIcon,
  EditIcon,
  ExcelIcon,
  EyeCloseIcon,
  EyeOpenIcon,
  PasswordIcon,
  SendIcon,
  UploadIcon,
} from "../../../components/icons/Icons";
import ErrorButton from "../../../components/buttons/ErrorButton";
import BlackButton from "../../../components/buttons/BlackButton";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import PrimaryChip from "../../../components/chips/PrimaryChip";
import NeutralBlueButton from "../../../components/buttons/NeutralBlueButton";
import GroupField from "../../../components/groupField/GroupField";
import GreyButton from "../../../components/buttons/GreyButton";
import SuccessButton from "../../../components/buttons/SuccessButton";
import CustomTable from "../../../components/table/CustomTable";
import { Link } from "react-router-dom";
import SecondaryChip from "../../../components/chips/SecondaryChip";
import { MenuItem, Select } from "@mui/material";
import CustomPagination from "../../../components/pagination/CustomPagination";
import ProfileBoxLayout from "../layouts/ProfileBoxLayout";

interface ContactPersonRowData {
  id: string | number;
  contactName: string | React.ReactNode;
  email: string | React.ReactNode;
  mobileNumber: number | React.ReactNode;
  department: string | React.ReactNode;
  handlingRegion: string | React.ReactNode;
  action: React.ReactNode; // If you have any actions like buttons or components
}
interface DocumentRowData {
  id: string | number;
  documentName: string | React.ReactNode;
  documentFile: string | React.ReactNode;
  updatedDate: number | React.ReactNode;
  action: React.ReactNode; // If you have any actions like buttons or components
}

const documentColumns: any[] = [
  { id: "documentName", label: "Document Name" },
  {
    id: "documentFile",
    label: "Document File",
  },
  { id: "updatedDate", label: "Updated Date" },
  {
    id: "action",
    label: "Action",
    align: "center",
  },
];

const contactPersonColumns: any[] = [
  { id: "contactName", label: "Contact Name" },
  {
    id: "email",
    label: "Email",
    minWidth: "180px",
  },
  { id: "mobileNumber", label: "Mobile Number" },
  { id: "department", label: "Department", align: "center" },
  { id: "handlingRegion", label: "Handling Region", align: "center" },
  {
    id: "action",
    label: "Action",
    align: "center",
  },
];

const UserDetails: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [eyeIcon, setEyeIcon] = useState<boolean>(false);
  const [isChangePassword, setChangePassword] = useState<boolean>(false);
  const [contactPersonRows, setContactPersonRows] = useState<
    ContactPersonRowData[]
  >([]);
  const [documentRows, setDocumentRows] = useState<DocumentRowData[]>([]);

  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]); // Track selected row ids

  const handleChangePassword = () => {
    console.log("save");
    setChangePassword((prev) => !prev);
  };

  const handleCheckedRowsChange = (newCheckedRows: (string | number)[]) => {
    setSelectedRows(newCheckedRows);
  };

  const handlechangePage = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };
  const contactPersonData = [
    {
      contactName: "John Doe",
      email: "email@123",
      mobileNumber: "468688879",
      department: "Sales",
      handlingRegion: "New York",
    },
    {
      contactName: "",
      email: "email@123",
      mobileNumber: "9728977628",
      department: "Tech",
      handlingRegion: "San Francisco",
    },
    {
      contactName: "Pavi ",
      email: "email@123",
      mobileNumber: "9867268929",
      department: "Tech",
      handlingRegion: "San Francisco",
    },
    {
      contactName: "Janani ",
      email: "email@123",
      mobileNumber: "89726899628",
      department: "Tech",
      handlingRegion: "San Francisco",
    },
  ];
  const documentData = [
    {
      documentName: "Manager",
      documentFile: "Sales",
      updatedDate: "2025-02-01",
    },
    {
      documentName: "absent",
      documentFile: "Developer",
      department: "Tech",
      updatedDate: "2025-02-01",
    },
    {
      documentName: "leave",
      documentFile: "senior Developer",
      department: "Tech",
      updatedDate: "2025-02-01",
    },
    {
      documentName: "vacation",
      documentFile: "junior Developer",
      department: "Tech",
      updatedDate: "",
    },
  ];

  // Memoize fetchData function with useCallback
  const fetchContactPersonData = useCallback(() => {
    const createData = (items: any) => {
      const {
        id,
        contactName,
        email,
        mobileNumber,
        department,
        handlingRegion,
      } = items;
      // Define your actions or any other custom logic you need for each row
      const actions = (
        <div className="px-2 py-1 gap-2 flex justify-center items-center font-semibold">
          <div className="w-6 h-6 rounded flex justify-center items-center bg-error-50">
            <DeleteIcon size={16} color="#810001" />
          </div>
          <div className="w-6 h-6 rounded flex justify-center items-center bg-success-50 ">
            <SendIcon size={16} color="#009f41" />
          </div>
        </div>
      );

      const handlingRegionValue = handlingRegion ? (
        <div className="px-2 py-1 flex items-center font-semibold text-sm justify-center">
          <SecondaryChip
            label={handlingRegion}
            size={"s"}
            variant={"outline"}
          />
        </div>
      ) : (
        "-"
      );

      // Ensure all columns have a value (or a default) for each row.
      const updatedData = {
        id: id,
        contactName: contactName || "-",
        email: email || "-",
        mobileNumber: mobileNumber || "-",
        department: department || "-",
        handlingRegion: handlingRegionValue,
        action: actions,
      };

      return updatedData;
    };
    const arr = contactPersonData.map((items, index) => {
      return createData({ ...items, id: index }); // Ensure createData returns the transformed data
    });
    setContactPersonRows(arr); // Set the rows with the updated data
  }, []); // Empty dependency array ensures this function is only created once
  // Memoize fetchData function with useCallback
  const fetchDocumentData = useCallback(() => {
    const createData = (items: any) => {
      const { id, documentName, documentFile, updatedDate } = items;
      // Define your actions or any other custom logic you need for each row
      const actions = (
        <div className="px-2 py-1 gap-2 flex justify-center items-center font-semibold">
          <div className="w-6 h-6 rounded flex justify-center items-center bg-error-50">
            <DeleteIcon size={16} color="#810001" />
          </div>
          <div className="w-6 h-6 rounded flex justify-center items-center bg-blue-50 ">
            <DocumentIcon size={16} color="#00508c" />
          </div>
          <div className="w-6 h-6 rounded flex justify-center items-center bg-success-50 ">
            <DownloadIcon size={16} color="#009f41" />
          </div>
        </div>
      );

      const documentFileValue = documentFile ? (
        <div className=" py-1 flex items-center gap-3 text-sm">
          <DocumentIcon color="#2c398f" />
          <p className="w-full"> {documentFile}</p>
        </div>
      ) : (
        "-"
      );

      // Ensure all columns have a value (or a default) for each row.
      const updatedData = {
        id: id,
        documentName: documentName || "-", // Default value if not available
        documentFile: documentFileValue, // Default value if not available
        updatedDate: updatedDate || "-", // Default value if not available
        action: actions, // Actions will remain the same as you defined
      };

      return updatedData;
    };
    const arr = documentData.map((items, index) => {
      return createData({ ...items, id: index }); // Ensure createData returns the transformed data
    });
    setDocumentRows(arr); // Set the rows with the updated data
  }, []); // Empty dependency array ensures this function is only created once

  useEffect(() => {
    fetchContactPersonData(); // Call fetchData when the component mounts
  }, [fetchContactPersonData]); // Only re-run fetchData if fetchData changes
  useEffect(() => {
    fetchDocumentData(); // Call fetchData when the component mounts
  }, [fetchDocumentData]); // Only re-run fetchData if fetchData changes

  return (
    <>
      <div className="flex gap-4">
        <div className="bg-grey-aw-50 min-h-screen max-w-sm basis-1/3 rounded shadow-xs">
          <p className="px-4 py-3 text-lg font-semibold border-b border-grey-ab-100">
            Company Details
          </p>
          <div className="px-5 py-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="w-full border p-4 relative">
                <img
                  src={companyLogo}
                  alt="companyLogo"
                  className="object-fit h-full w-full"
                />
                <div className="absolute top-4 right-4 w-6 h-6 bg-blue-50 rounded flex items-center justify-center z-10 cursor-pointer">
                  <EditIcon color="#0091FF" size={16} />
                </div>
              </div>
              <p className="text-lg font-semibold text-center">
                Evergreen Marine Corporation
              </p>{" "}
              <div className="flex items-center gap-3">
                <BlackButton
                  label={"Mail To"}
                  size={"s"}
                  variant={""}
                  style="w-full  justify-center"
                />
                <ErrorButton
                  label={"Deactivate"}
                  size={"s"}
                  variant={""}
                  style="w-full  justify-center"
                />
              </div>
            </div>
            <PrimaryButton label={"Edit Profile"} size={"l"} variant={""} />
            <div className="border-b border-grey-ab-50"></div>
            <ProfileBoxLayout
              title={"Company Email"}
              value={"ksg@evergreen-marine.com"}
            />
            <ProfileBoxLayout
              title={"Company Phone Number"}
              value={"+886-7-337-8141"}
            />
            <ProfileBoxLayout
              title={"Company Address"}
              value={
                "1-4F., No.166, Sec. 2, Minsheng E. Rd., Zhongshan Dist., Taipei City 104473, Taiwan (ROC)"
              }
            />
            <ProfileBoxLayout
              title={"Website"}
              value={"www.evergreen-marine.com"}
            />
            <div className="flex flex-col gap-3 p-3 bg-blue-50 rounded-sm text-grey-ab-300">
              <p>Business Type</p>
              <div className="border-b border-grey-ab-300"></div>
              <div className="flex flex-wrap gap-3">
                <PrimaryChip label={"Shipper"} size={"m"} variant={"mix"} />
                <PrimaryChip label={"Consignee"} size={"m"} variant={"mix"} />
                <PrimaryChip label={"Vendor"} size={"m"} variant={"mix"} />
                <PrimaryChip
                  label={"Issuing Carrier"}
                  size={"m"}
                  variant={"mix"}
                />
                <PrimaryChip label={"Co Leader"} size={"xl"} variant={"mix"} />
                <PrimaryChip
                  label={"New Party Name"}
                  size={"m"}
                  variant={"mix"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-grow w-2/3">
          <div className="bg-grey-aw-50 rounded shadow-xs">
            {" "}
            <p className="px-4 py-3 text-lg font-semibold border-b border-grey-ab-100">
              User Details
            </p>
            <div className="px-3 py-4  flex items-center justify-between ">
              <div className="flex items-center  gap-3">
                <div className=" flex items-center justify-center flex-shrink-0">
                  <img src={dp} alt="dp" className="object-contain h-8 w-8" />
                </div>
                <div className="flex flex-col gap-1 text-grey-ab-600 w-full">
                  <p className="font-semibold">Regina Anderson</p>
                  <p className="text-sm">@Regina123</p>
                </div>
              </div>
              <ProfileBoxLayout title={"Department"} value={"Sales"} />
            </div>
            <div className="px-3 py-4  flex items-center  justify-between  flex-wrap ">
              <ProfileBoxLayout
                title={"Email"}
                value={"tranthuy.nute@gmail.com"}
              />
              <ProfileBoxLayout
                title={"Mobile Number"}
                value={"+886-7-337-8141"}
              />
              <ProfileBoxLayout
                title={"Alternative Email"}
                value={"tranthuy.nute@gmail.com"}
              />
            </div>
          </div>
          <div className="bg-grey-aw-50 rounded shadow-xs">
            {" "}
            <div className="flex justify-between px-4 py-3 border-b border-grey-ab-100 items-center">
              <p className=" text-lg font-semibold  ">Password </p>{" "}
              <div
                onClick={
                  isChangePassword
                    ? handleChangePassword
                    : () => setChangePassword((prev) => !prev)
                }
              >
                <NeutralBlueButton
                  label={isChangePassword ? "save" : "Change Password"}
                  size={"m"}
                  variant={""}
                  rightIcon={!isChangePassword && <EditIcon color="#fdfdfd" />}
                />
              </div>
            </div>
            {isChangePassword && (
              <div className="flex px-4 py-3  gap-3">
                <GroupField
                  type={eyeIcon ? "text" : "password"}
                  name={"password"}
                  value={""}
                  onChange={() => {}}
                  leftIcon={<PasswordIcon color="#2C398F" />}
                  rightIcon={
                    eyeIcon ? (
                      <EyeOpenIcon color="#2C398F" />
                    ) : (
                      <EyeCloseIcon color="#2C398F" />
                    )
                  }
                  onClickRightIcon={() => setEyeIcon((prev) => !prev)}
                  error={false}
                  errorMessage={""}
                  label={"Password*"}
                  placeholder={"Enter Password"}
                />
                <GroupField
                  type={eyeIcon ? "text" : "password"}
                  name={"confirmPassword"}
                  value={""}
                  onChange={() => {}}
                  leftIcon={<PasswordIcon color="#2C398F" />}
                  rightIcon={
                    eyeIcon ? (
                      <EyeOpenIcon color="#2C398F" />
                    ) : (
                      <EyeCloseIcon color="#2C398F" />
                    )
                  }
                  onClickRightIcon={() => setEyeIcon((prev) => !prev)}
                  error={false}
                  errorMessage={""}
                  label={"Confirm Password*"}
                  placeholder={"Enter Confirm Password"}
                />
              </div>
            )}
          </div>
          <div className="bg-grey-aw-50 rounded shadow-xs">
            <div className="flex justify-between px-4 py-3 border-b border-grey-ab-100 items-center">
              <p className=" text-lg font-semibold  "> KYC Document </p>
              <GreyButton
                label={"Add Document"}
                size={"s"}
                variant={""}
                rightIcon={<UploadIcon size={16} />}
              />
            </div>
            <div className="px-3 py-2">
              <CustomTable
                columns={documentColumns}
                rows={documentRows}
                isCheckbox={false}
              />
            </div>
          </div>
          <div className="bg-grey-aw-50 rounded shadow-xs overflow-auto">
            <div className="flex justify-between px-4 py-3 border-b border-grey-ab-100 items-center">
              <p className=" text-lg font-semibold  "> Contact Persons </p>
              <div className="flex items-center gap-4 justify-end">
                <GreyButton
                  label={"Add Contact Person"}
                  size={"s"}
                  variant={""}
                  rightIcon={<UploadIcon size={16} />}
                />
                <SuccessButton
                  label={"Export"}
                  size={"s"}
                  variant={""}
                  rightIcon={<ExcelIcon size={16} color="#fdfdfd" />}
                />
              </div>
            </div>
            <div className="px-3 py-2">
              <CustomTable
                columns={contactPersonColumns}
                rows={contactPersonRows}
                isCheckbox={true}
                onCheckedRowsChange={handleCheckedRowsChange}
              />
            </div>
            <div className="px-3 py-4 flex justify-between items-center">
              <div className="text-xs text-grey-ab-200">
                Showing {currentPage * 5 - 5 + 1} to{" "}
                {currentPage *
                  (5 > contactPersonRows.length
                    ? contactPersonRows.length
                    : 5)}{" "}
                of {contactPersonRows.length} Entries
              </div>

              <CustomPagination
                totalItems={contactPersonRows.length}
                itemsPerPage={5}
                currentPage={currentPage}
                handlePageChange={handlechangePage}
              />

              {/* <div className="flex gap-4 items-center">
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
        </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 shadow-xs flex bg-grey-aw-50 rounded min-h-screen justify-center items-center">
        <h6 className="h6">
          Chats will develop after backend process implement
        </h6>
      </div>
    </>
  );
};

export default UserDetails;
