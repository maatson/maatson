import React, { ChangeEvent, useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import GroupField from "../../../components/groupField/GroupField";
import { NotesIcon } from "../../../components/icons/Icons";

interface AddHolidayProps {
  cancel: () => void;
}

const AddHoliday: React.FC<AddHolidayProps> = ({ cancel }) => {
    const [data, setData] = useState({
      title: "",
      date: "",
      branchLocation: "",
      description: "",
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
      <div className="fixed inset-0 z-30 h-screen flex items-center">
        <div className=" w-1/2 mx-auto rounded-md flex bg-[white]  p-8 gap-8 flex-col overflow-auto custom-scrollbar">
          <h6 className="h6 font-semibold text-center">Add Holiday’s</h6>
          <div className="flex flex-col gap-4">
            <GroupField
              label={"Title*"}
              type={"type"}
              placeholder={"Enter Title"}
              leftIcon={<NotesIcon color="#2c398f" />}
              name={"title"}
              value={data.title}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />
            <GroupField
              label={"Date*"}
              type={"date"}
              placeholder={"date"}
              name={"date"}
              value={data.date}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />

            <GroupField
              label={"Branch Location*"}
              type={"select"}
              placeholder={"Choose Location"}
              name={"branchLocation"}
              value={data.branchLocation}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              options={[{value:"chennai", label:"Chennai"}]}
            />

            <GroupField
              label={"Description"}
              type={"textarea"}
              placeholder={"Write"}
              name={"description"}
              value={data.description}
              onChange={handleChange}
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
            <div className="w-full" onClick={handleSave}>
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

export default AddHoliday;
