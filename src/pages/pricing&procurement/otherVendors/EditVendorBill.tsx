import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import GroupField from "../../../components/groupField/GroupField";
import {
  AddIcon,
  DeleteIcon,
  InvoiceIcon,
  LocationIcon,
} from "../../../components/icons/Icons";
import { Link, useLocation, useParams } from "react-router-dom";
import CustomTable from "../../../components/table/CustomTable";
import BlackButton from "../../../components/buttons/BlackButton";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

interface DummyDataProps {
  billType: string;
  // billValue: BillValueProps[];
  billValue: string[];
  vendorName: string;
  productOrService: string;
  vendorInvoiceNumber: string;
  invoiceDate: string;
  orderedLocation: string;
  pickupLocation: string;
  deliveryLocation: string;
  baseCurrency: string;
  exchangeRate: string;
  otherDescription: string;
}
// interface BillValueProps {
//   value: string;
// }

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
  {
    id: "currencyType",
    label: "Currency Type",
    align: "center",
    minWidth: 140,
  },
  {
    id: "unitOfMeasure",
    label: "Unit of Measure",
    align: "center",
    minWidth: 140,
  },
  {
    id: "pricePerUnit",
    label: "Price Per Unit",
    align: "center",
    minWidth: 140,
  },
  { id: "quantity", label: "Quantity", align: "center", minWidth: 120 },
  { id: "tax", label: "Tax(%)", align: "center", minWidth: 120 },
  { id: "amount", label: "Amount", align: "center", minWidth: 140 },
  { id: "action", label: "Action", align: "center", minWidth: 80 },
];

