import React, { useCallback, useEffect, useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {
  AddIcon,
  ExcelIcon,
  EyeOpenIcon,
  SearchIcon,
} from "../../../components/icons/Icons";
import { Link, useNavigate } from "react-router-dom";
import SuccessButton from "../../../components/buttons/SuccessButton";
import GroupField from "../../../components/groupField/GroupField";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import CustomTable from "../../../components/table/CustomTable";
import CustomPagination from "../../../components/pagination/CustomPagination";
import SalesPersonImage from "/images/sample/employee.png";
import DefaultDp from "/images/defaultProfilePic.png";
import BlueChip from "../../../components/chips/BlueChip";
import SecondaryChip from "../../../components/chips/SecondaryChip";
import PrimaryChip from "../../../components/chips/PrimaryChip";
import ErrorChip from "../../../components/chips/ErrorChip";
import SuccessChip from "../../../components/chips/SuccessChip";
import NeutralBlueButton from "../../../components/buttons/NeutralBlueButton";

interface RowData {
  id: string | number;
  enquiryID: string;
  companyName: string | React.ReactNode;
  enquiredDate: string;
  leadSource: string;
  leadHandlePerson: React.ReactNode;
  shipmentMode: React.ReactNode;
  portOfLoading: string;
  portOfDischarge: string;
  transportationMode: React.ReactNode;
  cargoReadinessDate: string;
  enquiryStatus: React.ReactNode;
  requestedPrice: string | React.ReactNode;
  action: React.ReactNode;
}

const columns: any[] = [
  { id: "enquiryID", label: "Enquiry ID", minWidth: 100 },
  { id: "companyName", label: "Company Name", minWidth: 140 },
  { id: "enquiredDate", label: "Enquired Date", minWidth: 120 },
  { id: "leadSource", label: "Lead Source", minWidth: 110 },
  {
    id: "leadHandlePerson",
    label: "Lead Handle Person",
  },
  { id: "shipmentMode", label: "Shipment Mode", align: "center" },
  { id: "portOfLoading", label: "Port of Loading", minWidth: 140 },
  {
    id: "portOfDischarge",
    label: "Port of Discharge",
    minWidth: 140,
  },
  {
    id: "transportationMode",
    label: "Transportation Mode",
    minWidth: 170,
    align: "center",
  },
  {
    id: "cargoReadinessDate",
    label: "Cargo Readiness Date",
    minWidth: 170,
  },
  {
    id: "enquiryStatus",
    label: "Enquiry Status",
    minWidth: 160,
    align: "center",
  },
  {
    id: "requestedPrice",
    label: "Requested Price",
    minWidth: 130,
    align: "center",
  },
  { id: "action", label: "Action", minWidth: 100, align: "center" },
];

const EnquiryList: React.FC = () => {
  const navigate = useNavigate();
  const handleViewClick = () => {
    navigate("/enquiry/details");
  };

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

  const createData = (items: any) => {
    const {
      id,
      salesPersonName,
      salesPersonImage,
      branchLocation,
      shipmentMode,
      transportationMode,
      enquiryStatus,
      requestedPrice,
    } = items;
    const leadHandlePersons = (
      <div className="min-w-[140px] flex gap-2 items-center py-1">
        <div className="w-10 h-10">
          <img
            src={salesPersonImage || DefaultDp}
            alt={salesPersonName}
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="flex flex-col gap-1 text-xs text-grey-ab-900">
          <div className=" font-semibold ">{salesPersonName}</div>
          <p>{branchLocation}</p>
        </div>
      </div>
    );
    const shipmentModes =
      shipmentMode.toLowerCase() === "export" ? (
        <BlueChip label={shipmentMode} size="m" variant="primary" />
      ) : shipmentMode.toLowerCase() === "import" ? (
        <SecondaryChip label={shipmentMode} size="m" variant="primary" />
      ) : (
        <PrimaryChip label={shipmentMode} size="m" variant="primary" />
      );

    const transportationModes =
      transportationMode.toLowerCase() === "sea freight" ? (
        <BlueChip label={transportationMode} size="m" variant="outline" />
      ) : transportationMode.toLowerCase() === "land freight" ? (
        <PrimaryChip label={transportationMode} size="m" variant="outline" />
      ) : (
        <SecondaryChip label={transportationMode} size="m" variant="outline" />
      );

    const enquiryStatuses =
      enquiryStatus.toLowerCase() === "cancelled" ? (
        <ErrorChip label={enquiryStatus} size="m" variant="fill" />
      ) : enquiryStatus.toLowerCase() === "negotiating" ? (
        <SecondaryChip label={enquiryStatus} size="m" variant="fill" />
      ) : (
        <SuccessChip label={enquiryStatus} size="m" variant="fill" />
      );

    const requestedPrices = (
      <div className="font-semibold text-center">{requestedPrice}</div>
    );

    const actions = (
      <div className="flex justify-center" onClick={handleViewClick}>
        <NeutralBlueButton
          label={"View"}
          size={"s"}
          variant={"primary"}
          rightIcon={<EyeOpenIcon size="16px" color="#FCFCFC" />}
        />
      </div>
    );

    const updatedData = {
      id: id,
      enquiryID: items?.enquiryID,
      companyName: items?.companyName,
      enquiredDate: items?.enquiredDate,
      leadSource: items?.leadSource,
      leadHandlePerson: leadHandlePersons,
      shipmentMode: shipmentModes,
      portOfLoading: items?.portOfLoading,
      portOfDischarge: items?.portOfDischarge,
      transportationMode: transportationModes,
      cargoReadinessDate: items?.cargoReadinessDate,
      enquiryStatus: enquiryStatuses,
      requestedPrice: requestedPrices,
      action: actions,
    };
    return updatedData;
  };

  const data = [
    {
      enquiryID: "3233856",
      companyName: "Farrel Kurniawan",
      enquiredDate: "4/21/12",
      leadSource: "Facebook",
      salesPersonName: "Rina Karina",
      salesPersonImage: SalesPersonImage,
      branchLocation: "Chennai, India",
      shipmentMode: "Export",
      portOfLoading: "Los Angeles, USA",
      portOfDischarge: "Rotterdam, Netherlands",
      transportationMode: "Sea Freight",
      cargoReadinessDate: "11/10/25",
      enquiryStatus: "Cancelled",
      requestedPrice: "2000 USD",
    },
    {
      enquiryID: "3233856",
      companyName: "Farrel Kurniawan",
      enquiredDate: "4/21/12",
      leadSource: "Facebook",
      salesPersonName: "Rina Karina",
      salesPersonImage: null,
      branchLocation: "Chennai, India",
      shipmentMode: "Import",
      portOfLoading: "Los Angeles, USA",
      portOfDischarge: "Antwerp, Belgium",
      transportationMode: "Land Freight",
      cargoReadinessDate: "11/10/25",
      enquiryStatus: "Converted to booking",
      requestedPrice: "2000 USD",
    },
    {
      enquiryID: "3233856",
      companyName: "Farrel Kurniawan",
      enquiredDate: "4/21/12",
      leadSource: "Facebook",
      salesPersonName: "Rina Karina",
      salesPersonImage: SalesPersonImage,
      branchLocation: "Chennai, India",
      shipmentMode: "Cross Trade",
      portOfLoading: "Los Angeles, USA",
      portOfDischarge: "Antwerp, Belgium",
      transportationMode: "Air Freight",
      cargoReadinessDate: "11/10/25",
      enquiryStatus: "Negotiating",
      requestedPrice: "2000 USD",
    },
    {
      enquiryID: "3233856",
      companyName: "Farrel Kurniawan",
      enquiredDate: "4/21/12",
      leadSource: "Facebook",
      salesPersonName: "Rina Karina",
      salesPersonImage: SalesPersonImage,
      branchLocation: "Chennai, India",
      shipmentMode: "Export",
      portOfLoading: "Los Angeles, USA",
      portOfDischarge: "Rotterdam, Netherlands",
      transportationMode: "Sea Freight",
      cargoReadinessDate: "11/10/25",
      enquiryStatus: "Cancelled",
      requestedPrice: "2000 USD",
    },
    {
      enquiryID: "3233856",
      companyName: "Farrel Kurniawan",
      enquiredDate: "4/21/12",
      leadSource: "Facebook",
      salesPersonName: "Rina Karina",
      salesPersonImage: null,
      branchLocation: "Chennai, India",
      shipmentMode: "Import",
      portOfLoading: "Los Angeles, USA",
      portOfDischarge: "Antwerp, Belgium",
      transportationMode: "Land Freight",
      cargoReadinessDate: "11/10/25",
      enquiryStatus: "Converted to booking",
      requestedPrice: "2000 USD",
    },
    {
      enquiryID: "3233856",
      companyName: "Farrel Kurniawan",
      enquiredDate: "4/21/12",
      leadSource: "Facebook",
      salesPersonName: "Rina Karina",
      salesPersonImage: SalesPersonImage,
      branchLocation: "Chennai, India",
      shipmentMode: "Cross Trade",
      portOfLoading: "Los Angeles, USA",
      portOfDischarge: "Antwerp, Belgium",
      transportationMode: "Air Freight",
      cargoReadinessDate: "11/10/25",
      enquiryStatus: "Negotiating",
      requestedPrice: "2000 USD",
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
      <div className="bg-grey-aw-50 shadow-lg rounded-xs">
        <div className="flex p-3 justify-between items-center">
          <p className="text-lg text-grey-ab-900 font-semibold">Enquiry List</p>
          <Link to={"/enquiry/add"}>
            <PrimaryButton
              label={"Add Enquiry"}
              size={"l"}
              variant={"primary"}
              leftIcon={<AddIcon color="#FCFCFC" />}
            />
          </Link>
        </div>
        <div className="flex p-3 border-y border-y-grey-ab-200 justify-between items-center">
          <div className="flex gap-4 w-[80%]">
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
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              rightIcon={<SearchIcon color="#6A6A6A" />}
              parentStyle="w-[35%]"
            />
            <GroupField
              label={""}
              type={"select"}
              placeholder={"Transportation Mode"}
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
              parentStyle="w-[30%]"
            />
            <GroupField
              label={""}
              type={"select"}
              placeholder={"Enquiry Status"}
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
              parentStyle="w-[25%]"
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
        {/* list table */}
        <div className="px-3 py-1">
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

export default EnquiryList;
