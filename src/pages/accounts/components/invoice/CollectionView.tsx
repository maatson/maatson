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
import { NavLink, useParams } from "react-router-dom";

interface CollectionViewProps {
  onClose: () => void;
  onEdit: () => void;
}

const CollectionView: React.FC<CollectionViewProps> = ({ onClose, onEdit }) => {
  const { id } = useParams();
  const [data, setData] = useState({
    paymentID: "CD10132001",
    bookingID: "123dd4545",
    billOfLadingNumber: "mmi1234501-A",
    carrierInvoiceNumber: "inv-123404001",
    carrierName: "Legend Shipping Agency Private Limited",
    address: "No. 10, Cenotaph Road, Teynampet, Chennai – 600018",
    companyGSTIN: "123dd4545",
    bankName: "ICICI BANK LIMITED",
    benificiaryName: "MAATSON MARITIME INTL OPC PVT LTD",
    accountNumber: "190205001960",
    branchName: "MADHAVARAM",
    IFSCcode: "ICIC0001902",
    carrierInvoiceAmount: 50000,
    totalAmount: 49000,
    tdsAmount: 1000,
    tdsPercentage: 2,
    paymentMethod: "NEFT/RTGS/IMPS/SWIFT/ACH",
    totalAmountPaid: 50000,
    remarks:
      "Confirmation of successful collection Pending or delayed collections with reasons Issues encountered during collection (e.g., damaged goods, incomplete payment) Follow-up actions required Special instructions or notes from the collector or supervisor",
  });
  return (
    <div className="flex flex-col gap-6 px-8 py-6 bg-grey-aw-50 rounded-xs shadow-lg max-w-[800px] max-h-[600px] overflow-auto custom-scrollbar">
      <div className="flex justify-between items-center">
        <p className="text-h5 font-bold text-grey-ab-900">Collection</p>
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
              label={"Edit Collection"}
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
            label={"Booking ID:"}
            value={data.bookingID}
            parentStyle="py-1"
          />
          <AccountsModel
            label={"Carrier Invoice Number:"}
            value={data.carrierInvoiceNumber}
            parentStyle="py-1"
          />
        </div>
        <div className="flex flex-col gap-2">
          <AccountsModel
            label={"Payment ID:"}
            value={data.paymentID}
            parentStyle="py-1"
          />
          <AccountsModel
            label={"Bill of Lading Number:"}
            value={data.billOfLadingNumber}
            parentStyle="py-1"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-lg font-bold text-grey-ab ">Carrier Information</p>
        <div className="flex flex-col">
          <AccountsModel
            label={"Carrier Name"}
            value={data.carrierName}
            parentStyle="text-xs py-2 border-t border-t-grey-ab-50"
            labelStyle="font-normal text-grey-ab-300 w-[200px]"
            valueStyle="text-grey-ab-800"
          />
          <AccountsModel
            label={"Address"}
            value={data.address}
            parentStyle="text-xs py-2 border-t border-t-grey-ab-50"
            labelStyle="font-normal text-grey-ab-300 w-[200px]"
            valueStyle="text-grey-ab-800"
          />
          <AccountsModel
            label={"GSTIN"}
            value={data.companyGSTIN}
            parentStyle="text-xs py-2 border-y border-y-grey-ab-50"
            labelStyle="font-normal text-grey-ab-300 w-[200px]"
            valueStyle="text-grey-ab-800"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-lg font-bold text-grey-ab ">Customer Information</p>
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
            value={data.benificiaryName.toUpperCase()}
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
            value={data.IFSCcode}
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
          labelStyle=" text-grey-ab-600 w-[70%] px-4"
          valueStyle="text-grey-ab-600 font-bold px-2"
        />
        <AccountsModel
          label={"Carrier Invoice Amount"}
          value={data.carrierInvoiceAmount}
          parentStyle="py-3 px-8 gap-8  border-b border-b-grey-ab-100"
          labelStyle="font-normal text-grey-ab-600 w-[70%] px-4"
          valueStyle="text-grey-ab-600 px-2"
        />
        <AccountsModel
          label={"Total Amount "}
          value={data.totalAmount}
          parentStyle="py-3 px-8 gap-8  border-b border-b-grey-ab-100"
          labelStyle="font-normal text-grey-ab-600 w-[70%] px-4"
          valueStyle="text-grey-ab-600 px-2"
        />
        <AccountsModel
          label={"TDS Amount "}
          value={data.tdsAmount}
          parentStyle="py-3 px-8 gap-8  border-b border-b-grey-ab-100"
          labelStyle="font-normal text-grey-ab-600 w-[70%] px-4"
          valueStyle="text-grey-ab-600 px-2"
        />
        <AccountsModel
          label={"TDS Percentage "}
          value={data.tdsPercentage.toString().padStart(2, "0") + "%"}
          parentStyle="py-3 px-8 gap-8  border-b border-b-grey-ab-100"
          labelStyle="font-normal text-grey-ab-600 w-[70%] px-4"
          valueStyle="text-grey-ab-600 px-2"
        />
        <AccountsModel
          label={"Payment Method"}
          value={
            <span className="text-blue-600">
              {data.paymentMethod.toUpperCase()}
            </span>
          }
          parentStyle="py-3 px-8 gap-8  border-b border-b-grey-ab-100"
          labelStyle="font-normal text-grey-ab-600 w-[70%] px-4"
          valueStyle="px-2"
        />
        <AccountsModel
          label={" Total Amount Paid"}
          value={data.totalAmountPaid}
          parentStyle="py-3 px-8 gap-8  border-b border-b-grey-ab-100"
          labelStyle="font-normal text-grey-ab-600 w-[70%] px-4"
          valueStyle="text-grey-ab-600 px-2"
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

export default CollectionView;
