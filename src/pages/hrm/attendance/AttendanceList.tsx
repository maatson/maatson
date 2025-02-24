import React from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { AddIcon, ExcelIcon } from "../../../components/icons/Icons";
import SuccessButton from "../../../components/buttons/SuccessButton";
import GroupField from "../../../components/groupField/GroupField";

const AttendanceList: React.FC = () => {
  return (
    <>
      <div className="p-3 flex justify-between items-center text-grey-ab-900 ">
        <p className="text-lg font-semibold "> Employee Attendance List</p>
        <PrimaryButton
          label={"Add Attendance"}
          size={""}
          variant={""}
          leftIcon={<AddIcon color="#fdfdfd" />}
        />
      </div>
      <div className="p-3 flex justify-between items-center text-grey-ab-900">
        <div className="flex gap-4  items-center">
          <GroupField
            label={""}
            type={""}
            placeholder={""}
            name={""}
            size="s"
            value={""}
            onChange={function (
              e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
            ): void {
              throw new Error("Function not implemented.");
            }}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={""}
            type={""}
            placeholder={""}
            name={""}
            value={""}
            size="m"
            onChange={function (
              e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
            ): void {
              throw new Error("Function not implemented.");
            }}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={""}
            type={"select"}
            placeholder={""}
            name={""}
            size="l"
            value={""}
            onChange={function (
              e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
            ): void {
              throw new Error("Function not implemented.");
            }}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={""}
            type={"select"}
            placeholder={""}
            name={""}
            value={""}
            onChange={function (
              e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
            ): void {
              throw new Error("Function not implemented.");
            }}
            error={false}
            errorMessage={""}
          />
        </div>
        <SuccessButton
          label={"Export"}
          size={"lg"}
          variant={""}
          rightIcon={<ExcelIcon color="#fdfdfd" />}
        />
      </div>
    </>
  );
};

export default AttendanceList;
