import React, { useCallback, useMemo, useState } from "react";
import ViewCard from "../../customerService/sea-air-schedule/components/layouts/ViewCard";
import {
  ContainerSettingsIcon,
  DeleteIcon,
  EditIcon,
  LocationIcon,
  PriceTagIcon,
  ProductIcon,
  RangeCalenderIcon,
  RoutingIcon,
  StopIcon,
  UserIcon,
} from "../../../components/icons/Icons";
import ErrorButton from "../../../components/buttons/ErrorButton";
import NeutralBlueButton from "../../../components/buttons/NeutralBlueButton";
import EditableTable, {
  ColumnConfig,
} from "../../../components/table/EditableTable";
import { Link, useParams } from "react-router-dom";

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
  carrierTariff: number;
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

const ViewRateFiling: React.FC = () => {
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
    transitRoute: ["columbo", "russia", "mal"],
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
  const { enquiryId, rateFilingId } = useParams();

  const rateDetailColumns = useMemo<ColumnConfig<RateDetails>[]>(
    () => [
      {
        key: "size",
        label: "Size /Unit",
      },
      {
        key: "currencyType",
        label: "Currency Type",
      },
      { key: "rate", label: "Rate" },
      {
        key: "profit",
        label: "Profit",
      },
      {
        key: "amount",
        label: "Amount",
      },
      {
        key: "priceValidity",
        label: "Price Validity",
      },
    ],
    [enquiryData.cargoDetails]
  );
  const localTariffColumns = useMemo<ColumnConfig<LocalCharge>[]>(
    () => [
      {
        key: "chargeType",
        label: "Charge Type",
      },
      {
        key: "category",
        label: "POL/POD",
      },
      {
        key: "currencyType",
        label: "Currency Type",
      },
      {
        key: "carrierTariff",
        label: "Carrier Tariff",
      },
      {
        key: "profit",
        label: "Profit",
      },
      {
        key: "amount",
        label: "Amount",
      },
    ],
    [enquiryData.cargoDetails]
  );
  const onRateEditableTableChange = useCallback(() => {}, []);
  const onLocalTariffEditableTableChange = useCallback(() => {}, []);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4 items-center justify-end">
        <ErrorButton
          label={"Delete Pricing"}
          size={"m"}
          variant={""}
          leftIcon={<DeleteIcon color="#ffffff" size={16} />}
        />
        <Link to={`/rate-filing/edit/${enquiryId}/${rateFilingId}`}>
          <NeutralBlueButton
            label={"Edit Pricing"}
            size={"m"}
            variant={""}
            leftIcon={<EditIcon color="#ffffff" size={16} />}
          />
        </Link>{" "}
      </div>
      <div className="flex flex-col gap-4 bg-grey-aw-100 p-6 rounded-sm ">
        <p className="text-lg font-semibold">Enquiry Details</p>
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
                    <p className="text-grey-ab-300 text-sm">Port of Loading</p>
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
                  enquiryData.cargoDetails.cargoDimensions.map((dimension) =>
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
      </div>
      <div className="flex flex-col gap-4 bg-grey-aw-50 p-2 rounded-sm ">
        {" "}
        <HeadTitle label={"Carrier Information"} icon={<UserIcon />} />
        <div className="px-6 flex items-center justify-between flex-wrap">
          <ViewCard
            label={"Carrier Name"}
            value={carrierInfoData.carrierName}
            style="flex-col"
            labelStyle="text-grey-ab-400"
            valueStyle="font-semibold"
          />
          <ViewCard
            label={"Department"}
            value={carrierInfoData.department}
            style="flex-col"
            labelStyle="text-grey-ab-400"
            valueStyle="font-semibold"
          />
          <ViewCard
            label={"Email"}
            value={carrierInfoData.email}
            style="flex-col"
            labelStyle="text-grey-ab-400"
            valueStyle="font-semibold"
          />
          <ViewCard
            label={"Phone Number"}
            value={carrierInfoData.mobileNumber}
            style="flex-col"
            labelStyle="text-grey-ab-400"
            valueStyle="font-semibold"
          />
          <ViewCard
            label={"Carrier Person Name"}
            value={carrierInfoData.personName}
            style="flex-col"
            labelStyle="text-grey-ab-400"
            valueStyle="font-semibold"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1  bg-grey-aw-100 p-2 rounded-sm ">
        <HeadTitle
          label={"Rate / Rate Validity"}
          icon={<RangeCalenderIcon />}
        />
        <EditableTable
          columns={rateDetailColumns}
          data={carrierInfoData.rateDetails}
          onChange={onRateEditableTableChange}
          isDisableDelete={false}
          isOnlyView
        />
      </div>
      <div className="flex flex-col gap-1 bg-grey-aw-100 p-2 rounded-sm text-sm">
        <HeadTitle label={"Transit Route"} icon={<RoutingIcon />} />
        <div className="p-2 overflow-auto">
          {/* Icons line */}
          <div className="flex px-4 items-center gap-2">
            <div className="p-2 bg-blue-50 rounded-full">
              <LocationIcon color="#0091ff" />
            </div>
            <div className="w-full border border-dashed border-grey-ab-200" />
            {carrierInfoData.transitRoute.map((_, index) => (
              <React.Fragment key={index}>
                <div className="p-2 bg-error-50 rounded-full">
                  <StopIcon color="#c80008" />
                </div>
                {index !== carrierInfoData.transitRoute.length - 1 && (
                  <div className="w-full border border-dashed border-grey-ab-200" />
                )}
              </React.Fragment>
            ))}
            <div className="w-full border border-dashed border-grey-ab-200" />
            <div className="p-2 bg-blue-50 rounded-full">
              <LocationIcon color="#0091ff" />
            </div>
          </div>

          {/* Route text labels */}
          <div className="flex px-4 items-center gap-2">
            <div className="">{enquiryData.portOfLoading}</div>
            <div className="w-full" />
            {carrierInfoData.transitRoute.map((route, index) => (
              <React.Fragment key={route + index}>
                <div className="">{route}</div>
                {index !== carrierInfoData.transitRoute.length - 1 && (
                  <div className="w-full" />
                )}
              </React.Fragment>
            ))}
            <div className="w-full" />
            <div className=" break-before-all">
              {" "}
              {enquiryData.portOfDischarge}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-grey-aw-100 p-2 rounded-sm ">
        <HeadTitle label={"Local Charges Tariff"} icon={<PriceTagIcon />} />
        <EditableTable
          columns={localTariffColumns}
          data={carrierInfoData.localChargesTariff}
          onChange={onLocalTariffEditableTableChange}
          isDisableDelete={false}
          isOnlyView
        />
        <div className="px-3 py-2 bg-success-50 flex items-center justify-between text-lg font-semibold">
          <p className="w-full">Total Value</p>
          <div className="flex items-center gap-2 justify-between w-full">
            <p>INR</p>
            <p>
              {carrierInfoData.localChargesTariff.length > 0 &&
                carrierInfoData.localChargesTariff.reduce(
                  (acc, curr) => acc + curr.carrierTariff,
                  0
                )}
            </p>
            <p>
              {carrierInfoData.localChargesTariff.length > 0 &&
                carrierInfoData.localChargesTariff.reduce(
                  (acc, curr) => acc + curr.profit,
                  0
                )}
              %
            </p>
            <p>
              {carrierInfoData.localChargesTariff.length > 0 &&
                carrierInfoData.localChargesTariff.reduce(
                  (acc, curr) => acc + curr.amount,
                  0
                )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRateFiling;

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
