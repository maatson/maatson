import React from "react";
import PrimaryChip from "../../../../../components/chips/PrimaryChip";
import {
  AeroplaneIcon,
  CodeIcon,
  EditIcon,
  LeaveCalenderIcon,
  LocationIcon,
  ShipIcon,
} from "../../../../../components/icons/Icons";
import SecondaryChip from "../../../../../components/chips/SecondaryChip";
import NeutralBlueButton from "../../../../../components/buttons/NeutralBlueButton";
import GreyButton from "../../../../../components/buttons/GreyButton";
import { Link } from "react-router-dom";

interface CardProps {
  isSeaFreight: boolean;
  editpath: string;
  viewPath:string;
}

const UpdateScheduleCard: React.FC<CardProps> = React.memo(
  ({ isSeaFreight, editpath, viewPath }) => {
    return (
      <div className="rounded-sm border-primary border-2">
        <div className="p-2 gap-2 flex flex-col">
          <div className="px-3 flex justify-between">
            <div className="px-2 py-1 gap-3 flex items-center">
              <div className="w-10 h-10">
                <img
                  src="/images/frameLogo.svg"
                  alt=""
                  className="object-fill"
                />
              </div>
              <p className="text-xs font-semibold">Hapag-Llyod</p>
            </div>
            <div className="flex items-center gap-4">
              <PrimaryChip
                label={"Maersk Denver"}
                size={"m"}
                variant={""}
                leftIcon={
                  isSeaFreight ? (
                    <ShipIcon size={16} color="#ffffff" />
                  ) : (
                    <AeroplaneIcon size={16} color="#ffffff" />
                  )
                }
              />
              <div className="text-xs rounded-xl border border-grey-ab-50 bg-grey-aw-50 text-blue flex items-center gap-2 px-2 py-1">
                <span>{isSeaFreight ? "Voy No:" : "Flight No:"}</span>
                <span className="font-semibold px-2 py-1 bg-grey-300 rounded-lg">
                  MAE1234
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-2xs rounded-xl border border-grey-ab-50 bg-secondary-300 text-grey-ab-800 flex items-center gap-2 px-2 py-2">
                <span>Updated On</span>{" "}
                <span className="font-semibold px-2 py-1 bg-secondary-100 rounded-lg text-3xs">
                  01-02-2025{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="px-12 flex items-center justify-between">
            <div className="flex gap-4">
              <div className="flex flex-col p-1">
                <p className="text-grey-ab-300 text-sm">ETD</p>
                <p className=" text-xs font-semibold">09-02-2025</p>
              </div>
              <div className="flex flex-col p-1">
                <p className="text-grey-ab-300 text-sm">ATD</p>
                <p className=" text-xs font-semibold">10-02-2025</p>
              </div>
            </div>
            <SecondaryChip
              label={"28 days"}
              size={""}
              variant={""}
              leftIcon={<LeaveCalenderIcon color="#ffffff" size={16} />}
            />
            <div className="flex gap-4">
              <div className="flex flex-col p-1">
                <p className="text-grey-ab-300 text-sm">ATA</p>
                <p className=" text-xs font-semibold">10-03-2025</p>
              </div>
              <div className="flex flex-col p-1">
                <p className="text-grey-ab-300 text-sm">ETA</p>
                <p className=" text-xs font-semibold">09-03-2025</p>
              </div>
            </div>{" "}
          </div>
          <div className="px-20 gap-1 flex items-center">
            <div className="p-1 bg-primary-50 rounded-full">
              <LocationIcon size={12} color="#2c398f" />
            </div>
            <div className="border border-grey-ab-200 w-full"></div>
            <div className="flex items-center gap-2 w-full">
              {" "}
              <div className="border border-grey-ab-200  w-1/3"></div>
              <div className="border border-grey-ab-200 w-2/5"></div>
              <div className="border border-grey-ab-200 w-2/3"></div>
              <div className="border border-grey-ab-200 w-full"></div>
              <div className="border border-grey-ab-200 w-full"></div>
              <div className="border border-grey-ab-200  w-2/3"></div>
              <div className="border border-grey-ab-200 w-2/5"></div>
              <div className="border border-grey-ab-200 w-1/3"></div>
            </div>
            <div className="border border-grey-ab-200 w-full"></div>
            <div className="p-1 bg-primary-50 rounded-full">
              <LocationIcon size={12} color="#2c398f" />
            </div>{" "}
          </div>
          <div className="px-8 flex items-center justify-between">
            <div className="p-1 gap-2 flex flex-col">
              <p className="text-grey-ab-300 text-xs">Port of Loading</p>
              <p className="text-grey-ab-600 font-semibold text-xs">
                Chennai Port (INMAA)
              </p>
            </div>
            <div className="p-1 gap-2 flex flex-col items-center  w-2/3">
              <p className="text-grey-ab-300 text-xs">By Way Of</p>
              <div className="text-grey-ab-600 font-semibold text-xs flex flex-wrap gap-2 justify-center">
                <p>Jeddah (SAJED)</p>
                <p>Damietta (EGDAM)</p>
                <p>Piraeus (GRPIR)</p>
              </div>
            </div>
            <div className="p-1 gap-2 flex flex-col">
              <p className="text-grey-ab-300 text-xs">Port of Discharge</p>
              <p className="text-grey-ab-600 font-semibold text-xs">
                Izmir (TRIZM){" "}
              </p>
            </div>
          </div>
          <div className="p-2 flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <div className="p-1 gap-2 flex flex-col">
                <p className="text-grey-ab-300 text-xs">Service Name</p>
                <p className="text-grey-ab-600 font-semibold text-xs">
                  sea freight services to Shanghai and Hong Kong{" "}
                </p>
              </div>
              {isSeaFreight ? (
                <>
                  {" "}
                  <div className="p-1 gap-2 flex flex-col">
                    <p className="text-grey-ab-300 text-xs">Vessel Cut Off</p>
                    <p className="text-grey-ab-600 font-semibold text-xs">
                      09-02-2025{" "}
                    </p>
                  </div>
                  <div className="p-1 gap-2 flex flex-col">
                    <p className="text-grey-ab-300 text-xs">VGM Cut Off</p>
                    <p className="text-grey-ab-600 font-semibold text-xs">
                      10-02-2025{" "}
                    </p>
                  </div>
                </>
              ) : (
                <div className="p-1 gap-2 flex flex-col">
                  <p className="text-grey-ab-300 text-xs">Onboarding Cut off</p>
                  <p className="text-grey-ab-600 font-semibold text-xs">
                    09-02-2025{" "}
                  </p>
                </div>
              )}
            </div>
            <div className="flex gap-2 items-center">
              <Link to={editpath}>
                <NeutralBlueButton
                  label={"Edit"}
                  size={"l"}
                  variant={""}
                  leftIcon={<EditIcon color="#ffffff" />}
                />
              </Link>
              <Link to={viewPath}>
                <GreyButton
                  label={"View Details"}
                  size={"l"}
                  variant={""}
                  leftIcon={<CodeIcon />}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default UpdateScheduleCard;
