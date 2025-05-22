import React, { ChangeEvent } from "react";
import GreyButton from "../../../components/buttons/GreyButton";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import GroupField from "../../../components/groupField/GroupField";

type Data = {
  blType: "airway" | "original";
  numberOfNonNegotiableCopies: number;
  numberOfOriginalCopies: number;
  numberOfAirwayBlCopies: number;
};

const ApprovalRequestModal: React.FC<{
  data: Data;
  onCancel: () => void;
  onSave: () => void;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
}> = ({ onCancel, onSave, handleChange, data }) => {
  return (
    <div className="inset-0 fixed z-40 bg-black/20 flex justify-center items-center h-screen">
      <div className="bg-grey-aw-100 max-w-[500px] w-full rounded-sm  max-h-[500px] flex flex-col  gap-4 p-4 relative inset-5">
        <div className="flex flex-col gap-2 ">
          <p className="text-lg font-semibold text-center">
            BL Submission Details
          </p>
          <p className="text-sm">Choose the type of BL</p>
          <div className="flex items-center gap-4">
            <GroupField
              label={"Airway BL"}
              type={"radio"}
              placeholder={""}
              name={"blType"}
              value={"airway"}
              id="airway"
              checked={data.blType === "airway"}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              //   parentStyle="w-full"
              labelStyle="w-full text-nowrap"
              inputStyle="gap-[12px]"
            />
            <GroupField
              label={"Original BL"}
              type={"radio"}
              placeholder={""}
              id="original"
              name={"blType"}
              value={"original"}
              onChange={handleChange}
              error={false}
              checked={data.blType === "original"}
              errorMessage={""}
              labelStyle="w-full text-nowrap"
              inputStyle="gap-[12px]"
            />
          </div>
          {data.blType === "original" ? (
            <>
              {" "}
              <GroupField
                label={"Number of Original BLs"}
                type={"number"}
                placeholder={"Enter"}
                name={"numberOfOriginalCopies"}
                value={data.numberOfOriginalCopies}
                onChange={handleChange}
                error={false}
                errorMessage={""}
              />
              <GroupField
                label={"Number of Non-Negotiable Copies"}
                type={"number"}
                placeholder={"Enter"}
                name={"numberOfNonNegotiableCopies"}
                value={data.numberOfNonNegotiableCopies}
                onChange={handleChange}
                error={false}
                errorMessage={""}
              />
            </>
          ) : (
            <GroupField
              label={"Number of Airway BLs"}
              type={"number"}
              placeholder={"Enter"}
              name={"numberOfAirwayBlCopies"}
              value={data.numberOfAirwayBlCopies}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />
          )}
        </div>
        <div className="flex items-center gap-4 justify-center">
          <div className="cursor-pointer w-full" onClick={onCancel}>
            <GreyButton
              label={"Cancel"}
              size={"m"}
              variant={""}
              style="w-full"
            />
          </div>
          <div className="cursor-pointer w-full" onClick={onSave}>
            <PrimaryButton
              label={"Send for Approval"}
              size={"m"}
              variant={""}
              style="w-full"
            />
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default ApprovalRequestModal;
