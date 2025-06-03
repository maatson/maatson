import React, { useCallback, useEffect, useMemo, useState } from "react";
import BlackButton from "../../../components/buttons/BlackButton";
import {
  AddIcon,
  ContainerIcon,
  ContainerSettingsIcon,
  DeleteIcon,
  DepartmentIcon,
  EmailIcon,
  EmployeeGroupIcon,
  FreightIcon,
  LocationIcon,
  MenuIcon,
  PhoneIcon,
  ProductIcon,
  RangeCalenderIcon,
  RoutingIcon,
  ScalePencilIcon,
  ShipIcon,
  UserIcon,
  WeightIcon,
} from "../../../components/icons/Icons";
import GroupField from "../../../components/groupField/GroupField";

import EditableTable, {
  ColumnConfig,
} from "../../../components/table/EditableTable";
import ErrorButton from "../../../components/buttons/ErrorButton";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";

interface EnquiryDataProps {
  modeOfShipment: string;
  modeOfTransportation: string;
  portOfLoading: string;
  portOfDischarge: string;
  products: string[];
  cargoDetails: { cargoType: string; cargoDimensions: any[] };
}
type RateDetails = {
  size: string;
  currencyType: string;
  rate: number;
  profit: number;
  amount: number;
  priceValidity: string;
};
type LocalCharge = {
  chargeType: string;
  category: string;
  currencyType: string;
  carrierTariff: string | number;
  profit: number;
  amount: number;
};
interface CarrierInfoProps {
  carrierName: string;
  personName: string;
  email: string;
  mobileNumber: string;
  department: string;
  rateDetails: RateDetails[];
  transitRoute: string[];
  localChargesTariff: LocalCharge[];
}

interface CreateRateFilingProps {
  enquiryData: EnquiryDataProps;
  carrierInfoData: any;
}

