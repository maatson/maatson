import React, { useCallback, useEffect, useState } from "react";
import NeutralBlueButton from "../../../components/buttons/NeutralBlueButton";
import {
  DownloadIcon,
  EditIcon,
  PrintIcon,
  SendIcon,
} from "../../../components/icons/Icons";
import SuccessButton from "../../../components/buttons/SuccessButton";
import GreyButton from "../../../components/buttons/GreyButton";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import Logo from "/images/logo.svg";
import HeadersLayout from "./layouts/HeadersLayouts";
import CustomTable from "../../../components/table/CustomTable";
import { Link, useParams } from "react-router-dom";

type CargoDetailsProps = {
  id?: number | string;
  slNo?: string | number | React.ReactNode;
  containerType: string;
  quantity: string | number;
  containerNumber: string;
};
interface DataProps {
  referenceNumber: string;
  containerTerminal: string;
  containerAddress: string;
  containerDepotContact: string;
  containerDepotTelNumber: string;
  shipperName: string;
  shipperAddress: string;
  shipperCustomerContact: string;
  shipperContactNumber: string;
  portOfLoading: string;
  portOfDischarge: string;
  eta: string;
  etd: string;
  gateOpenDate: string;
  gateCutOff: string;
  cargoName: string;
  cargoType: string;
  grossWeight: string | number;
  weightUnit: string;
  cargoDetails: CargoDetailsProps[];
  releaseOrderDate: string;
  freeStorageDays: string | number;
  freeStorageExpireDate: string;
  remarks: string;
}

interface RowData {
  id: string | number;
  slNo: string | number | React.ReactNode;
  containerType: string;
  quantity: string | number;
  containerNumber: string;
}

const Columns: any[] = [
  { id: "slNo", label: "SLNO", minWidth: 80, align: "center" },
  { id: "containerType", label: "Container Type", align: "center" },
  { id: "quantity", label: "Quantity", align: "center", minWidth: 50 },
  { id: "containerNumber", label: "Container Number", align: "center" },
];

