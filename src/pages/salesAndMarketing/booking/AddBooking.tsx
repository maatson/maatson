import React, { useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import GroupField from "../../../components/groupField/GroupField";
import {
  AddIcon,
  AeroplaneIcon,
  CategoryIcon,
  ContainerIcon,
  ContainerSettingsIcon,
  DeleteIcon,
  DepartmentIcon,
  EmailIcon,
  EmployeeGroupIcon,
  FreightIcon,
  LocationIcon,
  MenuIcon,
  NvoccIcon,
  PhoneIcon,
  ProductIcon,
  RangeCalenderIcon,
  RoutingIcon,
  ScalePencilIcon,
  ShipIcon,
  UserIcon,
  WarningIcon,
  WeightIcon,
} from "../../../components/icons/Icons";
import BlackButton from "../../../components/buttons/BlackButton";

interface BookingProps {
  assignedPerson: string;
  companyName: string;
  leadSource: string;
  picName: string;
  picDepartment: string;
  picEmail: string;
  picMobileNumber: string;
  modeOfShipment: string;
  modeOfTransportation: string;
  portOfLoading: string;
  portOfDischarge: string;
  products: string[];
  cargoDetails: { cargoType: string; cargoDimensions: any[] };
  goodsDateInformation: {
    date: Date;
    alternativeDate: Date;
    indicatedRate: string;
    currency: string;
    description: string;
  };
  additionalServices: string[];
  freightDetails: {
    carrierName: string;
    arrivalDateOfPOL: Date;
    departureDateOfPOL: Date;
    bookingValid: Date;
    aircraftType?: string;
    flightNumber?: string;
    voyageNumber?: string;
    vesselName?: string;
  };
}

const AddBooking: React.FC = () => {
  const [data, setData] = useState<BookingProps>({
    assignedPerson: "",
    companyName: "",
    leadSource: "",
    picName: "",
    picDepartment: "",
    picEmail: "",
    picMobileNumber: "",
    modeOfShipment: "export",
    modeOfTransportation: "sea freight",
    portOfLoading: "",
    portOfDischarge: "",
    products: [],
    cargoDetails: { cargoType: "", cargoDimensions: [{}] },
    goodsDateInformation: {
      date: new Date(),
      alternativeDate: new Date(),
      indicatedRate: "",
      currency: "USD",
      description: "",
    },
    additionalServices: [],
    freightDetails: {
      carrierName: "",
      arrivalDateOfPOL: new Date(),
      departureDateOfPOL: new Date(),
      bookingValid: new Date(),
    },
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setData((prev) => {
      if (name === "modeOfTransportation") {
        const updatedCargoDetails = {
          ...prev.cargoDetails,
          cargoType:
            value === "air freight"
              ? "standard cargo"
              : value === "sea freight"
              ? "bulk"
              : "",
        };
        const updatedFreightDetails = {
          carrierName: "",
          arrivalDateOfPOL: new Date(),
          departureDateOfPOL: new Date(),
          bookingValid: new Date(),
        };
        return {
          ...prev,
          [name]: value,
          cargoDetails: updatedCargoDetails,
          freightDetails: updatedFreightDetails,
        };
      }

      return { ...prev, [name]: value };
    });
  };
  const handleChangeCargoType = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { value } = e.target;

    // Adjust cargoDimensions based on selected cargoType
    let initialDimensions: any = [];

    if (value === "bulk") {
      initialDimensions = [
        {
          shipType: "",
          grossWeight: "",
          loadingRate: "",
          dischargeRate: "",
          dischargeRateUnit: "mt/day",
          grossWeightUnit: "kgs",
        },
      ];
    } else if (value === "hazardous") {
      initialDimensions = [
        {
          containerSize: "",
          unNumber: "",
          imcoClass: "",
          grossWeight: "",
          grossWeightUnit: "kgs",
          containerCount: "",
        },
      ];
    } else if (value === "lcl") {
      initialDimensions = [
        {
          quantity: "",
          packageType: "",
          imcoClass: "",
          grossWeight: "",
          grossWeightUnit: "kgs",
          volume: "",
          volumUnit: "m3",
        },
      ];
    } else if (value === "fcl") {
      initialDimensions = [
        {
          containerSize: "",
          grossWeight: "",
          grossWeightUnit: "kgs",
          containerCount: "",
        },
      ];
    } else if (value === "over dimensional") {
      initialDimensions = [
        {
          containerSize: "",
          length: "",
          width: "",
          height: "",
          measurement: "",
          grossWeight: "",
          grossWeightUnit: "kgs",
          containerCount: "",
        },
      ];
    } else if (value === "standard cargo") {
      initialDimensions = [
        {
          length: "",
          width: "",
          height: "",
          measurement: "",
          grossWeight: "",
          grossWeightUnit: "kgs",
          volume: "",
          volumeUnit: "m3",
          quantity: "",
        },
      ];
    } else if (value === "ULD containers") {
      initialDimensions = [
        {
          containerSize: "",
          grossWeight: "",
          grossWeightUnit: "kgs",
          containerCount: "",
        },
      ];
    }

    setData((prev) => ({
      ...prev,
      cargoDetails: {
        ...prev.cargoDetails,
        cargoType: value,
        cargoDimensions: initialDimensions, // Reset dimensions based on cargoType
      },
    }));
  };
  const handleCargoDimensionsChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    index: number
  ) => {
    const { name, value } = e.target;

    setData((prev) => {
      const updatedCargoDimensions = [...prev.cargoDetails.cargoDimensions];
      updatedCargoDimensions[index] = {
        ...updatedCargoDimensions[index],
        [name]: value,
      };

      return {
        ...prev,
        cargoDetails: {
          ...prev.cargoDetails,
          cargoDimensions: updatedCargoDimensions,
        },
      };
    });
  };
  // Add new container to cargoDimensions
  const addContainer = () => {
    const newContainer =
      data.cargoDetails.cargoType === "bulk"
        ? {
            shipType: "",
            grossWeight: "",
            loadingRate: "",
            dischargeRate: "",
            dischargeRateUnit: "mt/day",
            grossWeightUnit: "kgs",
          }
        : data.cargoDetails.cargoType === "hazardous"
        ? {
            containerSize: "",
            unNumber: "",
            imcoClass: "",
            grossWeight: "",
            grossWeightUnit: "kgs",
            containerCount: "",
          }
        : data.cargoDetails.cargoType === "lcl"
        ? {
            quantity: "",
            packageType: "",
            imcoClass: "",
            grossWeight: "",
            grossWeightUnit: "kgs",
            volume: "",
            volumUnit: "m3",
          }
        : data.cargoDetails.cargoType === "fcl"
        ? {
            containerSize: "",
            grossWeight: "",
            grossWeightUnit: "kgs",
            containerCount: "",
          }
        : data.cargoDetails.cargoType === "over dimensional"
        ? {
            containerSize: "",
            length: "",
            width: "",
            height: "",
            measurement: "",
            grossWeight: "",
            grossWeightUnit: "kgs",
            containerCount: "",
          }
        : data.cargoDetails.cargoType === "standard cargo"
        ? {
            length: "",
            width: "",
            height: "",
            measurement: "",
            grossWeight: "",
            grossWeightUnit: "kgs",
            volume: "",
            volumeUnit: "m3",
            quantity: "",
          }
        : data.cargoDetails.cargoType === "ULD containers"
        ? {
            containerSize: "",
            grossWeight: "",
            grossWeightUnit: "kgs",
            containerCount: "",
          }
        : {};

    setData((prev) => ({
      ...prev,
      cargoDetails: {
        ...prev.cargoDetails,
        cargoDimensions: [...prev.cargoDetails.cargoDimensions, newContainer],
      },
    }));
  };
  const removeContainer = (removeiItemIndex: number) => {
    setData((prev) => {
      const updatedDimensions = prev.cargoDetails.cargoDimensions.filter(
        (_item, index) => index !== removeiItemIndex
      );

      return {
        ...prev,
        cargoDetails: {
          ...prev.cargoDetails,
          cargoDimensions: updatedDimensions,
        },
      };
    });
  };

  const handleGoodsReadyDate = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      goodsDateInformation: {
        ...prev.goodsDateInformation,
        [name]: value,
      },
    }));
  };

  const handleFreightDetailsChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      freightDetails: {
        ...prev.freightDetails,
        [name]: value,
      },
    }));
  };

  const handleSubmit = () => {
    console.log(data);
  };
  return (
    <>
      <div className="bg-grey-aw-50 px-8 py-4 rounded flex flex-col gap-8">
        <p className="text-lg font-semibold"> Add Booking</p>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <GroupField
              label={"Sales Person"}
              type={"select"}
              placeholder={"Enter Sales Person"}
              name={"assignedPerson"}
              value={data.assignedPerson}
              onChange={handleChange}
              error={false}
              options={[
                { label: "vick", value: "vk" },
                { label: "ezhil", value: "ek" },
                { label: "suriya", value: "sk" },
              ]}
              errorMessage={""}
              leftIcon={<EmployeeGroupIcon color="#2c398f" />}
              parentStyle="w-2/5"
            />
          </div>
          <div className="flex flex-col gap-6">
            <HeadTitle label={"User Information"} icon={<UserIcon />} />
            <div className="flex gap-6 items-center">
              <GroupField
                label={"Company Name*"}
                type={"text"}
                placeholder={"Enter Company Name"}
                name={"companyName"}
                value={data.companyName}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                leftIcon={<EmployeeGroupIcon color="#2c398f" />}
                parentStyle="w-2/5"
              />
              <GroupField
                label={"Lead Source*"}
                type={"creatable"}
                placeholder={"Choose Lead Source"}
                name={"leadSource"}
                value={data.leadSource}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                parentStyle="w-2/5"
                options={[
                  { label: "faceBook", value: "fb" },
                  { label: "InstaGram", value: "insta" },
                  { label: "call", value: "call" },
                ]}
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {" "}
            <HeadTitle
              label={"Person In-charge User Information (PIC)"}
              icon={<UserIcon />}
            />
            <div className="flex gap-6 items-center flex-wrap">
              <GroupField
                label={"PIC Name*"}
                type={"text"}
                placeholder={"Enter PIC Name"}
                name={"picName"}
                value={data.picName}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                leftIcon={<UserIcon color="#2c398f" />}
                parentStyle="basis-2/5"
              />
              <GroupField
                label={"PIC Department *"}
                type={"text"}
                placeholder={"Enter PIC Department"}
                name={"picDepartment"}
                value={data.picDepartment}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                parentStyle="basis-2/5"
                leftIcon={<DepartmentIcon color="#2c398f" />}
              />
              <GroupField
                label={"PIC Email*"}
                type={"email"}
                placeholder={"Enter Email"}
                name={"picEmail"}
                value={data.picEmail}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                leftIcon={<EmailIcon color="#2c398f" />}
                parentStyle="basis-2/5"
              />

              <GroupField
                label={"PIC Mobile Number*"}
                type={"tel"}
                placeholder={"Enter Mobile Number"}
                name={"picMobileNumber"}
                value={data.picMobileNumber}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                leftIcon={<PhoneIcon color="#2c398f" />}
                parentStyle="basis-2/5"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {" "}
            <HeadTitle label={"Routing"} icon={<RoutingIcon />} />
            <div className="flex gap-6 items-center flex-wrap">
              <GroupField
                label={"Shipment Mode	*"}
                type={"select"}
                placeholder={"Choose Shipment Type"}
                name={"modeOfShipment"}
                value={data.modeOfShipment}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                leftIcon={<FreightIcon color="#2c398f" />}
                options={[
                  { label: "Import", value: "import" },
                  { label: "Export", value: "export" },
                  { label: "Cross Trade", value: "cross trade" },
                ]}
                parentStyle="basis-2/5 max-w-[80%]"
              />
              <GroupField
                label={"Transportation Mode*"}
                type={"select"}
                placeholder={""}
                name={"modeOfTransportation"}
                value={data.modeOfTransportation}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                parentStyle="basis-2/5 max-w-[80%]"
                leftIcon={<ShipIcon color="#2c398f" />}
                options={[
                  { label: "Sea Freight", value: "sea freight" },
                  { label: "Air Freight", value: "air freight" },
                  { label: "Land Freight", value: "land freight" },
                ]}
              />
              <GroupField
                label={"Port Of Loading(Port, Country)*"}
                type={"email"}
                placeholder={"Enter port of Loading"}
                name={"portOfLoading"}
                value={data.portOfLoading}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                leftIcon={<LocationIcon color="#2c398f" />}
                parentStyle="basis-2/5"
              />

              <GroupField
                label={"Port Of Discharge(Port, Country)*"}
                type={"tel"}
                placeholder={"Enter port of discharge"}
                name={"portOfDischarge"}
                value={data.portOfDischarge}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                leftIcon={<LocationIcon color="#2c398f" />}
                parentStyle="basis-2/5"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {" "}
            <HeadTitle label={"Product Details"} icon={<ProductIcon />} />
            <GroupField
              label={"Product Offered*"}
              type={"select"}
              placeholder={"Enter Your Product"}
              name={"products"}
              value={data.products}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              options={[
                { label: "weed", value: "weed" },
                { label: "brandi", value: "brandi" },
                { label: "votka", value: "votka" },
              ]}
              isMulti
              leftIcon={<MenuIcon color="#2c398f" />}
            />
          </div>
          <div className="flex flex-col gap-6">
            {" "}
            <HeadTitle
              label={"Cargo Details"}
              icon={<ContainerSettingsIcon />}
            />
            <GroupField
              label={"Cargo Type*"}
              type={"select"}
              placeholder={"Select Cargo Type"}
              name={"cargoType"}
              value={data.cargoDetails.cargoType || ""}
              onChange={handleChangeCargoType}
              error={false}
              errorMessage={""}
              options={
                data.modeOfTransportation === "sea freight"
                  ? [
                      { label: "Bulk", value: "bulk" },
                      { label: "Hazardous", value: "hazardous" },
                      { label: "LCL", value: "lcl" },
                      { label: "FCL", value: "fcl" },
                      { label: "Over dimentional", value: "over dimentional" },
                    ]
                  : data.modeOfTransportation === "air freight"
                  ? [
                      { label: "Standard Cargo", value: "standard cargo" },
                      { label: "ULD containers", value: "ULD containers" },
                    ]
                  : [{ label: "select", value: "" }]
              }
              leftIcon={<FreightIcon color="#2c398f" />}
              parentStyle="w-1/3"
            />
            {/* bulk */}
            {data.cargoDetails.cargoType === "bulk" &&
              data.cargoDetails.cargoDimensions.map((dimension, index) => (
                <div className="flex items-end flex-wrap gap-6" key={index}>
                  <GroupField
                    label={"Ship Type*"}
                    type={"select"}
                    placeholder={"select type"}
                    name={"shipType"}
                    value={dimension?.shipType || ""}
                    onChange={(e) => handleCargoDimensionsChange(e, index)}
                    error={false}
                    errorMessage={""}
                    leftIcon={<ShipIcon color="#2c398f" />}
                    parentStyle="basis-1/3 max-w-[80%]"
                    options={[
                      { label: "general cargo", value: "general cargo" },
                      { label: "bulk carriers", value: "bulk carriers" },
                      { label: "container ships", value: "container ships" },
                    ]}
                  />

                  <div className="basis-2/5 max-w-[40%] flex flex-col gap-2">
                    <p>Gross Weight *</p>
                    <div className="flex">
                      <GroupField
                        label={""}
                        type={"number"}
                        placeholder={"Enter Volume"}
                        name={"grossWeight"}
                        value={dimension?.grossWeight || ""}
                        onChange={(e) => handleCargoDimensionsChange(e, index)}
                        error={false}
                        errorMessage={""}
                        parentStyle="w-1/2"
                        leftIcon={<WeightIcon color="#2c398f" />}
                        inputStyle="placeholder:text-xs"
                      />{" "}
                      <GroupField
                        label={""}
                        type={"select"}
                        placeholder={"select"}
                        name={"grossWeightUnit"}
                        value={dimension?.grossWeightUnit || "kgs"}
                        onChange={(e) => handleCargoDimensionsChange(e, index)}
                        error={false}
                        errorMessage={""}
                        options={[
                          { value: "kgs", label: "Kgs" },
                          { value: "lbs", label: "Lbs" },
                          { value: "mt", label: "Mt" },
                          { value: "grams", label: "Grams" },
                        ]}
                        parentStyle="w-1/3"
                      />
                    </div>
                  </div>
                  <div className="basis-1/3 flex flex-col gap-2">
                    <p>Loading Rate</p>
                    <div className="flex ">
                      <GroupField
                        label={""}
                        type={"number"}
                        placeholder={"Enter Rate"}
                        name={"loadingRate"}
                        value={dimension?.loadingRate || ""}
                        onChange={(e) => handleCargoDimensionsChange(e, index)}
                        error={false}
                        errorMessage={""}
                        parentStyle="w-2/3"
                        inputStyle="placeholder:text-xs"
                      />{" "}
                      <GroupField
                        label={""}
                        type={"text"}
                        placeholder={""}
                        name={""}
                        isDisabled
                        value={"mt/day"}
                        onChange={(e) => handleCargoDimensionsChange(e, index)}
                        error={false}
                        errorMessage={""}
                        parentStyle="w-1/3"
                      />
                    </div>
                  </div>
                  <div className="basis-1/3 flex flex-col gap-2">
                    <p>Discharging Rate</p>
                    <div className="flex">
                      <GroupField
                        label={""}
                        type={"number"}
                        placeholder={"Enter Rate"}
                        name={"dischargeRate"}
                        value={dimension?.dischargeRate || ""}
                        onChange={(e) => handleCargoDimensionsChange(e, index)}
                        error={false}
                        errorMessage={""}
                        parentStyle="w-2/3"
                        // leftIcon={<WeightIcon color="#2c398f" />}
                      />{" "}
                      <GroupField
                        label={""}
                        type={"text"}
                        placeholder={""}
                        name={""}
                        isDisabled
                        value={"mt/day"}
                        onChange={(e) => handleCargoDimensionsChange(e, index)}
                        error={false}
                        errorMessage={""}
                        parentStyle="w-1/3"
                      />
                    </div>
                  </div>
                  {index != data.cargoDetails.cargoDimensions.length - 1 ? (
                    <button onClick={() => removeContainer(index)}>
                      {" "}
                      <DeleteIcon />
                    </button>
                  ) : (
                    <div className="flex items-center gap-6">
                      {" "}
                      <div onClick={addContainer}>
                        {" "}
                        <BlackButton
                          label={"Add More"}
                          size={"m"}
                          variant={""}
                          leftIcon={<AddIcon color="#fdfdfd" size={16} />}
                        />
                      </div>{" "}
                      {index !== 0 && (
                        <button onClick={() => removeContainer(index)}>
                          {" "}
                          <DeleteIcon />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            {/* Hazardous */}
            {data.cargoDetails.cargoType === "hazardous" &&
              Array.isArray(data.cargoDetails.cargoDimensions) &&
              data.cargoDetails.cargoDimensions.map((dimension, index) => (
                <div className="flex items-end flex-wrap gap-6" key={index}>
                  <GroupField
                    label={"Container Size*"}
                    type={"select"}
                    placeholder={"Choose Container Size"}
                    name={"containerSize"}
                    value={dimension?.containerSize || ""}
                    onChange={(e) => handleCargoDimensionsChange(e, index)}
                    error={false}
                    errorMessage={""}
                    leftIcon={<ContainerIcon color="#2c398f" />}
                    parentStyle="basis-1/3 max-w-[80%]"
                    options={[{ label: "reefers", value: "reefers" }]}
                  />
                  <GroupField
                    label={"UN Number*"}
                    type={"text"}
                    placeholder={"Enter UN Number"}
                    name={"unNumber"}
                    value={dimension?.unNumber || ""}
                    onChange={(e) => handleCargoDimensionsChange(e, index)}
                    error={false}
                    errorMessage={""}
                    leftIcon={<ContainerIcon color="#2c398f" />}
                    parentStyle="basis-1/3"
                  />
                  <GroupField
                    label={"IMCO Class*"}
                    type={"text"}
                    placeholder={"Enter IMCO CLASS"}
                    name={"imcoClass"}
                    value={dimension.imcoClass || ""}
                    onChange={(e) => handleCargoDimensionsChange(e, index)}
                    error={false}
                    errorMessage={""}
                    leftIcon={<ContainerIcon color="#2c398f" />}
                    parentStyle="basis-1/3"
                  />

                  <div className="basis-2/5 max-w-[40%] flex flex-col gap-2">
                    <p>Gross Weight *</p>
                    <div className="flex">
                      <GroupField
                        label={""}
                        type={"number"}
                        placeholder={"Enter Volume"}
                        name={"grossWeight"}
                        value={dimension.grossWeight || ""}
                        onChange={(e) => handleCargoDimensionsChange(e, index)}
                        error={false}
                        errorMessage={""}
                        parentStyle="w-1/2"
                        leftIcon={<WeightIcon color="#2c398f" />}
                        inputStyle="placeholder:text-xs"
                      />{" "}
                      <GroupField
                        label={""}
                        type={"select"}
                        placeholder={"select"}
                        name={"grossWeightUnit"}
                        value={dimension.grossWeightUnit || "kgs"}
                        onChange={(e) => handleCargoDimensionsChange(e, index)}
                        error={false}
                        errorMessage={""}
                        options={[
                          { value: "kgs", label: "Kgs" },
                          { value: "lbs", label: "Lbs" },
                          { value: "mt", label: "Mt" },
                          { value: "grams", label: "Grams" },
                        ]}
                        parentStyle="w-1/3"
                      />
                    </div>
                  </div>
                  <GroupField
                    label={"Container Count*"}
                    type={"number"}
                    placeholder={"eg:1"}
                    name={"containerCount"}
                    value={dimension.containerCount || ""}
                    onChange={(e) => handleCargoDimensionsChange(e, index)}
                    error={false}
                    errorMessage={""}
                    parentStyle="basis-1/3"
                  />
                  {index != data.cargoDetails.cargoDimensions.length - 1 ? (
                    <button onClick={() => removeContainer(index)}>
                      {" "}
                      <DeleteIcon />
                    </button>
                  ) : (
                    <div className="flex items-center gap-6">
                      {" "}
                      <div onClick={addContainer}>
                        <BlackButton
                          label={"Add More"}
                          size={"m"}
                          variant={""}
                          leftIcon={<AddIcon color="#fdfdfd" size={16} />}
                        />
                      </div>{" "}
                      {index !== 0 && (
                        <button onClick={() => removeContainer(index)}>
                          {" "}
                          <DeleteIcon />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            {/* Lcl */}
            {data.cargoDetails.cargoType === "lcl" &&
              data.cargoDetails.cargoDimensions.map((dimension, index) => (
                <div className="flex items-end flex-wrap gap-6" key={index}>
                  <GroupField
                    label={"Quantity*"}
                    type={"number"}
                    placeholder={"Enter No of Packages"}
                    name={"quantity"}
                    value={dimension.quantity || ""}
                    onChange={(e) => handleCargoDimensionsChange(e, index)}
                    error={false}
                    errorMessage={""}
                    leftIcon={<ProductIcon color="#2c398f" />}
                    parentStyle="basis-1/3"
                  />
                  <GroupField
                    label={"Package Type*"}
                    type={"select"}
                    placeholder={"Choose Package Type"}
                    name={"packageType"}
                    value={dimension.packageType || ""}
                    onChange={(e) => handleCargoDimensionsChange(e, index)}
                    error={false}
                    errorMessage={""}
                    leftIcon={<FreightIcon color="#2c398f" />}
                    parentStyle="basis-1/3 max-w-[80%]"
                  />

                  <div className="basis-1/3 max-w-[33.3%] flex flex-col gap-2">
                    <p>Gross Weight *</p>
                    <div className="flex">
                      <GroupField
                        label={""}
                        type={"number"}
                        placeholder={"Enter Volume"}
                        name={"grossWeight"}
                        value={dimension.grossWeight || ""}
                        onChange={(e) => handleCargoDimensionsChange(e, index)}
                        error={false}
                        errorMessage={""}
                        parentStyle="w-2/3"
                        leftIcon={<WeightIcon color="#2c398f" />}
                        inputStyle="placeholder:text-xs"
                      />{" "}
                      <GroupField
                        label={""}
                        type={"select"}
                        placeholder={"select"}
                        name={"grossWeightUnit"}
                        value={dimension.grossWeightUnit}
                        onChange={(e) => handleCargoDimensionsChange(e, index)}
                        error={false}
                        errorMessage={""}
                        options={[
                          { value: "kgs", label: "Kgs" },
                          { value: "lbs", label: "Lbs" },
                          { value: "mt", label: "Mt" },
                          { value: "grams", label: "Grams" },
                        ]}
                        parentStyle="w-1/3"
                      />
                    </div>
                  </div>
                  <div className="basis-1/3 flex flex-col gap-2">
                    <p>Volume*</p>
                    <div className="flex ">
                      <GroupField
                        label={""}
                        type={"number"}
                        placeholder={"Enter Volume"}
                        name={"volume"}
                        value={dimension.volume || ""}
                        onChange={(e) => handleCargoDimensionsChange(e, index)}
                        error={false}
                        errorMessage={""}
                        leftIcon={<WeightIcon color="#2c398f" />}
                        parentStyle="w-2/3"
                      />{" "}
                      <GroupField
                        label={""}
                        type={"text"}
                        placeholder={""}
                        name={""}
                        isDisabled
                        value={"m3"}
                        onChange={(e) => handleCargoDimensionsChange(e, index)}
                        error={false}
                        errorMessage={""}
                        parentStyle="w-1/3"
                      />
                    </div>
                  </div>
                  {index != data.cargoDetails.cargoDimensions.length - 1 ? (
                    <button onClick={() => removeContainer(index)}>
                      {" "}
                      <DeleteIcon />
                    </button>
                  ) : (
                    <div className="flex items-center gap-6">
                      {" "}
                      <div onClick={addContainer}>
                        {" "}
                        <BlackButton
                          label={"Add More"}
                          size={"m"}
                          variant={""}
                          leftIcon={<AddIcon color="#fdfdfd" size={16} />}
                        />
                      </div>{" "}
                      {index !== 0 && (
                        <button onClick={() => removeContainer(index)}>
                          {" "}
                          <DeleteIcon />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            {/* Fcl */}
            {data.cargoDetails.cargoType === "fcl" &&
              data.cargoDetails.cargoDimensions.map((dimension, index) => (
                <div className="flex items-end flex-wrap gap-6" key={index}>
                  <GroupField
                    label={"Container Size*"}
                    type={"select"}
                    placeholder={"Choose Container Size"}
                    name={"containerSize"}
                    value={dimension.containerSize || ""}
                    onChange={(e) => handleCargoDimensionsChange(e, index)}
                    error={false}
                    errorMessage={""}
                    leftIcon={<ContainerIcon color="#2c398f" />}
                    parentStyle="basis-1/3 max-w-[80%]"
                    options={[{ label: "reefers", value: "reefers" }]}
                  />

                  <div className="basis-1/3 max-w-[33.3%] flex flex-col gap-2">
                    <p>Gross Weight *</p>
                    <div className="flex">
                      <GroupField
                        label={""}
                        type={"number"}
                        placeholder={"Enter Volume"}
                        name={"grossWeight"}
                        value={dimension.grossWeight || ""}
                        onChange={(e) => handleCargoDimensionsChange(e, index)}
                        error={false}
                        errorMessage={""}
                        parentStyle="w-2/3"
                        leftIcon={<WeightIcon color="#2c398f" />}
                        inputStyle="placeholder:text-xs"
                      />{" "}
                      <GroupField
                        label={""}
                        type={"select"}
                        placeholder={"select"}
                        name={"grossWeightUnit"}
                        value={dimension.grossWeightUnit || ""}
                        onChange={(e) => handleCargoDimensionsChange(e, index)}
                        error={false}
                        errorMessage={""}
                        options={[
                          { value: "kgs", label: "Kgs" },
                          { value: "lbs", label: "Lbs" },
                          { value: "mt", label: "Mt" },
                          { value: "grams", label: "Grams" },
                        ]}
                        parentStyle="w-1/3"
                      />
                    </div>
                  </div>
                  <GroupField
                    label={"Container Count*"}
                    type={"number"}
                    placeholder={"eg:1"}
                    name={"containerCount"}
                    value={dimension.containerCount || ""}
                    onChange={(e) => handleCargoDimensionsChange(e, index)}
                    error={false}
                    errorMessage={""}
                    parentStyle="basis-1/5"
                  />
                  {index != data.cargoDetails.cargoDimensions.length - 1 ? (
                    <button onClick={() => removeContainer(index)}>
                      {" "}
                      <DeleteIcon />
                    </button>
                  ) : (
                    <div className="flex items-center gap-6">
                      {" "}
                      <div onClick={addContainer}>
                        {" "}
                        <BlackButton
                          label={"Add More"}
                          size={"m"}
                          variant={""}
                          leftIcon={<AddIcon color="#fdfdfd" size={16} />}
                        />
                      </div>{" "}
                      {index !== 0 && (
                        <button onClick={() => removeContainer(index)}>
                          {" "}
                          <DeleteIcon />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            {/* Over dimentional */}
            {data.cargoDetails.cargoType === "over dimentional" &&
              data.cargoDetails.cargoDimensions.map((dimension, index) => (
                <div className="flex items-end flex-wrap gap-6 " key={index}>
                  <GroupField
                    label={"Container Size*"}
                    type={"select"}
                    placeholder={"Choose Container Size"}
                    name={"containerSize"}
                    value={dimension.containerSize || ""}
                    onChange={(e) => handleCargoDimensionsChange(e, index)}
                    error={false}
                    errorMessage={""}
                    leftIcon={<ContainerIcon color="#2c398f" />}
                    parentStyle="basis-1/3 max-w-[80%]"
                  />
                  <div className="basis-4/5 w-[80%] flex  gap-6 items-center">
                    <GroupField
                      label={"Length"}
                      type={"number"}
                      placeholder={"Enter Length"}
                      name={"length"}
                      value={dimension.length || ""}
                      onChange={(e) => handleCargoDimensionsChange(e, index)}
                      error={false}
                      errorMessage={""}
                      parentStyle="basis-1/4"
                    />
                    <GroupField
                      label={"Width"}
                      type={"number"}
                      placeholder={"Enter Width"}
                      name={"width"}
                      value={dimension.width || ""}
                      onChange={(e) => handleCargoDimensionsChange(e, index)}
                      error={false}
                      errorMessage={""}
                      parentStyle="basis-1/4"
                    />
                    <GroupField
                      label={"Height "}
                      type={"number"}
                      placeholder={"Enter Height"}
                      name={"height"}
                      value={dimension.height || ""}
                      onChange={(e) => handleCargoDimensionsChange(e, index)}
                      error={false}
                      errorMessage={""}
                      parentStyle="basis-1/4"
                    />
                    <GroupField
                      label={"Measurement"}
                      type={"select"}
                      placeholder={"Choose"}
                      name={"measurement"}
                      value={dimension.measurement || "m"}
                      onChange={(e) => handleCargoDimensionsChange(e, index)}
                      error={false}
                      errorMessage={""}
                      parentStyle=" max-w-[25%] basis-1/4 min-w-[25%] "
                      options={[{ label: "Meter", value: "m" }]}
                    />
                  </div>

                  <div className="basis-1/3 max-w-[33.3%] flex flex-col gap-2 ">
                    <p>Gross Weight *</p>
                    <div className="flex">
                      <GroupField
                        label={""}
                        type={"number"}
                        placeholder={"Enter Volume"}
                        name={"grossWeight"}
                        value={dimension.grossWeight || ""}
                        onChange={(e) => handleCargoDimensionsChange(e, index)}
                        error={false}
                        errorMessage={""}
                        parentStyle="w-2/3"
                        leftIcon={<WeightIcon color="#2c398f" />}
                        inputStyle="placeholder:text-xs"
                      />{" "}
                      <GroupField
                        label={""}
                        type={"select"}
                        placeholder={"select"}
                        name={"grossWeightUnit"}
                        value={dimension.grossWeightUnit || ""}
                        onChange={(e) => handleCargoDimensionsChange(e, index)}
                        error={false}
                        errorMessage={""}
                        options={[
                          { value: "kgs", label: "Kgs" },
                          { value: "lbs", label: "Lbs" },
                          { value: "mt", label: "Mt" },
                          { value: "grams", label: "Grams" },
                        ]}
                        parentStyle="w-1/3"
                      />
                    </div>
                  </div>
                  <GroupField
                    label={"Container Count*"}
                    type={"number"}
                    placeholder={"eg:1"}
                    name={"containerCount"}
                    value={dimension.containerCount || ""}
                    onChange={(e) => handleCargoDimensionsChange(e, index)}
                    error={false}
                    errorMessage={""}
                    parentStyle="basis-1/5"
                  />
                  {index != data.cargoDetails.cargoDimensions.length - 1 ? (
                    <button onClick={() => removeContainer(index)}>
                      {" "}
                      <DeleteIcon />
                    </button>
                  ) : (
                    <div className="flex items-center gap-6">
                      {" "}
                      <div onClick={addContainer}>
                        {" "}
                        <BlackButton
                          label={"Add More"}
                          size={"m"}
                          variant={""}
                          leftIcon={<AddIcon color="#fdfdfd" size={16} />}
                        />
                      </div>{" "}
                      {index !== 0 && (
                        <button onClick={() => removeContainer(index)}>
                          {" "}
                          <DeleteIcon />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            {/* standard cargo */}
            {data.cargoDetails.cargoType === "standard cargo" &&
              data.cargoDetails.cargoDimensions.map((dimension, index) => (
                <div className="flex items-end flex-wrap gap-6" key={index}>
                  <div className="basis-4/5 w-[80%] flex  gap-6 items-center">
                    <GroupField
                      label={"Length"}
                      type={"number"}
                      placeholder={"Enter Length"}
                      name={"length"}
                      value={dimension.length || ""}
                      onChange={(e) => handleCargoDimensionsChange(e, index)}
                      error={false}
                      errorMessage={""}
                      parentStyle="basis-1/4"
                    />
                    <GroupField
                      label={"Width"}
                      type={"number"}
                      placeholder={"Enter Width"}
                      name={"width"}
                      value={dimension.width || ""}
                      onChange={(e) => handleCargoDimensionsChange(e, index)}
                      error={false}
                      errorMessage={""}
                      parentStyle="basis-1/4"
                    />
                    <GroupField
                      label={"Height "}
                      type={"number"}
                      placeholder={"Enter Height"}
                      name={"height"}
                      value={dimension.height || ""}
                      onChange={(e) => handleCargoDimensionsChange(e, index)}
                      error={false}
                      errorMessage={""}
                      parentStyle="basis-1/4"
                    />
                    <GroupField
                      label={"Measurement"}
                      type={"select"}
                      placeholder={"Choose"}
                      name={"measurement"}
                      value={dimension.measurement || "m"}
                      onChange={(e) => handleCargoDimensionsChange(e, index)}
                      error={false}
                      errorMessage={""}
                      parentStyle=" max-w-[25%] basis-1/4 min-w-[25%] "
                      options={[{ label: "Meter", value: "m" }]}
                    />
                  </div>

                  <div className="basis-1/3 max-w-[33.3%] flex flex-col gap-2">
                    <p>Gross Weight *</p>
                    <div className="flex">
                      <GroupField
                        label={""}
                        type={"number"}
                        placeholder={"Enter Volume"}
                        name={"grossWeight"}
                        value={dimension.grossWeight || ""}
                        onChange={(e) => handleCargoDimensionsChange(e, index)}
                        error={false}
                        errorMessage={""}
                        parentStyle="w-2/3"
                        leftIcon={<WeightIcon color="#2c398f" />}
                        inputStyle="placeholder:text-xs"
                      />{" "}
                      <GroupField
                        label={""}
                        type={"select"}
                        placeholder={"select"}
                        name={"grossWeightUnit"}
                        value={dimension.grossWeightUnit || ""}
                        onChange={(e) => handleCargoDimensionsChange(e, index)}
                        error={false}
                        errorMessage={""}
                        options={[
                          { value: "kgs", label: "Kgs" },
                          { value: "lbs", label: "Lbs" },
                          { value: "mt", label: "Mt" },
                          { value: "grams", label: "Grams" },
                        ]}
                        parentStyle="w-1/3"
                      />
                    </div>
                  </div>
                  <div className="basis-1/3 flex flex-col gap-2">
                    <p>Volume*</p>
                    <div className="flex ">
                      <GroupField
                        label={""}
                        type={"number"}
                        placeholder={"Enter Volume"}
                        name={"volume"}
                        value={dimension.volume || ""}
                        onChange={(e) => handleCargoDimensionsChange(e, index)}
                        error={false}
                        errorMessage={""}
                        leftIcon={<WeightIcon color="#2c398f" />}
                        parentStyle="w-2/3"
                      />{" "}
                      <GroupField
                        label={""}
                        type={"text"}
                        placeholder={""}
                        name={""}
                        isDisabled
                        value={"m3"}
                        onChange={(e) => handleCargoDimensionsChange(e, index)}
                        error={false}
                        errorMessage={""}
                        parentStyle="w-1/3"
                      />
                    </div>
                  </div>
                  <GroupField
                    label={"Quantity*"}
                    type={"number"}
                    placeholder={"Enter No of Packages"}
                    name={"quantity"}
                    value={dimension.quantity || ""}
                    onChange={(e) => handleCargoDimensionsChange(e, index)}
                    error={false}
                    errorMessage={""}
                    leftIcon={<ProductIcon color="#2c398f" />}
                    parentStyle="basis-1/3"
                  />
                  {index != data.cargoDetails.cargoDimensions.length - 1 ? (
                    <button onClick={() => removeContainer(index)}>
                      {" "}
                      <DeleteIcon />
                    </button>
                  ) : (
                    <div className="flex items-center gap-6">
                      {" "}
                      <div onClick={addContainer}>
                        {" "}
                        <BlackButton
                          label={"Add More"}
                          size={"m"}
                          variant={""}
                          leftIcon={<AddIcon color="#fdfdfd" size={16} />}
                        />
                      </div>{" "}
                      {index !== 0 && (
                        <button onClick={() => removeContainer(index)}>
                          {" "}
                          <DeleteIcon />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            {/* ULD containers */}
            {data.cargoDetails.cargoType === "ULD containers" &&
              data.cargoDetails.cargoDimensions.map((dimension, index) => (
                <div className="flex items-end flex-wrap gap-6" key={index}>
                  <GroupField
                    label={"Container Size*"}
                    type={"select"}
                    placeholder={"Choose Container Size"}
                    name={"containerSize"}
                    value={dimension.containerSize || ""}
                    onChange={(e) => handleCargoDimensionsChange(e, index)}
                    error={false}
                    errorMessage={""}
                    leftIcon={<ContainerIcon color="#2c398f" />}
                    parentStyle="basis-1/3 max-w-[80%]"
                    options={[{ label: "reefers", value: "reefers" }]}
                  />

                  <div className="basis-1/3 max-w-[33.3%] flex flex-col gap-2">
                    <p>Gross Weight *</p>
                    <div className="flex">
                      <GroupField
                        label={""}
                        type={"number"}
                        placeholder={"Enter Volume"}
                        name={"grossWeight"}
                        value={dimension.grossWeight || ""}
                        onChange={(e) => handleCargoDimensionsChange(e, index)}
                        error={false}
                        errorMessage={""}
                        parentStyle="w-2/3"
                        leftIcon={<WeightIcon color="#2c398f" />}
                        inputStyle="placeholder:text-xs"
                      />{" "}
                      <GroupField
                        label={""}
                        type={"select"}
                        placeholder={"select"}
                        name={"grossWeightUnit"}
                        value={dimension.grossWeightUnit || ""}
                        onChange={(e) => handleCargoDimensionsChange(e, index)}
                        error={false}
                        errorMessage={""}
                        options={[
                          { value: "kgs", label: "Kgs" },
                          { value: "lbs", label: "Lbs" },
                          { value: "mt", label: "Mt" },
                          { value: "grams", label: "Grams" },
                        ]}
                        parentStyle="w-1/3"
                      />
                    </div>
                  </div>
                  <GroupField
                    label={"Container Count*"}
                    type={"number"}
                    placeholder={"eg:1"}
                    name={"containerCount"}
                    value={dimension.containerCount || ""}
                    onChange={(e) => handleCargoDimensionsChange(e, index)}
                    error={false}
                    errorMessage={""}
                    parentStyle="basis-1/5"
                  />
                  {index != data.cargoDetails.cargoDimensions.length - 1 ? (
                    <button onClick={() => removeContainer(index)}>
                      {" "}
                      <DeleteIcon />
                    </button>
                  ) : (
                    <div className="flex items-center gap-6">
                      {" "}
                      <div onClick={addContainer}>
                        {" "}
                        <BlackButton
                          label={"Add More"}
                          size={"m"}
                          variant={""}
                          leftIcon={<AddIcon color="#fdfdfd" size={16} />}
                        />
                      </div>{" "}
                      {index !== 0 && (
                        <button onClick={() => removeContainer(index)}>
                          {" "}
                          <DeleteIcon />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
          </div>
          <div className="flex flex-col gap-6">
            {" "}
            <HeadTitle
              label={"Goods Ready Date"}
              icon={<RangeCalenderIcon />}
            />
            <div className="flex items-center flex-wrap gap-6">
              <GroupField
                label={"Date*"}
                type={"date"}
                placeholder={"Enter Your Date"}
                name={"date"}
                value={
                  new Date(data.goodsDateInformation.date)
                    .toISOString()
                    .split("T")[0]
                }
                onChange={handleGoodsReadyDate}
                error={false}
                errorMessage={""}
                parentStyle="basis-1/4"
              />
              <GroupField
                label={"Alternative Date*"}
                type={"date"}
                placeholder={"Enter Your Alternative Date"}
                name={"alternativeDate"}
                value={
                  new Date(data.goodsDateInformation.alternativeDate)
                    .toISOString()
                    .split("T")[0]
                }
                onChange={handleGoodsReadyDate}
                error={false}
                errorMessage={""}
                parentStyle="basis-1/4"
              />
              <div className="basis-1/3 max-w-[33.3%] flex flex-col gap-2">
                <p>Indicated Rate</p>
                <div className="flex">
                  <GroupField
                    label={""}
                    type={"select"}
                    placeholder={"select"}
                    name={"currency"}
                    value={data.goodsDateInformation.currency || ""}
                    onChange={handleGoodsReadyDate}
                    error={false}
                    errorMessage={""}
                    options={[
                      { value: "USD", label: "USD" },
                      { value: "INR", label: "INR" },
                    ]}
                    parentStyle="w-1/3"
                  />
                  <GroupField
                    label={""}
                    type={"number"}
                    placeholder={"Enter rate"}
                    name={"indicatedRate"}
                    value={data.goodsDateInformation.indicatedRate}
                    onChange={handleGoodsReadyDate}
                    error={false}
                    errorMessage={""}
                    parentStyle="w-1/2"
                    inputStyle="placeholder:text-xs"
                  />{" "}
                </div>
              </div>
              <GroupField
                label={"Description"}
                type={"textarea"}
                placeholder={"write"}
                name={"description"}
                value={data.goodsDateInformation.description}
                onChange={handleGoodsReadyDate}
                error={false}
                errorMessage={""}
                parentStyle="basis-4/5"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            <HeadTitle label={"addional service"} icon={<ScalePencilIcon />} />
            <GroupField
              label={"Additional Services Categories"}
              type={"select"}
              placeholder={"select categories"}
              name={"additionalServices"}
              value={data.additionalServices}
              onChange={handleChange}
              error={false}
              isMulti
              errorMessage={""}
              options={[
                { label: "car", value: "car" },
                { label: "bike", value: "bike" },
              ]}
              leftIcon={<CategoryIcon color="#2c398f" />}
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <WarningIcon color="#0091FF" />
          <p className="text-blue">
            {" "}
            Note: Additional charges are collected based on additional services
            and locations.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {" "}
          <HeadTitle label={"Freight Details"} icon={<NvoccIcon />} />
          <div className="flex gap-6 items-center flex-wrap">
            <GroupField
              label={"Carrier Name*"}
              type={"select"}
              placeholder={"Enter Carrier Name"}
              name={"carrierName"}
              value={data.freightDetails.carrierName}
              onChange={handleFreightDetailsChange}
              error={false}
              errorMessage={""}
              leftIcon={<ShipIcon color="#2c398f" />}
              parentStyle="basis-2/5"
            />
            {data.modeOfTransportation === "sea freight" ? (
              <>
                <GroupField
                  label={"Vessel Name*"}
                  type={"text"}
                  placeholder={"Enter Vessel Name"}
                  name={"vesselName"}
                  value={data.freightDetails.vesselName || ""}
                  onChange={handleFreightDetailsChange}
                  error={false}
                  errorMessage={""}
                  parentStyle="basis-2/5"
                  leftIcon={<ShipIcon color="#2c398f" />}
                />
                <GroupField
                  label={"Voyage Number*"}
                  type={"text"}
                  placeholder={"Enter Voyage Number"}
                  name={"voyageNumber"}
                  value={data.freightDetails.voyageNumber || ""}
                  onChange={handleFreightDetailsChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<ShipIcon color="#2c398f" />}
                  parentStyle="basis-2/5"
                />
              </>
            ) : data.modeOfTransportation === "air freight" ? (
              <>
                <GroupField
                  label={"Aircraft Type*"}
                  type={"select"}
                  placeholder={"Enter Vessel Name"}
                  name={"aircraftType"}
                  value={data.freightDetails.aircraftType || ""}
                  onChange={handleFreightDetailsChange}
                  error={false}
                  errorMessage={""}
                  parentStyle="basis-2/5"
                  leftIcon={<AeroplaneIcon color="#2c398f" />}
                  options={[
                    { label: "PAX", value: "PAX" },
                    { label: "COA", value: "COA" },
                  ]}
                />
                <GroupField
                  label={"Flight Number*"}
                  type={"text"}
                  placeholder={"Enter Flight Number"}
                  name={"flightNumber"}
                  value={data.freightDetails.flightNumber || ""}
                  onChange={handleFreightDetailsChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<AeroplaneIcon color="#2c398f" />}
                  parentStyle="basis-2/5"
                />
              </>
            ) : null}

            <GroupField
              label={"Booking Valid Till*"}
              type={"date"}
              placeholder={"enter Date"}
              name={"picMobileNumber"}
              value={
                new Date(data.freightDetails.bookingValid)
                  .toISOString()
                  .split("T")[0]
              }
              onChange={handleFreightDetailsChange}
              error={false}
              errorMessage={""}
              parentStyle="basis-2/5"
            />
            <GroupField
              label={"POL Estimated Arrival Date*"}
              type={"date"}
              placeholder={"enter Date"}
              name={"arrivalDateOfPOL"}
              value={
                new Date(data.freightDetails.arrivalDateOfPOL)
                  .toISOString()
                  .split("T")[0]
              }
              onChange={handleFreightDetailsChange}
              error={false}
              errorMessage={""}
              parentStyle="basis-2/5"
            />
            <GroupField
              label={"POL Estimated Departure Date*"}
              type={"date"}
              placeholder={"enter Date"}
              name={"departureDateOfPOL"}
              value={
                new Date(data.freightDetails.departureDateOfPOL)
                  .toISOString()
                  .split("T")[0]
              }
              onChange={handleFreightDetailsChange}
              error={false}
              errorMessage={""}
              parentStyle="basis-2/5"
            />
          </div>
        </div>
        <div className="flex justify-end gap-6">
          <PrimaryButton label={"Cancel"} size={"xl"} variant={"outline"} />
          <div onClick={handleSubmit}>
            {" "}
            <PrimaryButton label={"Save Enquiry"} size={"xl"} variant={""} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBooking;

const HeadTitle: React.FC<{ label: string; icon: React.ReactNode }> = ({
  label,
  icon,
}) => {
  return (
    <>
      <div className="flex gap-4 border-b pb-2  border-grey-ab-100">
        <span>{icon}</span> <p className="font-semibold capitalize">{label}</p>
      </div>
    </>
  );
};
