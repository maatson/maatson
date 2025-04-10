import React, { useCallback, useEffect, useRef, useState } from "react";
import NeutralBlueButton from "../../../components/buttons/NeutralBlueButton";
import {
  ContainerIcon,
  EditIcon,
  EmailIcon,
  ExcelIcon,
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
import SuccessButton from "../../../components/buttons/SuccessButton";
import CustomTable from "../../../components/table/CustomTable";
import { NavLink, Outlet, useParams } from "react-router-dom";
import FollowUps from "../../../components/followups/FollowUps";
import "../booking/style.css";

interface RowData {
  id: string | number;
  carrierName: string;
  vesselName: string;
  voyageNumber: string;
  arrivalDate: string;
  departureDate: string;
  localChargesTarrif: string | React.ReactNode;
  price: string | React.ReactNode;
  priceValidity: string;
}

const columns: any[] = [
  { id: "carrierName", label: "Carrier Name", minWidth: 130 },
  { id: "vesselName", label: "Vessel Name", minWidth: 140 },
  { id: "voyageNumber", label: "Voyage Number", minWidth: 140 },
  { id: "arrivalDate", label: "Arrival Number", minWidth: 140 },
  { id: "departureDate", label: "Departure Date", minWidth: 120 },
  { id: "localChargesTarrif", label: "Local Charges Tarrif", minWidth: 150 },
  { id: "price", label: "Price", minWidth: 120, align: "center" },
  { id: "priceValidity", label: "Price Validity", minWidth: 120 },
];

const EnquiryDetails: React.FC = () => {
  const [rows, setRows] = useState<RowData[]>([]);
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]); // Track selected row ids
  const [isFollowUpOpen, setFollowUp] = useState<boolean>(false);
  const followRef = useRef<HTMLDivElement | null>(null);

  const { id } = useParams();

  const handleCloseFollowUp = () => {
    setFollowUp(false);
  };

  const handleCheckedRowsChange = (newCheckedRows: (string | number)[]) => {
    setSelectedRows(newCheckedRows);
  };
  console.log(selectedRows, "selected Rows");

  const createData = (items: any) => {
    const { id, price, localChargesTarrif } = items;

    const prices = <div className="font-semibold text-center">{price}</div>;
    const localChargesTarrifs = (
      <div className="font-semibold text-center">{localChargesTarrif}</div>
    );

    const updatedData = {
      id: id,
      carrierName: items?.carrierName,
      vesselName: items?.vesselName,
      voyageNumber: items?.voyageNumber,
      arrivalDate: items?.arrivalDate,
      departureDate: items?.departureDate,
      localChargesTarrif: localChargesTarrifs,
      price: prices,
      priceValidity: items?.priceValidity,
    };
    return updatedData;
  };

  const data = [
    {
      carrierName: "Maersk Line	",
      vesselName: "Maersk Emerald	",
      voyageNumber: "M1234	",
      arrivalDate: "2025-02-25",
      departureDate: "2025-02-25	",
      localChargesTarrif: "2000 USD",
      price: "2000 USD",
      priceValidity: "2025-02-13",
    },
    {
      carrierName: "Maersk Line	",
      vesselName: "Maersk Emerald	",
      voyageNumber: "M1234	",
      arrivalDate: "2025-02-25",
      departureDate: "2025-02-25	",
      localChargesTarrif: "2000 USD",
      price: "2000 USD",
      priceValidity: "2025-02-13",
    },
    {
      carrierName: "Maersk Line	",
      vesselName: "Maersk Emerald	",
      voyageNumber: "M1234	",
      arrivalDate: "2025-02-25",
      departureDate: "2025-02-25	",
      localChargesTarrif: "2000 USD",
      price: "2000 USD",
      priceValidity: "2025-02-13",
    },
    {
      carrierName: "Maersk Line	",
      vesselName: "Maersk Emerald	",
      voyageNumber: "M1234	",
      arrivalDate: "2025-02-25",
      departureDate: "2025-02-25	",
      localChargesTarrif: "2000 USD",
      price: "2000 USD",
      priceValidity: "2025-02-13",
    },
  ];

  // Memoize fetchData function with useCallback
  const fetchData = useCallback(() => {
    const arr = data.map((items, index) => {
      return createData({ ...items, id: index }); // Ensure createData returns the transformed data
    });
    setRows(arr); // Set the rows with the updated data
  }, []); // Empty dependency array ensures this function is only created once

  useEffect(() => {
    fetchData(); // Call fetchData when the component mounts
  }, [fetchData]); // Only re-run fetchData if fetchData changes

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

  // temporary data
  const datas =
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
            Enquiry Details
          </p>
          <div>
            <NeutralBlueButton
              label={"Edit Enquiry"}
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
                <p className="text-sm text-grey-ab-300">Enquiry ID</p>
                <div className="text-sm font-semibold">18139088</div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-grey-ab-300">Lead Source</p>
                <div className="text-sm font-semibold">Facebook</div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-grey-ab-300">Enquired Date</p>
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
                    {datas.modeOfShipment || ""}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-grey-ab-300">Transportation Mode</p>
                  <div className="font-semibold text-end capitalize">
                    {datas.modeOfTransportation || ""}
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

            {/* container details */}
            <div className="flex flex-col gap-2">
              <ProfileSubHeaders
                title={"Cargo Details"}
                icon={<ContainerIcon />}
              />
              {datas.modeOfTransportation.toLocaleLowerCase() ===
              "air freight" ? (
                <div className="flex flex-col gap-4">
                  {datas.containerType.toLocaleLowerCase() === "standard" ? (
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
              ) : datas.modeOfTransportation.toLocaleLowerCase() ===
                "sea freight" ? (
                <div className="flex flex-col gap-4">
                  {datas.containerType.toLocaleLowerCase() === "fcl" ? (
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
                  ) : datas.containerType.toLocaleLowerCase() === "lcl" ? (
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
                  ) : datas.containerType.toLocaleLowerCase() === "bulk" ? (
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
                  ) : datas.containerType.toLocaleLowerCase() ===
                    "hazardous" ? (
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
                  {/* make it dynamic vicknote */}
                  {
                    <ProfileBoxLayout
                      title={"Indicated Rate"}
                      value={"2000 USD"}
                      valueStyle={"font-semibold h6 text-end"}
                    />
                  }
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

            {/* enquiry handling person */}
            <div className="rounded-xs bg-grey-aw-50 shadow-md">
              <div className="py-3 px-4 border-b border-b-grey-ab-100 font-semibold">
                Enquiry Handling Person
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
                        <p>Sales Department</p>
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

            {/* enquiry status */}
            <div className="rounded-xs bg-grey-aw-50 shadow-md">
              <div className="py-3 px-4 border-b border-b-grey-ab-100 font-semibold">
                Enquiry Status
              </div>
              <div className="px-4 py-2 flex gap-2 text-center justify-center ">
                <NavLink
                  to={`/enquiry/details/${id}/booking-status/cancel`}
                  className={({ isActive }) =>
                    `${
                      isActive ? "border-b-tertiary" : ""
                    } px-2 py-1 border-b-2  border-b-grey-aw-50 text-sm font-semibold text-grey-ab cursor-pointer transition-all duration-500 ease-in-out flex-1`
                  }
                  end
                >
                  Cancel
                </NavLink>

                <NavLink
                  to={`/enquiry/details/${id}`}
                  className={({ isActive }) =>
                    `${
                      isActive ? "border-b-tertiary" : ""
                    } px-2 py-1 border-b-2 border-b-grey-aw-50 text-sm font-semibold text-grey-ab cursor-pointer transition-all duration-500 ease-in-out flex-1`
                  }
                  end
                >
                  Negotiation
                </NavLink>

                <NavLink
                  to={`/enquiry/details/${id}/booking-status/convertBooking`}
                  className={({ isActive }) =>
                    `${
                      isActive ? "border-b-tertiary" : ""
                    } px-2 py-1 border-b-2 border-b-grey-aw-50 text-sm font-semibold text-grey-ab cursor-pointer transition-all duration-500 ease-in-out flex-1`
                  }
                  end
                >
                  Convert to Booking
                </NavLink>
              </div>

              <Outlet />
            </div>
            {/* enquiry status end */}
          </div>
          {/* right side end */}
        </div>

        <div className="rounded-xs bg-grey-aw-50 shadow-lg">
          <div className="flex justify-between px-4 py-3 border-b border-b-grey-ab-100 items-center">
            <p className="text-lg text-grey-ab-800 font-semibold">
              Enquiry Pricing Details
            </p>
            <div>
              <SuccessButton
                label={"Export"}
                size={"s"}
                variant={"primary"}
                rightIcon={<ExcelIcon size={16} color="#FDFDFD" />}
              />
            </div>
          </div>
          <CustomTable
            columns={columns}
            rows={rows}
            isCheckbox={true}
            onCheckedRowsChange={handleCheckedRowsChange}
          />
        </div>

        {/* Chat conversation */}
        <div className=" bg-grey-aw-50 rounded-xs shadow-lg flex justify-center items-center h-[500px] w-full">
          Chat Conversation will execute after backend work
        </div>
      </div>
    </>
  );
};

export default EnquiryDetails;
