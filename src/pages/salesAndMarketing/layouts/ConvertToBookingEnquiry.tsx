import React from "react";
import PrimaryClickHere from "/images/primaryClickHere.png";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";

const ConvertToBookingEnquiry: React.FC = () => {
  const navigate = useNavigate();
  const handleConvertToBooking = () => {
    navigate(`/booking/convert-to-booking`);
  }
  return (
    <>
      <div className="flex flex-col gap-4 px-4 py-2 justify-center">
        <div className="flex flex-col gap-2">
          <div>
            <img src={PrimaryClickHere} alt="YellowClickHere" />
          </div>
          <p className="text-sm text-grey-ab-300 text-center">
            Click 'Convert to Booking' to confirm this enquiry as a booking.
          </p>
        </div>
        <div className="flex justify-center pb-3" onClick={handleConvertToBooking}>
          <PrimaryButton
            label={"Convert to Booking"}
            size={"l"}
            variant={"primary"}
          />
        </div>
      </div>
    </>
  );
};

export default ConvertToBookingEnquiry;
