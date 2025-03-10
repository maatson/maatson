import React, { ChangeEvent, useState } from "react";
import GroupField from "../../../components/groupField/GroupField";
import { DocumentIcon } from "../../../components/icons/Icons";
import FileUpload from "../../../components/fileUpload/FileUpload";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

interface AddKYCProps {
  onClose: () => void; // Function to close the popup
}

const AddKYC: React.FC<AddKYCProps> = ({ onClose }) => {
  const [data, setData] = useState({
    documentName: "",
    fileName: "",
    file: null as File | null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement |HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file upload change
  const handleFileChange = (file: File | null) => {
    setData((prevData) => ({
      ...prevData,
      fileName: file ? file.name : "", // Clear fileName when file is removed
      file: file,
    }));
  };

  const handleCancel = () => {
    setData({ documentName: "", fileName: "", file: null }); // Reset form
    onClose(); // Close popup
  };

  const handleSave = () => {
    console.log("Saved Data:", data);

    // Reset all fields
    setData({
      documentName: "",
      fileName: "",
      file: null,
    });
    onClose();
  };
  return (
    <>
      <div className="flex flex-col gap-6 bg-grey-aw-50 shadow-lg rounded-sm max-w-[448px]">
        <div className="border-b border-b-grey-200 p-4 rounded-t-xs font-semibold h6 text-gry-ab-800">
          Verification Document
        </div>
        {/* documents */}
        <div className="px-6 flex flex-col gap-4">
          <GroupField
            label={"Add KYC Document*"}
            type={""}
            placeholder={"Enter Name"}
            name={"documentName"}
            value={data.documentName}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            leftIcon={<DocumentIcon color="#2C398F" />}
          />
          <FileUpload
            onFileChange={handleFileChange}
            label={"Document*"}
            fileName={data.fileName}
          />
        </div>
        {/* button */}
        <div className="px-6 pb-6 flex gap-4">
          <div className="w-full" onClick={handleCancel}>
            <PrimaryButton
              label={"Cancel"}
              size={"l"}
              variant={"outline"}
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

export default AddKYC;
