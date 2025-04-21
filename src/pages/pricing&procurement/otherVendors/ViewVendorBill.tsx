import React, { useCallback, useEffect, useState } from "react";
import ErrorButton from "../../../components/buttons/ErrorButton";
import { DeleteIcon, InvoiceIcon } from "../../../components/icons/Icons";
import CustomTable from "../../../components/table/CustomTable";
import { Link, useLocation, useParams } from "react-router-dom";
import NeutralBlueButton from "../../../components/buttons/NeutralBlueButton";

interface LayoutProps {
  label: string;
  value: string;
  parentStyle?: string;
  labelStyle?: string;
  valueStyle?: string;
}

interface RowData {
  id: string | number;
  slNo: string | number | React.ReactNode;
  particulars: string | React.ReactNode;
  unitOfMeasure: string | React.ReactNode;
  currencyType: string | React.ReactNode;
  pricePerUnit: string | React.ReactNode;
  quantity: string | React.ReactNode;
  tax: string | React.ReactNode;
  amount: string | React.ReactNode;
}

const Columns: any[] = [
  { id: "slNo", label: "SLNO", minWidth: 80, align: "center" },
  { id: "particulars", label: "Particulars" },
  { id: "unitOfMeasure", label: "Unit of Measure", align: "center" },
  {
    id: "currencyType",
    label: "Currency Type",
    align: "center",
    minWidth: 100,
  },
  { id: "pricePerUnit", label: "Price Per Unit", align: "center" },
  { id: "quantity", label: "Quantity", align: "center", minWidth: 50 },
  { id: "tax", label: "Tax(%)", align: "center", minWidth: 100 },
  { id: "amount", label: "Amount", align: "center", minWidth: 80 },
];

