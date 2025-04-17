import React, { useCallback, useEffect, useState } from "react";
import BlackButton from "../../../../../components/buttons/BlackButton";
import SuccessButton from "../../../../../components/buttons/SuccessButton";
import {
  CrossIcon,
  EditIcon,
  ExcelIcon,
  SendIcon,
  TickIcon,
} from "../../../../../components/icons/Icons";
import ViewCard from "../../../sea-air-schedule/components/layouts/viewCard";
import WarningChip from "../../../../../components/chips/WarningChip";
import SuccessChip from "../../../../../components/chips/SuccessChip";
import CustomTable from "../../../../../components/table/CustomTable";

interface TransitContainerProp {
  aircraftType: string;
  flightNumber: string;
  quantity: string;
  containerSize: string;
  portOfLoading: string;
  etd: string;
  portOfDischarge: string;
  eta: string;
  ata: string;
  isEditing?: boolean;
}

interface TransitDataProp {
  containerType: string;
  quantity: string;
  pol: string;
  pod: string;
  containerData: TransitContainerProp[];
}
type TransitData = {
  [key: string]: TransitProps;
};
interface TransitProps {
  transitId: string;
  data: TransitDataProp[];
}

interface DataProps {
  bookingId: string;
  companyName: string;
  portOfLoading: string;
  portOfDischarge: string;
  cargoType: string;
  bookingValidatity: string;
  transitStatus: boolean;
  transitData: TransitData;
}

const columns: any[] = [
  { id: "sNo", label: "s.no", minWidth: "100px" },
  {
    id: "aircraftType",
    label: "Aircraft Type",
  },
  { id: "flightNumber", label: "Flight Number" },
  { id: "quantity", label: "Quantity" },
  { id: "containerSize", label: "Container Size" },
  { id: "portOfLoading", label: "Port of Loading" },
  { id: "etd", label: "ETD(Departure)" },
  { id: "portOfDischarge", label: "Port of Discharge" },
  { id: "eta", label: "ETA(Arrival)" },
  { id: "ata", label: "ATA(Arrival)" },
  { id: "action", label: "Action", minWidth: "100px", align: "center" },
];

