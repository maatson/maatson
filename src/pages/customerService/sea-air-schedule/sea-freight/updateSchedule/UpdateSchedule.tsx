import React from "react";
import GroupField from "../../../../../components/groupField/GroupField";
import {
  AddIcon,
  ExcelIcon,
  SearchIcon,
} from "../../../../../components/icons/Icons";
import PrimaryButton from "../../../../../components/buttons/PrimaryButton";
import SuccessButton from "../../../../../components/buttons/SuccessButton";

const UpdateSchedule: React.FC = () => {
  return (
    <div className="p-3 flex justify-between items-center text-grey-ab-900">
      <div className="flex gap-2 items-center">
        <p className="text-lg font-semibold">Vessel Schedule List</p>
        <GroupField
          label={""}
          type={""}
          placeholder={""}
          name={""}
          value={""}
          onChange={function (
            e: React.ChangeEvent<
              HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
            >
          ): void {
            throw new Error("Function not implemented.");
          }}
          error={false}
          errorMessage={""}
          rightIcon={<SearchIcon color="#6A6A6A" />}
        />
      </div>
      <div className="flex gap-2 items-center">
        <PrimaryButton
          label={"Add Schedule"}
          size={"l"}
          variant={""}
          leftIcon={<AddIcon color="#ffffff" />}
        />
        <SuccessButton
          label={"Export"}
          size={""}
          variant={"l"}
          rightIcon={<ExcelIcon color="#ffffff" />}
        />
      </div>
    </div>
  );
};

export default UpdateSchedule;
