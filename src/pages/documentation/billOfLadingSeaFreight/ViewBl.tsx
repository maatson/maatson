import React from "react";
import GroupField from "../../../components/groupField/GroupField";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

const ViewBl: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* top indicators and updates */}
      <div className="flex justify-between items-center">
        <div className="bg-grey-aw-50 rounded-sm gap-3  p-4 flex items-center">
          <DraftIndicator title={"BL Draft"} status={true} />
          <DraftIndicator title={"BL Review"} status={false} />
          <DraftIndicator title={"BL Approval Request"} status={false} />
          <DraftIndicator title={"BL Approved"} status={false} />
        </div>
        <div className="bg-grey-aw-50 rounded-sm p-2 gap-3 flex items-center justify-center">
          <GroupField
            label={""}
            type={"select"}
            placeholder={""}
            name={""}
            value={"BL Draft"}
            onChange={() => {}}
            error={false}
            errorMessage={""}
            parentStyle="w-[220px]"
          />
          <div>
            {" "}
            <PrimaryButton label={"Update Status"} size={"xl"} variant={""} />
          </div>
        </div>
      </div>
      {/* body of bl*/}
      <div></div>

      {/* actions */}
      <div></div>
    </div>
  );
};

export default ViewBl;

const DraftIndicator: React.FC<{ title: string; status: boolean }> = ({
  title,
  status,
}) => {
  return (
    <div className="flex flex-col gap-2 min-w-[124px]">
      <p className="text-center text-xs font-semibold">{title}</p>
      <span
        className={`${
          status ? "bg-primary" : "bg-primary-50"
        } rounded-sm h-2 w-full`}
      ></span>
    </div>
  );
};
