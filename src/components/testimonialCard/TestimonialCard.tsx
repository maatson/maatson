import React, { useState } from "react";
import { DeleteIcon, EditIcon, StarFillIcon } from "../icons/Icons";
import BlueSwitch from "../switches/BlueSwitch";
import FrameLogo from "/images/frameLogo.svg";
import { useErrorNotify, useSuccessNotify } from "../../utils/toastutil";

interface TestimonialCardProps {
  onDelete: () => void;
  onEdit: () => void;
  id: string | number;
  companyName: string;
  rating: string | number;
  feedback: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  onDelete,
  onEdit,
  id,
  companyName,
  rating,
  feedback,
}) => {
  const handleDelete = () => {
    onDelete();
  };
  const handleEdit = () => {
    onEdit();
  };

  const [isActiveSwitch, setIsActiveSwitch] = useState<boolean>(true);
  
  const handleSwitchChange = () => {
    setIsActiveSwitch(!isActiveSwitch);
    if (isActiveSwitch) {
      useSuccessNotify({
        heading: "Testimonial Activated Successfully!",
        message: "Testimonials is now active and visible on the website",
      });
    }
    if (!isActiveSwitch) {
      useErrorNotify({
        heading: "Testimonial Disabled!",
        message:
          "Testimonials is now inactive and will not be displayed on the website.",
      });
    }
    console.log("id: ", id, isActiveSwitch);
    // alert("Your testimonial card id is "+id);
  };

  return (
    <>
      <div
        className="max-w-[320px] w-full rounded-sm bg-grey-aw-50 shadow-lg mx-auto"
        key={id}
      >
        <div className="flex justify-between py-2 px-3 items-center rounded-t-sm">
          <BlueSwitch active={!isActiveSwitch} onChange={handleSwitchChange} />
          <div className="flex gap-2">
            <div
              className="rounded-xs p-1 bg-error cursor-pointer"
              onClick={handleDelete}
            >
              <DeleteIcon size={16} color="#FDFDFD" />
            </div>
            <div
              className="rounded-xs p-1 bg-grey-ab cursor-pointer"
              onClick={handleEdit}
            >
              <EditIcon size={16} color="#FDFDFD" />
            </div>
          </div>
        </div>

        <div className="rounded-b-sm p-3 flex flex-col gap-2">
          <div className="flex flex-col gap-2 mx-auto">
            {/* logo */}
            <div className="">
              <img src={FrameLogo} alt="framelogo" />
            </div>
            {/* star */}
            <div className="flex gap-2 justify-center">
              <div className="flex gap-1">
                {[...Array(Number(rating))].map((_, index) => (
                  <StarFillIcon key={index} size={16} color="#EEAA1F" />
                ))}
              </div>
              <p className="text-sm font-semibold text-grey-ab-400">
                {rating}/5
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-sm text-center text-grey-ab-800 font-semibold">
              {companyName}
            </div>
            <div className="text-xs text-center text-grey-ab-300">
              "{feedback}"
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
