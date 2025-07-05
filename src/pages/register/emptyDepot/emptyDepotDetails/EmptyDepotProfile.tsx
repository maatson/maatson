import React, { useCallback, useEffect, useState } from "react";
import BlackButton from "../../../../components/buttons/BlackButton";
import ErrorButton from "../../../../components/buttons/ErrorButton";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";
import {
  AddIcon,
  CrossIcon,
  DeleteIcon,
  DocumentIcon,
  DownloadIcon,
  EditIcon,
  ExcelIcon,
  SearchIcon,
  SendIcon,
  SettingsIcon,
} from "../../../../components/icons/Icons";
import EmptyDepotLogo from "/images/emptyDepotLogo.png";
import ProfileBoxLayout from "../../layouts/ProfileBoxLayout";
import SecondaryChip from "../../../../components/chips/SecondaryChip";
import PrimaryChip from "../../../../components/chips/PrimaryChip";
import CustomTable from "../../../../components/table/CustomTable";
import SuccessButton from "../../../../components/buttons/SuccessButton";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import CustomPagination from "../../../../components/pagination/CustomPagination";
import GroupField from "../../../../components/groupField/GroupField";
import AddContactPerson from "../../forms/AddContactPerson";
import { NavLink, useParams } from "react-router-dom";

interface DepotStorageDetailsProps {
  containerType: string;
  storageCharges: string | number;
  storageChargesCurrency: string | number;
  liftOnCharges: string | number;
  liftOnChargesCurrency: string | number;
}

interface DepotRowData {
  id: string | number;
  containerType: string | React.ReactNode;
  storageCharges: string | React.ReactNode;
  liftOnCharges: string | React.ReactNode;
}

interface RowData {
  id: string | number;
  contactName: string | React.ReactNode;
  department: string | React.ReactNode;
  email: string | React.ReactNode;
  mobileNumber: string | React.ReactNode;
  alternateMobileNumber: string | React.ReactNode;
  action: React.ReactNode;
}

const depotColumns: any[] = [
  { id: "containerType", label: "Container Type" },
  { id: "storageCharges", label: "Storage Charges" },
  { id: "liftOnCharges", label: "Lift On Charges" },
];

const columns: any[] = [
  {
    id: "contactName",
    label: "Contact Name",
    minWidth: 130,
  },
  { id: "department", label: "Department", minWidth: 100 },
  { id: "email", label: "Email" },
  { id: "mobileNumber", label: "Mobile Number" },
  { id: "alternateMobileNumber", label: "Alternative Contact" },
  {
    id: "action",
    label: "Action",
    align: "center",
    minWidth: 100,
  },
];