const ViewVendorBill: React.FC = () => {
  const location = useLocation();
  const {id} = useParams();
  const [rows, setRows] = useState<RowData[]>([]);

  const createData = (items: any) => {
    const { id } = items;
    const slNumber = (
      <div className="py-2">{(id + 1).toString().padStart(2, "0")}</div>
    );
    const updatedData = {
      id: id,
      slNo: slNumber,
      particulars: items?.particulars,
      unitOfMeasure: items?.unitOfMeasure,
      currencyType: items?.currencyType,
      pricePerUnit: items?.pricePerUnit,
      quantity: items?.quantity,
      tax: items?.tax,
      amount: items?.amount,
    };
    return updatedData;
  };

  const data = [
    {
      particulars: "50kg Bag of Organic Rice	",
      unitOfMeasure: "kgs",
      currencyType: "USD",
      pricePerUnit: "5000",
      quantity: "01",
      tax: "10",
      amount: "5000",
    },
    {
      particulars: "50kg Bag of Organic Rice	",
      unitOfMeasure: "packages",
      currencyType: "USD",
      pricePerUnit: "5000",
      quantity: "01",
      tax: "10",
      amount: "5000",
    },
    {
      particulars: "20ft Standard Container	",
      unitOfMeasure: "drum",
      currencyType: "USD",
      pricePerUnit: "200",
      quantity: "01",
      tax: "10",
      amount: "2000",
    },
    {
      particulars: "20ft Standard Container	",
      unitOfMeasure: "boxes",
      currencyType: "USD",
      pricePerUnit: "40",
      quantity: "06",
      tax: "08",
      amount: "200",
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
      <div className="bg-grey-aw-50 gap-6 flex flex-col px-8 py-6 rounded-xs ">
        <div className="flex justify-between items-center text-lg font-bold text-grey-ab">
          <p>Vendor for Shipping</p>
          <div className="flex gap-4">
            <ErrorButton
              label={"Delete Invoice"}
              size={"m"}
              variant={"primary"}
              leftIcon={<DeleteIcon size={16} color="#FDFDFD" />}
            />
            <Link
              to={`${
                location.pathname.startsWith(
                  "/other-vendors/vendor-for-shipping/view"
                )
                  ? `/other-vendors/vendor-for-shipping/edit/${id}`
                  : `/other-vendors/vendor-for-office/edit/${id}`
              }`}
            >
              <NeutralBlueButton
                label={"Edit Invoice"}
                size={"m"}
                variant={"primary"}
                rightIcon={<InvoiceIcon size={16} color="#FDFDFD" />}
              />
            </Link>
          </div>
        </div>

        <div className="flex justify-between ">
          <div className="flex flex-col gap-5 ">
            {/* bl */}
            {location.pathname.startsWith(
              "/other-vendors/vendor-for-shipping/view"
            ) && (
              <Layout
                label={"Bill of Lading No:"}
                value={"123dd4545"}
                parentStyle="items-center"
              />
            )}

            <div className="flex flex-col gap-2">
              <Layout
                label={"Vendor Name"}
                value={"Sansico pvt ltd."}
                parentStyle="flex-col"
              />
              <Layout
                label={"Address"}
                value={
                  "No.801,Vallur Camp, T H Road, Vallur Village, Chennai 600 120."
                }
                parentStyle="flex-col"
                valueStyle="max-w-[224px]"
              />
            </div>
            <Layout
              label={"Product /Service:"}
              value={"Service"}
              parentStyle="items-center"
            />
          </div>
          <div className="flex flex-col gap-6 ">
            <div className="flex flex-col gap-2 items-end">
              <Layout
                label={"Vendor Invoice Number:"}
                value={"123dd4545"}
                parentStyle="items-center"
              />
              <Layout
                label={"Invoice Date:"}
                value={"11/05/2025"}
                parentStyle="items-center"
              />
              <Layout
                label={"Invoice Date:"}
                value={"11/05/2025"}
                parentStyle="items-center"
              />
            </div>
            <div className="flex flex-col gap-2 items-end">
              <Layout
                label={"Ordered Location:"}
                value={"Chennai, India"}
                parentStyle="items-center"
              />
              <Layout
                label={"Pickup Location:"}
                value={"Mumbai, India"}
                parentStyle="items-center"
              />
              <Layout
                label={"Delivery Location:"}
                value={"Chennai India"}
                parentStyle="items-center"
              />
            </div>
          </div>
        </div>

        {/* table */}
        <CustomTable columns={Columns} rows={rows} isCheckbox={false} />

        <div className="flex justify-between">
          <div className="flex flex-col gap-2 ">
            <Layout
              label={"Base Currency:"}
              value={"INR"}
              labelStyle="font-normal"
              valueStyle="font-semibold"
              parentStyle="items-center"
            />
            <Layout
              label={"Exchange Rate:"}
              value={"83"}
              labelStyle="font-normal"
              valueStyle="font-semibold"
              parentStyle="items-center"
            />
          </div>
          <div className="flex flex-col gap-2 items-end">
            <Layout
              label={"Sub Total :"}
              value={"6000 USD"}
              labelStyle="text-[16px] font-semibold"
              valueStyle="font-semibold"
              parentStyle="items-center"
            />
            <Layout
              label={"Total :"}
              value={"8000 USD"}
              labelStyle="text-[16px] font-semibold"
              valueStyle="font-semibold"
              parentStyle="items-center"
            />
          </div>
        </div>

        <Layout
          label={"Remarks"}
          value={"Mumbai team orderd this product for "}
          labelStyle="text-[16px]"
          parentStyle="flex-col"
        />
      </div>
    </>
  );
};

export default ViewVendorBill;

const Layout: React.FC<LayoutProps> = ({
  label,
  value,
  parentStyle,
  labelStyle,
  valueStyle,
}) => {
  return (
    <div className={`flex gap-1 py-1 ${parentStyle}`}>
      <p className={`text-sm font-bold text-grey-ab-400 ${labelStyle}`}>
        {label}
      </p>
      <p className={`text-grey-ab-800 ${valueStyle}`}>{value}</p>
    </div>
  );
};
