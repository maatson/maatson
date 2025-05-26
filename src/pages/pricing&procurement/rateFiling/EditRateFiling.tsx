import React, { useCallback, useEffect, useMemo, useState } from "react";
import BlackButton from "../../../components/buttons/BlackButton";
import "../../salesAndMarketing/booking/style.css";
import {
  AddIcon,
  ContainerIcon,
  ContainerSettingsIcon,
  DeleteIcon,
  DepartmentIcon,
  EditIcon,
  EmailIcon,
  EmployeeGroupIcon,
  FreightIcon,
  InfoIcon,
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
import { useNavigate, useParams } from "react-router-dom";
import ViewCard from "../../customerService/sea-air-schedule/components/layouts/ViewCard";
import GreyButton from "../../../components/buttons/GreyButton";

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

const EditRateFiling: React.FC = () => {
  const [enquiryData, setEnquiryData] = useState<EnquiryDataProps>({
    modeOfShipment: "export",
    modeOfTransportation: "sea freight",
    portOfLoading: "Shanghai, CN",
    portOfDischarge: "Chennai, IN",
    products: [
      "8528 – Television receivers, monitors, and projectors.",
      "8529 – Bikes receivers, monitors, and projectors.",
    ],
    cargoDetails: {
      cargoType: "hcl",
      cargoDimensions: [
        {
          containerSize: "reefers",
          grossWeight: "2000",
          grossWeightUnit: "kgs",
          containerCount: "3",
          agreedRate: "1000",
          currency: "USD",
        },
      ],
    },
  });
  const [carrierInfoData, setCarrierInfoData] = useState<CarrierInfoProps>({
    carrierName: "Maresk Line",
    personName: "Khonshu",
    email: "khonsu@gmail.com",
    mobileNumber: "9862468911",
    department: "sales",
    rateDetails: [
      {
        size: "reefers",
        currencyType: "USD",
        rate: 1000,
        profit: 10,
        priceValidity: "12-5-2025",
        amount: 1100,
      },
    ],
    transitRoute: ["columbo"],
    localChargesTariff: [
      {
        chargeType: "bill",
        category: "POL",
        currencyType: "USD",
        carrierTariff: 1000,
        profit: 10,
        amount: 1100,
      },
    ],
  });
  const [data, setData] = useState<CreateRateFilingProps>({
    enquiryData: enquiryData,
    carrierInfoData: carrierInfoData,
  });

  const [isEditEnquiry, setEditEnquiry] = useState<Boolean>(false);

  const { enquiryId } = useParams();
  console.log(enquiryId, "enqId for get data");
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

  useEffect(() => {
    const middleLocation = document.querySelector(
      ".middle-location"
    ) as HTMLElement | null;
    const endLocation = document.querySelector(
      ".end-location"
    ) as HTMLElement | null;

    const handleAnimationEnd = () => {
      if (middleLocation) {
        middleLocation.style.backgroundColor = "#2c398f"; // Set final color
      }
      if (endLocation) {
        endLocation.style.backgroundColor = "#2c398f"; // Set final color
      }
    };

    if (middleLocation) {
      middleLocation.addEventListener("animationend", handleAnimationEnd);
    }

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      if (middleLocation) {
        middleLocation.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, []);

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
    <div className="bg-grey-aw-50 px-6 py-4 rounded flex flex-col gap-8">
      <p className="text-lg font-semibold"> Edit Rate Filing</p>
      <div className="flex flex-col gap-6">
        {isEditEnquiry ? (
          <div className="flex flex-col gap-6 bg-grey-aw-100 p-4 rounded-sm">
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
              <HeadTitle
                label={"Cargo Details"}
                icon={<ContainerSettingsIcon />}
              />
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
                        {
                          label: "Over dimensional",
                          value: "over dimensional",
                        },
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
                enquiryData.cargoDetails.cargoDimensions.map(
                  (dimension, index) => (
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
                          {
                            label: "container ships",
                            value: "container ships",
                          },
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                  )
                )}
              {/* Hazardous */}
              {enquiryData.cargoDetails.cargoType === "hazardous" &&
                Array.isArray(enquiryData.cargoDetails.cargoDimensions) &&
                enquiryData.cargoDetails.cargoDimensions.map(
                  (dimension, index) => (
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                  )
                )}
              {/* Lcl */}
              {enquiryData.cargoDetails.cargoType === "lcl" &&
                enquiryData.cargoDetails.cargoDimensions.map(
                  (dimension, index) => (
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                  )
                )}
              {/* Fcl */}
              {enquiryData.cargoDetails.cargoType === "fcl" &&
                enquiryData.cargoDetails.cargoDimensions.map(
                  (dimension, index) => (
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                  )
                )}
              {/* Over dimentional */}
              {enquiryData.cargoDetails.cargoType === "over dimensional" &&
                enquiryData.cargoDetails.cargoDimensions.map(
                  (dimension, index) => (
                    <div
                      className="flex items-end flex-wrap gap-6 "
                      key={index}
                    >
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
                          onChange={(e) =>
                            handleCargoDimensionsChange(e, index)
                          }
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
                          onChange={(e) =>
                            handleCargoDimensionsChange(e, index)
                          }
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
                          onChange={(e) =>
                            handleCargoDimensionsChange(e, index)
                          }
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
                          onChange={(e) =>
                            handleCargoDimensionsChange(e, index)
                          }
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                  )
                )}
              {/* standard cargo */}
              {enquiryData.cargoDetails.cargoType === "standard cargo" &&
                enquiryData.cargoDetails.cargoDimensions.map(
                  (dimension, index) => (
                    <div className="flex items-end flex-wrap gap-6" key={index}>
                      <div className="basis-4/5 w-[80%] flex  gap-6 items-center">
                        <GroupField
                          label={"Length"}
                          type={"number"}
                          placeholder={"Enter Length"}
                          name={"length"}
                          value={dimension.length || ""}
                          onChange={(e) =>
                            handleCargoDimensionsChange(e, index)
                          }
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
                          onChange={(e) =>
                            handleCargoDimensionsChange(e, index)
                          }
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
                          onChange={(e) =>
                            handleCargoDimensionsChange(e, index)
                          }
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
                          onChange={(e) =>
                            handleCargoDimensionsChange(e, index)
                          }
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                  )
                )}
              {/* ULD containers */}
              {enquiryData.cargoDetails.cargoType === "ULD containers" &&
                enquiryData.cargoDetails.cargoDimensions.map(
                  (dimension, index) => (
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                            onChange={(e) =>
                              handleCargoDimensionsChange(e, index)
                            }
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
                  )
                )}
            </div>
            <div className="flex justify-between p-2 bg-blue-50 text-blue text-sm items-center rounded-sm">
              <div className="flex gap-3 items-center">
                <InfoIcon color="#0091ff " />
                <p>
                  You have made changes to the enquiry. Would you like to save
                  the changes or cancel?
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <div onClick={() => setEditEnquiry(false)}>
                  <GreyButton label={"Cancel"} size={"s"} variant={""} />
                </div>
                <div onClick={() => setEditEnquiry(false)}>
                  <BlackButton label={"Save"} size={"s"} variant={""} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 bg-grey-aw-100 p-6 rounded-sm ">
            <div className="flex justify-between items-center gap-6 border-b border-grey-ab-100">
              <ViewCard
                label={"Enquiry ID"}
                value={18139088}
                style="flex-col"
                labelStyle="text-grey-ab-300 text-sm"
                valueStyle="text-grey-ab-800 text-sm font-semibold"
              />
              <ViewCard
                label={"Enquired Date"}
                value={"11/03/2024"}
                style="flex-col"
                labelStyle="text-grey-ab-300 text-sm"
                valueStyle="text-grey-ab-800 text-sm font-semibold"
              />
            </div>
            <div className="grid grid-cols-2  gap-4">
              <div className="flex flex-col gap-2 p-4 bg-grey-aw-50 rounded-md w-full">
                <div className="flex flex-col gap-3">
                  <HeadTitle label={"Product Details"} icon={<ProductIcon />} />
                  <ViewCard
                    label={"Product Offered"}
                    value={
                      <div>
                        {enquiryData.products.length > 0 &&
                          enquiryData.products.map((product, index) => (
                            <p key={index}>{product}</p>
                          ))}
                      </div>
                    }
                    style="flex-col"
                    labelStyle="text-grey-ab-300 text-sm"
                    valueStyle="text-grey-ab-800 text-sm font-semibold"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <HeadTitle label={"Routing"} icon={<RoutingIcon />} />
                  <div className="flex items-center justify-between gap-3">
                    <ViewCard
                      label={"Shipment Mode"}
                      value={enquiryData.modeOfShipment}
                      style="flex-col"
                      labelStyle="text-grey-ab-300 text-sm"
                      valueStyle="text-grey-ab-800 text-sm font-semibold"
                    />
                    <ViewCard
                      label={"Transportation Mode"}
                      value={enquiryData.modeOfTransportation}
                      style="flex-col"
                      labelStyle="text-grey-ab-300 text-sm"
                      valueStyle="text-grey-ab-800 text-sm font-semibold"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="px-10 flex items-center ">
                      <div className="w-3 h-3 rounded-full bg-grey-ab-100 start-location"></div>
                      <div className="w-full h-1 bg-grey-ab-100 middle-location align-middle"></div>
                      <div className="w-3 h-3 rounded-full bg-grey-ab-100 end-location"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col gap-1">
                        <p className="text-grey-ab-300 text-sm">
                          Port of Loading
                        </p>
                        <div className="flex items-center gap-2">
                          <LocationIcon color="#2C398F" />
                          <p className="font-semibold text-primary">
                            {enquiryData.portOfLoading}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-grey-ab-300 text-sm text-end">
                          Port of Discharge
                        </p>
                        <div className="flex items-center gap-2">
                          <LocationIcon color="#2C398F" />
                          <p className="font-semibold text-primary">
                            {enquiryData.portOfDischarge}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-4 bg-grey-aw-50 rounded-md w-full ">
                <div className="flex flex-col gap-3">
                  <HeadTitle
                    label={"Cargo Details"}
                    icon={<ContainerSettingsIcon />}
                  />
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <ViewCard
                      label={"Type of Cargo"}
                      value={enquiryData.cargoDetails.cargoType}
                      style="flex-col  basis-full"
                      labelStyle="text-grey-ab-300 text-sm"
                      valueStyle="text-grey-ab-800 text-sm font-semibold"
                    />
                    {/* apply loop the data of dimensions */}
                    {enquiryData.cargoDetails?.cargoDimensions?.length > 0 &&
                      enquiryData.cargoDetails.cargoDimensions.map(
                        (dimension) =>
                          Object.keys(dimension).map((key, dimIndex) => {
                            return (
                              <ViewCard
                                key={dimIndex}
                                label={key
                                  .replace(/([a-z])([A-Z])/g, "$1 $2")
                                  .replace(/^./, (str) => str.toUpperCase())}
                                value={dimension[key]}
                                style="flex-col basis-1/3"
                                labelStyle="text-grey-ab-300 text-sm"
                                valueStyle="text-grey-ab-800 text-sm font-semibold"
                              />
                            );
                          })
                      )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between p-2 bg-blue-50 text-blue text-sm items-center rounded-sm">
              <div className="flex gap-3 items-center">
                <InfoIcon color="#0091ff " />
                <p>
                  If you want to change the information in the enquiry, click
                  'Edit' to make changes.
                </p>
              </div>

              <div onClick={() => setEditEnquiry(true)}>
                <BlackButton
                  label={"Edit"}
                  size={"s"}
                  variant={""}
                  leftIcon={<EditIcon color="#ffffff" size={16} />}
                />
              </div>
            </div>
          </div>
        )}
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
          <PrimaryButton label={"Save"} size={"xl"} variant={""} />
        </div>
      </div>
    </div>
  );
};

export default EditRateFiling;

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
