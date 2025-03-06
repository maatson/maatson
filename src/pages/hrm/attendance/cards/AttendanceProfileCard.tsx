import React from "react";
import defaultImage from "/images/sample/employeeProfile.png";
import PinkChip from "../../../../components/chips/PinkChip";
import PrimaryChip from "../../../../components/chips/PrimaryChip";
import GreyButton from "../../../../components/buttons/GreyButton";
import { EmailIcon, MessageIcon } from "../../../../components/icons/Icons";
import SecondaryButton from "../../../../components/buttons/SecondaryButton";
import SuccessChip from "../../../../components/chips/SuccessChip";

const AttendanceProfileCard: React.FC = () => {
  return (
    <div className="border p-6 gap-3 flex flex-col min-w-[286px] bg-grey-aw-50 rounded text-grey-ab-300 text-sm break-all">
      <div className="w-full">
        <img src={defaultImage} alt="" className="object-fill" />
      </div>
      <div className="gap-2 flex flex-col items-center">
        <div className="flex flex-col gap-1">
          <p className="text-lg text-grey-ab font-semibold">@andrew_202</p>
          <p className="text-sm text-grey-ab-400">Andrew Symons</p>
        </div>
        <div className="gap-1 flex items-center">
          <PinkChip label={"Customer Service"} size={"s"} variant={"fill"} />
          <PrimaryChip label={"Freight Forwarding"} size={"s"} variant={""} />
        </div>
      </div>
      <div className="flex items-center gap-3 justify-center w-full">
        <GreyButton
          label={"Mail To"}
          style="w-full"
          size={"m"}
          variant={""}
          leftIcon={<EmailIcon />}
        />
        <SecondaryButton
          label={"Message"}
          style="w-full"
          size={"m"}
          variant={""}
          leftIcon={<MessageIcon />}
        />
      </div>
      <div className="flex items-center justify-between ">
        <p className="w-full">Profile Status</p>
        <div className="w-full  text-end">
          {" "}
          <SuccessChip label={"Active"} size={"s"} variant={"mix"} />
        </div>
      </div>
      <div className="flex items-center justify-between ">
        <p className="w-full">Employee Type</p>
        <p className="text-grey-ab-400 w-full text-end">Full-Time</p>{" "}
      </div>
      <div className="flex items-center justify-between ">
        <p className="w-full">Experiences</p>
        <p className="text-grey-ab-400  w-full text-end">3+years</p>{" "}
      </div>
      <div className="flex items-center justify-between ">
        <p className="w-full">Office Location</p>
        <p className="text-grey-ab-400 w-full text-end">Mumbai, India</p>{" "}
      </div>
      <div className="flex items-center justify-between ">
        <p className="w-full">Gender</p>
        <p className="text-grey-ab-400 w-full text-end">Male</p>{" "}
      </div>
    </div>
  );
};

export default AttendanceProfileCard;
