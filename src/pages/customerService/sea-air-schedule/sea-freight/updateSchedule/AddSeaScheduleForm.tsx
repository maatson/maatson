import React, { ChangeEvent, useState } from "react";
import PrimaryButton from "../../../../../components/buttons/PrimaryButton";
import { Link } from "react-router-dom";
import ProfileSubHeaders from "../../../../salesAndMarketing/layouts/ProfileSubHeaders";
import {
  AddIcon,
  CalenderIcon,
  DeleteIcon,
  FreightIcon,
  InfoIcon,
  LocationIcon,
  RangeCalenderIcon,
  RoutingIcon,
  ServiceIcon,
  ShipIcon,
} from "../../../../../components/icons/Icons";
import GroupField from "../../../../../components/groupField/GroupField";
import GreyButton from "../../../../../components/buttons/GreyButton";

const AddSeaScheduleForm: React.FC = () => {
  const [data, setData] = useState({
    carrierName: "",
    vesselName: "",
    voyageNumber: "",
    SCACNumber: "",
    portOfLoading: "",
    portOfDischarge: "",
    serviceName: "",
    servingRoutes: [{ routePort: "", estimateTimeOfArrival: "" }],
    estimateTimeOfDeparture: "",
    actualTimeOfDeparture: "",
    estimateTimeOfArrival: "",
    actualTimeOfArrival: "",
    vesselCutOff: "",
    vgmCutOff: "",
  });
  const [showServingRoutes, setShowServingRoutes] = useState<boolean>(false);
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

  const handleYesOrCancel = () => {
    setShowServingRoutes((prev) => !prev);
    setData((prevData) => ({
      ...prevData,
      servingRoutes: [
        ...prevData.servingRoutes,
        { routePort: "", estimateTimeOfArrival: "" },
      ],
    }));
  };

  const handleAdd = () => {};

  const handleDelete = () => {};
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
                <div onClick={handleYesOrCancel}>
                  <GreyButton
                    label={showServingRoutes ? "Cancel" : "Yes"}
                    size={"s"}
                    variant={"primary"}
                  />
                </div>
              </div>
              {data.servingRoutes.map(() => (
                <div className="flex gap-4">
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
                  <div className="flex gap-1 items-end">
                    <div
                      className="h-6 w-6 p-1 rounded-xs cursor-pointer bg-error"
                      onClick={handleDelete}
                    >
                      <DeleteIcon color="#FDFDFD" size={16} />
                    </div>
                    <div
                      className="h-6 w-6 p-1 rounded-xs cursor-pointer bg-grey-ab"
                      onClick={handleAdd}
                    >
                      <AddIcon color="#FDFDFD" size={16} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* departure */}
          <div className="flex flex-col gap-6">
            <ProfileSubHeaders
              title={"Departure"}
              icon={<RangeCalenderIcon />}
            />
            <div className="flex gap-4">
              <GroupField
                label={"Estimated Time of Departure"}
                type={""}
                placeholder={"Enter ETD"}
                name={""}
                value={""}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                rightIcon={<CalenderIcon color="#2C398F" />}
                parentStyle="w-[40%]"
              />
              <GroupField
                label={"Actual Time of Departure"}
                type={""}
                placeholder={"Enter ATD"}
                name={""}
                value={""}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                rightIcon={<CalenderIcon color="#2C398F" />}
                parentStyle="w-[40%]"
              />
            </div>
          </div>

          {/* arrival */}
          <div className="flex flex-col gap-6">
            <ProfileSubHeaders title={"Arrival"} icon={<RangeCalenderIcon />} />
            <div className="flex gap-4">
              <GroupField
                label={"Estimated Time of Arrival"}
                type={""}
                placeholder={"Enter ETA"}
                name={""}
                value={""}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                rightIcon={<CalenderIcon color="#2C398F" />}
                parentStyle="w-[40%]"
              />
              <GroupField
                label={"Actual Time of Arrival"}
                type={""}
                placeholder={"Enter ATA"}
                name={""}
                value={""}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                rightIcon={<CalenderIcon color="#2C398F" />}
                parentStyle="w-[40%]"
              />
            </div>
          </div>

          {/* cut off */}
          <div className="flex flex-col gap-6">
            <ProfileSubHeaders title={"Cut Off"} icon={<RangeCalenderIcon />} />
            <div className="flex gap-4">
              <GroupField
                label={"Vessel Cut Off"}
                type={""}
                placeholder={"Enter Vessel Cut Off"}
                name={""}
                value={""}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                rightIcon={<CalenderIcon color="#2C398F" />}
                parentStyle="w-[40%]"
              />
              <GroupField
                label={"Vgm Cut Off"}
                type={""}
                placeholder={"Enter Vessel Cut Off"}
                name={""}
                value={""}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                rightIcon={<CalenderIcon color="#2C398F" />}
                parentStyle="w-[40%]"
              />
            </div>
          </div>
        </div>

        {/* buttons */}
        <div className="flex gap-6 items-center justify-end">
          <Link to={"/sea-air-schedule/sea-freight"}>
            <PrimaryButton label={"Cancel"} size={"xl"} variant={"outline"} />
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

export default AddSeaScheduleForm;
