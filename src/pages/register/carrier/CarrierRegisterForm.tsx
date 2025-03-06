import React, { ChangeEvent, useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { NavLink } from "react-router-dom";
import {
  AccountDetailIcon,
  BusinessIcon,
  CalenderIcon,
  CategoryIcon,
  CodeIcon,
  CompanyIcon,
  DepartmentIcon,
  DocumentIcon,
  EmailIcon,
  FileIcon,
  FreightIcon,
  GlobalIcon,
  InvoiceIcon,
  LocationIcon,
  PhoneIcon,
  PriceTagIcon,
  UrlIcon,
  UserIcon,
} from "../../../components/icons/Icons";
import ImageUpload from "../../../components/imageUpload/ImageUpload";
import GroupField from "../../../components/groupField/GroupField";
import FileUpload from "../../../components/fileUpload/FileUpload";

const CarrierRegisterForm: React.FC = () => {
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
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFileChange = (name: "employeeResume", file: File | null) => {
    setData((prevData) => ({
      ...prevData,
      [name]: file,
    }));
  };
  const handleImageChange = (file: File | null) => {
    setData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleRegister = () => {};
  return (
    <>
      <div className="py-4 px-3 rounded-xs flex flex-col gap-8 bg-grey-aw-50 shadow-lg">
        <div className="py-4 px-3 text-lg font-semibold text-grey-ab-900">
          Registration
        </div>
        {/* form section */}
        <div className="px-5 flex flex-col gap-8">
          {/* company details */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <CompanyIcon />
                <p className="font-semibold text-grey-ab-800">
                  Company Details
                </p>
              </div>
              <div className="border-t border-t-grey-ab-100"></div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-grey-ab">Company Logo*</p>
              <ImageUpload
                label={"Upload Your Company Logo"}
                onImageChange={function (file: File | null): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>

            <div className="flex flex-col gap-5">
              <GroupField
                label={"Carrier Name*"}
                type={"text"}
                placeholder={"Enter Carrier Name"}
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
                leftIcon={<FreightIcon color="#2C398F" />}
                parentStyle="max-w-[816px] w-full"
              />

              <div className="flex gap-4">
                <GroupField
                  label={"Carrier Code*"}
                  type={"text"}
                  placeholder={"Enter Carrier Code"}
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
                  leftIcon={<CodeIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
                <GroupField
                  label={"Mode of Transport*"}
                  type={"select"}
                  placeholder={"Choose Transport Mode"}
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
                  leftIcon={<FreightIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-grey-ab">Company Address</p>
                <div className="flex flex-col gap-5">
                  <div className="flex gap-4">
                    <GroupField
                      label={"Street*"}
                      type={"text"}
                      placeholder={"Enter Street"}
                      name={"street"}
                      value={data.street}
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
                      value={data.city}
                      onChange={handleChange}
                      error={false}
                      errorMessage={""}
                      leftIcon={<LocationIcon color="#2C398F" />}
                      parentStyle="max-w-[400px] w-full"
                    />
                  </div>
                  <div className="flex gap-[18px]">
                    <GroupField
                      label={"Building/Door Number"}
                      type={"text"}
                      placeholder={"Enter Building/Door Num.."}
                      name={"doorNo"}
                      value={data.doorNo}
                      onChange={handleChange}
                      error={false}
                      errorMessage={""}
                      leftIcon={<LocationIcon color="#2C398F" />}
                      parentStyle="max-w-[260px] w-full"
                    />
                    <GroupField
                      label={"Postal Code*"}
                      type={"text"}
                      placeholder={"Enter Postal Code"}
                      name={"postalCode"}
                      value={data.postalCode}
                      onChange={handleChange}
                      error={false}
                      errorMessage={""}
                      leftIcon={<LocationIcon color="#2C398F" />}
                      parentStyle="max-w-[260px] w-full"
                    />
                    <GroupField
                      label={"Country "}
                      type={"text"}
                      placeholder={"Enter Country"}
                      name={"country"}
                      value={data.country}
                      onChange={handleChange}
                      error={false}
                      errorMessage={""}
                      leftIcon={<LocationIcon color="#2C398F" />}
                      parentStyle="max-w-[260px] w-full"
                    />
                  </div>
                  <GroupField
                    label={"Company Website"}
                    type={"text"}
                    placeholder={"Enter Website"}
                    name={""}
                    value={""}
                    onChange={handleChange}
                    error={false}
                    errorMessage={""}
                    leftIcon={<UrlIcon color="#2C398F" />}
                    parentStyle="max-w-[400px] w-full"
                  />
                </div>
              </div>
              <GroupField
                label={"Services*"}
                type={"creatable"}
                placeholder={""}
                name={""}
                value={""}
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
                leftIcon={<CategoryIcon color="#2C398F"/>}
                options={[
                  { label: "hello", value: "hello" },
                  { label: "bye", value: "bye" },
                ]}
                parentStyle="max-w-[816px] w-full"
              />
            </div>
          </div>

          {/* contact information */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <DepartmentIcon />
                <p className="font-semibold text-grey-ab-800">
                  Contact Information
                </p>
              </div>
              <div className="border-t border-t-grey-ab-100"></div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-4">
                <GroupField
                  label={"Primary Contact Name"}
                  type={"text"}
                  placeholder={"Enter Name"}
                  name={""}
                  value={""}
                  onChange={function (
                    e: ChangeEvent<
                      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                    >
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                  error={false}
                  errorMessage={""}
                  leftIcon={<UserIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
                <GroupField
                  label={"Department"}
                  type={"select"}
                  placeholder={"Enter Department"}
                  name={""}
                  value={""}
                  onChange={function (
                    e: ChangeEvent<
                      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                    >
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                  error={false}
                  errorMessage={""}
                  leftIcon={<DepartmentIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
              </div>
              <div className="flex gap-4">
                <GroupField
                  label={"Email*"}
                  type={"text"}
                  placeholder={"Enter Email"}
                  name={""}
                  value={""}
                  onChange={function (
                    e: ChangeEvent<
                      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                    >
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                  error={false}
                  errorMessage={""}
                  leftIcon={<EmailIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
                <GroupField
                  label={"Mobile Number*"}
                  type={"text"}
                  placeholder={"Enter Mobile Number"}
                  name={""}
                  value={""}
                  onChange={function (
                    e: ChangeEvent<
                      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                    >
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                  error={false}
                  errorMessage={""}
                  leftIcon={<PhoneIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
              </div>
              <div className="flex gap-4">
                <GroupField
                  label={"Alternative Contact"}
                  type={"text"}
                  placeholder={"Enter Mobile Number"}
                  name={""}
                  value={""}
                  onChange={function (
                    e: ChangeEvent<
                      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                    >
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                  error={false}
                  errorMessage={""}
                  leftIcon={<PhoneIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
                <GroupField
                  label={"Country of Operation*"}
                  type={"text"}
                  placeholder={"Enter Country"}
                  name={""}
                  value={""}
                  onChange={function (
                    e: ChangeEvent<
                      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                    >
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                  error={false}
                  errorMessage={""}
                  leftIcon={<LocationIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
              </div>
            </div>
          </div>

          {/* busiess operation */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <BusinessIcon />
                <p className="font-semibold text-grey-ab-800">
                  Bussiness Operations
                </p>
              </div>
              <div className="border-t border-t-grey-ab-100"></div>
            </div>

            <div className="flex gap-4">
              <GroupField
                label={"Regions Served*"}
                type={"creatable"}
                placeholder={""}
                name={""}
                value={""}
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
                leftIcon={<GlobalIcon color="#2C398F" />}
                options={[
                  { label: "hello", value: "hello" },
                  { label: "bye", value: "bye" },
                ]}
                parentStyle="max-w-[400px] w-full"
              />
              <GroupField
                label={"Operational Since*"}
                type={"text"}
                placeholder={"Enter Year"}
                name={""}
                value={""}
                onChange={function (
                  e: ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                leftIcon={<CalenderIcon color="#2C398F" />}
                parentStyle="max-w-[400px] w-full"
              />
            </div>
          </div>

          {/* certificaitons */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <DocumentIcon />
                <p className="font-semibold text-grey-ab-800">
                  Certifications & Compliance
                </p>
              </div>
              <div className="border-t border-t-grey-ab-100"></div>
            </div>

            <div className="flex flex-col gap-5">
              <GroupField
                label={"Business License Number*"}
                type={"text"}
                placeholder={"Enter License Number"}
                name={""}
                value={""}
                onChange={function (
                  e: ChangeEvent<
                    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                  >
                ): void {
                  throw new Error("Function not implemented.");
                }}
                error={false}
                errorMessage={""}
                leftIcon={<AccountDetailIcon color="#2C398F" />}
                parentStyle="max-w-[400px] w-full"
              />
              {/* regulatory approval */}
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-grey-ab">
                  Regulatory Approvals*
                </p>
                <div className="flex gap-8 px-4">
                  <div className="flex gap-6 text-lg text-grey-ab-800 items-center">
                    <input type="checkbox" name="" id="" className="w-5 h-5" />
                    <label htmlFor="">IATA</label>
                  </div>
                  <div className="flex gap-6 text-lg text-grey-ab-800 items-center">
                    <input type="checkbox" name="" id="" className="w-5 h-5" />
                    <label htmlFor="">FMC</label>
                  </div>
                  <div className="flex gap-6 text-lg text-grey-ab-800 items-center">
                    <input type="checkbox" name="" id="" className="w-5 h-5" />
                    <label htmlFor="">IMO</label>
                  </div>
                  <div className="flex gap-6 text-lg text-grey-ab-800 items-center">
                    <input type="checkbox" name="" id="" className="w-5 h-5" />
                    <label htmlFor="">DOT</label>
                  </div>
                  <div className="flex gap-6 text-lg text-grey-ab-800 items-center">
                    <input type="checkbox" name="" id="" className="w-5 h-5" />
                    <label htmlFor="">Local Transport Authority</label>
                  </div>
                </div>
              </div>

              {/* iso certification */}
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-grey-ab">
                  Regulatory Approvals*
                </p>
                <div className="flex gap-8 px-4">
                  <div className="flex gap-6 text-lg text-grey-ab-800 items-center">
                    <input type="checkbox" name="" id="" className="w-5 h-5" />
                    <label htmlFor="">ISO 9001</label>
                  </div>
                  <div className="flex gap-6 text-lg text-grey-ab-800 items-center">
                    <input type="checkbox" name="" id="" className="w-5 h-5" />
                    <label htmlFor="">ISO 14001</label>
                  </div>
                  <div className="flex gap-6 text-lg text-grey-ab-800 items-center">
                    <input type="checkbox" name="" id="" className="w-5 h-5" />
                    <label htmlFor="">ISO 28000</label>
                  </div>
                </div>
              </div>

              {/* business certify */}
              <FileUpload
                label={"Business Registration Certificate*"}
                parentStyle="max-w-[816px] w-full"
                onFileChange={function (file: File | null): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>
          </div>

          {/* payment */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <PriceTagIcon />
                <p className="font-semibold text-grey-ab-800">
                  Payment & Legal Information
                </p>
              </div>
              <div className="border-t border-t-grey-ab-100"></div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-4">
                <GroupField
                  label={"Tax Identification Number (TIN)*"}
                  type={"text"}
                  placeholder={"Enter TIN Number"}
                  name={""}
                  value={""}
                  onChange={function (
                    e: ChangeEvent<
                      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                    >
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                  error={false}
                  errorMessage={""}
                  leftIcon={<PhoneIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
                <GroupField
                  label={"Payment Terms*"}
                  type={"select"}
                  placeholder={"Choose Payment Terms"}
                  name={""}
                  value={""}
                  onChange={function (
                    e: ChangeEvent<
                      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
                    >
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                  error={false}
                  errorMessage={""}
                  leftIcon={<InvoiceIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
              </div>
              <FileUpload
                label={"Tax compliance certificate*"}
                parentStyle="max-w-[816px] w-full"
                onFileChange={function (file: File | null): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>
          </div>
        </div>
        {/* form section end */}

        <div className="flex justify-end px-5 gap-8 items-center">
          <NavLink to={"/registration-carrier"}>
            <PrimaryButton label={"Cancel"} size={"xl"} variant={"link"} />
          </NavLink>
          <div onClick={handleRegister}>
            <PrimaryButton label={"Register"} size={"xl"} variant={"primary"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarrierRegisterForm;
