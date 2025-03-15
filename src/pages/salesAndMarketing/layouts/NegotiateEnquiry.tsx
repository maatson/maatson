import React from "react";
import BlueClickHere from "/images/blueClickHere.png";
import NeutralBlueButton from "../../../components/buttons/NeutralBlueButton";

const NegotiateEnquiry: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-4 px-4 py-2 justify-center">
        <div className="flex flex-col gap-2">
          <div>
            <img src={BlueClickHere} alt="BlueClickHere" />
          </div>
          <p className="text-sm text-grey-ab-300 text-center">
            Click 'Negotiate' to initiate the negotiation for this enquiry.
          </p>
        </div>
        <div className="flex justify-center pb-3" onClick={() => {}}>
          <NeutralBlueButton
            label={"Start Negotiation"}
            size={"l"}
            variant={"primary"}
          />
        </div>
      </div>
    </>
  );
};

export default NegotiateEnquiry;
