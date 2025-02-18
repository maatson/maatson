import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Logo from "/images/logo.svg";
import GroupField from "../groupField/GroupField";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import WarningChip from "../chips/WarningChip";
import { EmailIcon } from "../icons/Icons";

const OtpVerification: React.FC = () => {
  const [data, setData] = useState({ email: "" });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChangeOTP = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    // newOtp[index] = value.slice(-1); // Store only last digit
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input field if a digit is entered
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  useEffect(() => {
    console.log(otp);
  }, [otp]);

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };
  return (
    <div className="max-w-[424px] mx-auto p-8  border border-grey-300 shadow-lg w-full rounded-sm flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        {/* Common head section */}
        <div className="flex flex-col gap-6 justify-center">
          <div className="mx-auto">
            <img src={Logo} alt="maatson maritime logo" />
          </div>
          <h5 className="h5 font-bold text-center text-secondary">
            OTP Verification
          </h5>
        </div>
        {/* sub title */}
        <p className="text-center text-grey-ab-300 text-base">
          Enter the OTP sent to ******doe@example.com to verify your account.
        </p>
      </div>
      {/* otp */}
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col gap-3 w-fit">
          <div className="flex gap-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                placeholder="_"
                className="text-center w-12 h-12 placeholder:text-ab-300 shadow-xs rounded-xs bg-grey-50 border border-grey-ab-50 hover:border-grey-ab-100 focus:border-primary text-grey-ab-800 outline-none"
                value={digit}
                maxLength={1}
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleChangeOTP(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "_")}
              />
            ))}
          </div>
          <div className="flex justify-end">
            <WarningChip label={"02:29"} size={"s"} variant={"fill"} />
          </div>
        </div>
      </div>
      {/* otp end */}

      <div className="flex flex-col gap-3">
        <GroupField
          type={"text"}
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
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="flex gap-4 items-center">
          <span className="text-grey-ab-800 text-sm ">Didn't get the OTP?</span>
          <PrimaryButton label={"Resend OTP"} size={"s"} variant={"link"} />
        </div>
        <PrimaryButton
          label={"Verify"}
          size={"l"}
          variant={"primary"}
          style="w-full"
        />
      </div>
      <div className="flex gap-[14px] items-center justify-center">
        <span>Return to</span>
        <SecondaryButton label={"Login"} size={"l"} variant={"link"} />
      </div>
    </div>
  );
};

export default OtpVerification;
