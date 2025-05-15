import React from "react";
import GroupField from "../../../components/groupField/GroupField";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import logo from "/images/logoSymbol.png";
import NeutralBlueButton from "../../../components/buttons/NeutralBlueButton";
import BlackButton from "../../../components/buttons/BlackButton";
import { DownloadIcon, EditIcon } from "../../../components/icons/Icons";
import { Link, useParams } from "react-router-dom";
const ViewBl: React.FC = () => {
  const { blId } = useParams();
  return (
    <div className="flex flex-col gap-4">
      {/* top indicators and updates */}
      <div className="flex justify-between items-center">
        <div className="bg-grey-aw-50 rounded-sm gap-3  p-4 flex items-center">
          <DraftIndicator title={"BL Draft"} status={true} />
          <DraftIndicator title={"BL Review"} status={false} />
          <DraftIndicator title={"BL Approval Request"} status={false} />
          <DraftIndicator title={"BL Approved"} status={false} />
        </div>
        <div className="bg-grey-aw-50 rounded-sm p-2 gap-3 flex items-center justify-center">
          <GroupField
            label={""}
            type={"select"}
            placeholder={""}
            name={""}
            value={"BL Draft"}
            onChange={() => {}}
            error={false}
            errorMessage={""}
            parentStyle="w-[220px]"
          />
          <div>
            {" "}
            <PrimaryButton label={"Update Status"} size={"xl"} variant={""} />
          </div>
        </div>
      </div>
      {/* body of bl*/}
      <div className="bg-grey-aw-50 rounded p-6 gap-4 flex flex-col">
        <div className="flex items-center gap-2 justify-center">
          <div className="w-[140px] text-center">
            <img src={logo} alt="logo" className="object-fit" />
          </div>
          <div className="flex flex-col gap-1 text-center ">
            <h3 className="h3 font-semibold text-primary">
              MAATSON MARITIME INTL
            </h3>
            <p className="text-xs text-primary">
              BILL OF LADING FOR COMBINED TRANSPORT SHIPMENT OR PORT TO PORT
              SHIPMENT NOT NEGOTIABLE UNLESS CONSIGNED "TO ORDER"
            </p>
            <h5 className="h5 font-semibold">BL Draft</h5>
          </div>
        </div>
        <div className="border border-grey-ab-100" />
        <div className="grid grid-cols-2 items-center gap-4">
          <div className="flex flex-col gap-2 h-full">
            <DraftCard
              heading={"Shipper"}
              value={"LIFECO"}
              subValue={
                "LIBTAN FERTILIZER COMPANY P.O.Box 6796 hay Andakus Brega-Libya"
              }
              isFlex={false}
            />
            <DraftCard
              heading={"Consignee"}
              value={"Artis industrial pvt ltd"}
              subValue={
                "3-101/2 Sharath villa, beach Road, Hosabettu, mangalore-575109"
              }
              isFlex={false}
            />
          </div>
          <div className="flex flex-col gap-2 h-full">
            <div className="flex items-center gap-2">
              <DraftCard
                heading={"Booking ID:"}
                value={"123dd4545"}
                isFlex={false}
                className="w-full"
              />
              <DraftCard
                heading={"Bill of Lading Number:"}
                value={"MM1234001"}
                isFlex={false}
                className="w-full"
              />
            </div>
            <DraftCard
              heading={"Shipper’s Ref"}
              value={"9768576ffd"}
              isFlex={true}
            />
            <DraftCard
              heading={"Delivery Agent"}
              value={"MAATSON MARITIME INTL(OPC) PVT LTD"}
              subValue={
                "Kosmo one,tower c.8th floor, sai nagar 3rd main road,Mogapair West, Ambattur Chennai-600 058tel No: +91 9003052529"
              }
              isFlex={false}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 items-center gap-4">
          <DraftCard
            heading={"Notify Party"}
            value={"ASSIDUOUS INTELECTS PRIVATE LIMITED (FTWZ)"}
            subValue={
              "A/C ARTS INDUSTRIAL PVT LTD C/O.integrated chennai BusinessPart (India)private limited, Survey NO.NO1202,kuruvimedu Road, kondakarai,Tiruvallur, tamilnadu 600120"
            }
            isFlex={false}
          />
          {/* show only if notify party 2 */}
          <DraftCard
            heading={"Notify Party"}
            value={""}
            subValue={""}
            isFlex={false}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <DraftCard
            heading={"Port of Loading"}
            value={"9768576ffd"}
            isFlex={false}
          />{" "}
          <DraftCard
            heading={"Vessel / Voyage"}
            value={"9768576ffd"}
            isFlex={false}
          />{" "}
          <DraftCard
            heading={"Port of Discharge"}
            value={"9768576ffd"}
            isFlex={false}
          />{" "}
          <DraftCard
            heading={"Place of Delivery"}
            value={"9768576ffd"}
            isFlex={false}
          />
          <DraftCard
            heading={"Final Destination"}
            value={"9768576ffd"}
            isFlex={false}
          />{" "}
          <DraftCard
            heading={"Place of Receipt"}
            value={"9768576ffd"}
            isFlex={false}
          />
          <DraftCard
            heading={"Freight Paid at"}
            value={"9768576ffd"}
            isFlex={false}
          />{" "}
          <DraftCard
            heading={"No.of.Orginal Bill of Lading"}
            value={"9768576ffd"}
            isFlex={false}
          />
        </div>
        {/* table */}
        <div>
          {/* thead */}
          <div className="grid grid-cols-5 bg-grey-100 text-sm font-semibold px-3 py-2">
            <p className="px-2 py-1">Marks & Numbers</p>
            <p className="px-2 py-1">No. of Pkgs. or Shipping Units</p>
            <p className="px-2 py-1">Description of Goods & Pkgs.</p>
            <p className="px-2 py-1">Net Weight & Cargo cross Weight</p>
            <p className="px-2 py-1">Measurement</p>
          </div>
          <div className="grid grid-cols-3 text-sm font-semibold">
            <p className="px-2 py-1">SHIPPERS LOAD/ STOW, COUNT & SEAL</p>
            <p className="px-2 py-1">SAID TO WEIGH/MEASURE</p>
            <p className="px-2 py-1">SAID TO CONTAIN</p>
          </div>
          {/* rows loop */}
          <div>
            {" "}
            <ContainerRow />
            <ContainerRow />
            <ContainerRow />
            <ContainerRow />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-4">
            <DraftCard
              heading={"Delivery Terms"}
              value={"FCL/FCL"}
              isFlex={false}
              className="w-full"
            />{" "}
            <DraftCard
              heading={"Shipping Terms"}
              value={"FCL/CY"}
              isFlex={false}
              className="w-full"
            />{" "}
          </div>
          <DraftCard
            heading={"Freight Terms"}
            value={"Collected"}
            isFlex={false}
          />{" "}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <div className="p-2 rounded border border-grey-ab-100">
              Excess Value Refer to Clause 6(3)(B) + (C) on reverse side
            </div>
            <div className="p-2 rounded border border-grey-ab-100 flex flex-col gap-2 h-full">
              <p>
                The term "carriage by sea" by definition being the transport of
                goods, merchandise, or their packing from a port of loading to a
                port of any place between one port and another port, the carrier
                is not and shall not be responsible for:
              </p>{" "}
              <p>
                a) Any damage occasioned to the goods arising out of or in
                relation to the loading and unloading of containers and/or goods
                on or off the vessel; and/or b) Any damage to containers and/or
                goods before the loading and after the unloading of the said
                containers and or/goods from the vessel. c) Any damage caused to
                containers and/or goods on board the vessel by other containers
                in the course of loading or unloading of those other containers
                and/or goods on board the vessel by stevedores. And/or d) Any
                damage caused to containers and/or goods prior to the loading
                and subsequent to the loading of other containers and/or goods
                arising out of the vessel's ancillary equipment (or any part
                thereof) coming into contact with the said Containers and/or
                goods lying on the quayside should the said containers and/or
                goods to be stacked one on top of the other or improperly
                arranged on the quayside. e) Any mis-information on the Import
                General Manifest and re-export of import containers and/or goods
                and where appropriate, the merchant shall furnish guarantees to
                the Carrier's agent if there is any breach.
              </p>{" "}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="p-2 rounded border border-grey-ab-100">
              RECEIVED by the Carrier the Goods as specified above in apparent
              good order and condition unless otherwise stated, to be
              transported to such place agreed, authorized or permitted herein
              and subject to all the terms and conditions appearing on the front
              and reverse of this Bill of Lading to which the Merchat agrees by
              accepting this Bill of Lading, any local privileges and customs
              notwithstading. The particulars given above are as stated by the
              sipper and the weight, measure, quantity, condition, contents and
              value of the Goods are unknown to the Carrier. One of the original
              Bills of Lading shall be presented to the carrier or his agent at
              destination before the cargo shall be released.{" "}
            </p>
            <DraftCard
              heading={"Place Issued"}
              value={"Chennai"}
              isFlex={false}
            />{" "}
            <DraftCard
              heading={"Shipped On Board Date"}
              value={"16-04-2025"}
              isFlex={false}
            />{" "}
            <DraftCard
              heading={"Date Issued"}
              value={"12-04-2025"}
              isFlex={false}
            />{" "}
          </div>
        </div>
      </div>

      {/* actions */}
      <div className="flex items-center gap-4 justify-end">
        <Link
          to={`/bill-of-lading/sea-freight/editBl/${blId}`}
          className="cursor-pointer"
        >
          <NeutralBlueButton
            label={"Edit Draft"}
            size={"m"}
            variant={""}
            leftIcon={<EditIcon color="#ffffff" size={16} />}
          />
        </Link>
        <div className="cursor-pointer">
          <BlackButton
            label={"Download Draft"}
            size={"m"}
            variant={""}
            leftIcon={<DownloadIcon color="#ffffff" size={16} />}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default ViewBl;

