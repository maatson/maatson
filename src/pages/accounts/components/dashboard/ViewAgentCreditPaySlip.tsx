import React, { useState } from "react";
import BlackButton from "../../../../components/buttons/BlackButton";
import {
  CrossIcon,
  DeleteIcon,
  DownloadIcon,
  EditIcon,
} from "../../../../components/icons/Icons";
import NeutralBlueButton from "../../../../components/buttons/NeutralBlueButton";
import ErrorButton from "../../../../components/buttons/ErrorButton";
import AccountsModel from "../../components/AccountsModel";
import BlueChip from "../../../../components/chips/BlueChip";

interface InitialDataProps {
  creditSlipNumber: string;
  remittanceRef: string;
  paidDate: string;
  creditNoteInvoiceNumbers: string[];
  agentName: string;
  agentAdress: string;
  phoneNumber: string;
  bankName: string;
  beneficiaryName: string;
  accountNumber: string;
  branchName: string;
  ifscCode: string;
  agentSOACreditAmount: number;
  totalAmount: number;
  bankCharges: number;
  otherCharges: number;
  paymentMethod: string;
  totalAmountReceived: number;
  remarks: string;
}

interface ViewAgentCreditPaySlipProps {
  onClose: () => void;
  onEdit: () => void;
  initialData: InitialDataProps;
}

