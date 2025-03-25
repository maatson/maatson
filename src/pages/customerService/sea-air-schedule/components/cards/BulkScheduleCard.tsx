import React from "react";
import GroupField from "../../../../../components/groupField/GroupField";
import { ShipIcon } from "../../../../../components/icons/Icons";
import PrimaryButton from "../../../../../components/buttons/PrimaryButton";

interface BulkScheduleProps {
  isSeaFreight: boolean;
  onCancel: () => void;
  onUpdate: () => void;
}

const BulkScheduleCard: React.FC<BulkScheduleProps> = ({
  isSeaFreight,
  onCancel,
  onUpdate,
}) => {
  return (
    <div className="fixed inset-1 bg-black/20 z-[1] h-screen flex items-center justify-center">
      <div className="bg-grey-aw-100 max-w-[640px] w-full rounded  max-h-[500px] flex flex-col gap-6 p-6 relative inset-5">
        <h5 className="h5 font-semibold text-center">
          Bulk Schedule Update ({isSeaFreight ? "Sea Freight" : "Air Freight"})
        </h5>
        <div className="overflow-auto custom-scrollbar flex flex-col gap-2">
          <div className="p-1 gap-1 flex flex-col bg-red-50 text-2xs rounded">
            <p className="text-red-600 font-semibold">Note:</p>
            <p className="">
              Please ensure that all required fields are filled out for accurate
              data entry. The following fields, marked with an asterisk (*) are
              mandatory. When specifying the Service Name and Route Port, make
              sure to include the relevant details for each service, along with
              the associated ETA (Estimated Time of Arrival) for each service
              route. These fields are essential for accurately completing the
              bulk schedule update.
            </p>
          </div>
          <GroupField
            label={"Carrier Name*"}
            type={"select"}
            placeholder={"Enter Carrier Name"}
            name={"carrierName"}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
            leftIcon={<ShipIcon color="#2c398f" />}
          />
          <div className="flex flex-col gap-2">
            <GroupField
              label={"Json Input"}
              type={"textarea"}
              placeholder={"Enter Json"}
              name={"data"}
              value={""}
              onChange={() => {}}
              error={false}
              errorMessage={""}
            />
            <div className="p-1 gap-1 flex flex-col bg-blue-50 text-2xs rounded">
              <p className="text-blue-600 font-semibold">
                Json format for Bulk Update!
              </p>
              <p className="">
                Please ensure that all required fields are filled out for
                accurate data entry. The following fields, marked with an
                asterisk (*) are mandatory. When specifying the Service Name and
                Route Port, make sure to include the relevant details for each
                service, along with the associated ETA (Estimated Time of
                Arrival) for each service route. These fields are essential for
                accurately completing the bulk schedule update.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div onClick={onCancel} className="w-full">
            {" "}
            <PrimaryButton
              label={"Cancel"}
              size={"l"}
              variant={"link"}
              style="w-full"
            />
          </div>
          <div onClick={onUpdate} className="w-full">
            {" "}
            <PrimaryButton
              label={"Update"}
              size={"l"}
              variant={""}
              style="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkScheduleCard;
