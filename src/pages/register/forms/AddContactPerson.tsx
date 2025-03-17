import React, { ChangeEvent, useState } from "react";
import GroupField from "../../../components/groupField/GroupField";
import {
  AccountDetailIcon,
  CategoryIcon,
  EmailIcon,
  LocationIcon,
  PhoneIcon,
} from "../../../components/icons/Icons";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

interface AddContactPersonProps {
  onClose: () => void; // Function to close the popup
}

const AddContactPerson: React.FC<AddContactPersonProps> = ({ onClose }) => {
  const [data, setData] = useState({
    contactName: "",
    department: "",
    email: "",
    mobileNumber: "",
    alternativeMobileNumber: "",
    city: "",
    countryOfOperation: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setData({
      contactName: "",
      department: "",
      email: "",
      mobileNumber: "",
      alternativeMobileNumber: "",
      city: "",
      countryOfOperation: "",
    }); // Reset form
    onClose(); // Close popup
  };

  const handleSave = () => {
    console.log("Saved Data:", data);
    // Reset all fields
    setData({
      contactName: "",
      department: "",
      email: "",
      mobileNumber: "",
      alternativeMobileNumber: "",
      city: "",
      countryOfOperation: "",
    });
    onClose();
  };
  return (
    <>
      <div className="flex flex-col gap-6 bg-grey-aw-50 shadow-lg rounded-sm max-w-[560px] w-full max-h-[550px] overflow-auto custom-scrollbar">
        <div className="border-b border-b-grey-200 p-4 font-semibold text-lg text-grey-ab-800">
          Add Contact Person
        </div>
        {/* documents */}
        <div className="px-6 flex flex-col gap-4 ">
          <GroupField
            label={"Contact Name"}
            type={""}
            placeholder={"Enter Name"}
            name={"contactName"}
            value={data.contactName}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            leftIcon={<AccountDetailIcon color="#2C398F" />}
          />
          <GroupField
            label={"Department"}
            type={"select"}
            placeholder={"Choose Department"}
            name={"department"}
            value={data.department}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />

          <GroupField
            label={"Email"}
            type={""}
            placeholder={"Enter Email"}
            name={"email"}
            value={data.email}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            leftIcon={<EmailIcon color="#2C398F" />}
          />
          <GroupField
            label={"Mobile Number"}
            type={""}
            placeholder={"Enter Mobile Number"}
            name={"mobileNumber"}
            value={data.mobileNumber}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            leftIcon={<PhoneIcon color="#2C398F" />}
          />

          <GroupField
            label={"Alternative Mobile Number"}
            type={""}
            placeholder={"Enter Mobile Number"}
            name={"alternativeMobileNumber"}
            value={data.alternativeMobileNumber}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            leftIcon={<PhoneIcon color="#2C398F" />}
          />
          <div className="flex gap-4 w-full">
            <GroupField
              label={"City"}
              type={""}
              placeholder={"Enter City"}
              name={"city"}
              value={data.city}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              leftIcon={<LocationIcon color="#2C398F" />}
              parentStyle="w-[50%]"
            />
            <GroupField
              label={"Country of Operation"}
              type={"select"}
              placeholder={"Enter Country of .."}
              name={"countryOfOperation"}
              value={data.countryOfOperation}
              onChange={handleChange}
              isMulti
              error={false}
              errorMessage={""}
              leftIcon={<CategoryIcon color="#2C398F" />}
              parentStyle="w-[50%]"
            />
          </div>
        </div>
        {/* button */}
        <div className="px-6 pb-6 flex gap-4">
          <div className="w-full" onClick={handleCancel}>
            <PrimaryButton
              label={"Cancel"}
              size={"l"}
              variant={"link"}
              style="w-full"
            />
          </div>
          <div className="w-full" onClick={handleSave}>
            <PrimaryButton
              label={"Save"}
              size={"l"}
              variant={"primary"}
              style="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddContactPerson;
