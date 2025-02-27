import React from "react";
import DefaultDp from "/images/defaultProfilePic.png";
import sampleDp from "/images/sample/employee.png";
import PrimaryChip from "../chips/PrimaryChip";
import BlackChip from "../chips/BlackChip";
import SuccessButton from "../buttons/SuccessButton";
import ErrorButton from "../buttons/ErrorButton";

interface LeaveCardProps {
  rejectClick: () => void;
  approveClick: () => void;
}

const LeaveCard: React.FC<LeaveCardProps> = ({ rejectClick }) => {
  return (
    <div className="flex flex-col gap-2 border border-grey-ab-100 rounded-sm">
      <div className="p-2 border-b flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="min-h-10 min-w-10">
            <img
              src={sampleDp || DefaultDp}
              alt="employeeImage"
              className="object-fill  h-10 w-10"
            />
          </div>
          <div className="flex gap-1 flex-col">
            <p className="text-sm">@nguyn_fin_11</p>
            <div className="flex items-center gap-1">
              <PrimaryChip label={"Manager"} size={"s"} variant={"fill"} />
              <PrimaryChip
                label={"Department"}
                size={"s"}
                variant={"primary"}
              />
            </div>
          </div>
        </div>
        <p className="text-grey-ab-400 text-xs">15 May 2020 9:30 am</p>
      </div>
      <div className="flex flex-col gap-4 px-3">
        <div className="flex items-center justify-between">
          <div className=" flex flex-col gap-1">
            <p className="text-grey-ab-400 text-xs">No of Days </p>
            <p className="text-grey-ab-400 text-xs font-semibold">1 Day </p>
          </div>
          <div className=" flex flex-col gap-1 justify-center items-center">
            <p className="text-grey-ab-400 text-2xs">Leave Type</p>
            <BlackChip label={"Emergency Leave"} size={"s"} variant={"fill"} />
          </div>
        </div>
        <div className="flex items-center justify-start gap-5">
          <div className=" flex flex-col gap-1">
            <p className="text-grey-ab-400 text-xs">Leave From </p>
            <p className="text-grey-ab-400 text-xs font-semibold">
              11/05/2025{" "}
            </p>
          </div>{" "}
          <div className=" flex flex-col gap-1">
            <p className="text-grey-ab-400 text-xs">Leave Till </p>
            <p className="text-grey-ab-400 text-xs font-semibold">12/05/2025</p>
          </div>
        </div>
      </div>

      <div className="p-2 gap-2 flex flex-col text-xs border-b border-grey-ab-50">
        <p className="text-grey-ab-400">Reason for Leave</p>
        <p className="text-grey-ab-400">
          I need to attend a family function in my hometown. My cousin's wedding
          is scheduled on 21/02/2025, and there are several pre-wedding and
          post-wedding rituals that require my presence. As a close family
          member, my participation in these events is important. I also need
          time to travel and make necessary arrangements for the function.
        </p>
      </div>
      <div className="flex items-center p-2 gap-3 justify-end">
        <div onClick={rejectClick}>
          {" "}
          <ErrorButton label={"Reject"} size={"s"} variant={"link"} />
        </div>
        <SuccessButton label={"Approve"} size={"s"} variant={""} />
      </div>
    </div>
  );
};

export default LeaveCard;
