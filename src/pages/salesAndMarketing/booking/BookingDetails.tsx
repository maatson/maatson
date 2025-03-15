import React, { useEffect, useRef, useState } from "react";
import NeutralBlueButton from "../../../components/buttons/NeutralBlueButton";
import {
  ContainerIcon,
  EditIcon,
  EmailIcon,
  LocationIcon,
  PhoneIcon,
  ProductIcon,
  RangeCalenderIcon,
  RoutingIcon,
  ScalePencilIcon,
  WarningIcon,
} from "../../../components/icons/Icons";
import ProfileSubHeaders from "../layouts/ProfileSubHeaders";
import ProfileBoxLayout from "../../register/layouts/ProfileBoxLayout";
import PrimaryChip from "../../../components/chips/PrimaryChip";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import SampleImage from "/images/sample/salesPerson.png";
import DefaultDp from "/images/defaultProfilePic.png";
import BlackButton from "../../../components/buttons/BlackButton";
import GroupField from "../../../components/groupField/GroupField";
import CargoShipImage from "/images/cargoShip.png";
import { useParams } from "react-router-dom";
import FollowUps from "../../../components/followups/FollowUps";
import "./style.css";
import ErrorButton from "../../../components/buttons/ErrorButton";
import RedClickHere from "/images/redClickHere.png";

