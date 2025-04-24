import React from "react";
import PrimaryButton from "../../../../../components/buttons/PrimaryButton";
import GroupField from "../../../../../components/groupField/GroupField";
import { LocationIcon, ShipIcon } from "../../../../../components/icons/Icons";

const AddVesselDetail: React.FC<{ oncancel: () => void }> = ({ oncancel }) => {
  return (
    <div className="inset-0 flex items-center justify-center  fixed bg-black/60 z-10">
      <div className="flex  bg-grey-aw-50 mx-auto w-[624px] h-[550px] rounded p-6 gap-8 flex-col items-center">
        <h5 className="text-grey-ab-900 font-semibold h5 ">
          Add Vessel information for Transhipment
        </h5>
        <div className="flex items-center gap-3 justify-between flex-wrap overflow-auto p-1">
          <GroupField
            label={"Vessel Name*"}
            type={"text"}
            placeholder={"Enter Vessel Name"}
            name={"vesselName"}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
            parentStyle="basis-full"
            leftIcon={<ShipIcon color="#2c398f" />}
          />
          <GroupField
            label={"Voyage Number*"}
            type={"text"}
            placeholder={"Enter Voyage Number"}
            name={"vesselNumber"}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
            parentStyle="basis-2/5"
            leftIcon={<ShipIcon color="#2c398f" />}
          />
          <GroupField
            label={"ATD(Port of Loading)*"}
            type={"date"}
            placeholder={"Enter ATD"}
            name={"atd"}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
            parentStyle="basis-2/5"
          />
          <GroupField
            label={"Port Loading*"}
            type={"text"}
            placeholder={"Enter POL"}
            name={"pol"}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
            parentStyle="basis-2/5"
            leftIcon={<LocationIcon color="#2c398f" />}
          />
          <GroupField
            label={"Port of Discharge*"}
            type={"text"}
            placeholder={"Enter POD"}
            name={"pod"}
            value={""}
            onChange={() => {}}
            error={false}
            errorMessage={""}
            parentStyle="basis-2/5"
            leftIcon={<LocationIcon color="#2c398f" />}
          />
          <GroupField
            label={"ETA(Arrival)"}
            type={"date"}
            placeholder={"Enter ETA"}
            name={"eta"}
            value={""}
            onChange={() => {}}
            error={false}
            parentStyle="basis-2/5"
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
            parentStyle="basis-2/5"
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

export default AddVesselDetail;
