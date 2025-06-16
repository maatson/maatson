import React, { useCallback, useEffect, useState } from "react";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";
import {
  AddIcon,
  DocumentIcon,
  DownloadIcon,
} from "../../../../components/icons/Icons";
import CreateImage from "/images/create.png";
import CustomTable from "../../../../components/table/CustomTable";
import { NavLink, useParams } from "react-router-dom";

interface RowData {
  id: string | number;
  collectionId: string;
  proforma: string;
  companyName: string;
  tdsReceivable: string;
  proformaDate: string;
  proformaAmount: string;
  action: React.ReactNode;
}

const Columns: any[] = [
  { id: "collectionId", label: " Collection ID" },
  { id: "proforma", label: " Proforma" },
  { id: "companyName", label: "Company Name", minWidth: 240 },
  { id: "tdsReceivable", label: "TDS Receivable" },
  { id: "proformaDate", label: " Proforma Date" },
  { id: "proformaAmount", label: " Proforma Amount" },

  {
    id: "action",
    label: "Action",
    align: "center",
  },
];

const Collection: React.FC = () => {
  const [Rows, setRows] = useState<RowData[]>([]);
  const { id } = useParams();

  const data = [
    {
      collectionId: "CD-0030301001",
      proforma: "mmi1234501-A",
      companyName: "HarborLine Exports Pvt. Ltd.",
      tdsReceivable: "1000",
      proformaDate: "11-03-2025",
      proformaAmount: "10,000",
    },
    {
      collectionId: "CD-0030301002",
      proforma: "mmi1234501-B",
      companyName: "HarborLine Exports Pvt. Ltd.",
      tdsReceivable: "100",
      proformaDate: "11-03-2025",
      proformaAmount: "10,000",
    },
  ];

  const fetchData = useCallback(() => {
    const createData = (items: any) => {
      const { id } = items;
      const actions = (
        <div className="px-2 py-1 gap-2 flex justify-center ">
          <NavLink to={`/accounts/invoice-export/view-collection/${id}`}>
            <div className="p-1 rounded-xs bg-grey-ab cursor-pointer">
              <DocumentIcon size={16} color="#ffffff" />
            </div>
          </NavLink>
          <div className="p-1 rounded-xs bg-success-600 cursor-pointer">
            <DownloadIcon size={16} color="#ffffff" />
          </div>
        </div>
      );

      const updatedData = {
        id: id,
        collectionId: items?.collectionId,
        proforma: items?.proforma,
        companyName: items?.companyName,
        tdsReceivable: items?.tdsReceivable,
        proformaDate: items?.proformaDate,
        proformaAmount: items?.proformaAmount,
        action: actions,
      };
      return updatedData;
    };

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
      {data.length === 0 ? (
        <div className="flex flex-col rounded-xs bg-grey-aw-50 shadow-lg">
          <div className="p-3 border-b border-b-grey-ab-50 flex justify-between items-center">
            <p className="text-lg font-bold text-grey-ab-900">
              Collection Slip
            </p>
            <NavLink to={`/accounts/invoice-export/create-collection/${id}`}>
              <PrimaryButton
                label={"Create Collection Slip"}
                size={"m"}
                variant={"primary"}
                leftIcon={<AddIcon size={16} color="#ffffff" />}
              />
            </NavLink>
          </div>

          <div className="mx-auto flex flex-col gap-4 py-4 items-center">
            <div className="flex flex-col gap-6">
              <div className="mx-auto">
                <img src={CreateImage} alt="CreateImage" />
              </div>
              <p className="text-xs text-grey-ab-300">
                Click below to get started and generate a professional
                Collection Slip in seconds.
              </p>
            </div>
            <NavLink to={`/accounts/invoice-export/create-collection/${id}`}>
              <PrimaryButton
                label={"Create Collection Slip"}
                size={"m"}
                variant={"outline"}
                leftIcon={<AddIcon size={16} color="#2C398F" />}
              />
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="flex flex-col rounded-xs bg-grey-aw-50 shadow-lg">
          <div className="p-3 border-b border-b-grey-ab-50 flex justify-between items-center">
            <p className="text-lg font-bold text-grey-ab-900">
              Collection Slip
            </p>
            <NavLink to={`/accounts/invoice-export/create-collection/${id}`}>
              <PrimaryButton
                label={"Create Collection Slip"}
                size={"m"}
                variant={"primary"}
                leftIcon={<AddIcon size={16} color="#ffffff" />}
              />
            </NavLink>
          </div>

          <CustomTable columns={Columns} rows={Rows} isCheckbox={false} />
        </div>
      )}
    </>
  );
};

export default Collection;
