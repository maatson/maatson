import React, { useEffect, useState } from "react";
import ErrorButton from "../../../../../components/buttons/ErrorButton";
import PrimaryButton from "../../../../../components/buttons/PrimaryButton";
import {
  DeleteIcon,
  EditIcon,
  ExcelIcon,
  ExpandIcon,
  LocationIcon,
  MinimsIcon,
  ShipIcon,
  StopIcon,
} from "../../../../../components/icons/Icons";
import ViewCard from "../../components/cards/ViewCard";
import { Link, useLocation } from "react-router-dom";
import SuccessButton from "../../../../../components/buttons/SuccessButton";

const VesselDetails: React.FC = () => {
  const location = useLocation();
  const [data, setData] = useState({
    portOfLoading: "Chennai",
    portOfDischarge: "New York",
    servingRoutes: [
      { routePort: "Colombo, Sri Lanka", estimateTimeOfArrival: "2025-03-12" },
      { routePort: "Colombo, Sri Lanka", estimateTimeOfArrival: "2025-03-12" },
      // { routePort: "Colombo, Sri Lanka", estimateTimeOfArrival: "2025-03-12" },
      // { routePort: "Colombo, Sri Lanka", estimateTimeOfArrival: "2025-03-12" },
    ],
  });
  const [expandIcon, setExpandIcon] = useState<boolean>(true);
  const [totalPorts, setTotalPorts] = useState<string[]>([]);
  
  const handleIcon = () => {
    setExpandIcon((prev) => !prev);
  };

  useEffect(() => {
    if (expandIcon) {
      setTotalPorts([data.portOfLoading, data.portOfDischarge]);
    } else {
      setTotalPorts([
        data.portOfLoading,
        ...data.servingRoutes.map((route) => route.routePort),
        data.portOfDischarge,
      ]);
    }
  }, [expandIcon, data]);

  return (
    <>
      <div className="bg-grey-aw-50 sahdow-lg rounded-xs ">
        <div className="p-3 flex justify-between items-center border-b border-b-grey-ab-50">
          <p className="text-lg font-bold text-grey-ab-900">
            Chennai Port (INMAA) to Izmir (TRIZM){" "}
          </p>
          {location.pathname === "/sea-air-schedule/vessel-details" ? (
            <div className="flex gap-4 ">
              <ErrorButton
                label={"Delete Schedule"}
                size={"l"}
                variant={"primary"}
                leftIcon={<DeleteIcon color="#FDFDFD" />}
              />
              <Link to={"/sea-air-schedule/edit-sea-schedule"}>
                <PrimaryButton
                  label={"Edit Schedule"}
                  size={"l"}
                  variant={"primary"}
                  rightIcon={<EditIcon color="#FCFCFC" />}
                />
              </Link>
            </div>
          ) : (
            <div>
              <SuccessButton
                label={"Export"}
                size={"l"}
                variant={"primary"}
                leftIcon={<ExcelIcon color="#FDFDFD" />}
              />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 px-8 py-6">
          <ViewCard isSeaFreight={true} />

          {/* schedule details */}
          <div className="rounded-xs shadow-sm">
            <p className="text-lg font-bold text-grey-ab-800 p-4 border-b border-b-grey-ab-50">
              Schedule Details
            </p>
            <div className="p-4">
              <div className="px-3 flex ">
                {/* left */}
                <div className="flex flex-col gap-2 px-1 py-2 justify-center items-center">
                  {totalPorts.map((_, index) => (
                    <React.Fragment key={index}>
                      <div className="p-3 rounded-xs bg-grey-ab-50">
                        {index === 0 || index === totalPorts.length - 1 ? (
                          <LocationIcon />
                        ) : (
                          <StopIcon />
                        )}
                      </div>

                      {index < totalPorts.length - 1 && (
                        <React.Fragment>
                          {Math.floor(totalPorts.length / 2 - 1) === index ? (
                            <div className="h-[112px] w-[1px] flex flex-col gap-2 items-center">
                              <div className="border-l h-full border-l-grey-ab-400 border-dashed"></div>
                              <div
                                className="w-6 h-6 rounded-xs p-1 bg-grey-ab cursor-pointer"
                                onClick={handleIcon}
                              >
                                {expandIcon ? (
                                  <ExpandIcon size={16} color="#FDFDFD" />
                                ) : (
                                  <MinimsIcon size={16} color="#FDFDFD" />
                                )}
                              </div>
                              <div className="border-l h-full border-l-grey-ab-400 border-dashed"></div>
                            </div>
                          ) : (
                            <div className="h-[112px] w-[1px] border-l border-l-grey-ab-400 border-dashed"></div>
                          )}
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                {/* left end */}

                {/* right */}
                <div className="px-1 py-2 flex flex-col gap-10 w-full">
                  {totalPorts.map((_, index) => (
                    <React.Fragment key={index}>
                      <div className="p-1 rounded-xs bg-grey-ab-50 ">
                        <div className="flex flex-col gap-2">
                          <p className="text-xs font-bold text-grey-ab-600">
                            CHENNAI, INMAA
                          </p>
                          <div className="flex gap-2">
                            <p className="text-xs text-grey-ab-300">ETD</p>
                            <p className="text-xs text-grey-ab-600">
                              2020-08-08
                            </p>
                          </div>
                        </div>
                      </div>

                      {index < totalPorts.length - 1 && (
                        <div className="p-1 rounded-xs bg-tertiary-50 ">
                          <div className="flex gap-4">
                            <div className="p-1 h-6 w-6">
                              <ShipIcon size={20} color="#122C38" />
                            </div>
                            <div className="flex flex-col gap-2">
                              <p className="text-xs text-grey-ab-300">
                                Vessel Name
                              </p>
                              <p className="text-xs text-grey-ab-600">
                                CHENNAI, INMAA
                              </p>
                            </div>
                            <div className="flex flex-col gap-2">
                              <p className="text-xs text-grey-ab-300">
                                Voyage Number
                              </p>
                              <p className="text-xs text-grey-ab-600">
                                11hg234243
                              </p>
                            </div>
                            <div className="flex flex-col gap-2">
                              <p className="text-xs text-grey-ab-300">
                                Transit time
                              </p>
                              <p className="text-xs text-grey-ab-600">8 days</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
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
