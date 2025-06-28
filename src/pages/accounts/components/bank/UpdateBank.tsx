import React, { ChangeEvent, useState } from "react";
import GroupField from "../../../../components/groupField/GroupField";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";

interface bankAccountsDataProps {
  id: string | number;
  beneficiaryName: string;
  bankName: string;
  accountNo: string;
  branch: string;
  ifscCode: string;
  swiftCode: string;
  iban: string;
  isPrimary: boolean;
  balanceAmount: number;
}

interface UpdateBankFormProps {
  data: bankAccountsDataProps;
  onClose: () => void;
  onSave: (updatedData: bankAccountsDataProps) => void;
}
const UpdateBankForm: React.FC<UpdateBankFormProps> = ({
  data: initialData,
  onClose,
  onSave,
}) => {
  const [data, setData] = useState<bankAccountsDataProps>(initialData);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, isPrimary: e.target.checked }));
  };

  const handleSave = () => {
    onSave(data);
  };

  return (
    <div className="bg-grey-aw-50 rounded-sm flex flex-col gap-6 p-4 shadow-lg max-w-[760px] w-full">
      <p className="text-h6 font-bold text-grey-ab-800 text-center">
        Update Bank Account Details
      </p>

      <div className="flex flex-col gap-4">
        <GroupField
          label={"Beneficiary Name*"}
          type={""}
          placeholder={"Enter Beneficiary Name"}
          name={"beneficiaryName"}
          value={data.beneficiaryName}
          onChange={handleChange}
          error={false}
          errorMessage={""}
          parentStyle="w-full"
        />

        <div className="flex gap-4">
          <GroupField
            label={"Bank Name*"}
            type={""}
            placeholder={"Enter Bank Name"}
            name={"bankName"}
            value={data.bankName}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />
          <GroupField
            label={"Account No*"}
            type={""}
            placeholder={"Enter Account No"}
            name={"accountNo"}
            value={data.accountNo}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />
        </div>

        <div className="flex gap-4">
          <GroupField
            label={"Branch*"}
            type={""}
            placeholder={"Enter Branch"}
            name={"branch"}
            value={data.branch}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />
          <GroupField
            label={"IFSC Code*"}
            type={""}
            placeholder={"Enter IFSC Code"}
            name={"ifscCode"}
            value={data.ifscCode}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />
        </div>

        <div className="flex gap-4">
          <GroupField
            label={"SWIFT Code"}
            type={""}
            placeholder={"Enter SWIFT Code"}
            name={"swiftCode"}
            value={data.swiftCode}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />
          <GroupField
            label={"IBAN "}
            type={""}
            placeholder={"Enter IBAN "}
            name={"iban"}
            value={data.iban}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            parentStyle="w-full"
          />
        </div>

        <div className="flex gap-4 p-2 rounded-xs bg-blue-50 w-full items-center">
          <input
            type="checkbox"
            name="isPrimary"
            id="isPrimary"
            checked={data.isPrimary}
            onChange={handleCheckBox}
            style={{ width: "20px", height: "20px" }}
          />
          <p className="text-sm text-blue-600">
            Mark this bank account as primary for all transactions.
          </p>
        </div>
      </div>

      <div className="flex gap-6 justify-end">
        <div onClick={onClose}>
          <PrimaryButton label={"Cancel"} size={"l"} variant={"link"} />
        </div>
        <div onClick={handleSave}>
          <PrimaryButton
            label={"Save Bank Details"}
            size={"l"}
            variant={"primary"}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateBankForm;
