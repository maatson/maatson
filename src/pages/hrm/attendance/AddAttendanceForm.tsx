import React from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import GroupField from "../../../components/groupField/GroupField";

interface AddAttendanceFormProps {
  cancel: () => void;
}

const AddAttendanceForm: React.FC<AddAttendanceFormProps> = ({ cancel }) => {
  return (
    <>
      {" "}
      <div className="fixed inset-0 z-20 bg-grey-ab-400 opacity-15   "></div>
      <div className="fixed inset-0 z-30 h-screen flex items-center">
        <div className=" w-1/2 mx-auto rounded-md flex bg-[white]  p-8 gap-8 flex-col overflow-auto custom-scrollbar">
          <h6 className="h6 font-semibold text-center">Attendance Form</h6>
          <div className="flex flex-col gap-4">
            <GroupField
              label={"Employee Name*"}
              type={"select"}
              placeholder={"Choose Employee"}
              name={"employeeName"}
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
              label={"Branch Location*"}
              type={"select"}
              placeholder={"Enter Location"}
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
            />
            <div className="flex items-center gap-4 ">
              <GroupField
                label={"Date*"}
                type={"date"}
                placeholder={"date"}
                name={"jobtitle"}
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
                parentStyle="w-1/2"
              />
              <GroupField
                label={"Status*"}
                type={"select"}
                placeholder={"Choose Job Type"}
                name={"status"}
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
                parentStyle="w-1/2 "
              />
            </div>
            <div className="flex items-center gap-4 ">
              <GroupField
                label={"Check In Time*"}
                type={"time"}
                placeholder={"time"}
                name={"checkInTime*"}
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
                parentStyle="w-1/2"
              />
              <GroupField
                label={"Check Out Time*"}
                type={"time"}
                placeholder={"Time"}
                name={"checkOutTime"}
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
                parentStyle="w-1/2 "
              />
            </div>
          </div>
          <div className="flex items-center gap-6 justify-end">
            <div onClick={cancel} className="w-full">
              {" "}
              <PrimaryButton
                label={"Cancel Entry"}
                size={"xl"}
                variant={"outline"}
                style="w-full"
              />
            </div>
            <div className="w-full">
              <PrimaryButton
                label={"Save Entry"}
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

export default AddAttendanceForm;
