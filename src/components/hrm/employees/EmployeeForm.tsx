import React from "react";
import PrimaryButton from "../../buttons/PrimaryButton";
import { RegistrationIcon } from "../../icons/Icons";
import GroupField from "../../groupField/GroupField";

const EmployeeForm: React.FC = () => {
  const handleChange = () => {};
  return (
    <>
      <div className="w-full rounded-xs py-4 px-8 flex flex-col gap-8 bg-grey-aw-50 shadow-lg">
        {/* heading section */}
        <p className="py-4 px-3 text-lg font-bold text-grey-ab-900 border">
          Employee Form
        </p>  

        {/* form section */}
        <div className="flex flex-col gap-8">
          {/* employee registration */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <RegistrationIcon />
                <p className="font-semibold text-grey-ab-800">
                  Employee Registration
                </p>
              </div>
              <div className="border-t border-t-grey-ab-100"></div>
            </div>

            {/* user name */}
            <GroupField
              label={"User Name*"}
              type={"text"}
              placeholder={"Enter "}
              name={""}
              value={""}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />

            {/* email , mobile number */}
            <div></div>

            {/* password, confirm password */}
            <div></div>
          </div>

          {/* employee information */}
          <div></div>

          {/* emergency contact details */}
          <div></div>

          {/* company details  */}
          <div></div>

          {/* employee documents */}
          <div></div>
        </div>

        {/* button section */}
        <div className="flex gap-6 justify-end border">
          <PrimaryButton label={"Cancel"} size={"xl"} variant={"outline"} />
          <PrimaryButton
            label={"Save Details"}
            size={"xl"}
            variant={"primary"}
          />
        </div>
      </div>
    </>
  );
};

export default EmployeeForm;
