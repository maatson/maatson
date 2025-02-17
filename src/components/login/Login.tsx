import React from "react";
import Logo from "/images/logo.svg";
import GroupField from "../groupField/GroupField";
import PrimaryButton from "../buttons/PrimaryButton";

const Login: React.FC = () => {
  const handleChange = () => {};
  return (
    <div className="max-w-[480px]  mx-auto px-10 py-14 shadow-sm w-full rounded-sm flex flex-col gap-6 ">
      {" "}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 justify-center">
          <div className="mx-auto">
            <img src={Logo} alt="maatson maritime logo" />
          </div>
          <h2 className="text-h3 font-semibold text-center text-secondary">
            Welcome Back
          </h2>
        </div>
        <div className="flex gap-4 flex-col">
          <GroupField
            type={"text"}
            name={"username"}
            value={""}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            label={"Username/Email"}
            placeholder={"Enter User Name or Email"}
          />
          <GroupField
            type={"select"}
            name={"department"}
            value={""}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            label={"Department"}
            placeholder={"Choose Department"}
          />
          <GroupField
            type={"password"}
            name={"password"}
            value={""}
            onChange={handleChange}
            error={false}
            errorMessage={""}
            label={"Password"}
            placeholder={"Enter Password"}
          />
        </div>
      </div>
      <p className="text-end">
        <button className="text-secondary font-semibold">
          Forgot Password ?
        </button>
      </p>
      <PrimaryButton label={"Login"} size={"xl"} variant={"primary"} />
    </div>
  );
};

export default Login;