const TransitView: React.FC = () => {
  const [dummyData, setDummyData] = useState<DataProps>({
    bookingId: "BB2501030001",
    companyName: "Farrel Kurniawan",
    portOfLoading: "Los Angeles, USA",
    portOfDischarge: "Rotterdam, Netherlands",
    cargoType: "Standard Cargo",
    bookingValidatity: "11/10/25",
    transitStatus: false,
    transitData: {
      transit1: {
        transitId: "1",
        data: [
          {
            containerType: "20’ft Dry Container",
            quantity: "5",
            pol: "Chennai, India",
            pod: "Colombo, Sri Lanka",
            containerData: [
              {
                aircraftType: "COA",
                flightNumber: "ABC123457",
                quantity: "10",
                containerSize: "ud2 Reefer",
                portOfLoading: "Chennai",
                etd: "2025-04-01",
                portOfDischarge: "Colombo",
                eta: "2025-04-05",
                ata: "2025-04-05",
              },
              {
                aircraftType: "COA ",
                flightNumber: "ABC123457",
                quantity: "10",
                containerSize: "ud2 Reefer",
                portOfLoading: "Chennai",
                etd: "2025-04-01",
                portOfDischarge: "Colombo",
                eta: "2025-04-05",
                ata: "2025-04-05",
              },
            ],
          },
          {
            containerType: "40’ft Dry Container",
            quantity: "3",
            pol: "Mumbai, India",
            pod: "Singapore, Singapore",
            containerData: [
              {
                aircraftType: "COA",
                flightNumber: "ABC123457",
                quantity: "10",
                containerSize: "ud2 Reefer",
                portOfLoading: "Chennai",
                etd: "2025-04-01",
                portOfDischarge: "Colombo",
                eta: "2025-04-05",
                ata: "2025-04-05",
              },
              {
                aircraftType: "POX ",
                flightNumber: "ABC123457",
                quantity: "10",
                containerSize: "ud2 Reefer",
                portOfLoading: "Chennai",
                etd: "2025-04-01",
                portOfDischarge: "Colombo",
                eta: "2025-04-05",
                ata: "2025-04-05",
              },
            ],
          },
        ],
      },
      transit2: {
        transitId: "2",
        data: [
          {
            containerType: "20’ft Dry Container",
            quantity: "5",
            pol: "Chennai, India",
            pod: "Colombo, Sri Lanka",
            containerData: [
              {
                aircraftType: "COA",
                flightNumber: "ABC123457",
                quantity: "10",
                containerSize: "ud2 Reefer",
                portOfLoading: "Chennai",
                etd: "2025-04-01",
                portOfDischarge: "Colombo",
                eta: "2025-04-05",
                ata: "2025-04-05",
              },
              {
                aircraftType: "COA ",
                flightNumber: "ABC123457",
                quantity: "10",
                containerSize: "ud2 Reefer",
                portOfLoading: "Chennai",
                etd: "2025-04-01",
                portOfDischarge: "Colombo",
                eta: "2025-04-05",
                ata: "2025-04-05",
              },
            ],
          },
          {
            containerType: "40’ft Dry Container",
            quantity: "3",
            pol: "Mumbai, India",
            pod: "Singapore, Singapore",
            containerData: [
              {
                aircraftType: "COA",
                flightNumber: "ABC123457",
                quantity: "10",
                containerSize: "ud2 Reefer",
                portOfLoading: "Chennai",
                etd: "2025-04-01",
                portOfDischarge: "Colombo",
                eta: "2025-04-05",
                ata: "2025-04-05",
              },
              {
                aircraftType: "COA ",
                flightNumber: "ABC123457",
                quantity: "10",
                containerSize: "ud2 Reefer",
                portOfLoading: "Chennai",
                etd: "2025-04-01",
                portOfDischarge: "Colombo",
                eta: "2025-04-05",
                ata: "2025-04-05",
              },
            ],
          },
        ],
      },
    },
  });

  const [activeTransitLeg, setActiveTransitLeg] = useState<string>("transit1");
  const [rows, setRows] = useState<any>({});

  const handleToggleEdit = (
    transitKey: string,
    containerGroupIndex: number,
    containerIndex: number,
    booleanValue: boolean
  ) => {
    const updatedTransit = {
      ...dummyData.transitData[
        transitKey as keyof typeof dummyData.transitData
      ],
    };
    // console.log(updatedTransit, "updatedTransit");

    const updatedContainerGroup = {
      ...updatedTransit.data[containerGroupIndex],
    };
    // console.log(updatedContainerGroup, "updatedContainerGroup");

    const updatedContainerData = [...updatedContainerGroup.containerData];

    // console.log(updatedContainerData, "updatedContainerData");

    updatedContainerData[containerIndex] = {
      ...updatedContainerData[containerIndex],
      isEditing: booleanValue,
    };

    updatedContainerGroup.containerData = updatedContainerData;
    updatedTransit.data[containerGroupIndex] = updatedContainerGroup;

    setDummyData((prev) => ({
      ...prev,
      transitData: {
        ...prev.transitData,
        [transitKey]: updatedTransit,
      },
    }));
  };

  const createRowData = (
    item: any,
    rowIndex: number,
    transitKey: string,
    containerGroupIndex: number
  ) => {
    const {
      aircraftType,
      flightNumber,
      quantity,
      containerSize,
      portOfLoading,
      etd,
      portOfDischarge,
      eta,
      ata,
      isEditing = false,
    } = item;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setDummyData((prevData) => {
        const updated = { ...prevData };

        // Access the specific container item
        const containerItem =
          updated.transitData[transitKey].data[containerGroupIndex]
            .containerData[rowIndex];

        // Update the specific field (like "eta")
        (containerItem as any)[name] = value;

        return updated;
      });
    };

    const handleSaveETA = () => {
      //  Example API call (replace with your real API function)
      // await api.updateETA({ eta: etaValue });
      console.log(dummyData);

      // Turn off edit mode
      handleToggleEdit(transitKey, containerGroupIndex, rowIndex, false);
    };

    return {
      id: rowIndex,
      sNo: rowIndex + 1,
      aircraftType,
      flightNumber,
      containerSize,
      portOfLoading,
      etd,
      portOfDischarge,
      eta: isEditing ? (
        <input
          type="date"
          name="eta"
          value={eta}
          onChange={handleChange}
          className="border rounded px-2 py-1 w-full"
        />
      ) : (
        eta
      ),
      ata,
      quantity,
      action: (
        <div className="flex items-center gap-3 justify-center">
          {!isEditing ? (
            <div
              className="p-1 rounded bg-blue flex items-center cursor-pointer"
              onClick={() =>
                handleToggleEdit(
                  transitKey,
                  containerGroupIndex,
                  rowIndex,
                  true
                )
              }
            >
              <EditIcon color="#ffffff" size={16} />
            </div>
          ) : (
            <>
              <div
                className="p-1 rounded bg-red flex items-center cursor-pointer"
                onClick={() =>
                  handleToggleEdit(
                    transitKey,
                    containerGroupIndex,
                    rowIndex,
                    false
                  )
                }
              >
                <CrossIcon color="#ffffff" size={16} />
              </div>
              <div
                className="p-1 rounded bg-success flex items-center cursor-pointer"
                onClick={() => handleSaveETA()}
              >
                <TickIcon color="#ffffff" size={16} />
              </div>
            </>
          )}
        </div>
      ),
    };
  };

  const fetchData = useCallback(() => {
    const result: any = {};

    Object.entries(dummyData.transitData).forEach(([key, transit]) => {
      result[key] = transit.data.map(
        (containerGroup: any, groupIndex: number) => ({
          containerDetails: containerGroup.containerData.map(
            (container: any, rowIndex: number) =>
              createRowData(container, rowIndex, key, groupIndex)
          ),
        })
      );
    });

    setRows(result);
  }, [dummyData]);

  useEffect(() => {
    // Ensure every containerData has isEditing field set to false
    const preProcessed = { ...dummyData };
    Object.keys(preProcessed.transitData).forEach((key) => {
      preProcessed.transitData[
        key as keyof typeof preProcessed.transitData
      ].data.forEach((group: any) => {
        group.containerData = group.containerData.map((item: any) => ({
          ...item,
          isEditing: item.isEditing ?? false,
        }));
      });
    });
    setDummyData(preProcessed);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="flex flex-col gap-6 bg-primary-50">
      <div className="bg-grey-aw-50 rounded shadow-sm p-3 flex items-center justify-between">
        <p className="text-lg font-semibold">BB2501030001 Details</p>
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
      <div className="bg-grey-aw-50 rounded shadow-sm p-6 flex gap-3  justify-between ">
        <ViewCard
          label={"Booking ID"}
          value={dummyData.bookingId}
          style="flex-col"
          labelStyle="font-normal"
          valueStyle="font-semibold"
        />
        <ViewCard
          label={"Company Name"}
          value={dummyData.companyName}
          style="flex-col"
          labelStyle="font-normal"
          valueStyle="font-semibold"
        />
        <ViewCard
          label={"Port of loading"}
          value={dummyData.portOfLoading}
          style="flex-col"
          labelStyle="font-normal"
          valueStyle="font-semibold"
        />
        <ViewCard
          label={"Port of Discharge"}
          value={dummyData.portOfDischarge}
          style="flex-col"
          labelStyle="font-normal"
          valueStyle="font-semibold"
        />
        <ViewCard
          label={"Cargo Type"}
          value={dummyData.cargoType}
          style="flex-col"
          labelStyle="font-normal"
          valueStyle="font-semibold"
        />
        <ViewCard
          label={"Booking validity Date"}
          value={dummyData.bookingValidatity}
          style="flex-col"
          labelStyle="font-normal"
          valueStyle="font-semibold"
        />
        <div className="flex flex-col gap-2">
          <p className="text-sm ">Transit info Status</p>
          {dummyData.transitStatus ? (
            <SuccessChip label="Generated" size="s" variant="fill" />
          ) : (
            <WarningChip label={"Processing"} size={"s"} variant={"fill"} />
          )}
        </div>
      </div>
      <div className="bg-grey-aw-50 rounded shadow-sm p-4 flex flex-col gap-6">
        <div className="p-2 flex items-center gap-2">
          {Object.keys(dummyData.transitData).map((item, index) => (
            <span
              key={index}
              className={`${
                item === activeTransitLeg
                  ? "bg-black text-grey-ab-50"
                  : "text-black"
              } px-4 py-1 rounded text-sm font-semibold transition-all duration-500 cursor-pointer`}
              onClick={() => setActiveTransitLeg(item)}
            >
              Transit leg {index + 1}
            </span>
          ))}
        </div>

        {dummyData.transitData[
          activeTransitLeg as keyof typeof dummyData.transitData
        ].data.map((item: any, index: number) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4 bg-grey-aw-100 px-4 py-2 rounded">
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                <ViewCard
                  label={"Container Type"}
                  value={item.containerType}
                  labelStyle="font-normal"
                  valueStyle="font-semibold"
                />
                <ViewCard
                  label={"Quantity"}
                  value={item.quantity}
                  labelStyle="font-normal"
                  valueStyle="font-semibold"
                />
                <ViewCard
                  label={"POL"}
                  value={item.pol}
                  labelStyle="font-normal"
                  valueStyle="font-semibold"
                />
                <ViewCard
                  label={"POD"}
                  value={item.pod}
                  labelStyle="font-normal"
                  valueStyle="font-semibold"
                />
              </div>
            </div>

            <CustomTable
              columns={columns}
              rows={rows[activeTransitLeg]?.[index]?.containerDetails || []}
              isCheckbox={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransitView;
