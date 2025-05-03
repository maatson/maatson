import React, { useCallback, useEffect, useState } from "react";
import BlackChip from "../../../../../components/chips/BlackChip";
import {
  PendingIcon,
  SuccessIcon,
} from "../../../../../components/icons/Icons";
import ShipmentTrackingLayout from "../../components/layouts/ShipmentTrackingLayout";
import CustomTable from "../../../../../components/table/CustomTable";
import CargoShipImage from "/images/cargoShip.png";

interface FCLRowData {
  id: string | number;
  slNo: string | number;
  containerNumber: string;
  sealNo: string;
  containerType: string;
  containerPickup: string;
  terminalGateIn: string;
  onboardConfirmation: string;
  ata: string;
  deliveryOrderCollected: string;
  emptyReturnConfirmation: string | React.ReactNode;
}

interface LCLRowData {
  id: string | number;
  slNo: string | number;
  containerNumber: string;
  sealNo: string;
  containerType: string;
  quantity: string | number;
  terminalGateIn: string;
  onboardConfirmation: string;
  ata: string;
  deliveryOrderCollected: string;
  emptyReturnConfirmation: string | React.ReactNode;
}

interface bulkRowData {
  id: string | number;
  slNo: string | number;
  terminalGateIn: string;
  onboardConfirmation: string;
  ata: string;
  deliveryOrderCollected: string;
}

interface FCLTransitRowData {
  id: string | number;
  slNo: string | number;
  containerNumber: string;
  sealNo: string;
  containerType: string;
  atd: string;
  eta: string;
  ata: string;
}

interface LCLTransitRowData {
  id: string | number;
  slNo: string | number;
  containerNumber: string;
  sealNo: string;
  containerType: string;
  quantity: string;
  atd: string;
  eta: string;
  ata: string;
}

const FCLColumns: any[] = [
  { id: "slNo", label: "SLNO", minWidth: 30, align: "center" },
  { id: "containerNumber", label: "Container Number", minWidth: 140 },
  { id: "sealNo", label: "Seal No", minWidth: 120 },
  { id: "containerType", label: "Container Type", minWidth: 130 },
  { id: "containerPickup", label: "Container Pickup" },
  { id: "terminalGateIn", label: "Terminal Gate In" },
  { id: "onboardConfirmation", label: "Onboard Confirmation" },
  { id: "ata", label: "Transit(ATA)" },
  { id: "deliveryOrderCollected", label: "Delivery Order Collected" },
  { id: "emptyReturnConfirmation", label: "Empty Return Confirmation" },
];

const LCLColumns: any[] = [
  { id: "slNo", label: "SLNO", minWidth: 30, align: "center" },
  { id: "containerNumber", label: "Container Number", minWidth: 140 },
  { id: "sealNo", label: "Seal No", minWidth: 120 },
  { id: "containerType", label: "Container Type", minWidth: 130 },
  { id: "quantity", label: "Quantity" },
  { id: "terminalGateIn", label: "Terminal Gate In" },
  { id: "onboardConfirmation", label: "Onboard Confirmation" },
  { id: "ata", label: "Transit(ATA)" },
  { id: "deliveryOrderCollected", label: "Delivery Order Collected" },
  { id: "emptyReturnConfirmation", label: "Empty Return Confirmation" },
];

const bulkColumns: any[] = [
  { id: "slNo", label: "SLNO", minWidth: 30, align: "center" },
  { id: "terminalGateIn", label: "Terminal Gate In" },
  { id: "onboardConfirmation", label: "Onboard Confirmation" },
  { id: "ata", label: "Transit(ATA)" },
  { id: "deliveryOrderCollected", label: "Delivery Order Collected" },
];

const FCLTransitColumns: any[] = [
  { id: "slNo", label: "SLNO", minWidth: 30, align: "center" },
  { id: "containerNumber", label: "Container Number", minWidth: 140 },
  { id: "sealNo", label: "Seal No", minWidth: 120 },
  { id: "containerType", label: "Container Type", minWidth: 130 },
  { id: "atd", label: "ATD(POL)" },
  { id: "eta", label: "ETA(POD)" },
  { id: "ata", label: "ATA(POD)" },
];

