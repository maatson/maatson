import React, { ChangeEvent, useState } from "react";
import Logo from "/images/logo.svg";
import GroupField from "../groupField/GroupField";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { EmailIcon } from "../icons/Icons";

const ForgotPassword: React.FC = () => {
  const [data, setData] = useState({ email: "" });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="max-w-[424px] mx-auto p-8 border border-grey-300 shadow-lg w-full rounded-sm flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        {/* Common head section */}
        <div className="flex flex-col gap-6 justify-center">
          <div className="mx-auto">
            <img src={Logo} alt="maatson maritime logo" />
          </div>
          <h5 className="h5 font-bold text-center text-secondary">
            Forgot Password
          </h5>
        </div>
        {/* sub title */}
        <p className="text-center text-grey-ab-300 text-base">
          Forgot your password? Enter your email to get an OTP and reset it.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <GroupField
          type={"email"}
          name={"email"}
          value={data.email}
          onChange={handleChange}
          leftIcon={<EmailIcon color="#2C398F" />}
          error={false}
          errorMessage={""}
          label={"Email"}
          placeholder={"Enter Email"}
        />
      </div>
      <PrimaryButton label={"Submit"} size={"l"} variant={"primary"} />
      <div className="flex gap-[14px] items-center justify-center">
        <span>Return to</span>
        <SecondaryButton label={"Login"} size={"l"} variant={"link"} />
      </div>
    </div>
  );
};

export default ForgotPassword;
