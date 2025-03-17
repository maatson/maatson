import React, { ChangeEvent, useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { NavLink } from "react-router-dom";
import {
  AccountDetailIcon,
  BusinessIcon,
  CategoryIcon,
  CodeIcon,
  CompanyIcon,
  DepartmentIcon,
  DocumentIcon,
  EmailIcon,
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

interface data {
  companyLogo: File | null;
  carrierName: string;
  carrierCode: string;
  modeOfTransport: string;
  doorNumber: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  companyWebsite: string;
  contactPersonName: string;
  services: string[];
  primaryContactName: string;
  department: string;
  email: string;
  mobileNumber: string;
  alternativeContact: string;
  countryOfOperation: string;
  regionsServed: string[];
  operationalSince: string;
  businessLicenseNumber: string;
  regulatoryApprovals: string[];
  isoCertifications: string[];
  businessRegistrationCertificate: File | null;
  taxIdentificationNumber: string;
  paymentTerms: string;
  taxComplianceCertificate: File | null;
}

const CarrierRegisterForm: React.FC = () => {
  const [data, setData] = useState<data>({
    companyLogo: null as File | null,
    // image: null as File | null,
    carrierName: "",
    carrierCode: "",
    modeOfTransport: "",
    doorNumber: "",
    street: "",
    city: "",
    postalCode: "",
    country: "",
    companyWebsite: "",
    contactPersonName: "",
    services: [], //array
    primaryContactName: "",
    department: "",
    email: "",
    mobileNumber: "",
    alternativeContact: "",
    countryOfOperation: "",
    regionsServed: [], //array
    operationalSince: "",
    businessLicenseNumber: "",
    regulatoryApprovals: [],
    isoCertifications: [],
    businessRegistrationCertificate: null as File | null,
    taxIdentificationNumber: "",
    paymentTerms: "",
    taxComplianceCertificate: null as File | null,
    // employeeResume: null as File | null,
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFileChange = (
    name: "businessRegistrationCertificate" | "taxComplianceCertificate",
    file: File | null
  ) => {
    setData((prevData) => ({
      ...prevData,
      [name]: file,
    }));
  };
  const handleImageChange = (file: File | null) => {
    setData((prevData) => ({
      ...prevData,
      companyLogo: file,
      // image: file,
    }));
  };

  const handleRegister = () => {
    console.log("data : ", data);
  };
  return (
    <>
      <div className="py-4 px-3 rounded-xs flex flex-col gap-6 bg-grey-aw-50 shadow-lg">
        <div className="py-2 px-3 h5 font-semibold text-grey-ab-900">
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
                onImageChange={handleImageChange}
              />
            </div>

            <div className="flex flex-col gap-5">
              <GroupField
                label={"Carrier Name*"}
                type={"text"}
                placeholder={"Enter Carrier Name"}
                name={"carrierName"}
                value={data.carrierName}
                onChange={handleChange}
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
                  name={"carrierCode"}
                  value={data.carrierCode}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<CodeIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
                <GroupField
                  label={"Mode of Transport*"}
                  type={"select"}
                  placeholder={"Choose Transport Mode"}
                  name={"modeOfTransport"}
                  value={data.modeOfTransport}
                  onChange={handleChange}
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
                      label={"Building/Door Number*"}
                      type={"text"}
                      placeholder={"Enter Building/Door Num.."}
                      name={"doorNo"}
                      value={data.doorNumber}
                      onChange={handleChange}
                      error={false}
                      errorMessage={""}
                      leftIcon={<LocationIcon color="#2C398F" />}
                      parentStyle="max-w-[400px] w-full"
                    />
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
                  </div>
                  <div className="flex gap-[18px]">
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
                    name={"companyWebsite"}
                    value={data.companyWebsite}
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
                name={"services"}
                value={data.services}
                onChange={handleChange}
                error={false}
                isMulti
                errorMessage={""}
                leftIcon={<CategoryIcon color="#2C398F" />}
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
                  label={"Primary Contact Name*"}
                  type={"text"}
                  placeholder={"Enter Name"}
                  name={"primaryContactName"}
                  value={data.primaryContactName}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<UserIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
                <GroupField
                  label={"Department"}
                  type={"select"}
                  placeholder={"Enter Department"}
                  name={"department"}
                  value={data.department}
                  onChange={handleChange}
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
                  name={"email"}
                  value={data.email}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<EmailIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
                <GroupField
                  label={"Mobile Number*"}
                  type={"text"}
                  placeholder={"Enter Mobile Number"}
                  name={"mobileNumber"}
                  value={data.mobileNumber}
                  onChange={handleChange}
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
                  name={"alternativeContact"}
                  value={data.alternativeContact}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<PhoneIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
                <GroupField
                  label={"Country of Operation*"}
                  type={"text"}
                  placeholder={"Enter Country"}
                  name={"countryOfOperation"}
                  value={data.countryOfOperation}
                  onChange={handleChange}
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
                type={"select"}
                placeholder={""}
                name={"regionsServed"}
                value={data.regionsServed}
                onChange={handleChange}
                error={false}
                isMulti
                options={[
                  { label: "hello", value: "hello" },
                  { label: "bye", value: "bye" },
                ]}
                errorMessage={""}
                leftIcon={<GlobalIcon color="#2C398F" />}
                parentStyle="max-w-[400px] w-full"
              />
              <GroupField
                label={"Operational Since*"}
                type={"date"}
                placeholder={"Enter Year"}
                name={"operationalSince"}
                value={data.operationalSince}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                // leftIcon={<CalenderIcon color="#2C398F" />}
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
                name={"businessLicenseNumber"}
                value={data.businessLicenseNumber}
                onChange={handleChange}
                error={false}
                errorMessage={""}
                leftIcon={<AccountDetailIcon color="#2C398F" />}
                parentStyle="max-w-[400px] w-full"
              />
              {/* regulatory approval */}
              {/* <div className="flex flex-col gap-2">
                <p className="font-semibold text-grey-ab">
                  Regulatory Approvals
                </p>
                <div className="flex gap-8 px-4">
                  <div className="flex gap-6 text-lg text-grey-ab-800 items-center">
                    <input
                      type="checkbox"
                      name="iata"
                      id="iata"
                      className="w-5 h-5"
                    />
                    <label htmlFor="iata">IATA</label>
                  </div>
                  <div className="flex gap-6 text-lg text-grey-ab-800 items-center">
                    <input
                      type="checkbox"
                      name="fmc"
                      id="fmc"
                      className="w-5 h-5"
                    />
                    <label htmlFor="fmc">FMC</label>
                  </div>
                  <div className="flex gap-6 text-lg text-grey-ab-800 items-center">
                    <input
                      type="checkbox"
                      name="imo"
                      id="imo"
                      className="w-5 h-5"
                    />
                    <label htmlFor="imo">IMO</label>
                  </div>
                  <div className="flex gap-6 text-lg text-grey-ab-800 items-center">
                    <input
                      type="checkbox"
                      name="dot"
                      id="dot"
                      className="w-5 h-5"
                    />
                    <label htmlFor="dot">DOT</label>
                  </div>
                  <div className="flex gap-6 text-lg text-grey-ab-800 items-center">
                    <input
                      type="checkbox"
                      name="localTransport"
                      id="localTransport"
                      className="w-5 h-5"
                    />
                    <label htmlFor="localTransport">
                      Local Transport Authority
                    </label>
                  </div>
                </div>
              </div> */}

              {/* Regulatory Approvals */}
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-grey-ab">
                  Regulatory Approvals
                </p>
                <div className="flex gap-8 px-4">
                  {[
                    "IATA",
                    "FMC",
                    "IMO",
                    "DOT",
                    "Local Transport Authority",
                  ].map((approval) => (
                    <div
                      key={approval}
                      className="flex gap-6 text-lg text-grey-ab-800 items-center"
                    >
                      <input
                        type="checkbox"
                        name="regulatoryApprovals"
                        id={approval}
                        className="w-5 h-5"
                        checked={data.regulatoryApprovals.includes(approval)}
                        onChange={(e) => {
                          setData((prevData) => ({
                            ...prevData,
                            regulatoryApprovals: e.target.checked
                              ? [...prevData.regulatoryApprovals, approval] // Add to array
                              : prevData.regulatoryApprovals.filter(
                                  (item) => item !== approval
                                ), // Remove from array
                          }));
                        }}
                      />
                      <label htmlFor={approval}>{approval}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* iso certification */}
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-grey-ab">ISO Certifications</p>
                <div className="flex gap-8 px-4">
                  {["ISO 9001", "ISO 14001", "ISO 28000"].map(
                    (certifications) => (
                      <div
                        key={certifications}
                        className="flex gap-6 text-lg text-grey-ab-800 items-center"
                      >
                        <input
                          type="checkbox"
                          name="isoCertifications"
                          id={certifications}
                          className="w-5 h-5"
                          checked={data.isoCertifications.includes(
                            certifications
                          )}
                          onChange={(e) => {
                            setData((prevData) => ({
                              ...prevData,
                              isoCertifications: e.target.checked
                                ? [
                                    ...prevData.isoCertifications,
                                    certifications,
                                  ] // Add to array
                                : prevData.isoCertifications.filter(
                                    (item) => item !== certifications
                                  ), // Remove from array
                            }));
                          }}
                        />
                        <label htmlFor={certifications}>{certifications}</label>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* business certify */}
              <FileUpload
                label={"Business Registration Certificate*"}
                parentStyle="max-w-[816px] w-full"
                onFileChange={(file) =>
                  handleFileChange("businessRegistrationCertificate", file)
                }
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
                  name={"taxIdentificationNumber"}
                  value={data.taxIdentificationNumber}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<PhoneIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
                <GroupField
                  label={"Payment Terms*"}
                  type={"select"}
                  placeholder={"Choose Payment Terms"}
                  name={"paymentTerms"}
                  value={data.paymentTerms}
                  onChange={handleChange}
                  error={false}
                  errorMessage={""}
                  leftIcon={<InvoiceIcon color="#2C398F" />}
                  parentStyle="max-w-[400px] w-full"
                />
              </div>
              <FileUpload
                label={"Tax compliance certificate*"}
                parentStyle="max-w-[816px] w-full"
                onFileChange={(file) =>
                  handleFileChange("taxComplianceCertificate", file)
                }
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