const EditVendorBill: React.FC = () => {
  const location = useLocation();
  const { id } = useParams();
  const [rows, setRows] = useState<RowData[]>([]);
  const [dummyData, setDummyData] = useState<DummyDataProps>({
    billType: "Bill of Lading",
    // billValue: [{ value: "" }],
    billValue: ["123dd4545", "712871h1h"],
    vendorName: "Sansico pvt ltd.",
    productOrService: "Service",
    vendorInvoiceNumber: "123dd4545",
    invoiceDate: "11/05/2025",
    orderedLocation: "Chennai, India",
    pickupLocation: "Mumbai, India",
    deliveryLocation: "Chennai India",
    baseCurrency: "INR",
    exchangeRate: "83",
    otherDescription: "Mumbai team orderd this product for",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDummyData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBillValueChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { value } = e.target;
    setDummyData((prev) => {
      const newBillValue = [...prev.billValue];
      // newBillValue[index] = { ...newBillValue[index], [name]: value };  //for objects
      newBillValue[index] = value; //for array string
      return { ...prev, billValue: newBillValue };
    });
  };

  const handleAdd = () => {
    setDummyData((prev) => ({
      ...prev,
      // billValue: [...prev.billValue, { value: "" }], //for object of array
      billValue: [...prev.billValue, ""],
    }));
    console.log(dummyData.billValue);
  };

  const handleDelete = (index: number) => {
    setDummyData((prev) => ({
      ...prev,
      billValue: prev.billValue.filter((_, i) => i !== index),
    }));
  };

  const handleTableInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setData((prev) => {
      const newValue = [...prev];
      newValue[index] = { ...newValue[index], [name]: value }; //for objects
      return newValue;
    });
  };
  const handleAddMore = () => {
    setData((prev) => [
      ...prev,
      {
        particulars: "",
        currencyType: "",
        unitOfMeasure: "",
        pricePerUnit: "",
        quantity: "",
        tax: "",
        amount: "",
      },
    ]);
  };
  const handleDeleteTableRow = (index: number) => {
    setData((prev) => [...prev.filter((_, i) => i !== index)]);
  };

  // table
  const createData = (items: any) => {
    const { id } = items;
    const particularsValue = (
      <GroupField
        label={""}
        type={"textarea"}
        placeholder={""}
        name={"particulars"}
        value={data[id].particulars}
        maxLength={255}
        onChange={(e) => handleTableInputChange(e, id)}
        error={false}
        errorMessage={""}
        parentStyle="min-w-[224px] max-w-[244px] mx-auto"
        // inputStyle="bg-black"
      />
    );
    const currencyTypeValue = (
      <GroupField
        label={""}
        type={"select"}
        placeholder={"Select"}
        name={"currencyType"}
        value={data[id].currencyType}
        options={[
          { label: "INR", value: "INR" },
          { label: "USD", value: "USD" },
        ]}
        onChange={(e) => handleTableInputChange(e, id)}
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
        name={"unitOfMeasure"}
        value={data[id].unitOfMeasure}
        onChange={(e) => handleTableInputChange(e, id)}
        options={[
          { label: "Box", value: "Box" },
          { label: "KGS", value: "KGS" },
          { label: "Drums", value: "Drums" },
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
        name={"pricePerUnit"}
        value={data[id].pricePerUnit}
        onChange={(e) => handleTableInputChange(e, id)}
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
        name={"quantity"}
        value={data[id].quantity}
        onChange={(e) => handleTableInputChange(e, id)}
        error={false}
        errorMessage={""}
        parentStyle="min-w-[94px] max-w-[94px] mx-auto"
      />
    );
    const taxValue = (
      <GroupField
        label={""}
        type={""}
        placeholder={""}
        name={"tax"}
        value={data[id].tax}
        onChange={(e) => handleTableInputChange(e, id)}
        error={false}
        errorMessage={""}
        parentStyle="min-w-[94px] max-w-[94px] mx-auto"
      />
    );
    const amountValue = (
      <GroupField
        label={""}
        type={""}
        placeholder={""}
        name={"amount"}
        value={data[id].amount}
        onChange={(e) => handleTableInputChange(e, id)}
        error={false}
        errorMessage={""}
        parentStyle="min-w-[124px] max-w-[124px] mx-auto"
      />
    );

    const actions = (
      <>
        {data.length === 1 ? (
          <div className="text-xl">-</div>
        ) : (
          <div
            className="p-1 mx-auto rounded-xs bg-error-50 w-fit cursor-pointer"
            onClick={() => handleDeleteTableRow(id)}
          >
            <DeleteIcon size={16} color="#810001" />
          </div>
        )}
      </>
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

  const [data, setData] = useState([
    {
      particulars: "50kg Bag of Organic Rice	",
      currencyType: "USD",
      unitOfMeasure: "KGS",
      pricePerUnit: "5000	",
      quantity: "01",
      tax: "10",
      amount: "5000",
    },
  ]);

  const fetchData = useCallback(() => {
    const arr = data.map((items, index) => {
      return createData({ ...items, id: index });
    });
    const addMoreRow = {
      id: "",
      particulars: (
        <div onClick={handleAddMore} className="py-1">
          <BlackButton
            label={"Add More"}
            size={"s"}
            variant={"primary"}
            leftIcon={<AddIcon size={16} color="#ffffff" />}
          />
        </div>
      ),
      currencyType: null,
      unitOfMeasure: null,
      pricePerUnit: null,
      quantity: null,
      tax: null,
      amount: null,
      action: null,
    };
    setRows([...arr, addMoreRow]);
  }, [data]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // useEffect(() => {
  //   setDummyData((prev) => ({
  //     ...prev,
  //     billValue: [""],
  //   }));
  // }, [dummyData.billType]);

  return (
    <>
      <div className="flex flex-col gap-6 px-8 py-6 rounded=xs bg-grey-aw-50 ">
        <p className="text-grey-ab font-semibold text-h6">
          {location.pathname.startsWith(
            "/other-vendors/vendor-for-shipping/edit"
          )
            ? "Vendor Bill for BL"
            : "Vendor Bill for Office Essentials"}
        </p>

        <div className="flex justify-between">
          <div className="flex flex-col gap-4 w-[40%]">
            {location.pathname.startsWith(
              "/other-vendors/vendor-for-shipping/edit"
            ) && (
              <div className="flex flex-col gap-4">
                <GroupField
                  label={"Choose Bill Type"}
                  type={"select"}
                  placeholder={"Select Bill Type"}
                  name={"billType"}
                  value={dummyData.billType}
                  options={[
                    { value: "Bill of Lading", label: "Bill of Lading" },
                    { value: "Booking Number", label: "Booking Number" },
                    { value: "Container Number", label: "Container Number" },
                  ]}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                />
                {dummyData.billType.toLowerCase().includes("bill of lading") ||
                dummyData.billType.toLowerCase().includes("booking number") ||
                dummyData.billType 
                  .toLowerCase()
                  .includes("container number") ? (
                  <>
                    {dummyData.billValue.map((item, index) => (
                      <div className="flex gap-2 items-end" key={index}>
                        <GroupField
                          label={`${
                            dummyData.billType
                              .toLowerCase()
                              .includes("container number")
                              ? "Container Number"
                              : dummyData.billType
                                  .toLowerCase()
                                  .includes("booking number")
                              ? "Booking Number"
                              : "BL Number"
                          }`}
                          type={""}
                          placeholder={`${
                            dummyData.billType
                              .toLowerCase()
                              .includes("container number")
                              ? "Enter Container Number"
                              : dummyData.billType
                                  .toLowerCase()
                                  .includes("booking number")
                              ? "Enter Booking Number"
                              : "Enter BL Number"
                          }`}
                          name={"value"}
                          value={item}
                          onChange={(e) => handleBillValueChange(e, index)}
                          error={false}
                          errorMessage={""}
                          parentStyle="w-full"
                        />
                        {index === dummyData.billValue.length - 1 &&
                        dummyData.billValue.length === 1 ? (
                          <div
                            className="h-6 w-6 p-1 rounded-xs cursor-pointer bg-grey-ab"
                            onClick={handleAdd}
                          >
                            <AddIcon color="#FDFDFD" size={16} />
                          </div>
                        ) : index === dummyData.billValue.length - 1 &&
                          dummyData.billValue.length > 1 ? (
                          <div className="flex  gap-1">
                            <div
                              className="h-6 w-6 p-1 rounded-xs cursor-pointer bg-error"
                              onClick={() => handleDelete(index)}
                            >
                              <DeleteIcon color="#FDFDFD" size={16} />
                            </div>
                            <div
                              className="h-6 w-6 p-1 rounded-xs cursor-pointer bg-grey-ab"
                              onClick={handleAdd}
                            >
                              <AddIcon color="#FDFDFD" size={16} />
                            </div>
                          </div>
                        ) : (
                          <div
                            className="h-6 w-6 p-1 rounded-xs cursor-pointer bg-error"
                            onClick={() => handleDelete(index)}
                          >
                            <DeleteIcon color="#FDFDFD" size={16} />
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                ) : (
                  ""
                )}
              </div>
            )}
            <GroupField
              label={"Vendor Name*"}
              type={""}
              placeholder={"Enter Vendor Name"}
              name={"vendorName"}
              value={dummyData.vendorName}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />
            <GroupField
              label={"Product or Service"}
              type={"select"}
              placeholder={"Select Product or Service"}
              name={"productOrService"}
              value={dummyData.productOrService}
              options={[
                { value: "Product", label: "Product" },
                { value: "Service", label: "Service" },
              ]}
              onChange={handleChange}
              error={false}
              errorMessage={""}
            />
          </div>
          <div className="flex flex-col gap-4 w-[40%]">
            <GroupField
              label={"Vendor Invoice Number"}
              type={""}
              placeholder={"Enter Invoice Number"}
              name={"vendorInvoiceNumber"}
              value={dummyData.vendorInvoiceNumber}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              leftIcon={<InvoiceIcon color="#2C398F" />}
            />
            <GroupField
              label={"Invoice Date"}
              type={"date"}
              placeholder={"Enter Invoice Date"}
              name={"invoiceDate"}
              value={dummyData.invoiceDate}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              isDateLeft
            />
            <GroupField
              label={"Ordered Location"}
              type={""}
              placeholder={"Enter Ordered Location"}
              name={"orderedLocation"}
              value={dummyData.orderedLocation}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              leftIcon={<LocationIcon color="#2C398F" />}
            />
            <GroupField
              label={"Pickup Location"}
              type={""}
              placeholder={"Enter Pickup Location"}
              name={"pickupLocation"}
              value={dummyData.pickupLocation}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              leftIcon={<InvoiceIcon color="#2C398F" />}
            />
            <GroupField
              label={"Delivery Location"}
              type={""}
              placeholder={"Enter Delivery Location"}
              name={"deliveryLocation"}
              value={dummyData.deliveryLocation}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              leftIcon={<InvoiceIcon color="#2C398F" />}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 overflow-hidden">
          <CustomTable columns={columns} rows={rows} isCheckbox={false} />
        </div>

        <div className="flex flex-col gap-4 w-[40%]">
          <GroupField
            label={"Base Currency"}
            type={"select"}
            placeholder={"Choose Base Currency"}
            name={"baseCurrency"}
            value={dummyData.baseCurrency}
            onChange={handleChange}
            options={[
              { value: "INR", label: "INR" },
              { value: "USD", label: "USD" },
            ]}
            error={false}
            errorMessage={""}
          />
          <GroupField
            label={"Exchange Rate "}
            type={""}
            placeholder={"Enter Exchange Rate "}
            name={"exchangeRate"}
            value={dummyData.exchangeRate}
            onChange={handleChange}
            error={false}
            errorMessage={""}
          />
        </div>

        <GroupField
          label={"Order Description"}
          type={"textarea"}
          placeholder={"Write"}
          name={"otherDescription"}
          value={dummyData.otherDescription}
          onChange={handleChange}
          error={false}
          errorMessage={""}
        />

        <div className="flex justify-end gap-6 items-center">
          {location.pathname.startsWith(
            "/other-vendors/vendor-for-shipping/edit"
          ) && (
            <Link to={`/other-vendors/vendor-for-shipping/view/${id}`}>
              <PrimaryButton label={"Cancel"} size={"l"} variant={"link"} />
            </Link>
          )}
          {location.pathname.startsWith(
            "/other-vendors/vendor-for-office/edit"
          ) && (
            <Link to={`/other-vendors/vendor-for-office/view/${id}`}>
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

export default EditVendorBill;
