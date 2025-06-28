import React, { ChangeEvent, useState } from "react";
import GroupField from "../../../../components/groupField/GroupField";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";
import { DocumentIcon } from "../../../../components/icons/Icons";
import GreyButton from "../../../../components/buttons/GreyButton";

interface DataProps {
  id: string | number;
  invoiceCollectStatus: string;
  carrierInvoiceDocument: File | null;
}

interface InvoiceCollectStatusProps {
  onClose: () => void;
  onSave: (data: DataProps) => void;
}
const InvoiceCollectStatus: React.FC<InvoiceCollectStatusProps> = ({
  onClose,
  onSave,
}) => {
  const [data, setData] = useState<DataProps>({
    id: Date.now(),
    invoiceCollectStatus: "",
    carrierInvoiceDocument: null as File | null,
  });

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
    onSave(data);
  };

  return (
    <div className="bg-grey-aw-50 rounded-sm flex flex-col gap-6 p-4 shadow-lg max-w-[380px] w-full">
      <p className="text-h6 font-bold text-grey-ab-800 ">
        Invoice Collect Details
      </p>

      <div className="flex flex-col gap-4">
        <GroupField
          label={"Invoice Collected Status"}
          type={"select"}
          placeholder={""}
          name={"invoiceCollectStatus"}
          value={data.invoiceCollectStatus}
          options={[
            { value: "Collected", label: "Collected" },
            { value: "Pending", label: "Pending" },
          ]}
          onChange={handleChange}
          error={false}
          errorMessage={""}
        />

        <div className="flex flex-col gap-3 ">
          <p className="text-xs font-bold text-grey-ab-900">Carrier Invoice </p>
          <div className="p-4  flex flex-col gap-4 bg-grey-ab-50 border border-dashed border-grey-ab-100 rounded-sm items-center">
            <div>
              <DocumentIcon />
            </div>
            <div className="flex flex-col gap-1 text-grey-ab-400 text-sm items-center">
              <p>Drag and Drop to Upload Carrier Invoice</p>
              <GreyButton
                label={"Browse"}
                size={"s"}
                variant={"primary"}
                style="w-fit"
              />
            </div>
            <p className="text-2xs text-grey-ab-300 text-center">
              Please ensure your file is under 1 MB to upload it successfully.
              Supported formats include DOCX, TXT, PDF, JPEG
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-6 ">
        <div onClick={onClose} className="w-full">
          <PrimaryButton
            label={"Cancel"}
            size={"l"}
            variant={"link"}
            style="w-full"
          />
        </div>
        <div onClick={handleSave} className="w-full">
          <PrimaryButton
            label={"Update"}
            size={"l"}
            variant={"primary"}
            style="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceCollectStatus;
