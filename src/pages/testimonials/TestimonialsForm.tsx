import React, { ChangeEvent, useState } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import GroupField from "../../components/groupField/GroupField";
import ImageUpload from "../../components/imageUpload/ImageUpload";
import { useSuccessNotify } from "../../utils/toastutil";

interface TestimonialsFormProps {
  onClose: () => void; // Function to close the popup
}

const TestimonialsForm: React.FC<TestimonialsFormProps> = ({ onClose }) => {
  const [data, setData] = useState({
    companyLogo: null as File | null,
    companyName: "",
    rating: "",
    feedback: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleImageChange = (file: File | null) => {
    setData((prevData) => ({
      ...prevData,
      companyLogo: file,
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("data: ", data);
    setData({ companyLogo: null, companyName: "", rating: "", feedback: "" });
    useSuccessNotify({heading: "Testimonial Added Successfully!", message: "The testimonial has been successfully added to the system."})
    onClose();
  };
  const handleCancel = () => {
    setData({ companyLogo: null, companyName: "", rating: "", feedback: "" });
    onClose();
  };
  return (
    <>
      <div className="rounded-xs max-w-[464px] w-full max-h-[550px] p-8 flex flex-col gap-8 bg-grey-aw-50 shadow-lg overflow-auto custom-scrollbar">
        <div className="mx-auto h6 font-semibold text-grey-ab-900">
          Testimonials
        </div>
        <div className="mx-auto">
          <ImageUpload
            label={"Upload Your Company Logo"}
            onImageChange={handleImageChange}
          />
        </div>

        <div className="flex flex-col gap-4">
          <GroupField
            label={"Company Name"}
            type={"text"}
            placeholder={"Enter Company Name"}
            name={"companyName"}
            value={data.companyName}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="max-w-[400px] w-full"
          />
          <GroupField
            label={"Rating"}
            type={"select"}
            placeholder={"Choose Rating"}
            name={"rating"}
            value={data.rating}
            options={[
              { label: "1", value: "1" },
              { label: "2", value: "2" },
              { label: "3", value: "3" },
              { label: "4", value: "4" },
              { label: "5", value: "5" },
            ]}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="max-w-[400px] w-full"
          />
          <GroupField
            label={"Feedback"}
            type={"textarea"}
            placeholder={"Write"}
            name={"feedback"}
            value={data.feedback}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="max-w-[400px] w-full"
          />
        </div>

        <div className="flex gap-6 items-center">
          <div className="w-full" onClick={handleCancel}>
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
              variant={"primary"}
              style="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsForm;
