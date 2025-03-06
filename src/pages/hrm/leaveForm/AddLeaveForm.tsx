import React from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import GroupField from "../../../components/groupField/GroupField";

interface AddLeaveFormProps {
  cancel: () => void;
}
const AddLeaveForm: React.FC<AddLeaveFormProps> = ({ cancel }) => {
  return (
    <>
      {" "}
      <div className="fixed inset-0 z-20 bg-grey-ab-400 opacity-15 "></div>
      <div className="fixed flex items-center inset-0 z-30 h-screen  ">
        {" "}
        <div className=" w-1/2 mx-auto top-10 rounded-md flex bg-[white] h-[90vh]   p-8 gap-8 flex-col overflow-auto custom-scrollbar">
          <h6 className="h6 font-semibold text-center">Leave Form</h6>
          <div className="flex flex-col gap-4">
            <GroupField
              label={"Employee Name*"}
              type={"text"}
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
            />
            <GroupField
              label={"Leave Type*"}
              type={"select"}
              placeholder={"Choose Leave"}
              name={"leaveType"}
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
            <div className="flex items-center gap-4 ">
              <GroupField
                label={"From Date*"}
                type={"date"}
                placeholder={"date"}
                name={"fromDate"}
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
                label={"Till Date**"}
                type={"date"}
                placeholder={"date"}
                name={"tillDtae"}
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
            <GroupField
              label={"How Many Days*"}
              type={"number"}
              placeholder={"Enter Days"}
              name={"days"}
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
              label={"Reason*"}
              type={"textarea"}
              placeholder={"Write"}
              name={"reason"}
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
          <div className="flex items-center gap-6 justify-center w-full">
            <div onClick={cancel} className="w-full">
              <PrimaryButton
                label={"Cancel"}
                size={"xl"}
                variant={"outline"}
                style="w-full"
              />
            </div>
            <div className="w-full">
              {" "}
              <PrimaryButton
                label={"Post Leave"}
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

export default AddLeaveForm;
