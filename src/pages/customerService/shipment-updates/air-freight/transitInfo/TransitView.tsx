import React, { useCallback, useEffect, useState } from "react";
import BlackButton from "../../../../../components/buttons/BlackButton";
import SuccessButton from "../../../../../components/buttons/SuccessButton";
import {
  AddIcon,
  ContainerIcon,
  DeleteIcon,
  EditIcon,
  ExcelIcon,
  SendIcon,
} from "../../../../../components/icons/Icons";
import WarningChip from "../../../../../components/chips/WarningChip";
import SuccessChip from "../../../../../components/chips/SuccessChip";
import PrimaryButton from "../../../../../components/buttons/PrimaryButton";
import flightImage from "/images/cargoFlight.png";
import NeutralBlueButton from "../../../../../components/buttons/NeutralBlueButton";
import ErrorButton from "../../../../../components/buttons/ErrorButton";
import ViewCard from "../../../sea-air-schedule/components/layouts/ViewCard";
// import AddVesselDetail from "./AddVesselDetail";
// import UpdateVesselDetail from "./UpdateVesselDetail";
// import UpdateCargo from "./UpdateCargo";

interface CargoProp {
  containerId: string;
  containerNumber: string;
  containerType: string;
}

interface VesselDetailProp {
  flightName: string;
  flightNumber: string;
  atd: string;
  eta: string;
  ata: string;
  pol: string;
  pod: string;
  cargoData: CargoProp[];
}

interface TransitProps {
  transitNumber: number;
  pendingCargo: CargoProp[];
  flightDetails: VesselDetailProp[];
  portOfLoading: string;
  portOfDischarge: string;
}
type CargoDimension =
  | {
      grossWeight: number;
      grossWeightUnit: string;
      height: number;
      length: number;
      measurement: string;
      quantity: number;
      volume: number;
      volumeUnit: string;
      width: number;
    }
  | {
      containerCount: number;
      containerSize: string;
      grossWeight: number;
      grossWeightUnit: string;
    };

interface DataProps {
  bookingId: string;
  companyName: string;
  portOfLoading: string;
  portOfDischarge: string;
  cargoType: string;
  cargoDimensions: CargoDimension[];
  bookingValidatity: string;
  transitStatus: boolean;
  transitData: TransitProps[];
}

