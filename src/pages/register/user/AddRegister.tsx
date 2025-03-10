import React, { useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {
  AccountDetailIcon,
  CategoryIcon,
  CompanyIcon,
  DepartmentIcon,
  DocumentIcon,
  EmailIcon,
  EyeCloseIcon,
  EyeOpenIcon,
  LocationIcon,
  PasswordIcon,
  PhoneIcon,
  UrlIcon,
  UserIcon,
} from "../../../components/icons/Icons";
import ImageUpload from "../../../components/imageUpload/ImageUpload";
import GroupField from "../../../components/groupField/GroupField";
import FileUpload from "../../../components/fileUpload/FileUpload";

const AddRegister: React.FC = () => {
  const [data, setData] = useState({
    userName: "",
    email: "",
    mobileNo: "",
    password: "",
    confirmPassword: "",
    image: null as File | null,
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
    contactPersonName: "",
    contactPersonEmail: "",
    contactPersonMobileNo: "",
    officeLocation: "",
    joiningDate: "",
    designation: "",
    department: "",
    employeeType: "",
    employeeResume: null as File | null,
  });

  const [eyeIcon, setEyeIcon] = useState("close");
  const handleEyeIconClick = () => {
    if (eyeIcon === "open") {
      setEyeIcon("close");
    }
    if (eyeIcon === "close") {
      setEyeIcon("open");
    }
  };

  const handleImageChange = (file: File | null) => {
    setData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };
  const handleFileChange = (name: "employeeResume", file: File | null) => {
    setData((prevData) => ({
      ...prevData,
      [name]: file,
    }));
  };
  return (
    <div className="bg-white rounded flex flex-col gap-6 px-3 py-4 text-grey-ab ">
      <div className="px-3 py-2">
        <p className="text-lg text-grey-ab-900 font-semibold">
          Manual Registration
        </p>
      </div>
      <div className="px-5 flex flex-col gap-8">
        <div className="flex flex-col gap-6 ">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 text-grey-ab-800 font-semibold ">
              <CompanyIcon />
              <p>Company Details</p>
            </div>
            <div className="border-b border-grey-ab-100"></div>
          </div>
          <div className="flex flex-col gap-2">
            <p>Company Logo*</p>
            <ImageUpload
              onImageChange={handleImageChange}
              label={"Upload Your Profile Picture"}
            />
          </div>
          <div className="flex flex-col gap-4 ">
            <GroupField
              label={"Company Name*"}
              type={"text"}
              placeholder={"Enter Company Name"}
              leftIcon={<UserIcon color="#2c398f" />}
              name={"companyName"}
              parentStyle="max-w-[80%]"
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
            />
            <div className="flex flex-col gap-4 max-w-[80%]">
              <p>Company Address</p>
              <div className="gap-3 flex items-center flex-wrap">
                <GroupField
                  label={"Building/Door Number*"}
                  type={"text"}
                  placeholder={"Enter Building/Door Number "}
                  name={""}
                  value={""}
                  leftIcon={<LocationIcon color="#2c398f" />}
                  onChange={function (
                    e: React.ChangeEvent<
                      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                    >
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                  error={false}
                  errorMessage={""}
                  parentStyle="basis-[35%] flex-grow"
                />
                <GroupField
                  label={"Street*"}
                  type={"text"}
                  placeholder={"Enter Street "}
                  name={""}
                  value={""}
                  leftIcon={<LocationIcon color="#2c398f" />}
                  onChange={function (
                    e: React.ChangeEvent<
                      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                    >
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                  error={false}
                  errorMessage={""}
                  parentStyle="basis-[35%] flex-grow"
                />
                <GroupField
                  label={"City*"}
                  type={"text"}
                  placeholder={"Enter City "}
                  leftIcon={<LocationIcon color="#2c398f" />}
                  name={""}
                  value={""}
                  onChange={function (
                    e: React.ChangeEvent<
                      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                    >
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                  error={false}
                  errorMessage={""}
                  parentStyle="basis-[30%] "
                />

                <GroupField
                  label={"Postal Code*"}
                  type={"text"}
                  leftIcon={<LocationIcon color="#2c398f" />}
                  placeholder={"Enter Postal Code"}
                  name={""}
                  value={""}
                  onChange={function (
                    e: React.ChangeEvent<
                      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                    >
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                  error={false}
                  errorMessage={""}
                  parentStyle="basis-[30%] "
                />
                <GroupField
                  label={"Country*"}
                  type={"text"}
                  placeholder={"Enter Country "}
                  leftIcon={<LocationIcon color="#2c398f" />}
                  name={""}
                  value={""}
                  onChange={function (
                    e: React.ChangeEvent<
                      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                    >
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                  error={false}
                  errorMessage={""}
                  parentStyle="basis-[35%] flex-grow"
                />
                <GroupField
                  label={"Company Email*"}
                  type={"email"}
                  placeholder={"Enter Email"}
                  name={""}
                  value={""}
                  onChange={function (
                    e: React.ChangeEvent<
                      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                    >
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                  error={false}
                  errorMessage={""}
                  leftIcon={<EmailIcon color="#2c398f" />}
                  parentStyle="basis-[35%] flex-grow"
                />
                <GroupField
                  label={"Company Phone Number*"}
                  type={"phone"}
                  placeholder={"Enter Phone Number"}
                  name={""}
                  value={""}
                  onChange={function (
                    e: React.ChangeEvent<
                      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                    >
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                  error={false}
                  errorMessage={""}
                  parentStyle="basis-[35%] flex-grow"
                  leftIcon={<PhoneIcon color="#2c398f" />}
                />
              </div>
            </div>
            <GroupField
              label={"Company Website*"}
              type={"url"}
              placeholder={"Enter Website"}
              leftIcon={<UrlIcon color="#2c398f" />}
              name={"Website"}
              parentStyle="max-w-[40%]"
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
            />
            <div className="gap-3 flex flex-col">
              <GroupField
                label={"Business Type*"}
                type={"creatable"}
                placeholder={""}
                name={""}
                value={""}
                leftIcon={<CategoryIcon color="#2c398f" />}
                onChange={function (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  console.log(e.target.value);
                }}
                error={false}
                isMulti
                errorMessage={""}
                options={[
                  { label: "hello", value: "hello" },
                  { label: "bye", value: "bye" },
                ]}
                parentStyle="max-w-[80%]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-[80%]">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 text-grey-ab-800 font-semibold ">
              <AccountDetailIcon />
              <p>Personal Details</p>
            </div>
            <div className="border-b "></div>
          </div>
          <div className="flex gap-6 items-center flex-wrap">
            <GroupField
              label={"Full Name*"}
              type={"text"}
              placeholder={"Enter Name"}
              name={"fullName"}
              leftIcon={<UserIcon color="#2c398f" />}
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              parentStyle="basis-[48%] "
            />
            <GroupField
              label={"User Name*"}
              type={"username"}
              leftIcon={<UserIcon color="#2c398f" />}
              placeholder={"Enter User Name"}
              name={""}
              value={""}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              parentStyle="basis-[48%] "
            />
            <GroupField
              label={"Email*"}
              type={"email"}
              placeholder={"Enter Email"}
              name={""}
              value={""}
              leftIcon={<EmailIcon color="#2c398f" />}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              parentStyle="basis-[48%] "
            />
            <GroupField
              label={"Alternative Email"}
              type={"email"}
              placeholder={"Enter Email"}
              name={""}
              value={""}
              leftIcon={<EmailIcon color="#2c398f" />}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              parentStyle="basis-[48%] "
            />
            <GroupField
              label={"Mobile Number*"}
              type={"phone"}
              placeholder={"Enter Mobile Number"}
              name={""}
              value={""}
              leftIcon={<PhoneIcon color="#2c398f" />}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              parentStyle="basis-[48%] "
            />
            <GroupField
              label={"Department*"}
              type={"text"}
              placeholder={"Enter Department"}
              name={""}
              value={""}
              leftIcon={<DepartmentIcon color="#2c398f" />}
              onChange={function (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                >
              ): void {
                throw new Error("Function not implemented.");
              }}
              error={false}
              errorMessage={""}
              parentStyle="basis-[48%] "
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 text-grey-ab-800 font-semibold ">
              <DocumentIcon />
              <p>Company Document</p>
            </div>
            <div className="border-b border-grey-ab-100"></div>
          </div>
          <div className="max-w-[816px]">
            <FileUpload
              onFileChange={(file) => handleFileChange("employeeResume", file)}
              label={"Company Registration/Incorporation Certificate*"}
              fileName={data.employeeResume?.name}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 text-grey-ab-800 font-semibold ">
              <PasswordIcon />
              <p>Password</p>
            </div>
            <div className="border-b border-grey-ab-100"></div>
          </div>
          <div className="flex  gap-3">
            <GroupField
              type={eyeIcon === "open" ? "text" : "password"}
              name={"password"}
              value={data.password}
              onChange={() => {}}
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
              parentStyle="basis-[40%] "
            />
            <GroupField
              type={eyeIcon === "open" ? "text" : "password"}
              name={"confirmPassword"}
              value={data.confirmPassword}
              onChange={() => {}}
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
              parentStyle="basis-[40%] "
            />
          </div>
        </div>
      </div>
      <div className="p-5 flex gap-8 justify-end">
        <PrimaryButton label={"Cancel"} size={"xl"} variant={"link"} />
        <PrimaryButton label={"Register"} size={"xl"} variant={""} />
      </div>
    </div>
  );
};

export default AddRegister;
