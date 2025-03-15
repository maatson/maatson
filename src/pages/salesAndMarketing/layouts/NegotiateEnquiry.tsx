import React, { useEffect, useRef, useState } from "react";
import BlueClickHere from "/images/blueClickHere.png";
import NeutralBlueButton from "../../../components/buttons/NeutralBlueButton";
import GroupField from "../../../components/groupField/GroupField";
import BlackButton from "../../../components/buttons/BlackButton";
import ErrorChip from "../../../components/chips/ErrorChip";
import TertiaryChip from "../../../components/chips/TertiaryChip";
import PrimaryChip from "../../../components/chips/PrimaryChip";
import FollowUps from "../../../components/followups/FollowUps";
import { useNavigate } from "react-router-dom";

const NegotiateEnquiry: React.FC = () => {
  const navigate = useNavigate();
  const [isStartNegotiation, setIsStartNegotiation] = useState<boolean>(true);
  const [isChat, setIsChat] = useState<boolean>();
  const [isFollowUpOpen, setFollowUp] = useState<boolean>(false);
  const followRef = useRef<HTMLDivElement | null>(null);
  const handleCloseFollowUp = () => {
    setFollowUp(false);
  };

  const handleNegotiation = () => {
    setIsChat(true);
    setIsStartNegotiation(false);
  };

  const handleCancel = () => {
    setIsChat(false);
    setIsStartNegotiation(true);
  };
  const handleConvertToBooking = () => {
    navigate(`/booking/convert-to-booking`);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (followRef.current && !followRef.current.contains(e.target as Node)) {
        setFollowUp(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <>
      {isStartNegotiation && (
        <div className="flex flex-col gap-4 px-4 py-2 justify-center">
          <div className="flex flex-col gap-2">
            <div>
              <img src={BlueClickHere} alt="BlueClickHere" />
            </div>
            <p className="text-sm text-grey-ab-300 text-center">
              Click 'Negotiate' to initiate the negotiation for this enquiry.
            </p>
          </div>
          <div className="flex justify-center pb-3" onClick={handleNegotiation}>
            <NeutralBlueButton
              label={"Start Negotiation"}
              size={"l"}
              variant={"primary"}
            />
          </div>
        </div>
      )}
      {/* <div className="flex flex-col gap-4 px-4 py-2 justify-center">
        <div className="flex flex-col gap-2">
          <div>
            <img src={BlueClickHere} alt="BlueClickHere" />
          </div>
          <p className="text-sm text-grey-ab-300 text-center">
            Click 'Negotiate' to initiate the negotiation for this enquiry.
          </p>
        </div>
        <div className="flex justify-center pb-3" onClick={handleNegotiation}>
          <NeutralBlueButton
            label={"Start Negotiation"}
            size={"l"}
            variant={"primary"}
          />
        </div>
      </div> */}

      {isChat && (
        <div className="flex flex-col gap-4 px-4 py-2">
          {/* negotiation chat */}
          <div className="mx-auto max-w-[406px] w-full min-h-[200px] flex flex-col gap-2 px-3 py-4 rounded-xs bg-grey-50 border border-grey-ab-50 shadow-xs"></div>
          <div className="flex flex-col gap-4 px-3 py-2">
            <div className="flex gap-4">
              <div className="cursor-pointer" onClick={handleCancel}>
                <ErrorChip label={"Cancel"} size={"m"} variant={"fill"} />
              </div>
              <div
                className="cursor-pointer"
                ref={followRef}
                onClick={() => setFollowUp(true)}
              >
                <TertiaryChip label={"Follow Up"} size={"m"} variant={"fill"} />
              </div>
              <div className="cursor-pointer" onClick={handleConvertToBooking}>
                <PrimaryChip
                  label={"Convert to Booking"}
                  size={"m"}
                  variant={"fill"}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <GroupField
                label={""}
                type={""}
                placeholder={"Enter Amount"}
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
                parentStyle="w-full"
              />
              <BlackButton label={"Enter"} size={"xl"} variant={"primary"} />
            </div>
          </div>
        </div>
      )}

      {isFollowUpOpen && (
        <>
          <div className="inset-0 fixed bg-black/50 h-screen cursor-pointer z-10"></div>
          <div className="inset-0 fixed z-20 flex justify-end">
            <div ref={followRef}>
              <FollowUps onClose={handleCloseFollowUp} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NegotiateEnquiry;
