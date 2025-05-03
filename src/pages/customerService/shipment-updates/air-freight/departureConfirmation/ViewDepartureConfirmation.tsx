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
import CustomTable from "../../../../../components/table/CustomTable";
import ViewCard from "../../../sea-air-schedule/components/layouts/viewCard";

const ViewDepartureConfirmation: React.FC = () => {
  const { bookingId } = useParams();

  const dummyData = {
    containerData: [
      {
        shipmentTerms: "FCL/FCL",
        grossWeight: "150000",
        volume: "150000",
        quantity: "3",
      },
      {
        shipmentTerms: "DAP (Delivered at Place)",
        grossWeight: "10000",
        volume: "150000",
        quantity: "5",
      },
    ],
  };
  console.log("bookingId", bookingId);

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
          to={`/shipment-updates/air-freight/departure-confirmation/edit/${bookingId}`}
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
            Departure Confirmation ( Air Freight){" "}
          </h6>
        </div>
        {/*  */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-4">
            <ViewCard
              label={"MAWB  Number:"}
              value={"123dd4545"}
              labelStyle="font-semibold"
            />
            <ViewCard
              label={"HAWB  Number:"}
              value={"123dd4545"}
              labelStyle="font-semibold"
            />
            <ViewCard
              label={"Cargo Type :"}
              value={"FCL(Full Container Load)"}
              labelStyle="font-semibold"
            />
            <ViewCard
              label={"Carrier Name:"}
              value={"Mearsk line"}
              labelStyle="font-semibold"
            />
            <ViewCard
              label={"Flight Type:"}
              value={"COA"}
              labelStyle="font-semibold"
            />
            <ViewCard
              label={"Flight Number:"}
              value={"089776556"}
              labelStyle="font-semibold"
            />
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <ViewCard
                label={"Booking Number:"}
                value={"BOOKd4545"}
                labelStyle="font-semibold"
              />
              <ViewCard
                label={"Flight Departure Date:"}
                value={"11-04-2025"}
                labelStyle="font-semibold"
              />
              <ViewCard
                label={"Flight Departure Time:"}
                value={"-"}
                labelStyle="font-semibold"
              />
            </div>
            <div className="flex flex-col gap-4">
              <ViewCard
                label={"Port of Loading:"}
                value={"Chennai"}
                labelStyle="font-semibold"
              />
              <ViewCard
                label={"POD(Transshipment):"}
                value={"Colombo"}
                labelStyle="font-semibold"
              />
              <ViewCard
                label={"POD(Transshipment):"}
                value={"Mumbai"}
                labelStyle="font-semibold"
              />
              <ViewCard
                label={"Final Port of Discharge:"}
                value={"Dubai"}
                labelStyle="font-semibold"
              />
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

export default ViewDepartureConfirmation;
