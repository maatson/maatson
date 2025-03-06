import React from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import GroupField from "../../../components/groupField/GroupField";

interface AddRequirementsProps {
  cancel: () => void;
}

const AddRequirement: React.FC<AddRequirementsProps> = ({ cancel }) => {
  return (
    <>
      {" "}
      <div className="fixed inset-0 z-20 bg-grey-ab-400 opacity-15   "></div>
      <div className="fixed flex items-center inset-0 z-30 h-screen  ">
        <div className=" w-1/2 mx-auto  rounded-md flex bg-[white]  p-8 gap-8 flex-col h-[90vh] custom-scrollbar  overflow-auto">
          <h6 className="h6 font-semibold text-center">Job Posting Form</h6>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 ">
              <GroupField
                label={"Job Title*"}
                type={"text"}
                placeholder={"Enter Job Title"}
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
                label={"Job Location*"}
                type={"select"}
                placeholder={"Choose Job Title"}
                name={"jobLocation"}
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
                label={"Job Description*"}
                type={"textarea"}
                placeholder={"Write"}
                name={"jobDescription"}
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
                parentStyle="w-full"
              />
            </div>
            <div className="flex items-center gap-4 ">
              <GroupField
                label={"Job Level*"}
                type={"select"}
                placeholder={"Choose Job Level"}
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
                label={"Job Type*"}
                type={"select"}
                placeholder={"Choose Job Type"}
                name={"jobType"}
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
                label={"Qualification"}
                type={"select"}
                placeholder={"Choose Qualification"}
                name={"qualification"}
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
                label={"Gender*"}
                type={"select"}
                placeholder={"Choose Gender"}
                name={"gender"}
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
                label={"Expire Date"}
                type={"date"}
                placeholder={"Enter Date"}
                name={"expireDate"}
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
                label={"Experience*"}
                type={"text"}
                placeholder={"Enter Experience"}
                name={"experience"}
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
            {/* have to handle required skills */}
            <div className="flex flex-col gap-2">
              <p className="">Required Skills</p>
              <div className="flex  flex-col gap-1">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 justify-end">
            <div onClick={cancel}>
              {" "}
              <PrimaryButton label={"Cancel"} size={"xl"} variant={"outline"} />
            </div>
            <PrimaryButton
              label={"Post Requirement"}
              size={"xl"}
              variant={""}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddRequirement;
