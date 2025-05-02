import React, { useEffect, useMemo, useState } from "react";
import NeutralBlueButton from "../../../../components/buttons/NeutralBlueButton";
import SuccessButton from "../../../../components/buttons/SuccessButton";
import BlackButton from "../../../../components/buttons/BlackButton";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";
import logo from "/images/logo.svg";
import {
  DownloadIcon,
  EditIcon,
  PrintIcon,
  SendIcon,
} from "../../../../components/icons/Icons";
import ViewCard from "../../../customerService/sea-air-schedule/components/layouts/viewCard";
import EditableTable, {
  ColumnConfig,
} from "../../../../components/table/EditableTable";

interface CargoDetailsProp {
  containerNumber?: string;
  sealNumber?: string;
  description: string;
  delivaryStatus: string;
  packagesCount: number;
  packageType: string;
  grossWeight: number;
  grossWeightUnit: string;
}

interface CargoManifestProp {
  companyName: string;
  address: string;
  email: string;
  phone: string;
  bookingNumber: string;
  carrierName: string;
  dateOfDeparture: string;
  vesselName: string[];
  blNumber: string;
  portOfLoading: string;
  portOfDischarge: string;
  shipperName: string;
  shipperAddress: string;
  consigneeName: string;
  consigneeAddress: string;
  notifyPartyName: string;
  notifyPartyAddress: string;
  cargoDetails: CargoDetailsProp[];
  cargoType?: string;
}
type ViewCargoDetails = CargoDetailsProp & {
  noOfPackages: string;
  grossMeasurement: string;
};

interface TotalTableView {
  packageType: string;
  totalPackages: string;
  totalWeight: string;
}

