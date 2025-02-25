import React from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {
  AddIcon,
  SearchIcon,
  ExcelIcon,
} from "../../../components/icons/Icons";
import SuccessButton from "../../../components/buttons/SuccessButton";
import GroupField from "../../../components/groupField/GroupField";
import CustomPagination from "../../../components/pagination/CustomPagination";

// Define pagination model if needed

const AttendanceList: React.FC = () => {
  let value = 1;

  const handlechangePage = () => {
    value++;
    console.log(value);
  };
  return (
    <>
      <div className="p-3 flex justify-between items-center text-grey-ab-900">
        <p className="text-lg font-semibold">Employee Attendance List</p>
        <PrimaryButton
          label={"Add Attendance"}
          size={""}
          variant={""}
          leftIcon={<AddIcon color="#fdfdfd" />}
        />
      </div>
      <div className="p-3 flex justify-between items-center text-grey-ab-900">
        <div className="flex gap-4 items-center">
          <GroupField
            label={""}
            type={""}
            placeholder={"Search"}
            name={""}
            value={""}
            onChange={() => {}}
            parentStyle="max-w-[320px] w-full min-w-[180px]"
            error={false}
            rightIcon={<SearchIcon />}
            errorMessage={""}
          />
          <GroupField
            label={""}
            type={"select"}
            placeholder={"Branch Office"}
            name={""}
            value={""}
            size="s"
            parentStyle="max-w-[180px] w-full min-w-[180px]"
            onChange={() => {}}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={""}
            type={"date"}
            placeholder={"today"}
            name={""}
            size="s"
            value={""}
            parentStyle="max-w-[180px] w-full min-w-[180px]"
            onChange={() => {}}
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
      <div>
        <CustomPagination
          totalPages={10}
          currentPage={value}
          handlePageChange={handlechangePage}
        />
      </div>
    </>
  );
};

export default AttendanceList;
