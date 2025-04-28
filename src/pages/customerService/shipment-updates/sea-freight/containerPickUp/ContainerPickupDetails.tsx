import React, { useCallback, useEffect, useState } from "react";
import {
  AddIcon,
  ExcelIcon,
  SendIcon,
} from "../../../../../components/icons/Icons";
import BlackButton from "../../../../../components/buttons/BlackButton";
import SuccessButton from "../../../../../components/buttons/SuccessButton";
import WarningChip from "../../../../../components/chips/WarningChip";
import AddContainerPickup from "./AddContainerPickup";
import SuccessChip from "../../../../../components/chips/SuccessChip";
import EditableTable from "../../../../../components/table/EditableTable";

type CargoData =
  | {
      id?: number | string;
      containerNumber: string;
      pickupDate: string;
    }
  | {
      id?: number | string;
      containerNumber: string;
      quantity: string;
      pickupDate: string;
    };

type CargoDimensionProp =
  | {
      id?: number | string;
      containerSize: string;
      quantity: number;
      cargoData: CargoData[];
    }
  | {
      id?: number | string;
      packageType: string;
      quantity: number;
      cargoData: CargoData[];
    };
interface MockData {
  bookingId: string;
  companyName: string;
  portOfLoading: string;
  portOfDischarge: string;
  cargoType: string;
  cargoDimensions: CargoDimensionProp[];
  bookingValidatity: string;
  pickupStatus: boolean;
}

