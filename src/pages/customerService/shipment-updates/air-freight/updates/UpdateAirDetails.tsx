import React, { useCallback, useEffect, useState } from "react";
import CustomTable from "../../../../../components/table/CustomTable";
import ShipmentTrackingLayout from "../../components/layouts/ShipmentTrackingLayout";
import {
  PendingIcon,
  SuccessIcon,
} from "../../../../../components/icons/Icons";
import BlackChip from "../../../../../components/chips/BlackChip";
import CargoFlightImage from "/images/cargoFlight.png";

interface RowData {
  id: string | number;
  slNo: string | number | React.ReactNode;
  airlineName: string;
  mawbNumber: string;
  hawbNumber: string;
  flightNumber: string;
  origin: string;
  quantity: string;
  flightDate: string;
  airportGateInDate: string;
  departureConfirmation: string;
  ata: string;
  cargoHandoverDate: string | React.ReactNode;
}

interface ULDTransitRowData {
  id: string | number;
  slNo: string | number | React.ReactNode;
  aircraftType: string;
  flightNumber: string;
  quantity: string;
  uldContainers: string;
  eta: string;
  ata: string;
}

interface StandardCargoTransitRowData {
  id: string | number;
  slNo: string | number | React.ReactNode;
  aircraftType: string;
  flightNumber: string;
  quantity: string;
  eta: string;
  ata: string;
}

const Columns: any[] = [
  { id: "slNo", label: "NO", minWidth: 80, align: "center" },
  { id: "airlineName", label: "Airline Name" },
  { id: "mawbNumber", label: "MAWB Number" },
  { id: "hawbNumber", label: "HAWB Number" },
  { id: "flightNumber", label: "Flight Number" },
  { id: "origin", label: "Origin" },
  { id: "quantity", label: "Quantity", align: "center", minWidth: 50 },
  { id: "flightDate", label: "Flight Date", align: "center" },
  { id: "airportGateInDate", label: "Airport Gate In Date", align: "center" },
  {
    id: "departureConfirmation",
    label: "Departure Confirmation",
    minWidth: 180,
    align: "center",
  },
  { id: "ata", label: "ATA(Date)", align: "center" },
  {
    id: "cargoHandoverDate",
    label: "Cargo Handover Date",
    minWidth: 160,
    align: "center",
  },
];

const ULDTransitColumns: any[] = [
  { id: "slNo", label: "NO", minWidth: 80, align: "center" },
  { id: "aircraftType", label: "Aircraft Type" },
  { id: "flightNumber", label: "Flight Number" },
  { id: "quantity", label: "Quantity" },
  { id: "uldContainers", label: "ULD Containers" },
  { id: "eta", label: "ETA(Arrival)" },
  { id: "ata", label: "ATA(Arrival)" },
];

const StandardCargoTransitColumns: any[] = [
  { id: "slNo", label: "NO", minWidth: 80, align: "center" },
  { id: "aircraftType", label: "Aircraft Type" },
  { id: "flightNumber", label: "Flight Number" },
  { id: "quantity", label: "Quantity" },
  { id: "eta", label: "ETA(Arrival)" },
  { id: "ata", label: "ATA(Arrival)" },
];

