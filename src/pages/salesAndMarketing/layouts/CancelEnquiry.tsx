import React, { useState } from "react";
import RedClickHere from "/images/redClickHere.png";
import ErrorButton from "../../../components/buttons/ErrorButton";
import GroupField from "../../../components/groupField/GroupField";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

const CancelEnquiry: React.FC = () => {
  const [cancelCard, setCancelCard] = useState<boolean>();
  const [reasonCard, setReasonCard] = useState<boolean>();
  const [editCard, setEditCard] = useState<boolean>();

  const handleChange = () => {

  }
  const handleCancel = () => {
    setCancelCard(false);
    setReasonCard(true);
    setEditCard(false);
  };
  const handleSkip = () => {
    setCancelCard(true);
    setReasonCard(false);
    setEditCard(false);
  };
  const handleSave = () => {
    setCancelCard(false);
    setReasonCard(false);
    setEditCard(true);
  };
  const handleEdit = () => {
    setCancelCard(false);
    setReasonCard(true);
    setEditCard(false);

  };
  return (
    <>
      {!reasonCard && !editCard && (
        <div className="flex flex-col gap-4 px-4 py-2 justify-center">
          <div className="flex flex-col gap-2">
            <div>
              <img src={RedClickHere} alt="RedClickHere" />
            </div>
            <p className="text-sm text-grey-ab-300 text-center">
              Click 'Cancel Booking' to confirm the cancellation of this
              Booking.
            </p>
          </div>
          <div className="flex justify-center pb-3" onClick={handleCancel}>
            <ErrorButton
              label={"Cancel Booking"}
              size={"l"}
              variant={"primary"}
            />
          </div>
        </div>
      )}
      {/* <div className="flex flex-col gap-4 px-4 py-2 justify-center">
        <div className="flex flex-col gap-2">
          <div>
            <img src={RedClickHere} alt="RedClickHere" />
          </div>
          <p className="text-sm text-grey-ab-300 text-center">
            Click 'Cancel Booking' to confirm the cancellation of this Booking.
          </p>
        </div>
        <div className="flex justify-center pb-3" onClick={handleCancel}>
          <ErrorButton
            label={"Cancel Booking"}
            size={"l"}
            variant={"primary"}
          />
        </div>
      </div> */}

      {reasonCard && (
        <div className="flex flex-col gap-4 px-4 py-3">
          <div className="flex flex-col gap-3">
            <p className="text-sm text-grey-ab-300 text-center">
              Please provide a reason for cancelling this enquiry.
            </p>
            <GroupField
              label={"Reason for Cancellation"}
              type={"textarea"}
              placeholder={"Write Reason"}
              name={""}
              value={""}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              labelStyle="font-semibold"
            />
          </div>
          <div className="flex justify-end gap-3 items-center">
            <div onClick={handleSkip}>
              <PrimaryButton label={"Skip"} size={"l"} variant={"link"} />
            </div>
            <div onClick={handleSave}>
              <PrimaryButton label={"Save"} size={"l"} variant={"primary"} />
            </div>
          </div>
        </div>
      )}
      {/* <div className="flex flex-col gap-4 px-4 py-3">
        <div className="flex flex-col gap-3">
          <p className="text-sm text-grey-ab-300 text-center">
            Please provide a reason for cancelling this enquiry.
          </p>
          <GroupField
            label={"Reason for Cancellation"}
            type={"textarea"}
            placeholder={"Write Reason"}
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
            labelStyle="font-semibold"
          />
        </div>
        <div className="flex justify-end gap-3 items-center">
          <div onClick={handleSkip}>
            <PrimaryButton label={"Cancel"} size={"l"} variant={"link"} />
          </div>
          <div onClick={handleSave}>
            <PrimaryButton label={"Save"} size={"l"} variant={"primary"} />
          </div>
        </div>
      </div> */}

      {editCard && (
        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-grey-ab--800">
              Reason for Cancellation
            </p>
            <p className="text-sm text-grey-ab-300 px-10">
              I have decided to proceed with a different shipping solution.
            </p>
          </div>
          <div className="flex justify-end gap-3 items-center">
            <div onClick={handleEdit}>
              <PrimaryButton label={"Edit"} size={"l"} variant={"primary"} />
            </div>
          </div>
        </div>
      )}
      {/* <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-grey-ab--800">
            Reason for Cancellation
          </p>
          <p className="text-sm text-grey-ab-300 px-10">
            I have decided to proceed with a different shipping solution.
          </p>
        </div>
        <div className="flex justify-end gap-3 items-center">
          <div onClick={handleEdit}>
            <PrimaryButton label={"Edit"} size={"l"} variant={"primary"} />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CancelEnquiry;
