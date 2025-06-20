import React, { useCallback, useEffect, useState } from "react";
import NeutralBlueButton from "../../../../components/buttons/NeutralBlueButton";
import {
  DeleteIcon,
  DownloadIcon,
  EditIcon,
} from "../../../../components/icons/Icons";
import ErrorButton from "../../../../components/buttons/ErrorButton";
import SuccessButton from "../../../../components/buttons/SuccessButton";
import AccountsModel from "../../components/AccountsModel";
import CustomTable from "../../../../components/table/CustomTable";
import { useNotify } from "../../../../hooks/useNotify";
import BlackButton from "../../../../components/buttons/BlackButton";
import GroupField from "../../../../components/groupField/GroupField";
import { NavLink, useParams } from "react-router-dom";

interface RowData {
  id: string | number;
  description: string | React.ReactNode;
  sacCode: string;
  taxableOrNot: string;
  currency: string;
  quantity: string;
  unit: string;
  unitPrice: string;
  amount: string;
}

const Columns: any[] = [
  { id: "description", label: "Description", minWidth: 260 },
  { id: "sacCode", label: "SAC Code", minWidth: 100 },
  { id: "taxableOrNot", label: "TXB / NTX", minWidth: 100 },
  { id: "currency", label: "Currency", minWidth: 100 },
  { id: "quantity", label: "Quantity", minWidth: 80 },
  { id: "unit", label: "Unit", minWidth: 100 },
  { id: "unitPrice", label: "Unit Price", minWidth: 100 },
  { id: "amount", label: "Amount", minWidth: 100 },
];

