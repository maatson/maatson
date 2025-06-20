import React, { useState } from "react";
import AccountsModel from "../../components/AccountsModel";
import GroupField from "../../../../components/groupField/GroupField";
import { AccountIcon, DocumentIcon } from "../../../../components/icons/Icons";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";
import { NavLink, useParams } from "react-router-dom";

const CreateCollection: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    collectionID: "",
    bookingID: "",
    billOfLadingNumber: "",
    proformaNumber: "",
    customerName: "",
    address: "",
    companyGSTIN: "",
    bankName: "",
    benificiaryName: "",
    accountNumber: "",
    branchName: "",
    IFSCcode: "",
    proformaAmount:"",
    totalAmount: "",
    tdsAmount: "",
    tdsPercentage: "",
    paymentMethod: "",
    totalAmountPaid: "",
    remarks: "",
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    // <div className="flex flex-col gap-6 px-8 py-6 bg-grey-aw-50 rounded-xs shadow-lg max-w-[800px] max-h-[600px] overflow-auto custom-scrollbar">
    <div className="flex flex-col gap-6 px-8 py-6 bg-grey-aw-50 rounded-xs shadow-lg ">
      {/* <p className="text-h5 font-bold text-grey-ab-900">Create Collection</p> */}
      <div className="flex justify-between">
        <AccountsModel label={"Booking ID:"} value={"123dd4545"} />
        <AccountsModel
          label={"Bill of Lading Number:"}
          value={"mmi1234501-A"}
        />
      </div>
      <div className="flex gap-4">
        <GroupField
          label={"Choose Proforma No"}
          type={"select"}
          placeholder={"Choose Proforma No"}
          name={"proformaNumber"}
          value={data.proformaNumber}
          onChange={handleChange}
          leftIcon={<DocumentIcon color="#2C398F" />}
          error={false}
          errorMessage={""}
          parentStyle="w-full"
        />
        <GroupField
          label={"Customer Name *"}
          type={""}
          placeholder={"Enter Customer Name"}
          name={"customerName"}
          value={data.customerName}
          onChange={handleChange}
          error={false}
          errorMessage={""}
          parentStyle="w-full"
        />
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-lg font-bold text-grey-ab">Received Bank Details</p>
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
            label={"Total Amount"}
            type={""}
            placeholder={"Enter Total Amount"}
            name={"totalAmount"}
            value={data.totalAmount}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />
          <div className="flex items-end w-full">
            <GroupField
              label={"TDS Amount*"}
              type={""}
              placeholder={"TDS Percentage"}
              name={"tdsPercentage"}
              value={data.tdsPercentage}
              onChange={handleChange}
              rightIcon={<div className="font-bold text-grey-ab-700">%</div>}
              error={false}
              errorMessage={""}
              parentStyle="w-[40%]"
            />
            <GroupField
              label={""}
              type={""}
              placeholder={"Enter TDS Amount"}
              name={"tdsAmount"}
              value={data.tdsAmount}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              parentStyle="w-[60%]"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-2 py-1">
            <p className="text-sm text-grey-ab-400">Proforma Amount</p>
            <p className="text-lg text-grey-ab-800 font-bold">50,000</p>
          </div>
          <div className="flex flex-col gap-2 py-1">
            <p className="text-sm text-grey-ab-400">Total Amount Paid</p>
            <p className="text-lg text-success-700 font-bold">
              {Number(data.totalAmount) + Number(data.tdsAmount)}
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
        <NavLink to={`/accounts/invoice-import/view-invoice/${id}/collection`}>
          <PrimaryButton label={"Cancel"} size={"l"} variant={"link"} />
        </NavLink>
        <div>
          <PrimaryButton
            label={"Save Collection Slip"}
            size={"l"}
            variant={"primary"}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateCollection;
