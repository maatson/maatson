import React, { ChangeEvent, useState } from "react";
import GroupField from "../../../../components/groupField/GroupField";
import {
  AccountIcon,
  CrossIcon,
  InvoiceIcon,
} from "../../../../components/icons/Icons";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";

interface DataProps {
  id: string | number;
  invoiceCollectStatus: string;
  carrierInvoiceDocument: File | null;
}
interface AddAgentCreditPaySlipProps {
  onClose: () => void;
  onSave: (data: DataProps) => void;
  defaultCreditNoteInvoiceNumbers: string[];
}

const AddAgentCreditPaySlip: React.FC<AddAgentCreditPaySlipProps> = ({
  onClose,
  onSave,
  defaultCreditNoteInvoiceNumbers,
}) => {
  const [data, setData] = useState({
    creditNoteInvoiceNumbers: defaultCreditNoteInvoiceNumbers || [],
    agentName: "",
    remittanceRef: "",
    bankName: "",
    paymentMethod: "",
    totalAmount: "",
    bankCharges: "",
    otherCharges: "",
    agentSOACreditAmount: 50000,
    totalAmountReceived: "",
    remarks: "",
  });

  // const [data, setData] = useState<DataProps>({
  //   id: Date.now(),
  //   invoiceCollectStatus: "",
  //   carrierInvoiceDocument: null as File | null,
  // });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "beneficiaryName" || name === "bankName") {
      setData((prev) => ({ ...prev, [name]: value.toUpperCase() }));
    } else {
      setData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    //   onSave(data);
  };
  return (
    <div className="flex flex-col gap-6 px-8 py-6 bg-grey-aw-50 rounded-xs shadow-lg max-w-[800px] max-h-[600px] overflow-auto custom-scrollbar">
      <div className="flex justify-between">
        <p className="text-h5 font-bold text-grey-ab-900">
          Agent SOA Credit Slip Create
        </p>
        <div
          className="p-[6px] rounded-xs bg-grey-ab-50 cursor-pointer h-fit"
          onClick={onClose}
        >
          <CrossIcon size={16}/>
        </div>
      </div>
      <GroupField
        label={"Credit Note Invoice Number"}
        type={"select"}
        placeholder={"Enter Credit Note Invoice Number"}
        name={"creditNoteInvoiceNumbers"}
        value={data.creditNoteInvoiceNumbers}
        onChange={handleChange}
        error={false}
        options={defaultCreditNoteInvoiceNumbers.map((item) => ({
          label: item,
          value: item,
        }))}
        isMulti
        errorMessage={""}
        leftIcon={<InvoiceIcon color="#2C398F" />}
        parentStyle="w-full"
      />
      <div className="flex gap-4">
        <GroupField
          label={"Agent Name*"}
          type={""}
          placeholder={"Enter Agent Name"}
          name={"agentName"}
          value={data.agentName}
          onChange={handleChange}
          error={false}
          errorMessage={""}
          parentStyle="w-full"
        />
        <GroupField
          label={"Remittance Ref "}
          type={""}
          placeholder={"Enter Remittance Ref"}
          name={"remittanceRef"}
          value={data.remittanceRef}
          onChange={handleChange}
          error={false}
          errorMessage={""}
          parentStyle="w-full"
        />
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-lg font-bold text-grey-ab">Paid Bank Details</p>
        <div className="flex gap-4">
          <GroupField
            label={"Bank Name"}
            type={"select"}
            placeholder={"Choose Bank"}
            name={"bankName"}
            value={data.bankName}
            onChange={handleChange}
            leftIcon={<AccountIcon color="#2C398F" />}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />
          <GroupField
            label={"Payment Method"}
            type={"select"}
            placeholder={"Choose Payment Method"}
            name={"paymentMethod"}
            value={data.paymentMethod}
            onChange={handleChange}
            leftIcon={<AccountIcon color="#2C398F" />}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 p-3 bg-grey-100">
        <div className="flex gap-4">
          <GroupField
            label={"Total Amount*"}
            type={""}
            placeholder={"Enter Total Amount"}
            name={"totalAmount"}
            value={data.totalAmount}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />
          <GroupField
            label={"Bank Charges*"}
            type={""}
            placeholder={"Enter Bank Charges"}
            name={"otherCharges"}
            value={data.otherCharges}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />
          <GroupField
            label={"Other Charges"}
            type={""}
            placeholder={"Enter Other Charges"}
            name={"bankCharges"}
            value={data.bankCharges}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-2 py-1">
            <p className="text-sm text-grey-ab-400">Agent SOA Credit Amount</p>
            <p className="text-lg text-grey-ab-800 font-bold">
              {data.agentSOACreditAmount.toLocaleString("en-IN")}
            </p>
          </div>
          <div className="flex flex-col gap-2 py-1">
            <p className="text-sm text-grey-ab-400">Total Amount Received</p>
            <p className="text-lg text-success-700 font-bold">
              {(
                Number(data.totalAmount) +
                Number(data.bankCharges) +
                Number(data.otherCharges)
              ).toLocaleString("en-IN")}
            </p>
          </div>
        </div>
      </div>
      <GroupField
        label={"Remarks"}
        type={"textarea"}
        placeholder={"Write"}
        name={"remarks"}
        value={data.remarks}
        onChange={handleChange}
        error={false}
        errorMessage={""}
        parentStyle="w-full"
      />

      <div className="flex justify-end gap-4">
        <div onClick={onClose}>
          <PrimaryButton label={"Cancel"} size={"l"} variant={"link"} />
        </div>
        <div onClick={handleSave}>
          <PrimaryButton
            label={"Save Credit Slip"}
            size={"l"}
            variant={"primary"}
          />
        </div>
      </div>
    </div>
  );
};

export default AddAgentCreditPaySlip;
