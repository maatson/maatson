import React, { useCallback, useEffect, useState } from "react";
import {
  DownloadIcon,
  EditIcon,
  PrintIcon,
  SendIcon,
} from "../../../components/icons/Icons";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import GreyButton from "../../../components/buttons/GreyButton";
import SuccessButton from "../../../components/buttons/SuccessButton";
import { Link, useParams } from "react-router-dom";
import NeutralBlueButton from "../../../components/buttons/NeutralBlueButton";
import Logo from "/images/logo.svg";
import HeadersLayout from "../containerReleaseOrder/layouts/HeadersLayouts";
import SecondaryChip from "../../../components/chips/SecondaryChip";
import CustomTable from "../../../components/table/CustomTable";

type MandatoryDetailsProps = {
  containerNumber: string;
  containerType: string;
  cargoType: string;
  tare: string;
  maxGross: string;
  verifiedWeight: string;
  verifiedWeightUnit: string;
  verificationSignature: string;
  shipperCompany: string;
  status: string;
};

type OptionalDetailsProps = {
  determinationDate: string;
  solasMethod: string;
  solarCertification: string;
  country: string;
  providerSignature: string;
};

interface DataProps {
  shipperName: string;
  shipperAddress: string;
  shipperLicenseNumber: string;
  customerContact: string;
  customerContactNumber: string;
  vesselName: string;
  voyageNumber: string;
  vgmCutOffDate: string;
  mandatoryDetails: MandatoryDetailsProps[];
  optionalDetails: OptionalDetailsProps[];
}

interface MandatoryRowData {
  id: string | number;
  slNo: string | number | React.ReactNode;
  containerNumber: string;
  containerType: string;
  cargoType: string;
  tare: string;
  maxGross: string;
  verifiedWeight: string;
  verificationSignature: string;
  shipperCompany: string;
  status: string;
}
interface OptionalRowData {
  id: string | number;
  slNo: string | number | React.ReactNode;
  containerNumber: string;
  determinationDate: string;
  solasMethod: string;
  solarCertification: string;
  country: string;
  providerSignature: string;
}

const MandatoryColumns: any[] = [
  { id: "slNo", label: "SLNO", minWidth: 80, align: "center" },
  { id: "containerNumber", label: "Container Number" },
  { id: "containerType", label: "Container Type", minWidth: 180 },
  { id: "cargoType", label: "Cargo type", minWidth: 180 },
  { id: "tare", label: "Tare", minWidth: 100 },
  { id: "maxGross", label: "Max Gross", minWidth: 100 },
  {
    id: "verifiedWeight",
    label: "Verified Weight (Including Tare)",
    minWidth: 180,
  },
  {
    id: "verificationSignature",
    label: "Verification Signature (Responsible Person)",
    minWidth: 180,
  },
  {
    id: "shipperCompany",
    label: "Shipper Company (Responsible Company)",
    minWidth: 180,
  },
  { id: "status", label: "Status", align: "center", minWidth: 120 },
];

const OptionalColumns: any[] = [
  { id: "slNo", label: "SLNO", minWidth: 80, align: "center" },
  { id: "containerNumber", label: "Container Number" },
  { id: "determinationDate", label: "Determ. Date" },
  { id: "solasMethod", label: "Solas Method" },
  { id: "solarCertification", label: "Solas Cert." },
  { id: "country", label: "Country" },
  { id: "providerSignature", label: "Provider Signature" },
];