const EmptyDepotProfile: React.FC = () => {
  const { id } = useParams();
  const [isAddContact, setIsAddContact] = useState<boolean>(false);

  const [depotRows, setDepotRows] = useState<DepotRowData[]>([]);
  const [selectedDepotRows, setSelectedDepotRows] = useState<
    (string | number)[]
  >([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<RowData[]>([]);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);

  const [data, setData] = useState({
    depotCompanyLogo: null as File | null,
    emptyDepotName: "",
    doorNumber: "",
    street: "",
    city: "",
    postalCode: "",
    country: "",
    companyEmail: "",
    companyMobileNumber: "",
    companyWebsite: "",
    emptyDepotProductOrServices: [] as string[], //array
    primaryContactName: "",
    contactPersonDepartment: "",
    contactPersonEmail: "",
    contactPersonMobileNumber: "",
    contactPersonAlternateMobileNumber: "",
    operationalSince: "",

    depotStorageDetails: [
      {
        containerType: "20’ft Open Top",
        storageCharges: "100",
        storageChargesCurrency: "USD",
        liftOnCharges: "20",
        liftOnChargesCurrency: "USD",
      },
      {
        containerType: "20’ft Dry Container",
        storageCharges: "100",
        storageChargesCurrency: "USD",
        liftOnCharges: "20",
        liftOnChargesCurrency: "USD",
      },
      {
        containerType: "40’ft Reefers",
        storageCharges: "100",
        storageChargesCurrency: "USD",
        liftOnCharges: "20",
        liftOnChargesCurrency: "USD",
      },
      {
        containerType: "20’ft Open Top",
        storageCharges: "100",
        storageChargesCurrency: "USD",
        liftOnCharges: "20",
        liftOnChargesCurrency: "USD",
      },
    ] as DepotStorageDetailsProps[],

    depotCapacity: "",
    depotWorkingHours: "",
    freeStorageDays: "",
    businessRegistrationCertificate: null as File | null,
    depotTrafficCertificate: null as File | null,
  });
  const contactData = [
    {
      contactName: "Barmaleeva N.",
      department: "Sales ",
      email: "tranthuy.nute@gmail.com",
      mobileNumber: "+447700960035",
      alternateMobileNumber: "+447700960035",
    },
    {
      contactName: "Ranjish",
      department: "Finance ",
      email: "tranthuy.nute@gmail.com",
      mobileNumber: "+447700960035",
      alternateMobileNumber: "+447700960035",
    },
    {
      contactName: "Barmaleeva N.",
      department: "Sales ",
      email: "tranthuy.nute@gmail.com",
      mobileNumber: "+447700960035",
      alternateMobileNumber: "+447700960035",
    },
    {
      contactName: "Ranjish",
      department: "Sales ",
      email: "tranthuy.nute@gmail.com",
      mobileNumber: "+447700960035",
      alternateMobileNumber: "+447700960035",
    },
  ];

  // handling methods
  const handleCheckedDepotRowsChange = (
    newCheckedRows: (string | number)[]
  ) => {
    setSelectedDepotRows(newCheckedRows);
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

  // creating data sets for tables
  const createDepotData = (items: any) => {
    const { id } = items;

    const updatedData = {
      id: id,
      containerType: items?.containerType,
      storageCharges:
        items?.storageCharges + " " + items?.storageChargesCurrency,
      liftOnCharges: items?.liftOnCharges + " " + items?.liftOnChargesCurrency,
    };
    return updatedData;
  };

  const createData = (items: any) => {
    const { id } = items;
    const actions = (
      <div className="px-2 py-1 gap-2 flex justify-center items-center font-semibold">
        <div
          className="p-1 rounded-xs bg-error-50 cursor-pointer"
          onClick={() => alert("Deleting this row using backend")}
        >
          <DeleteIcon size={16} color="#810001" />
        </div>
        <div className="p-1 rounded-xs bg-success-50 cursor-pointer">
          <SendIcon size={16} color="#007B33" />
        </div>
      </div>
    );

    const updatedData = {
      id: id,
      contactName: items?.contactName,
      department: items?.department,
      email: items?.email,
      mobileNumber: items?.mobileNumber,
      alternateMobileNumber: items?.alternateMobileNumber,
      action: actions,
    };

    return updatedData;
  };

  // fetching datas
  const fetchDepotData = useCallback(() => {
    const arr = data.depotStorageDetails.map((items, index) => {
      return createDepotData({ ...items, id: index });
    });
    setDepotRows(arr);
  }, []);

  const fetchData = useCallback(() => {
    const arr = contactData.map((items, index) => {
      return createData({ ...items, id: index });
    });
    setRows(arr);
  }, []);

  // useEffects
  useEffect(() => {
    fetchDepotData();
  }, [fetchDepotData]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className="flex gap-4 p-4 rounded-xs bg-grey-aw-50">
        <div className="flex flex-col gap-4 min-w-[250px]  ">
          <div className="flex flex-col gap-2">
            <div className="px-14 py-7 rounded-sm bg-grey-100 relative">
              <div>
                <img src={EmptyDepotLogo} alt="EmptyDepotLogo" />
              </div>
              <div className="p-1 rounded-xs bg-blue-50 cursor-pointer absolute top-2 right-2">
                <EditIcon size={16} color="#0091FF" />
              </div>
            </div>
            <p className="text-lg font-bold text-grey-ab-800">
              Global Freight Solutions Ltd.
            </p>
            <div className="flex gap-3">
              <BlackButton
                label={"Mail To"}
                size={"s"}
                variant={"primary"}
                style="w-full"
              />
              <ErrorButton
                label={"Delete Depot"}
                size={"s"}
                variant={"primary"}
                style="w-full"
              />
            </div>
          </div>

          <NavLink to={`/registration-empty-depot/edit/${id}`}>
            <PrimaryButton
              label={"Edit Profile"}
              size={"l"}
              variant={"primary"}
              leftIcon={<EditIcon color="#ffffff" />}
              style="w-full"
            />
          </NavLink>
        </div>

        <div className="border-l h-full border-l-grey-600"></div>

        <div className="flex flex-col gap-6 justify-between">
          <div className="grid grid-cols-3 gap-4">
            <ProfileBoxLayout title={"Company Email"} value={"info@msc.com"} />
            <ProfileBoxLayout
              title={"Company Phone Number"}
              value={"	+91 9876543210"}
            />
            <ProfileBoxLayout
              title={"Company Address"}
              value={"123 Logistics Avenue, Chennai, B-12, 600032, India"}
            />
            <ProfileBoxLayout
              title={"Website"}
              value={"www.globalfreight.com"}
            />
            <ProfileBoxLayout title={"Operational Since"} value={"2000"} />
            <ProfileBoxLayout title={"Depot Capacity (TEU)"} value={"10 TUE"} />
            <ProfileBoxLayout
              title={"Depot Working Hours"}
              value={"9:00 pm to 10:00 am"}
            />
            <ProfileBoxLayout
              title={"Free Storage Days"}
              value={
                <SecondaryChip
                  label={"10days"}
                  size={"xl"}
                  variant={"primary"}
                />
              }
            />
          </div>
          <div className="flex gap-6 ">
            <div className="flex flex-col gap-3 ">
              <p className="text-grey-ab-300">
                Business Registration Certificate
              </p>
              <div className="rounded-xs border p-2 flex gap-3 items-center w-[250px] bg-primary-50 border-grey-ab-100">
                <DocumentIcon color="#2C398F" />
                <div className="text-grey-ab-800 truncate w-[140px] cursor-pointer">
                  reg-cert.pdf
                </div>
                <div className="flex gap-1">
                  <div className="rounded-xs p-1 bg-grey-ab cursor-pointer">
                    <DownloadIcon size={16} color="#FDFDFD" />
                  </div>
                  <div className="p-1 cursor-pointer">
                    <CrossIcon size={16} color="#121212" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 ">
              <p className="text-grey-ab-300">Depot Tariff</p>
              <div className="rounded-xs border p-2 flex gap-3 items-center w-[250px] bg-primary-50 border-grey-ab-100">
                <DocumentIcon color="#2C398F" />
                <div className="text-grey-ab-800 truncate w-[140px] cursor-pointer">
                  Depot Tariff.xls
                </div>
                <div className="flex gap-1">
                  <div className="rounded-xs p-1 bg-grey-ab cursor-pointer">
                    <DownloadIcon size={16} color="#FDFDFD" />
                  </div>
                  <div className="p-1 cursor-pointer">
                    <CrossIcon size={16} color="#121212" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col bg-grey-aw-50 rounded-xs w-[39%] shadow-md">
          <div className="px-4 py-3 border-b border-b-grey-ab-100">
            <div className="flex gap-4 items-center">
              <div>
                <SettingsIcon />
              </div>
              <p className="text-lg font-semibold text-grey-ab-800">
                Empty Depot Services
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 p-4">
            <PrimaryChip
              label={"Stacking & Lifting"}
              size={"xl"}
              variant={"mix"}
            />
            <PrimaryChip
              label={"Cleaning & Washing (Interior/Exterior)"}
              size={"xl"}
              variant={"mix"}
            />
            <PrimaryChip
              label={"Power Plug-in for Reefer Containers"}
              size={"xl"}
              variant={"mix"}
            />
            <PrimaryChip
              label={"Temperature Monitoring"}
              size={"xl"}
              variant={"mix"}
            />
            <PrimaryChip
              label={"Container Repair"}
              size={"xl"}
              variant={"mix"}
            />
            <PrimaryChip
              label={"Container Repair"}
              size={"xl"}
              variant={"mix"}
            />
          </div>
        </div>

        <div className="bg-white rounded w-[60%]">
          <div className="p-3 flex justify-between items-center text-grey-ab-900 ">
            <p className="text-lg font-semibold">Depot Storage Charges</p>
            <SuccessButton
              label={"Export"}
              size={"lg"}
              variant={""}
              rightIcon={<ExcelIcon color="#fdfdfd" />}
            />
          </div>

          <div className="px-3 py-2">
            <CustomTable
              columns={depotColumns}
              rows={depotRows}
              isCheckbox={true}
              onCheckedRowsChange={handleCheckedDepotRowsChange}
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded">
        <div className="p-3 flex justify-between items-center text-grey-ab-900 ">
          <p className="text-lg font-semibold">Contact Information</p>
          <div onClick={() => setIsAddContact(true)}>
            <PrimaryButton
              label={"Add Contact"}
              size={""}
              variant={""}
              leftIcon={<AddIcon color="#fdfdfd" />}
            />
          </div>
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
              placeholder={"Country of Operation"}
              name={""}
              value={""}
              size="s"
              parentStyle="max-w-[220px] w-full min-w-[180px]"
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

      {isAddContact && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
          <AddContactPerson onClose={() => setIsAddContact(false)} />
        </div>
      )}
    </>
  );
};

export default EmptyDepotProfile;