const CargoManifestView: React.FC = () => {
  const [data, setData] = useState<CargoManifestProp>({
    companyName: "MAATSON MARITIME INTL.",
    address:
      "No: 6/1, Shastri nagar, Kodungaiyur Industrial area, Opp. to KTV oil Mill, Kodungaiyur, Chennai- 600 118.",
    email: "sales@maatson.com",
    phone: "9949693480",
    bookingNumber: "123dd4545",
    carrierName: "MEARSK CARRIER",
    dateOfDeparture: "11-05-2025",
    vesselName: ["MEARSK Titan"],
    blNumber: "EAD 1123409",
    portOfLoading: "TG. PRIOK, JAKARTA, INDONESIA",
    portOfDischarge: "NHAVASHEVA, INDIA",
    shipperName: "LIFECO",
    shipperAddress:
      "LIBTAN FERTILIZER COMPANY, P.O.Box 6796hay Andakus Brega-Libya",
    consigneeName: "LIFECO",
    consigneeAddress:
      "LIBTAN FERTILIZER COMPANY, P.O.Box 6796hay Andakus Brega-Libya",
    notifyPartyName: "LIFECO",
    notifyPartyAddress:
      "LIBTAN FERTILIZER COMPANY, P.O.Box 6796hay Andakus Brega-Libya",
    cargoType: "lcl",

    cargoDetails: [
      {
        containerNumber: "1123409",
        sealNumber: "1123409",
        description: "goods and service",
        delivaryStatus: "CFS/CFS",
        packagesCount: 20,
        packageType: "bags",
        grossWeight: 10,
        grossWeightUnit: "kgs",
      },
    ],
  });
  const [viewTable, setViewTable] = useState<ViewCargoDetails[]>([]);
  const [viewTotalTable, setViewTotalTable] = useState<TotalTableView[]>([]);

  const cargoDetailsColumn: ColumnConfig<ViewCargoDetails>[] = useMemo(
    () => [
      {
        key: "containerNumber",
        label: "Container Number",
      },
      {
        key: "sealNumber",
        label: "Seal Number",
      },
      {
        key: "description",
        label: "Description",
      },
      {
        key: "delivaryStatus",
        label: "Delivary Status",
      },
      {
        key: "noOfPackages",
        label: "Number of Kind of Packages",
      },
      {
        key: "grossMeasurement",
        label: "Gross Weight & Measurement",
      },
    ],
    []
  );

  const bulkCargoDetailsColumn: ColumnConfig<ViewCargoDetails>[] = useMemo(
    () => [
      {
        key: "description",
        label: "Description",
      },
      {
        key: "delivaryStatus",
        label: "Delivary Status",
      },
      {
        key: "noOfPackages",
        label: "Number of Kind of Packages",
      },
      {
        key: "grossMeasurement",
        label: "Gross Weight & Measurement",
      },
    ],
    []
  );

  const totalTableColumn: ColumnConfig<TotalTableView>[] = useMemo(
    () => [
      { label: "Package Type", key: "packageType" },
      { label: "Total Packages", key: "totalPackages" },
      { label: "Total Weight Total CBM", key: "totalWeight" },
    ],
    []
  );
  useEffect(() => {
    if (data.cargoDetails.length > 0) {
      const transformed = data.cargoDetails.map((cargo) => ({
        ...cargo,
        noOfPackages: cargo.packagesCount + " " + cargo.packageType,
        grossMeasurement: cargo.grossWeight + " " + cargo.grossWeightUnit,
      }));
      setViewTable(transformed);
    }
  }, [data.cargoDetails]);
  useEffect(() => {
    if (data.cargoDetails.length > 0) {
      const totalMaps: TotalTableView[] = data.cargoDetails.reduce(
        (acc, cargo) => {
          const existing = acc.find(
            (item) => item.packageType === cargo.packageType
          );

          if (existing) {
            existing.totalPackages = `${
              +existing.totalPackages + cargo.packagesCount
            }`;
            existing.totalWeight = `${
              +existing.totalWeight + cargo.grossWeight
            } kgs`;
          } else {
            acc.push({
              packageType: cargo.packageType,
              totalPackages: `${cargo.packagesCount}`,
              totalWeight: `${cargo.grossWeight} kgs`,
            });
          }

          return acc;
        },
        [] as TotalTableView[]
      );

      setViewTotalTable(totalMaps);
    }
  }, [data.cargoDetails]);

  return (
    <>
      <div className="flex justify-end gap-4 items-center">
        <NeutralBlueButton
          label={"Edit"}
          size={"m"}
          variant={""}
          leftIcon={<EditIcon color="#ffffff" size={16} />}
        />
        <SuccessButton
          label={"Send Email"}
          size={"m"}
          variant={""}
          leftIcon={<SendIcon color="#ffffff" size={16} />}
        />
        <div className="bg-white rounded shadow-xs">
          {" "}
          <BlackButton
            label={"Download"}
            size={"m"}
            variant={"link"}
            leftIcon={<DownloadIcon size={16} />}
          />
        </div>
        <PrimaryButton
          label={"Print"}
          size={"m"}
          variant={""}
          leftIcon={<PrintIcon color="#ffffff" size={16} />}
        />
      </div>
      <div className="bg-grey-aw-50 rounded px-8 py-6 gap-6 flex flex-col">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="flex flex-col gap-1 max-w-[420px]">
              <p className="text-sm font-semibold">{data.companyName}</p>
              <p>{data.address}</p>
              <p className="flex items-center gap-1">
                <span>email : {data.email}</span>
                <span>Phone Number : {data.phone}</span>
              </p>
            </div>
          </div>
          <p className="text-lg font-semibold text-center">Cargo Manifest</p>
          <div className="border border-grey-ab-100" />
        </div>
        <div className="py-1">
          <ViewCard
            label={"Booking Number:"}
            value={data.bookingNumber}
            labelStyle="font-semibold"
            style="flex-col"
          />
        </div>
        <div className="flex items-start  justify-between">
          <div className="flex gap-4 flex-col">
            <ViewCard
              label={"Carrier Name"}
              value={data.carrierName}
              labelStyle="font-semibold"
              style="flex-col"
            />{" "}
            <ViewCard
              label={"Date of Departure"}
              value={data.dateOfDeparture}
              labelStyle="font-semibold"
              style="flex-col"
            />{" "}
            {data.vesselName.length > 0 &&
              data.vesselName.map((vessel, index) => (
                <ViewCard
                  label={`Vessel Name ${index + 1}`}
                  value={vessel}
                  labelStyle="font-semibold"
                  style="flex-col"
                  key={index}
                />
              ))}
          </div>
          <div className="flex gap-4 flex-col">
            <ViewCard
              label={"BL Number"}
              value={data.blNumber}
              labelStyle="font-semibold"
              style="flex-col"
            />{" "}
            <ViewCard
              label={"Port of Loading"}
              value={data.portOfLoading}
              labelStyle="font-semibold"
              style="flex-col"
            />{" "}
            <ViewCard
              label={"Port of Discharge "}
              value={data.portOfDischarge}
              labelStyle="font-semibold"
              style="flex-col"
            />
          </div>
        </div>
        <div className="border border-grey-ab-100" />
        <div className="grid grid-cols-3 gap-4">
          <ViewCard
            label={"Shipper Name"}
            value={data.shipperName}
            labelStyle="font-semibold"
            style="flex-col"
          />{" "}
          <ViewCard
            label={"Consignee Name"}
            value={data.consigneeAddress}
            labelStyle="font-semibold"
            style="flex-col"
          />{" "}
          <ViewCard
            label={"Notify Party Name"}
            value={data.notifyPartyName}
            labelStyle="font-semibold"
            style="flex-col"
          />{" "}
          <ViewCard
            label={"Shipper Address"}
            value={data.shipperAddress}
            labelStyle="font-semibold"
            style="flex-col"
          />{" "}
          <ViewCard
            label={"Consignee Address"}
            value={data.consigneeAddress}
            labelStyle="font-semibold"
            style="flex-col"
          />{" "}
          <ViewCard
            label={"Notify Party Address"}
            value={data.notifyPartyAddress}
            labelStyle="font-semibold"
            style="flex-col"
          />
        </div>
        <div>
          <EditableTable<ViewCargoDetails>
            columns={
              data.cargoType === "bulk"
                ? bulkCargoDetailsColumn
                : cargoDetailsColumn
            }
            data={viewTable}
            onChange={() => useMemo(() => {}, [])}
            isDisableDelete={false}
            isOnlyView
          />
        </div>
        <div className="flex justify-between items-start ">
          <h5 className="h5 font-semibold">Total</h5>
          <div>
            <EditableTable
              columns={totalTableColumn}
              data={viewTotalTable}
              onChange={() => useMemo(() => {}, [])}
              isDisableDelete={false}
              isOnlyView
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CargoManifestView;
