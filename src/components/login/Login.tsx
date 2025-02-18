import React from "react";
import Logo from "/images/logo.svg";
import GroupField from "../groupField/GroupField";
import PrimaryButton from "../buttons/PrimaryButton";

const Login: React.FC = () => {
  const handleChange = () => {};
  return (
    <div className="max-w-[400px]  mx-auto px-8 py-8 shadow-sm w-full rounded-sm flex flex-col gap-2 ">
      {" "}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1 justify-center">
          <div className="mx-auto">
            <img src={Logo} alt="maatson maritime logo" />
          </div>
          <h2 className="h5 font-semibold text-center text-secondary">
            Welcome Back
          </h2>
        </div>
        <div className="flex gap-2 flex-col">
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
      <PrimaryButton label={"Login"} size={"l"} variant={"primary"} />
    </div>
  );
};

export default Login;
