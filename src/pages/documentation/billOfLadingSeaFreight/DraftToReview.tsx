import React from "react";
import image from "/images/draftToReview.svg";
import GreyButton from "../../../components/buttons/GreyButton";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

const DraftToReview: React.FC<{ onCancel: () => void; onSave: () => void }> = ({
  onCancel,
  onSave,
}) => {
  return (
    <div className="inset-0 fixed z-40 bg-black/20 flex justify-center items-center h-screen">
      <div className="bg-grey-aw-100 max-w-[320px] w-full rounded-sm  max-h-[500px] flex flex-col  gap-4 p-4 relative inset-5">
        <div className="flex items-center justify-center ">
          <img src={image} alt="image" className="object-fill w-[320px]" />
        </div>
        <div className="flex flex-col gap-2 text-center">
          <p className="text-lg font-semibold">Move Draft to Review?</p>
          <p className="text-2xs text-grey-ab-200">
            In this stage, you or your team can make necessary corrections or
            modifications before final submission.
          </p>
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
              label={"Move to Review"}
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

export default DraftToReview;
