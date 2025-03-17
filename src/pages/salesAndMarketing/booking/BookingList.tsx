import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {
  AddIcon,
  ExcelIcon,
  EyeOpenIcon,
  SearchIcon,
} from "../../../components/icons/Icons";
import CustomPagination from "../../../components/pagination/CustomPagination";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import CustomTable from "../../../components/table/CustomTable";
import SuccessButton from "../../../components/buttons/SuccessButton";
import GroupField from "../../../components/groupField/GroupField";
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
  bookingID: string;
  companyName: string | React.ReactNode;
  shipmentMode: React.ReactNode;
  attender: string;
  bookingHandlePerson: React.ReactNode;
  transportationMode: React.ReactNode;
  portOfLoading: string;
  portOfDischarge: string;
  nextFollowUps: string;
  bookingStatus: React.ReactNode;
  bookingValidityDate: string;
  agreedRate: string | React.ReactNode;
  action: React.ReactNode;
}

const columns: any[] = [
  { id: "bookingID", label: "Booking ID", minWidth: 100 },
  { id: "companyName", label: "Company Name", minWidth: 140 },
  { id: "shipmentMode", label: "Shipment Mode", align: "center" },
  { id: "attender", label: "Attender", minWidth: 110 },
  {
    id: "bookingHandlePerson",
    label: "Booking Handling Person",
    minWidth: 180,
  },
  {
    id: "transportationMode",
    label: "Transportation Mode",
    minWidth: 170,
    align: "center",
  },
  { id: "portOfLoading", label: "Port of Loading", minWidth: 150 },
  {
    id: "portOfDischarge",
    label: "Port of Discharge",
    minWidth: 150,
  },
  {
    id: "nextFollowUps",
    label: "Next Follow Ups",
    minWidth: 120,
  },
  {
    id: "bookingStatus",
    label: "Booking Status",
    minWidth: 140,
    align: "center",
  },
  {
    id: "bookingValidityDate",
    label: "Booking Validity Date",
    minWidth: 160,
  },
  {
    id: "agreedRate",
    label: "Agreed Rate",
    minWidth: 100,
    align: "center",
  },
  { id: "action", label: "Action", minWidth: 120, align: "center" },
];

const BookingList: React.FC = () => {
  const navigate = useNavigate();
  const handleViewClick = (id: any) => {
    navigate(`/booking/details/${id}`);
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
      shipmentMode,
      salesPersonName,
      salesPersonImage,
      branchLocation,
      transportationMode,
      bookingStatus,
      agreedRate,
    } = items;
    const bookingHandlePersons = (
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

    const bookingStatuses =
      bookingStatus.toLowerCase() === "cancelled" ? (
        <ErrorChip label={bookingStatus} size="m" variant="fill" />
      ) : bookingStatus.toLowerCase() === "processing" ? (
        <BlueChip label={bookingStatus} size="m" variant="fill" />
      ) : (
        <SuccessChip label={bookingStatus} size="m" variant="fill" />
      );

    const agreedRates = (
      <div className="font-semibold text-center">{agreedRate}</div>
    );

    const actions = (
      <div className="flex justify-center" onClick={() => handleViewClick(id)}>
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
      bookingID: items?.bookingID,
      companyName: items?.companyName,
      shipmentMode: shipmentModes,
      attender: items?.attender,
      bookingHandlePerson: bookingHandlePersons,
      transportationMode: transportationModes,
      portOfLoading: items?.portOfLoading,
      portOfDischarge: items?.portOfDischarge,
      nextFollowUps: items?.nextFollowUps,
      bookingStatus: bookingStatuses,
      bookingValidityDate: items?.bookingValidityDate,
      agreedRate: agreedRates,
      action: actions,
    };
    return updatedData;
  };

  const data = [
    {
      bookingID: "3233856",
      companyName: "Farrel Kurniawan",
      shipmentMode: "Export",
      attender: "Pantleev A",
      salesPersonName: "Rina Karina",
      salesPersonImage: SalesPersonImage,
      branchLocation: "Chennai, India",
      transportationMode: "Sea Freight",
      portOfLoading: "Los Angeles, USA",
      portOfDischarge: "Rotterdam, Netherlands",
      nextFollowUps: "11/10/25",
      bookingStatus: "Cancelled",
      bookingValidityDate: "11/10/25",
      agreedRate: "2000 USD",
    },
    {
      bookingID: "3233856",
      companyName: "Farrel Kurniawan",
      shipmentMode: "Cross Trade",
      attender: "Pantleev A",
      salesPersonName: "Rina Karina",
      salesPersonImage: null,
      branchLocation: "Chennai, India",
      transportationMode: "Air Freight",
      portOfLoading: "Los Angeles, USA",
      portOfDischarge: "Antwerp, Belgium",
      nextFollowUps: "11/10/25",
      bookingStatus: "Processing",
      bookingValidityDate: "11/10/25",
      agreedRate: "2000 USD",
    },
    {
      bookingID: "3233856",
      companyName: "Farrel Kurniawan",
      shipmentMode: "Import",
      attender: "Pantleev A",
      salesPersonName: "Rina Karina",
      salesPersonImage: SalesPersonImage,
      branchLocation: "Chennai, India",
      transportationMode: "Land Freight",
      portOfLoading: "Los Angeles, USA",
      portOfDischarge: "Antwerp, Belgium",
      nextFollowUps: "11/10/25",
      bookingStatus: "Confirm",
      bookingValidityDate: "11/10/25",
      agreedRate: "2000 USD",
    },
    {
      bookingID: "3233856",
      companyName: "Farrel Kurniawan",
      shipmentMode: "Export",
      attender: "Pantleev A",
      salesPersonName: "Rina Karina",
      salesPersonImage: SalesPersonImage,
      branchLocation: "Chennai, India",
      transportationMode: "Sea Freight",
      portOfLoading: "Los Angeles, USA",
      portOfDischarge: "Rotterdam, Netherlands",
      nextFollowUps: "11/10/25",
      bookingStatus: "Cancelled",
      bookingValidityDate: "11/10/25",
      agreedRate: "2000 USD",
    },
    {
      bookingID: "3233856",
      companyName: "Farrel Kurniawan",
      shipmentMode: "Cross Trade",
      attender: "Pantleev A",
      salesPersonName: "Rina Karina",
      salesPersonImage: null,
      branchLocation: "Chennai, India",
      transportationMode: "Air Freight",
      portOfLoading: "Los Angeles, USA",
      portOfDischarge: "Antwerp, Belgium",
      nextFollowUps: "11/10/25",
      bookingStatus: "Processing",
      bookingValidityDate: "11/10/25",
      agreedRate: "2000 USD",
    },
    {
      bookingID: "3233856",
      companyName: "Farrel Kurniawan",
      shipmentMode: "Import",
      attender: "Pantleev A",
      salesPersonName: "Rina Karina",
      salesPersonImage: SalesPersonImage,
      branchLocation: "Chennai, India",
      transportationMode: "Land Freight",
      portOfLoading: "Los Angeles, USA",
      portOfDischarge: "Antwerp, Belgium",
      nextFollowUps: "11/10/25",
      bookingStatus: "Confirm",
      bookingValidityDate: "11/10/25",
      agreedRate: "2000 USD",
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
          <p className="text-lg text-grey-ab-900 font-semibold">Booking List</p>
          <Link to={"/booking/add"}>
            <PrimaryButton
              label={"Add Booking"}
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
              placeholder={"Booking Status"}
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

export default BookingList;
