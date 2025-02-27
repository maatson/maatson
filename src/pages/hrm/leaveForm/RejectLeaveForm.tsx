import React from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import GroupField from "../../../components/groupField/GroupField";

interface RejectLeaveFormProps {
  cancel: () => void;
}

const RejectLeaveForm: React.FC<RejectLeaveFormProps> = ({ cancel }) => {
  return (
    <>
      {" "}
      <div className="fixed inset-0 z-20 bg-grey-ab-400 opacity-15 "></div>
      <div className=" fixed inset-x-96 inset-y-64  z-40 mx-auto top-10 rounded-md flex bg-[white]  custom-scroll p-8 gap-8 flex-col justify-center  ">
        <h6 className="h6 font-semibold text-center">Leave Rejection Reason</h6>
        <div className="flex flex-col gap-4">
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

export default RejectLeaveForm;
