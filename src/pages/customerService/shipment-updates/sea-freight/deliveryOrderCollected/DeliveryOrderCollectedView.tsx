import React, { useCallback, useEffect, useState } from "react";
import WarningChip from "../../../../../components/chips/WarningChip";
import ViewCard from "../../../sea-air-schedule/components/layouts/viewCard";
import {
  CrossIcon,
  EditIcon,
  ExcelIcon,
  SendIcon,
  TickIcon,
} from "../../../../../components/icons/Icons";
import BlackButton from "../../../../../components/buttons/BlackButton";
import SuccessButton from "../../../../../components/buttons/SuccessButton";
import CustomTable from "../../../../../components/table/CustomTable";

interface FCLcontainerProps {
  containerNumber: string;
  pickupDate: string | Date;
  terminalGateInDate: string;
  onboardDate: string | Date;
  ata_pod: string;
  doc: string;
  isEditing?: boolean;
}

interface FCLcargoDimensions {
  id: string;
  containerSize: string;
  grossWeight: string | number;
  grossWeightUnit: string;
  containerCount: string | number;
  agreedRate: string | number;
  currency: string | number;
  containerDetails: FCLcontainerProps[];
}

interface DataProps {
  bookingId: string;
  companyName: string;
  portOfLoading: string;
  portOfDischarge: string;
  bookingValidityDate: string | Date;
  cargoDetails: {
    cargotype: string;
    cargoDimensions: string[];
  };
  cargoDimensions: FCLcargoDimensions[];
}

const fclColumns: any[] = [
  { id: "sNo", label: "s.no", minWidth: "100px" },
  {
    id: "containerNumber",
    label: "Container Number",
  },
  { id: "pickupDate", label: "Pickup Date" },
  { id: "terminalGateInDate", label: "Terminal Gate In" },
  { id: "onboardDate", label: "Onboard Date" },
  { id: "ata_pod", label: "ATA (POD)" },
  { id: "doc", label: "Delivery Order Collected (DOC)" },
  { id: "action", label: "Action", minWidth: "100px" },
];
const columns: any[] = [
  { id: "s.no", label: "s.no", minWidth: "100px" },
  {
    id: "containerNumber",
    label: "Container Number",
  },
  { id: "pickupDate", label: "Pickup Date" },
  { id: "terminalGateInDate", label: "Terminal Gate In" },
  { id: "onboardDate", label: "Onboard Date" },
  { id: "ata_pod", label: "ATA (POD)" },
  { id: "doc", label: "Delivery Order Collected (DOC)" },
  { id: "action", label: "Action", minWidth: "100px" },
];