const TransitView: React.FC = () => {
  const [dummyData, setDummyData] = useState<DataProps>({
    bookingId: "BB2501030001",
    companyName: "Farrel Kurniawan",
    portOfLoading: "chennai",
    portOfDischarge: "russia",
    cargoType: "Standard Cargo",
    cargoDimensions: [
      {
        grossWeight: 150000,
        grossWeightUnit: "kgs",
        height: 10,
        length: 100,
        measurement: "",
        quantity: 100,
        volume: 100,
        volumeUnit: "m3",
        width: 10,
      },
      {
        containerCount: 5,
        containerSize: "reefers",
        grossWeight: 150000,
        grossWeightUnit: "kgs",
      },
    ],
    bookingValidatity: "11/10/25",
    transitStatus: false,
    transitData: [
      {
        transitNumber: 1,
        pendingCargo: [
          {
            containerId: "5",
            containerNumber: "ABC123458",
            containerType: "40’ft Dry Container",
          },
        ],
        flightDetails: [
          {
            flightName: "Maresk",
            flightNumber: "fgks086",
            atd: "12/2/2024",
            eta: "13/2/2024",
            ata: "14/2/2024",
            pol: "Chennai, India",
            pod: "Colombo, Sri Lanka",
            cargoData: [
              {
                containerId: "1",
                containerNumber: "ABC123458",
                containerType: "40’ft Dry Container",
              },
              {
                containerId: "2",
                containerNumber: "XYZ123457",
                containerType: "20’ft Dry Container",
              },
            ],
          },
          {
            flightName: "Maresk",
            flightNumber: "fgks086",
            atd: "12/2/2024",
            eta: "13/2/2024",
            ata: "14/2/2024",
            pol: "Chennai, India",
            pod: "Colombo, Sri Lanka",

            cargoData: [
              {
                containerId: "3",
                containerNumber: "MNO123458",
                containerType: "40’ft Dry Container",
              },
              {
                containerId: "4",
                containerNumber: "ZZM123457",
                containerType: "20’ft Dry Container",
              },
            ],
          },
        ],
        portOfLoading: "chennai",
        portOfDischarge: "columbo",
      },
      {
        transitNumber: 2,
        pendingCargo: [
          {
            containerId: "5",
            containerNumber: "ABC123458",
            containerType: "40’ft Dry Container",
          },
        ],

        flightDetails: [
          {
            flightName: "Happg",
            flightNumber: "fgks086",
            atd: "12/2/2024",
            eta: "13/2/2024",
            ata: "14/2/2024",
            pol: "Chennai, India",
            pod: "Colombo, Sri Lanka",
            cargoData: [
              {
                containerId: "1",
                containerNumber: "ABC123458",
                containerType: "40’ft Dry Container",
              },
              {
                containerId: "2",
                containerNumber: "XYZ123457",
                containerType: "20’ft Dry Container",
              },
            ],
          },
          {
            flightName: "Cms",
            flightNumber: "fgks086",
            atd: "12/2/2024",
            eta: "13/2/2024",
            ata: "14/2/2024",

            pol: "Chennai, India",
            pod: "Colombo, Sri Lanka",
            cargoData: [
              {
                containerId: "1",
                containerNumber: "MNO123458",
                containerType: "40’ft Dry Container",
              },
              {
                containerId: "2",
                containerNumber: "ZZM123457",
                containerType: "20’ft Dry Container",
              },
            ],
          },
        ],
        portOfLoading: "columbo",
        portOfDischarge: "russia",
      },
    ],
  });
  const [currentTransit, setCurrentTransit] = useState<TransitProps>({
    transitNumber: 1,
    pendingCargo: [],
    flightDetails: [],
    portOfDischarge: "",
    portOfLoading: "",
  });
  const [currentUpdateFlightData, setCurrentUpdateFlightData] =
    useState<VesselDetailProp>({
      pol: "",
      pod: "",
      flightName: "",
      flightNumber: "",
      eta: "",
      ata: "",
      atd: "",
      cargoData: [],
    });
  const [activeTransitLeg, setActiveTransitLeg] = useState<number>(1);
  const [isAddFlight, setAddFlight] = useState<boolean>(false);
  const [isUpdateFlight, setUpdateFlight] = useState<boolean>(false);
  const [isUpdateCargo, setUpdateCargo] = useState<boolean>(false);
  const [currentFlightUpdateIndex, setCurrentFlightUpdateIndex] = useState<
    number | null
  >(null);

  const handleCurrentTransit = useCallback(() => {
    const activeTransit = dummyData.transitData.filter(
      (transit) => transit.transitNumber === activeTransitLeg
    );
    setCurrentTransit(activeTransit[0]);
  }, [activeTransitLeg]);

  const updateFlightData = (data: VesselDetailProp) => {
    setCurrentUpdateFlightData(data);
    setUpdateFlight(true);
  };
  const abortUpdateFlightData = () => {
    setCurrentUpdateFlightData({
      pol: "",
      pod: "",
      flightName: "",
      flightNumber: "",
      eta: "",
      ata: "",
      atd: "",
      cargoData: [],
    });

    setUpdateFlight(false);
  };

  function isStandardCargo(dim: CargoDimension): dim is {
    grossWeight: number;
    grossWeightUnit: string;
    height: number;
    length: number;
    measurement: string;
    quantity: number;
    volume: number;
    volumeUnit: string;
    width: number;
  } {
    return "grossWeight" in dim && "volume" in dim;
  }

  function isUldCargo(dim: CargoDimension): dim is {
    containerCount: number;
    containerSize: string;
    grossWeight: number;
    grossWeightUnit: string;
  } {
    return "containerSize" in dim;
  }

  // cargo update
  const updateFlightCargoData = (flightIndex: number) => {
    setUpdateCargo(true);
    setCurrentFlightUpdateIndex(flightIndex);
  };

  const abortUpdateFlightCargoData = () => {
    setUpdateCargo(false);
    setCurrentFlightUpdateIndex(null);
  };

  useEffect(() => {
    handleCurrentTransit();
  }, [activeTransitLeg]);

  return (
    <>
      {/* {isAddVessel && <AddVesselDetail oncancel={() => setAddVessel(false)} />}
      {isUpdateVessel && (
        <UpdateVesselDetail
          oncancel={abortUpdateVesselData}
          data={currentUpdateVesselData}
        />
      )}
      {isUpdateCargo && currentVesselUpdateIndex !== null && (
        <UpdateCargo
          data={{ ...currentTransit, vesselIndex: currentVesselUpdateIndex }}
          oncancel={abortUpdateVesselCargoData}
        />
      )} */}
      <div className="flex flex-col gap-4 bg-primary-50">
        <div className="bg-grey-aw-50 rounded shadow-sm p-3 flex items-center justify-between">
          <p className="text-lg font-semibold">{dummyData.bookingId} Details</p>
          <div className="flex items-center justify-center gap-4">
            <BlackButton
              label={"Send Mail"}
              size={"s"}
              variant={""}
              rightIcon={<SendIcon color="#ffffff" size={16} />}
            />
            <SuccessButton
              label={"Export"}
              size={"s"}
              variant={""}
              rightIcon={<ExcelIcon color="#ffffff" size={16} />}
            />
          </div>
        </div>
        <div className="bg-grey-aw-50 rounded shadow-sm p-6 flex gap-3  justify-between ">
          <div className="flex gap-4  justify-between flex-wrap w-full">
            <ViewCard
              label={"Booking ID"}
              value={dummyData.bookingId}
              style="flex-col"
              labelStyle="font-normal"
              valueStyle="font-semibold"
            />
            <ViewCard
              label={"Company Name"}
              value={dummyData.companyName}
              style="flex-col"
              labelStyle="font-normal"
              valueStyle="font-semibold"
            />
            <ViewCard
              label={"Port of loading"}
              value={dummyData.portOfLoading}
              style="flex-col"
              labelStyle="font-normal"
              valueStyle="font-semibold"
            />
            <ViewCard
              label={"Port of Discharge"}
              value={dummyData.portOfDischarge}
              style="flex-col"
              labelStyle="font-normal"
              valueStyle="font-semibold"
            />
            <ViewCard
              label={"Cargo Type"}
              value={dummyData.cargoType}
              style="flex-col"
              labelStyle="font-normal"
              valueStyle="font-semibold"
            />
            <ViewCard
              label={"Booking validity Date"}
              value={dummyData.bookingValidatity}
              style="flex-col"
              labelStyle="font-normal"
              valueStyle="font-semibold"
            />
          </div>

          <div className="flex flex-col gap-2 flex-shrink-0">
            <p className="text-sm ">Transit info Status</p>
            {dummyData.transitStatus ? (
              <SuccessChip label={"Updated"} size={"s"} variant={"fill"} />
            ) : (
              <WarningChip label={"Processing"} size={"s"} variant={"fill"} />
            )}
          </div>
        </div>
        {dummyData.transitData.length > 0 && (
          <>
            {" "}
            <div className="flex items-center gap-3">
              {currentTransit?.transitNumber === activeTransitLeg &&
                dummyData.cargoDimensions.length > 0 &&
                dummyData.cargoDimensions.map((dim: CargoDimension, index) => (
                  <div
                    className="px-3 py-2 gap-2 flex items-center rounded-sm bg-grey-aw-50 "
                    key={index}
                  >
                    <div className="p-1 bg-tertiary-50 rounded flex-shrink-0">
                      <ContainerIcon color="#2e6d8d " size={20} />
                    </div>
                    <div className="flex items-center gap-4 text-sm w-full ">
                      <p className="">
                        {isStandardCargo(dim)
                          ? `${dim.grossWeight} ${dim.grossWeightUnit}`
                          : isUldCargo(dim)
                          ? dim.containerSize
                          : ""}
                      </p>

                      <div className="p-1 ps-2 bg-secondary-50 text-secondary gap-1 flex items-center font-semibold  rounded-xl ">
                        <p>Pending</p>
                        <span className=" bg-secondary-300 text-white rounded-full flex items-center justify-center w-5 h-5 text-xs">
                          11
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex flex-col p-4 gap-6 bg-grey-aw-50 rounded">
              <div className="flex items-center justify-between">
                <div className="p-2 gap-2 flex items-center ">
                  {dummyData.transitData.map((td, index) =>
                    td.transitNumber === activeTransitLeg ? (
                      <div
                        onClick={() => setActiveTransitLeg(td.transitNumber)}
                      >
                        <BlackButton
                          key={index}
                          label={`Transit Leg ${td.transitNumber}`}
                          size={"s"}
                          variant={""}
                        />
                      </div>
                    ) : (
                      <div
                        onClick={() => setActiveTransitLeg(td.transitNumber)}
                      >
                        <BlackButton
                          key={index}
                          label={`Transit Leg ${td.transitNumber}`}
                          size={"s"}
                          variant={"link"}
                        />
                      </div>
                    )
                  )}
                </div>

                {activeTransitLeg !== 1 && (
                  <div onClick={() => setAddFlight(true)}>
                    <PrimaryButton
                      label={"Add Flight "}
                      size={""}
                      variant={""}
                      leftIcon={<AddIcon color="#ffffff" />}
                    />
                  </div>
                )}
              </div>

              {currentTransit?.flightDetails.length > 0 ? (
                currentTransit?.flightDetails.map((flight, flightIndex) => (
                  <div
                    className="p-4 gap-4 flex flex-col border border-grey-ab-100 rounded-lg"
                    key={flightIndex}
                  >
                    <div className="flex gap-6 w-full">
                      <div className="w-32 flex items-center justify-center">
                        <img
                          src={flightImage}
                          alt="flight"
                          className="object-fill"
                        />
                      </div>
                      <div className="flex flex-col gap-4 w-full">
                        <div className="flex justify-between items-start ">
                          <ViewCard
                            style="text-lg font-semibold flex-col"
                            label={flight.flightName}
                            value={
                              <p className=" flex gap-2 text-sm ">
                                <span className="text-grey-ab-300 font-normal">
                                  Flight Number
                                </span>
                                <span>{flight.flightNumber}</span>
                              </p>
                            }
                          />
                          <div className="flex flex-col gap-2">
                            <div onClick={() => updateFlightData(flight)}>
                              <PrimaryButton
                                label={"Update Flight"}
                                size={"m"}
                                variant={"outline"}
                                leftIcon={
                                  <EditIcon color="#2c398f" size={16} />
                                }
                              />
                            </div>
                            {activeTransitLeg !== 1 && (
                              <div>
                                <ErrorButton
                                  label={"Delete Flight"}
                                  size={"s"}
                                  variant={""}
                                  leftIcon={
                                    <DeleteIcon color="#ffffff" size={20} />
                                  }
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex item-center justify-between">
                          <ViewCard
                            label={"Port of Loading"}
                            value={flight.pol}
                            style="flex-col"
                            labelStyle="text-grey-ab-300"
                            valueStyle="font-semibold"
                          />
                          <ViewCard
                            label={"ATD(Port of Loading)"}
                            value={flight.atd}
                            style="flex-col"
                            labelStyle="text-grey-ab-300"
                            valueStyle="font-semibold"
                          />
                          <ViewCard
                            label={"Port of Discharge"}
                            value={flight.pod}
                            style="flex-col"
                            labelStyle="text-grey-ab-300"
                            valueStyle="font-semibold"
                          />
                          <ViewCard
                            label={"ETA(Arrival)"}
                            value={flight.eta}
                            style="flex-col"
                            labelStyle="text-grey-ab-300"
                            valueStyle="font-semibold"
                          />
                          <ViewCard
                            label={"ATA(Arrival)"}
                            value={flight.ata}
                            style="flex-col"
                            labelStyle="text-grey-ab-300"
                            valueStyle="font-semibold"
                          />
                        </div>
                      </div>
                    </div>
                    {flight.cargoData.length > 0 ? (
                      <>
                        <div className="bg-grey-200 rounded-sm p-4 flex flex-wrap gap-4">
                          {flight.cargoData.map((cargo) => (
                            <ContainerChip
                              primaryData={cargo.containerNumber}
                              secondaryData={cargo.containerType}
                            />
                          ))}
                        </div>
                        {activeTransitLeg !== 1 && (
                          <div
                            onClick={() => updateFlightCargoData(flightIndex)}
                          >
                            <NeutralBlueButton
                              label={"Update Container"}
                              size={"m"}
                              variant={""}
                              leftIcon={<EditIcon color="#ffffff" />}
                            />
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="bg-grey-200 rounded-sm p-4 flex flex-col items-center gap-2">
                        <p className="text-grey-ab-300 text-sm">
                          please add or update the container numbers linked to
                          this flight to complete the process.
                        </p>
                        <NeutralBlueButton
                          label={"Update Container"}
                          size={"m"}
                          variant={""}
                          leftIcon={<EditIcon color="#ffffff" />}
                        />
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="p-4 gap-2 flex flex-col border border-grey-ab-100 rounded-lg items-center">
                  {activeTransitLeg !== 1 ? (
                    <>
                      <p className="text-sm text-grey-ab-300">
                        Flight details are needed. Please provide the
                        information
                      </p>
                      <div onClick={() => setAddFlight(true)}>
                        <PrimaryButton
                          label={"Add Flight "}
                          size={""}
                          variant={""}
                          leftIcon={<AddIcon color="#ffffff" />}
                        />
                      </div>
                    </>
                  ) : (
                    <p className="text-sm text-grey-ab-300">
                      Oops...something went wrong
                    </p>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TransitView;

const ContainerChip: React.FC<{
  primaryData: string;
  secondaryData: string;
}> = ({ primaryData, secondaryData }) => {
  return (
    <div className="flex flex-col gap-2 px-4 py-3 rounded-sm border-2 border-primary bg-grey-aw-50">
      <p className="text-lg font-semibold text-primary">{primaryData}</p>
      <p className="text-grey-ab text-sm">{secondaryData}</p>
    </div>
  );
};
