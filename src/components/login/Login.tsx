import React, { ChangeEvent, useState } from "react";
import Logo from "/images/logo.svg";
import GroupField from "../groupField/GroupField";
import PrimaryButton from "../buttons/PrimaryButton";
import {
  UserIcon,
  DepartmentIcon,
  PasswordIcon,
  EyeOpenIcon,
  EyeCloseIcon,
} from "../icons/Icons";
import SecondaryButton from "../buttons/SecondaryButton";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [data, setData] = useState({ name: "", department: "", password: "" });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
    <div className="max-w-[424px] mx-auto p-8 border border-grey-300 shadow-lg w-full rounded-sm flex flex-col gap-2">
      <div className="flex flex-col gap-6 justify-center">
        <div className="mx-auto">
          <img src={Logo} alt="maatson maritime logo" />
        </div>
        <h5 className="h5 font-bold text-center text-secondary">
          Welcome Back
        </h5>
      </div>
      <div className="flex flex-col gap-4">
        <GroupField
          type={"text"}
          name={"name"}
          value={data.name}
          onChange={handleChange}
          leftIcon={<UserIcon color="#2C398F" />}
          error={false}
          errorMessage={""}
          label={"Username/Email"}
          placeholder={"Enter User Name or Email"}
        />
        <GroupField
          type={"select"}
          name={"department"}
          value={data.department}
          onChange={handleChange}
          leftIcon={<DepartmentIcon color="#2C398F" />}
          error={false}
          errorMessage={""}
          label={"Department"}
          placeholder={"Choose Department"}
        />
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
      </div>

      <Link to={"/forgot-password"} className="flex  justify-end py-2">
        <SecondaryButton
          label={"Forgot Password ?"}
          size={""}
          variant={"link"}
          style="px-0 py-0"
        ></SecondaryButton>
      </Link>
      <PrimaryButton label={"Login"} size={"l"} variant={"primary"} />
    </div>
  );
};

export default Login;
