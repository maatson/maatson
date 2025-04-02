import React from "react";
import SuccessButton from "../../../../../components/buttons/SuccessButton";
import GreyButton from "../../../../../components/buttons/GreyButton";
import NeutralBlueButton from "../../../../../components/buttons/NeutralBlueButton";
import {
  DownloadIcon,
  EditIcon,
  SendIcon,
} from "../../../../../components/icons/Icons";
import { Link, useParams } from "react-router-dom";
import maatsonLogo from "/images/logo.svg";
import ViewCard from "../../../sea-air-schedule/components/layouts/viewCard";
import CustomTable from "../../../../../components/table/CustomTable";

const ViewOnBoardConfirmation: React.FC = () => {
  const { bookingId } = useParams();

  const dummyData = {
    containerData: [
      {
        sealNumber: "ABC123457",
        containerNumber: "mmi0301123",
        containerType: "40'HC Dry Container",
        shipmentTerms: "FCL/FCL",
        weight: "150000",
        "full/empty": "full",
        reefTemp: "150000",
        imcoClass: "-",
        unNo: "-",
      },
      {
        sealNumber: "ABC123457",
        containerNumber: "mmi0301123",
        containerType: "40'HC Dry Container",
        shipmentTerms: "FCL/FCL",
        weight: "150000",
        "full/empty": "full",
        reefTemp: "150000",
        imcoClass: "-",
        unNo: "-",
      },
    ],
  };
  console.log("bookingId", bookingId);
  //   const columns: any[] = [
  //     { id: "bookingId", label: "Booking ID" },
  //     {
  //       id: "companyName",
  //       label: "Company Name",
  //       minWidth: "180px",
  //     },
  //     { id: "portOfLoading", label: "Port of loading" },
  //     { id: "portOfDischarge", label: "Port of Discharge" },
  //     {
  //       id: "bookingValidityDate",
  //       label: "Booking validity Date",
  //       minWidth: "160px",
  //     },
  //     { id: "onBoardStatus", label: "Onboard Status", align: "center" },
  //     { id: "mailStatus", label: "Mail Status", align: "center" },
  //     { id: "onboardDate", label: "Onboard Date" },
  //   ];
  const columns: any[] = Array.isArray(dummyData.containerData)
    ? [
        { label: "sno.", id: "sno", minWidth: "60px" },
        ...[
          ...new Set(
            dummyData.containerData.map((item) => Object.keys(item)).flat()
          ),
        ].map((item) => ({
          id: item,
          label: item.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase(),
        })),
      ]
    : [];

  const rows = Array.isArray(dummyData.containerData)
    ? dummyData.containerData.map((item, index) => ({
        ...item,
        id: index,
        sno: index + 1,
      }))
    : [];

  return (
    <div className="flex flex-col gap-2 bg-primary-50">
      <div className=" flex items-center justify-end gap-3">
        <SuccessButton
          label={"Send Email"}
          size={"m"}
          variant={""}
          rightIcon={<SendIcon color="#ffffff" size={16} />}
        />
        <GreyButton
          label={"Download"}
          size={"m"}
          variant={""}
          rightIcon={<DownloadIcon size={16} />}
        />
        <Link
          to={`/shipment-updates/sea-freight/onboard-confirmation/edit/${bookingId}`}
        >
          {" "}
          <NeutralBlueButton
            label={"Edit"}
            size={"m"}
            variant={""}
            rightIcon={<EditIcon color="#ffffff" size={16} />}
          />
        </Link>
      </div>
      <div className="bg-grey-aw-50 px-8 py-6 gap-6 flex flex-col rounded">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div>
              <img src={maatsonLogo} alt="logo" />
            </div>
            <div className="gap-2 flex-col flex text-sm basis-1/2 ">
              <p className="font-semibold">
                MAATSON MARITIME INTL (OPC) PVT LTD.
              </p>
              <p>
                No: 6/1, Shastri nagar, Kodungaiyur Industrial area, Opp. to KTV
                oil Mill,
                <br />
                Kodungaiyur, Chennai- 600 118.
              </p>
              <div className="flex gap-2 items-center">
                <p className="flex items-center gap-1">
                  {" "}
                  <span>Phone Number :</span>
                  <span>+91 98454 56564</span>
                </p>
                <p className="flex items-center gap-1">
                  {" "}
                  <span> Email :</span>
                  <span> arunkumar12@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
          <h6 className="h6 text-center font-semibold">
            ONBOARD CONFIRMATION ( Sea Freight)
          </h6>
        </div>
        {/*  */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-4">
            <ViewCard label={"Bill of Lading Number:"} value={"123dd4545"} />
            <ViewCard
              label={"Cargo Type :"}
              value={"FCL(Full Container Load)"}
            />
            <ViewCard label={"Carrier Name:"} value={"123dd4545"} />
            <ViewCard label={"Vessel Name:"} value={"123dd4545"} />
            <ViewCard label={"Voyage Number:"} value={"123dd4545"} />
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <ViewCard label={"Booking Number:"} value={"BOOKd4545"} />
              <ViewCard label={"Vessel Sailed Date:"} value={"11-04-2025"} />
              <ViewCard label={"Vessel Sailed Time:"} value={"-"} />
            </div>
            <div className="flex flex-col gap-4">
              <ViewCard label={"Port of Loading:"} value={"Chennai"} />
              <ViewCard label={"POD(Transshipment):"} value={"Colombo"} />
              <ViewCard label={"POD(Transshipment):"} value={"Mumbai"} />
              <ViewCard label={"Final Port of Discharge:"} value={"Dubai"} />
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <CustomTable columns={columns} rows={rows} isCheckbox={false} />
        </div>
        {/*  */}
        <div className="flex flex-col gap-1">
          <p className="font-semibold">Remarks</p>
          <p>
            onboard confirmation occurs when goods have been loaded onto the
            vessel and all customs and documentation requirements are met. The
            shipper receives confirmation from the shipping company, such as a
            Bill of Lading (BOL), stating that the cargo is onboard.
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default ViewOnBoardConfirmation;
