import React, { useCallback, useEffect, useState } from "react";
import WarningChip from "../../../../../components/chips/WarningChip";
import {
  CrossIcon,
  EditIcon,
  ExcelIcon,
  InfoIcon,
  SendIcon,
  TickIcon,
} from "../../../../../components/icons/Icons";
import SuccessButton from "../../../../../components/buttons/SuccessButton";
import BlackButton from "../../../../../components/buttons/BlackButton";
import NeutralBlueButton from "../../../../../components/buttons/NeutralBlueButton";
import CustomTable from "../../../../../components/table/CustomTable";
import { Link, useParams } from "react-router-dom";

interface RowData {
  id: string | number;
  No: string | number | React.ReactNode;
  airlineName: string;
  mawbNumber: string;
  hawbNumber: string;
  flightNumber: string;
  quantity: string;
  cargoType: string;
  flightDate: string;
  airportGateInDate: string;
  cargoHandoverDate: React.ReactNode;
  action: React.ReactNode;
}

const Columns: any[] = [
  { id: "No", label: "NO", minWidth: 80, align: "center" },
  { id: "airlineName", label: "Airline Name", minWidth: 100 },
  { id: "mawbNumber", label: "MAWB Number", align: "center" },
  { id: "hawbNumber", label: "HAWB Number", align: "center" },
  { id: "flightNumber", label: "Flight Number", align: "center" },
  { id: "quantity", label: "Quantity", align: "center" },
  { id: "cargoType", label: "Cargo Type", align: "center" },
  { id: "flightDate", label: "Flight Date", align: "center" },
  { id: "airportGateInDate", label: "Airport Gate In Date", align: "center" },
  {
    id: "cargoHandoverDate",
    label: "Cargo Handover Date",
    minWidth: 160,
    align: "center",
  },
  { id: "action", label: "Action", align: "center" },
];

const ViewCargoHandover: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [rows, setRows] = useState<RowData[]>([]);

  const [editingRows, setEditingRows] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleEdit = (id: number) => {
    setEditingRows((prev) => ({ ...prev, [id]: true }));
  };

  const handleCancel = (id: number) => {
    setEditingRows((prev) => ({ ...prev, [id]: false }));
  };

  const handleSave = (id: number) => {
    setEditingRows((prev) => ({ ...prev, [id]: false }));
    console.log(`Row ${id} saved.`);
  };

  const createData = (items: any, index: number) => {
    const { id } = items;
    const isEditing = editingRows[index] || false;
    const cargoHandoverDateValue = (
      <div>
        {!isEditing ? (
          "-"
        ) : (
          <div>
            <input type="date" name="" id="" />
          </div>
        )}
      </div>
    );

    const actions = (
      <div className="flex gap-3 justify-center" key={index}>
        {isEditing ? (
          <>
            <div
              className="p-1 rounded-xs bg-error cursor-pointer"
              onClick={() => handleCancel(index)}
            >
              <CrossIcon size={16} color="#FDFDFD" />
            </div>
            <div
              className="p-1 rounded-xs bg-success-600 cursor-pointer"
              onClick={() => handleSave(index)}
            >
              <TickIcon size={16} color="#FDFDFD" />
            </div>
          </>
        ) : (
          <div
            className="p-1 rounded-xs bg-blue cursor-pointer"
            onClick={() => handleEdit(index)}
          >
            <EditIcon size={16} color="#FDFDFD" />
          </div>
        )}
      </div>
    );
    const updatedData = {
      id: id,
      No: <div className="py-2"> {(id + 1).toString().padStart(2, "0")}</div>,
      airlineName: items?.airlineName,
      mawbNumber: items?.mawbNumber,
      hawbNumber: items?.hawbNumber,
      flightNumber: items?.flightNumber,
      quantity: items?.quantity,
      cargoType: items?.cargoType,
      flightDate: items?.flightDate,
      airportGateInDate: items?.airportGateInDate,
      cargoHandoverDate: cargoHandoverDateValue,
      action: actions,
    };
    return updatedData;
  };

  const data = [
    {
      airlineName: "Emirates",
      mawbNumber: "ert34551",
      hawbNumber: "ert34551",
      flightNumber: "ert34551",
      quantity: "10",
      cargoType: "Standard Cargo",
      flightDate: "11-02-2025",
      airportGateInDate: "11-02-2025",
      cargoHandoverDate: "",
    },
  ];

  const fetchData = useCallback(() => {
    const arr = data.map((items, index) => {
      return createData({ ...items, id: index }, index);
    });
    setRows(arr);
  }, [editingRows]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="flex flex-col gap-6 bg-primary-50">
      <div className="flex justify-between p-3 rounded-xs bg-grey-aw-50 text-grey-ab-900 text-lg font-bold items-center">
        <p>BB2501030001 Details</p>
        <div className="flex gap-4 items-center">
          <BlackButton
            label={"Send Mail"}
            size={"s"}
            variant={"primary"}
            rightIcon={<SendIcon size={16} color="#E9E9E9" />}
          />
          <SuccessButton
            label={"Export"}
            size={"s"}
            variant={"primary"}
            rightIcon={<ExcelIcon size={16} color="#FCFCFC" />}
          />
        </div>
      </div>

      <div className="bg-grey-aw-50 px-6 py-4 rounded-sm flex justify-between items-center gap-2 text-grey-ab-900 text-nowrap overflow-auto custom-scrollbar-small">
        <div className="flex flex-col gap-2">
          <p className="text-sm">Booking ID</p>
          <p className="text-sm font-bold ">BB2501030001</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Company Name</p>
          <p className="text-sm font-bold ">Farrel Kurniawan</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Port of loading</p>
          <p className="text-sm font-bold ">Los Angeles, USA</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Port of Discharge</p>
          <p className="text-sm font-bold ">Rotterdam, Netherlands</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Cargo Type</p>
          <p className="text-sm font-bold ">Standard Cargo</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Booking validity Date</p>
          <p className="text-sm font-bold ">11/10/25</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Cargo Handover Status</p>
          <WarningChip label={"Processing"} size={"m"} variant={"fill"} />
        </div>
      </div>

      {/* container type */}
      <div className="flex flex-col gap-3">
        <div className="bg-blue-50 rounded-sm flex gap-6 p-2 items-center w-fit">
          <div className="flex gap-4 items-center">
            <InfoIcon color="#0091FF" />
            <p className="text-blue-600">Do you want to split this booking ?</p>
          </div>
          <Link to={`/shipment-updates/air-freight/create-split-booking/${id}`}>
            <NeutralBlueButton
              label={"Split Booking Request"}
              size={"s"}
              variant={"primary"}
            />
          </Link>
        </div>
        {/*  */}
        <div className="flex px-4 py-2 justify-between bg-grey-aw-50 rounded-sm text-grey-ab-900 items-center">
          <div className="flex gap-2 text-sm">
            <p>Quantity</p>
            <p className="font-bold">05</p>
          </div>

          <div className="rounded-xl bg-secondary-50 flex gap-1 py-1 pl-2 pr-1 items-center">
            <p className="text-2xs font-bold text-secondary">Pending</p>
            <div className="rounded-full bg-secondary-300 p-1 text-2xs font-bold text-grey-aw-50 w-[20px] h-[20px] flex items-center justify-center">
              <p>05</p>
            </div>
          </div>
        </div>

        {/* tables */}
        <CustomTable columns={Columns} rows={rows} isCheckbox={false} />
      </div>
    </div>
  );
};

export default ViewCargoHandover;