const DraftIndicator: React.FC<{ title: string; status: boolean }> = ({
  title,
  status,
}) => {
  return (
    <div className="flex flex-col gap-2 min-w-[124px]">
      <p className="text-center text-xs font-semibold">{title}</p>
      <span
        className={`${
          status ? "bg-primary" : "bg-primary-50"
        } rounded-sm h-2 w-full`}
      ></span>
    </div>
  );
};

const DraftCard: React.FC<{
  heading: string;
  value: string | number;
  subValue?: string | number;
  className?: string;
  isFlex: boolean;
}> = ({ heading, value, subValue, className, isFlex }) => {
  return (
    <div
      className={`p-2 rounded border border-grey-ab-100 flex ${
        isFlex
          ? "items-center gap-2"
          : `flex-col ${subValue ? "gap-3" : "gap-2"}`
      }  ${className} h-full`}
    >
      <p className="text-sm font-semibold">{heading}</p>
      <p>{value}</p>
      {subValue && <p>{subValue}</p>}
    </div>
  );
};

const ContainerRow: React.FC<{}> = () => {
  return (
    <div className="grid grid-cols-5 text-sm  px-3 py-2 border-b">
      <p className="px-2 py-1 gap-2 flex flex-col">
        <span>TCXU3529277</span>
        <span>SEAL: HC0225999</span>
      </p>
      <p className="px-2 py-1 ">Packing List No: ART-UFECO-5049</p>
      <p className="px-2 py-1 ">
        1X20FT SHIPPER OWNED CONTAINER, Catalyst Handling Equipment, Tools and
        Tackles
      </p>
      <p className="px-2 py-1 ">20978 kgs</p>
      <p className="px-2 py-1 ">-</p>
    </div>
  );
};