const ViewTaxInvoice: React.FC = () => {
  const { id, taxNumber } = useParams();
  const [isPaymentDetails, setIsPaymentDetails] = useState<boolean>(true);
  const { showToast } = useNotify();
  const [Rows, setRows] = useState<RowData[]>([]);
  const [data, setData] = useState({
    customerName: "Legend Shipping Agency Private Limited",
    customerGSTIN: "29AARCM5896Q1Z9",
    containerType: "20 feet Dry Container",
    quantityOfContainer: "10",
    grossWeight: "10000",
    portOfLoading: " PORTKELANG, INDIA",
    portOfDischarge: " CHENNAI, INDIA",
    finalDestination: " CHENNAI, INDIA",
    vesselName: "ULSAN VOYAGER",
    voyageNumber: " VT2505W",
    sailedDate: "23-04-2025",
    etd_atd: "ATD",
    shippingBillNumber: "984958445",
    exchangeRate: "88.45",
    tableDetails: [
      {
        description: "Weighment Charges - Inbound",
        sacCode: "996729",
        taxableOrNot: "TXB",
        currency: "INR",
        quantity: "3",
        unit: "20’STD",
        unitPrice: " 35000.00",
        amount: 10000.0,
      },
      {
        description: "Warehouse Storage Charges (200 sq.ft)",
        sacCode: "996729",
        taxableOrNot: "TXB",
        currency: "INR",
        quantity: "3",
        unit: "20’STD",
        unitPrice: " 35000.00",
        amount: 40000.0,
      },
      {
        description: "Weighment Charges - Inbound",
        sacCode: "996729",
        taxableOrNot: "NTX",
        currency: "INR",
        quantity: "3",
        unit: "20’STD",
        unitPrice: " 35000.00",
        amount: 10000.0,
      },
      {
        description: "Weighment Charges - Inbound",
        sacCode: "996729",
        taxableOrNot: "NTX",
        currency: "INR",
        quantity: "3",
        unit: "20’STD",
        unitPrice: " 35000.00",
        amount: 20000.0,
      },
    ],
    bankName: "ICICI BANK LIMITED",
    paymentInstruction:
      "All payments must be made via NEFT or RTGS only. No other modes of payment will be accepted.",
    notes:
      "Payment not settled as per agreed terms will attract interest @ 18% p.a This is a computer generated document, signature not required.",
    panNo: "AARCM5896Q",
    gstin: "29AARCM5896Q1Z9",
    containerNumbers: [
      "MSCU1234567",
      "TGHU8765432",
      "CAIU1122334",
      "SEGU9988776",
      "ECMU4455661",
      "OOLU7654321",
      "APZU3344552",
    ],
  });
  const [tempData, setTempData] = useState({
    customerName: "Legend Shipping Agency Private Limited",
    customerGSTIN: "",
    containerType: "20 feet Dry Container",
    quantityOfContainer: "10",
    grossWeight: "10000",
    portOfLoading: " PORTKELANG, INDIA",
    portOfDischarge: " CHENNAI, INDIA",
    finalDestination: " CHENNAI, INDIA",
    vesselName: "ULSAN VOYAGER",
    voyageNumber: " VT2505W",
    sailedDate: "23-04-2025",
    etd_atd: "ATD",
    shippingBillNumber: "984958445",
    exchangeRate: "88.45",
    tableDetails: [
      {
        description: "Weighment Charges - Inbound",
        sacCode: "996729",
        taxableOrNot: "TXB",
        currency: "INR",
        quantity: "3",
        unit: "20’STD",
        unitPrice: " 35000.00",
        amount: 10000.0,
      },
      {
        description: "Warehouse Storage Charges (200 sq.ft)",
        sacCode: "996729",
        taxableOrNot: "TXB",
        currency: "INR",
        quantity: "3",
        unit: "20’STD",
        unitPrice: " 35000.00",
        amount: 10000.0,
      },
      {
        description: "Weighment Charges - Inbound",
        sacCode: "996729",
        taxableOrNot: "TXB",
        currency: "INR",
        quantity: "3",
        unit: "20’STD",
        unitPrice: " 35000.00",
        amount: 10000.0,
      },
      {
        description: "Weighment Charges - Inbound",
        sacCode: "996729",
        taxableOrNot: "NTX",
        currency: "INR",
        quantity: "3",
        unit: "20’STD",
        unitPrice: " 35000.00",
        amount: 10000.0,
      },
    ],
    bankName: "ICICI BANK LIMITED",
    paymentInstruction:
      "All payments must be made via NEFT or RTGS only. No other modes of payment will be accepted.",
    notes:
      "Payment not settled as per agreed terms will attract interest @ 18% p.a This is a computer generated document, signature not required.",
    panNo: "AARCM5896Q",
    gstin: "29AARCM5896Q1Z9",
    containerNumbers: [
      "MSCU1234567",
      "TGHU8765432",
      "CAIU1122334",
      "SEGU9988776",
      "ECMU4455661",
      "OOLU7654321",
      "APZU3344552",
    ],
  });

  const taxable = () => {
    return data.tableDetails.reduce((acc, item) => {
      return item.taxableOrNot.toLowerCase() === "txb"
        ? acc + Number(item.amount)
        : acc;
    }, 0);
  };

  const nonTaxable = () => {
    return data.tableDetails.reduce((acc, item) => {
      return item.taxableOrNot.toLowerCase() === "ntx"
        ? acc + Number(item.amount)
        : acc;
    }, 0);
  };

  const fetchData = useCallback(() => {
    const createData = (items: any) => {
      const { tableId } = items;
      const updatedData = {
        id: tableId,
        description: (
          <div className="py-1 text-nowrap pe-10">{items.description}</div>
        ),
        sacCode: items?.sacCode,
        taxableOrNot: items?.taxableOrNot,
        currency: items?.currency,
        quantity: items?.quantity,
        unit: items?.unit,
        unitPrice: items?.unitPrice,
        amount: items?.amount,
      };
      return updatedData;
    };

    const arr = data.tableDetails.map((items, index) => {
      return createData({ ...items, id: index });
    });
    setRows(arr);
  }, []);

  const handleTempDataChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setTempData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="bg-grey-aw-50 flex flex-col gap-6 px-8 py-6 rounde-xs shadow-lg">
      <div className="flex justify-end gap-4">
        <NavLink to={`/accounts/invoice-import/update-taxInvoice/${id}/${taxNumber}`}>
          <NeutralBlueButton
            label={"Edit"}
            size={"m"}
            variant={"primary"}
            leftIcon={<EditIcon size={16} color="#ffffff" />}
          />
        </NavLink>
        <div>
          <SuccessButton
            label={"Download"}
            size={"m"}
            variant={"primary"}
            leftIcon={<DownloadIcon size={16} color="#ffffff" />}
          />
        </div>
        <div>
          <ErrorButton
            label={"Delete"}
            size={"m"}
            variant={"primary"}
            leftIcon={<DeleteIcon size={16} color="#ffffff" />}
          />
        </div>
      </div>

      {/* booking */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <AccountsModel
            label={"Booking ID "}
            value={"123dd4545"}
            parentStyle="gap-2"
          />
          <AccountsModel
            label={"Bill of Lading Number "}
            value={"mmi1234501-A"}
            parentStyle="gap-2"
          />
        </div>
        <div className="flex flex-col gap-3">
          <AccountsModel
            label={"Tax Invoice Number "}
            value={"ivn0010012301"}
            parentStyle="gap-2"
          />
          <AccountsModel
            label={"Tax Invoice Date "}
            value={"11-06-2025"}
            parentStyle="gap-2"
          />
        </div>
      </div>

      {/* customer */}
      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold text-grey-ab-800">CUSTOMER</p>
        <p className="text-sm text-grey-ab max-w-[270px]">
          Legend Shipping Agency Private Limited No. 10, Cenotaph Road,
          Teynampet, Chennai – 600018
        </p>
        <AccountsModel label={"GSTIN : "} value={data.customerGSTIN} />
      </div>

      {/* port of loading */}
      <div className="flex flex-col gap-4">
        <div className="grid gap-4 grid-cols-5">
          <AccountsModel
            label={"Port of Loading"}
            value={data.portOfLoading}
            parentStyle="flex-col"
          />
          <AccountsModel
            label={"Port of Discharge"}
            value={data.portOfDischarge}
            parentStyle="flex-col"
          />
          <AccountsModel
            label={"Final Destination"}
            value={data.finalDestination}
            parentStyle="flex-col"
          />
          <AccountsModel label={"Shipping Bill No"} value={"3"} parentStyle="flex-col" />
        </div>
        <div className="grid gap-4 grid-cols-5">
          <AccountsModel
            label={"VESSEL "}
            value={data.vesselName}
            parentStyle="flex-col"
          />
          <AccountsModel
            label={"VOYAGE NO"}
            value={data.voyageNumber}
            parentStyle="flex-col"
          />
          <AccountsModel
            label={"BILL OF LADING NO"}
            value={data.shippingBillNumber}
            parentStyle="flex-col"
          />
          <AccountsModel
            label={"EXCHANGE RATE"}
            value={data.exchangeRate}
            parentStyle="flex-col"
          />
          <AccountsModel
            label={"Sailed DATE"}
            value={data.sailedDate}
            parentStyle="flex-col"
          />
        </div>
      </div>

      <div className="border-t border-t-grey-ab-100"></div>

      {/* table with bank details */}
      <div className="flex flex-col gap-2">
        <CustomTable columns={Columns} rows={Rows} isCheckbox={false} />

        <div className="flex justify-between">
          <div className="flex flex-col gap-2 p-3">
            <p className="text-lg font-bold text-grey-ab-800">BANK DETAILS</p>
            <div className="flex flex-col gap-2">
              <AccountsModel
                label={"Beneficiary Name "}
                value={"MAATSON MARITIME INTL OPC PVT LTD"}
                labelStyle="w-[130px]"
              />
              <AccountsModel
                label={"Bank Name"}
                value={data.bankName.toUpperCase()}
                labelStyle="w-[130px]"
              />
              <AccountsModel
                label={"Account No "}
                value={"190205001960"}
                labelStyle="w-[130px]"
              />
              <AccountsModel
                label={"Branch No"}
                value={" MADHAVARAM"}
                labelStyle="w-[130px]"
              />
              <AccountsModel
                label={"IFSC Code No "}
                value={"ICIC0001902"}
                labelStyle="w-[130px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 p-3 ">
            <AccountsModel
              label={"Taxable Amount"}
              value={taxable().toLocaleString("en-IN", {
                maximumFractionDigits: 2,
              })}
              labelStyle="w-[180px]"
            />
            <AccountsModel
              label={"Non - Taxable Amount"}
              value={
                nonTaxable() === 0
                  ? "-"
                  : nonTaxable().toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                    })
              }
              labelStyle="w-[180px]"
            />
            <AccountsModel
              label={"SGST  9%"}
              value={
                data.customerGSTIN.slice(0, 2) === data.gstin.slice(0, 2)
                  ? (taxable() * 0.09).toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                    })
                  : 0
              }
              labelStyle="w-[180px]"
            />
            <AccountsModel
              label={"CGST  9%"}
              value={
                data.customerGSTIN.slice(0, 2) === data.gstin.slice(0, 2)
                  ? (taxable() * 0.09).toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                    })
                  : 0
              }
              labelStyle="w-[180px]"
            />
            <AccountsModel
              label={"IGST 18%"}
              value={
                data.customerGSTIN !== ""
                  ? data.customerGSTIN.slice(0, 2) !== data.gstin.slice(0, 2)
                    ? (taxable() * 0.18).toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                      })
                    : 0
                  : 0
              }
              labelStyle="w-[180px]"
            />
            <div className="flex gap-1 items-center">
              <p className="font-bold text-grey-ab-800 w-[180px]">TOTAL DUE</p>
              <p className="font-bold text-lg text-success-700">
                {data.customerGSTIN !== ""
                  ? (
                      taxable() +
                      nonTaxable() +
                      taxable() * 0.09 +
                      taxable() * 0.09
                    ).toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                    })
                  : (taxable() + nonTaxable()).toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                    })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* container number */}
      <div className="flex flex-col gap-3">
        <p className="text-sm font-bold text-grey-ab-800">Container Number</p>
        <div className="flex gap-4 flex-wrap">
          {data.containerNumbers.map((item, index) => (
            <div
              key={index}
              className="p-2 rounded-xs font-bold text-xs text-grey-ab-800 bg-grey-100 border border-primary shadow-xs"
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* editable part */}
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

      {/* end */}
    </div>
  );
};

export default ViewTaxInvoice;
