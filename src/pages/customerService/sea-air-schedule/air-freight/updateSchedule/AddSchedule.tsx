import React, { ChangeEvent, useState } from "react";
import PrimaryButton from "../../../../../components/buttons/PrimaryButton";
import { Link } from "react-router-dom";
import ProfileSubHeaders from "../../../../salesAndMarketing/layouts/ProfileSubHeaders";
import {
  CalenderIcon,
  FreightIcon,
  InfoIcon,
  LocationIcon,
  RoutingIcon,
  ServiceIcon,
  ShipIcon,
} from "../../../../../components/icons/Icons";
import GroupField from "../../../../../components/groupField/GroupField";
import GreyButton from "../../../../../components/buttons/GreyButton";

const AddSchedule: React.FC = () => {
  const [data, setData] = useState({
    carrierName: "",
    vesselName: "",
    voyageNumber: "",
    SCACNumber: "",
    portOfLoading: "",
    portOfDischarge: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("data :", data);
  };
  return (
    <>
      <div className="flex flex-col gap-8 px-8 py-4 rounded-xs bg-grey-aw-50 shadow-lg">
        <div className="px-3 py-4 text-lg font-semibold text-grey-ab-900">
          Add Sea Freight Schedule
        </div>

        <div className="flex flex-col gap-8">
          {/* carrier information */}
          <div className="flex flex-col gap-6">
            <ProfileSubHeaders
              title={"Carrier Information"}
              icon={<ShipIcon />}
            />
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <GroupField
                  label={"Carrier Name*"}
                  type={""}
                  placeholder={"Enter Carrier Name"}
                  name={"carrierName"}
                  value={data.carrierName}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<ShipIcon color="#2C398F" />}
                  parentStyle="w-[40%]"
                />
                <GroupField
                  label={"Vessel Name*"}
                  type={""}
                  placeholder={"Enter Vessel Name"}
                  name={"vesselName"}
                  value={data.vesselName}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<FreightIcon color="#2C398F" />}
                  parentStyle="w-[40%]"
                />
              </div>
              <div className="flex gap-4">
                <GroupField
                  label={"Voyage Number*"}
                  type={""}
                  placeholder={"Enter Voyage Number"}
                  name={"voyageNumber"}
                  value={data.voyageNumber}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<FreightIcon color="#2C398F" />}
                  parentStyle="w-[40%]"
                />
                <GroupField
                  label={"SCAC Number"}
                  type={""}
                  placeholder={"Enter SCAC Number"}
                  name={"SCACNumber"}
                  value={data.SCACNumber}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  parentStyle="w-[40%]"
                />
              </div>
            </div>
          </div>

          {/* roting */}
          <div className="flex flex-col gap-6">
            <ProfileSubHeaders title={"Routing"} icon={<RoutingIcon />} />
            <div className="flex gap-4">
              <GroupField
                label={"Port Of Loading(Port,Coutry)*"}
                type={""}
                placeholder={"Enter Port of Loading"}
                name={"portOfLoading"}
                value={data.portOfLoading}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                leftIcon={<LocationIcon color="#2C398F" />}
                parentStyle="w-[40%]"
              />
              <GroupField
                label={"Port Of Discharge(Port, Country)*"}
                type={""}
                placeholder={"Enter Port of Discharge"}
                name={"portOfDischarge"}
                value={data.portOfDischarge}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                leftIcon={<LocationIcon color="#2C398F" />}
                parentStyle="w-[40%]"
              />
            </div>
          </div>

          {/* serving routes */}
          <div className="flex flex-col gap-6">
            <ProfileSubHeaders
              title={"Serving Routes"}
              icon={<RoutingIcon />}
            />
            <GroupField
              label={"Service Name"}
              type={""}
              placeholder={"Enter Service Name"}
              name={""}
              value={""}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              leftIcon={<ServiceIcon color="#2C398F" />}
              parentStyle="w-[40%]"
            />
            <div className="flex flex-col gap-4">
              <div className="text-grey-ab-800 font-semibold">
                Serving Routes
              </div>
              <div className="flex gap-2 items-center py-1 px-2 bg-blue-50 rounded-sm w-fit">
                <InfoIcon color="#2C398F" />
                <p className="text-sm">
                  Do you want to cancel the Serving Routes input?
                </p>
                <GreyButton label={"Cancel"} size={"s"} variant={"primary"} />
              </div>
              <div className="flex flex-col gap-4">
                <GroupField
                  label={"Route Port*"}
                  type={""}
                  placeholder={"Enter Route Port"}
                  name={""}
                  value={""}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<LocationIcon color="#2C398F" />}
                  parentStyle="w-[30%]"
                />
                <GroupField
                  label={"Estimate Time of Arrival"}
                  type={""}
                  placeholder={"Enter ETA"}
                  name={""}
                  value={""}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  rightIcon={<CalenderIcon color="#2C398F" />}
                  parentStyle="w-[30%]"
                />
                <div className="flex gap-4">
                  <div></div>
                </div>
              </div>
            </div>
          </div>

          {/* departure */}
          <div></div>

          {/* arrival */}
          <div></div>

          {/* cut off */}
          <div></div>
        </div>

        {/* buttons */}
        <div className="flex gap-6 items-center justify-end">
          <Link to={"/"}>
            <PrimaryButton
              label={"Cancel //add routes"}
              size={"xl"}
              variant={"outline"}
            />
          </Link>
          <div onClick={handleRegister}>
            <PrimaryButton
              label={"Save Schedule"}
              size={"xl"}
              variant={"primary"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSchedule;
