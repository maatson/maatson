import React, { useState } from "react";
import { CrossIcon, NotesIcon } from "../icons/Icons";
import BlackButton from "../buttons/BlackButton";

interface FollowProps {
  onClose: () => void;
}

const FollowUps: React.FC<FollowProps> = ({ onClose }) => {
  const [data, setData] = useState();
  const handleAddFollowUps = () => {};
  return (
    <>
      <div className="h-screen  bg-grey-aw-50 shadow-lg max-w-[420px] w-full px-3 pt-2 pb-6 flex flex-col gap-2 ms-auto">
        <div className="py-1 border-b border-b-grey-200">
          <div className="flex justify-between p-2 items-center">
            <p className="font-semibold text-grey-ab-800">Enquiry Follow Ups</p>
            <div
              className="p-[6px] bg-tertiary-50 rounded-xs cursor-pointer"
              onClick={onClose}
            >
              <CrossIcon size={20} color="#122C38" />
            </div>
          </div>

          <div className="flex justify-between p-2 items-center ">
            <div className="flex gap-4 items-center">
              <NotesIcon color="#2B2A2A" />
              <p className="text-grey-ab-400 font-semibold">Follow Ups</p>
            </div>
            <div onClick={handleAddFollowUps}>
              <BlackButton
                label={"Add Follow Ups"}
                size={"s"}
                variant={"outline"}
              />
            </div>
          </div>
        </div>
        {/* body */}
        <div className="overflow-auto custom-scrollbar h-full">
          {/* chat section */}
          <div className="h-full flex flex-col gap-2 justify-center">
            <p className="text-sm text-center text-grey-ab-300">
              "Ensure to include follow-ups for lead updates to keep track of
              progress and maintain effective communication."
            </p>
            <div
              className="mx-auto flex justify-center"
              onClick={handleAddFollowUps}
            >
              <BlackButton
                label={"Add Follow Ups"}
                size={"l"}
                variant={"primary"}
              />
            </div>
          </div>
          {/* full view */}

          {/* schedule follow up */}
        </div>
      </div>
    </>
  );
};

export default FollowUps;
