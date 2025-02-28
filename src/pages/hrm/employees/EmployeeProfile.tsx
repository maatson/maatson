import React from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {
  EditIcon,
  EmailIcon,
  MessageIcon,
} from "../../../components/icons/Icons";
import employeeProfile from "/images/sample/employeeProfile.png";
import PinkChip from "../../../components/chips/PinkChip";
import PrimaryChip from "../../../components/chips/PrimaryChip";
import GreyButton from "../../../components/buttons/GreyButton";
import SecondaryButton from "../../../components/buttons/SecondaryButton";

const EmployeeProfile: React.FC = () => {
  return (
    <>
      <div className="flex justify-end py-4 items-center">
        <div>
          <PrimaryButton
            label={"Edit Profile"}
            size={"l"}
            variant={"primary"}
            leftIcon={<EditIcon color="#FDFDFD" />}
          />
        </div>
      </div>
      {/* Profile View */}
      <div className="flex flex-col gap-4">
        {/* Profile */}
        <div className="flex gap-6">
          {/* profile-left */}
          <div className="max-w-[380px] w-full bg-grey-aw-50 rounded-xs p-6 flex flex-col gap-3">
            <div className="w-[332px] h-[332px] rounded-sm">
              <img src={employeeProfile} alt="" className="rounded-sm" />
            </div>

            <div className="mx-auto flex flex-col gap-2 ">
              <div className="flex flex-col gap-1">
                <p className="text-lg  font-semibold text-grey-ab text-center">
                  @andrew_202
                </p>
                <p className="text-sm text-grey-ab-400">Andrew Symons</p>
              </div>
              <div className="flex justify-center  gap-1">
                <PinkChip
                  label={"Customer Service"}
                  size={"s"}
                  variant={"fill"}
                />
                <PrimaryChip
                  label={"Department"}
                  size={"s"}
                  variant={"primary"}
                />
              </div>
            </div>

            <div className="flex gap-12 ">
              <div className="w-full">
                <GreyButton
                  label={"Send Mail"}
                  size={"m"}
                  variant={"primary"}
                  leftIcon={<EmailIcon size={16} color="#121212" />}
                  style="w-full"
                />
              </div>
              <div className="w-full">
                <SecondaryButton
                  label={"Message"}
                  size={"m"}
                  variant={"primary"}
                  leftIcon={<MessageIcon size={16} color="#0E0E0E" />}
                  style="w-full"
                />
              </div>
            </div>
          </div>

          {/* profile-right */}
          <div></div>
        </div>

        {/* Attendence list */}
        <div></div>

        {/* Leave hsitory */}
        <div></div>
      </div>
    </>
  );
};

export default EmployeeProfile;
