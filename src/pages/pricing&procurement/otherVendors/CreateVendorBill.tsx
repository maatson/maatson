import React, { useCallback, useEffect, useState } from "react";
import GroupField from "../../../components/groupField/GroupField";
import { InvoiceIcon, LocationIcon } from "../../../components/icons/Icons";
import { Link } from "react-router-dom";
import GreyButton from "../../../components/buttons/GreyButton";
import CustomTable from "../../../components/table/CustomTable";

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
  { id: "action", label: "Action", minWidth: 120, align: "center" },
];

const CreateVendorBill: React.FC = () => {
  const [rows, setRows] = useState<RowData[]>([]);

  // table
  const createData = (items: any) => {
    const { id } = items;
    const particularsValue = (
      <GroupField
        label={""}
        type={""}
        placeholder={""}
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
    );
    const currencyTypeValue = (
      <GroupField
        label={""}
        type={""}
        placeholder={""}
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
    );
    const unitOfMeasureValue = (
      <GroupField
        label={""}
        type={""}
        placeholder={""}
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
    );
    const pricePerUnitValue = (
      <GroupField
        label={""}
        type={""}
        placeholder={""}
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
    );
    const quantityValue = (
      <GroupField
        label={""}
        type={""}
        placeholder={""}
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
    );
    const taxValue = (
      <GroupField
        label={""}
        type={""}
        placeholder={""}
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
    );
    const amountValue = (
      <GroupField
        label={""}
        type={""}
        placeholder={""}
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
    );

    const actions = (
      <Link
        to={`/other-vendors/vendor-for-shipping/view/${id + 1}`}
        className="flex justify-center"
      >
        <GreyButton label={"View Bill"} size={"s"} variant={"primary"} />
      </Link>
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

  const data = [{}];

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
      <div className="flex flex-col gap-6 px-8 py-6 rounded=xs bg-grey-aw-50">
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

        <div>
          <CustomTable columns={columns} rows={rows} isCheckbox={false} />
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
      </div>
    </>
  );
};

export default CreateVendorBill;
