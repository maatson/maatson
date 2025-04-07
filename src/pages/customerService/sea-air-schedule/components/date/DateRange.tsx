import React from "react";
import GroupField from "../../../../../components/groupField/GroupField";
import BlackButton from "../../../../../components/buttons/BlackButton";

const DateRange: React.FC<{ onApply: () => void; onCancel: () => void }> = ({
  onCancel,
}) => {
  return (
    <>
      <div className="fixed inset-1 bg-black/25 h-screen z-[1] flex items-center justify-center">
        <div className="bg-grey-aw-100 max-w-sm w-full flex flex-col gap-3 p-4 rounded">
          <h6 className="text-center h6 font-semibold">Date Range</h6>
          <GroupField
            label={"From"}
            type={"date"}
            placeholder={""}
            name={""}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={"To"}
            type={"date"}
            placeholder={""}
            name={""}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
          />
          <div className="flex gap-2 items-center justify-center w-full">
            <GroupField
              label={"Next 7 days"}
              type={"radio"}
              placeholder={""}
              name={"days"}
              value={""}
              onChange={() => {}}
              error={false}
              errorMessage={""}
              labelStyle="text-xs w-full cursor-pointer"
              id="7days"
              inputStyle="gap-0"
              parentStyle="w-full"
            />
            <GroupField
              label={"Next 14 days"}
              type={"radio"}
              placeholder={""}
              name={"days"}
              value={""}
              onChange={() => {}}
              error={false}
              errorMessage={""}
              labelStyle="text-xs w-full cursor-pointer"
              parentStyle="w-full"
              inputStyle="gap-0"
              id="14days"
            />
          </div>
          <div className="flex gap-4 items-center ">
            <div onClick={onCancel} className="w-full">
              <BlackButton
                label={"Cancel"}
                size={"m"}
                variant={"link"}
                style="w-full"
              />
            </div>
            <div onClick={onCancel} className="w-full">
              <BlackButton
                label={"Apply"}
                size={"m"}
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

export default DateRange;