const ViewAgentCreditPaySlip: React.FC<ViewAgentCreditPaySlipProps> = ({
  onClose,
  onEdit,
  initialData,
}) => {
  const [data, setData] = useState<InitialDataProps>(initialData);
  return (
    <div className="flex flex-col gap-6 px-8 py-6 bg-grey-aw-50 rounded-xs shadow-lg max-w-[800px] max-h-[600px] overflow-auto custom-scrollbar">
      <div className="flex justify-between items-center">
        <p className="text-h5 font-bold text-grey-ab-900">
          Agent SOA Credit Slip
        </p>
        <div
          className="p-[6px]  rounded-xs  bg-grey-ab-50 cursor-pointer"
          onClick={onClose}
        >
          <CrossIcon size={20} />
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex gap-4">
          <div>
            <BlackButton
              label={"Download PDF"}
              size={"m"}
              variant={"primary"}
              leftIcon={<DownloadIcon size={16} color="#ffffff" />}
            />
          </div>
          <div onClick={onEdit}>
            <NeutralBlueButton
              label={"Edit Agent Slip"}
              size={"m"}
              variant={"outline"}
              leftIcon={<EditIcon size={16} color="#0091FF" />}
            />
          </div>
          <div>
            <ErrorButton
              label={"Delete"}
              size={"m"}
              variant={"outline"}
              leftIcon={<DeleteIcon size={16} color="#EA0001" />}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <AccountsModel
            label={"Remittance Ref:"}
            value={data.remittanceRef}
            parentStyle="py-1 gap-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <AccountsModel
            label={"Credit Slip Number:"}
            value={data.creditSlipNumber}
            parentStyle="py-1 gap-2"
          />
          <AccountsModel
            label={"Credit Slip Date:"}
            value={data.paidDate}
            parentStyle="py-1 gap-2"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold tex-grey-ab">
          Credit Note Invoice Number
        </p>
        <div className="flex gap-3 flex-wrap py-1">
          {data.creditNoteInvoiceNumbers.map((item) => (
            <BlueChip label={item} size={"m"} variant={"outline"} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-lg font-bold text-grey-ab ">Agent Information</p>
        <div className="flex flex-col">
          <AccountsModel
            label={"Agent Name"}
            value={data.agentName}
            parentStyle="text-xs py-2 border-t border-t-grey-ab-50"
            labelStyle="font-normal text-grey-ab-300 w-[200px]"
            valueStyle="text-grey-ab-800"
          />
          <AccountsModel
            label={"Address"}
            value={data.agentAdress}
            parentStyle="text-xs py-2 border-t border-t-grey-ab-50"
            labelStyle="font-normal text-grey-ab-300 w-[200px]"
            valueStyle="text-grey-ab-800"
          />
          <AccountsModel
            label={"Phone Number"}
            value={data.phoneNumber}
            parentStyle="text-xs py-2 border-y border-y-grey-ab-50"
            labelStyle="font-normal text-grey-ab-300 w-[200px]"
            valueStyle="text-grey-ab-800"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-lg font-bold text-grey-ab ">Bank Details</p>
        <div className="flex flex-col">
          <AccountsModel
            label={"Bank Name"}
            value={data.bankName.toUpperCase()}
            parentStyle="text-xs py-2 border-t border-t-grey-ab-50"
            labelStyle="font-normal text-grey-ab-300 w-[200px]"
            valueStyle="text-grey-ab-800"
          />
          <AccountsModel
            label={"Beneficiary Name"}
            value={data.beneficiaryName.toUpperCase()}
            parentStyle="text-xs py-2 border-t border-t-grey-ab-50"
            labelStyle="font-normal text-grey-ab-300 w-[200px]"
            valueStyle="text-grey-ab-800"
          />
          <AccountsModel
            label={"Account No"}
            value={data.accountNumber}
            parentStyle="text-xs py-2 border-t border-t-grey-ab-50"
            labelStyle="font-normal text-grey-ab-300 w-[200px]"
            valueStyle="text-grey-ab-800"
          />
          <AccountsModel
            label={"Branch Name"}
            value={data.branchName.toUpperCase()}
            parentStyle="text-xs py-2 border-t border-t-grey-ab-50"
            labelStyle="font-normal text-grey-ab-300 w-[200px]"
            valueStyle="text-grey-ab-800"
          />
          <AccountsModel
            label={"IFSC Code No"}
            value={data.ifscCode}
            parentStyle="text-xs py-2 border-b border-b-grey-ab-50"
            labelStyle="font-normal text-grey-ab-300 w-[200px]"
            valueStyle="text-grey-ab-800"
          />
        </div>
      </div>

      {/* table */}
      <div className="flex flex-col">
        <AccountsModel
          label={"Description"}
          value={"Amount"}
          parentStyle="py-2 px-8 gap-8 bg-grey-100 border-b border-b-grey-ab-100"
          labelStyle=" text-grey-ab-600 w-[65%] px-4"
          valueStyle="text-grey-ab-600 font-bold "
        />
        <AccountsModel
          label={"Agent SOA Credit Amount"}
          value={data.agentSOACreditAmount.toLocaleString("en-IN")}
          parentStyle="py-3 px-8 gap-8  border-b border-b-grey-ab-100"
          labelStyle="font-normal text-grey-ab-600 w-[65%] px-4"
          valueStyle="text-grey-ab-600 "
        />
        <AccountsModel
          label={"Total Amount "}
          value={data.totalAmount.toLocaleString("en-IN")}
          parentStyle="py-3 px-8 gap-8  border-b border-b-grey-ab-100"
          labelStyle="font-normal text-grey-ab-600 w-[65%] px-4"
          valueStyle="text-grey-ab-600 "
        />
        <AccountsModel
          label={"Bank Charges "}
          value={data.bankCharges.toLocaleString("en-IN")}
          parentStyle="py-3 px-8 gap-8  border-b border-b-grey-ab-100"
          labelStyle="font-normal text-grey-ab-600 w-[65%] px-4"
          valueStyle="text-grey-ab-600 "
        />
        <AccountsModel
          label={"Other Charges"}
          value={data.otherCharges.toLocaleString("en-IN")}
          parentStyle="py-3 px-8 gap-8  border-b border-b-grey-ab-100"
          labelStyle="font-normal text-grey-ab-600 w-[65%] px-4"
          valueStyle="text-grey-ab-600 "
        />
        <AccountsModel
          label={"Payment Method"}
          value={
            <span className="text-blue-600">
              {data.paymentMethod.toUpperCase()}
            </span>
          }
          parentStyle="py-3 px-8 gap-8  border-b border-b-grey-ab-100"
          labelStyle="font-normal text-grey-ab-600 w-[65%] px-4"
        />
        <AccountsModel
          label={" Total Amount Received"}
          value={data.totalAmountReceived.toLocaleString("en-IN")}
          parentStyle="py-3 px-8 gap-8  border-b border-b-grey-ab-100"
          labelStyle="font-normal text-grey-ab-600 w-[65%] px-4"
          valueStyle="text-grey-ab-600 "
        />
      </div>
      {/* table end  */}

      <div className="flex flex-col gap-2 text-grey-ab">
        <p className="font-bold">Remarks</p>
        <p className="text-sm ">{data.remarks}</p>
      </div>
    </div>
  );
};

export default ViewAgentCreditPaySlip;
