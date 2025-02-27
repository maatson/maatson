import React from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import GroupField from "../../../components/groupField/GroupField";
import { NotesIcon } from "../../../components/icons/Icons";

interface UpdateHolidayProps {
  cancel: () => void;
}

const UpdateHoliday: React.FC<UpdateHolidayProps> = ({ cancel }) => {
  return (
    <>
      {" "}
      <div className="fixed inset-0 z-20 bg-grey-ab-400 opacity-15   "></div>
      <div className="fixed inset-0 z-30 h-screen flex items-center">
        <div className=" w-1/2 mx-auto rounded-md flex bg-[white]  p-8 gap-8 flex-col overflow-auto custom-scrollbar">
          <h6 className="h6 font-semibold text-center">Update Holiday’s</h6>
          <div className="flex flex-col gap-4">
            <GroupField
              label={"Title*"}
              type={"select"}
              placeholder={"Enter Title"}
              leftIcon={<NotesIcon color="#2c398f" />}
              name={"title"}
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
              options={[]}
            />
            <GroupField
              label={"Date*"}
              type={"date"}
              placeholder={"date"}
              name={"date"}
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
            />

            <GroupField
              label={"Branch Location*"}
              type={"select"}
              placeholder={"Choose Location"}
              name={"branchLocation"}
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
              options={[]}
            />

            <GroupField
              label={"Description"}
              type={"textarea"}
              placeholder={"Write"}
              name={"description"}
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
            />
          </div>
          <div className="flex items-center gap-6 justify-end">
            <div onClick={cancel} className="w-full">
              {" "}
              <PrimaryButton
                label={"Cancel"}
                size={"xl"}
                variant={"outline"}
                style="w-full"
              />
            </div>
            <div className="w-full">
              <PrimaryButton
                label={"Save"}
                size={"xl"}
                variant={""}
                style="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateHoliday;
