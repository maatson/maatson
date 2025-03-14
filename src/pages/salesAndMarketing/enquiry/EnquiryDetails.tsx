import React, { useCallback, useEffect, useState } from "react";
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
import GroupField from "../../../components/groupField/GroupField";
import GreyButton from "../../../components/buttons/GreyButton";
import ErrorButton from "../../../components/buttons/ErrorButton";
import SuccessButton from "../../../components/buttons/SuccessButton";
import CustomTable from "../../../components/table/CustomTable";

interface RowData {
  id: string | number;
  carrierName: string;
  vesselName: string;
  voyageNumber: string;
  arrivalDate: string;
  departureDate: string;
  price: string | React.ReactNode;
  priceValidity: string;
}

const columns: any[] = [
  { id: "carrierName", label: "Carrier Name", minWidth: 130 },
  { id: "vesselName", label: "Vessel Name", minWidth: 140 },
  { id: "voyageNumber", label: "Voyage Number", minWidth: 140 },
  { id: "arrivalDate", label: "Arrival Number", minWidth: 140 },
  { id: "departureDate", label: "Departure Date", minWidth: 120 },
  { id: "price", label: "Price", minWidth: 120, align: "center" },
  { id: "priceValidity", label: "Price Validity", minWidth: 120 },
];

const EnquiryDetails: React.FC = () => {
  const [rows, setRows] = useState<RowData[]>([]);
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]); // Track selected row ids

  const handleCheckedRowsChange = (newCheckedRows: (string | number)[]) => {
    setSelectedRows(newCheckedRows);
  };
  console.log(selectedRows, "selected Rows");

  const createData = (items: any) => {
    const { id, price } = items;

    const prices = <div className="font-semibold text-center">{price}</div>;

    const updatedData = {
      id: id,
      carrierName: items?.carrierName,
      vesselName: items?.vesselName,
      voyageNumber: items?.voyageNumber,
      arrivalDate: items?.arrivalDate,
      departureDate: items?.departureDate,
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
      price: "2000 USD",
      priceValidity: "2025-02-13",
    },
    {
      carrierName: "Maersk Line	",
      vesselName: "Maersk Emerald	",
      voyageNumber: "M1234	",
      arrivalDate: "2025-02-25",
      departureDate: "2025-02-25	",
      price: "2000 USD",
      priceValidity: "2025-02-13",
    },
    {
      carrierName: "Maersk Line	",
      vesselName: "Maersk Emerald	",
      voyageNumber: "M1234	",
      arrivalDate: "2025-02-25",
      departureDate: "2025-02-25	",
      price: "2000 USD",
      priceValidity: "2025-02-13",
    },
    {
      carrierName: "Maersk Line	",
      vesselName: "Maersk Emerald	",
      voyageNumber: "M1234	",
      arrivalDate: "2025-02-25",
      departureDate: "2025-02-25	",
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

  return (
    <>
      <div className="flex flex-col gap-6 py-4">
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
          <div className="bg-grey-aw-50 flex flex-col gap-4 px-8 py-5 rounded-xs shadow-md">
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
                  <div className="font-semibold">Import</div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-grey-ab-300">Transportation Mode</p>
                  <div className="font-semibold text-end">Sea Freight</div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="px-10 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-grey-ab-100"></div>
                  <div className="w-full h-1 bg-grey-ab-100"></div>
                  <div className="w-3 h-3 rounded-full bg-grey-ab-100"></div>
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
                title={"Container Details"}
                icon={<ContainerIcon />}
              />
              <div className="flex flex-col gap-4">
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
              </div>
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
              <div>
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
              <div className="px-2 py-2 flex gap-14 justify-center">
                <div className="px-2 py-1 border-b-2 border-b-tertiary text-sm font-semibold text-grey-ab cursor-pointer">
                  Cancel
                </div>
                <div className="px-2 py-1 border-b-2 border-b-grey-aw-50 text-sm font-semibold text-grey-ab cursor-pointer">
                  Negotiation
                </div>
                <div className="px-2 py-1 border-b-2 border-b-grey-aw-50 text-sm font-semibold text-grey-ab cursor-pointer">
                  Convert to Booking
                </div>
              </div>
              <div className="flex flex-col gap-4 px-4 py-3">
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-grey-ab-300 text-center">
                    Please provide a reason for cancelling this enquiry.
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
                  <div>
                    <GreyButton
                      label={"Cancel"}
                      size={"l"}
                      variant={"secondary"}
                    />
                  </div>
                  <div>
                    <ErrorButton
                      label={"Save"}
                      size={"l"}
                      variant={"outline"}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* enwuiry status end */}
          </div>
          {/* right side end */}
        </div>

        <div className="rounded-xs bg-grey-aw-50 shadow-lg">
          <div className="flex justify-between px-4 py-3 border-b border-b-grey-ab-100 items-center">
            <p className="text-lg text-grey-ab-800 font-semibold">
              Carrier Details
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