const UpdateAirDetails: React.FC = () => {
  const [rows, setRows] = useState<RowData[]>([]);
  const [uldTransitrows, setULDTransitRows] = useState<ULDTransitRowData[]>([]);
  const [standardCargoTransitRows, setStandardCargoTransitRows] = useState<
    StandardCargoTransitRowData[]
  >([]);
  const createData = (items: any) => {
    const { id } = items;
    const slNumber = (
      <div className="py-2">{(id + 1).toString().padStart(2, "0")}</div>
    );
    const updatedData = {
      id: id,
      slNo: slNumber,
      airlineName: items?.airlineName,
      mawbNumber: items?.mawbNumber,
      hawbNumber: items?.hawbNumber,
      flightNumber: items?.flightNumber,
      origin: items?.origin,
      quantity: items?.quantity,
      flightDate: items?.flightDate,
      airportGateInDate: items?.airportGateInDate,
      departureConfirmation: items?.departureConfirmation,
      ata: items?.ata,
      cargoHandoverDate: items?.cargoHandoverDate,
    };
    return updatedData;
  };

  const data = [
    {
      airlineName: "Emirates",
      mawbNumber: "ert34551",
      hawbNumber: "ert34551",
      flightNumber: "ert34551",
      origin: "Colombo, Sri Lanka",
      quantity: "5",
      flightDate: "11-02-2025",
      airportGateInDate: "11-02-2025",
      departureConfirmation: "11-02-2025",
      ata: "11-02-2025",
      cargoHandoverDate: "11-02-2025",
    },
  ];

  const createULDTransitData = (items: any) => {
    const { id } = items;
    const slNumber = (
      <div className="py-2">{(id + 1).toString().padStart(2, "0")}</div>
    );
    const updatedData = {
      id: id,
      slNo: slNumber,
      aircraftType: items?.aircraftType,
      flightNumber: items?.flightNumber,
      quantity: items?.quantity,
      uldContainers: items?.uldContainers,
      eta: items?.eta,
      ata: items?.ata,
    };
    return updatedData;
  };

  const ULDTransitData = [
    {
      aircraftType: "COA",
      flightNumber: "ABC12324",
      quantity: "10",
      uldContainers: "ud2 Reefers",
      eta: "16-02-2025",
      ata: "16-02-2025",
    },
  ];

  const createStandardCargoTransitData = (items: any) => {
    const { id } = items;
    const slNumber = (
      <div className="py-2">{(id + 1).toString().padStart(2, "0")}</div>
    );
    const updatedData = {
      id: id,
      slNo: slNumber,
      aircraftType: items?.aircraftType,
      flightNumber: items?.flightNumber,
      quantity: items?.quantity,
      eta: items?.eta,
      ata: items?.ata,
    };
    return updatedData;
  };

  const standardCargoTransitData = [
    {
      aircraftType: "COA",
      flightNumber: "ABC12324",
      quantity: "10",
      eta: "16-02-2025",
      ata: "16-02-2025",
    },
  ];

  const fetchData = useCallback(() => {
    const arr = data.map((items, index) => {
      return createData({ ...items, id: index });
    });
    setRows(arr);
  }, []);

  const fetchULDTransitData = useCallback(() => {
    const arr = ULDTransitData.map((items, index) => {
      return createULDTransitData({ ...items, id: index });
    });
    setULDTransitRows(arr);
  }, []);

  const fetchStandardCargoTransitData = useCallback(() => {
    const arr = standardCargoTransitData.map((items, index) => {
      return createStandardCargoTransitData({ ...items, id: index });
    });
    setStandardCargoTransitRows(arr);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    fetchULDTransitData();
  }, [fetchULDTransitData]);

  useEffect(() => {
    fetchStandardCargoTransitData();
  }, [fetchStandardCargoTransitData]);

  return (
    <div className="flex flex-col gap-6 bg-primary-50">
      <div className="flex flex-col gap-4">
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
            <p className="text-sm font-bold ">Full Container Load</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Booking validity Date</p>
            <p className="text-sm font-bold ">11/10/25</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Current Update</p>
            <BlackChip label={"Container Pickup"} size={"m"} variant={"mix"} />
          </div>
        </div>

        <div className="bg-grey-aw-50 rounded-xs ">
          <div className="p-4 border-b border-b-grey-ab-50 font-bold text-lg text-grey-ab-800">
            Shipments Tracking
          </div>
          <div className="flex flex-col gap-2 px-4 py-2">
            <div className="flex gap-1 p-1 items-center">
              <div className=" rounded-full bg-success-50 p-2">
                <SuccessIcon color="#009F41" />
              </div>
              <div className="border-t border-t-success-700 border-dashed w-[17%]"></div>
              <div className=" rounded-full bg-success-50 p-2">
                <SuccessIcon color="#009F41" />
              </div>
              <div className="border-t border-t-success-700 border-dashed w-[17%]"></div>
              <div className=" rounded-full bg-success-50 p-2">
                <SuccessIcon color="#009F41" />
              </div>
              <div className="border-t border-t-success-700 border-dashed w-[17%]"></div>
              <div className=" rounded-full bg-success-50 p-2">
                <SuccessIcon color="#009F41" />
              </div>
              <div className="border-t border-t-success-700 border-dashed w-[17%]"></div>
              <div className=" rounded-full bg-grey-ab-50 p-2">
                <PendingIcon color="#121212" size={24} />
              </div>
            </div>

            {/* down */}
            <div className="flex justify-between w-[98%]">
              <ShipmentTrackingLayout
                label={"Airport Gate In Date"}
                status={"Completed"}
              />
              <ShipmentTrackingLayout
                label={"Cargo Handover Update"}
                status={"Completed"}
              />
              <ShipmentTrackingLayout
                label={"Departure Confirmation"}
                status={"Completed"}
              />
              <ShipmentTrackingLayout
                label={"Transit Info"}
                status={"Completed"}
              />
              <ShipmentTrackingLayout
                label={"Delivery Order Collected"}
                status={"Pending"}
              />
            </div>
          </div>
        </div>
      </div>

      {/* container type */}
      <div className="flex flex-col gap-4">
        <div className="flex px-4 py-3 justify-between bg-grey-aw-50 rounded-sm text-grey-ab-900">
          <div className="flex gap-2 text-sm">
            <p>Container Size</p>
            <p className="font-bold">ULD-3 Reefers</p>
          </div>
          <div className="flex gap-2 text-sm">
            <p>Quantity</p>
            <p className="font-bold">05</p>
          </div>
        </div>

        <CustomTable columns={Columns} rows={rows} isCheckbox={false} />
      </div>

      {/* transit leg 1 */}
      <div className="flex flex-col gap-4">
        <p className="h6 font-semibold">Transit Leg 1</p>
        <div className="px-4 py-2 rounded-sm bg-grey-aw-50 flex justify-between">
          <div className="w-[60px] h-[60px]">
            <img src={CargoFlightImage} alt="CargoFlightImage" />
          </div>
          <div className="text-sm flex flex-col gap-2 p-1">
            <p className="text-grey-ab-300">Carrier Name</p>
            <p className="text-grey-ab-900 font-bold">Maersk Line </p>
          </div>
          <div className="text-sm flex flex-col gap-2 p-1">
            <p className="text-grey-ab-300">Aircraft Type</p>
            <p className="text-grey-ab-900 font-bold">PAX</p>
          </div>
          <div className="text-sm flex flex-col gap-2 p-1">
            <p className="text-grey-ab-300">Flight Number</p>
            <p className="text-grey-ab-900 font-bold">M1234</p>
          </div>
        </div>

        <div className="flex px-4 py-3 justify-between bg-grey-aw-50 rounded-sm text-grey-ab-900">
          <div className="flex gap-2 text-sm">
            <p>Quantity</p>
            <p className="font-bold">05</p>
          </div>
          <div className="flex gap-2 text-sm">
            <p>POL</p>
            <p className="font-bold">Chennai, India</p>
          </div>
          <div className="flex gap-2 text-sm">
            <p>POD</p>
            <p className="font-bold">Colombo, Sri Lanka</p>
          </div>
        </div>

        <CustomTable columns={ULDTransitColumns} rows={uldTransitrows} isCheckbox={false} />
      </div>
    </div>
  );
};

export default UpdateAirDetails;
