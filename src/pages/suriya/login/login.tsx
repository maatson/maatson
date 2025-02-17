import React, { ChangeEvent, useEffect, useState } from "react";
import Logo from "../../../../public/logo/logo.png";
import GroupField from "../../../components/groupField/GroupField";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {
  DepartmentIcon,
  EyeOpenIcon,
  PasswordIcon,
  UserIcon,
} from "../../../components/icons/Icons";

const Login: React.FC = () => {
  const [data, setData] = useState({ name: "", department: "", password: "" }); //Add checkbox
  const handlechange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <div className="flex flex-col gap-8 items-center justify-center py-14 px-10 border rounded-sm border-grey-300">
        <div className="flex flex-col gap-4 ">
          <div className="flex ">
            <img src={Logo} alt="logo" />
          </div>
          {/* Set heading as font roboto */}
          <h3 className="font-bold text-h3 text-secondary">Welcome Back</h3>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <GroupField
            type={"text"}
            name={"name"}
            value={data.name}
            label={"User Name/Email"}
            placeholder={"Enter User Name or Email"}
            onChange={handlechange}
            leftIcon={<UserIcon color="#2C398F" />}
            error={false}
            errorMessage={""}
          />
          <GroupField
            type={"select"}
            name={"department"}
            label={"Department"}
            value={data.department}
            placeholder="Choose Department"
            onChange={handlechange}
            leftIcon={<DepartmentIcon color="#2C398F" />}
            error={false}
            errorMessage={""}
            options={[
              { label: "USA", value: "usa" },
              { label: "Canada", value: "canada" },
              { label: "Mexico", value: "mexico" },
            ]}
          />
          <GroupField
            type={"text"}
            name={"password"}
            value={data.password}
            label={"Password"}
            placeholder={"Enter Password"}
            onChange={handlechange}
            leftIcon={<PasswordIcon color="#2C398F" />}
            rightIcon={<EyeOpenIcon color="#2C398F" />}
            error={true}
            errorMessage={
              "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
            }
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex gap-6">
            <div className="h-full">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="h-full w-6 border border-grey-ab-200 rounded-xs"
              />
            </div>
            <span className="text-grey-ab-800 text-base">Remember me</span>
          </div>
          <div className="text-secondary font-semibold">Forgot Password</div>
        </div>
        <div className="flex w-full">
            <PrimaryButton label={"Login"} size={"xl"} variant={"primary"} style="w-full" />
        </div>
      </div>
    </>
  );
};
export default Login;
