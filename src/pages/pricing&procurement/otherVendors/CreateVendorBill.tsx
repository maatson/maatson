import React, { useCallback, useEffect, useState } from "react";
import GroupField from "../../../components/groupField/GroupField";
import {
  AddIcon,
  DeleteIcon,
  InvoiceIcon,
  LocationIcon,
} from "../../../components/icons/Icons";
import { Link, useLocation } from "react-router-dom";
import GreyButton from "../../../components/buttons/GreyButton";
import CustomTable from "../../../components/table/CustomTable";
import BlackButton from "../../../components/buttons/BlackButton";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

interface RowData {
  id: string | number;
  particulars: React.ReactNode;
  currencyType: React.ReactNode;
  unitOfMeasure: React.ReactNode;
  pricePerUnit: React.ReactNode;
  quantity: React.ReactNode;
  tax: React.ReactNode;
  amount: React.ReactNode;
  action: React.ReactNode;
}

const columns: any[] = [
  { id: "particulars", label: "Particulars", align: "center" },
  { id: "currencyType", label: "Currency Type", align: "center" },
  { id: "unitOfMeasure", label: "Unit of Measure", align: "center" },
  { id: "pricePerUnit", label: "Price Per Unit", align: "center" },
  { id: "quantity", label: "Quantity", align: "center" },
  { id: "tax", label: "Tax(%)", align: "center" },
  { id: "amount", label: "Amount", align: "center" },
  { id: "action", label: "Action", align: "center", minWidth: 80 },
];

