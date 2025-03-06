import React from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import GroupField from "../../../components/groupField/GroupField";

interface ApplyLeaveFormProps {
  onClose: () => void; // Function to close the popup
}

const ApplyLeaveForm: React.FC<ApplyLeaveFormProps> = ({ onClose }) => {
  const handleCancel = () => {
    // setData({ documentName: "", fileName: "", file: null }); // Reset form
    onClose(); // Close popup
  };
  return (
    <>
        <div className=" max-w-[464px] w-full max-h-[550px] rounded-xs flex bg-grey-aw-50 p-8 gap-8 flex-col shadow-lg overflow-auto custom-scrollbar">
          <h6 className="h5 font-semibold text-center text-grey-ab-900">Leave Form</h6>
          <div className="flex flex-col gap-4">
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
            <div className="flex items-center justify-between gap-10">
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
                label={"Till Date*"}
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
            <div onClick={handleCancel} className="w-full">
              <PrimaryButton
                label={"Cancel"}
                size={"xl"}
                variant={"outline"}
                style="w-full"
              />
            </div>
            <div className="w-full">
              <PrimaryButton
                label={"Submit"}
                size={"xl"}
                variant={""}
                style="w-full"
              />
            </div>
          </div>
        </div>
    </>
  );
};

export default ApplyLeaveForm;
