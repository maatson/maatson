import React, { ChangeEvent, useState } from "react";
import ViewCard from "../../customerService/sea-air-schedule/components/layouts/ViewCard";
import GroupField from "../../../components/groupField/GroupField";
import NeutralBlueButton from "../../../components/buttons/NeutralBlueButton";
import {
  AddIcon,
  CrossIcon,
  DuplicateIcon,
} from "../../../components/icons/Icons";
import GreyButton from "../../../components/buttons/GreyButton";
import BlackButton from "../../../components/buttons/BlackButton";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { useNotify } from "../../../hooks/useNotify";
import { useNavigate } from "react-router-dom";

type ShipperDetails = {
  companyName: string;
  companyAddress: string;
  accountNumber?: string;
};
type CargoDetails = {
  noOfPiecesRCP: string;
  grossWeight: number;
  grossWeightUnit: string;
  rateClass: string;
  commodityItemNo: string;
  chargeableWeight: string;
  rate: string;
  charge: string;
  total: string;
  natureAndGoodsOfQuantity: string;
  dimensionOrValue: string;
};

interface BLData {
  bookingId: string;
  mawbNumber: string;
  shipper: ShipperDetails;
  consignee: ShipperDetails;
  notifyParty: ShipperDetails;
  carrierAgent: ShipperDetails;
  cargoDetails: CargoDetails[];
  agentIATACode: string;
  accountNo: string;
  airportDeparture: string;
  referenceNumber: string;
  optionalShippingInfo: string;
  acountingInfo: string;
  to: string;
  byCarrier: string;
  routingAndDestination: string;
  secondTo: string;
  secondBy: string;
  thirdTo: string;
  thirdBy: string;
  currency: string;
  CHGS_Code: string;
  declaredValueForCarriage: string;
  declaredValueForCustoms: string;
  WT_VAT: string;
  others: string;
  airportDestination: string;
  requestedFlightDate: string[];
  amountOfInsurance: string;
  handlingInfo: string;
  x: string;
  totalGrossWeight: number;
  CBM: string;
  currencyConversionRates: string;
  CC_ChargesInDestination: string;
  forCarrierUseOnlyInDestination: string;
  chargesAtDestination: string;
  totalCollectCharges: string;
  otherCharges: string;
  signatureOfShipper: string;
  executedDate: string;
  executedPlace: string;
  signatureOfIssuingCarrier: string;
  weightChargeStatus: "prepaid" | "collected";
  weightChargeAmount: string;
  valuationChargeStatus: "prepaid" | "collected";
  valuationChargeAmount: string;
  taxStatus: "prepaid" | "collected";
  taxAmount: string;
  agentOtherChargesDueStatus: "prepaid" | "collected";
  agentOtherChargesDueAmount: string;
  carrierOtherChargesDueStatus: "prepaid" | "collected";
  carrierOtherChargesDueAmount: string;
}

