import React, { ChangeEvent, useState } from "react";
import Logo from "/images/logo.svg";
import GroupField from "../groupField/GroupField";
import PrimaryButton from "../buttons/PrimaryButton";
import { PasswordIcon, EyeOpenIcon, EyeCloseIcon } from "../icons/Icons";

const ResetPassword: React.FC = () => {
  const [data, setData] = useState({ password: "", confirmPassword: "" });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };
  const [eyeIcon, setEyeIcon] = useState("close");
  const handleEyeIconClick = () => {
    if (eyeIcon === "open") {
      setEyeIcon("close");
    }
    if (eyeIcon === "close") {
      setEyeIcon("open");
    }
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
            Reset Password
          </h5>
        </div>
        {/* sub title */}
        <p className="text-center text-grey-ab-300 text-base">
          Your new password must be different from previous used passwords.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <GroupField
          type={eyeIcon === "open" ? "text" : "password"}
          name={"password"}
          value={data.password}
          onChange={handleChange}
          leftIcon={<PasswordIcon color="#2C398F" />}
          rightIcon={
            eyeIcon === "open" ? (
              <EyeOpenIcon color="#2C398F" />
            ) : (
              <EyeCloseIcon color="#2C398F" />
            )
          }
          onClickRightIcon={handleEyeIconClick}
          error={false}
          errorMessage={""}
          label={"Password"}
          placeholder={"Enter Password"}
        />
        <GroupField
          type={eyeIcon === "open" ? "text" : "password"}
          name={"confirmPassword"}
          value={data.confirmPassword}
          onChange={handleChange}
          leftIcon={<PasswordIcon color="#2C398F" />}
          rightIcon={
            eyeIcon === "open" ? (
              <EyeOpenIcon color="#2C398F" />
            ) : (
              <EyeCloseIcon color="#2C398F" />
            )
          }
          onClickRightIcon={handleEyeIconClick}
          error={false}
          errorMessage={""}
          label={"Confirm Password"}
          placeholder={"Enter Confirm Password"}
        />
      </div>
      <PrimaryButton label={"Submit"} size={"l"} variant={"primary"} />
    </div>
  );
};

export default ResetPassword;
