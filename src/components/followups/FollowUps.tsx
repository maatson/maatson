import React, { useState } from "react";
import { CrossIcon, NotesIcon, ReplyIcon } from "../icons/Icons";
import BlackButton from "../buttons/BlackButton";
import GroupField from "../groupField/GroupField";
import TertiaryButton from "../buttons/TertiaryButton";
import TertiaryChip from "../chips/TertiaryChip";

interface FollowProps {
  onClose: () => void;
}

const FollowUps: React.FC<FollowProps> = ({ onClose }) => {
  const [data, setData] = useState<boolean>(false);
  const [isAddFollowUp, setAddFollowUp] = useState<boolean>(false);
  const handleAddFollowUps = () => {
    setAddFollowUp(true);
  };
  const handleSave = () => {
    setAddFollowUp(false);
    setData(true);
  };
  return (
    <>
      <div className="h-screen  bg-grey-aw-50 shadow-lg max-w-[420px] w-full min-w-[420px] px-3 pt-2 pb-6 flex flex-col gap-2 ms-auto">
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
          {data ? (
            <div className=" h-full flex flex-col justify-between">
              {/* changes will apply after backend */}
              <div className=" flex flex-col gap-1">
                <div className="px-2 py-2 flex justify-between items-center rounded bg-tertiary-50 text-sm">
                  <div className="flex flex-col gap-1 ">
                    <p>Follow Up </p>
                    <p className="flex items-center gap-1 font-semibold">
                      <span>11/12/2024</span> <span>11:00pm</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p>Contact Method</p>
                    <TertiaryChip
                      label={"call"}
                      size={"m"}
                      variant={"outline"}
                    />{" "}
                  </div>
                </div>
                <div className="px-2 py-2 flex flex-col gap-1 rounded bg-grey-100 text-sm">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">Admin </p>
                    <p className="text-2xs text-grey-ab-200">
                      {" "}
                      <span>11/12/2024</span> <span>11:00pm</span>
                    </p>
                  </div>
                  <p className="text-grey-ab-300">
                    i will call you after Monday{" "}
                  </p>
                  <div className="self-end cursor-pointer">
                    <ReplyIcon size={16} />
                  </div>
                </div>
              </div>
              <div className="rounded border border-grey-ab-100 py-4 px-4 gap-4 flex flex-col">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">Note</p>
                  <p className="text-sm">
                    Write follow-up notes to keep track of progress and easily
                    stay on top of important updates.
                  </p>
                </div>
                <GroupField
                  label={""}
                  type={"textarea"}
                  placeholder={"Write"}
                  name={""}
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
                />{" "}
                <div className="self-end">
                  <TertiaryButton label={"Add Note"} size={"m"} variant={""} />
                </div>
              </div>
            </div>
          ) : isAddFollowUp ? (
            <div className="flex flex-col justify-center h-full">
              <div className="px-4 py-3 gap-4 flex flex-col  rounded border border-grey-ab-50 shadow-sm max-w-[360px] mx-auto w-full">
                <div className="py-1 flex flex-col gap-1">
                  <p className="text-sm font-semibold">Schedule Follow Ups</p>
                  <div className="border border-grey-ab-100"></div>
                </div>
                <div className="flex flex-col gap-3">
                  <GroupField
                    label={""}
                    type={"date"}
                    placeholder={""}
                    name={""}
                    value={""}
                    onChange={function (
                      e: React.ChangeEvent<
                        | HTMLInputElement
                        | HTMLSelectElement
                        | HTMLTextAreaElement
                      >
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                    error={false}
                    errorMessage={""}
                  />
                  <GroupField
                    label={""}
                    type={"time"}
                    placeholder={""}
                    name={""}
                    value={""}
                    onChange={function (
                      e: React.ChangeEvent<
                        | HTMLInputElement
                        | HTMLSelectElement
                        | HTMLTextAreaElement
                      >
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                    error={false}
                    errorMessage={""}
                  />
                  <GroupField
                    label={""}
                    type={"select"}
                    placeholder={"choose contact method"}
                    name={""}
                    value={""}
                    onChange={function (
                      e: React.ChangeEvent<
                        | HTMLInputElement
                        | HTMLSelectElement
                        | HTMLTextAreaElement
                      >
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                    error={false}
                    errorMessage={""}
                  />
                </div>
                <div className="flex gap-6 items-center">
                  <div onClick={() => setAddFollowUp(false)} className="w-full">
                    {" "}
                    <TertiaryButton
                      label={"Cancel"}
                      size={"m"}
                      variant={"link"}
                      style="w-full"
                    />
                  </div>
                  <div className="w-full" onClick={handleSave}>
                    {" "}
                    <TertiaryButton
                      label={"Save"}
                      size={"m"}
                      variant={""}
                      style="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
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
          )}
          {/* full view */}

          {/* schedule follow up */}
        </div>
      </div>
    </>
  );
};

export default FollowUps;