const ViewVGMFiling: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<DataProps>({
    shipperName: "LIFECO",
    shipperAddress:
      "LIBTAN FERTILIZER COMPANY, P.O.Box 6796hay Andakus Brega-Libya",
    shipperLicenseNumber: "+91 9695948987",
    customerContact: "RAM GOPAL",
    customerContactNumber: "+91 9695948987",
    vesselName: "LIFECO",
    voyageNumber: "9695948987",
    vgmCutOffDate: "4/21/12",
    mandatoryDetails: [
      {
        containerNumber: "ABC1234567	",
        containerType: "20ft Standard Container",
        cargoType: "20ft Standard Container",
        tare: "13456",
        maxGross: "12323",
        verifiedWeight: "10000",
        verifiedWeightUnit: "KG",
        verificationSignature: "John",
        shipperCompany: "hsd11045501",
        status: "Completed",
      },
      {
        containerNumber: "ABC1234567	",
        containerType: "20ft Standard Container",
        cargoType: "20ft Standard Container",
        tare: "13456",
        maxGross: "12323",
        verifiedWeight: "10000",
        verifiedWeightUnit: "KG",
        verificationSignature: "John",
        shipperCompany: "hsd11045501",
        status: "Pending",
      },
    ],
    optionalDetails: [
      {
        determinationDate: "2025-04-01",
        solasMethod: "Calulating",
        solarCertification: "No",
        country: "India",
        providerSignature: "John Doe",
      },
      {
        determinationDate: "2025-04-01",
        solasMethod: "Weighing",
        solarCertification: "Yes",
        country: "China",
        providerSignature: "John Doe",
      },
    ],
  });
  const [mandatoryRows, setMandatoryRows] = useState<MandatoryRowData[]>([]);
  const [optionalRows, setOptionalRows] = useState<OptionalRowData[]>([]);

  const createData = (items: any) => {
    const { id } = items;
    const slNumber = (
      <div className="py-2">{(id + 1).toString().padStart(2, "0")}</div>
    );
    const updatedData = {
      id: id,
      slNo: slNumber,
      containerNumber: items?.containerNumber,
      containerType: items?.containerType,
      cargoType: items?.cargoType,
      tare: items?.tare,
      maxGross: items?.maxGross,
      verifiedWeight: `${items?.verifiedWeight} ${items?.verifiedWeightUnit}`,
      verificationSignature: items?.verificationSignature,
      shipperCompany: items?.shipperCompany,
      status: items?.status,
    };
    return updatedData;
  };

  const createOptionalData = (items: any) => {
    const { id } = items;
    const slNumber = (
      <div className="py-2">{(id + 1).toString().padStart(2, "0")}</div>
    );
    const updatedData = {
      id: id,
      slNo: slNumber,
      containerNumber: items?.containerNumber,
      determinationDate: items?.determinationDate,
      solasMethod: items?.solasMethod,
      solarCertification: items?.solarCertification,
      country: items?.country,
      providerSignature: items?.providerSignature,
    };
    return updatedData;
  };

  const fetchData = useCallback(() => {
    const arr = data.mandatoryDetails.map((items, index) => {
      return createData({ ...items, id: index });
    });
    setMandatoryRows(arr);
  }, []);

  const fetchOptionalData = useCallback(() => {
    const arr = data.optionalDetails.map((items, index) => {
      const containerNumber = data.mandatoryDetails[index].containerNumber;
      return createOptionalData({ ...items, containerNumber, id: index });
    });

    setOptionalRows(arr);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    fetchOptionalData();
  }, [fetchOptionalData]);

  return (
    <>
      <div className="flex justify-end gap-4">
        <Link to={`/vgm-filing/edit/${id}`}>
          <NeutralBlueButton
            label={"Edit"}
            size={"m"}
            variant={"primary"}
            leftIcon={<EditIcon size={16} color="#FDFDFD" />}
          />
        </Link>
        <div>
          <SuccessButton
            label={"Send Email"}
            size={"m"}
            variant={"primary"}
            leftIcon={<SendIcon size={16} color="#FDFDFD" />}
          />
        </div>
        <div>
          <GreyButton
            label={"Download"}
            size={"m"}
            variant={"primary"}
            leftIcon={<DownloadIcon size={16} />}
          />
        </div>
        <div>
          <PrimaryButton
            label={"Print"}
            size={"m"}
            variant={"primary"}
            leftIcon={<PrintIcon size={16} color="#FDFDFD" />}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 px-8 py-6 rounded-xs bg-grey-aw-50">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div>
              <img src={Logo} alt="logo" />
            </div>
            <div className="flex flex-col gap-1 max-w-[50%] text-grey-ab-800">
              <p className="font-semibold ">MAATSON MARITIME INTL.</p>
              <p>
                No: 6/1, Shastri nagar, Kodungaiyur Industrial area, Opp. to KTV
                oil Mill, Kodungaiyur, Chennai- 600 118.
              </p>
              <div className="flex gap-3">
                <p>Email: sales@maatson.com</p>
                <p>Phone Number: 9949693480</p>
              </div>
            </div>
          </div>
          <div className="text-center font-bold text-lg text-grey-ab">
            VGM Filing Details
          </div>
        </div>

        <HeadersLayout
          label={"Booking Number:"}
          value={"123dd4545"}
          parentStyle="flex-col"
        />

        <div className="px-4 py-2 flex justify-between border border-grey-ab-100 rounded-sm">
          <HeadersLayout
            label={"Port of Loading"}
            value={"Los Angeles, USA"}
            parentStyle="flex-col"
            labelStyle="text-xs"
          />
          <HeadersLayout
            label={"Port of Discharge "}
            value={"Rotterdam, Netherlands"}
            parentStyle="flex-col"
            labelStyle="text-xs"
          />
          <HeadersLayout
            label={"Vessel Departure"}
            value={"4/21/12"}
            parentStyle="flex-col"
            labelStyle="text-xs"
          />
          <div className="py-1 flex flex-col gap-2">
            <p className="font-bold text-xs text-grey-ab-800">VGM Status</p>
            <SecondaryChip label={"Pending"} size={"m"} variant={"fill"} />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-4 w-[40%]">
            <HeadersLayout
              label={"Shipper Name"}
              value={data.shipperName}
              parentStyle="flex-col"
              valueStyle="text-base"
            />
            <HeadersLayout
              label={"Address"}
              value={data.shipperAddress}
              valueStyle="text-base"
              parentStyle="flex-col"
            />
            <HeadersLayout
              label={"Shipper Registration/License No"}
              value={data.shipperLicenseNumber}
              valueStyle="text-base"
              parentStyle="flex-col"
            />
            <HeadersLayout
              label={"Customer Contact"}
              value={data.customerContact}
              valueStyle="text-base"
              parentStyle="flex-col"
            />
            <HeadersLayout
              label={"Contact Number"}
              value={data.customerContactNumber}
              valueStyle="text-base"
              parentStyle="flex-col"
            />
          </div>
          <div className="flex flex-col gap-4 w-[40%]">
            <HeadersLayout
              label={"Vessel Name"}
              value={data.vesselName}
              valueStyle="text-base"
              parentStyle="flex-col"
            />
            <HeadersLayout
              label={"Voyage Number"}
              value={data.voyageNumber}
              valueStyle="text-base"
              parentStyle="flex-col"
            />
            <HeadersLayout
              label={"VGM Cut-off Date"}
              value={data.vgmCutOffDate}
              valueStyle="text-base"
              parentStyle="flex-col"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-lg font-bold text-grey-ab">
            Mandatory Information
          </p>
          <CustomTable
            columns={MandatoryColumns}
            rows={mandatoryRows}
            isCheckbox={false}
          />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-lg font-bold text-grey-ab">Optional Information</p>
          <CustomTable
            columns={OptionalColumns}
            rows={optionalRows}
            isCheckbox={false}
          />
        </div>

        {/* div end */}
      </div>
    </>
  );
};

export default ViewVGMFiling;