const CreateAirBl: React.FC = () => {
  const [data, setData] = useState<BLData>({
    bookingId: "123dd4545",
    mawbNumber: "",
    shipper: { companyName: "", companyAddress: "", accountNumber: "" },
    consignee: { companyName: "", companyAddress: "", accountNumber: "" },
    notifyParty: { companyName: "", companyAddress: "" },
    carrierAgent: { companyName: "", companyAddress: "" },
    cargoDetails: [
      {
        noOfPiecesRCP: "",
        grossWeight: 0,
        grossWeightUnit: "KGS",
        rateClass: "",
        commodityItemNo: "",
        chargeableWeight: "",
        rate: "",
        charge: "",
        total: "",
        natureAndGoodsOfQuantity: "",
        dimensionOrValue: "",
      },
    ],
    agentIATACode: "",
    accountNo: "",
    airportDeparture: "",
    referenceNumber: "",
    optionalShippingInfo: "",
    acountingInfo: "",
    to: "",
    byCarrier: "",
    routingAndDestination: "",
    secondTo: "",
    secondBy: "",
    thirdTo: "",
    thirdBy: "",
    currency: "",
    CHGS_Code: "",
    declaredValueForCarriage: "",
    declaredValueForCustoms: "",
    WT_VAT: "",
    others: "",
    airportDestination: "",
    requestedFlightDate: ["", ""],
    amountOfInsurance: "",
    handlingInfo: "",
    x: "",
    totalGrossWeight: 0,
    CBM: "",
    currencyConversionRates: "",
    CC_ChargesInDestination: "",
    forCarrierUseOnlyInDestination: "",
    chargesAtDestination: "",
    totalCollectCharges: "",
    otherCharges: "",
    signatureOfShipper: "",
    executedDate: "",
    executedPlace: "",
    signatureOfIssuingCarrier: "",
    weightChargeStatus: "prepaid",
    weightChargeAmount: "",
    valuationChargeStatus: "prepaid",
    valuationChargeAmount: "",
    taxStatus: "prepaid",
    taxAmount: "",
    agentOtherChargesDueStatus: "prepaid",
    agentOtherChargesDueAmount: "",
    carrierOtherChargesDueStatus: "prepaid",
    carrierOtherChargesDueAmount: "",
  });
  const { showToast } = useNotify();

  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleShipperChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedshipper = { ...data.shipper, [name]: value };
    setData((prev) => ({ ...prev, shipper: updatedshipper }));
  };
  const handleConsigneeChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedconsignee = { ...data.consignee, [name]: value };
    setData((prev) => ({ ...prev, consignee: updatedconsignee }));
  };
  const handleNotifyPartyChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatednotify = { ...data.notifyParty, [name]: value };
    setData((prev) => ({ ...prev, notifyParty: updatednotify }));
  };
  const handleCarrierAgentChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedCarrierAgent = { ...data.carrierAgent, [name]: value };
    setData((prev) => ({ ...prev, carrierAgent: updatedCarrierAgent }));
  };
  const handleChangeRequestedDate = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    index: number
  ) => {
    const { value } = e.target;
    const updatedCarrierAgent = [...data.requestedFlightDate];
    updatedCarrierAgent[index] = value;
    setData((prev) => ({ ...prev, requestedFlightDate: updatedCarrierAgent }));
  };

  const handleChangeCargoDetails = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const updatedcargos = [...data.cargoDetails];
    updatedcargos[index] = { ...updatedcargos[index], [name]: value };
    setData((prev) => ({ ...prev, cargoDetails: updatedcargos }));
  };

  const handleAddMore = () => {
    const addedCargo = [...data.cargoDetails];
    addedCargo.push({
      noOfPiecesRCP: "",
      grossWeight: 0,
      grossWeightUnit: "KGS",
      rateClass: "",
      commodityItemNo: "",
      chargeableWeight: "",
      rate: "",
      charge: "",
      total: "",
      natureAndGoodsOfQuantity: "",
      dimensionOrValue: "",
    });
    setData((prev) => ({ ...prev, cargoDetails: addedCargo }));
  };
  const handleDuplicateCargo = (index: number) => {
    const addedCargo = [...data.cargoDetails];
    const duplicateCargo = addedCargo[index];
    addedCargo.splice(index + 1, 0, duplicateCargo);
    setData((prev) => ({ ...prev, cargoDetails: addedCargo }));
    showToast("info", {
      heading: "Container and Cargo Duplicated",
      message: "Details copied. You can review or edit",
    });
  };
  const handleRemoveCargo = (index: number) => {
    const cargos = [...data.cargoDetails];
    if (cargos.length > 1) {
      const removedCargos = cargos.filter((_, ind) => index !== ind);
      setData((prev) => ({ ...prev, cargoDetails: removedCargos }));
    } else {
      cargos[index] = {
        noOfPiecesRCP: "",
        grossWeight: 0,
        grossWeightUnit: "KGS",
        rateClass: "",
        commodityItemNo: "",
        chargeableWeight: "",
        rate: "",
        charge: "",
        total: "",
        natureAndGoodsOfQuantity: "",
        dimensionOrValue: "",
      };
      setData((prev) => ({ ...prev, cargoDetails: cargos }));
    }
  };
  return (
    <div className="bg-grey-aw-50 flex flex-col gap-8 p-6 rounded">
      {/* booking */}
      <div className="flex flex-col gap-4">
        <ViewCard
          label={"Booking ID:"}
          value={data.bookingId}
          labelStyle="font-semibold"
        />
        <GroupField
          label={"MAWB Number*"}
          type={"text"}
          placeholder={"Enter MAWB Number"}
          name={"mawbNumber"}
          value={data.mawbNumber}
          onChange={handleChange}
          error={false}
          errorMessage={""}
          parentStyle="w-1/3"
        />{" "}
      </div>

      {/* body */}
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <GroupField
              label={"Shipper*"}
              type={"text"}
              placeholder={"Company Name"}
              name={"companyName"}
              value={data.shipper.companyName}
              onChange={handleShipperChange}
              error={false}
              errorMessage={""}
            />{" "}
            <GroupField
              label={""}
              type={"text"}
              placeholder={"Shipper's Account Number"}
              name={"accountNumber"}
              value={data.shipper.accountNumber || ""}
              onChange={handleShipperChange}
              error={false}
              errorMessage={""}
            />
            <GroupField
              label={""}
              type={"textarea"}
              placeholder={"Company Address"}
              name={"companyAddress"}
              value={data.shipper.companyAddress}
              onChange={handleShipperChange}
              error={false}
              errorMessage={""}
            />
          </div>
          <div className="flex flex-col gap-2">
            <GroupField
              label={"Consignee*"}
              type={"text"}
              placeholder={"Company Name"}
              name={"companyName"}
              value={data.consignee.companyName}
              onChange={handleConsigneeChange}
              error={false}
              errorMessage={""}
            />{" "}
            <GroupField
              label={""}
              type={"text"}
              placeholder={"Consignee's Account Number"}
              name={"accountNumber"}
              value={data.consignee.accountNumber || ""}
              onChange={handleConsigneeChange}
              error={false}
              errorMessage={""}
            />
            <GroupField
              label={""}
              type={"textarea"}
              placeholder={"Company Address"}
              name={"companyAddress"}
              value={data.consignee.companyAddress}
              onChange={handleConsigneeChange}
              error={false}
              errorMessage={""}
            />
          </div>
        </div>
        <div className="border border-grey-ab-100" />
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <GroupField
              label={"Issuing Carrier's Agent Name and Address"}
              type={"text"}
              placeholder={"Company Name"}
              name={"companyName"}
              value={data.carrierAgent.companyName}
              onChange={handleCarrierAgentChange}
              error={false}
              errorMessage={""}
            />{" "}
            <GroupField
              label={""}
              type={"textarea"}
              placeholder={"Company Address"}
              name={"companyAddress"}
              value={data.carrierAgent.companyAddress}
              onChange={handleCarrierAgentChange}
              error={false}
              errorMessage={""}
            />
          </div>
          <div className="flex flex-col gap-2">
            <GroupField
              label={"Notify Party"}
              type={"text"}
              placeholder={"Company Name"}
              name={"companyName"}
              value={data.notifyParty.companyName || ""}
              onChange={handleNotifyPartyChange}
              error={false}
              errorMessage={""}
            />{" "}
            <GroupField
              label={""}
              type={"textarea"}
              placeholder={"Company Address"}
              name={"companyAddress"}
              value={data.notifyParty.companyAddress || ""}
              onChange={handleNotifyPartyChange}
              error={false}
              errorMessage={""}
            />
          </div>
        </div>
        <div className="border border-grey-ab-100" />
        <div className="flex items-center flex-wrap gap-4 ">
          <GroupField
            label={"Agent's IATA Code"}
            type={"text"}
            placeholder={"Enter Agent's IATA Code"}
            name={"agentIATACode"}
            value={data.agentIATACode}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="basis-1/5"
          />{" "}
          <GroupField
            label={"Account No."}
            type={"text"}
            placeholder={"Enter Account No"}
            name={"accountNo"}
            value={data.accountNo}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="basis-1/4"
          />{" "}
          <GroupField
            label={
              "Airport of Departure (Addr. of First Carrier) and Requested Routing"
            }
            type={"text"}
            placeholder={"Enter Airport of Departure"}
            name={"airportDeparture"}
            value={data.airportDeparture}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="flex-grow"
          />{" "}
          <GroupField
            label={"Reference Number"}
            type={"text"}
            placeholder={"Enter Reference Number"}
            name={"referenceNumber"}
            value={data.referenceNumber}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="basis-1/5"
          />{" "}
          <GroupField
            label={"Optional Shipping Information"}
            type={"text"}
            placeholder={"Enter Optional Shipping Information"}
            name={"optionalShippingInfo"}
            value={data.optionalShippingInfo}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="basis-1/4"
          />{" "}
          <GroupField
            label={"Accounting Information"}
            type={"text"}
            placeholder={"Enter Accounting Information"}
            name={"acountingInfo"}
            value={data.acountingInfo}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="flex-grow"
          />{" "}
        </div>{" "}
        <div className="border border-grey-ab-100" />
        <div className="flex items-center flex-wrap gap-4 ">
          <GroupField
            label={"To"}
            type={"text"}
            placeholder={"Enter Code"}
            name={"to"}
            value={data.to}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="basis-1/4"
          />{" "}
          <GroupField
            label={"By First Carrier"}
            type={"text"}
            placeholder={"Enter First Carrier"}
            name={"byCarrier"}
            value={data.byCarrier}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="basis-1/4"
          />{" "}
          <GroupField
            label={"Routing & Destination"}
            type={"text"}
            placeholder={"Enter Routing & Destination"}
            name={"routingAndDestination"}
            value={data.routingAndDestination}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="flex-grow"
          />{" "}
          <GroupField
            label={"To"}
            type={"text"}
            placeholder={"Enter Code"}
            name={"secondTo"}
            value={data.secondTo}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />{" "}
          <GroupField
            label={"by"}
            type={"text"}
            placeholder={"Enter Code"}
            name={"secondBy"}
            value={data.secondBy}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />{" "}
          <GroupField
            label={"To"}
            type={"text"}
            placeholder={"Enter Code"}
            name={"thirdTo"}
            value={data.thirdTo}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />{" "}
          <GroupField
            label={"by"}
            type={"text"}
            placeholder={"Enter Code"}
            name={"thirdBy"}
            value={data.thirdBy}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />{" "}
        </div>{" "}
        <div className="border border-grey-ab-100" />
        <div className="grid grid-cols-4 gap-4">
          <GroupField
            label={"Currency"}
            type={"text"}
            placeholder={"Enter Currency"}
            name={"currency"}
            value={data.currency}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />{" "}
          <GroupField
            label={"CHGS CODE"}
            type={"text"}
            placeholder={"Enter Code"}
            name={"CHGS_Code"}
            value={data.CHGS_Code}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />{" "}
          <GroupField
            label={"Declared Value for Carriage"}
            type={"text"}
            placeholder={"Enter Declared Value"}
            name={"declaredValueForCarriage"}
            value={data.declaredValueForCarriage}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />{" "}
          <GroupField
            label={"Declared Value for Customs"}
            type={"text"}
            placeholder={"Enter Declared Value"}
            name={"declaredValueForCustoms"}
            value={data.declaredValueForCustoms}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />{" "}
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <p className="font-semibold">WT/VAT</p>
            <div className="flex items-center gap-3">
              <GroupField
                label={"PPT"}
                type={"radio"}
                placeholder={"Enter Declared Value"}
                name={"WT_VAT"}
                value={"PPT"}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                parentStyle="w-fit"
                checked={data.WT_VAT === "PPT" ? true : false}
                inputStyle="flex-row-reverse cursor-pointer"
              />{" "}
              <GroupField
                label={"COL"}
                type={"radio"}
                placeholder={"Enter Declared Value"}
                name={"WT_VAT"}
                value={"COL"}
                onChange={handleChange}
                error={false}
                checked={data.WT_VAT === "COL" ? true : false}
                errorMessage={""}
                parentStyle="w-fit "
                inputStyle="flex-row-reverse cursor-pointer"
              />{" "}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Others</p>
            <div className="flex items-center gap-3">
              <GroupField
                label={"PPT"}
                type={"radio"}
                placeholder={"Enter Declared Value"}
                name={"others"}
                value={"PPT"}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                parentStyle="w-fit"
                checked={data.others === "PPT"}
                inputStyle="flex-row-reverse cursor-pointer"
              />{" "}
              <GroupField
                label={"COL"}
                type={"radio"}
                placeholder={"Enter Declared Value"}
                name={"others"}
                value={"COL"}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                checked={data.others === "COL"}
                parentStyle="w-fit "
                inputStyle="flex-row-reverse cursor-pointer"
              />{" "}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <GroupField
            label={"Airport of Destination"}
            type={"text"}
            placeholder={"Enter Airport of Destination"}
            name={"airportDestination"}
            value={data.airportDestination}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />
          <div className="flex flex-col gap-2">
            <p>Requested Flight/Date</p>
            <div className="flex items-center gap-4">
              <GroupField
                label={""}
                type={"text"}
                placeholder={"Enter Flight/Date"}
                name={"requestedFlightDate"}
                value={data.requestedFlightDate?.[0] || ""}
                onChange={(e) => handleChangeRequestedDate(e, 0)}
                error={false}
                errorMessage={""}
              />{" "}
              <GroupField
                label={""}
                type={"text"}
                placeholder={"Enter Flight/Date"}
                name={"requestedFlightDate"}
                value={data.requestedFlightDate?.[1] || ""}
                onChange={(e) => handleChangeRequestedDate(e, 1)}
                error={false}
                errorMessage={""}
              />{" "}
            </div>
          </div>
          <GroupField
            label={"Amount of Insurance"}
            type={"number"}
            placeholder={"Enter Amount"}
            name={"amountOfInsurance"}
            value={data.amountOfInsurance}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />{" "}
        </div>
        <div className="border border-grey-ab-100 " />
        <div className="flex items-center gap-4">
          <GroupField
            label={"Handling Information"}
            type={"text"}
            placeholder={"Enter Handling Information"}
            name={"handlingInfo"}
            value={data.handlingInfo}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="basis-2/3"
          />{" "}
          <GroupField
            label={"x"}
            type={"text"}
            placeholder={"Enter Code"}
            name={"x"}
            value={data.x}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="flex-grow"
          />{" "}
        </div>
        <div className="flex flex-col gap-4">
          {data.cargoDetails.length > 0 &&
            data.cargoDetails.map((cargo, index) => (
              <div className="rounded-sm bg-grey-aw-100" key={index}>
                <div className="p-4 flex justify-between border-b items-center border-grey-ab-100">
                  <p className="text-grey-ab-800 font-semibold ">
                    Nature of Goods
                  </p>
                  <div className="flex items-center gap-4">
                    <div onClick={() => handleRemoveCargo(index)}>
                      <GreyButton
                        label={"Remove"}
                        size={"m"}
                        variant={""}
                        leftIcon={<CrossIcon size={16} />}
                      />
                    </div>

                    <div onClick={() => handleDuplicateCargo(index)}>
                      <BlackButton
                        label={"Duplicate"}
                        size={"m"}
                        variant={"link"}
                        leftIcon={<DuplicateIcon size={16} />}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-4 flex flex-col  gap-4">
                  <div className="flex flex-col gap-3">
                    <p className="text-grey-ab-800 font-semibold ">
                      Goods Details{" "}
                    </p>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <GroupField
                        label={"No. of Pieces RCP"}
                        type={"text"}
                        placeholder={"Enter Pieces RCP"}
                        name={"noOfPiecesRCP"}
                        value={cargo.noOfPiecesRCP}
                        onChange={(e) => handleChangeCargoDetails(e, index)}
                        error={false}
                        errorMessage={""}
                      />{" "}
                      <div className="flex items-end gap-2">
                        <GroupField
                          label={"Gross Weight"}
                          type={"text"}
                          placeholder={"Enter Gross Weight"}
                          name={"grossWeight"}
                          value={cargo.grossWeight}
                          onChange={(e) => handleChangeCargoDetails(e, index)}
                          error={false}
                          errorMessage={""}
                        />{" "}
                        <GroupField
                          label={""}
                          type={"select"}
                          placeholder={"choose"}
                          name={"grossWeightUnit"}
                          value={cargo.grossWeightUnit}
                          onChange={(e) => handleChangeCargoDetails(e, index)}
                          error={false}
                          errorMessage={""}
                          options={[{ label: "KGS", value: "KGS" }]}
                          parentStyle="w-[100px] shrink-0"
                        />{" "}
                      </div>
                      <GroupField
                        label={"Rate Class"}
                        type={"text"}
                        placeholder={"Enter Rate Class"}
                        name={"rateClass"}
                        value={cargo.rateClass}
                        onChange={(e) => handleChangeCargoDetails(e, index)}
                        error={false}
                        errorMessage={""}
                      />{" "}
                      <GroupField
                        label={"Commodity Item No"}
                        type={"text"}
                        placeholder={"Enter Commodity"}
                        name={"commodityItemNo"}
                        value={cargo.commodityItemNo}
                        onChange={(e) => handleChangeCargoDetails(e, index)}
                        error={false}
                        errorMessage={""}
                      />{" "}
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <GroupField
                      label={"Chargeable Weight"}
                      type={"text"}
                      placeholder={"Enter Weight"}
                      name={"chargeableWeight"}
                      value={cargo.chargeableWeight}
                      onChange={(e) => handleChangeCargoDetails(e, index)}
                      error={false}
                      errorMessage={""}
                    />{" "}
                    <GroupField
                      label={"Rate"}
                      type={"text"}
                      placeholder={"Enter Rate"}
                      name={"rate"}
                      value={cargo.rate}
                      onChange={(e) => handleChangeCargoDetails(e, index)}
                      error={false}
                      errorMessage={""}
                    />{" "}
                    <GroupField
                      label={"Charge"}
                      type={"text"}
                      placeholder={"Enter Charge"}
                      name={"charge"}
                      value={cargo.charge}
                      onChange={(e) => handleChangeCargoDetails(e, index)}
                      error={false}
                      errorMessage={""}
                    />{" "}
                    <GroupField
                      label={"Total"}
                      type={"text"}
                      placeholder={"Enter Total"}
                      name={"total"}
                      value={cargo.total}
                      onChange={(e) => handleChangeCargoDetails(e, index)}
                      error={false}
                      errorMessage={""}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <GroupField
                      label={"Nature and Quantity of Goods"}
                      type={"text"}
                      placeholder={"Enter Nature and Quantity of Goods."}
                      name={"natureAndGoodsOfQuantity"}
                      value={cargo.natureAndGoodsOfQuantity}
                      onChange={(e) => handleChangeCargoDetails(e, index)}
                      error={false}
                      errorMessage={""}
                    />{" "}
                    <GroupField
                      label={"Dimensions or Volume"}
                      type={"text"}
                      placeholder={"Enter Dimensions or Volume"}
                      name={"dimensionOrValue"}
                      value={cargo.dimensionOrValue}
                      onChange={(e) => handleChangeCargoDetails(e, index)}
                      error={false}
                      errorMessage={""}
                    />
                  </div>
                </div>
              </div>
            ))}

          <div className=" w-fit cursor-pointer " onClick={handleAddMore}>
            <NeutralBlueButton
              label={"Add More"}
              size={"m"}
              variant={"outline"}
              leftIcon={<AddIcon color="#0091ff" size={16} />}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <GroupField
            label={"Total Gross Weight"}
            type={"text"}
            placeholder={"Enter Total Gross Weight"}
            name={"totalGrossWeight"}
            value={data.totalGrossWeight}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={"CBM"}
            type={"text"}
            placeholder={"Enter Dimensions or Volume"}
            name={"CBM"}
            value={data.CBM}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />
        </div>
        <div className="border border-grey-ab-100 " />
        <div className="flex gap-6">
          <div className="flex-grow">
            <table className="w-full  h-full ">
              <thead className="bg-grey-100 text-start">
                <tr className="border">
                  <th className="px-2 py-4 text-start">SLNO</th>
                  <th className="px-2 py-4 text-start ">Heading</th>
                  <th className="px-2 py-4 text-start min-w-[200px]">
                    Prepaid/Collect
                  </th>
                  <th className="px-2 py-4 text-start min-w-[150px] ">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {" "}
                <tr className="border">
                  <td className="py-4  text-center">1</td>
                  <td>Weight Charge</td>
                  <td className="px-2">
                    <GroupField
                      label={""}
                      type={"select"}
                      placeholder={"choose"}
                      name={"weightChargeStatus"}
                      value={data.weightChargeStatus}
                      onChange={handleChange}
                      error={false}
                      options={[
                        { label: "prepaid", value: "prepaid" },
                        { label: "collected", value: "collected" },
                      ]}
                      errorMessage={""}
                    />
                  </td>
                  <td className="px-2">
                    <GroupField
                      label={""}
                      type={"number"}
                      placeholder={"Enter"}
                      value={data.weightChargeAmount}
                      name={"weightChargeAmount"}
                      onChange={handleChange}
                      error={false}
                      errorMessage={""}
                    />
                  </td>
                </tr>{" "}
                <tr className="border">
                  <td className="py-4  text-center">2</td>
                  <td>Valuation Charge</td>
                  <td className="px-2">
                    <GroupField
                      label={""}
                      type={"select"}
                      placeholder={"choose"}
                      name={"valuationChargeStatus"}
                      value={data.valuationChargeStatus}
                      onChange={handleChange}
                      error={false}
                      options={[
                        { label: "prepaid", value: "prepaid" },
                        { label: "collected", value: "collected" },
                      ]}
                      errorMessage={""}
                    />
                  </td>
                  <td className="px-2">
                    <GroupField
                      label={""}
                      type={"number"}
                      placeholder={"Enter"}
                      name={"valuationChargeAmount"}
                      value={data.valuationChargeAmount}
                      onChange={handleChange}
                      error={false}
                      errorMessage={""}
                    />
                  </td>
                </tr>{" "}
                <tr className="border">
                  <td className="py-4  text-center">3</td>
                  <td>Tax</td>
                  <td className="px-2">
                    <GroupField
                      label={""}
                      type={"select"}
                      placeholder={"choose"}
                      name={"taxStatus"}
                      value={data.taxStatus}
                      onChange={handleChange}
                      error={false}
                      options={[
                        { label: "prepaid", value: "prepaid" },
                        { label: "collected", value: "collected" },
                      ]}
                      errorMessage={""}
                    />
                  </td>
                  <td className="px-2">
                    <GroupField
                      label={""}
                      type={"number"}
                      placeholder={"Enter"}
                      name={"taxAmount"}
                      value={data.taxAmount}
                      onChange={handleChange}
                      error={false}
                      errorMessage={""}
                    />
                  </td>
                </tr>{" "}
                <tr className="border">
                  <td className="py-4  text-center">4</td>
                  <td>Total Other Charges Due Agent</td>
                  <td className="px-2">
                    <GroupField
                      label={""}
                      type={"select"}
                      placeholder={"choose"}
                      name={"agentOtherChargesDueStatus"}
                      value={data.agentOtherChargesDueStatus}
                      onChange={handleChange}
                      error={false}
                      options={[
                        { label: "prepaid", value: "prepaid" },
                        { label: "collected", value: "collected" },
                      ]}
                      errorMessage={""}
                    />
                  </td>
                  <td className="px-2">
                    <GroupField
                      label={""}
                      type={"number"}
                      placeholder={"Enter"}
                      name={"agentOtherChargesDueAmount"}
                      value={data.agentOtherChargesDueAmount}
                      onChange={handleChange}
                      error={false}
                      errorMessage={""}
                    />
                  </td>
                </tr>{" "}
                <tr className="border">
                  <td className="py-4  text-center">5</td>
                  <td>Total Other Charges Due Carrier</td>
                  <td className="px-2">
                    <GroupField
                      label={""}
                      type={"select"}
                      placeholder={"choose"}
                      name={"carrierOtherChargesDueStatus"}
                      value={data.carrierOtherChargesDueStatus}
                      onChange={handleChange}
                      error={false}
                      options={[
                        { label: "prepaid", value: "prepaid" },
                        { label: "collected", value: "collected" },
                      ]}
                      errorMessage={""}
                    />
                  </td>
                  <td className="px-2 ">
                    <GroupField
                      label={""}
                      type={"number"}
                      placeholder={"Enter"}
                      name={"carrierOtherChargesDueAmount"}
                      value={data.carrierOtherChargesDueAmount}
                      onChange={handleChange}
                      error={false}
                      errorMessage={""}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-[35%] flex flex-col gap-4">
            <GroupField
              label={"Enter Currency Conversion Rates"}
              type={"text"}
              placeholder={"Enter Currency Conversion Rates"}
              name={"currencyConversionRates"}
              value={data.currencyConversionRates}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />{" "}
            <GroupField
              label={"CC Charges in Dest. Currency"}
              type={"text"}
              placeholder={"Enter CC Charges in Dest. Currency"}
              name={"CC_ChargesInDestination"}
              value={data.CC_ChargesInDestination}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />{" "}
            <GroupField
              label={"For Carrier's use only at Destination"}
              type={"text"}
              placeholder={"Enter For Carrier's use only at Destination"}
              name={"forCarrierUseOnlyInDestination"}
              value={data.forCarrierUseOnlyInDestination}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />{" "}
            <GroupField
              label={"Charges at Destination"}
              type={"text"}
              placeholder={"Enter Charges at Destination"}
              name={"chargesAtDestination"}
              value={data.chargesAtDestination}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />{" "}
            <GroupField
              label={"Total Collect Charges"}
              type={"text"}
              placeholder={"Enter Total Collect Charges"}
              name={"totalCollectCharges"}
              value={data.totalCollectCharges}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />{" "}
          </div>
        </div>
        <div className="border border-grey-ab-50 " />
        <div className="grid grid-cols-2 gap-4">
          {" "}
          <GroupField
            label={"Other Charges"}
            type={"text"}
            placeholder={"Enter Other Charges"}
            name={"otherCharges"}
            value={data.otherCharges}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />{" "}
          <GroupField
            label={"Signature of Shipper or his Agent"}
            type={"text"}
            placeholder={"Enter Signature of Shipper or his Agent"}
            name={"signatureOfShipper"}
            value={data.signatureOfShipper}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />{" "}
        </div>
        <div className="border border-grey-ab-50 " />
        <div className="grid grid-cols-3 gap-4">
          {" "}
          <GroupField
            label={"Executed on (Date)"}
            type={"date"}
            placeholder={"Enter Executed on (Date) "}
            name={"executedDate"}
            value={data.executedDate}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />{" "}
          <GroupField
            label={"at (Place)"}
            type={"text"}
            placeholder={"Enter Place"}
            name={"executedPlace"}
            value={data.executedPlace}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />{" "}
          <GroupField
            label={"Signature of Issuing Carrier or its Agent"}
            type={"text"}
            placeholder={"Enter Signature of Issuing Carrier or its Agent"}
            name={"signatureOfIssuingCarrier"}
            value={data.signatureOfIssuingCarrier}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />{" "}
        </div>
      </div>
      {/* actions */}
      <div className="flex justify-end gap-4 items-center">
        <div className="w-fit cursor-pointer" onClick={() => navigate(-1)}>
          <PrimaryButton label={"Cancel"} size={"xl"} variant={"outline"} />
        </div>
        <div className="w-fit cursor-pointer" onClick={() => console.log(data)}>
          <PrimaryButton label={"Save BL Draft"} size={"xl"} variant={""} />
        </div>
      </div>
    </div>
  );
};

export default CreateAirBl;
