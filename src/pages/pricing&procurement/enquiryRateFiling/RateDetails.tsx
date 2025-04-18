import React from "react";
import BlueChip from "../../../components/chips/BlueChip";
import SecondaryChip from "../../../components/chips/SecondaryChip";

const RateDetails: React.FC = () => {
  const isSeaFreight = false;
  return (
    <>
      <div className="bg-grey-aw-50 px-3 py-2 flex flex-wrap items-end justify-between rounded">
        <DetailCard
          label={"Enquiry Number"}
          value={3233848}
          className="flex-col"
        />
        <DetailCard
          label={"Enquired Date"}
          value={3233848}
          className="flex-col"
        />
        <DetailCard
          label={"Transportation Mode"}
          value={
            isSeaFreight ? (
              <BlueChip label={"Sea Freight"} size={"m"} variant={"outline"} />
            ) : (
              <SecondaryChip
                label={"Air Freight"}
                size={"m"}
                variant={"outline"}
              />
            )
          }
          className="flex-col"
        />
        <DetailCard
          label={"Port of Loading"}
          value={"Los Angeles, USA"}
          className="flex-col"
        />
        <DetailCard
          label={"Port of Discharge "}
          value={"Rotterdam, Netherlands"}
          className="flex-col"
        />
        <DetailCard label={"Rates Available"} value={11} className="flex-col" />
      </div>
      <div className="bg-grey-aw-50 "></div>
    </>
  );
};

export default RateDetails;

const DetailCard: React.FC<{
  label: string;
  value: string | number | React.ReactNode;
  className?: string;
  labelStyle?: string;
  valueStyle?: string;
}> = ({ label, value, className, labelStyle, valueStyle }) => {
  return (
    <div className={`flex ${className} gap-2`}>
      <p className={`text-xs font-semibold ${labelStyle}`}>{label}</p>
      <div className={`text-sm ${valueStyle}`}>{value}</div>
    </div>
  );
};
