import React, { useCallback, useEffect, useState } from "react";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";
import {
  AddIcon,
  DocumentIcon,
  DownloadIcon,
  EditIcon,
} from "../../../../components/icons/Icons";
import CreateImage from "/images/create.png";
import CustomTable from "../../../../components/table/CustomTable";
import { NavLink, useParams } from "react-router-dom";
import { Layout } from "../../../accounts/invoiceImport/ViewInvoice";
import WarningChip from "../../../../components/chips/WarningChip";

interface RowData {
  id: string | number;
  canNumber: string;
  mawbNumber: string;
  hawbNumber: string;
  shipperName: string;
  consigneeName: string;
  cargoArrivalDate: string;
  canDate: string;
  action: React.ReactNode;
}

const Columns: any[] = [
  { id: "canNumber", label: " CAN Number" },
  { id: "mawbNumber", label: "MAWB Number" },
  { id: "hawbNumber", label: "HAWB Number" },
  { id: "shipperName", label: "Shipper Name", minWidth: 180 },
  { id: "consigneeName", label: "Consignee Name", minWidth: 180 },
  { id: "cargoArrivalDate", label: "Cargo Arrival Date", align: "center" },
  { id: "canDate", label: "CAN Date", align: "center" },
  {
    id: "action",
    label: "Action",
    align: "center",
  },
];

const ViewCargoArrival: React.FC = () => {
  const { id } = useParams();
  const [Rows, setRows] = useState<RowData[]>([]);

  const data = [
    {
      canNumber: "PMMI8054",
      mawbNumber: "MSCU1234567",
      hawbNumber: "MSCU1234567",
      shipperName: "Greenfield Supplies",
      consigneeName: "Global Trade Solutions",
      cargoArrivalDate: "11-06-2025",
      canDate: "11-06-2025",
    },
    {
      canNumber: "PMMI8055",
      mawbNumber: "MSCU1234565",
      hawbNumber: "MSCU1234565",
      shipperName: "Global Trade Solutions",
      consigneeName: "Greenfield Supplies",
      cargoArrivalDate: "11-06-2025",
      canDate: "11-06-2025",
    },
    {
      canNumber: "PMMI8056",
      mawbNumber: "MSCU1234565",
      hawbNumber: "MSCU1234565",
      shipperName: "Global Trade Solutions",
      consigneeName: "Greenfield Supplies",
      cargoArrivalDate: "11-06-2025",
      canDate: "11-06-2025",
    },
    {
      canNumber: "PMMI8057",
      mawbNumber: "MSCU1234565",
      hawbNumber: "MSCU1234565",
      shipperName: "Global Trade Solutions",
      consigneeName: "Greenfield Supplies",
      cargoArrivalDate: "11-06-2025",
      canDate: "11-06-2025",
    },
  ];

  const fetchData = useCallback(() => {
    const createData = (items: any) => {
      const { tableId, canNumber } = items;
      const actions = (
        <div className="px-2 py-1 gap-2 flex justify-center ">
          <NavLink
            to={`/cargo-arrival-notice/air-freight/details/${id}/${canNumber}`}
          >
            <div className="p-1 rounded-xs bg-grey-ab cursor-pointer">
              <DocumentIcon size={16} color="#ffffff" />
            </div>
          </NavLink>
          <NavLink
            to={`/cargo-arrival-notice/air-freight/edit/${id}/${canNumber}`}
          >
            <div className="p-1 rounded-xs bg-blue cursor-pointer">
              <EditIcon size={16} color="#ffffff" />
            </div>
          </NavLink>
          <div className="p-1 rounded-xs bg-success-600 cursor-pointer">
            <DownloadIcon size={16} color="#ffffff" />
          </div>
        </div>
      );

      const updatedData = {
        id: tableId,
        canNumber: items?.canNumber,
        mawbNumber: items?.mawbNumber,
        hawbNumber: items?.hawbNumber,
        shipperName: items?.shipperName,
        consigneeName: items?.consigneeName,
        cargoArrivalDate: items?.cargoArrivalDate,
        canDate: items?.canDate,
        action: actions,
      };
      return updatedData;
    };

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
      <div className="bg-grey-aw-50 rounded-sm px-6 py-3 shadow-lg flex justify-between">
        <Layout label={"Booking ID"} value={"0000001"} />
        <Layout label={"Company Name"} value={"HarborLine Exports Pvt. Ltd."} />
        <Layout label={"Port of Loading"} value={"Los Angeles, USA"} />
        <Layout label={"Port of Discharge"} value={"Rotterdam, Netherlands"} />
        <Layout label={"Notices Created"} value={"00"} />
        <Layout
          label={"CAN Status"}
          value={
            <WarningChip label={"Pending"} size={"m"} variant={"outline"} />
          }
        />
      </div>
      {data.length === 0 ? (
        <div className="flex flex-col rounded-xs bg-grey-aw-50 shadow-lg">
          <div className="p-3 border-b border-b-grey-ab-50 flex justify-between items-center">
            <p className="text-lg font-bold text-grey-ab-900">
              Cargo Arrival Notice List
            </p>
            <NavLink to={`/cargo-arrival-notice/air-freight/create/${id}`}>
              <PrimaryButton
                label={"Create CAN"}
                size={"m"}
                variant={"primary"}
                leftIcon={<AddIcon size={16} color="#ffffff" />}
              />
            </NavLink>
          </div>

          <div className="mx-auto flex flex-col gap-4 py-4 items-center">
            <div className="flex flex-col gap-6">
              <div className="mx-auto">
                <img src={CreateImage} alt="CreateImage" />
              </div>
              <p className="text-xs text-grey-ab-300">
                Click below to get started and generate a professional Cargo
                Arrival Notice in seconds.
              </p>
            </div>
            <NavLink to={`/cargo-arrival-notice/air-freight/create/${id}`}>
              <PrimaryButton
                label={"Create CAN"}
                size={"m"}
                variant={"outline"}
                leftIcon={<AddIcon size={16} color="#2C398F" />}
              />
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="flex flex-col rounded-xs bg-grey-aw-50 shadow-lg">
          <div className="p-3 border-b border-b-grey-ab-50 flex justify-between items-center">
            <p className="text-lg font-bold text-grey-ab-900">
              Cargo Arrival Notice List
            </p>
            <NavLink to={`/cargo-arrival-notice/air-freight/create/${id}`}>
              <PrimaryButton
                label={"Create CAN"}
                size={"m"}
                variant={"primary"}
                leftIcon={<AddIcon size={16} color="#ffffff" />}
              />
            </NavLink>
          </div>

          <CustomTable columns={Columns} rows={Rows} isCheckbox={false} />
        </div>
      )}
    </>
  );
};

export default ViewCargoArrival;
