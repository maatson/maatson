import React, { ChangeEvent, useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {
  EmailIcon,
  EyeCloseIcon,
  EyeOpenIcon,
  LocationIcon,
  PasswordIcon,
  PhoneIcon,
  RegistrationIcon,
  UserIcon,
} from "../../../components/icons/Icons";
import GroupField from "../../../components/groupField/GroupField";

const EmployeeForm: React.FC = () => {
  const [data, setData] = useState({
    userName: "",
    email: "",
    mobileNo: "",
    password: "",
    confirmPassword: "",
    employee: {
      imagepath: "",
      fullName: "",
      dateofBirth: "",
      gender: "",
      personalEmail: "",
      personalMobileNo: "",
      street: "",
      city: "",
      doorNo: "",
      postalCode: "",
      country: "",
    },
    contactPerson: {
      contactPersonName: "",
      contactPersonEmail: "",
      contactPersonMobileNo: "",
    },
    companyDetails: {
      officeLocation: "",
      joiningDate: "",
      designation: "",
      department: "",
      employeeType: "",
    },
  });
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
    <>
      <div className="w-full rounded-xs py-4 px-8 flex flex-col gap-8 bg-grey-aw-50 shadow-lg">
        {/* heading section */}
        <p className="py-4 px-3 text-lg font-bold text-grey-ab-900 border">
          Employee Form
        </p>

        {/* form section */}
        <div className="flex flex-col gap-8">
          {/* employee registration */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <RegistrationIcon />
                <p className="font-semibold text-grey-ab-800">
                  Employee Registration
                </p>
              </div>
              <div className="border-t border-t-grey-ab-100"></div>
            </div>
            {/* user name */}
            <GroupField
              label={"User Name*"}
              type={"text"}
              placeholder={"Enter User Name"}
              name={"userName"}
              value={data.userName}
              onChange={handleChange}
              error={false}
              errorMessage={""}
              leftIcon={<UserIcon color="#2C398F" />}
              parentStyle="max-w-[400px] w-full"
            />

            {/* email , mobile number */}
            <div className="flex gap-4">
              <GroupField
                label={"Email*"}
                type={"email"}
                placeholder={"Enter Email"}
                name={"email"}
                value={data.email}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                leftIcon={<EmailIcon color="#2C398F" />}
                parentStyle="max-w-[400px] w-full"
              />
              <GroupField
                label={"Mobile Number"}
                type={"text"}
                placeholder={"Enter Mobile Number"}
                name={"mobilenNo"}
                value={data.mobileNo}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                leftIcon={<PhoneIcon color="#2C398F" />}
                parentStyle="max-w-[400px] w-full"
              />
            </div>

            {/* password, confirm password */}
            <div className="flex gap-4">
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
                label={"Password*"}
                placeholder={"Enter Password"}
                parentStyle="max-w-[400px] w-full"
              />
              <GroupField
                label={"Confirm Password"}
                type={eyeIcon === "open" ? "text" : "password"}
                placeholder={"Enter Confirm Password"}
                name={"confirmPassword"}
                value={data.confirmPassword}
                onChange={handleChange}
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
                leftIcon={<PasswordIcon color="#2C398F" />}
                parentStyle="max-w-[400px] w-full"
              />
            </div>
          </div>

          {/* employee information */}
          <div className="flex flex-col gap-6">
            {/* employee information */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex gap-4">
                  <UserIcon />
                  <p className="font-semibold text-grey-ab-800">
                    Employee Information
                  </p>
                </div>
                <div className="border-t border-t-grey-ab-100 flex flex-col gap-3"></div>
              </div>

              <div className="w-[220px] h-[128px] border rounded-xs border-ab-100 py-6 px-4"></div>

              <div className="flex gap-4">
                <GroupField
                  label={"Full Name*"}
                  type={"text"}
                  placeholder={"Enter Full Name"}
                  name={"fullName"}
                  value={data.employee.fullName}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<UserIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
                <GroupField
                  label={"Date of Birth*"}
                  type={"date"}
                  placeholder={"DD/MM/YYYY"}
                  name={"dateofBirth"}
                  value={data.employee.dateofBirth}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  parentStyle="max-w-[400px] w-full"
                />
              </div>
            </div>

            {/* gender */}
            <div className="flex flex-col gap-2">
              <p className="text-grey-ab-600">Gender*</p>
              <div className="flex gap-8">
                <div className="flex gap-3 font-semibold text-grey-ab-800">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    className="w-5 h-5"
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="flex gap-3 font-semibold text-grey-ab-800">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    className="w-5 h-5"
                  />
                  <label htmlFor="female">Female</label>
                </div>
                <div className="flex gap-3 font-semibold text-grey-ab-800">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    className="w-5 h-5"
                  />
                  <label htmlFor="others">Others</label>
                </div>
              </div>
            </div>

            {/* email & mobile number  */}
            <div className="flex gap-4">
              <GroupField
                label={"Personal Email*"}
                type={"email"}
                placeholder={"Enter Email"}
                name={"personalEmail"}
                value={data.employee.personalEmail}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                leftIcon={<EmailIcon color="#2C398F" />}
                parentStyle="max-w-[400px] w-full"
              />
              <GroupField
                label={"Personal Mobile Number*"}
                type={"text"}
                placeholder={"Enter Mobile Number"}
                name={"personalMobileNo"}
                value={data.employee.personalMobileNo}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                leftIcon={<PhoneIcon color="#2C398F" />}
                parentStyle="max-w-[400px] w-full"
              />
            </div>

            {/* address */}
            <div className="flex flex-col gap-4">
              <p className="text-grey-ab-500">Employee Address*</p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-4">
                  <GroupField
                    label={"Street*"}
                    type={"text"}
                    placeholder={"Enter Street"}
                    name={"street"}
                    value={data.employee.street}
                    onChange={handleChange}
                    error={false}
                    errorMessage={""}
                    leftIcon={<LocationIcon color="#2C398F" />}
                    parentStyle="max-w-[400px] w-full"
                  />
                  <GroupField
                    label={"City*"}
                    type={"text"}
                    placeholder={"Enter City"}
                    name={"city"}
                    value={data.employee.city}
                    onChange={handleChange}
                    error={false}
                    errorMessage={""}
                    leftIcon={<LocationIcon color="#2C398F" />}
                    parentStyle="max-w-[400px] w-full"
                  />
                </div>

                {/* 3 input section */}
                <div className="flex gap-4">
                  <GroupField
                    label={"Building/Door Number"}
                    type={"text"}
                    placeholder={"Enter Building/Door Number"}
                    name={"doorNo"}
                    value={data.employee.doorNo}
                    onChange={handleChange}
                    error={false}
                    errorMessage={""}
                    leftIcon={<LocationIcon color="#2C398F" />}
                    parentStyle="max-w-[400px] w-full"
                  />
                  <GroupField
                    label={"Postal Code*"}
                    type={"text"}
                    placeholder={"Enter Postal Code"}
                    name={"postalCode"}
                    value={data.employee.postalCode}
                    onChange={handleChange}
                    error={false}
                    errorMessage={""}
                    leftIcon={<LocationIcon color="#2C398F" />}
                    parentStyle="max-w-[400px] w-full"
                  />
                </div>
                <GroupField
                  label={"Country "}
                  type={"text"}
                  placeholder={"Enter Country"}
                  name={"country"}
                  value={data.employee.country}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<LocationIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
              </div>
            </div>
          </div>

          {/* emergency contact details */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <PhoneIcon />
                <p className="font-semibold text-grey-ab-800">
                  Emergency Contact Details
                </p>
              </div>
              <div className="border-t border-t-grey-ab-100 flex flex-col gap-3"></div>
            </div>

            {/* 2nd */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <GroupField
                  label={"Contact Person Name"}
                  type={"text"}
                  placeholder={"Enter Full Name"}
                  name={"contactPersonName"}
                  value={data.contactPerson.contactPersonName}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<UserIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
                <GroupField
                  label={"Contact Person Email"}
                  type={"email"}
                  placeholder={"Enter Email"}
                  name={"contactPersonEmail"}
                  value={data.contactPerson.contactPersonEmail}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<EmailIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
              </div>
              <GroupField
                label={"Contact Person Mobile Number"}
                type={"text"}
                placeholder={"Enter Mobile Number"}
                name={"contactPersonMobileNo"}
                value={data.contactPerson.contactPersonMobileNo}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                leftIcon={<PhoneIcon color="#2C398F" />}
                parentStyle="max-w-[400px] w-full"
              />
            </div>
          </div>

          {/* company details  */}
          <div></div>

          {/* employee documents */}
          <div></div>
        </div>

        {/* button section */}
        <div className="flex gap-6 justify-end border">
          <PrimaryButton label={"Cancel"} size={"xl"} variant={"outline"} />
          <PrimaryButton
            label={"Save Details"}
            size={"xl"}
            variant={"primary"}
          />
        </div>
      </div>
    </>
  );
};

export default EmployeeForm;