const ContainerPickupDetails: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentDimIndex, setCurrentDimIndex] = useState<number | null>(null);
  const [dummyData, setDummyData] = useState<MockData>({
    bookingId: "BB2501030001",
    companyName: "Farrel Kurniawan",
    portOfLoading: "Los Angeles, USA",
    portOfDischarge: "Rotterdam, Netherlands",
    cargoType: "Full Container Load",
    cargoDimensions: [
      {
        id: 1,
        containerSize: "40’ft Dry Container",
        quantity: 5,
        cargoData: [],
      },
      {
        id: 2,
        containerSize: "20’ft Dry Container",
        quantity: 10,
        cargoData: [],
      },
    ],
    bookingValidatity: "11/10/25",
    pickupStatus: false,
  });

  const closePopup = () => setIsOpen(false);
  const handleAddMoreData = (index: number) => {
    setCurrentDimIndex(index);
    setIsOpen(true);
  };

  const handleSubmit = (data: CargoData) => {
    if (currentDimIndex === null) return;

    setDummyData((prev) => {
      const updatedData = [...prev.cargoDimensions];
      const currentCargoData = updatedData[currentDimIndex].cargoData;
      const newCargoData = [...currentCargoData, { ...data }];
      updatedData[currentDimIndex] = {
        ...updatedData[currentDimIndex],
        cargoData: newCargoData,
      };
      return { ...prev, cargoDimensions: updatedData };
    });
  };

  const updateCargoContainer = (data: CargoData[], dimIndex: number) => {
    console.log(data, dimIndex);
    setDummyData((prev) => {
      const updatedData = [...prev.cargoDimensions];
      updatedData[dimIndex] = { ...updatedData[dimIndex], cargoData: data };
      return { ...prev, cargoDimensions: updatedData };
    });
  };

  return (
    <>
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
            <p className="text-sm font-bold ">{dummyData.bookingId}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Company Name</p>
            <p className="text-sm font-bold ">{dummyData.companyName}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Port of loading</p>
            <p className="text-sm font-bold ">{dummyData.portOfLoading}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Port of Discharge</p>
            <p className="text-sm font-bold ">{dummyData.portOfDischarge}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Cargo Type</p>
            <p className="text-sm font-bold ">{dummyData.cargoType}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Booking validity Date</p>
            <p className="text-sm font-bold ">{dummyData.bookingValidatity}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Pickup Status</p>
            {!dummyData.pickupStatus && (
              <WarningChip label={"Processing"} size={"m"} variant={"fill"} />
            )}
            {dummyData.pickupStatus && (
              <SuccessChip label={"Collected"} size={"m"} variant={"fill"} />
            )}
          </div>
        </div>

        {/* container type */}
        {dummyData.cargoDimensions.map((item, dimIndex) => (
          <div className="flex flex-col gap-3" key={dimIndex}>
            <div className="flex px-4 py-3 justify-between bg-grey-aw-50 rounded-sm text-grey-ab-900 items-center">
              <div className="flex gap-2 text-sm">
                <p>Container Type</p>
                <p className="font-bold">
                  {"containerSize" in item
                    ? item.containerSize
                    : "packageType" in item
                    ? item.packageType
                    : ""}
                </p>
              </div>
              <div className="flex gap-2 text-sm">
                <p>Container Count</p>
                <p className="font-bold">
                  {item.quantity.toString().padStart(2, "0")}
                </p>
              </div>

              <div
                className={`rounded-xl ${
                  (item.quantity - item.cargoData.length)
                    .toString()
                    .padStart(2, "0") !== "00"
                    ? "bg-secondary-50"
                    : "bg-success-50"
                } flex gap-1 py-1 pl-2 pr-2 items-center`}
              >
                <p
                  className={`text-2xs font-bold ${
                    (item.quantity - item.cargoData.length)
                      .toString()
                      .padStart(2, "0") !== "00"
                      ? "text-secondary"
                      : "text-success"
                  }`}
                >{`${
                  (item.quantity - item.cargoData.length)
                    .toString()
                    .padStart(2, "0") !== "00"
                    ? "Pending"
                    : "Updated"
                }`}</p>
                {(item.quantity - item.cargoData.length)
                  .toString()
                  .padStart(2, "0") !== "00" && (
                  <div
                    className={`rounded-full ${
                      (item.quantity - item.cargoData.length)
                        .toString()
                        .padStart(2, "0") !== "00"
                        ? "bg-secondary-300"
                        : "bg-success-300"
                    }  p-1 text-2xs font-bold text-grey-aw-50 w-[20px] h-[20px] flex items-center justify-center`}
                  >
                    <p>
                      {(item.quantity - item.cargoData.length)
                        .toString()
                        .padStart(2, "0")}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {item.cargoData.length >= 1 ? (
              <div className="bg-grey-aw-50">
                <EditableTable
                  columns={[
                    {
                      key: "containerNumber",
                      label: "Container Number",
                      editable: true,
                    },
                    {
                      key: "pickupDate",
                      label: "Pickup Date",
                      editable: true,
                      type: "date",
                    },
                  ]}
                  data={item.cargoData}
                  onChange={(data) => updateCargoContainer(data, dimIndex)}
                  isDisableDelete={false}
                />
                {item.cargoData.length < item.quantity && (
                  <div className="w-full bg-grey-aw-50 px-4 py-2 rounded-b-xs">
                    <div onClick={() => handleAddMoreData(dimIndex)}>
                      <BlackButton
                        label={"Add More"}
                        size={"s"}
                        variant={"primary"}
                        leftIcon={<AddIcon size={16} color="#E9E9E9" />}
                      />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-1 rounded-xs bg-grey-aw-50">
                <div className="px-6 py-2 bg-grey-200 text-grey-ab-900 flex justify-between font-semibold text-sm">
                  <p className="p-2 py-1">NO</p>
                  <p className="p-2 py-1">Container Number</p>
                  <p className="p-2 py-1">Pickup Date</p>
                  <p className="p-2 py-1">Action</p>
                </div>
                <div className="px-6 py-2 flex flex-col gap-4 items-center justify-center">
                  <p className="text-xs text-grey-ab-300">
                    Please enter the Container Number (e.g., ABCD1234567) and
                    Container Pickup Date (e.g., YYYY-MM-DD) for the new row.
                  </p>
                  <div onClick={() => handleAddMoreData(dimIndex)}>
                    <BlackButton
                      label={"Add Data"}
                      size={"s"}
                      variant={"primary"}
                      leftIcon={<AddIcon size={16} color="#ffffff" />}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Popup  */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
          <AddContainerPickup
            onClose={closePopup}
            onSubmit={handleSubmit}
            cargoType={dummyData.cargoType}
          />
        </div>
      )}
    </>
  );
};

export default ContainerPickupDetails;
