import React from "react";
import {
  ExcelIcon,
  PendingIcon,
  SendIcon,
  SuccessIcon,
} from "../../../../../components/icons/Icons";
import BlackChip from "../../../../../components/chips/BlackChip";
import ShipmentTrackingLayout from "../../components/layouts/ShipmentTrackingLayout";
import BlackButton from "../../../../../components/buttons/BlackButton";
import SuccessButton from "../../../../../components/buttons/SuccessButton";

const ContainerPickupDetails: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 bg-primary-50">
      <div className="flex justify-between p-3 rounded-xs bg-grey-aw-50 text-grey-ab-900 text-lg font-bold items-center">
        <p>BB2501030001 Details</p>
        <div className="flex gap-4">
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

        {/* <CustomTable columns={FCLColumns} rows={fclRows} isCheckbox={false} /> */}
        {/* <CustomTable columns={LCLColumns} rows={lclRows} isCheckbox={false} /> */}
        {/* <CustomTable columns={bulkColumns} rows={bulkRows} isCheckbox={false} /> */}
      </div>
    </div>
  );
};

export default ContainerPickupDetails;