const CreateVendorBill: React.FC = () => {
  const location = useLocation();
  const [rows, setRows] = useState<RowData[]>([]);

  const handleDelete = (id: string | number) => {};
  // table
  const createData = (items: any) => {
    const {
      id,
      particulars,
      currencyType,
      unitOfMeasure,
      pricePerUnit,
      quantity,
      tax,
      amount,
    } = items;
    const particularsValue = (
      <GroupField
        label={""}
        type={""}
        placeholder={""}
        name={particulars}
        value={particulars}
        onChange={function (
          e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
          >
        ): void {
          throw new Error("Function not implemented.");
        }}
        error={false}
        errorMessage={""}
        parentStyle="min-w-[224px] max-w-[244px] mx-auto"
      />
    );
    const currencyTypeValue = (
      <GroupField
        label={""}
        type={"select"}
        placeholder={"Select"}
        name={currencyType}
        value={currencyType}
        onChange={function (
          e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
          >
        ): void {
          throw new Error("Function not implemented.");
        }}
        error={false}
        errorMessage={""}
        parentStyle="min-w-[95px] max-w-[100px] mx-auto"
      />
    );
    const unitOfMeasureValue = (
      <GroupField
        label={""}
        type={"select"}
        placeholder={"Select"}
        name={unitOfMeasure}
        value={unitOfMeasure}
        onChange={function (
          e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
          >
        ): void {
          throw new Error("Function not implemented.");
        }}
        options={[
          { label: "box", value: "Box" },
          { label: "kgs", value: "KGS" },
          { label: "drum", value: "Drums" },
        ]}
        error={false}
        errorMessage={""}
        parentStyle="min-w-[100px] max-w-[124px] mx-auto"
      />
    );
    const pricePerUnitValue = (
      <GroupField
        label={""}
        type={""}
        placeholder={""}
        name={pricePerUnit}
        value={pricePerUnit}
        onChange={function (
          e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
          >
        ): void {
          throw new Error("Function not implemented.");
        }}
        error={false}
        errorMessage={""}
        parentStyle="min-w-[104px] max-w-[104px] mx-auto"
      />
    );
    const quantityValue = (
      <GroupField
        label={""}
        type={""}
        placeholder={""}
        name={quantity}
        value={quantity}
        onChange={function (
          e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
          >
        ): void {
          throw new Error("Function not implemented.");
        }}
        error={false}
        errorMessage={""}
        parentStyle="min-w-[104px] max-w-[104px] mx-auto"
      />
    );
    const taxValue = (
      <GroupField
        label={""}
        type={""}
        placeholder={""}
        name={tax}
        value={tax}
        onChange={function (
          e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
          >
        ): void {
          throw new Error("Function not implemented.");
        }}
        error={false}
        errorMessage={""}
        parentStyle="min-w-[104px] max-w-[104px] mx-auto"
      />
    );
    const amountValue = (
      <GroupField
        label={""}
        type={""}
        placeholder={""}
        name={amount}
        value={amount}
        onChange={function (
          e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
          >
        ): void {
          throw new Error("Function not implemented.");
        }}
        error={false}
        errorMessage={""}
        parentStyle="min-w-[124px] max-w-[124px] mx-auto"
      />
    );

    const actions = (
      <div
        className="p-1 mx-auto rounded-xs bg-error-50 w-fit"
        onClick={() => handleDelete(id)}
      >
        <DeleteIcon size={16} color="#810001" />
      </div>
    );

    const updatedData = {
      id: id,
      particulars: particularsValue,
      currencyType: currencyTypeValue,
      unitOfMeasure: unitOfMeasureValue,
      pricePerUnit: pricePerUnitValue,
      quantity: quantityValue,
      tax: taxValue,
      amount: amountValue,
      action: actions,
    };
    return updatedData;
  };

  const data = [
    {
      particulars: "particulars",
      currencyType: "rupees",
      unitOfMeasure: "",
      pricePerUnit: "20000",
      quantity: "5",
      tax: "10",
      amount: "100000",
    },
  ];

  const fetchData = useCallback(() => {
    const arr = data.map((items, index) => {
      return createData({ ...items, id: index });
    });

    setRows(arr);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className="flex flex-col gap-6 px-8 py-6 rounded=xs bg-grey-aw-50 ">
        <p className="text-grey-ab font-semibold text-h6">Vendor Bill for BL</p>
        <GroupField
          label={"Choose Bill Type"}
          type={"select"}
          placeholder={"Select Bill Type"}
          name={""}
          value={""}
          options={[
            { value: "Bill of Lading", label: "Bill of Lading" },
            { value: "Booking Number", label: "Booking Number" },
            { value: "Container Number", label: "Container Number" },
          ]}
          onChange={function (
            e: React.ChangeEvent<
              HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
            >
          ): void {
            throw new Error("Function not implemented.");
          }}
          error={false}
          errorMessage={""}
          parentStyle="w-[30%]"
        />

        <div className="flex justify-between">
          <div className="flex flex-col gap-4 w-[40%]">
            <GroupField
              label={"Vendor Name*"}
              type={""}
              placeholder={"Entern Vendor Name"}
              name={""}
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
            />
            <GroupField
              label={"Product or Service"}
              type={"select"}
              placeholder={"Select Product or Service"}
              name={""}
              value={""}
              options={[
                { value: "Product", label: "Product" },
                { value: "Service", label: "Service" },
              ]}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
            />
          </div>
          <div className="flex flex-col gap-4 w-[40%]">
            <GroupField
              label={"Vendor Invoice Number"}
              type={""}
              placeholder={"Enter Invoice Number"}
              name={""}
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              leftIcon={<InvoiceIcon color="#2C398F" />}
            />
            <GroupField
              label={"Invoice Date"}
              type={"date"}
              placeholder={"Enter Invoice Date"}
              name={""}
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              isDateLeft
            />
            <GroupField
              label={"Ordered Location"}
              type={""}
              placeholder={"Enter Ordered Location"}
              name={""}
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              leftIcon={<LocationIcon color="#2C398F" />}
            />
            <GroupField
              label={"Pickup Location"}
              type={""}
              placeholder={"Enter Pickup Location"}
              name={""}
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              leftIcon={<InvoiceIcon color="#2C398F" />}
            />
            <GroupField
              label={"Delivery Location"}
              type={""}
              placeholder={"Enter Delivery Location"}
              name={""}
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              leftIcon={<InvoiceIcon color="#2C398F" />}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 overflow-hidden">
          <CustomTable columns={columns} rows={rows} isCheckbox={false} />
          <div>
            <BlackButton
              label={"Add More"}
              size={"s"}
              variant={"primary"}
              leftIcon={<AddIcon size={16} color="#ffffff" />}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[40%]">
          <GroupField
            label={"Base Currency"}
            type={"select"}
            placeholder={"Choose Base Currency"}
            name={""}
            value={""}
            onChange={function (
              e: React.ChangeEvent<
                HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
              >
            ): void {
              throw new Error("Function not implemented.");
            }}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={"Exchange Rate "}
            type={""}
            placeholder={"Enter Exchange Rate "}
            name={""}
            value={""}
            onChange={function (
              e: React.ChangeEvent<
                HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
              >
            ): void {
              throw new Error("Function not implemented.");
            }}
            error={false}
            errorMessage={""}
          />
        </div>

        <GroupField
          label={"Order Description"}
          type={"textarea"}
          placeholder={"Write"}
          name={""}
          value={""}
          onChange={function (
            e: React.ChangeEvent<
              HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
            >
          ): void {
            throw new Error("Function not implemented.");
          }}
          error={false}
          errorMessage={""}
        />

        <div className="flex justify-end gap-6 items-center">
          {location.pathname ===
            "/other-vendors/vendor-for-shipping/create" && (
            <Link to={"/other-vendors/vendor-for-shipping"}>
              <PrimaryButton label={"Cancel"} size={"l"} variant={"link"} />
            </Link>
          )}
          {location.pathname === "/other-vendors/vendor-for-office/create" && (
            <Link to={"/other-vendors/vendor-for-office"}>
              <PrimaryButton label={"Cancel"} size={"l"} variant={"link"} />
            </Link>
          )}
          <div>
            <PrimaryButton label={"Save"} size={"l"} variant={"primary"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateVendorBill;
