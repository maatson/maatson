import React, { useCallback, useEffect, useState } from "react";
import {
  AddIcon,
  CrossIcon,
  DeleteIcon,
  EditIcon,
  ExcelIcon,
  SendIcon,
  TickIcon,
} from "../../../../../components/icons/Icons";
import BlackButton from "../../../../../components/buttons/BlackButton";
import SuccessButton from "../../../../../components/buttons/SuccessButton";
import WarningChip from "../../../../../components/chips/WarningChip";
import CustomTable from "../../../../../components/table/CustomTable";
import AddAirportGateIn from "./AddAirportGateIn";

interface RowData {
  id: string | number;
  No: string | number;
  containerNumber: string | React.ReactNode;
  pickupDate: React.ReactNode;
  action: React.ReactNode;
}

interface Item {
  containerNumber: string;
  pickupDate: string;
}

const Columns: any[] = [
  { id: "No", label: "NO", minWidth: 30, align: "center" },
  {
    id: "containerNumber",
    label: "Container Number",
    minWidth: 140,
    align: "center",
  },
  { id: "pickupDate", label: "Pickup Date", align: "center" },
  { id: "action", label: "Action", align: "center" },
];

const ViewAirportGateIn: React.FC = () => {
  const [rows, setRows] = useState<RowData[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [editingRows, setEditingRows] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [data, setData] = useState<Item[]>([]);

  const createData = (items: any, index: number) => {
    const { id } = items;
    const isEditing = editingRows[index] || false;
    const containerNumbers = (
      <div>
        {!isEditing ? (
          "-"
        ) : (
          <div>
            <input type="text" name="" id="" />
          </div>
        )}
      </div>
    );
    const pickupDates = (
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
          <>
            {index === 0 ? (
              <div
                className="p-1 rounded-xs bg-blue cursor-pointer"
                onClick={() => handleEdit(index)}
              >
                <EditIcon size={16} color="#FDFDFD" />
              </div>
            ) : (
              <>
                <div
                  className="p-1 rounded-xs bg-blue cursor-pointer"
                  onClick={() => handleEdit(index)}
                >
                  <EditIcon size={16} color="#FDFDFD" />
                </div>
                <div
                  className="p-1 rounded-xs bg-error cursor-pointer"
                  onClick={() => handleDelete(index)}
                >
                  <DeleteIcon size={16} color="#FDFDFD" />
                </div>
              </>
            )}
          </>
        )}
      </div>
    );
    const updatedData = {
      id: id,
      No: (id + 1).toString().padStart(2, "0"),
      containerNumber: containerNumbers,
      pickupDate: pickupDates,
      action: actions,
    };
    return updatedData;
  };

  const handleEdit = (id: number) => {
    setEditingRows((prev) => ({ ...prev, [id]: true }));
  };

  const handleDelete = (id: number) => {
    setData((prev) => prev.filter((_, index) => index !== id));
  };

  const handleCancel = (id: number) => {
    setEditingRows((prev) => ({ ...prev, [id]: false }));
  };

  const handleSave = (id: number) => {
    setEditingRows((prev) => ({ ...prev, [id]: false }));
  };

  const handleAddMore = () => {
    setIsOpen(true);
  };
  const handleAddData = () => {
    setIsOpen(true);
  };
  const closePopup = () => setIsOpen(false);

  const fetchData = useCallback(() => {
    const arr = data.map((items, index) => {
      return createData({ ...items, id: index }, index);
    });
    setRows(arr);
  }, [editingRows, data]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
            <p className="text-sm">Pickup Status</p>
            <WarningChip label={"Processing"} size={"m"} variant={"fill"} />
          </div>
        </div>

        {/* container type */}
        <div className="flex flex-col gap-3">
          <div className="flex px-4 py-3 justify-between bg-grey-aw-50 rounded-sm text-grey-ab-900 items-center">
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

          {data.length >= 1 ? (
            <div>
              <CustomTable
                columns={Columns}
                rows={rows}
                isCheckbox={false}
              />
              <div className="w-full bg-grey-aw-50 px-4 py-2 rounded-b-xs">
                <div onClick={handleAddMore}>
                  <BlackButton
                    label={"Add More"}
                    size={"s"}
                    variant={"primary"}
                    leftIcon={<AddIcon size={16} color="#E9E9E9" />}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-1 rounded-xs bg-grey-aw-50">
              <div className="px-6 py-2 bg-grey-200 text-grey-ab-900 flex justify-between gap-6 text-nowrap font-semibold text-sm overflow-auto custom-scrollbar-small">
                <p className="p-2 py-1">NO</p>
                <p className="p-2 py-1">Airline Name</p>
                <p className="p-2 py-1">MAWB Number</p>
                <p className="p-2 py-1">HAWB Number</p>
                <p className="p-2 py-1">Flight Number</p>
                <p className="p-2 py-1">Origin</p>
                <p className="p-2 py-1">Quantity</p>
                <p className="p-2 py-1">Flight Date</p>
                <p className="p-2 py-1">Airport Gate In Date</p>
                <p className="p-2 py-1">Action</p>
              </div>
              <div className="px-6 py-2 flex flex-col gap-4 items-center justify-center">
                <p className="text-xs text-grey-ab-300">
                  Please enter the Cargo Data for the new row.
                </p>
                <div onClick={handleAddData}>
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
      </div>

      {/* Popup  */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
          <AddAirportGateIn onClose={closePopup} />
        </div>
      )}
    </>
  );
};

export default ViewAirportGateIn;
