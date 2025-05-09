import React from "react";
import dummyImage from "/images/sample/MSCLogo.png";
import PrimaryChip from "../../../components/chips/PrimaryChip";
import BlueChip from "../../../components/chips/BlueChip";
import {
  AeroplaneIcon,
  FreightIcon,
  InfoIcon,
  LocationIcon,
  ShipIcon,
} from "../../../components/icons/Icons";
import SecondaryChip from "../../../components/chips/SecondaryChip";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { Link } from "react-router-dom";
import ViewCard from "../../customerService/sea-air-schedule/components/layouts/ViewCard";
type CargoDimensionType = {
  size: string;
  rate: number;
  currency: string;
};
interface RateTariffData {
  pricingId: string;
  modeOfTransportation: string;
  portOfLoading: string;
  portOfDischarge: string;
  products: string[];
  cargoType: string;
  cargoDimensions: CargoDimensionType[];
  carrierName: string;
  validityDate: string;
}

const RateTariffCard: React.FC<RateTariffData> = ({ ...data }) => {
  return (
    <div className="bg-white  rounded-sm flex flex-col h-full">
      <div className="px-4 py-2 flex items-center justify-between border-b ">
        <div className="flex gap-2 items-center  ">
          <div className="w-6 h-6">
            <img
              src={dummyImage}
              alt={data.carrierName}
              className="object-fill"
            />
          </div>
          <p className="text-xs font-semibold capitalize">{data.carrierName}</p>
        </div>
        {data.modeOfTransportation === "air freight" ? (
          <SecondaryChip
            label={data.modeOfTransportation}
            size={"s"}
            variant={"mix"}
            leftIcon={<AeroplaneIcon color="#eeaa1f" size={16} />}
          />
        ) : (
          <BlueChip
            label={data.modeOfTransportation}
            size={"s"}
            variant={"mix"}
            leftIcon={<ShipIcon color="#0084e8" size={16} />}
          />
        )}
      </div>
      <div className="px-4 py-2 gap-2 flex flex-col">
        <div className="p-2 flex flex-col gap-2">
          <div className="px-6 flex items-center w-full justify-between gap-1">
            <div className="p-1 bg-secondary-300 rounded-full">
              <LocationIcon size={16} />{" "}
            </div>
            <div className="border border-dashed w-full " />
            <div className="p-1 bg-secondary-300 rounded-full">
              <LocationIcon size={16} />{" "}
            </div>{" "}
          </div>
          <div className="flex items-center justify-between">
            <ViewCard
              label={"Port of Loading"}
              value={data.portOfLoading}
              style="flex-col gap-[4px]"
              labelStyle="text-xs text-grey-ab-300"
              valueStyle="text-xs font-semibold text-primary"
            />
            <ViewCard
              label={"Port of Discharge"}
              value={data.portOfDischarge}
              style="flex-col gap-[4px]"
              labelStyle="text-xs text-grey-ab-300"
              valueStyle="text-xs font-semibold text-primary"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <ViewCard
            label={"Cargo Type"}
            value={data.cargoType}
            style="flex-col gap-[4px]"
            labelStyle="text-xs text-grey-ab-300"
            valueStyle="text-xs font-semibold "
          />
          <ViewCard
            label={"Validity Date "}
            value={data.validityDate}
            style="flex-col gap-[4px]"
            labelStyle="text-xs text-grey-ab-300"
            valueStyle="text-xs font-semibold "
          />
        </div>{" "}
        <table>
          <thead>
            <tr>
              <td className="text-xs font-semibold">Size/Unit</td>
              <td className="text-xs font-semibold text-end">Freight Rate</td>
            </tr>
          </thead>
          <tbody>
            {data.cargoDimensions.length > 0 ? (
              data.cargoDimensions.map((cargo, index) => (
                <tr key={index}>
                  <td className="text-xs"> {cargo.size}</td>
                  <td className="text-end text-xs">
                    {" "}
                    {cargo.rate + cargo.currency}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={2}
                  className="text-center text-xs text-grey-ab-300"
                >
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-2 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-1 basis-2/3">
          <div>
            {" "}
            <InfoIcon color="#0091ff" size={16} />
          </div>
          <p className="text-2xs text-blue">
            for Local charges click view Details or contact pricing Team{" "}
          </p>
        </div>
        <Link to={`/rate-tariff/view/${data.pricingId}`}>
          <PrimaryButton label={"View Details"} size={"s"} variant={""} />
        </Link>
      </div>
    </div>
  );
};

export default RateTariffCard;
