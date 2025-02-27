import React from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { EditIcon } from "../../../components/icons/Icons";

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
