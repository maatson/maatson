import React, { ChangeEvent, useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import GroupField from "../../../components/groupField/GroupField";
import { CategoryIcon } from "../../../components/icons/Icons";

interface AddRequirementsProps {
  cancel: () => void;
}

const AddRequirement: React.FC<AddRequirementsProps> = ({ cancel }) => {
  const [data, setData] = useState({
    jobTitle: "",
    jobLocation: "",
    jobDescription: "",
    jobLevel: "",
    jobType: "",
    qualification: "",
    gender: "",
    expireDate: "",
    experience: "",
    requiredSkills: [],
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("data - ", data);
  };
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
                value={data.jobTitle}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                parentStyle="w-1/2"
              />
              <GroupField
                label={"Job Location*"}
                type={"select"}
                placeholder={"Choose Job Title"}
                name={"jobLocation"}
                value={data.jobLocation}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                options={[{ value: "chennai", label: "Chennai" }]}
                parentStyle="w-1/2 "
              />
            </div>
            <div className="flex items-center gap-4 ">
              <GroupField
                label={"Job Description*"}
                type={"textarea"}
                placeholder={"Write"}
                name={"jobDescription"}
                value={data.jobDescription}
                onChange={handleChange}
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
                value={data.jobLevel}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                parentStyle="w-1/2"
              />
              <GroupField
                label={"Job Type*"}
                type={"select"}
                placeholder={"Choose Job Type"}
                name={"jobType"}
                value={data.jobType}
                onChange={handleChange}
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
                value={data.qualification}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                parentStyle="w-1/2"
              />
              <GroupField
                label={"Gender*"}
                type={"select"}
                placeholder={"Choose Gender"}
                name={"gender"}
                value={data.gender}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                options={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                  { value: "others", label: "Others" },
                ]}
                parentStyle="w-1/2 "
              />
            </div>
            <div className="flex items-center gap-4 ">
              <GroupField
                label={"Expire Date"}
                type={"date"}
                placeholder={"Enter Date"}
                name={"expireDate"}
                value={data.expireDate}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                parentStyle="w-1/2"
              />
              <GroupField
                label={"Experience*"}
                type={"text"}
                placeholder={"Enter Experience"}
                name={"experience"}
                value={data.experience}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                options={[]}
                parentStyle="w-1/2 "
              />
            </div>
            {/* have to handle required skills */}
            <GroupField
              label={"Required Skills"}
              type={"creatable"}
              placeholder={""}
              name={"requiredSkills"}
              value={data.requiredSkills}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              leftIcon={<CategoryIcon color="#2C398F" />}
              options={[
                { value: "logistics", label: "Logistics" },
                { value: "sales", label: "Sales" },
              ]}
            />
          </div>
          <div className="flex items-center gap-6 justify-end">
            <div onClick={cancel}>
              <PrimaryButton label={"Cancel"} size={"xl"} variant={"outline"} />
            </div>
            <div onClick={handleSave}>
              <PrimaryButton
                label={"Post Requirement"}
                size={"xl"}
                variant={""}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddRequirement;
