import React, { ChangeEvent, useEffect, useState } from "react";
import Logo from "/images/logo.svg";
import ShippingImage from "/images/shipping.png";
import GroupField from "../../../components/groupField/GroupField";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {
  DepartmentIcon,
  EyeOpenIcon,
  PasswordIcon,
  UserIcon,
} from "../../../components/icons/Icons";

const Loginw: React.FC = () => {
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
      <div className="w-full flex  ">
        <div className="w-full flex bg-primary-gradient-6 px-10">
          <div className="flex flex-col gap-6 p-8 w-full justify-start items-center">
            <div className="flex max-w-[320px]">
              <img src={ShippingImage} alt="shippingImage" />
            </div>
            <div className="flex w-full flex-col gap-3 justify-center ">
              <h5 className="font-bold h5 text-grey-aw-50">
                Maatson Maritime Intl (OPC) Pvt Ltd
              </h5>
              <h2 className="font-bold h2 text-secondary">
                Seamless Operations, Stronger Teamwork
              </h2>
            </div>
            <h6 className="h6 text-grey-aw-50">
              Welcome to the Maatson Maritime Employee Portal. This platform is
              designed to help our team efficiently manage logistics, track
              container operations, and streamline internal workflows.
            </h6>
          </div>
        </div>
        {/* login  */}
        <div className="w-full flex flex-col px-20 py-10 items-center justify-center">
          <div className="flex flex-col gap-6 items-center justify-center py-14 px-10 border rounded-sm max-w-[480px] w-full border-grey-300 shadow-xs">
            <div className="flex flex-col gap-4 ">
              <div className="flex justify-center">
                <img src={Logo} alt="logo" />
              </div>
              <h3 className="font-bold h3 text-secondary">Welcome Back</h3>
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
                error={false}
                errorMessage={""}
              />
            </div>
            <div className="flex justify-end w-full">
              <div className="text-secondary font-semibold">
                Forgot Password
              </div>
            </div>
            <div className="flex w-full">
              <PrimaryButton  
                label={"Login"}
                size={"xl"}
                variant={"primary"}
                style="w-full"
                
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Loginw;
