import React, { useEffect, useState } from "react";
import RedClickHere from "/images/redClickHere.png";
import ErrorButton from "../../../components/buttons/ErrorButton";
import GroupField from "../../../components/groupField/GroupField";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

const CancelEnquiry: React.FC = () => {
  const [cancelCard, setCancelCard] = useState<boolean>(true);
  const [reasonCard, setReasonCard] = useState<boolean>();
  const [editCard, setEditCard] = useState<boolean>();
  const [reason, setReason] = useState<string>("");
  const [isFromEdit, setIsFromEdit] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setReason(e.target.value);
  };

  const handleCancel = () => {
    setCancelCard(false);
    setReasonCard(true);
    setEditCard(false);
    setIsFromEdit(false);
  };
  //   const handleSkip = () => {
  //     setCancelCard(true);
  //     setReasonCard(false);
  //     setEditCard(false);
  //   };
  const handleSkipOrCancel = () => {
    if (isFromEdit) {
      setCancelCard(false);
      setReasonCard(false);
      setEditCard(true);
    } else {
      setCancelCard(true);
      setReasonCard(false);
      setEditCard(false);
      setReason("");
    }
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
    setIsFromEdit(true);
  };

  useEffect(() => {
    if (reason !== "") {
      setEditCard(true);
      setCancelCard(false);
    }
  }, []);

  return (
    <>
      {cancelCard && (
        <div className="flex flex-col gap-4 px-4 py-2 justify-center">
          <div className="flex flex-col gap-2">
            <div>
              <img
                src={RedClickHere}
                alt="RedClickHere"
                className="object-fill w-full"
              />
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
              name={"reason"}
              value={reason}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              labelStyle="font-semibold"
            />
          </div>
          <div className="flex justify-end gap-3 items-center">
            <div onClick={handleSkipOrCancel}>
              <PrimaryButton
                label={isFromEdit ? "Cancel" : "Skip"}
                size={"l"}
                variant={"link"}
              />
            </div>
            <div onClick={handleSave}>
              <PrimaryButton label={"Save"} size={"l"} variant={"primary"} />
            </div>
          </div>
        </div>
      )}

      {editCard && (
        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-grey-ab--800">
              Reason for Cancellation
            </p>
            <p className="text-sm text-grey-ab-300 px-10">{reason}</p>
          </div>
          <div className="flex justify-end gap-3 items-center">
            <div onClick={handleEdit}>
              <PrimaryButton label={"Edit"} size={"l"} variant={"primary"} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CancelEnquiry;