const LCLTransitColumns: any[] = [
  { id: "slNo", label: "SLNO", minWidth: 30, align: "center" },
  { id: "containerNumber", label: "Container Number", minWidth: 140 },
  { id: "sealNo", label: "Seal No", minWidth: 120 },
  { id: "containerType", label: "Container Type", minWidth: 130 },
  { id: "quantity", label: "Quantity" },
  { id: "atd", label: "ATD(POL)" },
  { id: "eta", label: "ETA(POD)" },
  { id: "ata", label: "ATA(POD)" },
];

const UpdateDetails: React.FC = () => {
  const [fclRows, setFCLRows] = useState<FCLRowData[]>([]);
  const [lclRows, setLCLRows] = useState<LCLRowData[]>([]);
  const [bulkRows, setBulkRows] = useState<bulkRowData[]>([]);
  const [fclTransitRows, setFCLTransitRows] = useState<FCLTransitRowData[]>([]);
  const [lclTransitRows, setLCLTransitRows] = useState<LCLTransitRowData[]>([]);
  // fcl
  const createFCLData = (items: any) => {
    const { id } = items;
    const updatedData = {
      id: id,
      slNo: (id + 1).toString().padStart(2, "0"),
      containerNumber: items?.containerNumber,
      sealNo: items?.sealNo,
      containerType: items?.containerType,
      containerPickup: items?.containerPickup,
      terminalGateIn: items?.terminalGateIn,
      onboardConfirmation: items?.onboardConfirmation,
      ata: items?.ata,
      deliveryOrderCollected: items?.deliveryOrderCollected,
      emptyReturnConfirmation: items?.emptyReturnConfirmation,
    };
    return updatedData;
  };

  const FCLData = [
    {
      containerNumber: "mmi0301123",
      sealNo: "ABC123457",
      containerType: "Container",
      containerPickup: "31/03/2020",
      terminalGateIn: "12/06/2020",
      onboardConfirmation: "12/06/2020",
      ata: "12/06/2020",
      deliveryOrderCollected: "12/06/2020",
      emptyReturnConfirmation: "12/06/2020",
    },
    {
      containerNumber: "mmi0301123",
      sealNo: "ABC123457",
      containerType: "Container",
      containerPickup: "31/03/2020",
      terminalGateIn: "12/06/2020",
      onboardConfirmation: "12/06/2020",
      ata: "12/06/2020",
      deliveryOrderCollected: "12/06/2020",
      emptyReturnConfirmation: "12/06/2020",
    },
    {
      containerNumber: "mmi0301123",
      sealNo: "ABC123457",
      containerType: "Container",
      containerPickup: "31/03/2020",
      terminalGateIn: "12/06/2020",
      onboardConfirmation: "12/06/2020",
      ata: "12/06/2020",
      deliveryOrderCollected: "12/06/2020",
      emptyReturnConfirmation: "12/06/2020",
    },
    {
      containerNumber: "mmi0301123",
      sealNo: "ABC123457",
      containerType: "Container",
      containerPickup: "31/03/2020",
      terminalGateIn: "12/06/2020",
      onboardConfirmation: "12/06/2020",
      ata: "12/06/2020",
      deliveryOrderCollected: "12/06/2020",
      emptyReturnConfirmation: "12/06/2020",
    },
  ];

  // lcl
  const createLCLData = (items: any) => {
    const { id } = items;
    const updatedData = {
      id: id,
      slNo: (id + 1).toString().padStart(2, "0"),
      containerNumber: items?.containerNumber,
      sealNo: items?.sealNo,
      containerType: items?.containerType,
      quantity: items?.quantity,
      terminalGateIn: items?.terminalGateIn,
      onboardConfirmation: items?.onboardConfirmation,
      ata: items?.ata,
      deliveryOrderCollected: items?.deliveryOrderCollected,
      emptyReturnConfirmation: items?.emptyReturnConfirmation,
    };
    return updatedData;
  };

  const LCLData = [
    {
      containerNumber: "mmi0301123",
      sealNo: "ABC123457",
      containerType: "Container",
      quantity: "10",
      terminalGateIn: "12/06/2020",
      onboardConfirmation: "12/06/2020",
      ata: "12/06/2020",
      deliveryOrderCollected: "12/06/2020",
      emptyReturnConfirmation: "12/06/2020",
    },
    {
      containerNumber: "mmi0301123",
      sealNo: "ABC123457",
      containerType: "Container",
      quantity: "10",
      terminalGateIn: "12/06/2020",
      onboardConfirmation: "12/06/2020",
      ata: "12/06/2020",
      deliveryOrderCollected: "12/06/2020",
      emptyReturnConfirmation: "12/06/2020",
    },
    {
      containerNumber: "mmi0301123",
      sealNo: "ABC123457",
      containerType: "Container",
      quantity: "10",
      terminalGateIn: "12/06/2020",
      onboardConfirmation: "12/06/2020",
      ata: "12/06/2020",
      deliveryOrderCollected: "12/06/2020",
      emptyReturnConfirmation: "12/06/2020",
    },
    {
      containerNumber: "mmi0301123",
      sealNo: "ABC123457",
      containerType: "Container",
      quantity: "10",
      terminalGateIn: "12/06/2020",
      onboardConfirmation: "12/06/2020",
      ata: "12/06/2020",
      deliveryOrderCollected: "12/06/2020",
      emptyReturnConfirmation: "12/06/2020",
    },
  ];

  // bulk
  const createBulkData = (items: any) => {
    const { id } = items;
    const updatedData = {
      id: id,
      slNo: (id + 1).toString().padStart(2, "0"),
      terminalGateIn: items?.terminalGateIn,
      onboardConfirmation: items?.onboardConfirmation,
      ata: items?.ata,
      deliveryOrderCollected: items?.deliveryOrderCollected,
    };
    return updatedData;
  };

  const bulkData = [
    {
      terminalGateIn: "12/06/2020",
      onboardConfirmation: "12/06/2020",
      ata: "12/06/2020",
      deliveryOrderCollected: "12/06/2020",
    },
    {
      terminalGateIn: "12/06/2020",
      onboardConfirmation: "12/06/2020",
      ata: "12/06/2020",
      deliveryOrderCollected: "12/06/2020",
    },
  ];

  // fcltransit
  const createFCLTransitData = (items: any) => {
    const { id } = items;
    const updatedData = {
      id: id,
      slNo: (id + 1).toString().padStart(2, "0"),
      containerNumber: items?.containerNumber,
      sealNo: items?.sealNo,
      containerType: items?.containerType,
      atd: items?.atd,
      eta: items?.eta,
      ata: items?.ata,
    };
    return updatedData;
  };

  const FCLTransitData = [
    {
      containerNumber: "mmi0301123",
      sealNo: "ABC123457",
      containerType: "Container",
      atd: "12/06/2020",
      eta: "12/06/2020",
      ata: "12/06/2020",
    },
    {
      containerNumber: "mmi0301123",
      sealNo: "ABC123457",
      containerType: "Container",
      atd: "12/06/2020",
      eta: "12/06/2020",
      ata: "12/06/2020",
    },
  ];

  // lcltransit
  const createLCLTransitData = (items: any) => {
    const { id } = items;
    const updatedData = {
      id: id,
      slNo: (id + 1).toString().padStart(2, "0"),
      containerNumber: items?.containerNumber,
      sealNo: items?.sealNo,
      containerType: items?.containerType,
      quantity: items?.quantity,
      atd: items?.atd,
      eta: items?.eta,
      ata: items?.ata,
    };
    return updatedData;
  };

  const LCLTransitData = [
    {
      containerNumber: "mmi0301123",
      sealNo: "ABC123457",
      containerType: "Container",
      quantity: "10",
      atd: "12/06/2020",
      eta: "12/06/2020",
      ata: "12/06/2020",
    },
    {
      containerNumber: "mmi0301123",
      sealNo: "ABC123457",
      containerType: "Container",
      quantity: "10",
      atd: "12/06/2020",
      eta: "12/06/2020",
      ata: "12/06/2020",
    },
  ];

  const fetchFCLData = useCallback(() => {
    const arr = FCLData.map((items, index) => {
      return createFCLData({ ...items, id: index });
    });
    setFCLRows(arr);
  }, []);

  const fetchLCLData = useCallback(() => {
    const arr = LCLData.map((items, index) => {
      return createLCLData({ ...items, id: index });
    });
    setLCLRows(arr);
  }, []);

  const fetchBulkData = useCallback(() => {
    const arr = bulkData.map((items, index) => {
      return createBulkData({ ...items, id: index });
    });
    setBulkRows(arr);
  }, []);

  const fetchFCLTransitData = useCallback(() => {
    const arr = FCLTransitData.map((items, index) => {
      return createFCLTransitData({ ...items, id: index });
    });
    setFCLTransitRows(arr);
  }, []);

  const fetchLCLTransitData = useCallback(() => {
    const arr = LCLTransitData.map((items, index) => {
      return createLCLTransitData({ ...items, id: index });
    });
    setLCLTransitRows(arr);
  }, []);

  useEffect(() => {
    fetchFCLData();
  }, [fetchFCLData]);

  useEffect(() => {
    fetchLCLData();
  }, [fetchLCLData]);

  useEffect(() => {
    fetchBulkData();
  }, [fetchBulkData]);

  useEffect(() => {
    fetchFCLTransitData();
  }, [fetchFCLTransitData]);

  useEffect(() => {
    fetchLCLTransitData();
  }, [fetchLCLTransitData]);

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
              <div className="border-t border-t-success-700 border-dashed w-[12%]"></div>
              <div className=" rounded-full bg-success-50 p-2">
                <SuccessIcon color="#009F41" />
              </div>
              <div className="border-t border-t-success-700 border-dashed w-[12%]"></div>
              <div className=" rounded-full bg-success-50 p-2">
                <SuccessIcon color="#009F41" />
              </div>
              <div className="border-t border-t-success-700 border-dashed w-[12%]"></div>
              <div className=" rounded-full bg-success-50 p-2">
                <SuccessIcon color="#009F41" />
              </div>
              <div className="border-t border-t-success-700 border-dashed w-[12%]"></div>
              <div className=" rounded-full bg-success-50 p-2">
                <SuccessIcon color="#009F41" />
              </div>
              <div className="border-t border-t-success-700 border-dashed w-[12%]"></div>
              <div className=" rounded-full bg-grey-ab-50 p-2">
                <PendingIcon color="#121212" />
              </div>
            </div>

            {/* down */}
            <div className="flex justify-between w-[98%]">
              <ShipmentTrackingLayout
                label={"Container Pickup"}
                status={"Completed"}
              />
              <ShipmentTrackingLayout
                label={"Terminal Gate In"}
                status={"Completed"}
              />
              <ShipmentTrackingLayout
                label={"Onboard Confirmation"}
                status={"Completed"}
              />
              <ShipmentTrackingLayout
                label={"Transit Info "}
                status={"Completed"}
              />
              <ShipmentTrackingLayout
                label={"Delivery Order Collected"}
                status={"Completed"}
              />
              <ShipmentTrackingLayout
                label={"Empty Return Confirmation"}
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
            <p>Container Type</p>
            <p className="font-bold">20’ft Dry Container</p>
          </div>
          <div className="flex gap-2 text-sm">
            <p>Quantity</p>
            <p className="font-bold">05</p>
          </div>
        </div>

        <CustomTable columns={FCLColumns} rows={fclRows} isCheckbox={false} />
        <CustomTable columns={LCLColumns} rows={lclRows} isCheckbox={false} />
        <CustomTable columns={bulkColumns} rows={bulkRows} isCheckbox={false} />
      </div>

      {/* transit leg 1 */}
      <div className="flex flex-col gap-4">
        <p className="h6 font-semibold">Transit Leg 1</p>
        <div className="px-4 py-2 rounded-sm bg-grey-aw-50 flex justify-between">
          <div className="w-[60px] h-[60px]">
            <img src={CargoShipImage} alt="CargoShipImage" />
          </div>
          <div className="text-sm flex flex-col gap-2 p-1">
            <p className="text-grey-ab-300">Carrier Name</p>
            <p className="text-grey-ab-900 font-bold">Maersk Line </p>
          </div>
          <div className="text-sm flex flex-col gap-2 p-1">
            <p className="text-grey-ab-300">Vessel Name</p>
            <p className="text-grey-ab-900 font-bold">Maersk Emerald</p>
          </div>
          <div className="text-sm flex flex-col gap-2 p-1">
            <p className="text-grey-ab-300">Voyage Number</p>
            <p className="text-grey-ab-900 font-bold">M1234</p>
          </div>
        </div>

        <div className="flex px-4 py-3 justify-between bg-grey-aw-50 rounded-sm text-grey-ab-900">
          <div className="flex gap-2 text-sm">
            <p>Container Type</p>
            <p className="font-bold">20’ft Dry Container</p>
          </div>
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

        <CustomTable columns={FCLTransitColumns} rows={fclTransitRows} isCheckbox={false} />
        <CustomTable columns={LCLTransitColumns} rows={lclTransitRows} isCheckbox={false} />
      </div>

      {/* transit leg 2 */}
      <div></div>
    </div>
  );
};

export default UpdateDetails;
