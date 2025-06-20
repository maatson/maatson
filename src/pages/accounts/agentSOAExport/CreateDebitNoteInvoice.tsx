import React, { useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import GroupField from "../../../components/groupField/GroupField";
import BlackButton from "../../../components/buttons/BlackButton";
import {
  AddIcon,
  ContainerIcon,
  DeleteIcon,
  EditIcon,
} from "../../../components/icons/Icons";
import { NavLink, useParams } from "react-router-dom";
import AccountsModel from "../components/AccountsModel";
import { useNotify } from "../../../hooks/useNotify";

const CreateDebitNoteInvoice: React.FC = () => {
  const { id } = useParams();
  const [isPaymentDetails, setIsPaymentDetails] = useState<boolean>(true);
  const { showToast } = useNotify();
  const [data, setData] = useState({
    agentName: "",
    agentDebitReferenceNumber: "",
    agentGSTIN: "",
    containerType: "",
    quantityOfContainer: "",
    grossWeight: "",
    portOfLoading: "",
    portOfDischarge: "",
    finalDestination: "",
    vesselName: "",
    voyageNumber: "",
    arrivalDate: "",
    etd_atd: "",
    shippingBillNumber: "",
    exchangeRate: "",
    tableDetails: [
      {
        description: "",
        sacCode: "",
        taxableOrNot: "",
        currency: "",
        quantity: "",
        unit: "",
        unitPrice: "",
        amount: "",
      },
    ],
    bankName: "",
    paymentInstruction:
      "All payments must be made via NEFT or RTGS only. No other modes of payment will be accepted.",
    notes:
      "Payment not settled as per agreed terms will attract interest @ 18% p.a This is a computer generated document, signature not required.",
    panNo: "AARCM5896Q",
    gstin: "33AARCM5896Q1Z9",
    remarks: "",
  });
  const [tempData, setTempData] = useState({
    agentName: "",
    agentDebitReferenceNumber: "",
    agentGSTIN: "",
    containerType: "",
    quantityOfContainer: "",
    grossWeight: "",
    portOfLoading: "",
    portOfDischarge: "",
    finalDestination: "",
    vesselName: "",
    voyageNumber: "",
    arrivalDate: "",
    etd_atd: "",
    shippingBillNumber: "",
    exchangeRate: "",
    tableDetails: [
      {
        description: "",
        sacCode: "",
        taxableOrNot: "",
        currency: "",
        quantity: "",
        unit: "",
        unitPrice: "",
        amount: "",
      },
    ],
    bankName: "",
    paymentInstruction:
      "All payments must be made via NEFT or RTGS only. No other modes of payment will be accepted.",
    notes:
      "Payment not settled as per agreed terms will attract interest @ 18% p.a This is a computer generated document, signature not required.",
    panNo: "AARCM5896Q",
    gstin: "33AARCM5896Q1Z9",
    remarks: "",
  });

  const handleAddMore = () => {
    const addData = {
      description: "",
      sacCode: "",
      taxableOrNot: "",
      currency: "",
      quantity: "",
      unit: "",
      unitPrice: "",
      amount: "",
    };
    setData((prev) => ({
      ...prev,
      tableDetails: [...prev.tableDetails, addData],
    }));
  };

  const handleDelete = (index: number) => {
    if (data.tableDetails.length > 1) {
      setData((prev) => ({
        ...prev,
        tableDetails: prev.tableDetails.filter((_, i) => i !== index),
      }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTempDataChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setTempData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTableDetailsChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    index: number
  ) => {
    const { name, value } = e.target;
    setData((prev) => {
      const newcargo = [...prev.tableDetails];
      newcargo[index] = { ...newcargo[index], [name]: value };
      return { ...prev, tableDetails: newcargo };
    });
  };
  return (
    <div className="flex flex-col gap-6 px-8 py-6 bg-grey-aw-50 rounded-xs shadow-lg">
      <div className="flex justify-between">
        <AccountsModel label={"Booking ID :"} value={"123dd4545"} />
        <AccountsModel
          label={"Bill of Lading Number :"}
          value={"mmi1234501-A"}
        />
      </div>

      <GroupField
        label={"Agent Name"}
        type={""}
        placeholder={"Enter Agent Name"}
        name={"agentName"}
        value={data.agentName}
        onChange={handleChange}
        error={false}
        errorMessage={""}
        parentStyle="w-[40%]"
      />

      {/* main details */}
      <div className="flex flex-col gap-6">
        <div className="flex gap-4 max-w-[81%]">
          <GroupField
            label={"Agent Debit Reference Number"}
            type={""}
            placeholder={"Enter Agent Debit Reference Number"}
            name={"agentDebitReferenceNumber"}
            value={data.agentDebitReferenceNumber}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />
          <GroupField
            label={"GSTIN"}
            type={""}
            placeholder={"Enter GSTIN"}
            name={"agentGSTIN"}
            value={data.agentGSTIN}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />
        </div>

        <div className="flex gap-4 max-w-[81%]">
          <div className="flex w-full gap-4">
            <GroupField
              label={"No of Containers *"}
              type={"select"}
              placeholder={"Choose Container Type"}
              name={"containerType"}
              value={data.containerType}
              options={[
                { value: "20'feet", label: "20 feet Dry Container" },
                { value: "40'feet", label: "40 feet Dry Container" },
                { value: "60'feet", label: "60 feet Dry Container" },
              ]}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="max-w-[60%] min-w-[60%]"
            />
            <GroupField
              label={""}
              type={""}
              placeholder={"Enter Quantity"}
              name={"quantityOfContainer"}
              value={data.quantityOfContainer}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="w-[40%] justify-end"
            />
          </div>
          <GroupField
            label={"Gross Weight *"}
            type={""}
            placeholder={"Enter Gross Weight"}
            name={"grossWeight"}
            value={data.grossWeight}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />
        </div>

        <div className="border-t border-t-grey-ab-100"></div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4 ">
            <GroupField
              label={"Port of Loading *"}
              type={""}
              placeholder={"Enter Port of Loading"}
              name={"portOfLoading"}
              value={data.portOfLoading}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="w-full"
            />
            <GroupField
              label={"Port of Discharge *"}
              type={""}
              placeholder={"Enter Port of Discharge"}
              name={"portOfDischarge"}
              value={data.portOfDischarge}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="w-full"
            />
            <GroupField
              label={"Final Destination *"}
              type={""}
              placeholder={"Enter Final Destination"}
              name={"finalDestination"}
              value={data.finalDestination}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="w-full"
            />
          </div>

          <div className="flex gap-4 ">
            <GroupField
              label={"Vessel Name *"}
              type={""}
              placeholder={"Enter Vessel Name"}
              name={"vesselName"}
              value={data.vesselName}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="w-full"
            />
            <GroupField
              label={"Voyage No *"}
              type={""}
              placeholder={"Enter Voyage No"}
              name={"voyageNumber"}
              value={data.voyageNumber}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="w-full"
            />
            <div className="w-full flex gap-4">
              <GroupField
                label={"Arrival Date * "}
                type={"date"}
                placeholder={"Enter Arrival Date"}
                name={"arrivalDate"}
                value={data.arrivalDate}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                parentStyle="w-full"
              />
              <GroupField
                label={""}
                type={"select"}
                placeholder={"ETD"}
                name={"etd_atd"}
                value={data.etd_atd}
                options={[
                  { value: "etd", label: "ETD" },
                  { value: "atd", label: "ATD" },
                ]}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                parentStyle="w-[50%] justify-end"
              />
            </div>
          </div>

          <div className="flex gap-4 max-w-[81%]">
            <GroupField
              label={"Shipping Bill No *"}
              type={""}
              placeholder={"Enter Shipping Bill No "}
              name={"shippingBillNumber"}
              value={data.shippingBillNumber}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="w-full"
            />
            <GroupField
              label={"Exchange Rate"}
              type={""}
              placeholder={"Enter Exchange Rate"}
              name={"exchangeRate"}
              value={data.exchangeRate}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="w-full"
            />
          </div>
        </div>

        {/*  table */}
        <div className=" shadow-lg rounded-xs w-full">
          {/* SCROLLABLE WRAPPER */}
          <div className="overflow-auto custom-scrollbar max-w-full">
            <table
              cellPadding={10}
              className="min-w-[1200px] w-full table-auto"
            >
              <thead className="bg-grey-100 border-b border-b-grey-ab-50 font-semibold text-grey-ab-600">
                <tr>
                  <th className="py-2 w-[300px] text-center">DESCRIPTION</th>
                  <th className="w-[200px] text-center">SAC code</th>
                  <th className="w-[150px] text-center">TXB / NTX</th>
                  <th className="w-[150px] text-center">Currency</th>
                  <th className="w-[100px] text-center">Qty</th>
                  <th className="w-[120px] text-center">Unit</th>
                  <th className="w-[150px] text-center">Unit Price</th>
                  <th className="w-[150px] text-center">Amount</th>
                  <th className="w-[100px] text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.tableDetails.map((item, index) => (
                  <tr key={index} className="border-b border-b-grey-ab-50">
                    <td className="py-3 ">
                      <GroupField
                        label={""}
                        type={""}
                        placeholder={""}
                        name={`description`}
                        value={item.description}
                        onChange={(e) => handleTableDetailsChange(e, index)}
                        error={false}
                        errorMessage={""}
                      />
                    </td>
                    <td>
                      <GroupField
                        label={""}
                        type={""}
                        placeholder={""}
                        name={`sacCode`}
                        value={item.sacCode}
                        onChange={(e) => handleTableDetailsChange(e, index)}
                        error={false}
                        errorMessage={""}
                      />
                    </td>
                    <td className="max-w-[120px] min-w-[120px]">
                      <GroupField
                        label={""}
                        type={"select"}
                        placeholder={"TXB"}
                        name={`taxableOrNot`}
                        value={item.taxableOrNot}
                        options={[
                          { label: "TXB (Taxable)", value: "txb" },
                          { label: "NTX (Non-Taxable)", value: "nonTxb" },
                        ]}
                        optionFontSize="12px"
                        onChange={(e) => handleTableDetailsChange(e, index)}
                        error={false}
                        errorMessage={""}
                        parentStyle=""
                      />
                    </td>
                    <td className="max-w-[120px] min-w-[120px]">
                      <GroupField
                        label={""}
                        type={"select"}
                        placeholder={"INR"}
                        name={`currency`}
                        value={item.currency}
                        options={[
                          { label: "INR", value: "inr" },
                          { label: "USD", value: "usd" },
                        ]}
                        onChange={(e) => handleTableDetailsChange(e, index)}
                        error={false}
                        errorMessage={""}
                        parentStyle="max-w-[140px] w-full"
                      />
                    </td>

                    {/* sdsd */}
                    <td>
                      <GroupField
                        label={""}
                        type={""}
                        placeholder={""}
                        name={`quantity`}
                        value={item.quantity}
                        onChange={(e) => handleTableDetailsChange(e, index)}
                        error={false}
                        errorMessage={""}
                      />
                    </td>
                    <td>
                      <GroupField
                        label={""}
                        type={""}
                        placeholder={""}
                        name={`unit`}
                        value={item.unit}
                        onChange={(e) => handleTableDetailsChange(e, index)}
                        error={false}
                        errorMessage={""}
                      />
                    </td>
                    <td>
                      <GroupField
                        label={""}
                        type={""}
                        placeholder={""}
                        name={`unitPrice`}
                        value={item.unitPrice}
                        onChange={(e) => handleTableDetailsChange(e, index)}
                        error={false}
                        errorMessage={""}
                      />
                    </td>
                    <td>
                      <GroupField
                        label={""}
                        type={""}
                        placeholder={""}
                        name={`amount`}
                        value={item.amount}
                        onChange={(e) => handleTableDetailsChange(e, index)}
                        error={false}
                        errorMessage={""}
                      />
                    </td>

                    {/* sdsds */}
                    <td>
                      <div className="flex justify-center">
                        <button
                          className="p-1 rounded-xs bg-error-50 cursor-pointer  disabled:cursor-not-allowed"
                          disabled={data.tableDetails.length === 1}
                          onClick={() => handleDelete(index)}
                        >
                          <DeleteIcon size={16} color="#810001" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Add More Button */}
            <div className="mx-4 my-3 w-fit" onClick={handleAddMore}>
              <BlackButton
                label={"Add More"}
                size={"s"}
                variant={"primary"}
                leftIcon={<AddIcon size={16} color="#ffffff" />}
              />
            </div>
          </div>
        </div>
      </div>

      {/* bank details */}
      <div className="flex flex-col gap-4 text-grey-ab ">
        <p className="text-lg font-bold">Bank Details</p>
        <div className="flex justify-between ">
          <GroupField
            label={"Bank Name"}
            type={"select"}
            placeholder={"Choose Bank Name"}
            name={"bankName"}
            value={data.bankName}
            options={[
              { value: "icci bank limited", label: "ICICI BANK LIMITED" },
              { value: "hbfc bank limited", label: "HDFC BANK LIMITED" },
            ]}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-[40%]"
          />

          {data.bankName !== "" && (
            <div className="flex flex-col gap-2 p-3 rounded-xs  bg-grey-100">
              <p className="text-lg text-grey-ab-800 font-bold">BANK DETAILS</p>
              <div className="flex flex-col gap-2">
                <AccountsModel
                  label={"Beneficiary Name"}
                  value={"MAATSON MARITIME INTL OPC PVT LTD"}
                  labelStyle="w-[130px]"
                />
                <AccountsModel
                  label={"Bank Name"}
                  value={data.bankName.toUpperCase()}
                  labelStyle="w-[130px]"
                />
                <AccountsModel
                  label={"Account No"}
                  value={"190205001960"}
                  labelStyle="w-[130px]"
                />
                <AccountsModel
                  label={"Branch No"}
                  value={"MADHAVARAM"}
                  labelStyle="w-[130px]"
                />
                <AccountsModel
                  label={"IFSC Code No "}
                  value={"ICIC0001902"}
                  labelStyle="w-[130px]"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* payment details and instructions */}
      {isPaymentDetails ? (
        <div className=" rounded-sm bg-grey-200 p-4 flex flex-col gap-4 ">
          <AccountsModel
            label={"Payment Instructions"}
            value={data.paymentInstruction}
            parentStyle="flex-col"
          />

          <div className="flex flex-col text-sm text-grey-ab-800 py-1 gap-1 ">
            <p className="font-bold">Note</p>
            {/* <ol className="list-decimal list-inside text-sm text-grey-ab-400">
            <li>{data.notes}</li>
          </ol> */}
            <p className="text-sm text-grey-ab-400">{data.notes}</p>
          </div>

          <div className="flex gap-4">
            <AccountsModel
              label={"PAN NO"}
              value={data.panNo}
              parentStyle="flex-col"
            />
            <AccountsModel
              label={" GSTIN"}
              value={data.gstin}
              parentStyle="flex-col"
            />
          </div>

          <div className="flex justify-end">
            <div
              onClick={() => {
                setTempData(data);
                setIsPaymentDetails(false);
              }}
            >
              <BlackButton
                label={"Edit Data"}
                size={"m"}
                variant={"primary"}
                leftIcon={<EditIcon size={16} color="#ffffff" />}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className=" rounded-sm bg-grey-200 p-4 flex flex-col gap-4 ">
          <GroupField
            label={"Payment Instructions"}
            type={""}
            placeholder={"Enter Payment Instructions"}
            name={"paymentInstruction"}
            value={tempData.paymentInstruction}
            onChange={handleTempDataChange}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={"Notes "}
            type={"textarea"}
            placeholder={"Enter Notes"}
            name={"notes"}
            value={tempData.notes}
            onChange={handleTempDataChange}
            error={false}
            errorMessage={""}
          />
          <div className="flex gap-4 w-full">
            <GroupField
              label={"PAN NO"}
              type={""}
              placeholder={"Enter Pan No"}
              name={"panNo"}
              value={tempData.panNo}
              onChange={handleTempDataChange}
              error={false}
              errorMessage={""}
              parentStyle="w-full"
            />
            <GroupField
              label={"GSTIN"}
              type={""}
              placeholder={"Enter GSTIN"}
              name={"gstin"}
              value={tempData.gstin}
              onChange={handleTempDataChange}
              error={false}
              errorMessage={""}
              parentStyle="w-full"
            />
          </div>

          <div className="flex gap-6 justify-end">
            <div
              onClick={() => {
                setTempData(data);
                setIsPaymentDetails(true);
              }}
            >
              <BlackButton label={"Cancel"} size={"m"} variant={"link"} />
            </div>
            <div
              onClick={() => {
                setData(tempData);
                setIsPaymentDetails(true);
                showToast("success", {
                  heading: "Data Saved",
                  message: "Your form instructions were saved successfully.",
                });
              }}
            >
              <BlackButton label={"Save Data"} size={"m"} variant={"primary"} />
            </div>
          </div>
        </div>
      )}

      <GroupField
        label={"Remarks"}
        type={"textarea"}
        placeholder={"Write"}
        name={"remarks"}
        value={data.remarks}
        onChange={handleChange}
        error={false}
        errorMessage={""}
      />

      {/* buttons */}
      <div className="flex justify-end gap-6">
        <NavLink to={`/accounts/agent-soa-export/view/${id}`}>
          <PrimaryButton label={"Cancel"} size={"l"} variant={"link"} />
        </NavLink>
        <PrimaryButton
          label={"Save Debit Note"}
          size={"l"}
          variant={"primary"}
        />
      </div>
    </div>
  );
};

export default CreateDebitNoteInvoice;
