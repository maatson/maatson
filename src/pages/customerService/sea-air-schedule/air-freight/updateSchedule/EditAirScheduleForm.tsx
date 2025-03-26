import React, { ChangeEvent, useEffect, useState } from "react";
import PrimaryButton from "../../../../../components/buttons/PrimaryButton";
import { Link } from "react-router-dom";
import ProfileSubHeaders from "../../../../salesAndMarketing/layouts/ProfileSubHeaders";
import {
  AddIcon,
  AeroplaneIcon,
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

const EditAirScheduleForm: React.FC = () => {
  const [data, setData] = useState({
    carrierName: "Air India",
    flightNumber: "AI202",
    ICAONumber: "AIC2300",
    IATANumber: "AIC2300",
    aircraftType: "COA",
    portOfLoading: "Chennai",
    portOfDischarge: "Colombo",
    serviceName: "RKFI",
    servingRoutes: [
      { routePort: "Colombo, Sri Lanka", estimateTimeOfArrival: "2025-03-12" },
      { routePort: "Colombo, Sri Lanka", estimateTimeOfArrival: "2025-03-12" },
    ],
    estimateTimeOfDeparture: "2025-03-12",
    actualTimeOfDeparture: "2025-03-12",
    estimateTimeOfArrival: "2025-03-12",
    actualTimeOfArrival: "2025-03-12",
    onboardingCutOff: "2025-03-12",
  });
  const [showServingRoutes, setShowServingRoutes] = useState<boolean>(true);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRouteChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setData((prev) => {
      const updatedRoutes = [...prev.servingRoutes];
      updatedRoutes[index] = { ...updatedRoutes[index], [name]: value };
      return { ...prev, servingRoutes: updatedRoutes };
    });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("data :", data);
  };

  const handleYesOrCancel = () => {
    setShowServingRoutes((prev) => !prev);
    if (showServingRoutes) {
      setData((prevData) => ({
        ...prevData,
        servingRoutes: [{ routePort: "", estimateTimeOfArrival: "" }],
      }));
    }
  };

  const handleAdd = () => {
    setData((prevData) => ({
      ...prevData,
      servingRoutes: [
        ...prevData.servingRoutes,
        { routePort: "", estimateTimeOfArrival: "" },
      ],
    }));
  };

  const handleDelete = (index: number) => {
    setData((prevData) => ({
      ...prevData,
      servingRoutes: prevData.servingRoutes.filter((_, i) => i !== index),
    }));
  };

  // useEffect(() => {
  //   if (showServingRoutes) {
  //     setData((prevData) => ({
  //       ...prevData,
  //       servingRoutes: [{ routePort: "", estimateTimeOfArrival: "" }],
  //     }));
  //   }
  // }, [showServingRoutes]);

  return (
    <>
      <div className="flex flex-col gap-8 px-8 py-4 rounded-xs bg-grey-aw-50 shadow-lg">
        <div className="px-3 py-4 text-lg font-semibold text-grey-ab-900">
          Edit Air Freight Schedule
        </div> 

        <div className="flex flex-col gap-8">
          {/* carrier information */}
          <div className="flex flex-col gap-6">
            <ProfileSubHeaders
              title={"Carrier Information"}
              icon={<AeroplaneIcon />}
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
                  leftIcon={<AeroplaneIcon color="#2C398F" />}
                  parentStyle="w-[40%]"
                />
                <GroupField
                  label={"Flight Number*"}
                  type={""}
                  placeholder={"Enter Flight Number"}
                  name={"flightNumber"}
                  value={data.flightNumber}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<AeroplaneIcon color="#2C398F" />}
                  parentStyle="w-[40%]"
                />
              </div>
              <div className="flex gap-4">
                <GroupField
                  label={"Carrier ICAO Number"}
                  type={""}
                  placeholder={"Enter Carrier ICAO Number"}
                  name={"ICAONumber"}
                  value={data.ICAONumber}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<FreightIcon color="#2C398F" />}
                  parentStyle="w-[40%]"
                />
                <GroupField
                  label={"Carrier IATA Number"}
                  type={""}
                  placeholder={"Enter Carrier IATA Number"}
                  name={"IATANumber"}
                  value={data.IATANumber}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<AeroplaneIcon color="#2C398F" />}
                  parentStyle="w-[40%]"
                />
              </div>
              <GroupField
                label={"Aircraft Type*"}
                type={"select"}
                placeholder={"Choose Aircraft Type"}
                name={"aircraftType"}
                value={data.aircraftType}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                leftIcon={<AeroplaneIcon color="#2C398F" />}
                parentStyle="w-[40%]"
              />
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
              name={"serviceName"}
              value={data.serviceName}
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
              {showServingRoutes && (
                <>
                  {data.servingRoutes.map((item, index) => (
                    <div className="flex gap-4">
                      <GroupField
                        label={"Route Port*"}
                        type={""}
                        placeholder={"Enter Route Port"}
                        name={"routePort"}
                        value={item.routePort}
                        onChange={(e) => handleRouteChange(e, index)}
                        error={false}
                        errorMessage={""}
                        leftIcon={<LocationIcon color="#2C398F" />}
                        parentStyle="w-[30%]"
                      />
                      <GroupField
                        label={"Estimate Time of Arrival"}
                        type={"date"}
                        placeholder={"Enter ETA"}
                        name={"estimateTimeOfArrival"}
                        value={item.estimateTimeOfArrival}
                        onChange={(e) => handleRouteChange(e, index)}
                        error={false}
                        errorMessage={""}
                        parentStyle="w-[30%]"
                      />
                      <div className="flex gap-1 items-end">
                        {data.servingRoutes.length > 1 && (
                          <div
                            className="h-6 w-6 p-1 rounded-xs cursor-pointer bg-error"
                            onClick={() => handleDelete(index)}
                          >
                            <DeleteIcon color="#FDFDFD" size={16} />
                          </div>
                        )}
                        {index === 0 && data.servingRoutes.length > 1 ? (
                          ""
                        ) : (
                          <div
                            className="h-6 w-6 p-1 rounded-xs cursor-pointer bg-grey-ab"
                            onClick={handleAdd}
                          >
                            <AddIcon color="#FDFDFD" size={16} />
                          </div>
                        )}
                        {/* <div
                          className="h-6 w-6 p-1 rounded-xs cursor-pointer bg-grey-ab"
                          onClick={handleAdd}
                        >
                          <AddIcon color="#FDFDFD" size={16} />
                        </div> */}
                      </div>
                    </div>
                  ))}
                </>
              )}
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
                type={"date"}
                placeholder={"Enter ETD"}
                name={"estimateTimeOfDeparture"}
                value={data.estimateTimeOfDeparture}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                parentStyle="w-[40%]"
              />
              <GroupField
                label={"Actual Time of Departure"}
                type={"date"}
                placeholder={"Enter ATD"}
                name={"actualTimeOfDeparture"}
                value={data.actualTimeOfDeparture}
                onChange={handleChange}
                error={false}
                errorMessage={""}
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
                type={"date"}
                placeholder={"Enter ETA"}
                name={"estimateTimeOfArrival"}
                value={data.estimateTimeOfArrival}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                parentStyle="w-[40%]"
              />
              <GroupField
                label={"Actual Time of Arrival"}
                type={"date"}
                placeholder={"Enter ATA"}
                name={"actualTimeOfArrival"}
                value={data.actualTimeOfArrival}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                parentStyle="w-[40%]"
              />
            </div>
          </div>

          {/* cut off */}
          <div className="flex flex-col gap-6">
            <ProfileSubHeaders title={"Cut Off"} icon={<RangeCalenderIcon />} />
            <GroupField
              label={"Onboarding Cut Off"}
              type={"date"}
              placeholder={"Enter Onboarding Cut Off"}
              name={"onboardingCutOff"}
              value={data.onboardingCutOff}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="w-[40%]"
            />
          </div>
        </div>

        {/* buttons */}
        <div className="flex gap-6 items-center justify-end">
          <Link to={"/sea-air-schedule/air-freight"}>
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

export default EditAirScheduleForm;