const CreateRateFiling: React.FC = () => {
  const [enquiryData, setEnquiryData] = useState<EnquiryDataProps>({
    modeOfShipment: "export",
    modeOfTransportation: "sea freight",
    portOfLoading: "",
    portOfDischarge: "",
    products: [],
    cargoDetails: { cargoType: "", cargoDimensions: [{}] },
  });
  const [carrierInfoData, setCarrierInfoData] = useState<CarrierInfoProps>({
    carrierName: "",
    personName: "",
    email: "",
    mobileNumber: "",
    department: "",
    rateDetails: [
      {
        size: "",
        currencyType: "",
        rate: 0,
        profit: 0,
        priceValidity: "",
        amount: 0,
      },
    ],
    transitRoute: [""],
    localChargesTariff: [
      {
        chargeType: "",
        category: "",
        currencyType: "",
        carrierTariff: "",
        profit: 0,
        amount: 0,
      },
    ],
  });
  const [data, setData] = useState<CreateRateFilingProps>({
    enquiryData: enquiryData,
    carrierInfoData: carrierInfoData,
  });
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setEnquiryData((prev) => {
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
          agreedRate: "",
          currency: "USD",
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
          agreedRate: "",
          currency: "USD",
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
          agreedRate: "",
          currency: "USD",
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

    setEnquiryData((prev) => ({
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

    setEnquiryData((prev) => {
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
      enquiryData.cargoDetails.cargoType === "bulk"
        ? {
            shipType: "",
            grossWeight: "",
            loadingRate: "",
            dischargeRate: "",
            dischargeRateUnit: "mt/day",
            grossWeightUnit: "kgs",
          }
        : enquiryData.cargoDetails.cargoType === "hazardous"
        ? {
            containerSize: "",
            unNumber: "",
            imcoClass: "",
            grossWeight: "",
            grossWeightUnit: "kgs",
            containerCount: "",
            agreedRate: "",
            currency: "USD",
          }
        : enquiryData.cargoDetails.cargoType === "lcl"
        ? {
            quantity: "",
            packageType: "",
            imcoClass: "",
            grossWeight: "",
            grossWeightUnit: "kgs",
            volume: "",
            volumUnit: "m3",
          }
        : enquiryData.cargoDetails.cargoType === "fcl"
        ? {
            containerSize: "",
            grossWeight: "",
            grossWeightUnit: "kgs",
            containerCount: "",
            agreedRate: "",
            currency: "USD",
          }
        : enquiryData.cargoDetails.cargoType === "over dimensional"
        ? {
            containerSize: "",
            length: "",
            width: "",
            height: "",
            measurement: "",
            grossWeight: "",
            grossWeightUnit: "kgs",
            containerCount: "",
            agreedRate: "",
            currency: "USD",
          }
        : enquiryData.cargoDetails.cargoType === "standard cargo"
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
        : enquiryData.cargoDetails.cargoType === "ULD containers"
        ? {
            containerSize: "",
            grossWeight: "",
            grossWeightUnit: "kgs",
            containerCount: "",
          }
        : {};

    setEnquiryData((prev) => ({
      ...prev,
      cargoDetails: {
        ...prev.cargoDetails,
        cargoDimensions: [...prev.cargoDetails.cargoDimensions, newContainer],
      },
    }));
  };
  const removeContainer = (removeiItemIndex: number) => {
    setEnquiryData((prev) => {
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

  const handleCarrierInfoChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setCarrierInfoData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(carrierInfoData);
  };

  const handleRateDetailRowChange = useCallback(
    (row: RateDetails): RateDetails => {
      const rate = Number(row.rate);
      const profit = Number(row.profit);

      if (!isNaN(rate) && !isNaN(profit)) {
        const amount = rate + profit;
        return { ...row, amount };
      }
      return row;
    },
    []
  );
  const handleLocalTariffRowChange = useCallback(
    (row: LocalCharge): LocalCharge => {
      const rate = Number(row.carrierTariff);
      const profit = Number(row.profit);

      if (!isNaN(rate) && !isNaN(profit)) {
        const amount = rate + profit;
        return { ...row, amount };
      }
      return row;
    },
    []
  );

  const handleTransitChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    index: number
  ) => {
    console.log(e.target.name, e.target.value, index);
    const { value } = e.target;
    const updatedTransit = [...carrierInfoData.transitRoute];
    updatedTransit[index] = value;

    setCarrierInfoData((prev) => ({ ...prev, transitRoute: updatedTransit }));
  };

  const addTransitRoute = () => {
    setCarrierInfoData((prev) => ({
      ...prev,
      transitRoute: [...prev.transitRoute, ""],
    }));
  };
  const deleteTransitRoute = (index: number) => {
    const transitRoute = [...carrierInfoData.transitRoute];
    const updatedTransitRoute = transitRoute.filter((_, ind) => index !== ind);
    setCarrierInfoData((prev) => ({
      ...prev,
      transitRoute: updatedTransitRoute,
    }));
  };

  const onRateEditableTableChange = useCallback(
    (updatedRates: RateDetails[]) => {
      setCarrierInfoData((prev) => ({
        ...prev,
        rateDetails: updatedRates,
      }));
    },
    []
  );
  const onLocalTariffEditableTableChange = useCallback(
    (updatedRates: LocalCharge[]) => {
      setCarrierInfoData((prev) => ({
        ...prev,
        localChargesTariff: updatedRates,
      }));
    },
    []
  );

  const handleSubmit = () => {
    console.log(enquiryData);
    console.log(carrierInfoData);
    console.log(data);
  };

  useEffect(() => {
    setCarrierInfoData((prev) => {
      const updatedRateDetails = enquiryData.cargoDetails.cargoDimensions.map(
        (dim) => {
          if (
            enquiryData.cargoDetails.cargoType === "lcl" ||
            enquiryData.cargoDetails.cargoType === "standard cargo" ||
            enquiryData.cargoDetails.cargoType === "ULD containers"
          ) {
            return {
              size: "per cbm",
              currencyType: "",
              rate: 0,
              profit: 0,
              priceValidity: "",
              amount: 0,
            };
          } else if (enquiryData.cargoDetails.cargoType === "bulk") {
            return {
              size: "per ton",
              currencyType: "",
              rate: 0,
              profit: 0,
              priceValidity: "",
              amount: 0,
            };
          } else {
            return {
              size: dim.containerSize,
              currencyType: "",
              rate: 0,
              profit: 0,
              priceValidity: "",
              amount: 0,
            };
          }
        }
      );

      return { ...prev, rateDetails: updatedRateDetails };
    });
  }, [enquiryData.cargoDetails]);

  const rateDetailColumns = useMemo<ColumnConfig<RateDetails>[]>(
    () => [
      {
        key: "size",
        label: "Size /Unit",
        type: "select",
        options:
          enquiryData.cargoDetails.cargoType === "bulk"
            ? ["per ton"]
            : enquiryData.cargoDetails.cargoType === "lcl" ||
              enquiryData.cargoDetails.cargoType === "standard cargo" ||
              enquiryData.cargoDetails.cargoType === "ULD containers"
            ? ["per cbm"]
            : enquiryData.cargoDetails.cargoDimensions.map((dim) => {
                if (dim.containerSize) return dim.containerSize;
                else {
                  return [""];
                }
              }),
        editable: true,
      },
      {
        key: "currencyType",
        label: "Currency Type",
        type: "select",
        options: ["INR", "USD", "AED", "URO"],
        editable: true,
      },
      { key: "rate", label: "Rate", type: "number", editable: true },
      {
        key: "profit",
        label: "Profit",
        type: "number",
        editable: true,
      },
      {
        key: "amount",
        label: "Amount",
        type: "number",
        editable: false,
      },
      {
        key: "priceValidity",
        label: "Price Validity",
        type: "date",
        editable: true,
      },
    ],
    [enquiryData.cargoDetails]
  );
  const localTariffColumns = useMemo<ColumnConfig<LocalCharge>[]>(
    () => [
      {
        key: "chargeType",
        label: "Charge Type",
        type: "text",
        editable: true,
      },
      {
        key: "category",
        label: "POL/POD",
        type: "select",
        options: ["POL", "POD"],
        editable: true,
      },
      {
        key: "currencyType",
        label: "Currency Type",
        type: "select",
        options: ["INR", "USD", "AED", "URO"],
        editable: true,
      },
      {
        key: "carrierTariff",
        label: "Carrier Tariff",
        type: "number",
        editable: true,
      },
      {
        key: "profit",
        label: "Profit",
        type: "number",
        editable: true,
      },
      {
        key: "amount",
        label: "Amount",
        type: "number",
        editable: false,
      },
    ],
    [enquiryData.cargoDetails]
  );

  const addLocalChargeTariff = () => {
    const addData = {
      chargeType: "",
      category: "",
      currencyType: "",
      carrierTariff: 0,
      profit: 0,
      amount: 0,
    };
    const updatedData = [...carrierInfoData.localChargesTariff];
    updatedData.push(addData);
    setCarrierInfoData((prev) => ({
      ...prev,
      localChargesTariff: updatedData,
    }));
  };
  return (
    <div className="bg-grey-aw-50 px-8 py-4 rounded flex flex-col gap-8">
      <p className="text-lg font-semibold"> Create Rate Filing</p>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          {" "}
          <HeadTitle label={"Routing"} icon={<RoutingIcon />} />
          <div className="flex gap-6 items-center flex-wrap">
            <GroupField
              label={"Shipment Mode	*"}
              type={"select"}
              placeholder={"Choose Shipment Type"}
              name={"modeOfShipment"}
              value={enquiryData.modeOfShipment}
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
              value={enquiryData.modeOfTransportation}
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
              value={enquiryData.portOfLoading}
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
              value={enquiryData.portOfDischarge}
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
            value={enquiryData.products}
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
          <HeadTitle label={"Cargo Details"} icon={<ContainerSettingsIcon />} />
          <GroupField
            label={"Cargo Type*"}
            type={"select"}
            placeholder={"Select Cargo Type"}
            name={"cargoType"}
            value={enquiryData.cargoDetails.cargoType || ""}
            onChange={handleChangeCargoType}
            error={false}
            errorMessage={""}
            options={
              enquiryData.modeOfTransportation === "sea freight"
                ? [
                    { label: "Bulk", value: "bulk" },
                    { label: "Hazardous", value: "hazardous" },
                    { label: "LCL", value: "lcl" },
                    { label: "FCL", value: "fcl" },
                    { label: "Over dimensional", value: "over dimensional" },
                  ]
                : enquiryData.modeOfTransportation === "air freight"
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
          {enquiryData.cargoDetails.cargoType === "bulk" &&
            enquiryData.cargoDetails.cargoDimensions.map((dimension, index) => (
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
                {index !=
                enquiryData.cargoDetails.cargoDimensions.length - 1 ? (
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
          {enquiryData.cargoDetails.cargoType === "hazardous" &&
            Array.isArray(enquiryData.cargoDetails.cargoDimensions) &&
            enquiryData.cargoDetails.cargoDimensions.map((dimension, index) => (
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
                <div className="basis-1/3 max-w-[33.3%] flex flex-col gap-2">
                  <p>Agreed Rate</p>
                  <div className="flex">
                    <GroupField
                      label={""}
                      type={"select"}
                      placeholder={"select"}
                      name={"currency"}
                      value={dimension.currency || ""}
                      onChange={(e) => handleCargoDimensionsChange(e, index)}
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
                      name={"agreedRate"}
                      value={dimension.agreedRate}
                      onChange={(e) => handleCargoDimensionsChange(e, index)}
                      error={false}
                      errorMessage={""}
                      parentStyle="w-1/2"
                      inputStyle="placeholder:text-xs"
                    />{" "}
                  </div>
                </div>
                {index !=
                enquiryData.cargoDetails.cargoDimensions.length - 1 ? (
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
          {enquiryData.cargoDetails.cargoType === "lcl" &&
            enquiryData.cargoDetails.cargoDimensions.map((dimension, index) => (
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
                  options={[
                    { label: "box", value: "box" },
                    { label: "cryons", value: "cryons" },
                  ]}
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
                {index !=
                enquiryData.cargoDetails.cargoDimensions.length - 1 ? (
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
          {enquiryData.cargoDetails.cargoType === "fcl" &&
            enquiryData.cargoDetails.cargoDimensions.map((dimension, index) => (
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
                <div className="basis-1/3 max-w-[33.3%] flex flex-col gap-2">
                  <p>Agreed Rate</p>
                  <div className="flex">
                    <GroupField
                      label={""}
                      type={"select"}
                      placeholder={"select"}
                      name={"currency"}
                      value={dimension.currency || ""}
                      onChange={(e) => handleCargoDimensionsChange(e, index)}
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
                      name={"agreedRate"}
                      value={dimension.agreedRate}
                      onChange={(e) => handleCargoDimensionsChange(e, index)}
                      error={false}
                      errorMessage={""}
                      parentStyle="w-1/2"
                      inputStyle="placeholder:text-xs"
                    />{" "}
                  </div>
                </div>
                {index !=
                enquiryData.cargoDetails.cargoDimensions.length - 1 ? (
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
          {enquiryData.cargoDetails.cargoType === "over dimensional" &&
            enquiryData.cargoDetails.cargoDimensions.map((dimension, index) => (
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
                <div className="basis-1/3 max-w-[33.3%] flex flex-col gap-2">
                  <p>Agreed Rate</p>
                  <div className="flex">
                    <GroupField
                      label={""}
                      type={"select"}
                      placeholder={"select"}
                      name={"currency"}
                      value={dimension.currency || ""}
                      onChange={(e) => handleCargoDimensionsChange(e, index)}
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
                      name={"agreedRate"}
                      value={dimension.agreedRate}
                      onChange={(e) => handleCargoDimensionsChange(e, index)}
                      error={false}
                      errorMessage={""}
                      parentStyle="w-1/2"
                      inputStyle="placeholder:text-xs"
                    />{" "}
                  </div>
                </div>
                {index !=
                enquiryData.cargoDetails.cargoDimensions.length - 1 ? (
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
          {enquiryData.cargoDetails.cargoType === "standard cargo" &&
            enquiryData.cargoDetails.cargoDimensions.map((dimension, index) => (
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
                {index !=
                enquiryData.cargoDetails.cargoDimensions.length - 1 ? (
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
          {enquiryData.cargoDetails.cargoType === "ULD containers" &&
            enquiryData.cargoDetails.cargoDimensions.map((dimension, index) => (
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
                {index !=
                enquiryData.cargoDetails.cargoDimensions.length - 1 ? (
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
        <div className="flex flex-col gap-3 ">
          <HeadTitle label={"Carrier Information"} icon={<UserIcon />} />
          <GroupField
            label={"Carrier Name*"}
            type={"text"}
            placeholder={"Enter Your Carrier Name"}
            name={"carrierName"}
            value={carrierInfoData.carrierName}
            onChange={handleCarrierInfoChange}
            error={false}
            errorMessage={""}
            isMulti
            leftIcon={<EmployeeGroupIcon color="#2c398f" />}
            parentStyle="w-3/4"
          />
          <div className="flex gap-6 items-center flex-wrap ">
            <GroupField
              label={"Carrier Person Name*"}
              type={"text"}
              placeholder={"Enter Carrier Person Name"}
              name={"personName"}
              value={carrierInfoData.personName}
              onChange={handleCarrierInfoChange}
              error={false}
              errorMessage={""}
              leftIcon={<UserIcon color="#2c398f" />}
              parentStyle="basis-2/5"
            />
            <GroupField
              label={"Department *"}
              type={"text"}
              placeholder={"Enter Department"}
              name={"department"}
              value={carrierInfoData.department}
              onChange={handleCarrierInfoChange}
              error={false}
              errorMessage={""}
              parentStyle="basis-2/5"
              leftIcon={<DepartmentIcon color="#2c398f" />}
            />
            <GroupField
              label={"Email*"}
              type={"email"}
              placeholder={"Enter Email"}
              name={"email"}
              value={carrierInfoData.email}
              onChange={handleCarrierInfoChange}
              error={false}
              errorMessage={""}
              leftIcon={<EmailIcon color="#2c398f" />}
              parentStyle="basis-2/5"
            />

            <GroupField
              label={"Mobile Number*"}
              type={"tel"}
              placeholder={"Enter Mobile Number"}
              name={"mobileNumber"}
              value={carrierInfoData.mobileNumber}
              onChange={handleCarrierInfoChange}
              error={false}
              errorMessage={""}
              leftIcon={<PhoneIcon color="#2c398f" />}
              parentStyle="basis-2/5"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <HeadTitle
            label={"Rate / Rate Validity"}
            icon={<RangeCalenderIcon />}
          />
          <EditableTable
            columns={rateDetailColumns}
            data={carrierInfoData.rateDetails}
            onChange={onRateEditableTableChange}
            isDisableDelete={true}
            onRowChange={handleRateDetailRowChange}
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <HeadTitle label={"Transit Route"} icon={<RoutingIcon />} />
          {carrierInfoData.transitRoute.length > 0 &&
            carrierInfoData.transitRoute.map((value, index) => (
              <div className="flex justify-start gap-4 items-end" key={index}>
                <GroupField
                  label={`Transit Leg ${index + 1}`}
                  type={"text"}
                  placeholder={"Enter Transit Leg"}
                  name={"transitLeg"}
                  value={value}
                  onChange={(e) => handleTransitChange(e, index)}
                  error={false}
                  errorMessage={""}
                  leftIcon={<LocationIcon color="#2c398f" />}
                />
                {carrierInfoData.transitRoute.length !== 1 && (
                  <div onClick={() => deleteTransitRoute(index)}>
                    <ErrorButton
                      label={""}
                      size={"s"}
                      variant={""}
                      style="px-2 py-2"
                      leftIcon={<DeleteIcon color="#ffffff" size={20} />}
                    />
                  </div>
                )}
                {carrierInfoData.transitRoute.length - 1 === index && (
                  <div onClick={addTransitRoute}>
                    <BlackButton
                      label={""}
                      size={"s"}
                      variant={""}
                      style="px-2 py-2"
                      leftIcon={<AddIcon color="#ffffff" size={20} />}
                    />
                  </div>
                )}
              </div>
            ))}
        </div>

        <div className="flex flex-col gap-3 ">
          <HeadTitle
            label={"Local Charges Tariff"}
            icon={<ScalePencilIcon />}
          />
          <EditableTable
            columns={localTariffColumns}
            data={carrierInfoData.localChargesTariff}
            onChange={onLocalTariffEditableTableChange}
            isDisableDelete={false}
            onRowChange={handleLocalTariffRowChange}
          />
          <div onClick={addLocalChargeTariff}>
            <BlackButton
              label={"Add Line"}
              size={"s"}
              variant={""}
              leftIcon={<AddIcon color="#ffffff" size={16} />}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-6 items-center justify-end">
        <div onClick={() => navigate(-1)}>
          <PrimaryButton label={"Cancel"} size={"xl"} variant={"outline"} />
        </div>
        <div onClick={handleSubmit}>
          <PrimaryButton label={"Create Pricing"} size={"xl"} variant={""} />
        </div>
      </div>
    </div>
  );
};

export default CreateRateFiling;

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
