import React from "react";
import ErrorButton from "../../../../../components/buttons/ErrorButton";
import PrimaryButton from "../../../../../components/buttons/PrimaryButton";
import {
  DeleteIcon,
  EditIcon,
  LocationIcon,
  ShipIcon,
  StopIcon,
} from "../../../../../components/icons/Icons";
import ViewCard from "../cards/ViewCard";

const VesselDetails: React.FC = () => {
  return (
    <>
      <div className="bg-grey-aw-50 sahdow-lg rounded-xs ">
        <div className="p-3 flex justify-between items-center border-b border-b-grey-ab-50">
          <p className="text-lg font-bold text-grey-ab-900">
            Chennai Port (INMAA) to Izmir (TRIZM){" "}
          </p>
          <div className="flex gap-4 ">
            <ErrorButton
              label={"Delete Schedule"}
              size={"l"}
              variant={"primary"}
              leftIcon={<DeleteIcon color="#FDFDFD" />}
            />
            <PrimaryButton
              label={"Edit Schedule"}
              size={"l"}
              variant={"primary"}
              leftIcon={<EditIcon color="#FDFDFD" />}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 px-8 py-6">
          <ViewCard />

          {/* schedule details */}
          <div className="rounded-xs shadow-sm">
            <p className="text-lg font-bold text-grey-ab-800 p-4 border-b border-b-grey-ab-50">
              Schedule Details
            </p>
            <div className="p-4">
              <div className="px-3 flex ">
                {/* left */}
                <div className="flex flex-col gap-2 px-1 py-2 justify-center items-center">
                  <div className=" p-3 rounded-xs bg-grey-ab-50">
                    <LocationIcon />
                  </div>

                  <div className="h-[112px] w-[1px] border-l border-l-grey-ab-400 border-dashed"></div>

                  <div className=" p-3 rounded-xs bg-grey-ab-50">
                    <StopIcon />
                  </div>

                  <div className="h-[112px] w-[1px] border-l border-l-grey-ab-400 border-dashed"></div>

                  <div className=" p-3 rounded-xs bg-grey-ab-50">
                    <LocationIcon />
                  </div>
                </div>

                {/* right */}
                <div className="px-1 py-2 flex flex-col gap-10 w-full">
                  <div className="p-1 rounded-xs bg-grey-ab-50 ">
                    <div className="flex flex-col gap-2">
                      <p className="text-xs font-bold text-grey-ab-600">
                        CHENNAI, INMAA
                      </p>
                      <div className="flex gap-2">
                        <p className="text-xs text-grey-ab-300">ETD</p>
                        <p className="text-xs text-grey-ab-600">2020-08-08</p>
                      </div>
                    </div>
                  </div>

                  {/* 2 */}
                  <div className="p-1 rounded-xs bg-tertiary-50 ">
                    <div className="flex gap-4">
                      <div className="p-1 h-6 w-6">
                        <ShipIcon size={20} color="#122C38" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-xs text-grey-ab-300">Vessel Name</p>
                        <p className="text-xs text-grey-ab-600">
                          CHENNAI, INMAA
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-xs text-grey-ab-300">
                          Voyage Number
                        </p>
                        <p className="text-xs text-grey-ab-600">11hg234243</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-xs text-grey-ab-300">Transit time</p>
                        <p className="text-xs text-grey-ab-600">8 days</p>
                      </div>
                    </div>
                  </div>

                  {/* 3 */}
                  <div className="p-1 rounded-xs bg-grey-ab-50 ">
                    <div className="flex flex-col gap-2">
                      <p className="text-xs font-bold text-grey-ab-600">
                        CHENNAI, INMAA
                      </p>
                      <div className="flex gap-2">
                        <p className="text-xs text-grey-ab-300">ETA</p>
                        <p className="text-xs text-grey-ab-600">2025-12-12</p>
                      </div>
                    </div>
                  </div>

                  {/* 4 */}
                  <div className="p-1 rounded-xs bg-tertiary-50 ">
                    <div className="flex gap-4">
                      <div className="p-1 h-6 w-6">
                        <ShipIcon size={20} color="#122C38" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-xs text-grey-ab-300">Vessel Name</p>
                        <p className="text-xs text-grey-ab-600">
                          CHENNAI, INMAA
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-xs text-grey-ab-300">
                          Voyage Number
                        </p>
                        <p className="text-xs text-grey-ab-600">11hg234243</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-xs text-grey-ab-300">Transit time</p>
                        <p className="text-xs text-grey-ab-600">8 days</p>
                      </div>
                    </div>
                  </div>

                  {/* 5 */}
                  <div className="p-1 rounded-xs bg-grey-ab-50 ">
                    <div className="flex flex-col gap-2">
                      <p className="text-xs font-bold text-grey-ab-600">
                        KARACHI (PKKHI)
                      </p>
                      <div className="flex gap-2">
                        <p className="text-xs text-grey-ab-300">ETD</p>
                        <p className="text-xs text-grey-ab-600">2025-12-12</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VesselDetails;