const DeliveryOrderCollectedView: React.FC = () => {
  const [rows, setRows] = useState<any>([]);
  const [dummydata, setDummyData] = useState<DataProps>({
    bookingId: "BB2501030001",
    companyName: "Farrel Kurniawan",
    portOfLoading: "Los Angeles, USA",
    portOfDischarge: "Rotterdam, Netherlands",
    bookingValidityDate: "11/10/25",
    cargoDetails: {
      cargotype: "fcl",
      cargoDimensions: ["cargoId1", "cargoId2"],
    },
    cargoDimensions: [
      {
        id: "cargoId1",
        containerSize: "20'ft reefers",
        grossWeight: "50",
        grossWeightUnit: "kgs",
        containerCount: "5",
        agreedRate: "2000",
        currency: "USD",
        containerDetails: [
          {
            containerNumber: "YMLU7654321",
            pickupDate: "11-02-2025",
            terminalGateInDate: "11-02-2025",
            onboardDate: "11-02-2025",
            ata_pod: "11-02-2025",
            doc: "2025-02-11",
          },
          {
            containerNumber: "YMLU7654321",
            pickupDate: "11-02-2025",
            terminalGateInDate: "11-02-2025",
            onboardDate: "11-02-2025",
            ata_pod: "11-02-2025",
            doc: "2025-02-11",
          },
          {
            containerNumber: "YMLU7654321",
            pickupDate: "11-02-2025",
            terminalGateInDate: "11-02-2025",
            onboardDate: "11-02-2025",
            ata_pod: "2025-02-11",
            doc: "",
          },
          {
            containerNumber: "YMLU7654321",
            pickupDate: "11-02-2025",
            terminalGateInDate: "11-02-2025",
            onboardDate: "11-02-2025",
            ata_pod: "11-02-2025",
            doc: "",
          },
          {
            containerNumber: "YMLU7654321",
            pickupDate: "11-02-2025",
            terminalGateInDate: "11-02-2025",
            onboardDate: "11-02-2025",
            ata_pod: "11-02-2025",
            doc: "",
          },
        ],
      },
      {
        id: "cargoId2",
        containerSize: "40'ft reefers",
        grossWeight: "50",
        grossWeightUnit: "kgs",
        containerCount: "2",
        agreedRate: "2000",
        currency: "USD",
        containerDetails: [
          {
            containerNumber: "YMLU7654321",
            pickupDate: "11-02-2025",
            terminalGateInDate: "11-02-2025",
            onboardDate: "11-02-2025",
            ata_pod: "11-02-2025",
            doc: "2025-02-11",
          },
          {
            containerNumber: "YMLU7654321",
            pickupDate: "11-02-2025",
            terminalGateInDate: "11-02-2025",
            onboardDate: "11-02-2025",
            ata_pod: "11-02-2025",
            doc: "",
          },
        ],
      },
    ],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    dimensionalId: number,
    containerIndex: number
  ) => {
    const { name, value } = e.target;

    const updatedContainerDetails = [
      ...dummydata.cargoDimensions[dimensionalId]?.containerDetails,
    ];
    updatedContainerDetails[containerIndex] = {
      ...updatedContainerDetails[containerIndex],
      [name]: value,
    };
    // Create a new copy of the cargoDimensions array with updated containerDetails
    const updatedCargoDimensions = [...dummydata.cargoDimensions];
    updatedCargoDimensions[dimensionalId] = {
      ...dummydata.cargoDimensions[dimensionalId],
      containerDetails: updatedContainerDetails,
    };

    // Set the updated state with the updated cargoDimensions array
    setDummyData((prevData) => ({
      ...prevData, // Keep the rest of the state unchanged
      cargoDimensions: updatedCargoDimensions,
    }));
  };

  // handle edit
  const handleToggleEdit = (
    dimensionalId: number,
    id: number,
    booleanValue: boolean
  ) => {
    const updatedContainerDetails = [
      ...dummydata.cargoDimensions[dimensionalId]?.containerDetails,
    ];
    updatedContainerDetails[id] = {
      ...updatedContainerDetails[id],
      isEditing: booleanValue,
    };
    // Create a new copy of the cargoDimensions array with updated containerDetails
    const updatedCargoDimensions = [...dummydata.cargoDimensions];
    updatedCargoDimensions[dimensionalId] = {
      ...dummydata.cargoDimensions[dimensionalId],
      containerDetails: updatedContainerDetails,
    };

    // Update rows state with the updated copy
    setDummyData((prevData) => ({
      ...prevData, // Keep the rest of the state unchanged
      cargoDimensions: updatedCargoDimensions,
    }));
  };

  const createRowData = (items: any) => {
    const {
      id,
      dimensionId,
      containerNumber,
      pickupDate,
      terminalGateInDate,
      onboardDate,
      doc,
      ata_pod,
      isEditing = false,
    } = items;

    const actionValue = (
      <div className="flex items-center gap-3">
        {!isEditing ? (
          <div
            className="p-1 rounded bg-blue flex items-center cursor-pointer"
            onClick={() => handleToggleEdit(dimensionId, id, true)}
          >
            <EditIcon color="#ffffff" size={16} />
          </div>
        ) : (
          <>
            <div
              className="p-1 rounded bg-red flex items-center cursor-pointer"
              onClick={() => handleToggleEdit(dimensionId, id, false)}
            >
              <CrossIcon color="#ffffff" size={16} />
            </div>{" "}
            <div className="p-1 rounded bg-success flex items-center cursor-pointer">
              <TickIcon color="#ffffff" size={16} />
            </div>
          </>
        )}
      </div>
    );

    const docText = isEditing ? (
      <input
        type="date"
        value={doc || ""}
        name="doc"
        onChange={(e) => handleChange(e, dimensionId, id)}
        className="px-1 rounded border border-grey-200 hover:border-grey-ab-100 focus:border-primary-400 active:border-primary-400 focus-within:border-primary-400  placeholder-grey-ab-200 focus:outline-none bg-primary-50  active:outline-none text-grey-ab-800"
      />
    ) : (
      doc
    );

    const updatedRowData = {
      id: id,
      sNo: id + 1,
      containerNumber,
      pickupDate,
      terminalGateInDate,
      onboardDate,
      ata_pod,
      doc: docText,
      action: actionValue,
    };

    return updatedRowData;
  };

  const createData = (items: any) => {
    const { id, containerDetails } = items;
    const arr = containerDetails.map((rowItems: any, rowIndex: number) => {
      return createRowData({ ...rowItems, id: rowIndex, dimensionId: id }); //create each row data
    });
    // Ensure all columns have a value (or a default) for each row.
    const updatedData = {
      dimensionId: id,
      containerDetails: arr,
    };

    return updatedData;
  };

  // Memoize fetchData function with useCallback
  const fetchData = useCallback(() => {
    const arr = dummydata.cargoDimensions.map((items, index) => {
      return createData({ ...items, id: index }); // Ensure createData returns the transformed data
    });
    console.log(arr, "array", dummydata);
    setRows(arr); // Set the rows with the updated data
  }, [dummydata]); // Empty dependency array ensures this function is only created once

  useEffect(() => {
    fetchData(); // Call fetchData when the component mounts
  }, [fetchData]); // Only re-run fetchData if fetchData changes
  return (
    <div className="flex flex-col gap-6 bg-primary-50">
      <div className="bg-grey-aw-50 rounded shadow-sm p-3 flex items-center justify-between">
        <p className="text-lg font-semibold">{dummydata.bookingId} Details</p>
        <div className="flex items-center justify-center gap-4">
          <BlackButton
            label={"Send Mail"}
            size={"s"}
            variant={""}
            rightIcon={<SendIcon color="#ffffff" size={16} />}
          />
          <SuccessButton
            label={"Export"}
            size={"s"}
            variant={""}
            rightIcon={<ExcelIcon color="#ffffff" size={16} />}
          />
        </div>
      </div>
      <div className="bg-grey-aw-50 rounded shadow-sm p-6 flex gap-3  justify-between">
        <div className="flex flex-wrap gap-3  justify-between">
          <ViewCard
            label={"Booking ID"}
            value={dummydata.bookingId}
            style="flex-col"
            labelStyle="font-normal"
            valueStyle="font-semibold"
          />
          <ViewCard
            label={"Company Name"}
            value={dummydata.companyName}
            style="flex-col"
            labelStyle="font-normal"
            valueStyle="font-semibold"
          />
          <ViewCard
            label={"Port of loading"}
            value={dummydata.portOfLoading}
            style="flex-col"
            labelStyle="font-normal"
            valueStyle="font-semibold"
          />
          <ViewCard
            label={"Port of Discharge"}
            value={dummydata.portOfDischarge}
            style="flex-col"
            labelStyle="font-normal"
            valueStyle="font-semibold"
          />
          <ViewCard
            label={"Cargo Type"}
            value={dummydata.cargoDetails.cargotype}
            style="flex-col"
            labelStyle="font-normal"
            valueStyle="font-semibold"
          />
          <ViewCard
            label={"Booking validity Date"}
            value={dummydata.bookingValidityDate}
            style="flex-col"
            labelStyle="font-normal"
            valueStyle="font-semibold"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm ">Delivery Order Collected (DOC)</p>
          <WarningChip label={"Processing"} size={"s"} variant={"fill"} />
        </div>
      </div>
      {dummydata.cargoDimensions.length > 0 &&
        dummydata.cargoDimensions.map((dimension, dimensionIndex) => {
          return (
            <div key={dimensionIndex} className="gap-3 flex flex-col">
              <div className="flex px-4 py-2 rounded-sm justify-between items-center bg-grey-aw-50">
                <ViewCard
                  label={"Container Type"}
                  value={dimension.containerSize}
                  labelStyle="font-normal"
                  valueStyle="font-semibold"
                />
                <ViewCard
                  label={"Quantity"}
                  value={dimension.containerCount}
                  labelStyle="font-normal"
                  valueStyle="font-semibold"
                />
                <div className="rounded-2xl px-2 py-1 flex items-center gap-1 bg-secondary-50 text-secondary-300 font-semibold text-2xs">
                  <p>Pending</p>
                  <span className="w-5 h-5 p-1 rounded-full bg-secondary-300 text-white">
                    00
                  </span>
                </div>
              </div>
              <CustomTable
                columns={
                  dummydata.cargoDetails.cargotype === "fcl"
                    ? fclColumns
                    : columns
                }
                rows={
                  rows.length > 0 && rows[dimensionIndex].containerDetails
                    ? rows[dimensionIndex].containerDetails
                    : []
                }
                isCheckbox={false}
              />
            </div>
          );
        })}
    </div>
  );
};

export default DeliveryOrderCollectedView;