const BookingDetails: React.FC = () => {
  const [isFollowUpOpen, setFollowUp] = useState<boolean>(false);
  const { id } = useParams();
  const followRef = useRef<HTMLDivElement | null>(null);

  const handleCloseFollowUp = () => {
    setFollowUp(false);
  };

  const [cancelBooking, setCancelBooking] = useState<boolean>(true);
  const handleCancelBooking = () => {
    setCancelBooking(false);
  };
  const handleCancel = () => {
    setCancelBooking(true);
  };
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

  const data =
    (Number(id) + 1) % 3 === 0 //2 , 5 are getting
      ? {
          modeOfTransportation: "land freight",
          containerType: "",
          modeOfShipment: "cross trade",
        }
      : Number(id) % 3 === 0 // 0, 3 are getting   0,1,2, 3,4,5
      ? {
          modeOfTransportation: "sea freight",
          containerType: "fcl",
          // containerType: "lcl",
          // containerType: "bulk",
          // containerType: "hazardous cargo",
          // containerType: "over",
          modeOfShipment: "import",
        }
      : {
          //1, 4 are getting
          modeOfTransportation: "air freight",
          containerType: "standard",
          modeOfShipment: "export",
        };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (followRef.current && !followRef.current.contains(e.target as Node)) {
        setFollowUp(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col gap-6 py-4">
        {isFollowUpOpen && (
          <>
            <div className="inset-0 fixed bg-black/50 h-screen cursor-pointer z-10"></div>
            <div className="inset-0 fixed z-20 flex justify-end">
              <div ref={followRef}>
                <FollowUps onClose={handleCloseFollowUp} />
              </div>
            </div>
          </>
        )}
        <div className="flex justify-between items-center p-3 rounded-xs shadow-lg bg-grey-aw-50">
          <p className="text-lg font-semibold text-grey-ab-900">
            Booking Details
          </p>
          <div>
            <NeutralBlueButton
              label={"Edit Booking"}
              size={"m"}
              variant={"primary"}
              leftIcon={<EditIcon size={16} color="#FDFDFD" />}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 text-grey-ab-800">
          {/* left side */}
          <div className="bg-grey-aw-50 flex flex-col gap-4 px-8 py-5 rounded-xs shadow-md h-fit">
            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-grey-ab-300">Booking Number</p>
                <div className="text-sm font-semibold">18139088</div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-grey-ab-300">booked Date</p>
                <div className="text-sm font-semibold">11/03/2024</div>
              </div>
            </div>

            {/* Routing */}
            <div className="flex flex-col gap-4">
              <ProfileSubHeaders title={"Routing"} icon={<RoutingIcon />} />

              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <p className="text-grey-ab-300">Shipment Mode</p>
                  <div className="font-semibold capitalize">
                    {data.modeOfShipment || ""}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-grey-ab-300">Transportation Mode</p>
                  <div className="font-semibold text-end capitalize">
                    {data.modeOfTransportation || ""}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="px-10 flex items-center ">
                  <div className="w-3 h-3 rounded-full bg-grey-ab-100 start-location"></div>
                  <div className="w-full h-1 bg-grey-ab-100 middle-location"></div>
                  <div className="w-3 h-3 rounded-full bg-grey-ab-100 end-location"></div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="text-grey-ab-300 text-sm">Port of Loading</p>
                    <div className="flex items-center gap-2">
                      <LocationIcon size={16} color="#2C398F" />
                      <p className="font-semibold text-primary">Shanghai, CN</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-grey-ab-300 text-sm text-end">
                      Port of Discharge
                    </p>
                    <div className="flex items-center gap-2">
                      <LocationIcon size={16} color="#2C398F" />
                      <p className="font-semibold text-primary">Chennai, IN</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* product details */}
            <div className="flex flex-col gap-2">
              <ProfileSubHeaders
                title={"Product Details"}
                icon={<ProductIcon />}
              />
              <ProfileBoxLayout
                title={"Product Offered"}
                value={"8528 - Television receivers, monitors, and projectors."}
                valueStyle={"font-semibold"}
              />
            </div>

            {/* container / cargo details */}
            <div className="flex flex-col gap-2">
              <ProfileSubHeaders
                title={"Cargo Details"}
                icon={<ContainerIcon />}
              />
              {data.modeOfTransportation.toLocaleLowerCase() ===
              "air freight" ? (
                <div className="flex flex-col gap-4">
                  {data.containerType.toLocaleLowerCase() === "standard" ? (
                    <>
                      <ProfileBoxLayout
                        title={"Type of Container"}
                        value={"Standard Cargo"}
                        valueStyle={"font-semibold"}
                      />
                      <div className="flex justify-between">
                        <ProfileBoxLayout
                          title={"Length"}
                          value={"123"}
                          valueStyle={"font-semibold "}
                        />
                        <ProfileBoxLayout
                          title={"Width"}
                          value={"123"}
                          valueStyle={"font-semibold "}
                        />
                        <ProfileBoxLayout
                          title={"Height"}
                          value={"123"}
                          valueStyle={"font-semibold "}
                        />
                        <ProfileBoxLayout
                          title={"Measurement"}
                          value={"meters"}
                          valueStyle={"font-semibold "}
                        />
                      </div>
                      <div className="flex justify-between">
                        <ProfileBoxLayout
                          title={"Volume"}
                          value={"2000 m3"}
                          valueStyle={"font-semibold"}
                        />
                        <ProfileBoxLayout
                          title={"Gross Weight "}
                          value={"10000 kgs"}
                          valueStyle={"font-semibold"}
                        />
                        <ProfileBoxLayout
                          title={"Quantity"}
                          value={"05"}
                          valueStyle={"font-semibold text-center"}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between">
                        <ProfileBoxLayout
                          title={"Type of Container"}
                          value={"ULD Container"}
                          valueStyle={"font-semibold"}
                        />
                        <ProfileBoxLayout
                          title={"Container Size"}
                          value={"LD-3 Reefers"}
                          valueStyle={"font-semibold text-end"}
                          titleStyle={"text-end"}
                        />
                      </div>
                      <div className="flex justify-between">
                        <ProfileBoxLayout
                          title={"Gross Weight "}
                          value={"10000 kgs"}
                          valueStyle={"font-semibold "}
                        />
                        <ProfileBoxLayout
                          title={"Quantity"}
                          value={"11"}
                          valueStyle={"font-semibold text-center"}
                        />
                      </div>
                    </>
                  )}
                </div>
              ) : data.modeOfTransportation.toLocaleLowerCase() ===
                "sea freight" ? (
                <div className="flex flex-col gap-4">
                  {data.containerType.toLocaleLowerCase() === "fcl" ? (
                    <>
                      <div className="flex justify-between">
                        <ProfileBoxLayout
                          title={"Type of Container"}
                          value={"FCL (Full Container Load)"}
                          valueStyle={"font-semibold"}
                        />
                        <ProfileBoxLayout
                          title={"Container Size"}
                          value={"20'FT Reefer Container"}
                          valueStyle={"font-semibold"}
                          titleStyle={"text-end"}
                        />
                      </div>
                      <div className="flex justify-between">
                        <ProfileBoxLayout
                          title={"Container Count"}
                          value={"11"}
                          valueStyle={"font-semibold text-center"}
                        />
                        <ProfileBoxLayout
                          title={"Gross Weight "}
                          value={"10000 kgs"}
                          valueStyle={"font-semibold text-end"}
                        />
                      </div>
                    </>
                  ) : data.containerType.toLocaleLowerCase() === "lcl" ? (
                    <>
                      <div className="flex justify-between">
                        <ProfileBoxLayout
                          title={"Type of Container"}
                          value={"LCL (Less Container Load)"}
                          valueStyle={"font-semibold"}
                        />
                        <ProfileBoxLayout
                          title={"Container Size"}
                          value={"20'FT Reefer Container"}
                          valueStyle={"font-semibold"}
                          titleStyle={"text-end"}
                        />
                      </div>
                      <div className="flex justify-between">
                        <ProfileBoxLayout
                          title={"Quantity"}
                          value={"05"}
                          valueStyle={"font-semibold"}
                        />
                        <ProfileBoxLayout
                          title={"Package Type "}
                          value={"Drums"}
                          valueStyle={"font-semibold text-end"}
                        />
                      </div>
                      <div className="flex justify-between">
                        <ProfileBoxLayout
                          title={"Gross Weight"}
                          value={"10000 kgs"}
                          valueStyle={"font-semibold"}
                        />
                        <ProfileBoxLayout
                          title={"Volume"}
                          value={"12m3"}
                          valueStyle={"font-semibold text-end"}
                        />
                      </div>
                    </>
                  ) : data.containerType.toLocaleLowerCase() === "bulk" ? (
                    <>
                      <div className="flex justify-between">
                        <ProfileBoxLayout
                          title={"Type of Container"}
                          value={"Bulk"}
                          valueStyle={"font-semibold"}
                        />
                        <ProfileBoxLayout
                          title={"Ship Type"}
                          value={"General Cargo"}
                          valueStyle={"font-semibold"}
                          titleStyle={"text-end"}
                        />
                      </div>
                      <div className="flex justify-between">
                        <ProfileBoxLayout
                          title={"Gross Weight "}
                          value={"10000 kgs"}
                          valueStyle={"font-semibold"}
                        />
                        <ProfileBoxLayout
                          title={"Loading Rate"}
                          value={"11"}
                          valueStyle={"font-semibold text-center"}
                        />
                        <ProfileBoxLayout
                          title={"Discharging Rate"}
                          value={"11"}
                          valueStyle={"font-semibold text-center"}
                        />
                      </div>
                    </>
                  ) : data.containerType.toLocaleLowerCase() === "hazardous" ? (
                    <>
                      <div className="flex justify-between">
                        <ProfileBoxLayout
                          title={"Type of Container"}
                          value={"Hazardous Cargo"}
                          valueStyle={"font-semibold"}
                        />
                        <ProfileBoxLayout
                          title={"Container Size"}
                          value={"20'FT Reefer Container"}
                          valueStyle={"font-semibold"}
                          titleStyle={"text-end"}
                        />
                      </div>
                      <div className="flex justify-between">
                        <ProfileBoxLayout
                          title={"UN Number"}
                          value={"hd1234"}
                          valueStyle={"font-semibold"}
                        />
                        <ProfileBoxLayout
                          title={"IMCO Class"}
                          value={"hd1234"}
                          valueStyle={"font-semibold text-end"}
                        />
                      </div>
                      <div className="flex justify-between">
                        <ProfileBoxLayout
                          title={"Gross Weight "}
                          value={"10000 kgs"}
                          valueStyle={"font-semibold"}
                        />
                        <ProfileBoxLayout
                          title={"Container Count"}
                          value={"11"}
                          valueStyle={"font-semibold text-center"}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between">
                        <ProfileBoxLayout
                          title={"Type of Container"}
                          value={"Over Dimensional Cargo"}
                          valueStyle={"font-semibold"}
                        />
                        <ProfileBoxLayout
                          title={"Container Size"}
                          value={"20'FT Reefer Container"}
                          valueStyle={"font-semibold"}
                          titleStyle={"text-end"}
                        />
                      </div>
                      <div className="flex justify-between">
                        <ProfileBoxLayout
                          title={"Length"}
                          value={"123"}
                          valueStyle={"font-semibold "}
                        />
                        <ProfileBoxLayout
                          title={"Width"}
                          value={"123"}
                          valueStyle={"font-semibold "}
                        />
                        <ProfileBoxLayout
                          title={"Height"}
                          value={"123"}
                          valueStyle={"font-semibold "}
                        />
                        <ProfileBoxLayout
                          title={"Measurement"}
                          value={"meters"}
                          valueStyle={"font-semibold "}
                        />
                      </div>
                      <div className="flex justify-between">
                        <ProfileBoxLayout
                          title={"Gross Weight "}
                          value={"10000 kgs"}
                          valueStyle={"font-semibold "}
                        />
                        <ProfileBoxLayout
                          title={"Container Count"}
                          value={"11"}
                          valueStyle={"font-semibold text-center"}
                        />
                      </div>
                    </>
                  )}
                </div>
              ) : (
                //for land frieght
                <div className="h-28 border rounded-xs items-center flex justify-center">
                  <p className="font-semibold"> Will Execute Later..</p>
                </div>
              )}
              {/* <div className="flex flex-col gap-4">
                {data.containerType.toLocaleLowerCase() === "fcl" ? (
                  <>
                    <div className="flex justify-between">
                      <ProfileBoxLayout
                        title={"Type of Container"}
                        value={"FCL (Full Container Load)"}
                        valueStyle={"font-semibold"}
                      />
                      <ProfileBoxLayout
                        title={"Container Size"}
                        value={"20'FT Reefer Container"}
                        valueStyle={"font-semibold"}
                        titleStyle={"text-end"}
                      />
                    </div>
                    <div className="flex justify-between">
                      <ProfileBoxLayout
                        title={"Container Count"}
                        value={"11"}
                        valueStyle={"font-semibold text-center"}
                      />
                      <ProfileBoxLayout
                        title={"Gross Weight "}
                        value={"10000 kgs"}
                        valueStyle={"font-semibold text-end"}
                      />
                    </div>
                  </>
                ) : data.containerType.toLocaleLowerCase() === "lcl" ? (
                  <>
                    <div className="flex justify-between">
                      <ProfileBoxLayout
                        title={"Type of Container"}
                        value={"LCL (Less Container Load)"}
                        valueStyle={"font-semibold"}
                      />
                      <ProfileBoxLayout
                        title={"Container Size"}
                        value={"20'FT Reefer Container"}
                        valueStyle={"font-semibold"}
                        titleStyle={"text-end"}
                      />
                    </div>
                    <div className="flex justify-between">
                      <ProfileBoxLayout
                        title={"Quantity"}
                        value={"05"}
                        valueStyle={"font-semibold"}
                      />
                      <ProfileBoxLayout
                        title={"Package Type "}
                        value={"Drums"}
                        valueStyle={"font-semibold text-end"}
                      />
                    </div>
                    <div className="flex justify-between">
                      <ProfileBoxLayout
                        title={"Gross Weight"}
                        value={"10000 kgs"}
                        valueStyle={"font-semibold"}
                      />
                      <ProfileBoxLayout
                        title={"Volume"}
                        value={"12m3"}
                        valueStyle={"font-semibold text-end"}
                      />
                    </div>
                  </>
                ) : data.containerType.toLocaleLowerCase() === "bulk" ? (
                  <>
                    <div className="flex justify-between">
                      <ProfileBoxLayout
                        title={"Type of Container"}
                        value={"Bulk"}
                        valueStyle={"font-semibold"}
                      />
                      <ProfileBoxLayout
                        title={"Ship Type"}
                        value={"General Cargo"}
                        valueStyle={"font-semibold"}
                        titleStyle={"text-end"}
                      />
                    </div>
                    <div className="flex justify-between">
                      <ProfileBoxLayout
                        title={"Gross Weight "}
                        value={"10000 kgs"}
                        valueStyle={"font-semibold"}
                      />
                      <ProfileBoxLayout
                        title={"Loading Rate"}
                        value={"11"}
                        valueStyle={"font-semibold text-center"}
                      />
                      <ProfileBoxLayout
                        title={"Discharging Rate"}
                        value={"11"}
                        valueStyle={"font-semibold text-center"}
                      />
                    </div>
                  </>
                ) : data.containerType.toLocaleLowerCase() ===
                  "hazardous cargo" ? (
                  <>
                    <div className="flex justify-between">
                      <ProfileBoxLayout
                        title={"Type of Container"}
                        value={"Hazardous Cargo"}
                        valueStyle={"font-semibold"}
                      />
                      <ProfileBoxLayout
                        title={"Container Size"}
                        value={"20'FT Reefer Container"}
                        valueStyle={"font-semibold"}
                        titleStyle={"text-end"}
                      />
                    </div>
                    <div className="flex justify-between">
                      <ProfileBoxLayout
                        title={"UN Number"}
                        value={"hd1234"}
                        valueStyle={"font-semibold"}
                      />
                      <ProfileBoxLayout
                        title={"IMCO Class"}
                        value={"hd1234"}
                        valueStyle={"font-semibold text-end"}
                      />
                    </div>
                    <div className="flex justify-between">
                      <ProfileBoxLayout
                        title={"Gross Weight "}
                        value={"10000 kgs"}
                        valueStyle={"font-semibold"}
                      />
                      <ProfileBoxLayout
                        title={"Container Count"}
                        value={"11"}
                        valueStyle={"font-semibold text-center"}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between">
                      <ProfileBoxLayout
                        title={"Type of Container"}
                        value={"Over Dimensional Cargo"}
                        valueStyle={"font-semibold"}
                      />
                      <ProfileBoxLayout
                        title={"Container Size"}
                        value={"20'FT Reefer Container"}
                        valueStyle={"font-semibold"}
                        titleStyle={"text-end"}
                      />
                    </div>
                    <div className="flex justify-between">
                      <ProfileBoxLayout
                        title={"Length"}
                        value={"123"}
                        valueStyle={"font-semibold "}
                      />
                      <ProfileBoxLayout
                        title={"Width"}
                        value={"123"}
                        valueStyle={"font-semibold "}
                      />
                      <ProfileBoxLayout
                        title={"Height"}
                        value={"123"}
                        valueStyle={"font-semibold "}
                      />
                      <ProfileBoxLayout
                        title={"Measurement"}
                        value={"meters"}
                        valueStyle={"font-semibold "}
                      />
                    </div>
                    <div className="flex justify-between">
                      <ProfileBoxLayout
                        title={"Gross Weight "}
                        value={"10000 kgs"}
                        valueStyle={"font-semibold "}
                      />
                      <ProfileBoxLayout
                        title={"Container Count"}
                        value={"11"}
                        valueStyle={"font-semibold text-center"}
                      />
                    </div>
                  </>
                )}
              </div> */}
            </div>

            {/* goods ready date */}
            <div className="flex flex-col gap-4">
              <ProfileSubHeaders
                title={"Goods Ready Date"}
                icon={<RangeCalenderIcon />}
              />
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-end">
                  <div className="flex flex-col gap-2">
                    <ProfileBoxLayout
                      title={"Date"}
                      value={"11/04/22025"}
                      valueStyle={"font-semibold"}
                    />
                    <ProfileBoxLayout
                      title={"Alternative Date"}
                      value={"11/04/22025"}
                      valueStyle={"font-semibold"}
                    />
                  </div>
                  <ProfileBoxLayout
                    title={"Indicated Rate"}
                    value={"2000 USD"}
                    valueStyle={"font-semibold h6 text-end"}
                  />
                </div>
                <div className="border-t border-t-grey-ab-100"></div>
                <div className="flex flex-col gap-2">
                  <ProfileBoxLayout
                    title={"Description"}
                    value={
                      "I need to ship 11 boxes of electronic items, each box measuring 2x2x2 ft and weighing 15 kg, from Shanghai Port to Chennai Port. Delivery is needed by [Specify Date]. The goods are fragile and require extra care during handling."
                    }
                    valueStyle="text-sm"
                  />
                </div>
              </div>
            </div>

            {/* additional service */}
            <div className="flex flex-col gap-6">
              <ProfileSubHeaders
                title={"Additional Services"}
                icon={<ScalePencilIcon />}
              />
              <div className="flex flex-wrap px-4 gap-4">
                <PrimaryChip
                  label={"Cargo Clearance"}
                  size={"l"}
                  variant={"fill"}
                />
                <PrimaryChip label={"Lashing"} size={"l"} variant={"fill"} />
              </div>
              <div className="flex gap-2">
                <WarningIcon size={20} color="#0091FF" />
                <p className="text-blue text-xs">
                  Note: Additional charges are collected based on additional
                  services and locations.
                </p>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flex flex-col gap-6">
            {/* follow ups */}
            <div className="rounded-xs bg-secondary-300 shadow-md px-4 py-2 flex justify-between items-center">
              <div className="flex flex-col gap-2 px-2 py-1">
                <p className="text-lg text-grey-ab">Follow Ups</p>
                <div className="flex gap-3">
                  <p className="text-lg text-grey-ab-400 font-semibold">
                    11/12/2024
                  </p>
                  <p className="text-lg text-grey-ab-400 font-semibold">
                    11:00pm
                  </p>
                </div>
              </div>
              <div ref={followRef} onClick={() => setFollowUp(true)}>
                <PrimaryButton
                  label={"Update Follow Ups"}
                  size={"m"}
                  variant={"primary"}
                />
              </div>
            </div>

            {/* booking handling person */}
            <div className="rounded-xs bg-grey-aw-50 shadow-md">
              <div className="py-3 px-4 border-b border-b-grey-ab-100 font-semibold">
                Booking Handling Person
              </div>
              <div className="flex gap-4 p-3 items-center">
                <div className="w-20 h-20 ">
                  <img
                    src={SampleImage}
                    alt="enquiryHandlingPerson"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="flex flex-auto justify-between">
                  <ProfileBoxLayout
                    title={"Employee Name"}
                    value={"Maersk Line	"}
                    valueStyle={"font-semibold text-sm"}
                    titleStyle={"text-sm"}
                  />
                  <ProfileBoxLayout
                    title={"Department"}
                    value={"Maersk Emerald	"}
                    valueStyle={"font-semibold text-sm"}
                    titleStyle={"text-sm"}
                  />
                  <ProfileBoxLayout
                    title={"Branch Location"}
                    value={"M1234"}
                    valueStyle={"font-semibold text-sm"}
                    titleStyle={"text-sm"}
                  />
                </div>
              </div>
            </div>

            {/* user information */}
            <div className="rounded-xs bg-grey-aw-50 shadow-md">
              <div className="py-3 px-4 border-b border-b-grey-ab-100 font-semibold">
                User Information
              </div>
              <div className="flex flex-col gap-6 px-8 py-4">
                <ProfileBoxLayout
                  title={"Company Name"}
                  value={"Maatson Maritime INTL (OPC) PVT LTD"}
                  valueStyle="font-semibold"
                />
                <div className="flex flex-col gap-3 px-4 py-3 bg-primary-50 rounded-xs">
                  <p className="font-semibold">
                    Person In-charge Information (PIC)
                  </p>
                  <div className="flex gap-4">
                    <div className="w-[52px] h-[52px]">
                      <img
                        src={DefaultDp}
                        alt="personInCharge"
                        className="w-full h-full rounded-full"
                      />
                    </div>
                    <div className="flex flex-col gap-2 flex-auto">
                      <div className="flex gap-3 justify-between">
                        <p className="font-semibold">Azhar hussain</p>
                        {/* <p>Sales Department</p> */}
                      </div>
                      <div className="flex gap-3 justify-between">
                        <div className="flex gap-2">
                          <EmailIcon size={16} />
                          <p className="text-sm">azhar@gmailcom</p>
                        </div>
                        <div className="flex gap-2">
                          <PhoneIcon size={16} />
                          <p className="text-sm">99406 08272</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-6 items-center">
                  <div>
                    <BlackButton
                      label={"View Profile"}
                      size={"m"}
                      variant={"outline"}
                    />
                  </div>
                  <div>
                    <BlackButton
                      label={"Send Mail"}
                      size={"m"}
                      variant={"primary"}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* booking status */}
            <div className="rounded-xs bg-grey-aw-50 shadow-md ">
              <div className="py-3 px-4 border-b border-b-grey-ab-100 font-semibold">
                Booking Status
              </div>

              {/* Starting */}
              {cancelBooking && (
                <div className="flex flex-col gap-4 px-4 py-2 justify-center">
                  <div className="flex flex-col gap-2">
                    <div>
                      <img src={RedClickHere} alt="RedClickHere" />
                    </div>
                    <p className="text-sm text-grey-ab-300 text-center">
                      Click 'Cancel Booking' to confirm the cancellation of this
                      Booking.
                    </p>
                  </div>
                  <div
                    className="flex justify-center pb-3"
                    onClick={handleCancelBooking}
                  >
                    <ErrorButton
                      label={"Cancel Booking"}
                      size={"l"}
                      variant={"primary"}
                    />
                  </div>
                </div>
              )}

              {/* When clicking cancel */}
              {!cancelBooking && (
                <div className="flex flex-col gap-4 px-4 py-3">
                  <div className="flex flex-col gap-3">
                    <p className="text-sm text-grey-ab-300 ">
                      Please provide a reason for cancelling this Booking.
                    </p>
                    <GroupField
                      label={"Reason for Cancellation"}
                      type={"textarea"}
                      placeholder={"Write Reason"}
                      name={""}
                      value={""}
                      onChange={function (
                        e: React.ChangeEvent<
                          | HTMLInputElement
                          | HTMLSelectElement
                          | HTMLTextAreaElement
                        >
                      ): void {
                        throw new Error("Function not implemented.");
                      }}
                      error={false}
                      errorMessage={""}
                      labelStyle="font-semibold"
                    />
                  </div>
                  <div className="flex justify-end gap-3 items-center">
                    <div onClick={handleCancel}>
                      <PrimaryButton
                        label={"Cancel"}
                        size={"l"}
                        variant={"link"}
                      />
                    </div>
                    <div>
                      <PrimaryButton
                        label={"Save"}
                        size={"l"}
                        variant={"primary"}
                      />
                    </div>
                  </div>
                </div>
              )}
              {/* create here ui for after cancelling */}
            </div>

            <div className="shadow-md rounded-xs bg-grey-aw-50 flex flex-col">
              <div className="py-3 px-4 border-b border-b-grey-ab-100 font-semibold">
                Carrier Details
              </div>
              <div className="flex gap-3 p-4 items-center">
                <div className="w-[140px] ">
                  <img
                    src={CargoShipImage}
                    alt="CargoShipImage"
                    className="w-full h-full"
                  />
                </div>
                <div className="h-full border-l border-l-grey-ab-100"></div>
                <div className="  flex flex-col gap-4 p-3 bg-secondary-200 rounded-sm flex-auto">
                  <div className="flex justify-between gap-2 flex-wrap">
                    <div className="flex flex-col gap-2 p-1">
                      <p className="text-grey-ab-400 text-sm">Carrier Name</p>
                      <p className="text-grey-ab-900 text-sm font-semibold">
                        Maersk Line
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 p-1">
                      <p className="text-grey-ab-400 text-sm">Vessel Name</p>
                      <p className="text-grey-ab-900 text-sm font-semibold">
                        Maersk Emerald
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 p-1">
                      <p className="text-grey-ab-400 text-sm">Voyage Number</p>
                      <p className="text-grey-ab-900 text-sm font-semibold">
                        M1234
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 p-1">
                      <p className="text-grey-ab-400 text-sm">POL(ETA)</p>
                      <p className="text-grey-ab-900 text-sm font-semibold">
                        11-03-2025
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 p-1">
                      <p className="text-grey-ab-400 text-sm">POL(ETD)</p>
                      <p className="text-grey-ab-900 text-sm font-semibold">
                        22-03-2025
                      </p>
                    </div>
                  </div>
                  {/* <div className="flex justify-between">
                   
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* right side end */}
        </div>

        {/* Chat conversation */}
        <div className=" bg-grey-aw-50 rounded-xs shadow-lg flex justify-center items-center h-[500px] w-full">
          Chat Conversation will execute after backend work
        </div>
      </div>
    </>
  );
};

export default BookingDetails;