const ViewContainerReleaseOrder: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<DataProps>({
    referenceNumber: "389789232",
    containerTerminal: "Chennai",
    containerAddress: "323, abc street, chennai",
    containerDepotContact: "9898989898",
    containerDepotTelNumber: "9898989898",
    shipperName: "Franklin Josheph",
    shipperAddress: "9898989898",
    shipperCustomerContact: "9932232989",
    shipperContactNumber: "9932232989",
    portOfLoading: "Chennai",
    portOfDischarge: "Singapore",
    eta: "04-04-2025",
    etd: "04-04-2025",
    gateOpenDate: "04-04-2025",
    gateCutOff: "04-04-2025",
    cargoName: "Shipments",
    cargoType: "FCL",
    grossWeight: "10000",
    weightUnit: "KGS",
    cargoDetails: [
      {
        containerType: "20'ft",
        quantity: "1",
        containerNumber: "782732723",
      },
      {
        containerType: "40'ft",
        quantity: "5",
        containerNumber: "Random",
      },
    ],
    releaseOrderDate: "04-04-2025",
    freeStorageDays: "10",
    freeStorageExpireDate: "04-04-2025",
    remarks:
      "onboard confirmation occurs when goods have been loaded onto the vessel and all customs and documentation requirements are met.",
  });
  const [rows, setRows] = useState<RowData[]>([]);

  const createData = (items: any) => {
    const { id } = items;
    const slNumber = (
      <div className="py-2">{(id + 1).toString().padStart(2, "0")}</div>
    );
    const updatedData = {
      id: id,
      slNo: slNumber,
      containerType: items?.containerType,
      quantity: (items?.quantity).toString().padStart(2, "0"),
      containerNumber: items?.containerNumber,
    };
    return updatedData;
  };

  const fetchData = useCallback(() => {
    const arr = data.cargoDetails.map((items, index) => {
      return createData({ ...items, id: index });
    });
    setRows(arr);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className="flex justify-end gap-4">
        <Link to={`/container-release-order/edit/${id}`}>
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

      <div className="flex rounded-xs bg-grey-aw-50 flex-col gap-6 px-8 py-6">
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
            CONTAINER RELEASE ORDER
          </div>
        </div>

        <div className="flex justify-end ">
          <div className="flex flex-col gap-2">
            <HeadersLayout
              label={"Booking Number:"}
              value={"123dd4545"}
              labelStyle="text-grey-ab-400"
              valueStyle="text-base"
              parentStyle="items-center"
            />
            <HeadersLayout
              label={"Booking Date:"}
              value={"11/05/2025"}
              labelStyle="text-grey-ab-400"
              valueStyle="text-base"
              parentStyle="items-center"
            />
            <HeadersLayout
              label={"Release Reference Number:"}
              value={"CFT22025"}
              labelStyle="text-grey-ab-400"
              valueStyle="text-base"
              parentStyle="items-center"
            />
          </div>
        </div>

        <div className="border border-grey-ab-50 "></div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-4 w-[40%]">
            <p className="font-semibold text-grey-ab">
              Empty Container Pickup Location
            </p>
            <div className="flex flex-col gap-2">
              <HeadersLayout
                label={"Container Terminal"}
                value={"SANCO-3 EMPTY YARD (Sanco Empty Container Terminal)"}
                labelStyle="text-grey-ab-400"
                valueStyle="text-base"
                parentStyle="flex-col"
              />
              <HeadersLayout
                label={"Address"}
                value={
                  "No.801,Vallur Camp, T H Road, Vallur Village, Chennai 600 120.(Land Mark : Nearby SICAL CFS & Opposite to Bharat Petroleum)"
                }
                labelStyle="text-grey-ab-400"
                valueStyle="text-base"
                parentStyle="flex-col"
              />
              <HeadersLayout
                label={"Depot Contact"}
                value={"Alex Babu"}
                labelStyle="text-grey-ab-400"
                valueStyle="text-base"
                parentStyle="flex-col"
              />
              <HeadersLayout
                label={"Depot Tel Number"}
                value={"75399 59586"}
                labelStyle="text-grey-ab-400"
                valueStyle="text-base"
                parentStyle="flex-col"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[40%]">
            <p className="font-semibold text-grey-ab">Shipper</p>
            <div className="flex flex-col gap-2">
              <HeadersLayout
                label={"Shipper Name"}
                value={"LIFECO"}
                labelStyle="text-grey-ab-400"
                valueStyle="text-base"
                parentStyle="flex-col"
              />
              <HeadersLayout
                label={"Address"}
                value={
                  "LIBTAN FERTILIZER COMPANY, P.O.Box 6796hay Andakus Brega-Libya"
                }
                labelStyle="text-grey-ab-400"
                valueStyle="text-base"
                parentStyle="flex-col"
              />
              <HeadersLayout
                label={"Customer Contact"}
                value={"Shivam"}
                labelStyle="text-grey-ab-400"
                valueStyle="text-base"
                parentStyle="flex-col"
              />
              <HeadersLayout
                label={"Contact Number"}
                value={"75399 59586"}
                labelStyle="text-grey-ab-400"
                valueStyle="text-base"
                parentStyle="flex-col"
              />
            </div>
          </div>
        </div>

        <div className="border border-grey-ab-50 "></div>

        <div className="flex justify-between">
          <HeadersLayout
            label={"Port of Loading"}
            value={"Misurata, Libya"}
            labelStyle="text-grey-ab-400"
            valueStyle="text-base"
            parentStyle="flex-col"
          />
          <HeadersLayout
            label={"Port of Discharge"}
            value={"Chennai, India"}
            labelStyle="text-grey-ab-400"
            valueStyle="text-base"
            parentStyle="flex-col"
          />
        </div>

        <div className="flex justify-between">
          <HeadersLayout
            label={"Port of Loading(ETA)"}
            value={"11-02-2025"}
            labelStyle="text-grey-ab-400"
            valueStyle="text-base"
            parentStyle="flex-col"
          />
          <HeadersLayout
            label={"Port of Loading(ETD)"}
            value={"11-02-2025"}
            labelStyle="text-grey-ab-400"
            valueStyle="text-base"
            parentStyle="flex-col"
          />
          <HeadersLayout
            label={"Gate Open"}
            value={"11-02-2025"}
            labelStyle="text-grey-ab-400"
            valueStyle="text-base"
            parentStyle="flex-col"
          />
          <HeadersLayout
            label={"Gate Cut off"}
            value={"11-02-2025"}
            labelStyle="text-grey-ab-400"
            valueStyle="text-base"
            parentStyle="flex-col"
          />
        </div>

        <div className="flex justify-between">
          <HeadersLayout
            label={"Cargo Name(Commodity)"}
            value={"Granite slabsGross weight"}
            labelStyle="text-grey-ab-400"
            valueStyle="text-base"
            parentStyle="flex-col"
          />
          <HeadersLayout
            label={"Cargo Type"}
            value={"FCL(Full Container Load)"}
            labelStyle="text-grey-ab-400"
            valueStyle="text-base"
            parentStyle="flex-col"
          />
          <HeadersLayout
            label={"Gross Weight"}
            value={"11000 kgs"}
            labelStyle="text-grey-ab-400"
            valueStyle="text-base"
            parentStyle="flex-col"
          />
        </div>

        <CustomTable columns={Columns} rows={rows} isCheckbox={false} />

        <div className="border border-grey-ab-50 "></div>

        <div className="flex justify-end">
          <div className="flex flex-col gap-2">
            <HeadersLayout
              label={"Release Order Date"}
              value={"11-02-2025"}
              labelStyle="text-grey-ab-400"
              valueStyle="text-base"
              parentStyle="flex-col"
            />
            <HeadersLayout
              label={"No of Free Storage Days "}
              value={"4 Days "}
              labelStyle="text-grey-ab-400"
              valueStyle="text-base"
              parentStyle="flex-col"
            />
            <HeadersLayout
              label={"Free Storage Expire Date"}
              value={"16-02-2025"}
              labelStyle="text-grey-ab-400"
              valueStyle="text-base"
              parentStyle="flex-col"
            />
          </div>
        </div>

        <HeadersLayout
          label={"Remarks"}
          value={
            "When requesting a booking, it will be necessary that all the detailedinformation about the dangerous goods are properly filled out, forgreater agility of approval.In the following moment, is mandatory to forward the documents listed"
          }
          labelStyle="text-grey-ab text-base font-normal"
          valueStyle="text-base p-2"
          parentStyle="flex-col"
        />

        {/* end div */}
      </div>
    </>
  );
};

export default ViewContainerReleaseOrder;
