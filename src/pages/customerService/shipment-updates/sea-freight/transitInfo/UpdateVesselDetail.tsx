import React from "react";
import PrimaryButton from "../../../../../components/buttons/PrimaryButton";
import GroupField from "../../../../../components/groupField/GroupField";
import ViewCard from "../../../sea-air-schedule/components/layouts/viewCard";

interface VesselProp {
  vesselName: string;
  vesselNumber: string;
  pol: string;
  pod: string;
  atd: string;
  eta?: string;
  ata?: string;
}

const UpdateVesselDetail: React.FC<{
  data: VesselProp;
  oncancel: () => void;
}> = ({ oncancel, data }) => {
  return (
    <div className="inset-0 flex items-center justify-center  fixed bg-black/60 z-10">
      <div className="flex  bg-grey-aw-50 mx-auto w-[448px] h-[512px] rounded p-6 gap-8 flex-col items-center">
        <h5 className="text-grey-ab-900 font-semibold h5 ">
          Update Transhipment Details{" "}
        </h5>
        <div className="flex flex-col gap-4 w-full p-1 overflow-auto">
          <div className="gap-3 px-3 py-2 flex flex-col items-center w-full bg-grey-100 rounded-sm">
            <p className="text-lg font-semibold text-grey-ab-700">
              {data.vesselName}
            </p>
            <div className="flex items-center gap-2 justify-between w-full">
              <ViewCard
                label={"Voyage Number"}
                value={data.vesselNumber}
                style="flex-col text-grey-ab-300 "
                valueStyle="font-semibold text-grey-ab-700"
              />
              <ViewCard
                label={"ATD(Port of Loading)"}
                value={data.ata}
                style="flex-col text-grey-ab-300"
                valueStyle="font-semibold text-grey-ab-700"
              />
            </div>
            <div className="flex items-center gap-2 justify-between w-full">
              {" "}
              <ViewCard
                label={"Port of Loading"}
                value={data.pol}
                style="flex-col text-grey-ab-300"
                valueStyle="font-semibold text-grey-ab-700"
              />{" "}
              <ViewCard
                label={"Port of Discharge"}
                value={data.pod}
                style="flex-col text-grey-ab-300"
                valueStyle="font-semibold text-grey-ab-700"
              />
            </div>
          </div>
          <GroupField
            label={"ETA(Arrival)"}
            type={"date"}
            placeholder={"Enter ETA"}
            name={"eta"}
            value={""}
            onChange={() => {}}
            error={false}
            parentStyle="basis-full"
            errorMessage={""}
          />
          <GroupField
            label={"ATA(Arrival)"}
            type={"date"}
            placeholder={"Enter ATA"}
            name={"ata"}
            value={""}
            onChange={() => {}}
            error={false}
            parentStyle="basis-full"
            errorMessage={""}
          />
        </div>
        <div className="flex items-center justify-between gap-6 w-full">
          <div className="w-full" onClick={oncancel}>
            <PrimaryButton
              label={"Cancel"}
              size={"xl"}
              variant={"outline"}
              style="w-full"
            />
          </div>
          <div className="w-full" onClick={oncancel}>
            {" "}
            <PrimaryButton
              label={"Save"}
              size={"xl"}
              variant={""}
              style="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateVesselDetail;
