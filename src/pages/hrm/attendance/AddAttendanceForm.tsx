import React, { ChangeEvent, useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import GroupField from "../../../components/groupField/GroupField";

interface AddAttendanceFormProps {
  cancel: () => void;
}

const AddAttendanceForm: React.FC<AddAttendanceFormProps> = ({ cancel }) => {
  const [data, setData] = useState({
    employeeName: "",
    branchLocation: "",
    date: "",
    status: "",
    checkInTime: "",
    checkOutTime: "",
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
      <div className="fixed inset-0 z-20 bg-grey-ab-400 opacity-15"></div>
      <div className="fixed inset-0 z-30 h-screen flex items-center">
        <div className=" w-1/2 mx-auto rounded-md flex bg-[white]  p-8 gap-8 flex-col overflow-auto custom-scrollbar">
          <h6 className="h6 font-semibold text-center">Attendance Form</h6>
          <div className="flex flex-col gap-4">
            <GroupField
              label={"Employee Name*"}
              type={"type"}
              placeholder={"Choose Employee"}
              name={"employeeName"}
              value={data.employeeName}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              options={[]}
            />
            <GroupField
              label={"Branch Location*"}
              type={"select"}
              placeholder={"Enter Location"}
              name={"branchLocation"}
              value={data.branchLocation}
              onChange={handleChange}
              error={false}
              options={[{ value: "chennai", label: "Chennai" }]}
              errorMessage={""}
            />
            <div className="flex items-center gap-4 ">
              <GroupField
                label={"Date*"}
                type={"date"}
                placeholder={"date"}
                name={"date"}
                value={data.date}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                parentStyle="w-1/2"
              />
              <GroupField
                label={"Status*"}
                type={"select"}
                placeholder={"Status"}
                name={"status"}
                value={data.status}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                options={[{ value: "status1", label: "Status 1" }]}
                parentStyle="w-1/2 "
              />
            </div>
            <div className="flex items-center gap-4 ">
              <GroupField
                label={"Check In Time*"}
                type={"time"}
                placeholder={"time"}
                name={"checkInTime"}
                value={data.checkInTime}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                parentStyle="w-1/2"
              />
              <GroupField
                label={"Check Out Time*"}
                type={"time"}
                placeholder={"Time"}
                name={"checkOutTime"}
                value={data.checkOutTime}
                onChange={handleChange}
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
            <div className="w-full" onClick={handleSave}>
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
